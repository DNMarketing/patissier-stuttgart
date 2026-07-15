import Image from "next/image";
import type { ReactNode } from "react";
import { Breadcrumbs } from "./Breadcrumbs";
import { Reveal } from "./Reveal";
import { TestimonialQuote } from "./TestimonialQuote";
import { CtaSection, FaqTeaser, ProcessSteps } from "./sections";
import { faqsByTopic } from "@content/data/faqs";
import type { Sortiment } from "@content/data/sortiment";
import type { Testimonial } from "@content/data/testimonials";

export type ServicePageProps = {
  item: Sortiment;
  path: string;
  breadcrumbName: string;
  h1: ReactNode;
  lead: string;
  offeringsTitle: string;
  offerings: { title: string; text: string }[];
  stepsTitle: string;
  steps: { title: string; text: string }[];
  testimonial?: Testimonial;
  faqTopic: string;
  cta: { title: string; text: string; label: string };
  related: string[];
  children?: ReactNode;
};

/**
 * Einheitliches Muster jeder Leistungsseite (Briefing §5):
 * sinnlicher Einstieg → Angebot → Ablauf → Kundenstimme → FAQ-Auszug → CTA.
 */
export function ServicePageShell({
  item,
  path,
  breadcrumbName,
  h1,
  lead,
  offeringsTitle,
  offerings,
  stepsTitle,
  steps,
  testimonial,
  faqTopic,
  cta,
  related,
  children,
}: ServicePageProps) {
  return (
    <>
      {/* Einstieg: These + Bild */}
      <section className="container-page pt-10 pb-20 md:pt-14 md:pb-28">
        <div className="flex items-baseline justify-between gap-6">
          <Breadcrumbs items={[{ name: breadcrumbName, path }]} />
          <p className="sortiment-no shrink-0 text-caption text-taupe">N° {item.no}</p>
        </div>
        <div className="mt-10 grid items-start gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <h1 className="text-h2">{h1}</h1>
            <p className="mt-6 max-w-[58ch] text-lead text-taupe">{lead}</p>
          </div>
          {/* LCP-Bild: bewusst ohne Reveal, damit der Paint nicht an der Hydration hängt */}
          <div className="lg:col-span-5">
            <div className="img-hover relative aspect-[4/5] max-h-130 w-full">
              <Image
                src={item.image}
                alt={item.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 460px"
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Was genau angeboten wird */}
      <section aria-labelledby="angebot-heading" className="hairline-t py-20 md:py-24">
        <div className="container-page">
          <Reveal>
            <p className="label text-taupe">Das Angebot</p>
            <h2 id="angebot-heading" className="mt-3 max-w-2xl text-h2">
              {offeringsTitle}
            </h2>
          </Reveal>
          <dl className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2">
            {offerings.map((offering) => (
              <div key={offering.title} className="hairline-t pt-5">
                <dt className="font-display text-h3">{offering.title}</dt>
                <dd className="mt-3 max-w-[52ch] text-taupe">{offering.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <ProcessSteps title={stepsTitle} steps={steps} />

      {testimonial && <TestimonialQuote testimonial={testimonial} />}

      {children}

      <FaqTeaser items={faqsByTopic(faqTopic)} />

      <CtaSection title={cta.title} text={cta.text} ctaLabel={cta.label} related={related} />
    </>
  );
}
