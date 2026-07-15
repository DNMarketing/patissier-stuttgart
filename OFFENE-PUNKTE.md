# Offene Punkte — mit Kunde klären

Stand: 15.07.2026 · Quelle: Relaunch-Briefing + Befunde aus der Content-Extraktion (Phase 0)

1. **Shop/Online-Verkauf:** Die alte Squarespace-Seite hat einen Warenkorb. In v1 bewusst
   weggelassen — alle Bestell-Flows laufen über Anfrageformular/Telefon. Shop als separates
   Projekt übernehmen oder dauerhaft streichen?
2. **„Sindelfingen": GEKLÄRT (15.07.2026).** Laut Instagram-Posts des Kunden gab es einen
   Pop-up-Store in der Markthalle Sindelfingen, der laut eigener Ankündigung „ab sofort
   geschlossen" wurde. Die Erwähnungen in den alten Meta-Descriptions sind damit Altlast
   und bleiben auf der neuen Seite bewusst weg. Mit Kunde nur noch kurz bestätigen.
3. **Original-Bilddateien** in voller Auflösung anfordern. Die 6 Website-CDN-Kopien
   (max. 2500 px) und die 8 zusätzlich eingebauten Instagram-Bilder (max. 640–1080 px,
   unter `public/images/insta/`) sind Übergangslösung. Vom Kunden benötigt: die Originale
   der verwendeten Instagram-Motive (Sakura-Törtchen, Pastell-/Logo-Macarons, mehrstöckige
   Blütentorte, weiße Torte mit Macaron, Backstuben-Aufnahmen) + Freigabe. Hinweis: Auf den
   Logo-Macarons ist ein Kundenlogo (Sephora) sichtbar; Verwendung als Referenz vom Kunden
   bestätigen lassen. Generell: eigenes Foto-Shooting empfohlen.
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
8. **Workshops:** Die alte Kontaktseite erwähnt „Workshops" als Anfragegrund, und auf
   Instagram existiert ein eigenes Highlight „Workshops". Das Angebot gibt es also
   offenbar wirklich. Eigene Leistungsseite (macaron-workshop stuttgart = starkes
   Local-SEO-Thema) mit dem Kunden besprechen.
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
