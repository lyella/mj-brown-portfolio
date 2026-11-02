# ADR-0007: Minimal CI with GitHub Actions

## Status

Accepted

## Context

The project is maintained solo, deploying via Vercel's Git integration. Full team-style CI/CD (separate deploy workflows, branch protection, required approvals, preview-environment ceremony) was considered and rejected as overhead for one maintainer. Vercel already builds every PR as a preview.

## Decision

Keep **one CI workflow** (`.github/workflows/ci.yml`): `npm ci` → lint → type-check → build on every push and PR. Deployment itself stays with Vercel's Git integration (CD), not GitHub Actions.

## Consequences

- Catches a broken `main` **before** Vercel attempts a deploy, with a readable log.
- `npm ci` installs exactly the locked dependency versions — no "works on my machine".
- ~20 lines of YAML, no secrets, no maintenance.
- **Trade-off:** no required reviews or protected-branch enforcement — acceptable for a solo project; revisit when a second contributor joins.
