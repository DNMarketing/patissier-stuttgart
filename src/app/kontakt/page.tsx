import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { MapCard } from "@/components/MapCard";
import { pageMetadata } from "@/lib/seo";
import { hours, site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Kontakt & Anfahrt: Torte oder Catering anfragen",
  description:
    "Torte, Macarons oder Catering anfragen: Kontaktformular, Telefon und Anfahrt zur Boutique in der Kornbergstraße 17, Stuttgart-West. Sonntags geöffnet!",
  path: "/kontakt",
});

export default function KontaktPage() {
  return (
    <>
      <section className="container-page pt-10 pb-16 md:pt-14">
        <Breadcrumbs items={[{ name: "Kontakt", path: "/kontakt" }]} />
        <div className="mt-10 max-w-3xl">
          <h1 className="text-h2">Ihre süße Idee ist nur eine Nachricht entfernt.</h1>
          <p className="mt-6 text-lead text-taupe">
            Ob Hochzeitstorte, Macarons mit Gravur oder ein ganzer Sweet Table:
            Schreiben Sie uns, was Sie planen, wir melden uns schnellstmöglich.
            Oder rufen Sie einfach an:{" "}
            <a href={`tel:${site.phone.e164}`} className="text-link">
              {site.phone.display}
            </a>
          </p>
        </div>
      </section>

      <section aria-label="Anfrage und Anfahrt" className="container-page grid gap-14 pb-20 lg:grid-cols-12 md:pb-28">
        <div className="lg:col-span-7">
          <h2 className="label text-taupe">Ihre Anfrage</h2>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>

        <div className="flex flex-col gap-10 lg:col-span-4 lg:col-start-9">
          <div>
            <h2 className="label text-taupe">Die Boutique</h2>
            <address className="mt-5 text-body not-italic">
              <strong>{site.name}</strong>
              <br />
              {site.address.street}
              <br />
              {site.address.zip} {site.address.city} ({site.address.district})
            </address>
            <p className="mt-4 flex flex-col gap-1">
              <a href={`tel:${site.phone.e164}`} className="text-link w-fit">
                Tel. {site.phone.display}
              </a>
              <a href={`mailto:${site.email}`} className="text-link w-fit">
                {site.email}
              </a>
            </p>
          </div>

          <div>
            <h2 className="label text-taupe">Öffnungszeiten</h2>
            <table className="mt-5 w-full max-w-72">
              <tbody>
                {hours.map((h) => (
                  <tr key={h.day} className="hairline-t">
                    <th scope="row" className="py-2.5 pr-4 text-left font-sans text-caption font-medium">
                      {h.day}
                    </th>
                    <td
                      className={`py-2.5 text-right text-caption ${
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
            <p className="mt-3 text-caption text-framboise">
              Sonntags geöffnet. Montag & Dienstag Ruhetage.
            </p>
          </div>

          <MapCard />
        </div>
      </section>
    </>
  );
}
