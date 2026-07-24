"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { navRoutes } from "@/lib/nav";
import { LanguageToggle } from "./LanguageToggle";

export function SiteHeader() {
  const { t } = useLanguage();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const links = navRoutes.map((r) => ({
    href: r.href,
    label: t.nav[r.key],
    active: pathname === r.href,
  }));

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-line bg-sand-50/90 backdrop-blur-md"
          : "border-b border-transparent bg-sand-50"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        {/* Brand */}
        <Link href="/" className="group flex items-center gap-3" aria-label={`${t.hero.name} — ${t.nav.home}`}>
          <span
            aria-hidden="true"
            className="grid h-10 w-10 place-items-center rounded-md bg-flag-green font-display text-xl font-semibold text-sand-50 shadow-sm ring-1 ring-flag-green-dark/30"
          >
            A
          </span>
          <span className="leading-none">
            <span className="block font-display text-lg font-semibold tracking-tight text-ink-900">
              {/* Compact wordmark on mobile, full name from sm up */}
              <span className="sm:hidden">AFFEY</span>
              <span className="hidden sm:inline">MOHAMED ABDI AFFEY</span>
            </span>
            <span className="mt-0.5 block text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-flag-green-dark">
              {t.hero.forOffice}
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden items-center gap-0.5 xl:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={l.active ? "page" : undefined}
              className={`relative rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                l.active
                  ? "text-flag-green-dark"
                  : "text-ink-600 hover:text-ink-900"
              }`}
            >
              {l.label}
              {l.active && (
                <span className="absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-flag-green" />
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageToggle className="hidden sm:inline-flex" />
          <Link
            href="/get-involved#donate"
            className="hidden rounded-full bg-flag-red px-4 py-2 text-sm font-semibold text-sand-50 shadow-sm transition-transform hover:-translate-y-0.5 sm:inline-block"
          >
            {t.nav.donate}
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="grid h-10 w-10 place-items-center rounded-md border border-line-strong text-ink-800 xl:hidden"
          >
            <span className="sr-only">{open ? t.nav.close : t.nav.menu}</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              {open ? (
                <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div id="mobile-menu" className="xl:hidden">
          <nav
            aria-label="Mobile"
            className="mx-auto flex max-w-7xl flex-col border-t border-line bg-sand-50 px-5 py-3 sm:px-8"
          >
            <Link
              href="/"
              aria-current={pathname === "/" ? "page" : undefined}
              className="rounded-md px-3 py-3 text-base font-medium text-ink-800 hover:bg-ink-900/5"
            >
              {t.nav.home}
            </Link>
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                aria-current={l.active ? "page" : undefined}
                className={`rounded-md px-3 py-3 text-base font-medium hover:bg-ink-900/5 ${
                  l.active ? "text-flag-green-dark" : "text-ink-800"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-2 flex items-center justify-between gap-3 border-t border-line pt-4">
              <LanguageToggle />
              <Link
                href="/get-involved#donate"
                className="rounded-full bg-flag-red px-5 py-2.5 text-sm font-semibold text-sand-50"
              >
                {t.nav.donate}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
