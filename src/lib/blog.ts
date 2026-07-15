import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO, z. B. 2026-07-15
  cover: string;
  coverAlt: string;
  keywords: string[];
  tags: string[];
  readingMinutes: number;
};

export type Post = PostMeta & { content: string };

function parseFile(file: string): Post {
  const slug = file.replace(/\.mdx$/, "");
  const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf-8");
  const { data, content } = matter(raw);
  const words = content.split(/\s+/).filter(Boolean).length;
  return {
    slug,
    title: data.title,
    description: data.description,
    date: data.date,
    cover: data.cover,
    coverAlt: data.coverAlt ?? "",
    keywords: data.keywords ?? [],
    tags: data.tags ?? [],
    readingMinutes: Math.max(1, Math.round(words / 220)),
    content,
  };
}

export function getAllPosts(): Post[] {
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map(parseFile)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string): Post | undefined {
  if (!fs.existsSync(path.join(BLOG_DIR, `${slug}.mdx`))) return undefined;
  return parseFile(`${slug}.mdx`);
}

/** „Ähnliche Beiträge": gleiche Tags zuerst, dann neueste. */
export function getRelatedPosts(current: Post, limit = 2): Post[] {
  return getAllPosts()
    .filter((p) => p.slug !== current.slug)
    .sort((a, b) => {
      const overlapA = a.tags.filter((t) => current.tags.includes(t)).length;
      const overlapB = b.tags.filter((t) => current.tags.includes(t)).length;
      return overlapB - overlapA;
    })
    .slice(0, limit);
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("de-DE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
