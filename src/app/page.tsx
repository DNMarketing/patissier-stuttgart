import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { JournalTeaser } from "@/components/JournalTeaser";
import { BoutiqueCollage } from "@/components/BoutiqueCollage";
import { ManifestBand } from "@/components/feature-sections";
import { TestimonialQuote } from "@/components/TestimonialQuote";
import { Vitrine } from "@/components/Vitrine";
import { pageMetadata } from "@/lib/seo";
import { hours, site } from "@/lib/site";
import { home } from "@content/data/seiten";
import { getSortiment } from "@content/data/sortiment";
import { testimonials } from "@content/data/testimonials";

export const metadata: Metadata = pageMetadata({
  title: "Pâtissier Stuttgart: Französische Patisserie, Macarons & Torten",
  description:
    "Französische Pâtisserie in Stuttgart-West: Macarons, Törtchen und Torten, handgemacht, bio und 100 % halal. Sonntags geöffnet. Jetzt Torte oder Catering anfragen.",
  path: "/",
});

const heroLines = [
  { text: "Französische" },
  { text: "Pâtisserie,", accent: true },
  { text: "handgemacht in" },
  { text: "Stuttgart-West." },
];

const grundsaetze = [
  {
    title: "Bio-Zutaten",
    text: "Beste Bio-Rohstoffe, keine künstlichen Zusätze. Echte Süße braucht keine Abkürzungen, nur Zeit und Hingabe.",
  },
  {
    title: "100 % halal",
    text: "Bewusst ohne Alkohol, ausschließlich halal-zertifizierte Rinder-Gelatine. Jede Kreation, ohne Ausnahme.",
  },
  {
    title: "Vegan möglich",
    text: "Viele Törtchen, Kuchen und Macarons gibt es vegan und glutenfreundlich, ohne Kompromisse beim Geschmack.",
  },
];

export default function HomePage() {
  const wedding = getSortiment("hochzeitstorten");
  const catering = getSortiment("catering");
  const testimonial = testimonials[1]!;

  return (
    <>
      {/* Masthead: die Marke mittig über allem, wie ein Briefkopf */}
      <div className="container-page pt-10 md:pt-12">
        <div className="hero-logo flex items-center gap-4 sm:gap-6 md:gap-8">
          <span aria-hidden className="h-px flex-1 bg-hairline" />
          <span aria-hidden className="text-sm text-framboise">✱</span>
          <Image
            src="/images/brand/logo-patissier-schwarz.png"
            alt="Pâtissier - Macaron & Tartelette Boutique"
            width={2500}
            height={1667}
            priority
            sizes="(max-width: 640px) 240px, 360px"
            className="h-auto w-60 shrink-0 sm:w-72 md:w-[22.5rem]"
          />
          <span aria-hidden className="text-sm text-framboise">✱</span>
          <span aria-hidden className="h-px flex-1 bg-hairline" />
        </div>
      </div>

      {/* Hero: der eine choreografierte Moment (CSS-Sequenz, s. DESIGN.md §6) */}
      <section className="container-page grid items-center gap-12 pt-10 pb-20 md:pt-12 md:pb-28 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          <h1 className="text-display">
            {heroLines.map((line, i) => (
              <span key={line.text} className="hero-line-mask">
                <span className="hero-line" style={{ "--i": i + 2 } as React.CSSProperties}>
                  {line.accent ? <em className="accent-em">{line.text}</em> : line.text}
                </span>
              </span>
            ))}
          </h1>
          <div className="hero-meta mt-9">
            <p className="max-w-[52ch] text-lead text-taupe">
              Macarons, Törtchen und Torten aus der Boutique in der Kornbergstraße,
              aus Bio-Zutaten, 100 % halal, vieles vegan. Wie in Paris, nur eben um
              die Ecke.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href="/kontakt" className="btn btn-primary">
                Torte anfragen
              </Link>
              <a href="#vitrine-heading" className="btn btn-secondary">
                Sortiment ansehen
              </a>
            </div>
            <p className="mt-8 flex flex-wrap items-center gap-3">
              <span className="label text-taupe">Kornbergstraße 17 · Stuttgart-West</span>
              <span className="label rounded-full bg-framboise/10 px-3.5 py-1.5 text-framboise">
                Sonntags geöffnet
              </span>
            </p>
          </div>
        </div>
        <div className="hero-media lg:col-span-5">
          <div className="relative mx-auto aspect-[3/4] max-h-[34rem] w-full max-w-md">
            <div className="card-soft absolute inset-0 rounded-3xl" aria-hidden />
            <Image
              src={wedding.image}
              alt={wedding.imageAlt}
              fill
              priority
              fetchPriority="high"
              sizes="(max-width: 1024px) 90vw, 440px"
              className="rounded-3xl object-cover"
            />
            {/* Schwebendes Nebenbild: zweite Ebene, erst nach dem Hero-Moment */}
            <div className="hero-side absolute -bottom-10 -left-16 hidden w-44 overflow-hidden rounded-2xl border-4 border-porzellan shadow-[0_18px_40px_rgb(42_30_24/0.18)] md:block">
              <Image
                src="/images/legacy/dessert-toertchen-beeren-creme.jpg"
                alt=""
                width={1284}
                height={1563}
                sizes="176px"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Signature-Element: Die Vitrine */}
      <Vitrine />

      <ManifestBand
        label={home.manifest.label}
        statement={home.manifest.items[0]!.title}
        text={home.manifest.items[0]!.text}
        link={{ href: "/ueber-uns", label: "Mehr über das Haus" }}
      />

      {/* Grundsätze: die eine Puder-Fläche der Seite */}
      <section aria-labelledby="grundsaetze-heading" className="bg-puder py-20 md:py-24">
        <div className="container-page">
          <Reveal>
            <p className="label text-taupe">Unsere Grundsätze</p>
            <h2 id="grundsaetze-heading" className="mt-3 max-w-2xl text-h2">
              Feinbäcker-Handwerk mit {" "}<em className="accent-em">Verantwortung</em>
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-3">
            {grundsaetze.map((g) => (
              <div key={g.title} className="hairline-t pt-5">
                <h3 className="font-display text-h3">{g.title}</h3>
                <p className="mt-3 text-taupe">{g.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-12">
            <Link href="/halal-bio-vegan" className="text-link">
              Was Halal, Bio & Vegan bei uns konkret bedeutet
            </Link>
          </p>
        </div>
      </section>

      <BoutiqueCollage />

      <TestimonialQuote testimonial={testimonial} />

      {/* Catering-Teaser */}
      <section aria-labelledby="catering-heading" className="hairline-t py-20 md:py-28">
        <div className="container-page grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-5">
            <div className="img-hover relative aspect-[4/5] max-h-130 w-full">
              <Image
                src={catering.image}
                alt={catering.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 460px"
                className="object-cover"
              />
            </div>
          </Reveal>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="sortiment-no text-caption text-taupe">N° {catering.no}</p>
            <h2 id="catering-heading" className="mt-3 text-h2">
              Catering & Sweet Tables
            </h2>
            <p className="mt-6 max-w-[54ch] text-lead text-taupe">
              Von feinen Petit Fours für den Kaffeeklatsch bis zum Themenbuffet nach
              Ihren Wünschen, inklusive Anrichtegeschirr und stilvoller Inszenierung
              vor Ort. Für akute Pâtissier-Sucht bei Ihren Gästen übernehmen wir
              allerdings keine Verantwortung.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/catering" className="btn btn-secondary">
                Catering entdecken
              </Link>
              <Link href="/kontakt?anlass=catering" className="btn btn-primary">
                Catering anfragen
              </Link>
            </div>
          </div>
        </div>
      </section>

      <JournalTeaser />

      {/* Besuch: Öffnungszeiten prominent, Mo/Di klar als Ruhetage */}
      <section aria-labelledby="besuch-heading" className="hairline-t py-20 md:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="label text-taupe">Die Boutique</p>
              <h2 id="besuch-heading" className="mt-3 text-h2">
                Besuchen Sie uns, <em className="accent-em">auch sonntags</em>
              </h2>
            </Reveal>
            <p className="mt-6 max-w-[48ch] text-taupe">
              Mitten in Stuttgart-West, nahe Hölderlinplatz: In der Vitrine warten
              Macarons, Törtchen und Kuchen aus der aktuellen Produktion. Montag und
              Dienstag gönnen wir dem Handwerk eine Pause.
            </p>
            <address className="mt-8 text-body not-italic">
              <strong>{site.name}</strong>
              <br />
              {site.address.street}, {site.address.zip} {site.address.city}
              <br />
              <a href={`tel:${site.phone.e164}`} className="text-link">
                Tel. {site.phone.display}
              </a>
            </address>
            <p className="mt-8">
              <Link href="/kontakt" className="btn btn-secondary">
                Kontakt & Anfahrt
              </Link>
            </p>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <table className="w-full">
              <caption className="label pb-4 text-left text-taupe">Öffnungszeiten</caption>
              <tbody>
                {hours.map((h) => (
                  <tr key={h.day} className="hairline-t">
                    <th scope="row" className="py-3.5 pr-6 text-left font-sans font-medium">
                      {h.day}
                    </th>
                    <td
                      className={`py-3.5 text-right ${
                        h.opens
                          ? h.day === "Sonntag"
                            ? "font-semibold text-framboise"
                            : ""
                          : "text-taupe"
                      }`}
                    >
                      {h.opens ? `${h.opens} bis ${h.closes} Uhr` : "Ruhetag"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
