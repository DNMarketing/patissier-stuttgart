import { OG_CONTENT_TYPE, OG_SIZE, ogImage } from "@/lib/og";

export const dynamic = "force-static";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Torte anfragen – wir freuen uns | Pâtissier Stuttgart";

export default function Image() {
  return ogImage("Torte anfragen – wir freuen uns");
}
