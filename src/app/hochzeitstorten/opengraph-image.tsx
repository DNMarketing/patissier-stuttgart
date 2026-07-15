import { OG_CONTENT_TYPE, OG_SIZE, ogImage } from "@/lib/og";

export const dynamic = "force-static";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Hochzeitstorten, so individuell wie Ihr Fest | Pâtissier Stuttgart";

export default function Image() {
  return ogImage("Hochzeitstorten, so individuell wie Ihr Fest");
}
