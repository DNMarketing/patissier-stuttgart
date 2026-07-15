import type { Metadata } from "next";
import { TestimonialQuote } from "@/components/TestimonialQuote";
import { EditorialRows } from "@/components/feature-sections";
import { ImageBand } from "@/components/ImageBand";
import { CtaSection, FaqTeaser } from "@/components/sections";
import { OfferingsGrid, ServiceHero } from "@/components/service";
import { pageMetadata } from "@/lib/seo";
import { faqsByTopic } from "@content/data/faqs";
import { toertchen } from "@content/data/seiten";
import { getSortiment } from "@content/data/sortiment";
import { testimonials } from "@content/data/testimonials";

export const metadata: Metadata = pageMetadata({
  title: "Törtchen & Kuchen Stuttgart – französische Patisserie",
  description:
    "Französische Törtchen und Kuchen in Stuttgart: Creme, Frucht und Biskuit in Harmonie – bio, 100 % halal, vieles vegan. Besuchen Sie unsere Boutique!",
  path: "/toertchen-und-kuchen",
});

export default function ToertchenPage() {
  return (
    <>
      <ServiceHero
        item={getSortiment("toertchen-und-kuchen")}
        path="/toertchen-und-kuchen"
        breadcrumbName="Törtchen & Kuchen"
        h1={<>Törtchen und Kuchen, französische Pâtisserie in Stuttgart.</>}
        lead="Creme, Frucht und Biskuit in perfekter Harmonie: Unsere Törtchen sind kleine Kompositionen, raffiniert veredelt, einzigartig inszeniert und gemacht für den Moment, in dem der Alltag kurz Pause hat."
      />

      {/* Einzigartig auf dieser Seite: die Werkkategorien der Vitrine */}
      <EditorialRows
        label={toertchen.vitrine_heute.label}
        title={toertchen.vitrine_heute.title}
        intro={toertchen.vitrine_heute.intro}
        items={[...toertchen.vitrine_heute.items]}
      />

      <ImageBand
        src="/images/legacy/schokoladentorte-goldblatt-patisserie.jpg"
        alt="Schokoladentorte mit dunkler Glasur und Blattgold auf blauem Teller."
        caption="Handwerk bis zum Blattgold"
      />

      <OfferingsGrid
        label={toertchen.bestellen.label}
        title={toertchen.bestellen.title}
        intro={toertchen.bestellen.intro}
        items={[...toertchen.bestellen.items]}
        tone="puder"
      />

      <TestimonialQuote testimonial={testimonials[1]!} />
      <FaqTeaser items={faqsByTopic("toertchen")} />
      <CtaSection
        title="Ein Anlass, der mehr verdient als Blechkuchen?"
        text="Fragen Sie Ihren Wunschkuchen an oder schauen Sie mittwochs bis sonntags in der Boutique vorbei. Die Vitrine ist das beste Argument."
        ctaLabel="Kuchen anfragen"
        related={["macarons", "geburtstagstorten"]}
      />
    </>
  );
}
