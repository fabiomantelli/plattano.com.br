# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server with Turbopack
npm run build      # Production build (runs next-sitemap postbuild automatically)
npm run start      # Start production server
npm run lint       # ESLint check
npm run test       # Run all Jest tests
npm run test:watch # Jest in watch mode
```

Run a single test file:
```bash
npx jest app/components/forms/ContactForm.test.tsx
```

## Architecture

**B2B marketing website** for Plattano (IT solutions provider, Florianópolis). Next.js 16 App Router with React 19 and TypeScript.

### Routing & Pages

All routes live in `app/`. Pages: `/` (home), `/about`, `/contact`, `/privacy`, `/solutions/data-protection`, `/solutions/cybersecurity`, `/solutions/storage`. Lead submission is handled by `app/api/send-lead/route.ts` via Bitrix24 webhook (`BITRIX_WEBHOOK` env var).

### Content Architecture

Page content is **not colocated with pages** — it lives in `app/lib/constants/`. Each solutions page pulls from its own constants file:
- `app/lib/constants/navigation.ts` — nav links, footer links, CTA buttons
- `app/lib/constants/solutions.ts` — home page solution cards and partner stats
- `app/lib/constants/veeam-solutions.ts`, `cybersecurity-solutions.ts`, `storage-solutions.ts` — per-solution page data
- `app/lib/constants/about.ts` — about page content

When adding or editing page text/data, modify the constants files, not the page components directly.

### Component Layers

- `app/components/sections/` — full-page sections (Hero, Trust, Solutions, Partners, Testimonials, CTA)
- `app/components/layout/` — Navigation + Footer (shared across all pages)
- `app/components/forms/ContactForm.tsx` — React Hook Form + Zod (`app/lib/validations/contact.ts`), submits to `/api/send-lead`
- `app/components/animations/` — Framer Motion wrappers (`FadeIn`, `StaggerChildren`)
- `app/components/ui/` — primitive UI components (button, card, accordion, tabs)
- `app/components/seo/StructuredData.tsx` — renders JSON-LD; schema generators are in `app/lib/seo/generateStructuredData.ts`

### Styling

Tailwind CSS v4 via PostCSS (`@tailwindcss/postcss` plugin — no `tailwind.config.js`). Custom theme tokens (fonts, colors) are defined inside `app/globals.css` using `@theme`. Dark mode is the default; light mode applied via `:not(.dark)`. Use `cn()` from `app/lib/utils.ts` (wraps `clsx` + `tailwind-merge`) for conditional class merging.

### SEO

Structured data schemas (Organization, WebSite, LocalBusiness, Product, FAQPage) are generated in `app/lib/seo/generateStructuredData.ts` and rendered via `<StructuredData>`. Each page's `metadata` export and its structured data must be kept in sync when content changes. Sitemap is auto-generated post-build by `next-sitemap`.

### Environment Variables

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_GA_ID` | Google Analytics |
| `NEXT_PUBLIC_CLARITY_ID` | Microsoft Clarity |
| `BITRIX_WEBHOOK` | CRM lead submission (server-only) |
| `EMAIL_FROM` / `EMAIL_TO` | Email config (defined but not yet used) |

See `.env.local.example` for the full list. `BITRIX_WEBHOOK` is server-side only (no `NEXT_PUBLIC_` prefix).

### Next.js Config

`next.config.ts` uses standalone output (Docker-ready). Remote images are allowed only from `plattano.com`. There are two config files (`next.config.ts` and `next.config.js`) — `next.config.ts` is canonical; `next.config.js` is a legacy artifact.
