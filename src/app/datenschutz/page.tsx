import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Datenschutzerklärung",
  description:
    "Datenschutzerklärung der Pâtissier - Macaron & Tartelette Boutique: Informationen zur Verarbeitung personenbezogener Daten auf dieser Website.",
  path: "/datenschutz",
});

/**
 * ENTWURF, vor Veröffentlichung juristisch prüfen lassen (siehe OFFENE-PUNKTE.md).
 * Abgedeckt: Netlify-Hosting, Kontaktformular (Netlify Forms), Click-to-Load-Karte,
 * keine Cookies, keine Tracker, self-hosted Fonts.
 */
export default function DatenschutzPage() {
  return (
    <section className="container-page pt-10 pb-20 md:pt-14 md:pb-28">
      <Breadcrumbs items={[{ name: "Datenschutz", path: "/datenschutz" }]} />
      <h1 className="mt-10 text-h2">Datenschutzerklärung</h1>
      <div className="article-prose mt-4">
        <h2>1. Verantwortliche Stelle</h2>
        <p>
          Verantwortlich für die Datenverarbeitung auf dieser Website ist:
          <br />
          {site.owner} (Einzelunternehmerin), {site.legalName}, {site.address.street},{" "}
          {site.address.zip} {site.address.city}, Telefon: {site.phone.display}, E-Mail:{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>

        <h2>2. Grundsätze: sparsam nach Design</h2>
        <p>
          Diese Website ist bewusst datensparsam gebaut: Sie setzt keine Cookies, nutzt
          keine Analyse- oder Tracking-Dienste und bindet keine Schriften oder Skripte
          von fremden Servern ein. Alle Schriften werden von unserem eigenen Server
          (self-hosted) ausgeliefert.
        </p>

        <h2>3. Hosting (Netlify)</h2>
        <p>
          Diese Website wird bei Netlify, Inc., 512 2nd Street, Suite 200, San
          Francisco, CA 94107, USA, gehostet. Beim Aufruf der Website verarbeitet
          Netlify technisch notwendige Daten (insbesondere IP-Adresse, Datum und
          Uhrzeit des Zugriffs, aufgerufene Seite, Browsertyp) in sogenannten
          Server-Logfiles. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1
          lit. f DSGVO (berechtigtes Interesse an der sicheren und stabilen
          Bereitstellung der Website). Die Übermittlung in die USA stützt sich auf die
          Standardvertragsklauseln der EU-Kommission sowie das EU-US Data Privacy
          Framework, dem Netlify beigetreten ist.
        </p>

        <h2>4. Kontaktformular</h2>
        <p>
          Wenn Sie unser Kontaktformular nutzen, verarbeiten wir die von Ihnen
          eingegebenen Daten (Name, E-Mail-Adresse, optional Telefonnummer, Anlass,
          Wunschtermin sowie Ihre Nachricht) ausschließlich zur Bearbeitung Ihrer
          Anfrage. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Anbahnung bzw.
          Durchführung eines Vertrags) sowie Ihre Einwilligung nach Art. 6 Abs. 1
          lit. a DSGVO, die Sie über die Checkbox im Formular erteilen. Die technische
          Entgegennahme der Formulardaten erfolgt über Netlify Forms (Anbieter siehe
          Ziffer 3). Wir löschen Ihre Anfragedaten, sobald sie für die Bearbeitung
          nicht mehr erforderlich sind und keine gesetzlichen Aufbewahrungspflichten
          entgegenstehen.
        </p>

        <h2>5. Anfahrtskarte (Google Maps, Zwei-Klick-Lösung)</h2>
        <p>
          Auf der Kontaktseite bieten wir eine Anfahrtskarte von Google Maps an. Die
          Karte wird erst geladen, wenn Sie aktiv auf „Karte laden“ klicken. Erst dann
          werden Daten (unter anderem Ihre IP-Adresse) an Google Ireland Limited,
          Gordon House, Barrow Street, Dublin 4, Irland, übertragen. Rechtsgrundlage
          ist Ihre Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO, die Sie durch den
          Klick erteilen. Ohne Ihren Klick findet keine Übertragung an Google statt.
          Weitere Informationen finden Sie in der Datenschutzerklärung von Google.
        </p>

        <h2>6. Ihre Rechte</h2>
        <p>
          Sie haben gegenüber uns das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung
          (Art. 16 DSGVO), Löschung (Art. 17 DSGVO), Einschränkung der Verarbeitung
          (Art. 18 DSGVO), Datenübertragbarkeit (Art. 20 DSGVO) sowie Widerspruch
          gegen die Verarbeitung (Art. 21 DSGVO). Eine erteilte Einwilligung können
          Sie jederzeit mit Wirkung für die Zukunft widerrufen. Außerdem haben Sie das
          Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren; zuständig
          ist in Baden-Württemberg der Landesbeauftragte für den Datenschutz und die
          Informationsfreiheit.
        </p>

        <h2>7. Aktualität</h2>
        <p>
          Diese Datenschutzerklärung hat den Stand Juli 2026. Durch die
          Weiterentwicklung der Website kann eine Anpassung erforderlich werden; die
          jeweils aktuelle Fassung finden Sie stets auf dieser Seite.
        </p>
      </div>
    </section>
  );
}
