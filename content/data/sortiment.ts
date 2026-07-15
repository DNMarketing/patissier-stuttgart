/**
 * Das Sortiment, die fünf Fächer der Vitrine (N° 01–05).
 * Vom Kunden ohne Code-Wissen editierbar: Texte hier ändern, fertig.
 */
export type Sortiment = {
  no: string;
  slug: string;
  href: string;
  name: string;
  claim: string;
  description: string;
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
};

export const sortiment: Sortiment[] = [
  {
    no: "01",
    slug: "macarons",
    href: "/macarons",
    name: "Macarons",
    claim: "Fein, farbenfroh, voller Charakter.",
    description:
      "Zarte Schalen, cremige Füllungen, auch personalisiert oder mit edler Gravur für besondere Botschaften.",
    image: "/images/legacy/macaron-buffet-catering-stuttgart.jpg",
    imageAlt:
      "Ein Buffet-Tisch mit einer Vielzahl von bunten Macarons und Pralinen bei einer Feier im Zelt.",
    imageWidth: 2500,
    imageHeight: 3333,
  },
  {
    no: "02",
    slug: "toertchen-und-kuchen",
    href: "/toertchen-und-kuchen",
    name: "Törtchen & Kuchen",
    claim: "Creme, Frucht und Biskuit in Harmonie.",
    description:
      "Französische Patisserie, handgefertigt: raffiniert veredelte Törtchen und Kuchen für den bewussten Genuss.",
    image: "/images/legacy/dessert-toertchen-beeren-creme.jpg",
    imageAlt:
      "Elegantes rosafarbenes Dessert mit weißer Creme und frischen Beeren auf weißem Teller.",
    imageWidth: 1284,
    imageHeight: 1563,
  },
  {
    no: "03",
    slug: "hochzeitstorten",
    href: "/hochzeitstorten",
    name: "Hochzeitstorten",
    claim: "Die Torte, die Ihren Tag trägt.",
    description:
      "Individuell gestaltet, mehrstöckig oder schlicht, abgestimmt auf Ihr Fest, Ihre Farben, Ihren Geschmack.",
    image: "/images/legacy/hochzeitstorte-stuttgart-weiss-rosen.jpg",
    imageAlt:
      "Zweistöckige weiße Hochzeitstorte mit Blumendekoration, rosa Rosen und weiteren Blüten auf weißem Hintergrund.",
    imageWidth: 2305,
    imageHeight: 3073,
  },
  {
    no: "04",
    slug: "geburtstagstorten",
    href: "/geburtstagstorten",
    name: "Geburtstagstorten",
    claim: "Gefeiert wird mit Stil.",
    description:
      "Motivtorten und feine Klassiker zum Geburtstag, ganz nach Wunsch gestaltet, für Kinder wie Erwachsene.",
    image: "/images/legacy/schokoladentorte-goldblatt-patisserie.jpg",
    imageAlt:
      "Kunstvoll gestaltete Schokoladentorte mit dunkler Glasur und Blattgold-Dekor auf blauem Teller.",
    imageWidth: 1284,
    imageHeight: 1666,
  },
  {
    no: "05",
    slug: "catering",
    href: "/catering",
    name: "Catering & Sweet Tables",
    claim: "Der krönende Abschluss jeder Feier.",
    description:
      "Petit Fours, Torten und Themenbuffets, inklusive Anrichtegeschirr und stilvoller Inszenierung vor Ort.",
    image: "/images/legacy/sweet-table-hochzeitstorte-macarons.jpg",
    imageAlt:
      "Festlich gedeckter Sweet Table mit mehrstöckiger weißer Torte, bunten Macarons, Obst und Kerzen.",
    imageWidth: 2500,
    imageHeight: 3333,
  },
];

export function getSortiment(slug: string): Sortiment {
  const item = sortiment.find((s) => s.slug === slug);
  if (!item) throw new Error(`Unbekanntes Sortiment: ${slug}`);
  return item;
}
