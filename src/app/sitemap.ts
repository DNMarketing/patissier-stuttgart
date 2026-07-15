import type { MetadataRoute } from "next";

export const dynamic = "force-static";
import { getAllPosts } from "@/lib/blog";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { path: "/", priority: 1.0 },
    { path: "/macarons", priority: 0.9 },
    { path: "/toertchen-und-kuchen", priority: 0.9 },
    { path: "/hochzeitstorten", priority: 0.9 },
    { path: "/geburtstagstorten", priority: 0.9 },
    { path: "/catering", priority: 0.9 },
    { path: "/halal-bio-vegan", priority: 0.8 },
    { path: "/ueber-uns", priority: 0.6 },
    { path: "/faq", priority: 0.7 },
    { path: "/blog", priority: 0.7 },
    { path: "/kontakt", priority: 0.8 },
    { path: "/impressum", priority: 0.1 },
    { path: "/datenschutz", priority: 0.1 },
  ].map(({ path, priority }) => ({
    url: `${site.url}${path === "/" ? "" : path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority,
  }));

  const blogRoutes: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${site.url}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogRoutes];
}
