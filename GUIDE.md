# GUIDE.md — The MJ Brown Website Storybook

A plain-language guide to this codebase: what every folder and file does, how the features work, and how to add your own content — even if you're not a developer.

---

## 1. The big picture

This is a **Next.js 15** website (App Router) written in **TypeScript**, styled with **Tailwind CSS v4**, with scroll animations by **framer-motion** and a blog powered by **MDX** (Markdown + React). It is fully static — content lives in code, no database — and deploys free on **Vercel**.

```
Browser request → Vercel (global CDN) → pre-built HTML page → done.
```

There is no backend server to manage. "Full-stack" behavior (forms, dynamic routes, SEO) comes from Next.js server components and (later, Phase 2) Formspree/Resend.

---

## 2. Folder map — who does what

```
mj_brown/
├── app/                    🏠 All PAGES (one folder = one URL)
│   ├── layout.tsx          The site shell: <header>, <footer>, global metadata
│   ├── globals.css         Design system: colors, fonts, helpers
│   ├── page.tsx            HOME         → /
│   ├── about/page.tsx      ABOUT ME     → /about
│   ├── portfolio/page.tsx  PORTFOLIO    → /portfolio
│   ├── works/page.tsx      WORKS        → /works
│   ├── works/[slug]/…      ONE WORK     → /works/curl-tips-mobile-app (dynamic)
│   ├── blog/page.tsx       BLOG         → /blog
│   ├── blog/[slug]/…       ONE POST     → /blog/starting-from-scratch (dynamic)
│   └── contact/page.tsx    CONTACT ME   → /contact
├── components/             🧩 Reusable UI pieces
│   ├── site-header.tsx     Sticky top navigation (highlights the current page)
│   ├── site-footer.tsx     Email links, socials, copyright
│   ├── reveal.tsx          Scroll-reveal animation wrapper
│   ├── contact-form.tsx    The contact form (Formspree-ready)
│   └── placeholder-image.tsx  Gradient stand-in for photos not yet added
├── lib/                    🧠 Data and logic
│   ├── data/site.ts        Brand name, nav links, emails, socials
│   ├── data/portfolio.ts   All modeling shoots (High Fashion, Freestyle…)
│   ├── data/works.ts       All web design projects
│   └── posts.ts            Reads .mdx blog files from content/blog
├── content/blog/           📝 Blog posts as .mdx files (write in Markdown!)
├── .github/workflows/ci.yml  CI: lint + type-check + build on every push/PR
└── public/images/          📷 Put real photos here (used by next/image later)
```

---

## 3. How the features work

### 3.1 Routing — folders are URLs

Next.js App Router maps **folders inside `app/` to URLs**:

| File | URL | What renders |
|---|---|---|
| `app/page.tsx` | `/` | Home (hero, about teaser, featured shoots & works) |
| `app/about/page.tsx` | `/about` | Your story |
| `app/portfolio/page.tsx` | `/portfolio` | Modeling galleries grouped by category |
| `app/works/page.tsx` | `/works` | Web projects grouped by category |
| `app/works/[slug]/page.tsx` | `/works/{slug}` | One project's detail page |
| `app/blog/page.tsx` | `/blog` | Post list, newest first |
| `app/blog/[slug]/page.tsx` | `/blog/{slug}` | One post, rendered from MDX |
| `app/contact/page.tsx` | `/contact` | Contact form + direct emails + socials |

`[slug]` folders are **dynamic routes**: one component file renders every item using its `slug` as the URL. At build time, `generateStaticParams()` pre-generates one HTML page per work/post — that's why the site is instant and SEO-friendly (this is **SSG — Static Site Generation**).

### 3.2 The layout — one shell for every page

`app/layout.tsx` wraps every page with the sticky `SiteHeader` and `SiteFooter`, and sets default SEO metadata (`<title>` and description) from `lib/data/site.ts`. Page-level files add their own title via `export const metadata` — Next merges them ("Works — MJ Brown").

### 3.3 The design system — globals.css + Tailwind v4

`app/globals.css` defines the palette and fonts as **Tailwind theme tokens**:

- `paper` — warm off-white background
- `ink` — near-black text
- `accent` — muted gold for highlights, active links, eyebrows
- `font-display` — Georgia serif for headings (editorial, model-portfolio feel)
- `font-sans` — clean system sans for body text

Because they're theme tokens, classes like `bg-paper`, `text-ink`, `text-accent`, `font-display` work anywhere. Change a color in **one place** and the whole site updates. `prose-post` styles blog article typography (headings, lists, quotes, links).

### 3.4 Animations — `Reveal`

`components/reveal.tsx` is a tiny wrapper: whatever you put inside fades + slides up **when it scrolls into view** (once — no replay on scroll-up). Used across all pages; grids pass `delay={index * 0.1}` for a subtle stagger effect.

```tsx
<Reveal><h2>Featured Shoots</h2></Reveal>
```

### 3.5 The contact form

`components/contact-form.tsx` is a **client component** (it needs interactivity, so it's marked `"use client"`):

- **With** `NEXT_PUBLIC_FORMSPREE_ENDPOINT` set in `.env.local` → the form POSTs to [Formspree](https://formspree.io) and shows success/error states. Free tier: 50 submissions/month.
- **Without** it → the form still renders, and visitors can use the direct email links beside it (graceful fallback, no crash).

State machine: `idle → submitting → success | error` — with the button disabled while sending.

### 3.6 The blog — Markdown files become pages

1. You write `content/blog/my-post.mdx` with a small frontmatter header:

```mdx
---
title: "My new post"
date: "2025-03-01"
excerpt: "One-sentence teaser shown in the list."
---

Your **Markdown** here. Headings, lists, quotes, links…
```

2. `lib/posts.ts` reads the folder with **gray-matter** (a frontmatter parser), sorts newest-first.
3. `app/blog/page.tsx` lists all posts.
4. `app/blog/[slug]/page.tsx` compiles the MDX with **next-mdx-remote** and renders it with the `prose-post` styles, plus Twitter/Facebook share links ("SHARE ON" from the design).

### 3.7 Images — real photos, optimized

Photos live in `public/images/` (exported from Figma). `components/photo-image.tsx` wraps Next's `<Image>`: it crops to any aspect ratio (`object-cover`), generates responsive WebP sizes per device, and adds a subtle zoom on hover. Items with an image render `PhotoImage`; items without fall back to `PlaceholderImage` (a deterministic gradient).

- Hero/home and About photos: `/images/hero-portrait.jpg`, `/images/about-portrait.jpg`
- Portfolio photos are set per item in `lib/data/portfolio.ts` (`images` array — first one is the cover)
- To swap a photo: replace the file in `public/images/` (keep the same name), or point `images[0]` at a new file.

### 3.8 SEO & metadata

- Every page exports `Metadata` (title + description) — search-engine friendly.
- Site-wide defaults come from `lib/data/site.ts` (`name`, `description`).
- OG images / sitemap can be added at launch (see §7).

---

## 4. Content editing cheat-sheet (no framework knowledge needed)

| I want to… | I edit… | How |
|---|---|---|
| Change site name, emails, socials, nav | `lib/data/site.ts` | Edit the values at the top |
| Add a modeling shoot | `lib/data/portfolio.ts` | Append an object to `portfolioItems` |
| Add a web project | `lib/data/works.ts` | Append an object to `works` — `slug` becomes the URL |
| Write a blog post | `content/blog/*.mdx` | Create a new `.mdx` file with frontmatter |
| Change colors / fonts | `app/globals.css` | Edit the `@theme` block |
| Reorder anything | the data file | Order in the array = order on the page |

---

## 5. Local development commands

```bash
npm run dev        # start the site at http://localhost:3000 (hot reload)
npm run build      # production build (what CI/Vercel runs)
npm run lint       # ESLint checks code quality
npm run typecheck  # TypeScript finds bugs before the browser does
```

Workflow: edit a file → the dev server reloads → check the browser → commit & push.

---

## 6. CI/CD — what happens on every push

`.github/workflows/ci.yml` runs on GitHub's servers for every push/PR:

```
npm ci → lint → typecheck → build
```

- A red ❌ check means something broke — the log tells you what and where.
- On `main`, Vercel's Git integration deploys automatically after CI passes; every PR also gets a **preview URL** so you can see changes safely before merging.
- `npm ci` (not `npm install`) — installs exactly the locked versions from `package-lock.json`.

---

## 7. Launch checklist

1. **Photos** — replace placeholders (see §3.7)
2. **Contact form** — create a Formspree form → put its endpoint in `.env.local` as `NEXT_PUBLIC_FORMSPREE_ENDPOINT` (and in Vercel project settings)
3. **Instagram/socials** — real URLs in `lib/data/site.ts`
4. **Domain** — connect in Vercel (Settings → Domains); also update `shareUrl` in `app/blog/[slug]/page.tsx`
5. **SEO extras** — `app/sitemap.ts`, `app/robots.ts`, OG images (nice-to-have)
6. **Analytics** — Vercel Analytics or Google Analytics (one-line script)

---

## 8. Phase 2 — when the site needs a backend

When editing files in code starts feeling slow, PLAN.md's Phase 2 kicks in:

- **Neon Postgres + Prisma** — move portfolio/works/posts into a database
- **Auth.js admin dashboard** at `/admin` — edit content from the browser
- **Cloudinary / Vercel Blob** — upload photos from that dashboard
- **Resend** — email ping for every contact submission

The data files (`lib/data/*`) were designed as the seam: swap their internals for Prisma queries later and no page needs to change.

---

*Built with Next.js 15 · TypeScript · Tailwind CSS v4 · framer-motion · MDX — deployed on Vercel.*
