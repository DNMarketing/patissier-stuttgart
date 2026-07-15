import { OG_CONTENT_TYPE, OG_SIZE, ogImage } from "@/lib/og";

export const dynamic = "force-static";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Törtchen & Kuchen aus Stuttgart-West | Pâtissier Stuttgart";

export default function Image() {
  return ogImage("Törtchen & Kuchen aus Stuttgart-West");
}
