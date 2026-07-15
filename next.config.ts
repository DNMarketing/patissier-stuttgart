import type { NextConfig } from "next";

/**
 * PREVIEW_EXPORT=1 → statischer Export für die GitHub-Pages-Kundenvorschau
 * (dnmarketing.github.io/patissier-stuttgart): basePath, unoptimierte Bilder,
 * keine Redirects. Ohne die Variable: normale Netlify-Produktionskonfiguration.
 */
const isPreviewExport = process.env.PREVIEW_EXPORT === "1";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  ...(isPreviewExport
    ? {
        output: "export" as const,
        basePath: "/patissier-stuttgart",
        trailingSlash: true,
        images: {
          loader: "custom" as const,
          loaderFile: "./src/lib/preview-image-loader.ts",
        },
      }
    : {
        images: {
          formats: ["image/avif", "image/webp"] as ("image/avif" | "image/webp")[],
          deviceSizes: [360, 480, 640, 828, 1080, 1440, 1920],
        },
        // Alte Squarespace-Pfade -> neue Architektur (301)
        async redirects() {
          return [
            { source: "/about", destination: "/ueber-uns", permanent: true },
            { source: "/contact", destination: "/kontakt", permanent: true },
            { source: "/impressum-1-1", destination: "/impressum", permanent: true },
          ];
        },
      }),
};

export default nextConfig;
