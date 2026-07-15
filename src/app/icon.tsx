import { ImageResponse } from "next/og";
import fs from "node:fs";
import path from "node:path";

export const dynamic = "force-static";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

/** Favicon: Bodoni-„P“ mit Framboise-Zirkumflex, das „â“ aus Pâtissier als Monogramm. */
export default function Icon() {
  const fraunces = fs.readFileSync(
    path.join(process.cwd(), "src/fonts/og/Fraunces-SemiBold.ttf"),
  );
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          background: "#f7f5f0",
          fontFamily: "Fraunces",
        }}
      >
        <div style={{ fontSize: 22, color: "#9e2b43", marginTop: -8, height: 20 }}>ˆ</div>
        <div style={{ fontSize: 46, color: "#2a1e18", marginTop: -6 }}>P</div>
      </div>
    ),
    { ...size, fonts: [{ name: "Fraunces", data: fraunces, weight: 600, style: "normal" }] },
  );
}
