"use client";

import { LazyMotion, domAnimation, m, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

/**
 * Einheitliches Scroll-Reveal-System (siehe DESIGN.md §6):
 * 24 px Distanz, 80 ms Stagger über `index`, löst genau einmal aus.
 * Nur für Bilder und Section-Headlines einsetzen — Fließtext bleibt statisch.
 */
export function Reveal({
  children,
  index = 0,
  className,
}: {
  children: ReactNode;
  index?: number;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <LazyMotion features={domAnimation} strict>
      <m.div
        className={className}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px -80px 0px" }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
          delay: index * 0.08,
        }}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
}
