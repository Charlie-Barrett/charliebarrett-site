# Luxury Modules — Astro site

Converted from the Website Draft Clean HTML drafts on 5 Aug 2026.

## Run locally
    npm install
    npm run dev        # live site at localhost:4321

## Deploy
Push this folder to a GitHub repo, then connect it to Cloudflare Pages (or Vercel).
Build command: `npm run build` — output dir: `dist`. Every branch push gets a preview URL.

## Structure
- `src/layouts/Layout.astro` — shared head (canonical, OG, JSON-LD), nav, footer. Edit nav once, all pages update.
- `src/pages/` — one file per page; folder = URL path (`/products/`, `/spaces/`).
- `src/partials/` — the 8 legacy pages as raw HTML, injected via set:html. Pending proper componentisation.
- `src/styles/global.css` — the shared design system. `styles/pages/*.css` are legacy page styles (contain duplication — cleanup task).
- `src/content/guides/` — empty; the Phase 2 content programme publishes markdown here.
- `public/images/` — all images extracted from base64 / copied from the project folder.
- `public/_redirects` — redirect rules, incl. placeholders for the domain consolidation.

## Pending decisions / work
1. Homepage title/H1 vs SEO spec (brand-only vs "luxury garden rooms") — client call.
2. `site` in astro.config.mjs pending domain consolidation.
3. HubSpot form embeds replace the `#brochure` placeholder links and the book-a-call page form.
4. Legacy partials → native Astro pages (nice-to-have, not blocking).
5. Missing image assets per ../Website Draft Clean/ASSETS-NEEDED.md.
