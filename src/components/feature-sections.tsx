import Link from "next/link";
import { Reveal } from "./Reveal";
import { WordReveal } from "./WordReveal";

export type FeatureItem = { title: string; text: string; tag?: string };

/* ---------------------------------------------------------------------------
   Editorial-Reihen: nummerierte Zeilen mit Hairlines (Stil französischer
   Preiskarten). Für Stilrichtungen, Formate, Vitrinen-Kategorien.
   --------------------------------------------------------------------------- */
export function EditorialRows({
  label,
  title,
  intro,
  items,
  tone = "hell",
}: {
  label: string;
  title: string;
  intro?: string;
  items: FeatureItem[];
  tone?: "hell" | "puder";
}) {
  return (
    <section
      aria-label={label}
      className={`py-20 md:py-24 ${tone === "puder" ? "bg-puder" : "hairline-t"}`}
    >
      <div className="container-page">
        <Reveal>
          <p className="label text-taupe">{label}</p>
          <h2 className="mt-3 max-w-2xl text-h2">{title}</h2>
          {intro && <p className="mt-5 max-w-[58ch] text-lead text-taupe">{intro}</p>}
        </Reveal>
        <div className="mt-12">
          {items.map((item, i) => (
            <Reveal key={item.title} index={i}>
              <article className="hairline-t grid gap-3 py-7 md:grid-cols-12 md:items-baseline md:py-8">
                <p className="sortiment-no text-h3 text-framboise md:col-span-1">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="font-display text-h3 md:col-span-4">{item.title}</h3>
                <p className="max-w-[56ch] text-taupe md:col-span-6 md:col-start-7">
                  {item.text}
                  {item.tag && (
                    <span className="label mt-3 block text-framboise">{item.tag}</span>
                  )}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------------------
   Split: zwei große gegenübergestellte Karten (z. B. „Für die Kleinen /
   Für die Großen").
   --------------------------------------------------------------------------- */
export function SplitFeature({
  label,
  title,
  items,
}: {
  label: string;
  title: string;
  items: FeatureItem[];
}) {
  return (
    <section aria-label={label} className="bg-puder py-20 md:py-24">
      <div className="container-page">
        <Reveal>
          <p className="label text-taupe">{label}</p>
          <h2 className="mt-3 max-w-2xl text-h2">{title}</h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {items.map((item, i) => (
            <Reveal key={item.title} index={i}>
              <article className="flex h-full flex-col border border-hairline bg-porzellan p-8 md:p-10">
                <p className="sortiment-no text-caption text-taupe">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-display text-h3">{item.title}</h3>
                <p className="mt-4 max-w-[52ch] text-taupe">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------------------
   Trio: drei sinnliche Momente (z. B. Anatomie eines Macarons) mit
   oversized Ziffern.
   --------------------------------------------------------------------------- */
export function SensorikTrio({
  label,
  title,
  intro,
  items,
}: {
  label: string;
  title: string;
  intro?: string;
  items: FeatureItem[];
}) {
  return (
    <section aria-label={label} className="bg-schokolade py-20 text-porzellan md:py-28">
      <div className="container-page">
        <Reveal>
          <p className="label text-porzellan/60">{label}</p>
          <h2 className="mt-3 max-w-2xl text-h2">{title}</h2>
          {intro && <p className="mt-5 max-w-[58ch] text-lead text-porzellan/70">{intro}</p>}
        </Reveal>
        <div className="mt-14 grid gap-x-10 gap-y-12 md:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.title} index={i}>
              <div className="border-t border-porzellan/20 pt-6">
                <p className="sortiment-no text-[3.25rem] leading-none text-framboise/90">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 font-display text-h3">{item.title}</h3>
                <p className="mt-3 text-porzellan/75">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------------------
   Timeline: vertikale Etappen mit Verlaufslinie (z. B. Weg zur Hochzeitstorte).
   --------------------------------------------------------------------------- */
export function TimelineSteps({
  label,
  title,
  intro,
  items,
}: {
  label: string;
  title: string;
  intro?: string;
  items: FeatureItem[];
}) {
  return (
    <section aria-label={label} className="bg-puder py-20 md:py-24">
      <div className="container-page grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <p className="label text-taupe">{label}</p>
          <h2 className="mt-3 text-h2">{title}</h2>
          {intro && <p className="mt-5 max-w-[44ch] text-taupe">{intro}</p>}
        </Reveal>
        <ol className="lg:col-span-7 lg:col-start-6">
          {items.map((item, i) => (
            <Reveal key={item.title} index={i}>
              <li className="relative flex gap-6 pb-10 last:pb-0">
                {/* Verlaufslinie */}
                {i < items.length - 1 && (
                  <span
                    aria-hidden
                    className="absolute top-11 left-[1.336rem] h-[calc(100%-2.75rem)] w-px bg-hairline"
                  />
                )}
                <span className="sortiment-no flex size-11 shrink-0 items-center justify-center border border-hairline bg-porzellan text-framboise">
                  {i + 1}
                </span>
                <div className="pt-1.5">
                  <h3 className="font-sans text-body font-semibold">{item.title}</h3>
                  <p className="mt-2 max-w-[56ch] text-taupe">{item.text}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------------------
   Manifest: ein Satz, groß, mittig — das Bekenntnis des Hauses.
   --------------------------------------------------------------------------- */
export function ManifestBand({
  label,
  statement,
  text,
  link,
}: {
  label: string;
  statement: string;
  text: string;
  link?: { href: string; label: string };
}) {
  return (
    <section aria-label={label} className="hairline-t py-20 md:py-28">
      <div className="container-page">
        <Reveal>
          <p className="label text-center text-taupe">{label}</p>
          <p className="mx-auto mt-6 max-w-4xl text-center font-display text-quote font-medium">
            <WordReveal text={statement} />
          </p>
          <p className="mx-auto mt-6 max-w-[58ch] text-center text-lead text-taupe">{text}</p>
          {link && (
            <p className="mt-8 text-center">
              <Link href={link.href} className="text-link">
                {link.label}
              </Link>
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
