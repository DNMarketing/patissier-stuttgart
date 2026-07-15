import type { Metadata, Viewport } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { UspTicker } from "@/components/UspTicker";
import { fraunces, frauncesItalic, hanken } from "@/lib/fonts";
import { bakeryJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Pâtissier Stuttgart – Französische Patisserie, Macarons & Torten",
    template: "%s | Pâtissier",
  },
  description:
    "Französische Patisserie in Stuttgart-West: Macarons, Törtchen und Torten – handgemacht, bio, 100 % halal. Jetzt Torte oder Catering anfragen.",
  applicationName: site.shortName,
  // Kundenvorschau auf GitHub Pages darf nicht in den Google-Index
  robots: process.env.PREVIEW_EXPORT === "1" ? { index: false, follow: false } : undefined,
};

export const viewport: Viewport = {
  themeColor: "#f7f5f0",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${fraunces.variable} ${frauncesItalic.variable} ${hanken.variable}`}>
      <body>
        <a
          href="#inhalt"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-schokolade focus:px-4 focus:py-2 focus:text-porzellan"
        >
          Zum Inhalt springen
        </a>
        <JsonLd data={bakeryJsonLd()} />
        <Header />
        <main id="inhalt">{children}</main>
        <UspTicker />
        <Footer />
      </body>
    </html>
  );
}
