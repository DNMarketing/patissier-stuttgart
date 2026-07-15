import type { Metadata } from "next";
import { TestimonialQuote } from "@/components/TestimonialQuote";
import { EditorialRows, SensorikTrio } from "@/components/feature-sections";
import { ImageBand } from "@/components/ImageBand";
import { CtaSection, FaqTeaser } from "@/components/sections";
import { OfferingsGrid, ServiceHero } from "@/components/service";
import { pageMetadata } from "@/lib/seo";
import { faqsByTopic } from "@content/data/faqs";
import { macarons } from "@content/data/seiten";
import { getSortiment } from "@content/data/sortiment";
import { testimonials } from "@content/data/testimonials";

export const metadata: Metadata = pageMetadata({
  title: "Macarons Stuttgart – auch personalisiert mit Gravur",
  description:
    "Macarons aus Stuttgart-West: handgemacht, bio, 100 % halal – auch personalisiert oder mit Gravur für Hochzeit und Events. Jetzt Macarons anfragen!",
  path: "/macarons",
});

export default function MacaronsPage() {
  return (
    <>
      <ServiceHero
        item={getSortiment("macarons")}
        path="/macarons"
        breadcrumbName="Macarons"
        h1={<>Macarons aus Stuttgart: fein, farbenfroh, voller Charakter.</>}
        lead="Zarte Schalen, die beim ersten Biss leise brechen, und Füllungen, die lange nachklingen: Unsere Macarons entstehen in Handarbeit nach französischem Feinbäcker-Handwerk, aus Bio-Zutaten, 100 % halal, viele Sorten vegan."
      />

      {/* Einzigartig auf dieser Seite: die Anatomie des Macarons (dunkle Bühne) */}
      <SensorikTrio
        label={macarons.sensorik.label}
        title={macarons.sensorik.title}
        intro={macarons.sensorik.intro}
        items={[...macarons.sensorik.items]}
      />

      <OfferingsGrid
        title="Vom einzelnen Träumchen bis zur Botschaft in zarter Form"
        items={[
          {
            title: "Macarons aus der Vitrine",
            text: "Wechselnde Sorten aus der aktuellen Produktion, zum Mitnehmen aus der Boutique in der Kornbergstraße, einzeln oder als Geschenkbox.",
          },
          {
            title: "Personalisiert & mit Gravur",
            text: "Namen, Initialen, Datum oder Logo, fein auf die Schale graviert: besondere Botschaften für Hochzeiten, Events und Firmenanlässe.",
          },
          {
            title: "Gastgeschenke für Ihr Fest",
            text: "Macarons in Ihren Hochzeits- oder Eventfarben, abgestimmt auf Ihre Deko, als kleines Dankeschön, das garantiert nicht liegen bleibt.",
          },
          {
            title: "Größere Mengen für Events",
            text: "Vom Kaffeeklatsch bis zum Sweet Table: Wir produzieren Macarons auch in größeren Stückzahlen. Sprechen Sie uns rechtzeitig an.",
          },
        ]}
      />

      <ImageBand
        src="/images/legacy/sweet-table-hochzeitstorte-macarons.jpg"
        alt="Festlich gedeckter Sweet Table mit Torte und bunten Macarons."
        caption="Macarons, bereit für den großen Auftritt"
      />

      <EditorialRows
        label={macarons.gravur.label}
        title={macarons.gravur.title}
        intro={macarons.gravur.intro}
        items={[...macarons.gravur.items]}
        tone="puder"
      />

      <TestimonialQuote testimonial={testimonials[0]!} />
      <FaqTeaser items={faqsByTopic("macarons")} />
      <CtaSection
        title="Lust auf Macarons?"
        text="Ob eine Box für den Sonntagsbesuch oder 200 gravierte Gastgeschenke: Erzählen Sie uns, was Sie feiern. Wir kümmern uns um den süßen Teil."
        ctaLabel="Macarons anfragen"
        related={["toertchen-und-kuchen", "catering"]}
      />
    </>
  );
}
