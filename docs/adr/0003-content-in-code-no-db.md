# ADR-0003: Content in code, no database (Phase 2 deferral)

## Status

Accepted

## Context

The site needs portfolio items, works, and blog posts. A "full-stack" design with PostgreSQL + Prisma + an authenticated admin dashboard was considered from the start. The maintainer updates content occasionally, not daily.

## Decision

Store all content **in code**: typed TS data files (`lib/data/portfolio.ts`, `lib/data/works.ts`, `lib/data/site.ts`) and MDX blog posts (`content/blog/*.mdx`). No database, no auth, no admin dashboard in Phase 1.

## Consequences

- **Zero running cost and zero auth surface** — nothing to secure or back up.
- Content updates are git commits — versioned, reviewable, reversible.
- Type-checked content: a typo in a data file fails CI instead of breaking the page.
- **Trade-off:** non-developers must edit files (mitigated by GUIDE.md §4 cheat-sheet).
- **Exit strategy:** pages consume only the exported arrays/functions from `lib/data/*`; swapping their internals for Prisma queries in Phase 2 requires no page changes.
