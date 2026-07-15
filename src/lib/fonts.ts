import localFont from "next/font/local";

/**
 * Self-hosted (DSGVO): keine Font-CDNs.
 * Display: Fraunces (variable, optische Groessen) — nach Kundenfeedback statt
 * Bodoni Moda: deutlich bessere Lesbarkeit bei gleichem Editorial-Charakter.
 */
export const fraunces = localFont({
  src: [{ path: "../fonts/fraunces-var.woff2", style: "normal" }],
  weight: "300 700",
  variable: "--font-fraunces",
  display: "swap",
  adjustFontFallback: "Times New Roman",
});

/** Italic nur für N°-Labels/Zitate — bewusst OHNE Preload (LCP-Budget). */
export const frauncesItalic = localFont({
  src: [{ path: "../fonts/fraunces-italic-var.woff2", style: "italic" }],
  weight: "300 700",
  variable: "--font-fraunces-italic",
  display: "swap",
  preload: false,
  adjustFontFallback: "Times New Roman",
});

export const hanken = localFont({
  src: [{ path: "../fonts/hanken-grotesk-var.woff2", style: "normal" }],
  weight: "100 900",
  variable: "--font-hanken",
  display: "swap",
  adjustFontFallback: "Arial",
});
