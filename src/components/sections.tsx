import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./Reveal";
import { site } from "@/lib/site";
import type { Faq } from "@content/data/faqs";
import { sortiment } from "@content/data/sortiment";

/* ---------------------------------------------------------------------------
   Ablauf-Schritte („So kommen Sie zu Ihrer Torte") — Puder-Fläche
   --------------------------------------------------------------------------- */
export function ProcessSteps({
  title,
  steps,
}: {
  title: string;
  steps: { title: string; text: string }[];
}) {
  return (
    <section aria-labelledby="ablauf-heading" className="bg-puder py-20 md:py-24">
      <div className="container-page">
        <Reveal>
          <p className="label text-taupe">Der Ablauf</p>
          <h2 id="ablauf-heading" className="mt-3 max-w-xl text-h2">
            {title}
          </h2>
        </Reveal>
        <ol className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <li key={step.title}>
              <Reveal index={i}>
                <div className="hairline-t pt-5">
                  <p className="sortiment-no text-h3 text-framboise">{i + 1}.</p>
                  <h3 className="mt-3 font-sans text-body font-semibold">{step.title}</h3>
                  <p className="mt-2 text-caption text-taupe">{step.text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------------------
   FAQ-Liste (natives details/summary, kein JS)
   --------------------------------------------------------------------------- */
export function FaqList({ items, headingLevel = "h3" }: { items: Faq[]; headingLevel?: "h2" | "h3" }) {
  const H = headingLevel;
  return (
    <div className="hairline-t">
      {items.map((faq) => (
        <details key={faq.question} className="faq-item">
          <summary>
            <H className="font-display text-h3">{faq.question}</H>
          </summary>
          <div>
            <p>{faq.answer}</p>
            {faq.link && (
              <p className="mt-3">
                <Link href={faq.link.href} className="text-link">
                  {faq.link.label}
                </Link>
              </p>
            )}
          </div>
        </details>
      ))}
    </div>
  );
}

/* ---------------------------------------------------------------------------
   FAQ-Auszug für Leistungsseiten
   --------------------------------------------------------------------------- */
export function FaqTeaser({ items }: { items: Faq[] }) {
  return (
    <section aria-labelledby="faq-teaser-heading" className="py-20 md:py-24">
      <div className="container-page grid gap-10 lg:grid-cols-[1fr_2fr]">
        <Reveal>
          <p className="label text-taupe">Gut zu wissen</p>
          <h2 id="faq-teaser-heading" className="mt-3 text-h2">
            Häufige Fragen
          </h2>
          <p className="mt-5 text-taupe">
            <Link href="/faq" className="text-link">
              Alle Fragen & Antworten
            </Link>
          </p>
        </Reveal>
        <FaqList items={items} />
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------------------
   CTA-Block (dunkle Fläche) + „Verwandtes Sortiment"
   --------------------------------------------------------------------------- */
export function CtaSection({
  title,
  text,
  ctaLabel,
  related = [],
}: {
  title: string;
  text: string;
  ctaLabel: string;
  related?: string[];
}) {
  const relatedItems = sortiment.filter((s) => related.includes(s.slug));
  return (
    <section aria-labelledby="cta-heading" className="hairline-t py-20 md:py-24">
      <div className="container-page">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 id="cta-heading" className="text-h2">
              {title}
            </h2>
            <p className="mt-5 max-w-[54ch] text-lead text-taupe">{text}</p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="/kontakt" className="btn btn-primary">
                {ctaLabel}
              </Link>
              <a href={`tel:${site.phone.e164}`} className="btn btn-secondary">
                {site.phone.display}
              </a>
            </div>
            <p className="mt-5 text-caption text-taupe">
              Unverbindlich anfragen. Wir melden uns schnellstmöglich zurück.
            </p>
          </div>
          <div className="hidden lg:col-span-4 lg:col-start-9 lg:block">
            <Image
              src="/images/brand/logo-patissier-schwarz.png"
              alt=""
              width={2500}
              height={1667}
              sizes="340px"
              className="mx-auto w-full max-w-xs opacity-90"
            />
          </div>
        </div>

        {relatedItems.length > 0 && (
          <div className="hairline-t mt-16 pt-8">
            <p className="label text-taupe">Auch aus unserer Vitrine</p>
            <div className="mt-5 flex flex-wrap gap-x-10 gap-y-4">
              {relatedItems.map((item) => (
                <Link
                  key={item.slug}
                  href={item.href}
                  className="group flex items-baseline gap-3 text-schokolade hover:text-framboise"
                >
                  <span className="sortiment-no text-caption text-taupe">
                    N° {item.no}
                  </span>
                  <span className="font-display text-h3">{item.name}</span>
                  <span
                    aria-hidden
                    className="inline-block text-framboise transition-transform duration-200 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
