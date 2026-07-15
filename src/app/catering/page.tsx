import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { TestimonialQuote } from "@/components/TestimonialQuote";
import { EditorialRows } from "@/components/feature-sections";
import { CtaSection, FaqTeaser } from "@/components/sections";
import { OfferingsGrid, ServiceHero } from "@/components/service";
import { pageMetadata } from "@/lib/seo";
import { faqsByTopic } from "@content/data/faqs";
import { catering } from "@content/data/seiten";
import { getSortiment } from "@content/data/sortiment";
import { testimonials } from "@content/data/testimonials";

export const metadata: Metadata = pageMetadata({
  title: "Dessert-Catering Stuttgart – Sweet Tables & Torten",
  description:
    "Dessert-Catering in Stuttgart: Sweet Tables, Petit Fours und Torten – inklusive Geschirr und stilvoller Inszenierung vor Ort. Jetzt Catering anfragen!",
  path: "/catering",
});

export default function CateringPage() {
  return (
    <>
      <ServiceHero
        item={getSortiment("catering")}
        path="/catering"
        breadcrumbName="Catering"
        h1={<>Dessert-Catering in Stuttgart: der krönende Abschluss.</>}
        lead="Unsere Desserts sind der Teil der Veranstaltung, über den hinterher alle reden. Wir liefern nicht nur süße Meisterwerke, sondern bringen das passende Anrichtegeschirr mit und inszenieren das Buffet stilvoll vor Ort."
      />

      {/* Einzigartig auf dieser Seite: die Formate */}
      <EditorialRows
        label={catering.formate.label}
        title={catering.formate.title}
        intro={catering.formate.intro}
        items={[...catering.formate.items]}
      />

      {/* Impressionen */}
      <section aria-label="Impressionen" className="hairline-t py-20 md:py-24">
        <div className="container-page grid gap-6 sm:grid-cols-2">
          <Reveal>
            <figure>
              <div className="img-hover relative aspect-[4/3]">
                <Image
                  src="/images/legacy/sweet-table-hochzeitstorte-macarons.jpg"
                  alt="Festlich gedeckter Sweet Table mit mehrstöckiger weißer Torte, bunten Macarons, Obst und Kerzen, im Hintergrund Fenster mit Lichterdekoration."
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-caption text-taupe">
                Sweet Table zur Hochzeit: Torte, Macarons und Früchte, vor Ort angerichtet.
              </figcaption>
            </figure>
          </Reveal>
          <Reveal index={1}>
            <figure>
              <div className="img-hover relative aspect-[4/3]">
                <Image
                  src="/images/legacy/event-dekoration-lampe-pastell.jpg"
                  alt="Festliche Deckendekoration mit weißer Lampe und Bändern in Rosa und Blau."
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-caption text-taupe">
                Bis unter die Decke gedacht: Inszenierung, die zum Anlass passt.
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <OfferingsGrid
        label={catering.sorgenfrei.label}
        title={catering.sorgenfrei.title}
        intro={catering.sorgenfrei.intro}
        items={[...catering.sorgenfrei.items]}
        tone="puder"
      />

      <TestimonialQuote testimonial={testimonials[0]!} />
      <FaqTeaser items={faqsByTopic("catering")} />
      <CtaSection
        title="Planen Sie etwas Großes?"
        text="Erzählen Sie uns von Ihrer Veranstaltung. Wir melden uns mit Ideen, Mengenempfehlung und einem konkreten Angebot zurück."
        ctaLabel="Catering anfragen"
        related={["hochzeitstorten", "macarons"]}
      />
    </>
  );
}
