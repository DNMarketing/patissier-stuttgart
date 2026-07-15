/**
 * Kundenstimmen, wörtlich von der alten Website übernommen (dort veröffentlichte
 * Google-Rezensionen). Keine erfundenen Zitate.
 */
export type Testimonial = {
  quote: string;
  source: string;
  /** Kurzfassung für enge Layouts */
  short: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Wenn aus Leidenschaft eine Patisserie wird! Man muss nicht mehr nach Frankreich reisen, um sehr gute Macarons und Tartelettes zu essen!",
    source: "Paul Roman, Google-Rezension",
    short: "Man muss nicht mehr nach Frankreich reisen.",
  },
  {
    quote:
      "Handwerklich perfekt, Preis absolut gerechtfertigt. Qualität, Kreativität und Geschmack Note 1+. Wie in Paris, nur eben um die Ecke! Ihr macht mich jede Woche glücklich.",
    source: "Wol beck, Google-Rezension",
    short: "Wie in Paris, nur eben um die Ecke!",
  },
];
