import localFont from "next/font/local";

// Self-hosted (DSGVO): keine Font-CDNs. Variable Fonts, latin-Subset.
export const bodoni = localFont({
  src: [{ path: "../fonts/bodoni-moda-var.woff2", style: "normal" }],
  weight: "400 800",
  variable: "--font-bodoni",
  display: "swap",
  adjustFontFallback: "Times New Roman",
});

/**
 * Italic nur für die kleinen N°-Labels (sortiment-no) — bewusst OHNE Preload,
 * damit es auf schmaler Leitung nicht mit dem LCP-Hero-Bild konkurriert.
 */
export const bodoniItalic = localFont({
  src: [{ path: "../fonts/bodoni-moda-italic-var.woff2", style: "italic" }],
  weight: "400 800",
  variable: "--font-bodoni-italic",
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
