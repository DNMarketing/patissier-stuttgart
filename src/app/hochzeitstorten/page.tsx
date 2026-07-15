import type { Metadata } from "next";
import { TestimonialQuote } from "@/components/TestimonialQuote";
import { EditorialRows, TimelineSteps } from "@/components/feature-sections";
import { ImageBand } from "@/components/ImageBand";
import { CtaSection, FaqTeaser } from "@/components/sections";
import { ServiceHero } from "@/components/service";
import { pageMetadata } from "@/lib/seo";
import { faqsByTopic } from "@content/data/faqs";
import { hochzeitstorten } from "@content/data/seiten";
import { getSortiment } from "@content/data/sortiment";
import { testimonials } from "@content/data/testimonials";

export const metadata: Metadata = pageMetadata({
  title: "Hochzeitstorte Stuttgart – individuell & handgemacht",
  description:
    "Hochzeitstorten aus Stuttgart: individuell gestaltet, handgemacht, bio und 100 % halal – mit persönlicher Beratung. Jetzt Ihre Hochzeitstorte anfragen!",
  path: "/hochzeitstorten",
});

export default function HochzeitstortenPage() {
  return (
    <>
      <ServiceHero
        item={getSortiment("hochzeitstorten")}
        path="/hochzeitstorten"
        breadcrumbName="Hochzeitstorten"
        h1={<>Hochzeitstorten aus Stuttgart, so individuell wie Ihr Fest.</>}
        lead="Der Moment, in dem die Torte hereingetragen wird, gehört zu den Bildern, die bleiben. Wir gestalten Ihre Hochzeitstorte individuell, abgestimmt auf Ihre Farben, Ihre Blumen, Ihren Geschmack. Handgemacht, bio, 100 % halal."
        imageOverride={{
          src: "/images/insta/hochzeitstorte-mehrstoeckig-blueten.jpg",
          alt: "Zweistöckige cremeweiße Hochzeitstorte mit gepressten Blüten auf der Tortenplatte in der Boutique.",
        }}
      />

      {/* Einzigartig auf dieser Seite: Stilrichtungen als Editorial-Reihen */}
      <EditorialRows
        label={hochzeitstorten.stile.label}
        title={hochzeitstorten.stile.title}
        intro={hochzeitstorten.stile.intro}
        items={[...hochzeitstorten.stile.items]}
      />

      <ImageBand
        src="/images/legacy/sweet-table-hochzeitstorte-macarons.jpg"
        alt="Sweet Table zur Hochzeit mit mehrstöckiger weißer Torte, Macarons und Kerzen."
        caption="Aufgebaut, angerichtet, bereit für den Anschnitt"
      />

      {/* Einzigartig: die Planung als vertikale Timeline mit 5 Etappen */}
      <TimelineSteps
        label={hochzeitstorten.planung.label}
        title={hochzeitstorten.planung.title}
        intro={hochzeitstorten.planung.intro}
        items={[...hochzeitstorten.planung.items]}
      />

      <TestimonialQuote testimonial={testimonials[0]!} />
      <FaqTeaser items={faqsByTopic("hochzeitstorten")} />
      <CtaSection
        title="Erzählen Sie uns von Ihrem Fest."
        text="Je früher Sie anfragen, desto sicherer ist Ihr Termin, besonders in der Sommersaison. Die Beratung ist unverbindlich, die Kostprobe süß."
        ctaLabel="Hochzeitstorte anfragen"
        related={["catering", "macarons"]}
      />
    </>
  );
}
