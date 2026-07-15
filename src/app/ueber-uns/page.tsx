import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { TestimonialQuote } from "@/components/TestimonialQuote";
import { CtaSection } from "@/components/sections";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { testimonials } from "@content/data/testimonials";

export const metadata: Metadata = pageMetadata({
  title: "Über uns: die Boutique in Stuttgart-West",
  description:
    "Pâtissier - Macaron & Tartelette Boutique: französisches Feinbäcker-Handwerk in Stuttgart-West. Lernen Sie unsere Philosophie kennen, mit Verantwortung gebacken.",
  path: "/ueber-uns",
});

export default function UeberUnsPage() {
  return (
    <>
      <section className="container-page pt-10 pb-16 md:pt-14">
        <Breadcrumbs items={[{ name: "Über uns", path: "/ueber-uns" }]} />
        <div className="mt-10 max-w-3xl">
          <h1 className="text-h2">Mit Liebe gebacken, aus Leidenschaft wird Patisserie.</h1>
          <p className="mt-6 text-lead text-taupe">
            Hinter jeder Torte, jedem Macaron und jedem Törtchen steckt unsere
            Leidenschaft für die Kunst der feinen Patisserie. Wir glauben, dass Genuss
            ein Erlebnis ist, von der ersten Begegnung mit der Vitrine bis zum
            letzten Bissen.
          </p>
        </div>
      </section>

      <section aria-label="Unsere Geschichte" className="hairline-t py-16 md:py-20">
        <div className="container-page grid items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <figure>
              <div className="img-hover relative aspect-[4/5] max-h-130">
                <Image
                  src="/images/insta/handwerk-schokotoertchen-anrichten.jpg"
                  alt="Zwei Hände richten ein glasiertes Schokoladentörtchen mit Himbeere auf einem Teller an."
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 460px"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-caption text-taupe">
                Handarbeit, bis das Törtchen sitzt.
              </figcaption>
            </figure>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <h2 className="text-h3">Traditionelles Handwerk, moderne Geschmacksideen</h2>
            <div className="mt-5 flex max-w-[62ch] flex-col gap-4 text-taupe">
              <p>
                Unsere Patisserie in der Kornbergstraße verbindet traditionelles
                Feinbäcker-Handwerk mit modernen Geschmacksideen. Elegante Macarons,
                kunstvolle Törtchen, stilvolle Hochzeitstorten und verspielte
                Geburtstagstorten entstehen hier in Handarbeit, aus besten Zutaten,
                mit einem Hauch französischer Raffinesse.
              </p>
              <p>
                Wir nehmen Sie mit auf eine Reise in die Welt der Konfiserie und tun
                alles dafür, Ihren Gaumen mit sinnlichen und innovativen Geschmäckern
                zu verwöhnen, ob für private Anlässe oder besondere Events.
              </p>
            </div>

            <h2 className="mt-12 text-h3">Feinste Pâtisserie mit Verantwortung</h2>
            <div className="mt-5 flex max-w-[62ch] flex-col gap-4 text-taupe">
              <p>
                Bei uns stehen Qualität, Geschmack und Werte an erster Stelle: beste
                Bio-Zutaten, keine künstlichen Zusätze, bewusst ohne Alkohol und
                ausschließlich mit halal-zertifizierter Rinder-Gelatine, unsere
                Kreationen sind zu 100 % halal. Viele Törtchen, Kuchen und Macarons
                gibt es außerdem vegan und glutenfreundlich.
              </p>
              <p>
                Was das im Alltag unserer Backstube bedeutet, lesen Sie auf der Seite{" "}
                <Link href="/halal-bio-vegan" className="text-link">
                  Halal, Bio & Vegan
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <TestimonialQuote testimonial={testimonials[0]!} />

      {/* Boutique-Fakten als Preiskärtchen-Zeile */}
      <section aria-label="Die Boutique in Zahlen" className="bg-puder py-16 md:py-20">
        <div className="container-page grid gap-x-12 gap-y-10 sm:grid-cols-3">
          <div className="hairline-t pt-5">
            <p className="label text-taupe">Das Haus</p>
            <p className="mt-3 font-display text-h3">Macaron & Tartelette Boutique</p>
            <p className="mt-2 text-caption text-taupe">
              Inhaberin: {site.owner}. Handwerk statt Fließband.
            </p>
          </div>
          <div className="hairline-t pt-5">
            <p className="label text-taupe">Der Ort</p>
            <p className="mt-3 font-display text-h3">Stuttgart-West</p>
            <p className="mt-2 text-caption text-taupe">
              {site.address.street}, nahe Hölderlinplatz, mittendrin statt Industriegebiet.
            </p>
          </div>
          <div className="hairline-t pt-5">
            <p className="label text-taupe">Die Regel</p>
            <p className="mt-3 font-display text-h3">Sonntags geöffnet</p>
            <p className="mt-2 text-caption text-taupe">
              Mo & Di Ruhetage, gutes Handwerk braucht Pausen.
            </p>
          </div>
        </div>
      </section>

      <CtaSection
        title="Lernen wir uns kennen."
        text="Am schönsten persönlich in der Boutique, oder Sie schreiben uns, was Sie planen. Den Rest besprechen wir am besten ganz entspannt bei einer Tasse Kaffee und einer süßen Kostprobe."
        ctaLabel="Termin vereinbaren"
        related={["macarons", "hochzeitstorten"]}
      />
    </>
  );
}
