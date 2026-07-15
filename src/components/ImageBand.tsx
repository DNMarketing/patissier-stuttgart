import Image from "next/image";

/**
 * Volle Breite, ruhiger Ken-Burns-Zoom: ein atmendes Bild-Band zwischen
 * Textsektionen. Bringt Fotografie in jede Unterseite, ohne Text zu stören.
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
    <section aria-label={caption ?? alt} className="relative">
      <div className="kenburns relative h-[clamp(280px,44vw,480px)] overflow-hidden">
        <Image src={src} alt={alt} fill sizes="100vw" className="object-cover" />
        {caption && (
          <p className="label absolute bottom-4 left-1/2 w-max max-w-[90vw] -translate-x-1/2 bg-schokolade/70 px-4 py-2 text-porzellan backdrop-blur-sm">
            {caption}
          </p>
        )}
      </div>
    </section>
  );
}
