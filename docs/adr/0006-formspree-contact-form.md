# ADR-0006: Formspree for the contact form

## Status

Accepted

## Context

The contact form needs to deliver messages without a backend server, database, or email infrastructure (ADR-0003). Options: a full backend (Server Action + DB + Resend), a mailto link only, or a form service (Formspree, Basin, Web3Forms).

## Decision

Use **Formspree** (free tier: 50 submissions/month) wired through the `NEXT_PUBLIC_FORMSPREE_ENDPOINT` environment variable, with a **graceful fallback**: when the variable is unset, the form still renders but visitors are directed to the direct email links on the same page.

## Consequences

- Zero backend code, zero secrets on the server, spam filtering included by Formspree.
- Enabling it is a one-line env var (`.env.local` locally, project settings on Vercel) — no deploy needed beyond that.
- **Trade-off:** form submissions live in Formspree's dashboard (not our data), and 50/month is a cap — revisit in Phase 2 (Server Action → Postgres → Resend email) if volume grows or ownership matters.
- The fallback guarantees the contact page is never broken by missing configuration.
