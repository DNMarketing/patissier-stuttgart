import Link from "next/link";
import { sortiment } from "@content/data/sortiment";

export default function NotFound() {
  return (
    <section className="container-page py-24 md:py-32">
      <p className="sortiment-no text-h3 text-framboise">N° 404</p>
      <h1 className="mt-4 max-w-2xl text-h2">
        Dieses Fach der Vitrine ist leer.
      </h1>
      <p className="mt-6 max-w-[52ch] text-lead text-taupe">
        Die Seite, die Sie suchen, gibt es nicht (mehr). Kein Grund, hungrig
        umzukehren: Hier entlang zum Sortiment.
      </p>
      <nav aria-label="Wegweiser" className="mt-12 max-w-2xl">
        <ul className="hairline-t">
          {sortiment.map((item) => (
            <li key={item.slug} className="hairline-b">
              <Link
                href={item.href}
                className="group flex items-baseline justify-between gap-6 py-4"
              >
                <span className="flex items-baseline gap-4">
                  <span className="sortiment-no text-caption text-taupe">N° {item.no}</span>
                  <span className="font-display text-h3 group-hover:text-framboise">
                    {item.name}
                  </span>
                </span>
                <span
                  aria-hidden
                  className="text-taupe transition-transform duration-200 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mt-12 flex flex-wrap gap-4">
        <Link href="/" className="btn btn-secondary">
          Zur Startseite
        </Link>
        <Link href="/kontakt" className="btn btn-primary">
          Torte anfragen
        </Link>
      </div>
    </section>
  );
}
