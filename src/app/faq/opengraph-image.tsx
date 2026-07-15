import { OG_CONTENT_TYPE, OG_SIZE, ogImage } from "@/lib/og";

export const dynamic = "force-static";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Häufige Fragen, ehrlich beantwortet | Pâtissier Stuttgart";

export default function Image() {
  return ogImage("Häufige Fragen, ehrlich beantwortet");
}
