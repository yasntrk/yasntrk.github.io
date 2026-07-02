# yasntrk.github.io

Personal site + blog for Yasin Türk, built with [Astro](https://astro.build).
Served at **https://yasntrk.github.io**.

Dark, modern, dev-focused. Portfolio home (about → stack → work → posts →
projects → contact) with a Markdown/MDX blog.

## Develop

```bash
npm install       # once
npm run dev       # http://localhost:4321
```

| Command           | Action                                       |
| ----------------- | -------------------------------------------- |
| `npm run dev`     | Start the local dev server                   |
| `npm run build`   | Build the production site to `./dist`        |
| `npm run preview` | Preview the built site locally               |

## Edit content

Almost everything lives in **`src/consts.ts`** — name, role, location,
socials, skills, "what I build" cards, and featured projects. Edit there and it
updates across the whole site.

- **Colors / theme** → CSS variables at the top of `src/styles/global.css`.
- **Nav links** → `NAV` in `src/consts.ts`.

## Write a blog post

Drop a Markdown or MDX file in `src/content/blog/`. The filename becomes the
URL slug (`my-post.md` → `/blog/my-post/`). Frontmatter:

```markdown
---
title: 'My post title'
description: 'One-line summary for SEO and cards.'
pubDate: 2026-07-10
tags: ['react', 'notes']
draft: false # set true to hide it from the site + RSS
---

Your content here…
```

An RSS feed is generated automatically at `/rss.xml`.

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the
site and publishes it to GitHub Pages. **One-time setup on GitHub:**

1. Repo **Settings → Pages → Build and deployment → Source: GitHub Actions**.
2. Push to `main`. The Actions run builds and deploys.

That's it — no manual `dist` commits.
