import Image from "next/image";
import Link from "next/link";
import { footerNav, hours, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-schokolade text-porzellan">
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:gap-8">
        {/* Marke + NAP */}
        <div>
          <Image
            src="/images/brand/logo-patissier-schwarz.png"
            alt="Pâtissier – Macaron & Tartelette Boutique"
            width={2500}
            height={1667}
            className="h-12 w-auto invert"
            sizes="180px"
          />
          <address className="mt-6 text-[0.9375rem] leading-relaxed text-porzellan/80 not-italic">
            {site.name}
            <br />
            {site.address.street}
            <br />
            {site.address.zip} {site.address.city}
          </address>
          <p className="mt-4 flex flex-col gap-1 text-[0.9375rem] text-porzellan/80">
            <a className="w-fit hover:text-porzellan" href={`tel:${site.phone.e164}`}>
              Tel. {site.phone.display}
            </a>
            <a className="w-fit hover:text-porzellan" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </p>
          <div className="mt-6 flex gap-5">
            <a
              href={site.social.instagram}
              rel="noopener noreferrer"
              target="_blank"
              className="label text-porzellan/70 hover:text-porzellan"
            >
              Instagram
            </a>
            <a
              href={site.social.facebook}
              rel="noopener noreferrer"
              target="_blank"
              className="label text-porzellan/70 hover:text-porzellan"
            >
              Facebook
            </a>
          </div>
        </div>

        {/* Sitemap: Sortiment */}
        <nav aria-label="Sortiment">
          <h2 className="label text-porzellan/50">Sortiment</h2>
          <ul className="mt-5 flex flex-col gap-3">
            {footerNav.sortiment.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-[0.9375rem] text-porzellan/80 hover:text-porzellan"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Sitemap: Haus */}
        <nav aria-label="Über das Haus">
          <h2 className="label text-porzellan/50">Das Haus</h2>
          <ul className="mt-5 flex flex-col gap-3">
            {footerNav.haus.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-[0.9375rem] text-porzellan/80 hover:text-porzellan"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Öffnungszeiten */}
        <div>
          <h2 className="label text-porzellan/50">Öffnungszeiten</h2>
          <table className="mt-5 w-full max-w-60 text-[0.9375rem]">
            <tbody>
              {hours.map((h) => (
                <tr key={h.day}>
                  <th scope="row" className="py-1 pr-4 text-left font-normal text-porzellan/60">
                    {h.short}
                  </th>
                  <td
                    className={
                      h.opens
                        ? h.day === "Sonntag"
                          ? "py-1 font-medium text-porzellan"
                          : "py-1 text-porzellan/80"
                        : "py-1 text-porzellan/60"
                    }
                  >
                    {h.opens ? `${h.opens} – ${h.closes} Uhr` : "Ruhetag"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-3 text-caption text-porzellan/60">
            Ja, richtig gelesen: sonntags geöffnet.
          </p>
        </div>
      </div>

      <div className="border-t border-porzellan/15">
        <div className="container-page flex flex-col gap-3 py-6 text-caption text-porzellan/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.legalName} · {site.address.city}</p>
          <nav aria-label="Rechtliches" className="flex gap-6">
            {footerNav.recht.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-porzellan">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
