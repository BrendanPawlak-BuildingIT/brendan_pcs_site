# BrendanPcs — Blog

Personal tech blog for **BrendanPcs** (`@brendan_pcs`) — PC builds, hardware, and homelab notes.

Built with [Astro](https://astro.build) as a fully static site: no client framework, self-hosted
fonts, build-time syntax highlighting, and a handful of scoped `<script>` tags for the only
interactive piece (the mobile menu).

## Tech stack

- **[Astro 7](https://astro.build)** — static site generator, outputs plain HTML/CSS/JS
- **Content collections** — Markdown posts with a typed frontmatter schema (`src/content.config.ts`)
- **Astro Fonts API** — Inter + JetBrains Mono downloaded and self-hosted at build time, so there is
  no runtime request to Google
- **Shiki** — syntax highlighting rendered at build time, zero JavaScript shipped
- **[@astrojs/rss](https://docs.astro.build/en/recipes/rss/)** + **[@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)**
- **TypeScript** (strict) and **Prettier** — both enforced in CI

## Project structure

```
├── public/                  Served as-is: favicons, OG image, robots.txt, manifest
│   ├── icon.svg             Source of truth for every favicon/app icon
│   └── og-image.svg         Source of truth for the social share image
├── scripts/
│   └── gen-images.mjs       Regenerates the PNGs above from the two SVGs
└── src/
    ├── assets/              Images imported by posts (optimized at build time)
    ├── components/          Header, Footer, PostCard, TagList, FormattedDate, SocialIcon
    ├── content/posts/       ← your posts live here, one .md per post
    ├── content.config.ts    The frontmatter schema
    ├── data/site.ts         Name, handle, bio, nav links, social links
    ├── layouts/             BaseLayout (document shell + SEO), PostLayout (article shell)
    ├── pages/               index, about, blog/, tags/, 404, rss.xml
    ├── styles/global.css    The whole design system
    └── utils/posts.ts       Post querying, reading time, tags, prev/next
```

## Getting started

Requires **Node.js 22.12+** (see `.nvmrc`).

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:4321`.

## Writing a post

Create `src/content/posts/my-post.md`. The filename becomes the URL:
`src/content/posts/my-post.md` → `/blog/my-post/`.

```markdown
---
title: 'A title, up to 80 characters'
description: 'One or two sentences. Shown on cards, in search results, and in the RSS feed.'
pubDate: 2026-09-04
tags: ['builds', 'hardware']
---

Your post here. Markdown, with fenced code blocks highlighted automatically.
```

Every frontmatter field:

| Field         | Required | Notes                                                           |
| ------------- | -------- | --------------------------------------------------------------- |
| `title`       | yes      | Max 80 characters                                               |
| `description` | yes      | Max 200 characters — used for cards, `<meta>`, and RSS          |
| `pubDate`     | yes      | `YYYY-MM-DD`                                                    |
| `updatedDate` | no       | Shown next to the publish date when present                     |
| `tags`        | no       | Lowercased automatically; each one gets a `/tags/<tag>/` page   |
| `cover`       | no       | Path to an image in `src/assets/`, e.g. `'../../assets/x.jpg'`  |
| `coverAlt`    | no       | Alt text for the cover — write it whenever `cover` is set       |
| `videoId`     | no       | YouTube ID — adds a "Watch the short" link to the post header   |
| `draft`       | no       | `true` keeps it out of production builds, the feed, and sitemap |
| `featured`    | no       | `true` pins it to the top of the blog index                     |

**Drafts** render in `npm run dev` so you can preview them, and disappear from `npm run build`.
That single flag also keeps them out of RSS and the sitemap, since both are generated from the same
`getPublishedPosts()` helper in `src/utils/posts.ts`.

A post with three or more `##` headings gets an automatic table of contents.

## Editing site copy

Name, handle, bio, tagline, email, nav links, and every social link live in **`src/data/site.ts`**.
Change them there and they flow through the header, footer, About page, home page, RSS feed, and
the `Person` structured data.

## Available scripts

| Command                | Action                                                           |
| ---------------------- | ---------------------------------------------------------------- |
| `npm run dev`          | Dev server with hot reload                                       |
| `npm run build`        | Type-check (`astro check`) then build the static site to `dist/` |
| `npm run preview`      | Serve the built `dist/` locally to sanity-check a build          |
| `npm run check`        | Type-check on its own                                            |
| `npm run format`       | Format everything with Prettier                                  |
| `npm run format:check` | Check formatting without writing (this is what CI runs)          |
| `npm run gen:images`   | Regenerate favicons + OG image from `public/*.svg`               |

## Deployment — Cloudflare Pages

The build is fully static, so no adapter and no environment variables are needed.

| Setting                | Value                 |
| ---------------------- | --------------------- |
| Build command          | `npm run build`       |
| Build output directory | `dist`                |
| Environment variable   | `NODE_VERSION` = `22` |

Connect the repository in the Cloudflare dashboard, enter those three values, and every push to
`main` deploys. The same `dist/` folder works on Netlify, Vercel, or any static host.

## Before going live

1. **Set the real domain.** `site` in `astro.config.mjs` is currently `https://brendanpcs.com` and
   is a placeholder. It drives canonical URLs, the RSS feed, the sitemap, and the Open Graph image
   URL. Update it there and in `public/robots.txt` (the `Sitemap:` line) and `SITE.url` in
   `src/data/site.ts`.
2. **Prune the social links.** `SOCIALS` in `src/data/site.ts` lists YouTube, X, Instagram, TikTok,
   and GitHub. Delete any account that does not exist — a dead link is worse than a missing one.
3. **Add cover images.** No post has a `cover` yet, so the blog index and post pages are text-only.
   Drop real photos into `src/assets/` and reference them from frontmatter.

## The posts

`src/content/posts/` holds one post per YouTube short, written from the transcripts and dated to
each video's upload date. Each carries a `videoId`, which renders the "Watch the short" link.

## Fonts

Fonts are configured in `astro.config.mjs` via Astro's Fonts API and downloaded from Google at
**build time**, then served from your own origin — visitors never hit a third-party font host. If a
build environment ever blocks that fetch, the fallback is to install
`@fontsource-variable/inter` and `@fontsource-variable/jetbrains-mono`, import them in
`src/layouts/BaseLayout.astro`, and drop the `fonts` block and the two `<Font>` tags.

## Accessibility & SEO notes

- Semantic landmarks, a single `<h1>` per page, and a logical heading order throughout.
- A "Skip to content" link, visible focus rings on every interactive element, and a mobile menu that
  is keyboard-operable with correct `aria-expanded` / `aria-hidden` wiring and Escape-to-close.
- `prefers-reduced-motion` is respected — the scroll reveal and all transitions are disabled.
- Per-page `<title>`/description, canonical URL, Open Graph and Twitter cards, `Person` JSON-LD
  sitewide, and `BlogPosting` JSON-LD on posts.
- `robots.txt`, `sitemap-index.xml`, and `/rss.xml` are all part of the build output.
