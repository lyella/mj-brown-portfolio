# ADR-0001: Use Next.js 15 App Router as the site framework

## Status

Accepted

## Context

The site is a personal portfolio for a model/web designer: photo-heavy pages, a blog, SEO requirements, and possible future full-stack features (admin dashboard, database). Framework options considered: plain HTML/CSS, Astro, Remix, Vite + React SPA, Next.js.

## Decision

Build on **Next.js 15 with the App Router**, using React Server Components, TypeScript, and file-based routing.

## Consequences

- **SSG/ISR for free** — portfolio and works pages pre-render to static HTML; blog posts are MDX-compiled at build. Fast, SEO-friendly, near-zero server cost.
- **Room to grow** — Server Actions, route handlers, and API routes let Phase 2 (database, auth, admin) be added without a framework migration.
- **First-class Vercel deployment** (see ADR-0002).
- **Trade-off:** a React framework is heavier than Astro for a purely static site, and App Router patterns (async `params`, RSC boundaries) add a learning curve for a non-developer maintainer — mitigated by the content-in-code data files (ADR-0003) and GUIDE.md.
