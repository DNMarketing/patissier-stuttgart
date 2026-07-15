import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./Reveal";
import { formatDate, getAllPosts } from "@/lib/blog";

/** Die drei neuesten Journal-Beiträge — Content-Tiefe direkt auf der Startseite. */
export function JournalTeaser() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <section aria-labelledby="journal-heading" className="hairline-t py-20 md:py-24">
      <div className="container-page">
        <div className="flex items-end justify-between gap-6">
          <Reveal>
            <p className="label text-taupe">Das Journal</p>
            <h2 id="journal-heading" className="mt-3 text-h2">
              Wissen aus der Backstube
            </h2>
          </Reveal>
          <Link href="/blog" className="text-link hidden shrink-0 sm:inline">
            Alle Beiträge
          </Link>
        </div>
        <div className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal key={post.slug} index={i}>
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
                    <span>{post.readingMinutes} Min.</span>
                  </p>
                  <h3 className="mt-3 font-display text-h3 group-hover:text-framboise">
                    {post.title}
                  </h3>
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="mt-10 sm:hidden">
          <Link href="/blog" className="text-link">
            Alle Beiträge
          </Link>
        </p>
      </div>
    </section>
  );
}
