"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";

const ANLAESSE = ["Hochzeit", "Geburtstag", "Catering", "Macarons", "Sonstiges"] as const;

type Status = "idle" | "sending" | "success" | "error";

const inputClasses =
  "w-full border border-hairline bg-white/60 px-4 py-3 text-body text-schokolade placeholder:text-taupe/60 focus:border-schokolade";

/**
 * Anfrageformular → Netlify Forms (statische Definition in public/__forms.html,
 * Honeypot „bot-field", serverseitige Prüfung in netlify/functions/submission-created).
 */
export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [anlass, setAnlass] = useState<string>("Sonstiges");

  // Anlass-Vorauswahl aus ?anlass= — nach dem Mount gelesen, damit die Seite
  // statisch bleibt und ohne Suspense-Fallback rendert (kein Layout-Shift).
  useEffect(() => {
    const param = new URLSearchParams(window.location.search).get("anlass");
    const match = ANLAESSE.find((a) => a.toLowerCase() === param?.toLowerCase());
    if (match) setAnlass(match);
  }, []);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (data: FormData) => {
    const errs: Record<string, string> = {};
    if (!String(data.get("name") ?? "").trim()) {
      errs.name = "Bitte tragen Sie Ihren Namen ein.";
    }
    const email = String(data.get("email") ?? "").trim();
    if (!email) {
      errs.email = "Bitte tragen Sie Ihre E-Mail-Adresse ein.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      errs.email = "Diese E-Mail-Adresse sieht unvollständig aus, bitte prüfen Sie sie kurz.";
    }
    if (!String(data.get("nachricht") ?? "").trim()) {
      errs.nachricht = "Beschreiben Sie kurz Ihren Wunsch. Zwei, drei Sätze genügen.";
    }
    if (!data.get("datenschutz")) {
      errs.datenschutz = "Ohne Ihre Einwilligung dürfen wir die Anfrage nicht verarbeiten.";
    }
    return errs;
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const errs = validate(data);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setStatus("sending");
    try {
      const body = new URLSearchParams();
      data.forEach((value, key) => body.append(key, String(value)));
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="border border-hairline bg-puder p-8" role="status">
        <p className="font-display text-h3">Ihre Anfrage ist angekommen.</p>
        <p className="mt-3 text-taupe">
          Wir melden uns schnellstmöglich bei Ihnen, meist innerhalb von ein bis zwei
          Werktagen. Wenn es eilt: Rufen Sie uns an unter{" "}
          <a href={`tel:${site.phone.e164}`} className="text-link">
            {site.phone.display}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      name="kontakt"
      onSubmit={onSubmit}
      noValidate
      className="flex flex-col gap-6"
    >
      <input type="hidden" name="form-name" value="kontakt" />
      {/* Honeypot */}
      <p className="hidden" aria-hidden="true">
        <label>
          Bitte dieses Feld nicht ausfüllen: <input name="bot-field" tabIndex={-1} />
        </label>
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="kf-name" className="label text-taupe">
            Name *
          </label>
          <input
            id="kf-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            className={`${inputClasses} mt-2`}
            aria-invalid={errors.name ? "true" : undefined}
            aria-describedby={errors.name ? "kf-name-error" : undefined}
          />
          {errors.name && (
            <p id="kf-name-error" className="mt-2 text-caption font-medium text-framboise">
              {errors.name}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="kf-email" className="label text-taupe">
            E-Mail *
          </label>
          <input
            id="kf-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className={`${inputClasses} mt-2`}
            aria-invalid={errors.email ? "true" : undefined}
            aria-describedby={errors.email ? "kf-email-error" : undefined}
          />
          {errors.email && (
            <p id="kf-email-error" className="mt-2 text-caption font-medium text-framboise">
              {errors.email}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="kf-telefon" className="label text-taupe">
            Telefon (optional)
          </label>
          <input
            id="kf-telefon"
            name="telefon"
            type="tel"
            autoComplete="tel"
            className={`${inputClasses} mt-2`}
          />
        </div>
        <div>
          <label htmlFor="kf-anlass" className="label text-taupe">
            Anlass
          </label>
          <select
            id="kf-anlass"
            name="anlass"
            value={anlass}
            onChange={(e) => setAnlass(e.target.value)}
            className={`${inputClasses} mt-2 appearance-none`}
          >
            {ANLAESSE.map((anlass) => (
              <option key={anlass} value={anlass}>
                {anlass}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="kf-termin" className="label text-taupe">
            Wunschtermin (optional)
          </label>
          <input
            id="kf-termin"
            name="wunschtermin"
            type="date"
            className={`${inputClasses} mt-2`}
          />
        </div>
      </div>

      <div>
        <label htmlFor="kf-nachricht" className="label text-taupe">
          Ihre Nachricht *
        </label>
        <textarea
          id="kf-nachricht"
          name="nachricht"
          rows={6}
          required
          placeholder="Was dürfen wir für Sie backen? Anlass, Personenzahl, Wünsche …"
          className={`${inputClasses} mt-2`}
          aria-invalid={errors.nachricht ? "true" : undefined}
          aria-describedby={errors.nachricht ? "kf-nachricht-error" : undefined}
        />
        {errors.nachricht && (
          <p id="kf-nachricht-error" className="mt-2 text-caption font-medium text-framboise">
            {errors.nachricht}
          </p>
        )}
      </div>

      <div>
        <label className="flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            name="datenschutz"
            required
            className="mt-1 size-4 shrink-0 accent-framboise"
            aria-invalid={errors.datenschutz ? "true" : undefined}
            aria-describedby={errors.datenschutz ? "kf-datenschutz-error" : undefined}
          />
          <span className="text-caption text-taupe">
            Ich willige ein, dass meine Angaben zur Bearbeitung der Anfrage verarbeitet
            werden. Details in der{" "}
            <Link href="/datenschutz" className="text-link">
              Datenschutzerklärung
            </Link>
            . *
          </span>
        </label>
        {errors.datenschutz && (
          <p id="kf-datenschutz-error" className="mt-2 text-caption font-medium text-framboise">
            {errors.datenschutz}
          </p>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-5">
        <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
          {status === "sending" ? "Wird gesendet …" : "Anfrage senden"}
        </button>
        <p className="text-caption text-taupe">* Pflichtfelder</p>
      </div>

      {status === "error" && (
        <p role="alert" className="border border-framboise/40 bg-framboise/5 p-4 text-caption text-framboise">
          Das hat gerade nicht geklappt. Versuchen Sie es gleich noch einmal, oder
          schreiben Sie uns direkt an{" "}
          <a href={`mailto:${site.email}`} className="underline">
            {site.email}
          </a>
          .
        </p>
      )}
    </form>
  );
}
