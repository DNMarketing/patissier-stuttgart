import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { CtaSection, FaqList } from "@/components/sections";
import { faqJsonLd, pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { faqs } from "@content/data/faqs";

export const metadata: Metadata = pageMetadata({
  title: "Häufige Fragen – halal, vegan, Bestellung & Abholung",
  description:
    "Alle Antworten auf einen Blick: halal-Zutaten, vegane Optionen, Vorlaufzeiten, Lieferung und Öffnungszeiten. Ihre Frage fehlt? Rufen Sie uns einfach an!",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
      <section className="container-page pt-10 pb-16 md:pt-14">
        <Breadcrumbs items={[{ name: "Häufige Fragen", path: "/faq" }]} />
        <div className="mt-10 max-w-3xl">
          <h1 className="text-h2">Häufige Fragen, ehrlich beantwortet.</h1>
          <p className="mt-6 text-lead text-taupe">
            Von halal bis Hochzeitstorte: die Antworten auf alles, was uns in der
            Boutique am häufigsten gefragt wird.
          </p>
        </div>
      </section>

      <section aria-label="Fragen und Antworten" className="container-page pb-20 md:pb-24">
        <FaqList items={faqs} headingLevel="h2" />
        <p className="mt-10 text-taupe">
          Ihre Frage war nicht dabei? Rufen Sie uns an unter{" "}
          <a href={`tel:${site.phone.e164}`} className="text-link">
            {site.phone.display}
          </a>{" "}
          oder{" "}
          <Link href="/kontakt" className="text-link">
            schreiben Sie uns
          </Link>
          .
        </p>
      </section>

      <CtaSection
        title="Alles klar? Dann los."
        text="Fragen Sie Ihre Torte, Ihre Macarons oder Ihr Catering unverbindlich an, wir melden uns schnellstmöglich mit einem konkreten Angebot."
        ctaLabel="Anfrage senden"
        related={["hochzeitstorten", "catering"]}
      />
    </>
  );
}
