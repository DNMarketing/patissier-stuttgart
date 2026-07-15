/**
 * Serverseitige Validierung der Formular-Einsendungen (Briefing §8).
 * Netlify ruft diese Funktion automatisch bei jeder Netlify-Forms-Submission auf
 * (Event-Funktion "submission-created"). Ungültige oder spam-verdächtige
 * Einsendungen werden geloggt und markiert; Honeypot fängt Bots bereits vorher ab.
 */
export default async (request: Request) => {
  const body = await request.json();
  const data = body?.payload?.data ?? {};

  const problems: string[] = [];

  const name = String(data.name ?? "").trim();
  const email = String(data.email ?? "").trim();
  const nachricht = String(data.nachricht ?? "").trim();

  if (name.length < 2 || name.length > 200) problems.push("name");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) problems.push("email");
  if (nachricht.length < 5 || nachricht.length > 10000) problems.push("nachricht");
  if (!data.datenschutz) problems.push("datenschutz-einwilligung fehlt");

  // Simple Spam-Heuristik zusätzlich zum Honeypot
  const linkCount = (nachricht.match(/https?:\/\//g) ?? []).length;
  if (linkCount > 3) problems.push("zu viele links");

  if (problems.length > 0) {
    console.warn("Formular-Einsendung mit Problemen:", problems.join(", "), {
      id: body?.payload?.id,
    });
  } else {
    console.log("Formular-Einsendung valide:", body?.payload?.id);
  }

  return new Response("ok");
};
