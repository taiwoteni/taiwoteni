# Teninlanimi Taiwo — Portfolio (v2)

A Next.js (App Router) implementation of the dark + red portfolio designed in
Claude Design. Recreates the design prototype pixel-for-pixel and turns the
single-page mock plus its four nested case-study screens into a real,
multi-route Next.js site.

## Routes

| Route | Source design file | Description |
|---|---|---|
| `/` | `index.html` | Home — hero, profile, selected work, experience, stack, education, testimonials, contact |
| `/work/troco` | `work/troco.html` | Troco case study |
| `/work/orems` | `work/orems.html` | Orems case study |
| `/work/qobi` | `work/qobi.html` | Qobi case study |
| `/work/star-taskz` | `work/star-taskz.html` | Star Taskz case study |

Case-study pages are generated statically from a single data module
([`lib/cases.tsx`](lib/cases.tsx)) via the dynamic `/work/[slug]` route, so adding
or editing a project is a data change, not a new page.

## Stack

- **Next.js 14** (App Router, React Server Components) + **TypeScript**
- **`next/font`** self-hosting the three design typefaces — Fraunces (display
  serif), Hanken Grotesk (body), JetBrains Mono (labels). Variable fonts, so the
  design's optical weights (340 / 360 / 380) are preserved.
- **Plain CSS** ported verbatim from the prototype:
  [`app/globals.css`](app/globals.css) (home) and
  [`app/work/case.css`](app/work/case.css) (case studies). The design tokens,
  grain overlay, red glow, masked grid, and all responsive rules are unchanged.

## Interactivity (client islands)

The page is server-rendered; only the genuinely interactive pieces are client
components:

- [`SiteNav`](components/SiteNav.tsx) — blur-on-scroll nav.
- [`ScrollReveal`](components/ScrollReveal.tsx) — `IntersectionObserver` reveal
  animations + immediate hero stagger; respects `prefers-reduced-motion`.
- [`ProjectCard`](components/ProjectCard.tsx) — whole-card link to a case study
  (inner live-site links still work), keyboard accessible.
- [`Testimonials`](components/Testimonials.tsx) — auto-advancing, paginated
  slider with progress bar, pause-on-hover/focus, and arrow-key control.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
npm run lint
```

## Assets

Images live in [`public/`](public/) (portrait, project shots, and the per-project
`troco/`, `qobi/`, `star/` mobile screenshots), mirroring the design bundle.

### To supply later (referenced but not yet provided)

- `public/og-image.png` — 1200×630 social card.
- `public/resume.pdf` — linked from the Contact section.

Real testimonial quotes/names/photos can replace the placeholders in
[`components/Testimonials.tsx`](components/Testimonials.tsx); the slider scales to
any number of entries.
