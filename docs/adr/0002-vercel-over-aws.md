# ADR-0002: Host on Vercel, not AWS

## Status

Accepted (AWS documented as a Phase 2 migration path only)

## Context

The site is a low-traffic personal portfolio. An AWS deployment (Amplify Hosting + RDS Postgres + S3/CloudFront + SES) was fully specced in an early draft of PLAN.md. The maintainer is a solo developer.

## Decision

Host on **Vercel's free Hobby tier** with its Git integration for CI/CD. Do not provision any AWS resources.

## Consequences

- **$0/month** vs. roughly $20+/month for AWS (RDS alone is ~$15/mo), plus no IAM/Terraform/patching burden.
- **Push-to-deploy, preview URLs per PR, automatic SSL** — zero DevOps.
- Next.js image optimization and caching work with no configuration.
- **Trade-off:** vendor lock-in to Vercel's runtime model, and Hobby-tier limits (bandage: acceptable for this traffic). If requirements change (scale, compliance, org policy), the documented AWS path (Amplify + RDS + S3/CloudFront + SES, Terraform-provisioned) is the escape hatch — the app itself needs no changes since it uses no Vercel-proprietary APIs.
