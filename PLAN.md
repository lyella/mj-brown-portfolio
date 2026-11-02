# MJ Brown — Portfolio Website (Project Plan)

> Source design: [FigJam board](https://www.figma.com/board/pr6AcIhpPr3WJiCIR0dOO6/Diagram---My-Website)

## 1. Overview

A personal portfolio website for **MJ Brown** — a model and web designer. The site showcases her modeling portfolio, web design works, and personal blog, and provides a contact channel for project inquiries (modeling or web design).

**Navigation (from design):** HOME · ABOUT ME · PORTFOLIO · WORKS · BLOG · CONTACT ME

## 2. Pages & Content (from FigJam board)

| Page | Route | Content from the board |
|---|---|---|
| Home | `/` | Hero: "MJ Brown — journey" with photo. About: "I created my website to show my world, and keeps a memories..." |
| About Me | `/about` | Personal story, dedication, minimalist works mention |
| Portfolio | `/portfolio` | Modeling galleries: **High Fashion**, **Product Shoots**, **Freestyle**, **Ambassador**, **Modern Shoots**. Works incl. *Sew Me, High Fashion Shoots, Dear Sea Stories, Ziko Natural, Belleza Products, AL&CO Brand*. Instagram link for more pictures |
| Works | `/works` | Web design projects: **Curl Tips Mobile App Design**, **Bossamusic**, **E-commerce of parfum**, **Fashionnova**, **Design 101**, **Personal Website**, **Unique Beauty**, **ABNKKRMDMPPLk Podcast**, clothing-line site. Categories: E-commerce, Personal/Blog. "Read More" / "Visit this page" CTAs |
| Blog | `/blog` | "A website where everyone has a different story, sharing their memories." Posts with share links (SHARE ON) |
| Contact | `/contact` | Contact form (Your Name, Your Email, Your Message), social links, email: `mjhane1223.mja@gmail.com` / `model.mjbrown@gmail.com` |

## 3. Stack (lean, launch-first)

- **Next.js 15 (App Router) + TypeScript** — SEO, image optimization for photo galleries
- **Tailwind CSS + shadcn/ui** — fast styling, accessible components
- **Motion (Framer Motion)** — scroll reveals and gallery transitions
- **Content in code** — portfolio items and works as typed TS data files; blog posts as MDX files. No database yet.
- **Contact form** — Formspree embed (zero backend) to start
- **Hosting — Vercel free tier** — deploy on push, preview URL per PR, SSL, custom domain. No AWS for this project (unnecessary cost/ops at this scale).
- **CI — one minimal GitHub Actions workflow** — lint + type-check + build on every PR/push, just enough to catch a broken build before Vercel deploys it. CD is Vercel's Git integration itself.

## 4. Phase 2 (only if/when needed)

Add these later — only when managing content in code becomes annoying:

- **PostgreSQL (Neon free) + Prisma** — works/portfolio/posts/messages in a DB
- **Auth.js admin dashboard** at `/admin` — CRUD without touching code
- **Cloudinary or Vercel Blob** — image uploads from the dashboard
- **Resend** — email notification for contact submissions
- Optional AWS migration path (Amplify Hosting + RDS + S3/CloudFront + SES) if requirements ever demand it

## 5. Milestones

1. **Scaffold** — Next.js + TS + Tailwind + shadcn/ui, repo on GitHub, minimal CI workflow, Vercel connected
2. **Pages** — Home, About, Portfolio, Works, Contact per the FigJam design
3. **Content** — portfolio and works data files with real images/links
4. **Blog** — MDX posts, list + detail pages, share buttons
5. **Contact** — Formspree form wired up and tested
6. **Launch** — SEO metadata, OG images, analytics, responsive QA, custom domain on Vercel

## 6. Repo

- GitHub: `lyella/mj-brown-portfolio`
- Solo workflow: commit to `main`; feature branches + PRs only when it helps
