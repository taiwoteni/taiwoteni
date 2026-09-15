# Teninlanimi Taiwo — Portfolio

Next.js 14 (App Router) build of the portfolio designed in Claude Design, live at
**https://www.teninlanimi.xyz**. Pages recreate the design pixel-for-pixel.

## Routes

| Route | Source | Notes |
|---|---|---|
| `/` | `app/(site)/page.tsx` | Home — hero, stats, work, walkthroughs, experience, about, stack, education, testimonials, contact |
| `/work/[slug]` | `app/(case)/work/[slug]/page.tsx` | 7 statically generated case studies from `lib/cases.tsx` |
| `/resume` | `app/(doc)/resume/page.tsx` | Printable résumé (`<doc-page>` from `public/doc-page.js`) |
| `/api/contact` | `app/api/contact/route.ts` | Contact form → Resend |
| `/sitemap.xml`, `/robots.txt` | `app/sitemap.ts`, `app/robots.ts` | SEO |

Each route group has its **own root layout and stylesheet** (`site.css`, `case.css`,
`resume.css`, copied from the design) so their global rules never mix.

## Structure

- `lib/home.tsx`, `lib/cases.tsx` — page content (edit copy here).
- `components/site/HomeEffects.tsx` — intro, counters, walkthroughs, testimonials, form (port of the design's `site.js`).
- `components/observeReveal.ts` — scroll reveals (also works for sections taller than the screen).
- `lib/seo.tsx` — JSON-LD; `lib/og.tsx` — generated social preview images (fonts in `assets/og-fonts`).
- `emails/` — React Email templates.

## Contact email

| Email | From |
|---|---|
| Enquiry alert → Teni | `Portfolio Alerts <alerts@teninlanimi.xyz>` |
| Confirmation → visitor | `Teni Taiwo <truly@teninlanimi.xyz>` |

Both use the brand-mark header. The avatar inboxes show next to the sender is not
set by the email — see "Sender avatars" below.

Preview templates with `npm run email:dev` (http://localhost:3001).

## Sender avatars

Inbox avatars come from outside the email: Gmail shows the Google-account photo of the
sending address, and BIMI (DNS + DMARC enforcement, plus a VMC/CMC certificate for
Gmail/Apple Mail) shows one logo for the whole domain.

## Environment

See `.env.example`: `RESEND_API_KEY` (required for email), `CONTACT_TO_EMAIL`,
`NEXT_PUBLIC_SITE_URL` (canonical origin, defaults to www), `GOOGLE_SITE_VERIFICATION`.

## Scripts

```bash
npm run dev        # local dev
npm run build      # production build
npm run lint
npm run email:dev  # email template preview
```
