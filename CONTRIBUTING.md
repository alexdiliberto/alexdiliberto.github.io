# Contributing to alexdiliberto.github.io

This site runs on **Hugo (Extended)** with the **PaperMod** theme.

## Tool Version Management

This project uses [Mise](https://mise.jdx.dev/) to manage development tool versions for consistency across environments.

### Setup
```bash
# Install Mise (if not already installed)
curl https://mise.run | sh

# Install tools defined in mise.toml
mise install

# Trust the configuration (required once for security)
mise trust
```

### Tool Versions
- **Go**: Version defined in `mise.toml`
- **CI**: Automatically uses same versions via `jdx/mise-action`

### Why this is safer/cleaner
- One source of truth (`mise.toml`) for **both** Go & Hugo.
- No drift between CI and local dev.
- Renovate’s **Mise manager** will bump versions in `mise.toml` for you.


---

## 1. Prerequisites

- [Hugo Extended](https://gohugo.io/getting-started/installing/) v0.151.0+
  ```sh
  hugo version
  ```
- Git


---

## 2. Setup

```sh
git clone git@github.com:alexdiliberto/alexdiliberto.github.io.git
cd alexdiliberto.github.io
```

Run the dev server:

```sh
hugo server --disableFastRender
# Open http://localhost:1313
```

---

## 3. Content model

- **Posts** → `content/posts/<slug>/index.md`
- **Talks index** → `content/talks/_index.md` + `data/talks.yaml`
- **Addons index** → `content/addons/_index.md` + `data/ember_addons.yaml`
- **Static decks/assets** → `static/` (served 1:1, e.g., `/talks/my-deck/`)
- **Pages** (About, License) → `content/<page>.md`
- **Custom CSS** → `assets/css/extended/`
- **Favicons / manifest** → `static/`

---

## 4. Adding a new post

```sh
hugo new posts/my-new-post/index.md
```

Front matter example:

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

Keep assets (images, diagrams, etc.) in the same folder as `index.md`:

```
content/posts/my-new-post/
├── index.md
└── diagram.png
```

Reference with:

```md
![Alt text](diagram.png)
```

Set `draft: false` when ready to publish.

---

## 5. Talks & Addons

**Talks list** → edit `data/talks.yaml`:

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

**Ember addons list** → edit `data/ember_addons.yaml`:

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

## 6. Production build

```sh
hugo --minify
# Output is in ./public
```

---

## 7. Pull requests

1. Create a branch off `main`.
2. Run locally and verify changes.
3. Commit with clear messages (Conventional Commits encouraged):
   - `feat: add talk "All Things Git"`
   - `fix: correct mobile nav wrapping`
4. Push your branch and open a PR.

---

## 8. Style & formatting

- Keep Markdown simple.
- Prefer **page bundles** for posts (assets live with content).
- Custom CSS → `assets/css/extended/`.
- Keep JS minimal.

---

## 9. Licensing

- **Code**: MIT (see [`LICENSE`](./LICENSE))
- **Content**: CC BY 4.0 — see [/license/](/license/)

By contributing, you agree your contributions follow these terms.

---

## 10. Troubleshooting

- Seeing stale content?
  ```sh
  hugo server --disableFastRender --ignoreCache
  ```
- Service worker caching? Ensure `static/sw.js` is removed/unregistered.
- Deck not loading? Check for route conflicts in `content/` and make sure asset paths are **relative** (no leading `/`).

---

Thanks for contributing!