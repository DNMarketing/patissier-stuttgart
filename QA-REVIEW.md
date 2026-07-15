# Phase-4-QA: Screenshot-Review (Playwright, 375 px & 1440 px)

Vorgehen: Produktions-Build via `next start`, Full-Page-Screenshots aller 14 Seitentypen
in beiden Breakpoints (`scripts/screenshots.mjs`), kritisches Review, Fixes, erneuter Pass.

## Gefunden → Gefixt

1. **Hero-Zeilenumbruch (Desktop):** Bei 1440 px brach „handgemacht in" innerhalb der
   Mask-Zeile um; „in" stand allein auf einer Zeile. → Display-Größe von max. 6 rem auf
   max. 5,5 rem reduziert (`--text-display`), Zeilen laufen jetzt sauber ohne Umbruch.
2. **Stale-Server beim ersten Re-Test:** Ungestylter Screenshot, weil der alte
   `next start`-Prozess nach dem Rebuild veraltete Asset-Hashes auslieferte (CSS-404).
   → Port sauber freigeräumt, Server neu gestartet, CSS-200 verifiziert.
3. **Scroll-Reveals in Full-Page-Screenshots unsichtbar:** `whileInView` feuert bei
   Playwrights Full-Page-Capture nicht; zusätzlich verschluckte `scroll-behavior: smooth`
   die programmatischen Scroll-Schritte. → Screenshot-Script scrollt jetzt mit
   `scroll-behavior: auto` schrittweise durch (reines Testing-Artefakt, im Browser korrekt).
4. **Blog-Cover dreifach doppelt:** Drei der sechs Journal-Karten nutzten dasselbe
   Macaron-Buffet-Foto. → „Macarons personalisieren" nutzt jetzt das bislang ungenutzte
   Event-Dekorationsfoto; alle sechs Cover sind einzigartig.
5. **Gedankenstrich-Pass:** 109 „—" in der sichtbaren Copy durch natürliche
   Interpunktion ersetzt (Komma/Punkt/Doppelpunkt); Bis-Striche in Zeitangaben
   (`12:00 – 17:00`) und Title-Tag-Separatoren bewusst beibehalten.
6. **/kontakt war SSR-dynamisch** (searchParams) und Blog-OG on-demand:
   → Anlass-Vorauswahl liest jetzt clientseitig `useSearchParams` (Suspense),
   Blog-OG nutzt das statische Cover. Alle Routen sind SSG (○/●).

## Geprüft, ohne Befund

- Zeilenlängen: Fließtext überall ≤ ~62–68 ch, Leads ≤ 58 ch
- Spacing-Rhythmus: Sektionen 80/96 px, konsistent über alle Seiten
- Typo-Details: „deutsche Anführungszeichen", N°-Index, Tabellenziffern (tabular-nums)
- Öffnungszeiten: „Sonntags geöffnet" überall hervorgehoben, Mo/Di klar als Ruhetage
- Mobile 375 px: keine horizontalen Überläufe, Touch-Targets ≥ 44 px, Menü-Overlay ok
- 404: on-brand („N° 404 – Dieses Fach der Vitrine ist leer") mit Sortiment-Wegweiser
- Hover-/Focus-States: Nav-Hairline, Bild-Zoom ≤ 1.04, Focus-Ring framboise (Code-Review)

## Runde 2: Lighthouse-Befunde → Gefixt

7. **LCP durch Animation blockiert (Leistungsseiten):** Das priorisierte Hero-Bild der
   Leistungs-/USP-/Über-uns-Seiten steckte im Motion-`Reveal` (opacity 0 bis zur
   Hydration) → LCP 3–4 s. Auch der CSS-Hero der Startseite startete mit `opacity: 0`.
   → Above-the-fold-Bilder aus allen Reveals gelöst; Hero-Settle animiert nur noch
   `transform`. LCP: 3,3 s → 1,6 s.
8. **CLS 0.29 auf /kontakt:** Formular hing in `<Suspense fallback={null}>` (wegen
   `useSearchParams`) und ploppte nach der Hydration ein. → `?anlass=`-Vorauswahl wird
   jetzt im `useEffect` gelesen, Formular rendert statisch. CLS: 0.293 → 0.
9. **Kontrast Footer-„Ruhetag"** (`porzellan/40` auf Schokolade < 4,5:1) → auf `/60`
   angehoben. A11y: 96 → 100.
10. **Font-Preload-Konkurrenz:** Bodoni Italic (53 KB, nur für N°-Labels) lud mit
    Preload vor dem LCP-Bild. → Eigene `next/font`-Deklaration mit `preload: false`;
    Blockquotes/Labels nutzen die echte Italic weiterhin (kein Faux-Italic).

## Messwerte (Production-Build, Lighthouse 12, mobil, DevTools-Throttling)

| Seite | Perf | A11y | BP | SEO | LCP | CLS | TBT |
|---|---|---|---|---|---|---|---|
| Startseite | 99 | 100 | 100 | 100 | 1,7 s | 0 | 70 ms |
| /hochzeitstorten | 99 | 100 | 100 | 100 | 1,6 s | 0 | 50 ms |
| /kontakt | 100 | 100 | 100 | 100 | 1,5 s | 0 | 50 ms |
| Blogpost | 99 | 100 | 100 | 100 | 1,6 s | 0 | 60 ms |

Initiales JS (gzip, ohne `noModule`-Polyfills): **151,7 KB** < 160-KB-Budget.
`tsc --noEmit` sauber, Build ohne Warnings, alle 36 Routen statisch (SSG).
Hinweis: Auf Netlify (HTTP/2, CDN, vorgewärmte Bild-Derivate) liegen die Werte
nochmals über den lokalen `next start`-Messungen (HTTP/1.1).

## Definition of Done — Abnahme

- [x] Alle Routen aus Briefing §5 live, unique Title/Description, JSON-LD valide
      (Bakery global, BreadcrumbList, FAQPage nur auf /faq, Article auf Blogposts — parsegeprüft)
- [x] Sitemap (19 URLs), robots.txt, 308-Permanent-Redirects (/about, /contact,
      /impressum-1-1), gestaltete 404, Favicon (P̂-Monogramm), OG-Images pro Seitentyp
- [x] Performance-Gates erfüllt und gemessen (Tabelle oben)
- [x] Reduced-Motion geprüft (alle Einstiege sofort sichtbar), Keyboard-Navigation
      vollständig (Skip-Link, Focus-Ringe framboise, native details/summary)
- [x] Formular: Honeypot, Client-Validierung mit klaren Meldungen, DSGVO-Checkbox,
      serverseitige Prüfung (`submission-created`-Function). Live-Submit erst auf
      Netlify testbar (lokal existiert der Forms-Endpoint nicht).
- [x] Impressum (1:1 von der Live-Site) & Datenschutz (Entwurf, juristisch prüfen
      lassen) vorhanden; NAP überall aus `src/lib/site.ts` (identisch per Konstruktion)
- [x] 6 Blogposts vollständig (je ~850–1100 Wörter), intern auf Money-Pages verlinkt
- [x] OFFENE-PUNKTE.md gepflegt (12 Punkte), keine erfundenen Fakten im Content
- [x] Screenshot-Review dokumentiert (dieses Dokument), Fixes verifiziert im 3. Pass

## Bekannte Einschränkung (kein Bug)

Die 6 Legacy-Fotos sind Übergangsmaterial (max. 2500 px, teils Event-Schnappschüsse).
Das Design trägt bewusst über Typografie und Hairline-System; ein Produkt-Shooting
ist als OFFENE-PUNKTE #3 beim Kunden angefragt.
