## Purpose

This folder contains the root route helpers used by the router. The router expects these named
exports to be available on the root module (the file `app/root.tsx` re-exports them):

- `links` (Route.LinksFunction) — returns head `<link>` tags
- `Layout` (component) — full HTML document/layout for SSR
- `ErrorBoundary` (component) — route-level error UI

## Files

- `links.ts` — implements and exports `links`
- `Layout.tsx` — implements and exports `Layout`
- `ErrorBoundary.tsx` — implements and exports `ErrorBoundary`
- `README.md` — this file

## Notes

- `app/root.tsx` re-exports these symbols so the router finds them on the root module.
- If you rename or move these files, update `app/root.tsx` accordingly.
- Keep implementations focused on document-level concerns (fonts, meta, scripts). Do not place
  route UI in this folder.

Last updated: 2025-11-12
