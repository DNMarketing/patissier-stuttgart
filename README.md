# Pâtissier Stuttgart — Website-Relaunch

Relaunch von [patissier-stuttgart.de](https://www.patissier-stuttgart.de) als
mehrseitige Next.js-Site. Design-Konzept: **„Die Boutique-Vitrine"** (siehe `DESIGN.md`).

## Stack

- Next.js 15 (App Router, SSG), TypeScript strict, Tailwind CSS v4
- Motion (`motion`, LazyMotion + domAnimation) für Scroll-Reveals; Hero-Choreografie rein CSS
- MDX-Blog (`next-mdx-remote/rsc` + `gray-matter`) unter `content/blog/`
- Netlify (Forms, Security-Header via `netlify.toml`, `@netlify/plugin-nextjs`)
- Fonts self-hosted (`next/font/local`): Bodoni Moda (Display) + Hanken Grotesk (Body)

## Entwicklung

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # Produktions-Build
npm run typecheck  # tsc --noEmit
```

## Inhalte pflegen (ohne Code-Wissen)

| Was | Wo |
|---|---|
| Öffnungszeiten, Adresse, Telefon, Social | `src/lib/site.ts` |
| Sortiment (Vitrine + Leistungsseiten-Bilder) | `content/data/sortiment.ts` |
| FAQ | `content/data/faqs.ts` |
| Kundenstimmen | `content/data/testimonials.ts` |
| Blogposts | `content/blog/*.mdx` (Frontmatter: title, description, date, cover, keywords, tags) |
| Legacy-Inhalte der alten Website | `content/legacy/` (Referenz, wird nicht ausgeliefert) |

**NAP-Regel:** Name, Adresse und Telefonnummer werden ausschließlich aus
`src/lib/site.ts` bezogen, damit sie überall identisch sind (Local SEO).

## Formular (Netlify Forms)

- Statische Registrierung: `public/__forms.html` (Formularname `kontakt`)
- Honeypot-Feld `bot-field`, DSGVO-Checkbox, clientseitige Validierung
- Serverseitige Prüfung: `netlify/functions/submission-created.mts`
- Nach dem ersten Deploy: E-Mail-Benachrichtigung im Netlify-Dashboard einrichten
  (Forms → Notifications → kontakt@patissier-stuttgart.de)

## SEO

- Metadata pro Route (Canonical, OG, Twitter), `sitemap.ts`, `robots.ts`
- JSON-LD: `Bakery` (global), `BreadcrumbList`, `FAQPage` (/faq), `Article` (Blog)
- OG-Images: on-brand generiert zur Build-Zeit (`src/lib/og.tsx` + `opengraph-image.tsx` pro Route)
- 301-Redirects alter Squarespace-Pfade: `next.config.ts`

## Offene Punkte

Siehe `OFFENE-PUNKTE.md` — insbesondere Shop-Entscheidung, „Sindelfingen",
Original-Bilder, juristische Prüfung der Datenschutzerklärung.
