import Image from "next/image";
import type { ReactNode } from "react";
import { Breadcrumbs } from "./Breadcrumbs";
import { Reveal } from "./Reveal";
import type { FeatureItem } from "./feature-sections";
import type { Sortiment } from "@content/data/sortiment";

/* ---------------------------------------------------------------------------
   Einstieg jeder Leistungsseite: Breadcrumb + N°, These, LCP-Bild ohne Reveal.
   --------------------------------------------------------------------------- */
export function ServiceHero({
  item,
  path,
  breadcrumbName,
  h1,
  lead,
  imageOverride,
}: {
  item: Sortiment;
  path: string;
  breadcrumbName: string;
  h1: ReactNode;
  lead: string;
  imageOverride?: { src: string; alt: string };
}) {
  return (
    <section className="container-page pt-10 pb-20 md:pt-14 md:pb-24">
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
          <div className="img-hover card-soft relative aspect-[4/5] max-h-130 w-full rounded-3xl">
            <Image
              src={imageOverride?.src ?? item.image}
              alt={imageOverride?.alt ?? item.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 460px"
              priority
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------------------
   Angebots-Grid (2-spaltig, Hairline-Zeilen) mit Stagger-Reveal.
   --------------------------------------------------------------------------- */
export function OfferingsGrid({
  label = "Das Angebot",
  title,
  intro,
  items,
  tone = "hell",
}: {
  label?: string;
  title: string;
  intro?: string;
  items: FeatureItem[];
  tone?: "hell" | "puder";
}) {
  return (
    <section
      aria-label={label}
      className={`py-20 md:py-24 ${tone === "puder" ? "bg-puder" : "hairline-t"}`}
    >
      <div className="container-page">
        <Reveal>
          <p className="label text-taupe">{label}</p>
          <h2 className="mt-3 max-w-2xl text-h2">{title}</h2>
          {intro && <p className="mt-5 max-w-[58ch] text-lead text-taupe">{intro}</p>}
        </Reveal>
        <dl
          className={`mt-12 grid gap-x-12 gap-y-10 ${items.length % 3 === 0 ? "md:grid-cols-3" : "md:grid-cols-2"}`}
        >
          {items.map((item, i) => (
            <Reveal key={item.title} index={i % 3}>
              <div className="hairline-t pt-5">
                <dt className="font-display text-h3">{item.title}</dt>
                <dd className="mt-3 max-w-[52ch] text-taupe">{item.text}</dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
