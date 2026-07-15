import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./Reveal";
import { sortiment } from "@content/data/sortiment";

/**
 * DAS Signature-Element: die Vitrine als endloses Laufband über die volle
 * Breite. Läuft von selbst, pausiert bei Hover/Fokus, jede Karte klickbar.
 * Rein CSS (kein Scroll-Jacking); reduced-motion: statisch scrollbar.
 */
export function Vitrine() {
  const cards = (ariaHidden: boolean) => (
    <div aria-hidden={ariaHidden || undefined} className="flex shrink-0">
      {sortiment.map((item) => (
        <Link
          key={(ariaHidden ? "b-" : "a-") + item.slug}
          href={item.href}
          tabIndex={ariaHidden ? -1 : undefined}
          className="vitrine-card img-hover group block bg-porzellan"
        >
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src={item.image}
              alt={ariaHidden ? "" : item.imageAlt}
              fill
              sizes="(max-width: 640px) 76vw, 340px"
              className="object-cover"
            />
          </div>
          {/* Preiskärtchen */}
          <div className="hairline-t px-5 py-5">
            <p className="sortiment-no text-caption text-taupe">N° {item.no}</p>
            <h3 className="mt-1 font-display text-h3 transition-colors duration-200 group-hover:text-framboise">
              {item.name}
            </h3>
            <p className="mt-2 line-clamp-2 text-caption text-taupe">{item.claim}</p>
            <p className="mt-4 text-caption font-semibold text-framboise">
              Zur Sorte{" "}
              <span
                aria-hidden
                className="inline-block transition-transform duration-200 group-hover:translate-x-1"
              >
                →
              </span>
            </p>
          </div>
        </Link>
      ))}
    </div>
  );

  return (
    <section aria-labelledby="vitrine-heading" className="py-20 md:py-28">
      <div className="container-page flex flex-wrap items-end justify-between gap-4">
        <Reveal>
          <p className="label text-taupe">Die Vitrine</p>
          <h2 id="vitrine-heading" className="mt-3 text-h2">
            Unser <em className="accent-em">Sortiment</em>
          </h2>
        </Reveal>
        <p className="mb-1 text-caption text-taupe">
          Läuft von selbst. Zum Stöbern einfach den Zeiger darauf legen.
        </p>
      </div>

      <div className="vitrine-marquee mt-10">
        <div className="vitrine-marquee-track">
          {cards(false)}
          {cards(true)}
        </div>
      </div>
    </section>
  );
}
