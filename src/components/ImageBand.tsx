import Image from "next/image";
import { Reveal } from "./Reveal";

/**
 * Eingebettetes Bild-Intermezzo: im Seitenraster, großzügig abgerundet,
 * mit ruhigem Ken-Burns-Zoom und Pill-Bildunterschrift. Keine Full-Bleed-Crops.
 */
export function ImageBand({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption?: string;
}) {
  return (
    <section aria-label={caption ?? alt} className="py-6 md:py-10">
      <div className="container-page">
        <Reveal>
          <div className="card-soft kenburns relative h-[clamp(260px,38vw,440px)] rounded-3xl">
            <Image src={src} alt={alt} fill sizes="(max-width: 1264px) 100vw, 1136px" className="object-cover" />
            {caption && (
              <p className="label absolute bottom-4 left-4 rounded-full bg-porzellan/90 px-4 py-2 text-schokolade backdrop-blur-sm">
                {caption}
              </p>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
