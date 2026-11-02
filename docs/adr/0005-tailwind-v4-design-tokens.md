# ADR-0005: Tailwind CSS v4 with @theme design tokens

## Status

Accepted

## Context

The design (from FigJam) is an editorial, photo-forward style: warm paper background, near-black ink, a muted gold accent, serif display headings. It needs to be changeable in one place by a non-expert.

## Decision

Style with **Tailwind CSS v4**, defining the palette and fonts once as theme tokens in `app/globals.css` under `@theme` (`paper`, `ink`, `accent`, `font-display`, …), plus small reusable helper classes (`.container-page`, `.eyebrow`, `.prose-post`).

## Consequences

- Semantic utilities (`bg-paper`, `text-accent`) everywhere; a palette change is a one-line edit in `@theme`.
- No component library dependency — components are hand-rolled, so the site owns all its markup (shadcn/ui can be added later without conflicts).
- v4's CSS-first config removes `tailwind.config.js` entirely (PostCSS plugin `@tailwindcss/postcss`).
- **Trade-off:** no Tailwind config file means some tooling expectations differ from v3 tutorials — GUIDE.md documents the actual setup.
