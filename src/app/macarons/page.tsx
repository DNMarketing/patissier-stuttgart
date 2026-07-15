import type { Metadata } from "next";
import { ServicePageShell } from "@/components/ServicePageShell";
import { pageMetadata } from "@/lib/seo";
import { getSortiment } from "@content/data/sortiment";
import { testimonials } from "@content/data/testimonials";

export const metadata: Metadata = pageMetadata({
  title: "Macarons Stuttgart – auch personalisiert mit Gravur",
  description:
    "Macarons aus Stuttgart-West: handgemacht, bio, 100 % halal – auch personalisiert oder mit Gravur für Hochzeit und Events. Jetzt Macarons anfragen!",
  path: "/macarons",
});

export default function MacaronsPage() {
  return (
    <ServicePageShell
      item={getSortiment("macarons")}
      path="/macarons"
      breadcrumbName="Macarons"
      h1={
        <>
          Macarons aus Stuttgart, fein, farbenfroh, voller Charakter.
        </>
      }
      lead="Zarte Schalen, die beim ersten Biss leise brechen, und Füllungen, die lange nachklingen: Unsere Macarons entstehen in Handarbeit nach französischem Feinbäcker-Handwerk, aus Bio-Zutaten, 100 % halal, viele Sorten vegan."
      offeringsTitle="Vom einzelnen Träumchen bis zur Botschaft in zarter Form"
      offerings={[
        {
          title: "Macarons aus der Vitrine",
          text: "Wechselnde Sorten aus der aktuellen Produktion, zum Mitnehmen aus der Boutique in der Kornbergstraße, einzeln oder als Geschenkbox.",
        },
        {
          title: "Personalisiert & mit Gravur",
          text: "Namen, Initialen, Datum oder Logo, fein auf die Schale graviert: besondere Botschaften für Hochzeiten, Events und Firmenanlässe.",
        },
        {
          title: "Gastgeschenke für Ihr Fest",
          text: "Macarons in Ihren Hochzeits- oder Eventfarben, abgestimmt auf Ihre Deko, als kleines Dankeschön, das garantiert nicht liegen bleibt.",
        },
        {
          title: "Größere Mengen für Events",
          text: "Vom Kaffeeklatsch bis zum Sweet Table: Wir produzieren Macarons auch in größeren Stückzahlen, sprechen Sie uns rechtzeitig an.",
        },
      ]}
      stepsTitle="So kommen Sie zu Ihren Macarons"
      steps={[
        {
          title: "Anfragen",
          text: "Menge, Anlass und Wunschtermin per Formular oder Telefon, für Vitrinenkäufe kommen Sie einfach vorbei.",
        },
        {
          title: "Sorten wählen",
          text: "Wir beraten Sie zu Sorten, Farben und Personalisierung, passend zu Anlass und Jahreszeit.",
        },
        {
          title: "Handarbeit",
          text: "Ihre Macarons entstehen frisch in unserer Backstube, mit Geduld, Präzision und besten Bio-Zutaten.",
        },
        {
          title: "Abholen oder liefern",
          text: "Sie holen Ihre Bestellung in Stuttgart-West ab, oder wir besprechen die Lieferung zu Ihrem Event.",
        },
      ]}
      testimonial={testimonials[0]}
      faqTopic="macarons"
      cta={{
        title: "Lust auf Macarons?",
        text: "Ob eine Box für den Sonntagsbesuch oder 200 gravierte Gastgeschenke: Erzählen Sie uns, was Sie feiern, wir kümmern uns um den süßen Teil.",
        label: "Macarons anfragen",
      }}
      related={["toertchen-und-kuchen", "catering"]}
    />
  );
}
