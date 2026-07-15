"use client";

import { useState } from "react";
import { site } from "@/lib/site";

const MAPS_QUERY = encodeURIComponent(
  `${site.name}, ${site.address.street}, ${site.address.zip} ${site.address.city}`,
);

/**
 * DSGVO: Zwei-Klick-Lösung. Standardmäßig nur eine gestaltete Fläche ohne
 * externe Requests — Google Maps lädt erst nach ausdrücklichem Klick.
 */
export function MapCard() {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <div className="relative aspect-[4/3] w-full border border-hairline">
        <iframe
          src={`https://www.google.com/maps?q=${MAPS_QUERY}&output=embed&hl=de`}
          title={`Karte: ${site.name}, ${site.address.street}, ${site.address.zip} ${site.address.city}`}
          className="absolute inset-0 h-full w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    );
  }

  return (
    <div className="flex aspect-[4/3] w-full flex-col items-start justify-between border border-hairline bg-puder p-6 sm:p-8">
      <div>
        <p className="label text-taupe">Ihr Weg zu uns</p>
        <p className="mt-4 font-display text-h3">
          {site.address.street}
          <br />
          {site.address.zip} {site.address.city}
        </p>
        <p className="mt-2 text-caption text-taupe">
          {site.address.district}, nahe Hölderlinplatz
        </p>
      </div>
      <div>
        <button type="button" onClick={() => setLoaded(true)} className="btn btn-secondary">
          Karte laden
        </button>
        <p className="mt-3 max-w-sm text-caption text-taupe">
          Beim Laden der Karte werden Daten an Google übertragen, deshalb erst auf
          Ihren Klick. Details in der Datenschutzerklärung.
        </p>
      </div>
    </div>
  );
}
