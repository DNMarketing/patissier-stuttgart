"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Menü bei Routenwechsel schließen, Scroll sperren solange offen
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  const isCurrent = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="hairline-b sticky top-0 z-50 bg-porzellan/95 backdrop-blur-sm">
      <div className="container-page flex h-16 items-center justify-between gap-6 md:h-20">
        <Link href="/" aria-label="Pâtissier – zur Startseite" className="shrink-0">
          <Image
            src="/images/brand/logo-patissier-schwarz.png"
            alt=""
            width={2500}
            height={1667}
            priority
            className="h-9 w-auto md:h-11"
            sizes="140px"
          />
        </Link>

        <nav aria-label="Hauptnavigation" className="hidden items-center gap-6 xl:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link"
              aria-current={isCurrent(item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/kontakt" className="btn btn-primary hidden text-sm sm:inline-flex">
            Torte anfragen
          </Link>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="flex min-h-11 min-w-11 flex-col items-center justify-center gap-1.5 xl:hidden"
          >
            <span className="sr-only">{open ? "Menü schließen" : "Menü öffnen"}</span>
            <span
              aria-hidden
              className={`block h-px w-6 bg-schokolade transition-transform duration-200 ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
            />
            <span
              aria-hidden
              className={`block h-px w-6 bg-schokolade transition-transform duration-200 ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile-Menü: Overlay auf Porzellan */}
      <div
        id="mobile-menu"
        className={`fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto bg-porzellan transition-opacity duration-200 md:top-20 xl:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav aria-label="Mobile Navigation" className="container-page flex flex-col py-8">
          {[{ href: "/", label: "Startseite" }, ...nav].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hairline-b flex min-h-14 items-center justify-between py-4 font-display text-h3"
              aria-current={isCurrent(item.href) && item.href !== "/" ? "page" : undefined}
            >
              {item.label}
              <span aria-hidden className="text-taupe">
                →
              </span>
            </Link>
          ))}
          <div className="mt-8 flex flex-col gap-4">
            <Link href="/kontakt" className="btn btn-primary">
              Torte anfragen
            </Link>
            <a href={`tel:${site.phone.e164}`} className="btn btn-secondary">
              {site.phone.display}
            </a>
            <p className="text-center text-caption text-taupe">
              Mi–So geöffnet · Sonntags bis 17 Uhr · Mo & Di Ruhetage
            </p>
          </div>
        </nav>
      </div>
    </header>
  );
}
