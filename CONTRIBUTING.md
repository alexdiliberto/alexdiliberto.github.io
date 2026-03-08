# Contributing to alexdiliberto.github.io

This site runs on **Hugo (Extended)** with the **PaperMod** theme.

---

# Tool Version Management

This project uses [Mise](https://mise.jdx.dev/) to manage development tool versions for consistency across environments.

## Setup

```bash
# Install Mise (if not already installed)
curl https://mise.run | sh

# Install tools defined in mise.toml
mise install

# Trust the configuration (required once for security)
mise trust
```

## Tool Versions

- **Go**: Version defined in `mise.toml`
- **Hugo**: Version defined in `mise.toml`
- **CI**: Automatically uses same versions via `jdx/mise-action`

## Why this is safer/cleaner

- One source of truth (`mise.toml`) for **both** Go & Hugo.
- No drift between CI and local dev.
- Renovate’s **Mise manager** will bump versions in `mise.toml` for you.

---

# 1. Prerequisites

- [Hugo Extended](https://gohugo.io/getting-started/installing/)
- Git
- [Mise](https://mise.jdx.dev/)

---

# 2. Setup

```bash
git clone git@github.com:alexdiliberto/alexdiliberto.github.io.git
cd alexdiliberto.github.io
mise install
mise trust
```

Run the dev server:

```bash
hugo server --disableFastRender
```

Open:

```
http://localhost:1313
```

Recommended dev server for content/template work:

```bash
hugo server -D --disableFastRender
```

Flags:

- `-D` includes draft posts
- `--disableFastRender` avoids stale template caching during development

---

# 3. Content model

- **Posts** → `content/posts/<slug>/index.md`
- **Talks index** → `content/talks/_index.md` + `data/talks.yaml`
- **Addons index** → `content/addons/_index.md` + `data/ember_addons.yaml`
- **Static decks/assets** → `static/`
- **Pages** → `content/<page>.md`
- **Custom CSS** → `assets/css/extended/`
- **Favicons / manifest** → `static/`

---

# 4. Adding a new post

```bash
hugo new posts/my-new-post/index.md
```

Example front matter:

```yaml
---
title: "My New Post"
date: 2025-01-01
draft: true
tags: ["ember", "performance"]
categories: ["programming"]
showToc: true
ShowReadingTime: true
---
```

Keep assets in the same folder as `index.md`:

```
content/posts/my-new-post/
├── index.md
└── diagram.png
```

Reference assets with:

```md
![Alt text](diagram.png)
```

Set `draft: false` when ready to publish.

---

# 5. Talks & Addons

## Talks

Edit `data/talks.yaml`:

```yaml
- title: "All Things Git"
  slug: "all-things-git"
  external: true
  weight: 20
```

`content/talks/_index.md`:

```md
---
title: "Talks"
showBreadCrumbs: false
---

{{< talks >}}
```

## Ember Addons

Edit `data/ember_addons.yaml`:

```yaml
- name: ember-filepond
  repo: https://github.com/alexdiliberto/ember-filepond
  docs: https://alexdiliberto.com/ember-filepond
  weight: 20
```

`content/addons/_index.md`:

```md
---
title: "Ember Addons"
showBreadCrumbs: false
---

{{< ember_addons >}}
```

---

# 6. Production build

Run the same build used in CI:

```bash
hugo --minify --gc --enableGitInfo
```

Output will be generated in:

```
./public
```

Flags:

- `--minify` → compress output
- `--gc` → remove unused generated resources
- `--enableGitInfo` → enable git-based metadata

Quick build without cleanup:

```bash
hugo --minify
```

---

# 7. Pull requests

1. Create a branch from `main`
2. Run locally and verify changes
3. Commit with clear messages (Conventional Commits encouraged)

Examples:

```
feat: add talk "All Things Git"
fix: correct mobile nav wrapping
chore: update PaperMod module
```

4. Push your branch and open a PR

---

# 8. Style & formatting

- Keep Markdown simple
- Prefer **page bundles** for posts
- Custom CSS → `assets/css/extended/`
- Keep JavaScript minimal

---

# 9. Project health & maintenance

Run these commands periodically (especially after Renovate PRs, Hugo upgrades, or theme/module errors).

## Quick health check

```bash
mise install
hugo mod tidy
hugo mod verify
hugo --minify --gc --enableGitInfo
```

Purpose:

- ensures correct Go/Hugo versions
- verifies Hugo module integrity
- confirms production build still works

---

## Refresh theme/modules

If CI fails after Hugo or theme updates:

```bash
mise install
hugo mod get -u
hugo mod tidy
hugo --minify --gc --enableGitInfo
```

This refreshes Hugo modules and updates `go.mod` / `go.sum`.

---

## Inspect module versions

```bash
mise ls
hugo mod graph | grep -i papermod
grep 'hugo-PaperMod' go.mod go.sum
```

---

## Deep cleanup

Use if caches or generated assets appear stale:

```bash
hugo mod clean
rm -rf resources/_gen
hugo --minify --gc --enableGitInfo
```

---

## Git housekeeping

Optional cleanup every so often:

```bash
git fetch --prune
git remote prune origin
git gc
```

---

## Notes on `resources/_gen`

This repo tracks files under `resources/_gen`.

These are Hugo-generated image processing artifacts.

Running:

```bash
hugo --minify --gc --enableGitInfo
```

may delete outdated files in this directory.

This is normal and safe to commit if the build succeeds.

---

# 10. Licensing

- **Code**: MIT — see `LICENSE`
- **Content**: CC BY 4.0 — see `/license/`

By contributing, you agree your contributions follow these terms.

---

# 11. Troubleshooting

## Stale content

```bash
hugo server --disableFastRender --ignoreCache
```

## Full rebuild

```bash
hugo mod clean
rm -rf resources/_gen public
hugo --minify --gc --enableGitInfo
```

## Theme/module errors after Hugo upgrade

```bash
mise install
hugo mod get -u
hugo mod tidy
hugo --minify --gc --enableGitInfo
```

## Deck not loading

Check for route conflicts and ensure asset paths are **relative** (no leading `/`).

---

Thanks for contributing!