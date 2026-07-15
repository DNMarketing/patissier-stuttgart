import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { CtaSection } from "@/components/sections";
import { formatDate, getAllPosts, getPost, getRelatedPosts } from "@/lib/blog";
import { articleJsonLd, pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    ...pageMetadata({
      title: post.title,
      description: post.description,
      path: `/blog/${slug}`,
    }),
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `/blog/${slug}`,
      type: "article",
      publishedTime: post.date,
      locale: "de_DE",
      images: [{ url: post.cover, alt: post.coverAlt, width: 1200, height: 630 }],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const { content } = await compileMDX({
    source: post.content,
    options: { mdxOptions: { remarkPlugins: [remarkGfm] } },
  });
  const related = getRelatedPosts(post);

  return (
    <>
      <JsonLd data={articleJsonLd(post)} />
      <article className="container-page pt-10 pb-20 md:pt-14 md:pb-24">
        <Breadcrumbs
          items={[
            { name: "Journal", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]}
        />
        <header className="mx-auto mt-12 max-w-3xl">
          <p className="label flex gap-3 text-taupe">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span aria-hidden>·</span>
            <span>{post.readingMinutes} Min. Lesezeit</span>
          </p>
          <h1 className="mt-4 text-h2">{post.title}</h1>
          <p className="mt-5 text-lead text-taupe">{post.description}</p>
        </header>
        <div className="card-soft relative mx-auto mt-10 aspect-[2/1] max-w-4xl rounded-3xl">
          <Image
            src={post.cover}
            alt={post.coverAlt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 896px"
            className="object-cover"
          />
        </div>
        <div className="article-prose mx-auto mt-4 md:mt-8">{content}</div>

        {related.length > 0 && (
          <aside aria-label="Ähnliche Beiträge" className="hairline-t mx-auto mt-16 max-w-3xl pt-10">
            <h2 className="label text-taupe">Ähnliche Beiträge</h2>
            <ul className="mt-6 flex flex-col gap-5">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link href={`/blog/${r.slug}`} className="group flex items-baseline justify-between gap-6">
                    <span className="font-display text-h3 group-hover:text-framboise">
                      {r.title}
                    </span>
                    <span aria-hidden className="text-taupe transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        )}
      </article>

      <CtaSection
        title="Genug gelesen, Zeit zu probieren."
        text="Fragen Sie Ihre Torte, Macarons oder Ihr Catering unverbindlich an. Oder besuchen Sie uns mittwochs bis sonntags in der Kornbergstraße 17."
        ctaLabel="Anfrage senden"
        related={["hochzeitstorten", "macarons", "catering"]}
      />
    </>
  );
}
