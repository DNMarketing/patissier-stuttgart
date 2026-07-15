import Link from "next/link";
import { JsonLd } from "./JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo";

/** Sichtbare Brotkrumen + BreadcrumbList-JSON-LD in einem. */
export function Breadcrumbs({ items }: { items: { name: string; path: string }[] }) {
  const last = items[items.length - 1];
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(items)} />
      <nav aria-label="Brotkrumen" className="text-caption text-taupe">
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <Link href="/" className="hover:text-schokolade">
              Startseite
            </Link>
          </li>
          {items.map((item) => (
            <li key={item.path} className="flex items-center gap-2">
              <span aria-hidden>/</span>
              {item === last ? (
                <span aria-current="page" className="text-schokolade">
                  {item.name}
                </span>
              ) : (
                <Link href={item.path} className="hover:text-schokolade">
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
