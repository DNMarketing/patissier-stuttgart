import type { Metadata } from "next";
import { hours, site } from "./site";

/** Einheitliche Metadata pro Route: Title, Description, Canonical, OG, Twitter. */
export function pageMetadata({
  title,
  description,
  path,
  noindex = false,
}: {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    // Key nur setzen, wenn nötig — `robots: undefined` würde beim Metadata-Merge
    // das globale noindex der Preview-Umgebung (layout.tsx) überschreiben.
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
    openGraph: {
      title,
      description,
      url: path,
      siteName: site.shortName,
      locale: "de_DE",
      type: "website",
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

/* ---------------------------------------------------------------------------
   JSON-LD
   --------------------------------------------------------------------------- */

export function bakeryJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Bakery",
    "@id": `${site.url}/#bakery`,
    name: site.name,
    url: site.url,
    image: `${site.url}/images/legacy/hochzeitstorte-stuttgart-weiss-rosen.jpg`,
    logo: `${site.url}/images/brand/logo-patissier-schwarz.png`,
    telephone: site.phone.e164,
    email: site.email,
    priceRange: "€€",
    servesCuisine: "Französische Pâtisserie",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      postalCode: site.address.zip,
      addressLocality: site.address.city,
      addressCountry: site.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    openingHoursSpecification: hours
      .filter((h) => h.opens && h.closes)
      .map((h) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: {
          Mittwoch: "Wednesday",
          Donnerstag: "Thursday",
          Freitag: "Friday",
          Samstag: "Saturday",
          Sonntag: "Sunday",
        }[h.day],
        opens: h.opens,
        closes: h.closes,
      })),
    sameAs: [site.social.instagram, site.social.facebook],
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Startseite", item: site.url },
      ...items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: item.name,
        item: `${site.url}${item.path}`,
      })),
    ],
  };
}

export function faqJsonLd(list: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: list.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function articleJsonLd(post: {
  title: string;
  description: string;
  date: string;
  slug: string;
  cover: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    image: `${site.url}${post.cover}`,
    author: { "@type": "Organization", name: site.name, url: site.url },
    publisher: { "@type": "Organization", name: site.name, url: site.url },
    mainEntityOfPage: `${site.url}/blog/${post.slug}`,
    inLanguage: "de-DE",
  };
}
