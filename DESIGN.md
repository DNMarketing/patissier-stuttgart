# Designplan — Pâtissier Stuttgart Relaunch

> Phase 1-Deliverable. Erst Plan, dann Selbstkritik, dann exakte Umsetzung.

## 1. Konzept in einem Satz

**„Die Boutique-Vitrine":** Die Website ist die Verlängerung der Glasvitrine in der
Kornbergstraße — Porzellanfläche, präzise Hairlines wie Vitrinenkanten, Produkte mit
fein nummerierten Preiskärtchen, ein einziger Farbakzent wie ein Seidenband um die
Patisserie-Schachtel.

## 2. Farbpalette (5 benannte Werte)

| Token | Hex | Rolle |
|---|---|---|
| `porzellan` | `#F7F5F0` | Grundfläche. Kühles Porzellan-Weiß — bewusst **kein** warmes Cream-Beige. |
| `puder` | `#EFE6E1` | Wechselflächen & Karten. Wie eine matte Macaron-Schale, kaum wahrnehmbar rosé. |
| `schokolade` | `#2A1E18` | Text & dunkle Flächen. 70%-Schokolade statt reinem Schwarz. |
| `framboise` | `#9E2B43` | DER eine Akzent. Tiefes Himbeer — Links, CTAs, Aktiv-Zustände, „Sonntags geöffnet". |
| `taupe` | `#6E5F55` | Muted Text, Captions, Beschriftungen (AA-geprüft auf Porzellan: ~5,3:1). |

Hairlines: `schokolade` mit 14 % Alpha. Kein Gold als Farbe (siehe Selbstkritik).

Kontraste (WCAG): schokolade/porzellan ≈ 13:1 · framboise/porzellan ≈ 7:1 ·
weiß/framboise ≈ 6,3:1 · taupe/porzellan ≈ 5,3:1. Alles ≥ AA.

## 3. Typografie

- **Display: Bodoni Moda** (variable, optische Größen, + Italic).
  Begründung: eine echte Didone — die Schriftgattung der französischen Patisserie-Etiketten
  (Ladurée-Tradition) — und dank variabler `opsz`-Achse bleiben die Haarstriche bei 96 px
  scharf UND bei 20 px lesbar. Nicht Playfair, nicht DM Serif (explizit verboten, zurecht).
- **Body: Hanken Grotesk** (variable, 400/500/600).
  Begründung: ruhige humanistische Grotesk mit warmen Kurven — präzise ohne die technische
  Kälte von Inter, ohne den Template-Beigeschmack von Montserrat. Exzellent bei 15–17 px.
- **Utility:** Hanken Grotesk 600, Versalien, `letter-spacing: 0.14em`, 11–12 px —
  die „Preiskärtchen-Beschriftung" (Eyebrows, Labels, Nav).
- 2 Familien, 4 effektive Schnitte. Self-hosted via `next/font/local` (kein CDN, DSGVO).
- Typografische Details: „deutsche Anführungszeichen", echter Apostroph ’, `hanging-punctuation`
  wo unterstützt, `font-variant-numeric: lining-nums` in Tabellen, `N°` als Sortiment-Kürzel.
- Type-Scale (fluid, clamp): Display 44→96 px · H2 32→56 px · H3 22→30 px ·
  Lead 18→21 px · Body 16→17 px · Caption 13 px · Label 11→12 px.

## 4. Signature-Element (genau EINS): Die Vitrine

Horizontale Produkt-Schaukästen auf der Startseite — CSS `scroll-snap` (kein Scroll-Jacking),
jede Karte wie ein Fach in der Glasvitrine:

- Hairline-Rahmen, Porzellan-Fond, Produktfoto oben, darunter ein **Preiskärtchen**:
  `N° 01` (Bodoni Italic) · Kategorie-Name (Bodoni) · einzeilige Beschreibung (Hanken) ·
  Zeile „→ zur Sorte" in Framboise.
- Präzise Snap-Punkte, sichtbarer Fortschritt als feine Zählung „01 — 05" (kein Dot-Carousel).
- Die Nummerierung `N° 01–05` der fünf Sortimente (Macarons, Törtchen, Hochzeitstorten,
  Geburtstagstorten, Catering) wird als *stilles Echo* auf den Leistungsseiten als
  Eyebrow-Label wiederverwendet — klein, nie oversized. Das ist Systemkonsistenz,
  kein zweites Signature-Element.

Alles andere bleibt ruhig: statische Editorial-Layouts, Hairline-Struktur, viel Weißraum.
Chanel-Regel angewendet: kein Macaron-Farbcode zusätzlich, keine Editorial-Ziffern zusätzlich.

## 5. Layout-Konzept

Editorial-Grid (12 Spalten, max. 1200 px Content, luftige Ränder), Struktur durch
Hairlines statt durch Kästen/Schatten. Keine Card-Shadows, kein Glassmorphism.
Asymmetrische Bildplatzierung (7/5-Split), Bilder immer in ruhigen, kontrollierten
Ausschnitten (die Kundenfotos sind gut, aber kein Studio-Material — das Design trägt
über Typografie und System, nicht über Fotografie).

### Wireframe: Home

```
┌──────────────────────────────────────────────────────────────┐
│ PÂTISSIER            Macarons Törtchen Torten … [Torte anfragen]│  Header, Hairline unten
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  Französische Patisserie.        ┌────────────────┐          │  Hero: Didone-Headline
│  Handgemacht in                  │  Hochzeitstorte │          │  zeilenweise Mask-Reveal,
│  Stuttgart-West.                 │  (weiß, Rosen)  │          │  Bild Scale-Settle,
│                                  └────────────────┘          │  Meta-Zeile zuletzt
│  Bio · 100 % halal · vegan möglich                           │
│  Kornbergstr. 17 · So geöffnet   [Sortiment ansehen]         │
├──────────────────────────────────────────────────────────────┤
│  DIE VITRINE          ← horizontal, scroll-snap →   01 — 05  │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌───────    │  Signature-Element
│  │ [Foto]  │ │ [Foto]  │ │ [Foto]  │ │ [Foto]  │ │           │
│  │ N° 01   │ │ N° 02   │ │ N° 03   │ │ N° 04   │ │ N° 05     │
│  │ Macarons│ │ Törtchen│ │ Hochzeit│ │ Geburtst│ │ Catering  │
│  └─────────┘ └─────────┘ └─────────┘ └─────────┘ └───────    │
├──────────────────────────────────────────────────────────────┤
│  UNSERE GRUNDSÄTZE (Puder-Fläche)                            │
│  ── Bio-Zutaten ── · ── 100 % halal ── · ── Vegan möglich ── │  Hairline-gerahmte
│  je 2 Zeilen Erklärung, Link → /halal-bio-vegan              │  „Schachtel-Etiketten"
├──────────────────────────────────────────────────────────────┤
│  „Wie in Paris, nur eben um die Ecke!" (Bodoni, groß)        │  Kundenstimme
├──────────────────────────────────────────────────────────────┤
│  Catering-Teaser (Bild links 5 / Text rechts 7)              │
├──────────────────────────────────────────────────────────────┤
│  Besuch: Öffnungszeiten-Tafel │ Adresse │ [Torte anfragen]   │  „So geöffnet" in Framboise,
├──────────────────────────────────────────────────────────────┤  Mo/Di als Ruhetage klar
│  Footer: Sitemap-Nav · NAP · Instagram/Facebook · Recht      │
└──────────────────────────────────────────────────────────────┘
```

### Wireframe: Leistungsseite (z. B. /hochzeitstorten)

```
┌──────────────────────────────────────────────────────────────┐
│ Header                                                       │
├──────────────────────────────────────────────────────────────┤
│ Home / Hochzeitstorten                        N° 03          │  Breadcrumb + Sortiments-Nr.
│                                                              │
│ Hochzeitstorten,                    ┌──────────────┐         │  H1 + These (Lead),
│ die Ihren Tag tragen.               │ [Foto hoch]  │         │  Bild 5 Spalten
│ Lead-Absatz, 2–3 Zeilen.            │              │         │
├─────────────────────────────────────┴──────────────┴─────────┤
│ WAS WIR BACKEN — 2-spaltige Liste mit Hairline-Trennern      │
├──────────────────────────────────────────────────────────────┤
│ SO KOMMEN SIE ZU IHRER TORTE (Puder-Fläche)                  │
│ 1 Anfragen → 2 Beraten & Probieren → 3 Feinschliff → 4 Tag   │
├──────────────────────────────────────────────────────────────┤
│ Kundenstimme (passend)                                       │
├──────────────────────────────────────────────────────────────┤
│ HÄUFIGE FRAGEN (2–3, Accordion) → alle Fragen /faq           │
├──────────────────────────────────────────────────────────────┤
│ CTA-Block: „Torte anfragen" + Telefon + Hinweis Vorlauf      │
│ Verwandt: Sweet Tables (N° 05) · Geburtstagstorten (N° 04)   │  interne Verlinkung
├──────────────────────────────────────────────────────────────┤
│ Footer                                                       │
└──────────────────────────────────────────────────────────────┘
```

## 6. Motion (Umsetzung von Abschnitt 7 des Briefings)

- Tokens als CSS-Variablen: `--motion-fast: 200ms`, `--motion-base: 400ms`,
  `--motion-slow: 700ms`; Ease `cubic-bezier(0.22,1,0.36,1)`; Hero-Ease
  `cubic-bezier(0.16,1,0.3,1)`; Reveal-Distanz 24 px; Stagger 80 ms.
- **Hero-Sequenz (der eine Moment):** Headline-Zeilen per Mask-Reveal (0/80/160 ms),
  Bild Scale-Settle 1.04→1.0 (ab 250 ms, 1000 ms), Meta-Zeile + CTA Fade (ab 600 ms).
  Wie das Öffnen der Schachtel: Deckel, Seidenpapier, Karte.
- Scroll-Reveals: `whileInView` einmalig, nur Bilder + Section-Headlines. Fließtext statisch.
- Micro: Nav-Unterstreichung (Hairline wächst von links), Bild-Hover Zoom ≤ 1.04,
  Buttons mit Pressed-State (translateY 1 px + Abdunkeln).
- `motion` (LazyMotion + domAnimation), nur `transform`/`opacity`,
  `prefers-reduced-motion` → alles sofort sichtbar.

## 7. Selbstkritik (vor dem Build) — und was geändert wurde

**„Würde ich das für jede beliebige Patisserie so machen?"** — Prüfung pro Baustein:

1. **Didone + Off-White + Akzent = fast ein Patisserie-Default.** Ehrliche Antwort: die
   Zutatenliste ist naheliegend. Was es zum Entwurf macht, ist das System darum:
   Porzellan-kühler Fond statt Warm-Cream, Schokoladen-Ink statt Schwarz, Hairline-Vitrinen-
   Logik statt Card-Design, Preiskärtchen-Typografie mit `N°`-Index. **Geändert:** Das
   ursprünglich angedachte Gold als Sekundärakzent gestrichen (wäre Akzent Nr. 2 und das
   müdeste Luxus-Signal überhaupt). Gold existiert nur noch fotografisch (Goldblatt-Torte).
2. **Framboise ist der erwartbare Patisserie-Akzent** (Rosa/Beere). Pistache wäre
   überraschender, kippt aber ins Matcha-Café; Gold ist Klischee. **Entscheidung:** Framboise
   bleibt, aber tief und tintig (`#9E2B43`, kein Rosé), und diszipliniert: Links, CTAs,
   ein Highlight („Sonntags geöffnet"). Der Mut liegt in der Sparsamkeit, nicht im Farbton.
3. **Hero „Text links, Bild rechts" ist ein Default.** **Geändert:** Der Hero wird als
   choreografierte Sequenz gebaut (Mask-Reveal-Zeilen, Settle, Meta zuletzt) mit
   asymmetrischem 7/5-Schnitt, Bild ragt in den Header-Rand; die Meta-Zeile
   (Bio · halal · vegan / Adresse / „So geöffnet") ist Teil des Momentes — kein
   austauschbarer Zweispalter.
4. **Foto-Realität:** Es gibt genau 6 Kundenfotos, gut, aber kein Grolet-Studio-Material.
   Ein foto-lastiges Design würde lügen (Stock) oder enttäuschen. **Konsequenz:** Das Design
   trägt über Typografie, Hairline-System und Weißraum; Fotos erscheinen klein(er), in
   kontrollierten Crops, nie full-bleed als Qualitätsversprechen. Keine Stock-Fotos — nie.
5. **Vitrine vs. Macaron-Farbcode:** Der Farbcode wäre systemisch reizvoll, würde aber die
   „EIN Akzent"-Disziplin unterlaufen (fünf Pastelltöne = fünf Akzente) und mit Framboise
   konkurrieren. **Entscheidung:** Vitrine — sie ist die Marke (die Boutique HAT eine
   Vitrine), sie verkauft (Produkte + Einstieg in alle fünf Leistungsseiten), und sie ist
   als EIN Element perfekt ausführbar. Der `N°`-Index bleibt als kleinstes Echo.
6. **Puder-Fläche:** riskiert Beige-Einerlei. **Regel:** Puder nur für maximal eine
   Fläche pro Seite (Grundsätze/Ablauf), sonst Porzellan. Dunkle Schokoladen-Flächen
   nur Footer + CTA-Block — die Seite bleibt hell wie der Laden.

## 8. Bild-Mapping (Legacy → Einsatz)

| Datei | Einsatz |
|---|---|
| `hochzeitstorte-stuttgart-weiss-rosen.jpg` (2305×3073) | Home-Hero, /hochzeitstorten |
| `sweet-table-hochzeitstorte-macarons.jpg` (2500×3333) | /catering Hero, Vitrine N° 05 |
| `macaron-buffet-catering-stuttgart.jpg` (2500×3333) | /macarons, Vitrine N° 01, Blog |
| `dessert-toertchen-beeren-creme.jpg` (1284×1563) | /toertchen-und-kuchen, Vitrine N° 02 |
| `schokoladentorte-goldblatt-patisserie.jpg` (1284×1666) | /geburtstagstorten, Vitrine N° 04 |
| `event-dekoration-lampe-pastell.jpg` (1106×956) | /catering (Sekundärbild) |
| `logo-patissier-schwarz.png` (2500×1667) | Header/Footer (+ helle Variante), Favicon, OG |

Legacy-Alt-Texte werden übernommen und wo nötig verfeinert (`content/legacy/images.json`).
