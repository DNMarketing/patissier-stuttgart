import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { ServicePageShell } from "@/components/ServicePageShell";
import { pageMetadata } from "@/lib/seo";
import { getSortiment } from "@content/data/sortiment";
import { testimonials } from "@content/data/testimonials";

export const metadata: Metadata = pageMetadata({
  title: "Dessert-Catering Stuttgart – Sweet Tables & Torten",
  description:
    "Dessert-Catering in Stuttgart: Sweet Tables, Petit Fours und Torten – inklusive Geschirr und stilvoller Inszenierung vor Ort. Jetzt Catering anfragen!",
  path: "/catering",
});

export default function CateringPage() {
  return (
    <ServicePageShell
      item={getSortiment("catering")}
      path="/catering"
      breadcrumbName="Catering"
      h1={<>Dessert-Catering in Stuttgart, der krönende Abschluss.</>}
      lead="Unsere Desserts sind der Teil der Veranstaltung, über den hinterher alle reden. Wir liefern nicht nur süße Meisterwerke, sondern bringen das passende Anrichtegeschirr mit und inszenieren das Buffet stilvoll vor Ort."
      offeringsTitle="Vom Petit Four bis zum Themenbuffet"
      offerings={[
        {
          title: "Sweet Tables & Themenbuffets",
          text: "Individuell gestaltete Buffets nach Ihren Wünschen, farblich und thematisch abgestimmt auf Hochzeit, Geburtstag oder Firmenevent.",
        },
        {
          title: "Petit Fours & Feingebäck",
          text: "Feine Kleinigkeiten für den Kaffeeklatsch, den Empfang oder die Kaffeepause, mundgerecht, handgemacht, in Bio-Qualität.",
        },
        {
          title: "Torten als Mittelpunkt",
          text: "Hochzeits- und Geburtstagstorten als Herzstück des Buffets, umringt von Macarons, Törtchen und allem, was dazugehört.",
        },
        {
          title: "Geschirr & Inszenierung inklusive",
          text: "Etageren, Platten, Dekoration: Wir bauen Ihr Buffet vor Ort auf und richten es stilvoll an. Sie kümmern sich um die Gäste, wir uns um den Rest.",
        },
      ]}
      stepsTitle="So planen wir Ihr Catering"
      steps={[
        {
          title: "Anfragen",
          text: "Anlass, Datum, Ort und Gästezahl, schicken Sie uns die Eckdaten per Formular oder rufen Sie an.",
        },
        {
          title: "Konzept besprechen",
          text: "Auswahl, Mengen und Inszenierung planen wir gemeinsam, gern bei einer Kostprobe in der Boutique.",
        },
        {
          title: "Produktion",
          text: "Alles entsteht frisch und handgemacht in unserer Backstube, abgestimmt auf Ihren Termin.",
        },
        {
          title: "Aufbau vor Ort",
          text: "Wir liefern, bauen auf und richten an. Für akute Pâtissier-Sucht Ihrer Gäste übernehmen wir keine Verantwortung.",
        },
      ]}
      testimonial={testimonials[0]}
      faqTopic="catering"
      cta={{
        title: "Planen Sie etwas Großes?",
        text: "Erzählen Sie uns von Ihrer Veranstaltung, wir melden uns mit Ideen, Mengenempfehlung und einem konkreten Angebot zurück.",
        label: "Catering anfragen",
      }}
      related={["hochzeitstorten", "macarons"]}
    >
      {/* Zusatzsektion: Impressionen */}
      <section aria-label="Impressionen" className="hairline-t py-20 md:py-24">
        <div className="container-page grid gap-6 sm:grid-cols-2">
          <Reveal>
            <figure>
              <div className="img-hover relative aspect-[4/3]">
                <Image
                  src="/images/legacy/sweet-table-hochzeitstorte-macarons.jpg"
                  alt="Festlich gedeckter Sweet Table mit mehrstöckiger weißer Torte, bunten Macarons, Obst und Kerzen, im Hintergrund Fenster mit Lichterdekoration."
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-caption text-taupe">
                Sweet Table zur Hochzeit: Torte, Macarons und Früchte, vor Ort angerichtet.
              </figcaption>
            </figure>
          </Reveal>
          <Reveal index={1}>
            <figure>
              <div className="img-hover relative aspect-[4/3]">
                <Image
                  src="/images/legacy/event-dekoration-lampe-pastell.jpg"
                  alt="Festliche Deckendekoration mit weißer Lampe und Bändern in Rosa und Blau."
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-caption text-taupe">
                Bis unter die Decke gedacht: Inszenierung, die zum Anlass passt.
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>
    </ServicePageShell>
  );
}
