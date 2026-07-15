import type { Metadata } from "next";
import { ServicePageShell } from "@/components/ServicePageShell";
import { pageMetadata } from "@/lib/seo";
import { getSortiment } from "@content/data/sortiment";
import { testimonials } from "@content/data/testimonials";

export const metadata: Metadata = pageMetadata({
  title: "Geburtstagstorte Stuttgart bestellen – handgemacht",
  description:
    "Geburtstagstorte in Stuttgart bestellen: individuell gestaltet, handgemacht, bio und 100 % halal – für Kinder wie Erwachsene. Jetzt Wunschtorte anfragen!",
  path: "/geburtstagstorten",
});

export default function GeburtstagstortenPage() {
  return (
    <ServicePageShell
      item={getSortiment("geburtstagstorten")}
      path="/geburtstagstorten"
      breadcrumbName="Geburtstagstorten"
      h1={<>Geburtstagstorten aus Stuttgart, gefeiert wird mit Stil.</>}
      lead="Einmal im Jahr darf es etwas Besonderes sein. Wir backen Geburtstagstorten, die zum Menschen passen: verspielt oder elegant, klassisch oder ausgefallen, individuell gestaltet und handgemacht in Stuttgart-West."
      offeringsTitle="Für jedes Alter, für jeden Geschmack"
      offerings={[
        {
          title: "Motivtorten nach Wunsch",
          text: "Lieblingsfarben, Hobbys, ein Thema, das gefeiert werden will: Bringen Sie Ihre Idee mit, wir gestalten die Torte darum herum.",
        },
        {
          title: "Feine Klassiker",
          text: "Wer es puristisch mag, bekommt französische Patisserie in Reinform: Creme, Frucht und Biskuit, veredelt bis ins Detail.",
        },
        {
          title: "Für Kinder unbesorgt",
          text: "Ohne Alkohol, ohne Schweine-Gelatine, aus Bio-Zutaten: Unsere Torten sind zu 100 % halal und damit für viele Familien sorgenfrei.",
        },
        {
          title: "Passende Begleitung",
          text: "Macarons als Mitgebsel, Törtchen für die Kaffeetafel, auf Wunsch stellen wir das ganze süße Programm zusammen.",
        },
      ]}
      stepsTitle="So bestellen Sie Ihre Geburtstagstorte"
      steps={[
        {
          title: "Anfragen",
          text: "Wunschtermin, Personenzahl und Ihre Idee, per Formular oder ein kurzer Anruf genügt.",
        },
        {
          title: "Gestaltung klären",
          text: "Wir beraten Sie zu Design, Größe und Geschmack und machen Ihnen ein konkretes Angebot.",
        },
        {
          title: "Frisch gebacken",
          text: "Ihre Torte entsteht handgefertigt in unserer Backstube, rechtzeitig zu Ihrem Termin.",
        },
        {
          title: "Abholen & feiern",
          text: "Abholung in der Boutique oder Lieferung nach Absprache, und dann: Kerzen drauf.",
        },
      ]}
      testimonial={testimonials[1]}
      faqTopic="geburtstagstorten"
      cta={{
        title: "Wer hat als Nächstes Geburtstag?",
        text: "Fragen Sie Ihre Wunschtorte ein paar Tage im Voraus an, je besonderer das Design, desto mehr Zeit schenken Sie uns am besten.",
        label: "Geburtstagstorte anfragen",
      }}
      related={["macarons", "toertchen-und-kuchen"]}
    />
  );
}
