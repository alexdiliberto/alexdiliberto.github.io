#!/usr/bin/env python3
"""Validate generated metadata and assets that are easy to regress."""

from __future__ import annotations

import json
import re
import sys
from html.parser import HTMLParser
from pathlib import Path


class DocumentParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__()
        self.meta: list[dict[str, str | None]] = []
        self.iframes: list[dict[str, str | None]] = []
        self.json_ld: list[dict[str, object]] = []
        self._in_json_ld = False
        self._json_parts: list[str] = []

    def handle_starttag(
        self, tag: str, attrs: list[tuple[str, str | None]]
    ) -> None:
        attributes = dict(attrs)
        if tag == "meta":
            self.meta.append(attributes)
        elif tag == "iframe":
            self.iframes.append(attributes)
        elif tag == "script" and attributes.get("type") == "application/ld+json":
            self._in_json_ld = True
            self._json_parts = []

    def handle_data(self, data: str) -> None:
        if self._in_json_ld:
            self._json_parts.append(data)

    def handle_endtag(self, tag: str) -> None:
        if tag == "script" and self._in_json_ld:
            self.json_ld.append(json.loads("".join(self._json_parts)))
            self._in_json_ld = False


def parse(path: Path) -> DocumentParser:
    parser = DocumentParser()
    parser.feed(path.read_text(encoding="utf-8"))
    return parser


def robots(parser: DocumentParser) -> list[str]:
    return [
        str(item.get("content", "")).lower()
        for item in parser.meta
        if str(item.get("name", "")).lower() == "robots"
    ]


def schema(parser: DocumentParser, schema_type: str) -> dict[str, object]:
    return next(item for item in parser.json_ld if item.get("@type") == schema_type)


def main() -> None:
    if len(sys.argv) != 2:
        raise SystemExit("Usage: check-generated-site.py PUBLIC_DIRECTORY")

    public = Path(sys.argv[1])
    if not (public / "index.html").is_file():
        raise SystemExit(f"Generated homepage not found under {public}")
    if (public / "index.json").exists():
        raise AssertionError("Unused home search index was generated")

    home = parse(public / "index.html")
    profile = schema(home, "ProfilePage")
    person = profile["mainEntity"]
    assert isinstance(person, dict)
    assert person["@type"] == "Person"
    assert person["url"] == "https://alexdiliberto.com/"
    assert person["image"].endswith("/img/avatar/avatar500px.jpg")
    assert person["email"] == "hello@alexdiliberto.com"
    assert all(str(url).startswith("https://") for url in person["sameAs"])

    post = parse(public / "posts/ember-route-hooks-a-complete-look/index.html")
    article = schema(post, "BlogPosting")
    assert article["author"] == {
        "@type": "Person",
        "name": "Alex DiLiberto",
        "url": "https://alexdiliberto.com/",
    }

    for relative_path in ("404.html", "license/index.html"):
        directives = robots(parse(public / relative_path))
        assert any("noindex" in directive for directive in directives), relative_path

    license_page = parse(public / "license/index.html")
    assert not any(item.get("@type") == "BlogPosting" for item in license_page.json_ld)

    iframe_pages = (
        "posts/ember-toggle-all-checkbox/index.html",
        "posts/road-to-ember-2.0-reaction/index.html",
        "posts/spotlight-ember-closure-actions/index.html",
    )
    for relative_path in iframe_pages:
        page = parse(public / relative_path)
        assert page.iframes, relative_path
        assert all(frame.get("title") for frame in page.iframes), relative_path

    image_page = (
        public / "posts/improved-web-font-loading-with-font-events-api/index.html"
    ).read_text(encoding="utf-8")
    assert "1280w" not in image_page
    assert re.search(r"<source type=image/png [^>]*srcset=", image_page)

    emberconf = (
        public / "posts/emberconf-2018-notes/index.html"
    ).read_text(encoding="utf-8")
    assert 'href=https://bit.ly/emberconf' in emberconf

    print("Generated site SEO and performance checks passed.")


if __name__ == "__main__":
    main()
