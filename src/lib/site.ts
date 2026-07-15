/**
 * Zentrale Site-Konfiguration. NAP (Name, Address, Phone) NUR von hier beziehen,
 * damit die Angaben auf jeder Seite exakt identisch sind (Local SEO).
 */
export const site = {
  name: "Pâtissier – Macaron & Tartelette Boutique",
  shortName: "Pâtissier",
  legalName: "Pâtissier - Macarons & Cakes", // lt. Impressum der Live-Site
  owner: "Betül Zavacki",
  url: "https://www.patissier-stuttgart.de",
  address: {
    street: "Kornbergstraße 17",
    zip: "70176",
    city: "Stuttgart",
    district: "Stuttgart-West",
    country: "DE",
  },
  geo: {
    // Nominatim, Gebäude Kornbergstraße 17 (Phase 0 verifiziert)
    lat: 48.7834568,
    lng: 9.1616311,
  },
  phone: {
    display: "0711 45 25 39 42",
    e164: "+4971145253942",
  },
  email: "kontakt@patissier-stuttgart.de",
  social: {
    instagram: "https://www.instagram.com/patissierstuttgart",
    // Kanonische Vanity-URL [MIT KUNDE KLÄREN] — ID-basierte URL aus der alten Seite:
    facebook: "https://www.facebook.com/profile.php?id=100063518826535",
  },
  vatId: "DE330851542",
} as const;

export type DayHours = {
  day: string;
  short: string;
  opens: string | null; // null = geschlossen
  closes: string | null;
};

/** Öffnungszeiten — Quelle: Live-Site (Phase 0). Mo/Di Ruhetage, sonntags geöffnet! */
export const hours: DayHours[] = [
  { day: "Montag", short: "Mo", opens: null, closes: null },
  { day: "Dienstag", short: "Di", opens: null, closes: null },
  { day: "Mittwoch", short: "Mi", opens: "12:00", closes: "17:00" },
  { day: "Donnerstag", short: "Do", opens: "12:00", closes: "17:00" },
  { day: "Freitag", short: "Fr", opens: "10:00", closes: "17:00" },
  { day: "Samstag", short: "Sa", opens: "10:00", closes: "17:00" },
  { day: "Sonntag", short: "So", opens: "12:00", closes: "17:00" },
];

export const nav = [
  { href: "/macarons", label: "Macarons" },
  { href: "/toertchen-und-kuchen", label: "Törtchen & Kuchen" },
  { href: "/hochzeitstorten", label: "Hochzeitstorten" },
  { href: "/geburtstagstorten", label: "Geburtstagstorten" },
  { href: "/catering", label: "Catering" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/blog", label: "Journal" },
] as const;

export const footerNav = {
  sortiment: [
    { href: "/macarons", label: "Macarons" },
    { href: "/toertchen-und-kuchen", label: "Törtchen & Kuchen" },
    { href: "/hochzeitstorten", label: "Hochzeitstorten" },
    { href: "/geburtstagstorten", label: "Geburtstagstorten" },
    { href: "/catering", label: "Catering & Sweet Tables" },
  ],
  haus: [
    { href: "/ueber-uns", label: "Über uns" },
    { href: "/halal-bio-vegan", label: "Halal, Bio & Vegan" },
    { href: "/blog", label: "Journal" },
    { href: "/faq", label: "Häufige Fragen" },
    { href: "/kontakt", label: "Kontakt & Anfahrt" },
  ],
  recht: [
    { href: "/impressum", label: "Impressum" },
    { href: "/datenschutz", label: "Datenschutz" },
  ],
} as const;
