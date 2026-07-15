/**
 * FAQ, ehrliche, konkrete Antworten. Quelle: Live-Site + Briefing.
 * Wo Betriebsdetails fehlen (Vorlaufzeiten, Preise, Liefergebiet), ist neutral
 * formuliert — Details siehe OFFENE-PUNKTE.md [MIT KUNDE KLÄREN].
 */
export type Faq = {
  question: string;
  answer: string;
  /** Für FAQ-Auszüge auf den Leistungsseiten */
  topics: string[];
  link?: { href: string; label: string };
};

export const faqs: Faq[] = [
  {
    question: "Sind wirklich alle Produkte halal?",
    answer:
      "Ja, ohne Ausnahme. Wir verzichten bewusst auf Alkohol in allen Kreationen und verwenden ausschließlich halal-zertifizierte Rinder-Gelatine, niemals Schweine-Gelatine. So sind unsere Macarons, Törtchen und Torten zu 100 % halal und für viele Menschen bedenkenlos genießbar.",
    topics: ["halal", "macarons", "hochzeitstorten", "geburtstagstorten"],
    link: { href: "/halal-bio-vegan", label: "Mehr zu Halal, Bio & Vegan" },
  },
  {
    question: "Gibt es vegane oder glutenfreie Optionen?",
    answer:
      "Viele unserer Törtchen, Kuchen und Macarons sind vegan oder glutenfreundlich. Da in unserer Backstube auch mit Weizenmehl, Milch und Eiern gearbeitet wird, sprechen Sie Unverträglichkeiten am besten direkt bei der Anfrage an, wir beraten Sie ehrlich, was für Ihren Anlass möglich ist.",
    topics: ["halal", "toertchen", "macarons"],
    link: { href: "/halal-bio-vegan", label: "Mehr zu Halal, Bio & Vegan" },
  },
  {
    question: "Wie weit im Voraus muss ich eine Hochzeitstorte bestellen?",
    answer:
      "So früh wie möglich, besonders in der Hochzeitssaison von Mai bis September sind Wochenend-Termine schnell vergeben. Am besten fragen Sie an, sobald Ihr Datum feststeht; alles Weitere klären wir dann gemeinsam im Beratungsgespräch.",
    topics: ["hochzeitstorten", "catering"],
    link: { href: "/hochzeitstorten", label: "Zu den Hochzeitstorten" },
  },
  {
    question: "Gibt es Verkostungen oder Tastings?",
    answer:
      "Größere Aufträge wie Hochzeitstorten und Catering besprechen wir am liebsten persönlich, ganz entspannt bei einer Tasse Kaffee und einer süßen Kostprobe in unserer Boutique. Vereinbaren Sie dafür einfach einen Termin.",
    topics: ["hochzeitstorten", "catering"],
    link: { href: "/kontakt", label: "Termin vereinbaren" },
  },
  {
    question: "Liefern Sie, oder hole ich meine Bestellung ab?",
    answer:
      "Beides ist möglich: Sie holen Ihre Bestellung in der Kornbergstraße 17 in Stuttgart-West ab, oder wir liefern, bei Hochzeitstorten und Catering übernehmen wir auf Wunsch Anlieferung und Aufbau vor Ort. Nennen Sie uns in Ihrer Anfrage einfach den Veranstaltungsort, dann erhalten Sie ein konkretes Angebot.",
    topics: ["catering", "hochzeitstorten", "geburtstagstorten"],
  },
  {
    question: "Kann ich Macarons personalisieren lassen?",
    answer:
      "Ja, das ist eine unserer Spezialitäten. Macarons gibt es bei uns auch personalisiert oder mit edler Gravur: mit Namen, Initialen, Datum oder Logo. Perfekt als Gastgeschenk zur Hochzeit, für Events oder als besondere Botschaft in zarter Form.",
    topics: ["macarons", "catering"],
    link: { href: "/macarons", label: "Zu den Macarons" },
  },
  {
    question: "Was kostet eine individuelle Torte ungefähr?",
    answer:
      "Das hängt ehrlicherweise von Größe, Aufwand und Dekor ab, eine schlichte einstöckige Torte ist etwas anderes als eine mehrstöckige Hochzeitstorte mit Handarbeit im Detail. Deshalb nennen wir keine Pauschalpreise, sondern erstellen Ihnen nach Ihrer Anfrage ein persönliches Angebot. Das ist unverbindlich und kostet nichts.",
    topics: ["hochzeitstorten", "geburtstagstorten"],
    link: { href: "/kontakt", label: "Torte anfragen" },
  },
  {
    question: "Bieten Sie Catering inklusive Aufbau an?",
    answer:
      "Ja. Wir liefern nicht nur Petit Fours, Torten und Sweet Tables, sondern bringen auch das passende Anrichtegeschirr mit und inszenieren das Buffet stilvoll vor Ort. Sie müssen sich um nichts kümmern, außer ums Genießen.",
    topics: ["catering"],
    link: { href: "/catering", label: "Zum Catering" },
  },
  {
    question: "Wann haben Sie geöffnet?",
    answer:
      "Mittwoch und Donnerstag von 12 bis 17 Uhr, Freitag und Samstag von 10 bis 17 Uhr, und, ungewöhnlich für Stuttgart: auch sonntags von 12 bis 17 Uhr. Montag und Dienstag sind unsere Ruhetage.",
    topics: ["besuch"],
    link: { href: "/kontakt", label: "Anfahrt & Öffnungszeiten" },
  },
  {
    question: "Verwenden Sie Bio-Zutaten?",
    answer:
      "Ja. Unsere Kreationen entstehen aus besten Bio-Zutaten und ganz ohne künstliche Zusätze. Echte Süße braucht aus unserer Sicht keine Kompromisse, nur Hingabe, hochwertige Rohstoffe und Zeit.",
    topics: ["halal", "toertchen"],
    link: { href: "/halal-bio-vegan", label: "Unsere Grundsätze" },
  },
  {
    question: "Kann ich auch spontan vorbeikommen?",
    answer:
      "Sehr gern! In unserer Boutique in der Kornbergstraße 17 finden Sie Macarons, Törtchen und Kuchen aus der aktuellen Vitrine, mittwochs bis sonntags. Für individuelle Torten und größere Mengen empfehlen wir eine Anfrage im Voraus.",
    topics: ["besuch", "macarons", "toertchen"],
  },
  {
    question: "Gestalten Sie auch Torten nach eigenen Ideen oder Fotos?",
    answer:
      "Ja, bringen Sie Ihre Ideen, Farbwünsche oder Inspirationsbilder gern mit in die Anfrage. Wir gestalten jede Torte individuell und beraten Sie, was sich handwerklich gut und geschmacklich sinnvoll umsetzen lässt.",
    topics: ["hochzeitstorten", "geburtstagstorten"],
  },
];

export function faqsByTopic(topic: string, limit = 3): Faq[] {
  return faqs.filter((f) => f.topics.includes(topic)).slice(0, limit);
}
