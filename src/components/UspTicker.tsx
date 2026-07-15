const WORTE = [
  "Handgemacht in Stuttgart-West",
  "100 % halal",
  "Bio-Zutaten",
  "Sonntags geöffnet",
  "Französisches Feinbäcker-Handwerk",
  "Ohne künstliche Zusätze",
  "Vegan möglich",
  "Macarons mit Gravur",
];

/**
 * Das eine durchgängige Bewegungs-Element der Seite: ein langsames Laufband
 * mit den Grundsätzen des Hauses, über dem Footer auf jeder Seite.
 * Bei prefers-reduced-motion steht es still (CSS).
 */
export function UspTicker() {
  const row = (ariaHidden: boolean) => (
    <span aria-hidden={ariaHidden || undefined} className="inline-flex shrink-0">
      {WORTE.map((wort) => (
        <span key={wort} className="inline-flex items-baseline">
          <span className="font-display text-h3 font-medium whitespace-nowrap px-6">
            {wort}
          </span>
          <span aria-hidden className="text-framboise">
            ✱
          </span>
        </span>
      ))}
    </span>
  );

  return (
    <aside aria-label="Unsere Grundsätze im Überblick" className="hairline-t hairline-b overflow-hidden bg-porzellan py-5">
      <div className="ticker">
        <div className="ticker-track">
          {row(false)}
          {row(true)}
        </div>
      </div>
    </aside>
  );
}
