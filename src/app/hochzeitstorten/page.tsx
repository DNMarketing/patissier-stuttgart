import type { Metadata } from "next";
import { ServicePageShell } from "@/components/ServicePageShell";
import { pageMetadata } from "@/lib/seo";
import { getSortiment } from "@content/data/sortiment";
import { testimonials } from "@content/data/testimonials";

export const metadata: Metadata = pageMetadata({
  title: "Hochzeitstorte Stuttgart – individuell & handgemacht",
  description:
    "Hochzeitstorten aus Stuttgart: individuell gestaltet, handgemacht, bio und 100 % halal – mit persönlicher Beratung. Jetzt Ihre Hochzeitstorte anfragen!",
  path: "/hochzeitstorten",
});

export default function HochzeitstortenPage() {
  return (
    <ServicePageShell
      item={getSortiment("hochzeitstorten")}
      path="/hochzeitstorten"
      breadcrumbName="Hochzeitstorten"
      h1={<>Hochzeitstorten aus Stuttgart, so individuell wie Ihr Fest.</>}
      lead="Der Moment, in dem die Torte hereingetragen wird, gehört zu den Bildern, die bleiben. Wir gestalten Ihre Hochzeitstorte individuell, abgestimmt auf Ihre Farben, Ihre Blumen, Ihren Geschmack. Handgemacht, bio, 100 % halal."
      offeringsTitle="Ihre Torte, Ihre Regeln"
      offerings={[
        {
          title: "Mehrstöckig oder schlicht",
          text: "Von der eleganten einstöckigen Torte für die standesamtliche Feier bis zum mehrstöckigen Mittelpunkt für die große Gesellschaft.",
        },
        {
          title: "Design nach Ihren Wünschen",
          text: "Ihre Hochzeitsfarben, frische Blumen, feine Details: Bringen Sie Ideen und Inspirationsbilder mit, wir übersetzen sie in Handwerk.",
        },
        {
          title: "Geschmack, der zu Ihnen passt",
          text: "Creme, Frucht, Biskuit, komponiert nach Ihren Vorlieben. Auf Wunsch vegan oder glutenfreundlich, immer ohne Alkohol und 100 % halal.",
        },
        {
          title: "Dazu: Gastgeschenke & Sweet Table",
          text: "Personalisierte Macarons mit Gravur oder ein ganzer Sweet Table rund um die Torte, alles aus einer Hand, alles im selben Stil.",
        },
      ]}
      stepsTitle="So kommen Sie zu Ihrer Hochzeitstorte"
      steps={[
        {
          title: "Anfragen",
          text: "Datum, Ort und ungefähre Gästezahl genügen für den Anfang, per Formular oder Telefon.",
        },
        {
          title: "Beraten & Probieren",
          text: "Wir besprechen Design und Geschmack persönlich in der Boutique, ganz entspannt bei Kaffee und einer süßen Kostprobe.",
        },
        {
          title: "Feinschliff",
          text: "Farben, Blumen, Anschnitt-Logistik: Wir stimmen jedes Detail mit Ihnen ab, damit am Tag selbst nichts offen ist.",
        },
        {
          title: "Ihr großer Tag",
          text: "Auf Wunsch liefern wir die Torte zum Veranstaltungsort und bauen sie vor Ort auf. Sie heiraten, wir tragen.",
        },
      ]}
      testimonial={testimonials[0]}
      faqTopic="hochzeitstorten"
      cta={{
        title: "Erzählen Sie uns von Ihrem Fest.",
        text: "Je früher Sie anfragen, desto sicherer ist Ihr Termin, besonders in der Sommersaison. Die Beratung ist unverbindlich, die Kostprobe süß.",
        label: "Hochzeitstorte anfragen",
      }}
      related={["catering", "macarons"]}
    />
  );
}
