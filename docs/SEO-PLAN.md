# NextConversion — SEO Plan

> **Scope guardrail:** Every item below is **non-visual** to the existing site.
> Technical items live in `<head>`, route files, or config. Content items are
> **new** pages (e.g. `/blog/*`) that don't alter the design of any current page.
> Nothing here changes the layout, styling, or components of the live pages.

**Domain:** `https://nextconversion.ai` (apex canonical)
**Stack:** Next.js 16 App Router · static marketing site
**Last updated:** 2026-06-04

---

## Phase 0 — Already shipped ✅

Foundational technical SEO is in place (PRs #84, #85):

- Root metadata: `metadataBase`, title template, canonical URLs, keywords, full Open Graph + Twitter `summary_large_image`, robots directives.
- `robots.ts` → `/robots.txt` (allows `/`, blocks `/api/`, points to sitemap).
- `sitemap.ts` → `/sitemap.xml` (home, privacy, terms).
- Generated branded OG image (`opengraph-image.tsx`).
- JSON-LD: `Organization` + `WebSite` + `SoftwareApplication`.
- Brand icon set (favicon, icon, apple-icon) + `manifest.ts` — replaced the Next.js placeholder favicon.
- Solid heading hierarchy, semantic landmarks, descriptive/decorative `alt` text, `lang="en"`.

---

## Phase 1 — Technical quick wins (remaining) · *visual impact: none*

| # | Item | Owner | Notes |
|---|------|-------|-------|
| 1.1 | **Google Search Console + Bing Webmaster** verification | You (+ I can add the TXT/meta) | Verify via DNS `TXT` at GoDaddy or a meta tag I can drop into metadata. Submit `/sitemap.xml`. |
| 1.2 | **Canonical host redirect** | You (Vercel) | Set apex `nextconversion.ai` primary; `www` → 308 redirect to apex (matches the canonical in code). |
| 1.3 | **Enrich Organization schema** | I can do | Add `contactPoint`, `foundingDate`, `slogan`, more `sameAs` (X, Crunchbase) once you confirm the values. Feeds Google AI-Mode entity verification. |
| 1.4 | **`Service`/`Product` + `Offer` detail** | I can do | Flesh out `SoftwareApplication`/`Offer` (pricing model, category) — AI engines use this to describe the product. |
| 1.5 | **`llms.txt`** (emerging GEO convention) | I can do | Add `/public/llms.txt` summarizing the product + key URLs for LLM crawlers. Non-visual, like `robots.txt`. |
| 1.6 | **CWV / INP monitoring** | I can wire | Add privacy-friendly RUM (e.g. Vercel Speed Insights / `web-vitals`) to track LCP/INP/CLS in the field. No UI change. |
| 1.7 | **Trim dead config** | I can do | `next.config.ts` `remotePatterns` reference image CDNs not used anywhere — harmless cleanup. |
| 1.8 | **Per-page meta descriptions** | I can do | Add unique descriptions to any future routes; privacy/terms already done. |
| 1.9 | **Image SEO** | I can do | Descriptive filenames + keep meaningful `alt`; add an image entry to the sitemap when product imagery matters for image search. |
| 1.10 | **Security/trust headers** | You (Vercel) / I can add | HSTS, `X-Content-Type-Options`, referrer policy — minor trust signal, no UI impact. |

---

## Phase 2 — Content & topical authority · *visual impact: none (new pages only)*

This is the **highest-leverage** work. B2B SaaS SEO is won with a pillar-spoke
content model, not the homepage. None of this touches existing pages.

### 2.1 Stand up a content hub
- Add a `/blog` (or `/resources`) section — **new** route, can reuse existing
  design tokens so it's on-brand without redesigning anything.
- Each post gets `generateMetadata` (title/description/canonical/OG) +
  `Article`/`BlogPosting` JSON-LD + an entry in a dynamic sitemap.

### 2.2 Build topic clusters (pillar → spokes)
Target buyer-intent terms across the funnel. Suggested pillars:

1. **AI Conversion Rate Optimization** (pillar)
   - spokes: "what is AI CRO", "AI CRO vs traditional A/B testing", "CRO benchmarks by industry", "how AI personalizes checkout"…
2. **E-commerce Personalization** (pillar)
   - spokes: "real-time personalization", "1:1 personalization examples", "personalization ROI", "personalization vs segmentation"…
3. **Agentic Commerce / AI Agents for E-commerce** (pillar)
   - spokes: "what is agentic commerce", "AI shopping assistant", "autonomous merchandising", "AI product description generation"…
4. **Self-Adaptive Storefronts** (brand category pillar — own the term)
   - spokes: definitions, comparisons, case studies.

### 2.3 Supporting page types
- **Comparison/alternative pages** ("NextConversion vs [competitor]", "best AI CRO tools").
- **Use-case pages** (by vertical: fashion, beauty, electronics).
- **Glossary/definitions** (great for AI citation + featured-snippet capture).
- **Customer stories / case studies** with real metrics (also feeds `Review`/`Organization` trust).

### 2.4 Content quality bar (also = GEO bar)
- **Answer-first**: first ~200 words directly answer the page's primary question (44% of AI citations come from the first 30% of text).
- Use **tables, bullet lists, and Q&A blocks** — AI engines lift these verbatim.
- Include **original data/benchmarks** — uniquely citable, hard to replicate.
- Depth over volume; consolidate rather than thin posts.

---

## Phase 3 — Generative Engine Optimization (GEO) · *visual impact: none*

Optimize to be **cited inside** ChatGPT, Perplexity, Gemini, Google AI Overviews.

- **Schema everywhere** (Phase 1.3/1.4 + Article schema on posts) — AI Mode uses schema to verify claims and assess credibility, even when no rich result shows.
- **Freshness**: real `lastModified` in the sitemap + visible "updated" dates on content (Perplexity favors recency).
- **Entity clarity**: consistent NAP/brand name, `sameAs` links, a crisp one-paragraph definition of what NextConversion is on the homepage and About page (text content, on new/About page — not a redesign).
- **`llms.txt`** (1.5) as an explicit machine-readable site summary.
- **Get cited externally** (overlaps Phase 4) — AI engines weight third-party validation heavily.
- **Track AI visibility**: monitor brand/citation mentions in ChatGPT/Perplexity (tools like LLMrefs/Profound, or manual prompt checks).

---

## Phase 4 — Off-page authority · *visual impact: none*

- **Product directories**: G2, Capterra, Product Hunt, AlternativeTo, Crunchbase — high-authority backlinks + appear in "best AI CRO tool" AI answers.
- **Digital PR**: data-driven studies/press; guest posts, podcasts, expert quotes (HARO-style) — primary GEO citation source.
- **LinkedIn company page** (already linked in `sameAs`) — post cadence; thought leadership.
- **Strategic backlinks** from ecommerce/martech publications.

---

## Phase 5 — Measurement & governance

- **Search Console + Bing WMT**: impressions, clicks, queries, indexing coverage, CWV report.
- **Analytics**: GA4 or a privacy-first alternative (Plausible/Vercel Analytics) — non-visual script.
- **Rank + AI-citation tracking**: target keywords + share-of-voice in AI answers.
- **Pipeline attribution**: tie organic → signups/demos (the real B2B SaaS metric, not raw traffic).
- **Quarterly content refresh**: update stats/dates on top pages to hold rankings and AI freshness.

---

## Suggested sequencing

1. **Now (post-deploy):** 1.1, 1.2 (verification, redirect) → get indexed correctly.
2. **Weeks 1–2:** 1.3–1.7 (schema enrichment, llms.txt, CWV, cleanup) — all code, no visual change.
3. **Weeks 2–6:** Phase 2.1 (content hub scaffolding) + first pillar + 3–5 spokes.
4. **Ongoing:** Phases 2–4 content + authority cadence; Phase 5 monitoring throughout.

---

## What I (Claude) can implement directly, without touching the visual
- All of Phase 1 (schema, llms.txt, CWV wiring, GSC meta-verification, config cleanup).
- Phase 2.1 scaffolding: `/blog` route, MDX/markdown content pipeline, per-post metadata + `Article` JSON-LD + dynamic sitemap — reusing existing styles so it's on-brand with **no redesign** of current pages.
- Phase 3 technical pieces (schema, freshness, entity markup).

## What needs you (marketing/ops, off-code)
- GSC/Bing account verification approval, Vercel domain redirect setting.
- Writing/approving the actual content copy.
- Off-page PR, directory listings, backlink outreach.

---

### Sources
- [Optimist — SaaS SEO Strategy (2026)](https://www.yesoptimist.com/saas-seo-strategy/)
- [growth.cx — SEO Trends for B2B SaaS 2026](https://growth.cx/blog/seo-trends-for-b2b-saas/)
- [LLMrefs — Generative Engine Optimization 2026 Guide](https://llmrefs.com/generative-engine-optimization)
- [Jasper — GEO vs AEO vs SEO 2026](https://www.jasper.ai/blog/geo-aeo)
- [Digital Applied — Schema Markup After March 2026](https://www.digitalapplied.com/blog/schema-markup-after-march-2026-structured-data-strategies)
- [alevdigital — FAQ Structured Data in 2026](https://alevdigital.com/blog/faq-structured-data-2026/)
- [DebugBear — Technical SEO Checklist 2026](https://www.debugbear.com/blog/technical-seo-checklist)
- [Pagepro — Next.js SEO Guide 2026](https://pagepro.co/blog/nextjs-seo/)
