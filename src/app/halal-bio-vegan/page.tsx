import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaSection, FaqTeaser } from "@/components/sections";
import { pageMetadata } from "@/lib/seo";
import { faqsByTopic } from "@content/data/faqs";

export const metadata: Metadata = pageMetadata({
  title: "Halal-Konditorei Stuttgart – Bio & vegane Patisserie",
  description:
    "100 % halal, Bio-Zutaten, viele vegane Kreationen: französische Patisserie in Stuttgart, die möglichst viele genießen können. Erfahren Sie, wie wir arbeiten.",
  path: "/halal-bio-vegan",
});

const prinzipien = [
  {
    title: "100 % halal, ohne Ausnahme",
    text: [
      "Wir verzichten in allen Kreationen bewusst auf Alkohol. Wo Gelatine nötig ist, verwenden wir ausschließlich halal-zertifizierte Rinder-Gelatine, niemals Schweine-Gelatine.",
      "Das gilt nicht für eine „Halal-Linie“, sondern für unser gesamtes Sortiment: jede Torte, jedes Törtchen, jeden Macaron. Sie müssen nichts nachfragen und nichts prüfen, bei uns ist halal der Standard, nicht die Option.",
    ],
  },
  {
    title: "Bio-Zutaten, keine künstlichen Zusätze",
    text: [
      "Gute Patisserie beginnt beim Einkauf: Wir arbeiten mit besten Bio-Zutaten und verzichten auf künstliche Zusätze.",
      "Denn wir glauben: Echte Süße braucht keine Kompromisse, nur Hingabe, hochwertige Rohstoffe und ein feines Gespür für Ästhetik. Was nicht hineingehört, bleibt draußen.",
    ],
  },
  {
    title: "Vegan & glutenfreundlich",
    text: [
      "Viele unserer Törtchen, Kuchen und Macarons sind vegan oder glutenfreundlich, als vollwertige Kreationen, nicht als Verlegenheitslösung.",
      "Wichtig für Allergiker: In unserer Backstube wird auch mit Weizenmehl, Milch, Eiern und Nüssen gearbeitet. Sprechen Sie Unverträglichkeiten bei der Anfrage offen an, wir beraten Sie ehrlich, was für Sie möglich ist.",
    ],
  },
];

export default function HalalBioVeganPage() {
  return (
    <>
      <section className="container-page pt-10 pb-16 md:pt-14">
        <Breadcrumbs items={[{ name: "Halal, Bio & Vegan", path: "/halal-bio-vegan" }]} />
        <div className="mt-10 grid items-start gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h1 className="text-h2">
              Halal, bio, vieles vegan: Patisserie, die möglichst viele genießen können.
            </h1>
            <p className="mt-6 max-w-[58ch] text-lead text-taupe">
              Französische Patisserie und bewusster Genuss schließen sich nicht aus.
              Diese Kombination gibt es in Stuttgart so gut wie nirgends, bei uns ist
              sie das Fundament des Hauses.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="img-hover relative aspect-[4/5] max-h-130 w-full">
              <Image
                src="/images/legacy/dessert-toertchen-beeren-creme.jpg"
                alt="Elegantes rosafarbenes Dessert mit weißer Creme und frischen Beeren auf weißem Teller."
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 460px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Unsere Prinzipien" className="hairline-t">
        <div className="container-page">
          {prinzipien.map((p, i) => (
            <article
              key={p.title}
              className={`grid gap-6 py-14 md:grid-cols-12 md:py-16 ${i > 0 ? "hairline-t" : ""}`}
            >
              <div className="md:col-span-5">
                <p className="sortiment-no text-caption text-taupe">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-2 text-h3 md:max-w-xs">{p.title}</h2>
              </div>
              <div className="md:col-span-6 md:col-start-7">
                {p.text.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)} className="mt-4 max-w-[62ch] text-taupe first:mt-0">
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-puder py-16 md:py-20">
        <div className="container-page">
          <p className="mx-auto max-w-2xl text-center font-display text-quote">
            „Echte Süße braucht keine Kompromisse, nur Hingabe, hochwertige Rohstoffe
            und ein feines Gespür für Ästhetik.“
          </p>
          <p className="label mt-6 text-center text-taupe">Unsere Philosophie</p>
        </div>
      </section>

      <FaqTeaser items={faqsByTopic("halal")} />

      <CtaSection
        title="Kosten Sie den Unterschied."
        text="Besuchen Sie die Boutique in der Kornbergstraße, mittwochs bis sonntags, oder fragen Sie Ihre Torte direkt an. Mehr über unsere Arbeitsweise erzählen wir Ihnen gern persönlich."
        ctaLabel="Torte anfragen"
        related={["toertchen-und-kuchen", "macarons"]}
      />
    </>
  );
}
