# SEO Audit Report — Marathon Cheats Template

**Audit date:** 2026-08-22  
**Auditor scope:** Read-only code review + local runtime verification  
**Site:** https://marathoncheats.org  
**Stack:** Astro 7.0.9, React islands, Cloudflare Pages/Worker  

---

## Overall Score: **84 / 100**

| Area | Score | Notes |
|------|-------|-------|
| Meta tags & social | 88/100 | Strong baseline; OG image dimensions inaccurate |
| Heading structure | 90/100 | Clean H1 → H2 → H3 on product pages |
| Images | 82/100 | WebP + lazy load + srcset on most paths; dimension mismatches |
| Page speed / assets | 76/100 | Heavy React on critical path; good font/CSS strategy |
| Schema / JSON-LD | 86/100 | Rich, valid graph; image size metadata wrong |
| Internal links | 92/100 | Purposeful hub links; sitemap deep audit passed |
| Sitemap & robots | 95/100 | Index + 21 locales + image sitemap; robots correct |
| Mobile | 93/100 | Viewport set; responsive hero/nav |
| Core Web Vitals risk | 74/100 | LCP preload good; JS hydration + CLS risks remain |
| URL structure | 88/100 | Clean slugs; intentional `/pricing/` vs “Store” label |

---

## Dev Server Verification

| Check | Result |
|-------|--------|
| `npm run dev -- --background` | ✅ Started without errors (pid 4934, port 4321) |
| `GET /` | ✅ HTTP 200 |
| `GET /features/` | ✅ HTTP 200 |
| `GET /sitemap.xml` | ✅ HTTP 200 |
| `GET /robots.txt` | ✅ HTTP 200 |
| `npm run build` | ✅ 739 pages built in ~3.6s |
| `npm run validate:sitemaps` | ✅ All checks passed (348 URLs, 21 images) |

---

## Critical Issues

### C1 — OG / schema image dimensions do not match actual hero asset

**Impact:** Social previews and `ImageObject` in JSON-LD declare 1920×1080 while the LCP/OG file is 1024×576 WebP. Platforms may crop unpredictably or flag structured-data warnings.

| File | Lines | Issue |
|------|-------|-------|
| `src/layouts/Layout.astro` | 62–63 | `ogImageWidth` / `ogImageHeight` hardcoded to `1920` / `1080` for non-logo images |
| `src/layouts/Layout.astro` | 87–88 | `primaryImageOfPage.width` / `.height` use same wrong values |
| `src/layouts/Layout.astro` | 238–239 | `og:image:width` / `og:image:height` meta tags |

**Fix:** Derive dimensions from `heroWidth` / `heroHeight` in `src/lib/responsive-images.ts` (60–61) or pass explicit `ogImageWidth` / `ogImageHeight` props from pages. Set all three surfaces (OG meta, Twitter, JSON-LD) to **1024×576** for the default hero.

---

### C2 — Large React bundles hydrate on every page load (`client:load`)

**Impact:** LCP delay, main-thread work, and INP risk on mobile. Production `client.voj6uwBJ.js` is **~184 KB**; `I18nProvider` adds **~72 KB**. Navbar + Hero both use `client:load`.

| File | Lines | Issue |
|------|-------|-------|
| `src/components/Hero.astro` | 17–18 | `client:load` on homepage LCP hero |
| `src/components/Navbar.astro` | 58–59 | `client:load` on global navigation |
| `dist/_astro/client.voj6uwBJ.js` | — | ~183,717 bytes (post-build) |

**Fix:** Convert Hero and Navbar to Astro components (or `client:idle` / `client:visible` with static HTML fallback). Keep i18n strings server-rendered for EN; hydrate language switcher only. Target: remove ~250 KB parsed JS from critical path.

---

## Warning Issues

### W1 — Gallery / page images use incorrect intrinsic dimensions (CLS risk)

Screenshots are **960×540** (16:9) but markup declares **800×500** (16:10) or **1280×720**.

| File | Lines | Declared | Actual (sample) |
|------|-------|----------|-------------------|
| `src/layouts/PageLayout.astro` | 231–232 | 800×500 | 960×540 |
| `src/layouts/PageLayout.astro` | 156–157 | 1280×720 | varies per asset |
| `src/components/ProductCard.astro` | 40–41 | 1280×720 | 960×540 |
| `src/pages/faq/[slug]/index.astro` | 90–91 | 1280×720 | 960×540 |

**Fix:** Add width/height map in `src/lib/responsive-images.ts` (or read at build time via `sharp`) and use real dimensions on every `<img>`.

---

### W2 — Blog post hero images lack responsive `srcset`

| File | Lines | Issue |
|------|-------|-------|
| `src/components/BlogPostPage.astro` | 141–148 | Single `src` only; no `srcset` / `sizes` |

**Fix:** Generate `-480w` / `-960w` variants (same pipeline as `contentSrcSet()` in `src/lib/responsive-images.ts`) and apply `srcset` + `sizes="(max-width: 900px) 100vw, 720px"`.

---

### W3 — Orphan large PNG assets shipped in `/public/images/`

Not referenced in source but deployed (4.3 MB image folder). Crawlers could discover via directory guessing or stale links.

| File | Size | Issue |
|------|------|-------|
| `public/images/marathon-hero-source.png` | ~1.58 MB | Unused source asset |
| `public/images/marathon-cheats-hero.png` | ~1.03 MB | Superseded by WebP variants |
| `public/images/marathon-cheats-logo.png` | ~203 KB | OK for schema; others are dead weight |
| `public/images/reviews-banner.png` | ~137 KB | Unreferenced |
| `public/images/zadeyo-logo.png` | ~172 KB | Unreferenced |

**Fix:** Move sources to `scripts/` or repo-root `assets/` outside `public/`. Keep only optimized WebP/PNG actually linked in HTML, sitemap, or manifest.

---

### W4 — Near-duplicate title between homepage and Preview (`/marathon-cheats/`)

| File | Lines | Title |
|------|-------|-------|
| `src/data/brand.ts` | 77 | `Marathon Cheats \| Undetected Aimbot, ESP & Wallhack 2026` (home) |
| `src/data/brand.ts` | 86 | `Marathon Cheats \| Undetected ESP & Aimbot` (preview/hacks) |

**Fix:** Differentiate preview title per locked formula, e.g. `Marathon Preview \| {brand}` or `Marathon Hacks Guide \| {brand}` so SERP snippets don’t compete with `/`.

---

### W5 — Cannibal / redirect URLs still emit static HTML in `dist/`

Excluded from sitemap (`src/data/seo-canonical.ts` line 17) and 301’d in production (`functions/_middleware.js` lines 45–66), but Astro still builds pages like `dist/best-marathon-cheats/index.html`. Dev server returns **200** (verified).

| File | Lines | Issue |
|------|-------|-------|
| `src/pages/best-marathon-cheats/index.astro` | 1–5 | Page still generated |
| `src/pages/undetected-marathon-cheats/index.astro` | 1–5 | Page still generated |
| `functions/_middleware.js` | 45–66 | Redirect only at edge |

**Fix:** Remove cannibal page routes from `src/pages/` and rely on Worker redirects only, **or** add `export const prerender = false` + middleware 301 in Astro so static HTML is never served. Ensures no accidental indexing if redirects misconfigure.

---

### W6 — `AggregateRating` on Product schema may not qualify for rich results

| File | Lines | Issue |
|------|-------|-------|
| `src/components/LocalizedHome.astro` | 37–43, 55 | `reviewCount: "10"` on homepage Product |
| `src/data/reviews.ts` | — | Self-hosted reviews only |

**Fix:** Ensure reviews are independently verifiable on-page (they are at `/reviews/`). Consider moving `aggregateRating` to a dedicated reviews schema node, or increase visible review count. Monitor Search Console rich-result reports.

---

### W7 — Render-blocking inline script in `<head>`

| File | Lines | Issue |
|------|-------|-------|
| `src/layouts/Layout.astro` | 190 | `<script is:inline src="/trusted-types-policy.js">` blocks parser |
| `public/trusted-types-policy.js` | 1–16 | 479 bytes |

**Fix:** Add `defer` if CSP allows, or inline the 16-line policy as the first bytes of `<head>` to avoid an extra round trip.

---

### W8 — Brand theme CSS injected at end of `<body>`

| File | Lines | Issue |
|------|-------|-------|
| `src/layouts/Layout.astro` | 269–270 | `<style id="brand-theme-vars">` after page content |

**Fix:** Move `brandThemeRootCss()` into `<head>` (after global CSS) to avoid late style recalculation / minor CLS when brand tokens differ from `@theme` defaults.

---

## Info Issues

### I1 — Deprecated `meta keywords` still emitted

| File | Lines |
|------|-------|
| `src/layouts/Layout.astro` | 194–196 |

**Fix:** Safe to remove; Google ignores since 2009. No ranking impact either way.

---

### I2 — `<title>` placed after large JSON-LD block

| File | Lines |
|------|-------|
| `src/layouts/Layout.astro` | 252–256 |

**Fix:** Move `<title>` immediately after `<meta charset>` for convention; negligible SEO impact.

---

### I3 — No `twitter:site` / `twitter:creator` handles

| File | Lines |
|------|-------|
| `src/layouts/Layout.astro` | 246–250 |

**Fix:** Add if brand has Twitter/X account; optional for SEO.

---

### I4 — Store nav label vs `/pricing/` URL

| File | Lines | Note |
|------|-------|------|
| `src/data/brand.ts` | 122 | Nav label “Store” |
| `src/data/i18n/routing.ts` | 46 | Canonical path `/pricing/` |

**Fix:** Intentional per template IA. Consider `/store/` redirect alias if keyword “store” matters for URLs (optional).

---

### I5 — Homepage HTML payload is large (~80 KB)

| File | Size |
|------|------|
| `dist/index.html` | ~80,465 bytes |

JSON-LD FAQ + Product graph is the main contributor. Acceptable for rich results; monitor text-to-code ratio in third-party auditors.

---

### I6 — Astro version behind latest

| File | Lines |
|------|-------|
| `package.json` | 43 |

Dev server logs suggest **7.2.4** available. Low priority unless security patches apply.

---

### I7 — Video poster has optimized and full-size variants

| File | Lines | Note |
|------|-------|------|
| `src/components/HomeAboutVideo.astro` | 5 | Uses `-640w` poster (good) |
| `public/images/marathon-preview-video-poster.webp` | — | 53 KB unused full-size sibling |

**Fix:** Delete unused full-size poster or reference it only in image sitemap if needed.

---

## Section-by-Section Findings

### 1. Meta tags (title, description, canonical, OG)

**Strengths**
- Central `Layout.astro` template covers description, canonical, robots, OG, Twitter, hreflang.
- `seoPageTitle()` clamps titles to 60 chars (`src/data/site-core.ts` 7–10).
- `seoDescription()` clamps to 160 chars (`src/data/brand.ts` 239–241).
- Canonical uses apex HTTPS + trailing slash (`src/data/i18n/routing.ts` 704–712).
- Verified live: homepage title 56 chars, description 140 chars.

**Gaps**
- OG image width/height wrong (see C1).
- No `twitter:site` (I3).
- `meta keywords` present but ignored (I1).

---

### 2. Heading structure (H1 / H2 / H3)

**Strengths**
- Product pages: single H1 in banner (`src/layouts/PageLayout.astro` 176), sections as H2 (`src/components/LocalizedPage.astro` 150).
- Blog: H1 post title (`src/components/BlogPostPage.astro` 129), H2 sections (153).
- FAQ detail: H1 = question (`src/pages/faq/[slug]/index.astro` 98).
- Homepage: one H1 in Hero (`src/components/react/Hero.tsx` 118–120); downstream H2s for reviews, about, SEO blocks.

**Gaps**
- `HomeAbout` uses H2 with kicker styling (`src/components/react/HomeAbout.tsx` 13–14) — valid hierarchy, slightly unconventional semantics.

---

### 3. Images

**Strengths**
- Hero: WebP, `srcset`, `fetchpriority="high"`, preload in head (`Layout.astro` 200–209, `Hero.tsx` 102–111).
- Below-fold: `loading="lazy"` + `decoding="async"` on gallery, product, blog index cards.
- `contentSrcSet()` generates 480w/960w variants (`src/lib/responsive-images.ts` 16–37).
- All audited `<img>` tags include `alt` (grep verified across 11 components).

**Gaps**
- Dimension mismatches (W1).
- Blog hero no srcset (W2).
- Orphan PNGs (W3).
- `PageLayout` non-home heroes use fixed 1280×720 (156–157) regardless of asset.

---

### 4. Page speed

**Strengths**
- Self-hosted fonts with `font-display: swap` (`src/styles/fonts.css` 6, 14, 24, 33).
- Font preload for latin subsets (`Layout.astro` 175–188).
- `compressHTML: true`, Terser + CSS minify (`astro.config.mjs` 13, 36–37).
- `content-visibility: auto` on below-fold sections (`LocalizedHome.astro` 160–161, `PageLayout.astro` 503–504).
- Video uses `preload="none"` + click-to-play (`HomeAboutVideo.astro` 9–14).

**Gaps**
- React `client:load` on Hero + Navbar (C2).
- `trusted-types-policy.js` render-blocking (W7).
- Production homepage still loads ~260 KB JS before interaction.
- Dev mode inlines full Tailwind in HTML (expected; production uses external CSS ~21 KB).

---

### 5. Schema / JSON-LD

**Strengths**
- `@graph` pattern with WebPage, WebSite, Organization, BreadcrumbList (`Layout.astro` 73–128).
- Homepage: Product + FAQPage (`LocalizedHome.astro` 46–88).
- Blog: BlogPosting (`BlogPostPage.astro` 52–78).
- FAQ detail: FAQPage per answer (`src/pages/faq/[slug]/index.astro` 29–51).
- Nested `@context` stripped from `extraGraph` (`Layout.astro` 146–154).

**Gaps**
- Image dimensions in schema wrong (C1).
- Product `offers.url` points to external checkout (intentional commerce flow).

---

### 6. Internal links

**Strengths**
- `src/data/internal-links.ts` maps topic hubs per pageId.
- `RelatedPages`, `HomeSeo`, FAQ lists, blog topic pills all cross-link pillars.
- Deep sitemap audit: **348 URLs**, no hreflang → redirect targets.

**Gaps**
- None critical. Cannibal pages excluded from sitemap but still build (W5).

---

### 7. Sitemap and robots.txt

**Strengths**
- `public/robots.txt` — Allow `/`, disallow brand studio, sitemap URL correct (lines 1–10).
- `src/pages/sitemap.xml.ts` — index with EN + 21 locales + images.
- `sitemap-en.xml` includes hreflang alternates per URL (verified).
- `npm run validate:sitemaps` passed including deep audit.

**Gaps**
- None critical.

---

### 8. Mobile

**Strengths**
- Viewport meta with `viewport-fit=cover` (`Layout.astro` 172).
- Responsive hero breakpoints (`Hero.astro` 302–447).
- Touch targets via `--touch-min` on mobile CTAs.
- `theme-color` + manifest (`Layout.astro` 174, 262; `public/site.webmanifest`).

**Gaps**
- None critical.

---

### 9. Core Web Vitals risks

| Metric | Risk | Cause | Mitigation |
|--------|------|-------|------------|
| **LCP** | Medium | Hero image well optimized; JS hydration competes | Fix C2; keep preload |
| **CLS** | Medium | Wrong width/height on images; late theme CSS | Fix W1, W8 |
| **INP** | Medium–High | Navbar scroll listeners + React hydration | Fix C2; audit `useEffect` in `Navbar.tsx` 55–80 |

---

### 10. URL structure

**Strengths**
- Keyword slugs: `/marathon-esp/`, `/marathon-aimbot/`, `/features/`, `/updates/`.
- Trailing slash enforced (`astro.config.mjs` 12).
- 21 locale prefixes with translated slugs (`src/data/i18n/routing.ts` 73+).
- Cannibal URLs 301 to pillars in production middleware.

**Gaps**
- `/pricing/` vs “Store” naming (I4).
- `/marathon-cheats/` is preview pillar, not primary money URL (by design; `/` is money page per `seo-canonical.ts` 19–21).

---

## Prioritized Action Plan

| Priority | Action | Effort |
|----------|--------|--------|
| 1 | Fix OG/schema image dimensions (C1) | Low |
| 2 | Reduce critical-path JS — Hero/Navbar (C2) | High |
| 3 | Correct image width/height attributes (W1) | Medium |
| 4 | Add blog image srcset (W2) | Medium |
| 5 | Remove orphan PNGs from `public/` (W3) | Low |
| 6 | Differentiate preview page title (W4) | Low |
| 7 | Stop building cannibal static pages (W5) | Medium |
| 8 | Move brand theme CSS to head (W8) | Low |

---

## What Is Already Excellent

- Single source of truth for brand/SEO tokens (`src/data/brand.ts`).
- Locked title → H1 → intro → sections content formula on product pages.
- Hreflang on all locale-aware routes + `x-default`.
- Image sitemap with captions for crawl discovery.
- Security headers + `noindex` on 404 and brand studio.
- Automated sitemap validation in CI (`prebuild` / `validate:sitemaps`).
- Cannibalization strategy documented and enforced at edge.

---

*This audit was performed read-only. No application source files were modified. Dev server confirmed running at http://localhost:4321 without errors.*
