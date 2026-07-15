import { OG_CONTENT_TYPE, OG_SIZE, ogImage } from "@/lib/og";

export const dynamic = "force-static";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Dessert-Catering & Sweet Tables | Pâtissier Stuttgart";

export default function Image() {
  return ogImage("Dessert-Catering & Sweet Tables");
}
