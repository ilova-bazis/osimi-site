# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Important: Next.js Version Warning

This project uses **Next.js 16.2.1** with React 19. APIs, conventions, and file structures may differ from training data. Before writing any Next.js-specific code, read the relevant guide in `node_modules/next/dist/docs/`.

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Commands

- `npm run dev` — start development server (localhost:3000)
- `npm run build` — build for production
- `npm run start` — run production server
- `npm run lint` — run ESLint
- `npm run lint:fix` — auto-fix ESLint issues

No test framework is configured.

## Architecture

**Muhammad Osimi Website** — a multilingual, content-first, static-first biographical and legacy platform. Stack: Next.js App Router, TypeScript, Tailwind CSS v4.

### Routing

All pages use locale-based routing: `/[locale]/...`

Supported locales (v1): `en`, `tg`, `ru`

Routes:
- `/[locale]` — home
- `/[locale]/biography`
- `/[locale]/timeline`
- `/[locale]/works`
- `/[locale]/documentary`
- `/[locale]/archive`
- `/[locale]/quotes`

### Planned Source Structure (from spec)

```
osimi-next/
  app/[locale]/          # Page components per route
  components/
    layout/              # Header, footer, navigation, language switcher
    home/                # Home page sections
    biography/
    timeline/
    documentary/
    quotes/
    archive/
    shared/              # Reusable blocks
  content/
    en/ tg/ ru/          # Per-locale page content files
  data/
    quotes/ timeline/ works/   # Shared collections with localized fields
  lib/
    i18n/                # Locale routing, language switcher logic
    content/             # Content loaders
    seo/                 # Metadata helpers
    utils/
  styles/
```

### Content Strategy

Use structured local files (no CMS) for v1:
- TypeScript modules or JSON for collections (quotes, timeline events, works, screenings)
- Locale-specific page content objects
- Separate UI strings from page content from collection data

### Rendering

Prefer static generation (`generateStaticParams` for locale routes). Minimize client-side JavaScript and server-side complexity.

### Design Language

Ceremonial archive theme: deep softened burgundy, warm ivory/parchment backgrounds, charcoal text, muted gold accents. Serif headings/quotes, sans-serif for UI/body. Spacious vertical rhythm, restrained motion.

### Key Constraints

- Public site must remain architecturally separate from any future archive backend
- No CMS, no user accounts, no admin in v1
- Multilingual support is a first-class requirement, not an afterthought
- SEO metadata required per locale and per page
