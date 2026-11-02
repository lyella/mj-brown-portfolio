"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav, site } from "@/lib/data/site";

/**
 * Sticky site header with the main navigation.
 * The active link gets an underline based on the current route.
 */
export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="font-display text-lg font-semibold tracking-wide">
          {site.name}
        </Link>

        <nav aria-label="Main navigation">
          <ul className="flex items-center gap-4 md:gap-6">
            {nav.map((item) => {
              const active =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <li key={item.href} className="hidden sm:block">
                  <Link
                    href={item.href}
                    className={`text-[11px] font-medium uppercase tracking-[0.15em] transition-colors hover:text-accent ${
                      active ? "text-accent" : "text-muted"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li className="sm:hidden">
              <Link
                href="/contact"
                className="text-[11px] font-medium uppercase tracking-[0.15em] text-accent"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
