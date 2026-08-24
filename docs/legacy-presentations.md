# Legacy presentation publishing

The presentations under `static/talks/` are frozen Reveal.js 3.6 artifacts.
They are retained so their existing URLs continue to work, but they are not part
of the Hugo site's active JavaScript toolchain.

Hugo's static mount excludes development-only files from the generated site:

- Node and Bower package manifests
- Yarn lockfiles
- Grunt build configuration
- Reveal.js repository documentation
- Test suites and fixtures

The runtime HTML, JavaScript, CSS, fonts, images, and presentation content remain
published. Renovate intentionally ignores npm dependencies in `static/talks/**`
because upgrading the archived source in place could break the presentations.

When editing this policy, verify both presentations after a production build:

- `/talks/all-things-git/`
- `/talks/extending-ember-with-analytics/`
