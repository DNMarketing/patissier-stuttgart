import fs from "node:fs";
import path from "node:path";
import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

/**
 * On-Brand-OG-Template: Logo + Seitentitel auf Porzellan, Framboise-Linie,
 * Preiskärtchen-Meta-Zeile. Wird zur Build-Zeit statisch generiert.
 */
export function ogImage(title: string, eyebrow = "Französische Pâtisserie · Stuttgart-West") {
  const root = process.cwd();
  const fraunces = fs.readFileSync(path.join(root, "src/fonts/og/Fraunces-SemiBold.ttf"));
  const hanken = fs.readFileSync(path.join(root, "src/fonts/og/HankenGrotesk-Medium.ttf"));
  const logo = fs.readFileSync(path.join(root, "public/images/brand/logo-patissier-schwarz.png"));

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f7f5f0",
          padding: "72px 80px",
          fontFamily: "Hanken",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`data:image/png;base64,${logo.toString("base64")}`}
          alt=""
          width={210}
          height={140}
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 22,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#6e5f55",
            }}
          >
            {eyebrow}
          </div>
          <div
            style={{
              marginTop: 24,
              fontFamily: "Fraunces",
              fontSize: title.length > 42 ? 56 : 68,
              lineHeight: 1.1,
              color: "#2a1e18",
              maxWidth: 1000,
            }}
          >
            {title}
          </div>
          <div
            style={{
              marginTop: 40,
              display: "flex",
              alignItems: "center",
              gap: 20,
            }}
          >
            <div style={{ width: 64, height: 3, background: "#9e2b43" }} />
            <div style={{ fontSize: 22, color: "#6e5f55" }}>
              Kornbergstraße 17 · 70176 Stuttgart · patissier-stuttgart.de
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...OG_SIZE,
      fonts: [
        { name: "Fraunces", data: fraunces, weight: 600, style: "normal" },
        { name: "Hanken", data: hanken, weight: 500, style: "normal" },
      ],
    },
  );
}
