"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { Reveal } from "./Reveal";
import { sortiment } from "@content/data/sortiment";

/**
 * DAS Signature-Element (DESIGN.md §4): die horizontale Glasvitrine.
 * Beginnt bündig an der Container-Kante und läuft nur nach rechts aus dem
 * Bild (kein leeres Fenster links). CSS scroll-snap, kein Scroll-Jacking.
 */
export function Vitrine() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const [atEnd, setAtEnd] = useState(false);

  const onScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.firstElementChild as HTMLElement | null;
    if (!card) return;
    const step = card.offsetWidth + 1;
    setCurrent(
      Math.min(sortiment.length - 1, Math.max(0, Math.round(track.scrollLeft / step))),
    );
    setAtEnd(track.scrollLeft >= track.scrollWidth - track.clientWidth - 8);
  }, []);

  useEffect(onScroll, [onScroll]);

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
        <Reveal>
          <p className="label text-taupe">Die Vitrine</p>
          <h2 id="vitrine-heading" className="mt-3 text-h2">
            Unser Sortiment
          </h2>
        </Reveal>
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
              disabled={current === 0}
              aria-label="Vorheriges Fach der Vitrine"
              className="vitrine-arrow flex size-11 items-center justify-center border border-hairline text-schokolade transition-colors duration-200 hover:bg-schokolade hover:text-porzellan"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => scrollToCard(1)}
              disabled={atEnd}
              aria-label="Nächstes Fach der Vitrine"
              className="vitrine-arrow flex size-11 items-center justify-center border border-hairline text-schokolade transition-colors duration-200 hover:bg-schokolade hover:text-porzellan"
            >
              →
            </button>
          </div>
        </div>
      </div>

      <div className="vitrine-wrap mt-10">
        <div
          ref={trackRef}
          onScroll={onScroll}
          className="vitrine-track"
          tabIndex={0}
          role="region"
          aria-label="Sortiment – horizontal scrollbar"
        >
          {sortiment.map((item, i) => (
            <Reveal
              key={item.slug}
              index={i}
              className="vitrine-card border-l border-hairline bg-porzellan first:border-l-0"
            >
              <Link href={item.href} className="img-hover group block bg-porzellan">
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
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
