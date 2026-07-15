"use client";

import { LazyMotion, domAnimation, m, useReducedMotion } from "motion/react";

/**
 * Wort-für-Wort-Enthüllung für große Statements. Ein einziger Observer auf
 * dem Wrapper (variants + staggerChildren), löst genau einmal aus.
 */
export function WordReveal({ text, className }: { text: string; className?: string }) {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) return <span className={className}>{text}</span>;

  const words = text.split(" ");
  return (
    <LazyMotion features={domAnimation} strict>
      <m.span
        className={className}
        initial="verborgen"
        whileInView="sichtbar"
        viewport={{ once: true, amount: 0.6 }}
        transition={{ staggerChildren: 0.055 }}
      >
        {words.map((word, i) => (
          <span
            key={`${word}-${i}`}
            className="inline-block overflow-hidden pb-[0.09em] align-bottom"
          >
            <m.span
              className="inline-block"
              variants={{
                verborgen: { y: "115%" },
                sichtbar: { y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
              }}
            >
              {word}
            </m.span>
            {i < words.length - 1 ? " " : ""}
          </span>
        ))}
      </m.span>
    </LazyMotion>
  );
}
