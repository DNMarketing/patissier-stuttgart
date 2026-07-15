import type { Metadata } from "next";
import { ServicePageShell } from "@/components/ServicePageShell";
import { pageMetadata } from "@/lib/seo";
import { getSortiment } from "@content/data/sortiment";
import { testimonials } from "@content/data/testimonials";

export const metadata: Metadata = pageMetadata({
  title: "Törtchen & Kuchen Stuttgart – französische Patisserie",
  description:
    "Französische Törtchen und Kuchen in Stuttgart: Creme, Frucht und Biskuit in Harmonie – bio, 100 % halal, vieles vegan. Besuchen Sie unsere Boutique!",
  path: "/toertchen-und-kuchen",
});

export default function ToertchenPage() {
  return (
    <ServicePageShell
      item={getSortiment("toertchen-und-kuchen")}
      path="/toertchen-und-kuchen"
      breadcrumbName="Törtchen & Kuchen"
      h1={<>Törtchen und Kuchen, französische Pâtisserie in Stuttgart.</>}
      lead="Creme, Frucht und Biskuit in perfekter Harmonie: Unsere Törtchen sind kleine Kompositionen, raffiniert veredelt, einzigartig inszeniert und gemacht für den Moment, in dem der Alltag kurz Pause hat."
      offeringsTitle="Was in unserer Vitrine wartet"
      offerings={[
        {
          title: "Tartelettes & Törtchen",
          text: "Feine Einzelportionen nach französischer Art, knuspriger Boden, cremige Füllung, frische Frucht. Die Sorten wechseln mit Saison und Laune der Backstube.",
        },
        {
          title: "Kuchen für den Anlass",
          text: "Vom Sonntagskaffee bis zum kleinen Fest: ganze Kuchen und Torten auf Bestellung, abgestimmt auf Ihren Geschmack.",
        },
        {
          title: "Vegan & glutenfreundlich",
          text: "Viele unserer Kreationen gibt es vegan oder glutenfreundlich, fragen Sie in der Boutique einfach nach der aktuellen Auswahl.",
        },
        {
          title: "Bewusster Genuss",
          text: "Bio-Zutaten, keine künstlichen Zusätze, kein Alkohol, 100 % halal: Genuss, der für möglichst viele Menschen bedenkenlos ist.",
        },
      ]}
      stepsTitle="So einfach kommen Sie zum Törtchen"
      steps={[
        {
          title: "Vorbeikommen",
          text: "Mittwoch bis Sonntag geöffnet, die aktuelle Auswahl wartet in der Vitrine in der Kornbergstraße 17.",
        },
        {
          title: "Oder vorbestellen",
          text: "Größere Mengen und ganze Kuchen fragen Sie am besten ein paar Tage im Voraus an.",
        },
        {
          title: "Frisch gefertigt",
          text: "Ihre Bestellung entsteht frisch in der Backstube, handgefertigt, ohne Kompromisse.",
        },
        {
          title: "Genießen",
          text: "Abholen, anschneiden, glücklich sein. Für Nachschub wissen Sie ja jetzt, wo wir sind.",
        },
      ]}
      testimonial={testimonials[1]}
      faqTopic="toertchen"
      cta={{
        title: "Ein Anlass, der mehr verdient als Blechkuchen?",
        text: "Fragen Sie Ihren Wunschkuchen an oder schauen Sie mittwochs bis sonntags in der Boutique vorbei, die Vitrine ist das beste Argument.",
        label: "Kuchen anfragen",
      }}
      related={["macarons", "geburtstagstorten"]}
    />
  );
}
