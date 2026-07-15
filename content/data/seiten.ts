/**
 * Seiten-individuelle Sektions-Inhalte (Redesign-Runde nach Kundenfeedback):
 * jede Unterseite bekommt eigene Kompositionen statt Schema F.
 * Vom Kunden ohne Code-Wissen editierbar.
 */
export type SektionsInhalt = {
  label: string;
  title: string;
  intro?: string;
  items: { title: string; text: string; tag?: string }[];
};

export const home: Record<"manifest" | "ticker", SektionsInhalt> = {
  manifest: {
    label: "Das Haus",
    title: "Von Hand, mit Zeit, ohne Kompromisse",
    items: [
      { title: "Wir kürzen nichts ab.", text: "Nicht bei der Zeit, nicht bei den Zutaten, nicht beim Handwerk: Jedes Macaron und jedes Törtchen entsteht in unserer Boutique in Stuttgart-West von Hand, nach französischem Feinbäcker-Handwerk. Wir arbeiten mit Bio-Zutaten, ganz ohne künstliche Zusätze und zu 100 % halal. Denn was auf Ihrer Zunge zergehen soll, verdient vorher unsere volle Geduld." },
    ],
  },
  ticker: {
    label: "Ticker",
    title: "Ticker",
    items: [
      { title: "Handgemacht", text: "-" },
      { title: "Französisches Handwerk", text: "-" },
      { title: "Bio-Zutaten", text: "-" },
      { title: "100 % halal", text: "-" },
      { title: "Ohne künstliche Zusätze", text: "-" },
      { title: "Vieles vegan", text: "-" },
      { title: "Macarons mit Gravur", text: "-" },
      { title: "Sonntags geöffnet", text: "-" },
    ],
  },
};

export const geburtstagstorten: Record<"fuer_wen" | "anlaesse", SektionsInhalt> = {
  fuer_wen: {
    label: "Für wen backen wir",
    title: "Jede Torte so persönlich wie das Geburtstagskind",
    intro: "Ob vier Kerzen oder vierzig: Von der Stange backen wir nicht. Wir backen für den Menschen, der da feiert.",
    items: [
      { title: "Für die Kleinen", text: "Motivtorten in Lieblingsfarben, mit Wunschmotiv und gern auch dem Namen des Geburtstagskindes: Hauptsache, die Augen werden groß. Ohne Alkohol und ohne Schweine-Gelatine sowieso, das müssen Sie bei uns gar nicht erst erfragen. Die Eltern lehnen sich entspannt zurück, das Staunen übernehmen wir." },
      { title: "Für die Großen", text: "Elegante Torten aus Creme, Frucht und Biskuit, fein abgestimmt statt zuckersüß übertüncht. Wer erwachsen feiert, bekommt Patisserie statt Zuckerschock: Aromen, die man beim Namen nennen kann. Ihre Gäste werden nach dem Rezept fragen; lächeln Sie einfach geheimnisvoll." },
    ],
  },
  anlaesse: {
    label: "Mehr als Geburtstag",
    title: "Gute Anlässe haben viele Namen",
    intro: "Der Geburtstag ist nur der bekannteste Vorwand. Gefeiert werden darf ruhig öfter.",
    items: [
      { title: "Der runde Geburtstag", text: "Wenn die Kerzenzahl auf null endet, darf die Torte ruhig ein bisschen angeben." },
      { title: "Jubiläum und Jahrestag", text: "Zehn Jahre Firma oder zwanzig Jahre Ehe: Manche Zahlen verdienen Biskuit mit Verbeugung." },
      { title: "Taufe und Familienfest", text: "Wenn drei Generationen an einem Tisch sitzen, sorgt die Mitte der Tafel kurz für andächtige Stille." },
      { title: "Einfach so", text: "Der schönste Anlass ist manchmal gar keiner; ein Mittwoch reicht uns völlig." },
    ],
  },
};

export const toertchen: Record<"vitrine_heute" | "bestellen", SektionsInhalt> = {
  vitrine_heute: {
    label: "Aus der Vitrine",
    title: "Die Vitrine wechselt, das Handwerk bleibt",
    intro: "Was hinter dem Glas steht, wechselt mit der Saison. Kommen Sie am besten neugierig, nicht mit fester Liste.",
    items: [
      { title: "Tartelettes", text: "Ein Mürbeteigboden, der hörbar bricht, darauf Frucht auf dem Höhepunkt ihrer Saison. Dünn ausgerollt, präzise gebacken, französisch gedacht.", tag: "knusprig" },
      { title: "Cremetörtchen", text: "Creme und Biskuit in feinen Schichten, so zart, dass die Gabel kaum Widerstand meldet. Kühl aus der Vitrine und verschwunden, bevor der Kaffee kalt wird.", tag: "cremig" },
      { title: "Klassiker zum Kaffee", text: "Manche Stücke müssen nichts beweisen, sie gehören einfach neben die Tasse. Vertraut im Geschmack, handgemacht bis ins Detail.", tag: "vertraut" },
      { title: "Saisonales", text: "Was der Markt gerade hergibt, kommt in die Backstube, solange es dauert. Nächste Woche kann das schon Geschichte sein, fragen Sie also lieber heute.", tag: "jetzt gerade" },
    ],
  },
  bestellen: {
    label: "Auf Bestellung",
    title: "Ein ganzer Kuchen sagt mehr als ein Stück",
    intro: "Ganze Kuchen und Torten backen wir auf Bestellung, abgestimmt auf Ihren Anlass. Größere Vorhaben besprechen wir persönlich in der Boutique; der Kaffee dampft, die Kostprobe steht bereit.",
    items: [
      { title: "Für den Sonntagskaffee", text: "Sonntags haben wir geöffnet, Ihr Kuchen wartet also frisch auf den Nachmittag. Creme, Frucht oder Biskuit: Sie entscheiden, wir backen." },
      { title: "Für kleine Feste", text: "Geburtstag, Jubiläum oder einfach ein guter Grund: Wir gestalten Ihre Torte individuell für den Anlass. Auf Wunsch vegan oder glutenfreundlich, immer ohne Alkohol und 100 % halal." },
      { title: "Das Mitbringsel, das Eindruck macht", text: "Wer mit einem handgemachten Kuchen klingelt, steht auf der nächsten Gästeliste ganz oben. Rechnen Sie fest mit Folgeeinladungen." },
    ],
  },
};

export const catering: Record<"formate" | "sorgenfrei", SektionsInhalt> = {
  formate: {
    label: "Die Formate",
    title: "Für jede Feier die passende süße Form",
    intro: "Ob großes Fest oder feiner Anlass im kleinen Kreis: Wir richten unser Handwerk nach Ihrer Veranstaltung aus, nicht umgekehrt.",
    items: [
      { title: "Sweet Table zur Hochzeit", text: "Ein komponiertes Dessertbuffet in der Farbwelt Ihrer Hochzeit: Macarons, Törtchen und Petit Fours, abgestimmt bis in den letzten Farbton. Ihre Gäste zücken erst die Handys, dann die Dessertgabeln." },
      { title: "Kaffeetafel & Petit Fours", text: "Petit Fours, die in zwei Bissen Platz finden und trotzdem lange nachklingen. Gemacht für Nachmittage, an denen eine Hand die Kaffeetasse hält und die andere immer wieder zugreift." },
      { title: "Tortenbuffet", text: "Eine individuell gestaltete Torte als Mittelpunkt, umgeben von Törtchen mit Creme, Frucht und Biskuit. So bekommt der Anschnitt seine große Bühne, und danach hat jeder Gast die Wahl." },
      { title: "Firmenevent", text: "Ihre Gäste greifen zu Macarons mit Ihrem Logo, das Buffet leuchtet in Ihren Markenfarben. Corporate Design zum Anbeißen, das länger im Gedächtnis bleibt als jede Broschüre." },
    ],
  },
  sorgenfrei: {
    label: "Ohne Ihr Zutun",
    title: "Sie feiern, wir kümmern uns um den Rest",
    intro: "An Ihrem Fest haben Sie genau eine Aufgabe: anwesend sein. Alles Süße liegt bei uns; nur für akute Patissier-Sucht Ihrer Gäste übernehmen wir keine Verantwortung.",
    items: [
      { title: "Anlieferung und Aufbau vor Ort", text: "Wir bringen alles zu Ihnen und bauen auf, bis jedes Törtchen an seinem Platz steht. Wenn Ihre Gäste eintreffen, ist von uns nur noch das Ergebnis zu sehen." },
      { title: "Geschirr und Inszenierung inklusive", text: "Etageren, Platten, die ganze Bühne für Ihr Buffet: Das Anrichtegeschirr bringen wir mit und inszenieren alles stilvoll vor Ort. Sie müssen nichts leihen, nichts spülen, nichts zurückgeben." },
      { title: "Unverträglichkeiten mitgedacht", text: "Halal ist bei uns keine Option, sondern Standard: ohne Alkohol, ohne künstliche Zusätze, mit Bio-Zutaten. Vegane und glutenfreundliche Kreationen planen wir auf Wunsch gleich mit, damit wirklich alle zugreifen können." },
    ],
  },
};

export const hochzeitstorten: Record<"stile" | "planung", SektionsInhalt> = {
  stile: {
    label: "Die Richtung",
    title: "So findet Ihre Hochzeitstorte ihren Stil",
    intro: "Zwei Torten sind bei uns nie gleich: Jede Hochzeitstorte entsteht als Unikat, gestaltet für Ihr Fest. Vier Richtungen geben Orientierung, Ihre eigene finden wir im Gespräch.",
    items: [
      { title: "Klassisch in Weiß mit frischen Blumen", text: "Zarte Cremetöne, seidig glatte Oberflächen und frische Blüten, passend zu Ihren Hochzeitsblumen. Auf jedem Foto ein ruhiger Mittelpunkt, auch wenn das Album längst Patina hat." },
      { title: "Puristisch modern", text: "Klare Kanten, ruhige Flächen, höchstens ein einzelner Akzent. Diese Torten wirken durch das, was sie weglassen." },
      { title: "Farbig nach Ihrem Hochzeitskonzept", text: "Wir greifen Ihre Hochzeitsfarben auf und übersetzen sie in Creme, Glasur und Dekor. So fügt sich die Torte in Ihr Fest, als wäre sie von Anfang an Teil des Konzepts gewesen." },
      { title: "Verspielt bis ins Detail", text: "Handgeformte Elemente, feine Ornamente, kleine Überraschungen auf den zweiten Blick. Für Paare, deren Gäste gern näher treten und staunen." },
    ],
  },
  planung: {
    label: "Die Planung",
    title: "Unser gemeinsamer Weg zu Ihrer Torte",
    intro: "Eine Hochzeitstorte plant man nicht nebenbei. Fünf klare Etappen führen Sie entspannt vom ersten Gedanken bis zum großen Tag.",
    items: [
      { title: "Ihre Anfrage", text: "Verraten Sie uns Datum, Ort und Gästezahl Ihrer Feier. Mehr brauchen wir für den Anfang nicht.", tag: "Schritt 1" },
      { title: "Beratung und Kostprobe", text: "Wir treffen uns in unserer Boutique in Stuttgart-West, bei einer Tasse Kaffee und einer süßen Kostprobe. Sie erzählen von Ihrem Tag, wir hören zu, und Ihre Torte nimmt erste Gestalt an.", tag: "Schritt 2" },
      { title: "Feinschliff im Design", text: "Nun legen wir Farben, Blüten und Details fest, bis das Gesamtbild stimmt. Bringen Sie gern Fotos von Strauß und Tischschmuck mit; je mehr wir sehen, desto genauer treffen wir Ihren Ton.", tag: "Schritt 3" },
      { title: "Handarbeit in der Backstube", text: "Dann wird es konzentriert bei uns: Biskuit, Creme und Dekor entstehen von Hand, und jede Etage bekommt so viel Zeit, wie sie braucht.", tag: "Schritt 4" },
      { title: "Der große Tag", text: "Am Hochzeitstag bringen wir Ihre Torte auf Wunsch sicher an ihren Platz und bauen sie dort auf. Sie denken nur noch an den ersten Anschnitt.", tag: "Schritt 5" },
    ],
  },
};

export const macarons: Record<"sensorik" | "gravur", SektionsInhalt> = {
  sensorik: {
    label: "Die Anatomie",
    title: "Ein echtes Macaron erleben Sie in drei Akten",
    items: [
      { title: "Der zarte Knack", text: "Die Schale ist hauchdünn und glatt wie Porzellan. Unter leichtem Druck gibt sie mit einem feinen Knistern nach, kaum hörbar, aber deutlich spürbar. Dieser kurze Widerstand ist das erste Versprechen echten Handwerks." },
      { title: "Das Moelleux", text: "Direkt unter der Schale beginnt der weiche Kern, den französische Feinbäcker moelleux nennen: zart, leicht feucht, mit sanftem Biss. Er verbindet Knusper und Cremigkeit zu einem einzigen fließenden Moment." },
      { title: "Die Füllung", text: "Im Herzen sitzt der Geschmack. Die Füllung schmilzt bei Zungentemperatur und entfaltet dort ihr volles Aroma, konzentriert auf einen einzigen Bissen. Sie spielt die Hauptrolle, alles davor war Ouvertüre." },
    ],
  },
  gravur: {
    label: "Die Gravur",
    title: "Manche Botschaften schreibt man auf ein Macaron",
    intro: "Namen, Initialen, ein Datum oder Ihr Logo: Wir gravieren Ihre Worte auf die Schale, von Hand und Stück für Stück in unserer Boutique im Stuttgarter Westen.",
    items: [
      { title: "Hochzeiten und Gastgeschenke", text: "Zwei Initialen und Ihr Datum, graviert auf jedes einzelne Macaron am Gedeck Ihrer Gäste. Erfahrungsgemäß überlebt kaum eines den Weg in die Handtasche." },
      { title: "Für Unternehmen", text: "Ihr Logo präzise graviert auf der Schale. Ob Kundengeschenk oder Empfang: Selten wurde eine Visitenkarte so gern gegessen." },
      { title: "Persönliche Anlässe", text: "Ein „Danke“, ein Name, eine Zahl, die nur Sie beide verstehen. Manche Worte wirken am stärksten, wenn man sie nicht ausspricht, sondern auf einem Teller überreicht." },
    ],
  },
};
