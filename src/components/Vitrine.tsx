"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useRef, useState } from "react";
import { sortiment } from "@content/data/sortiment";

/**
 * DAS Signature-Element (DESIGN.md §4): die horizontale Glasvitrine.
 * CSS scroll-snap, kein Scroll-Jacking. Fortschritt als feine Zählung „01 / 05",
 * jedes Fach mit Preiskärtchen-Beschriftung.
 */
export function Vitrine() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);

  const onScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.firstElementChild as HTMLElement | null;
    if (!card) return;
    const step = card.offsetWidth + 1;
    setCurrent(
      Math.min(sortiment.length - 1, Math.max(0, Math.round(track.scrollLeft / step))),
    );
  }, []);

  const scrollToCard = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.firstElementChild as HTMLElement | null;
    if (!card) return;
    track.scrollBy({ left: dir * (card.offsetWidth + 1), behavior: "smooth" });
  };

  return (
    <section aria-labelledby="vitrine-heading" className="py-20 md:py-28">
      <div className="container-page flex items-end justify-between gap-6">
        <div>
          <p className="label text-taupe">Die Vitrine</p>
          <h2 id="vitrine-heading" className="mt-3 text-h2">
            Unser Sortiment
          </h2>
        </div>
        <div className="flex items-center gap-5">
          <p
            className="hidden font-sans text-caption text-taupe tabular-nums sm:block"
            aria-hidden
          >
            {String(current + 1).padStart(2, "0")} / {String(sortiment.length).padStart(2, "0")}
          </p>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => scrollToCard(-1)}
              aria-label="Vorheriges Fach der Vitrine"
              className="hairline-t flex size-11 items-center justify-center border border-hairline text-schokolade transition-colors duration-200 hover:bg-schokolade hover:text-porzellan"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => scrollToCard(1)}
              aria-label="Nächstes Fach der Vitrine"
              className="flex size-11 items-center justify-center border border-hairline text-schokolade transition-colors duration-200 hover:bg-schokolade hover:text-porzellan"
            >
              →
            </button>
          </div>
        </div>
      </div>

      <div
        ref={trackRef}
        onScroll={onScroll}
        className="vitrine-track hairline-t hairline-b mt-10"
        tabIndex={0}
        role="region"
        aria-label="Sortiment – horizontal scrollbar"
      >
        {sortiment.map((item) => (
          <Link
            key={item.slug}
            href={item.href}
            className="vitrine-card img-hover group border-l border-hairline bg-porzellan first:border-l-0"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={item.image}
                alt={item.imageAlt}
                fill
                sizes="(max-width: 640px) 78vw, 340px"
                className="object-cover"
              />
            </div>
            {/* Preiskärtchen */}
            <div className="hairline-t px-5 py-5">
              <p className="sortiment-no text-caption text-taupe">N° {item.no}</p>
              <h3 className="mt-1 font-display text-h3">{item.name}</h3>
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
    </section>
  );
}
