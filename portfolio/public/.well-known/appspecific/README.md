This folder provides a minimal static response for the Chrome DevTools probe
at `/.well-known/appspecific/com.chrome.devtools.json`.

Why this file exists

- Chrome DevTools (and some extensions) may probe `/.well-known/appspecific/...`
  to discover site-specific DevTools configuration. When developing locally
  the probe can hit your dev server and produce noisy 404s in the terminal.
- The empty JSON file here ensures the probe is served as a static file and
  prevents the router from attempting to match that path.

Contents

- `com.chrome.devtools.json` — minimal JSON object (kept intentionally small).

Notes for maintainers

- If you want to serve configuration to DevTools, place the proper JSON in
  `com.chrome.devtools.json`.
- If you remove this file and still want to avoid the terminal noise, add a
  route or server middleware to return a 204/JSON for `/.well-known/appspecific/*`.
- Last updated: 2025-11-12
