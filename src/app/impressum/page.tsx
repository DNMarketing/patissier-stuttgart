import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Impressum",
  description:
    "Impressum der Pâtissier - Macaron & Tartelette Boutique, Kornbergstraße 17, 70176 Stuttgart. Anbieterkennzeichnung und Kontaktdaten.",
  path: "/impressum",
});

/** Angaben 1:1 von der bisherigen Website übernommen (rechtlich erforderlich). */
export default function ImpressumPage() {
  return (
    <section className="container-page pt-10 pb-20 md:pt-14 md:pb-28">
      <Breadcrumbs items={[{ name: "Impressum", path: "/impressum" }]} />
      <h1 className="mt-10 text-h2">Impressum</h1>
      <div className="article-prose mt-4">
        <h2>Angaben gemäß § 5 TMG</h2>
        <p>
          <strong>Unternehmensname:</strong> {site.legalName}
          <br />
          <strong>Geschäftsadresse:</strong> {site.address.street}, {site.address.zip}{" "}
          {site.address.city}
          <br />
          <strong>Name des Inhabers:</strong> {site.owner} (Einzelunternehmerin)
        </p>
        <h2>Kontakt</h2>
        <p>
          <strong>Telefonnummer:</strong>{" "}
          <a href={`tel:${site.phone.e164}`}>{site.phone.e164}</a>
          <br />
          <strong>E-Mail-Adresse:</strong>{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </p>
        <h2>Umsatzsteuer</h2>
        <p>
          <strong>USt-IdNr:</strong> {site.vatId}
        </p>
      </div>
    </section>
  );
}
