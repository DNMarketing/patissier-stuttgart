import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Reveal } from "@/components/Reveal";
import { formatDate, getAllPosts } from "@/lib/blog";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Journal: Wissen rund um Patisserie, Torten & Events",
  description:
    "Das Pâtissier-Journal: Hochzeitstorten planen, Sweet Tables kalkulieren, echte Macarons erkennen: Fachwissen aus der Backstube in Stuttgart-West. Jetzt lesen!",
  path: "/blog",
});

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <>
      <section className="container-page pt-10 pb-14 md:pt-14">
        <Breadcrumbs items={[{ name: "Journal", path: "/blog" }]} />
        <div className="mt-10 max-w-3xl">
          <h1 className="text-h2">Das Journal: Wissen aus der Backstube.</h1>
          <p className="mt-6 text-lead text-taupe">
            Wie man eine Hochzeitstorte plant, einen Sweet Table kalkuliert und einen
            echten Macaron erkennt: Notizen aus unserem Handwerk, ehrlich, konkret,
            ohne Floskeln.
          </p>
        </div>
      </section>

      <section aria-label="Alle Beiträge" className="container-page pb-20 md:pb-28">
        <div className="hairline-t grid gap-x-8 gap-y-14 pt-12 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal key={post.slug} index={i % 3}>
              <article>
                <Link href={`/blog/${post.slug}`} className="group block">
                  <div className="card-soft img-hover relative aspect-[3/2]">
                    <Image
                      src={post.cover}
                      alt={post.coverAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <p className="label mt-5 flex gap-3 text-taupe">
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                    <span aria-hidden>·</span>
                    <span>{post.readingMinutes} Min. Lesezeit</span>
                  </p>
                  <h2 className="mt-3 font-display text-h3 group-hover:text-framboise">
                    {post.title}
                  </h2>
                  <p className="mt-3 line-clamp-3 text-taupe">{post.description}</p>
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
