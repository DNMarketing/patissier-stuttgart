import { OG_CONTENT_TYPE, OG_SIZE, ogImage } from "@/lib/og";

export const dynamic = "force-static";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Französische Pâtisserie in Stuttgart | Pâtissier Stuttgart";

export default function Image() {
  return ogImage("Französische Pâtisserie in Stuttgart");
}
