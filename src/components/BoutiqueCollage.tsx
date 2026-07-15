import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./Reveal";

const BILDER = [
  {
    src: "/images/legacy/hochzeitstorte-stuttgart-weiss-rosen.jpg",
    alt: "Zweistöckige weiße Hochzeitstorte mit Blumendekoration und rosa Rosen.",
    href: "/hochzeitstorten",
    label: "N° 03 · Hochzeitstorten",
    className: "h-full min-h-[22rem]",
    tall: true,
    float: "",
  },
  {
    src: "/images/legacy/dessert-toertchen-beeren-creme.jpg",
    alt: "Rosafarbenes Dessert mit weißer Creme und frischen Beeren auf weißem Teller.",
    href: "/toertchen-und-kuchen",
    label: "N° 02 · Törtchen",
    className: "aspect-[4/3]",
    float: "float-slower",
  },
  {
    src: "/images/insta/macarons-pastell-flieder-rosa.jpg",
    alt: "Pastellfarbene Macarons in Flieder und Rosa in der Geschenkbox.",
    href: "/macarons",
    label: "N° 01 · Macarons",
    className: "aspect-[4/3]",
    float: "float-slow",
  },
  {
    src: "/images/legacy/schokoladentorte-goldblatt-patisserie.jpg",
    alt: "Schokoladentorte mit dunkler Glasur und Blattgold auf blauem Teller.",
    href: "/geburtstagstorten",
    label: "N° 04 · Geburtstagstorten",
    className: "aspect-[4/3]",
    float: "float-slower",
  },
  {
    src: "/images/legacy/sweet-table-hochzeitstorte-macarons.jpg",
    alt: "Festlich gedeckter Sweet Table mit Torte, Macarons und Kerzen.",
    href: "/catering",
    label: "N° 05 · Catering",
    className: "col-span-2 aspect-[16/9] sm:col-span-1 sm:aspect-[4/3]",
    float: "float-slow",
  },
];

/**
 * „Aus der Boutique": asymmetrische Foto-Collage mit sanft schwebenden
 * Kacheln, Hover-Zoom und N°-Etiketten. Jede Kachel führt in ihr Sortiment.
 */
export function BoutiqueCollage() {
  return (
    <section aria-labelledby="collage-heading" className="hairline-t py-20 md:py-28">
      <div className="container-page">
        <Reveal>
          <p className="label text-taupe">Aus der Boutique</p>
          <h2 id="collage-heading" className="mt-3 max-w-2xl text-h2">
            Momente, die man <em className="accent-em">anschneiden</em> möchte
          </h2>
        </Reveal>
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6">
          {BILDER.map((bild, i) => (
            <Reveal
              key={bild.src}
              index={i}
              className={"tall" in bild && bild.tall ? "row-span-2 [&>*]:h-full" : undefined}
            >
              <Link href={bild.href} className={`group block h-full ${bild.float}`}>
                <figure className={`card-soft img-hover relative ${bild.className}`}>
                  <Image
                    src={bild.src}
                    alt={bild.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, 33vw"
                    className="object-cover"
                  />
                  <figcaption className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full bg-porzellan/90 px-4 py-2 backdrop-blur-sm">
                    <span className="label text-schokolade">{bild.label}</span>
                    <span
                      aria-hidden
                      className="text-framboise transition-transform duration-200 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </figcaption>
                </figure>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
