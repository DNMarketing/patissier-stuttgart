import type { Metadata } from "next";
import { TestimonialQuote } from "@/components/TestimonialQuote";
import { EditorialRows, SplitFeature } from "@/components/feature-sections";
import { ImageBand } from "@/components/ImageBand";
import { CtaSection, FaqTeaser, ProcessSteps } from "@/components/sections";
import { ServiceHero } from "@/components/service";
import { pageMetadata } from "@/lib/seo";
import { faqsByTopic } from "@content/data/faqs";
import { geburtstagstorten } from "@content/data/seiten";
import { getSortiment } from "@content/data/sortiment";
import { testimonials } from "@content/data/testimonials";

export const metadata: Metadata = pageMetadata({
  title: "Geburtstagstorte Stuttgart bestellen: handgemacht",
  description:
    "Geburtstagstorte in Stuttgart bestellen: individuell gestaltet, handgemacht, bio und 100 % halal, für Kinder wie Erwachsene. Jetzt Wunschtorte anfragen!",
  path: "/geburtstagstorten",
});

export default function GeburtstagstortenPage() {
  return (
    <>
      <ServiceHero
        item={getSortiment("geburtstagstorten")}
        path="/geburtstagstorten"
        breadcrumbName="Geburtstagstorten"
        h1={<>Geburtstagstorten aus Stuttgart: gefeiert wird mit Stil.</>}
        lead="Einmal im Jahr darf es etwas Besonderes sein. Wir backen Geburtstagstorten, die zum Menschen passen: verspielt oder elegant, klassisch oder ausgefallen, individuell gestaltet und handgemacht in Stuttgart-West."
      />

      {/* Einzigartig auf dieser Seite: die Gegenüberstellung Klein / Groß */}
      <SplitFeature
        label={geburtstagstorten.fuer_wen.label}
        title={geburtstagstorten.fuer_wen.title}
        items={[...geburtstagstorten.fuer_wen.items]}
      />

      <ImageBand
        src="/images/legacy/dessert-toertchen-beeren-creme.jpg"
        alt="Rosafarbenes Dessert mit weißer Creme und frischen Beeren."
        caption="Feiern beginnt beim Dessert"
      />

      <EditorialRows
        label={geburtstagstorten.anlaesse.label}
        title={geburtstagstorten.anlaesse.title}
        intro={geburtstagstorten.anlaesse.intro}
        items={[...geburtstagstorten.anlaesse.items]}
      />

      <ProcessSteps
        title="So bestellen Sie Ihre Geburtstagstorte"
        steps={[
          {
            title: "Anfragen",
            text: "Wunschtermin, Personenzahl und Ihre Idee. Per Formular oder ein kurzer Anruf genügt.",
          },
          {
            title: "Gestaltung klären",
            text: "Wir beraten Sie zu Design, Größe und Geschmack und machen Ihnen ein konkretes Angebot.",
          },
          {
            title: "Frisch gebacken",
            text: "Ihre Torte entsteht handgefertigt in unserer Backstube, rechtzeitig zu Ihrem Termin.",
          },
          {
            title: "Abholen & feiern",
            text: "Abholung in der Boutique oder Lieferung nach Absprache. Und dann: Kerzen drauf.",
          },
        ]}
      />

      <TestimonialQuote testimonial={testimonials[1]!} />
      <FaqTeaser items={faqsByTopic("geburtstagstorten")} />
      <CtaSection
        title="Wer hat als Nächstes Geburtstag?"
        text="Fragen Sie Ihre Wunschtorte ein paar Tage im Voraus an. Je besonderer das Design, desto mehr Zeit schenken Sie uns am besten."
        ctaLabel="Geburtstagstorte anfragen"
        related={["macarons", "toertchen-und-kuchen"]}
      />
    </>
  );
}
