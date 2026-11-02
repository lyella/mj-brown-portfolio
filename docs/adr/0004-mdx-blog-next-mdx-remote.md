# ADR-0004: MDX blog compiled with next-mdx-remote

## Status

Accepted (v5 superseded by v6 — see history)

## Context

The blog needs Markdown authoring with optional embedded React components. Options: `@next/mdx` (static imports only), `contentlayer` (unmaintained at the time), `next-mdx-remote` (reads files from disk, RSC support).

## Decision

Store posts as **`.mdx` files in `content/blog/`**, parsed with **gray-matter** (frontmatter) and compiled with **next-mdx-remote/rsc** (`compileMDX`) in a dynamic route with `generateStaticParams`.

## Consequences

- Posts are plain Markdown files — no CMS needed, versioned in git, editable by anyone (ADR-0003).
- Posts become SSG pages with full SEO metadata and share links.
- **History:** v5.0.0 was blocked by Vercel in November 2026 due to a security vulnerability ("update to 6.0.0 or later"). Upgraded to **next-mdx-remote@6** — API-compatible (`compileMDX` unchanged), no code changes required. Lesson recorded here: Vercel enforces dependency security blocks at deploy time, so keep dependencies current.
