# Offene Punkte — mit Kunde klären

Stand: 15.07.2026 · Quelle: Relaunch-Briefing + Befunde aus der Content-Extraktion (Phase 0)

1. **Shop/Online-Verkauf:** Die alte Squarespace-Seite hat einen Warenkorb. In v1 bewusst
   weggelassen — alle Bestell-Flows laufen über Anfrageformular/Telefon. Shop als separates
   Projekt übernehmen oder dauerhaft streichen?
2. **„Sindelfingen":** Taucht in den Meta-Descriptions der alten Seite auf („…in Stuttgart
   und Sindelfingen"), aber **nirgends im sichtbaren Content** (in Phase 0 verifiziert:
   nur in `og:description`/`meta description`). Zweiter Standort, Liefergebiet oder Altlast?
   → Bis zur Klärung nicht auf der neuen Seite verwendet.
3. **Original-Bilddateien** in voller Auflösung anfordern. Die 6 CDN-Kopien (max. 2500 px)
   sind Übergangslösung; für Hero-Flächen und Druck wären Originale besser. Generell:
   eigenes Foto-Shooting empfohlen (Produkt-Stills auf Porzellan/Marmor passend zum Design).
4. **Datenschutzerklärung:** Entwurf liegt unter `/datenschutz` (Netlify-Hosting,
   Kontaktformular, Click-to-Load-Karte berücksichtigt) — **juristisch prüfen lassen**,
   keine Rechtsberatung. Alte Seite hatte soweit auffindbar keine eigene Datenschutzseite.
5. **Google-Business-Profil:** Link/Verknüpfung fehlt noch (für JSON-LD `sameAs` +
   „Route planen"-Links + Einbindung echter Bewertungen mit Genehmigung).
6. **Preisindikationen** („ab …") für Torten/Catering — ja/nein? Aktuell keinerlei Preise
   auf der Seite (bewusst, keine erfundenen Fakten).
7. **Vorlaufzeiten** für Hochzeitstorten/Geburtstagstorten/Catering: konkrete Wochenangaben
   für FAQ + Blogpost „Hochzeitstorte bestellen" nötig. Aktuell neutral formuliert
   („früh anfragen", ohne Zahl).
8. **Workshops:** Die alte Kontaktseite erwähnt „Workshops" als Anfragegrund — auf keiner
   anderen Seite beschrieben. Gibt es ein Workshop-Angebot (Macaron-Kurse o. ä.)?
   Wäre eine eigene Leistungsseite + starkes Local-SEO-Thema.
9. **Halal-Zertifizierung:** Auf der alten Seite steht „halal-zertifizierte Rinder-Gelatine".
   Gibt es ein Zertifikat/eine Zertifizierungsstelle, die genannt werden darf?
   (Stärkt die USP-Seite `/halal-bio-vegan` erheblich.)
10. **Bio-Nachweis:** „beste Bio-Zutaten" — gibt es eine Bio-Zertifizierung des Betriebs
    (EU-Bio-Logo-Pflichten!) oder bezieht sich „bio" auf eingekaufte Zutaten? Formulierung
    ggf. juristisch absichern.
11. **Facebook-URL:** Die alte Seite verlinkt `facebook.com/Pâtissier-Macaron-Tartelette-
    Boutique-100063518826535` — Vanity-URL mit Sonderzeichen. Aktuelle kanonische
    Seiten-URL bestätigen (im Code vorerst ID-basiert verlinkt).
12. **E-Mail-Empfänger für Formular-Benachrichtigungen** in Netlify konfigurieren
    (Dashboard → Forms → Notifications → kontakt@patissier-stuttgart.de).
