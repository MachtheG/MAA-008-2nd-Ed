"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { navRoutes } from "@/lib/nav";
import { LanguageToggle } from "./LanguageToggle";
import { ElectionCountdownBar } from "./ElectionCountdown";
import { Button } from "./ui/Button";

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
    <header className="sticky top-0 z-50">
      {/* Present on every page, not just the home countdown feature */}
      <ElectionCountdownBar />
      <div
        className={`transition-colors duration-200 ${
          scrolled ? "bg-surface" : "bg-bg"
        }`}
      >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-4 py-3 sm:gap-8 sm:px-8 sm:py-4 lg:py-4">
        {/* Brand */}
        {/* No aria-label: the link's own visible text (the name plus
            either "AFFEY"/brandLine2 or "for Governor…") already serves
            as its accessible name. A hand-written aria-label here
            previously didn't match that visible text closely enough
            (axe's label-content-name-mismatch), and an aria-label
            always wins over visible text for the accessible name, so a
            mismatched one actively misleads voice-control and some
            screen-reader users rather than merely being redundant. */}
        <Link href="/" className="group flex min-w-0 items-center gap-2.5 sm:gap-3">
          <Image
            src="/images/WajirCOA.jpeg"
            alt="Wajir County coat of arms"
            width={40}
            height={40}
            priority
            className="h-9 w-9 shrink-0 object-cover sm:h-10 sm:w-10"
          />
          <span className="min-w-0 leading-tight">
            <span className="block truncate font-display text-sm font-semibold tracking-tight text-ink-900 sm:text-lg">
              {/* Compact wordmark on mobile, full name from sm up */}
              <span className="sm:hidden">AFFEY</span>
              <span className="hidden sm:inline">MOHAMED ABDI AFFEY</span>
            </span>
            {/* Short form on phones so it never truncates mid-word */}
            <span className="mt-0.5 block text-xs font-medium text-flag-green-dark sm:text-sm">
              <span className="sm:hidden">{t.nav.brandLine2}</span>
              <span className="hidden sm:inline">{t.hero.forOffice}</span>
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden items-center gap-1 xl:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={l.active ? "page" : undefined}
              className={`relative px-3.5 py-2 text-sm font-medium transition-colors ${
                l.active
                  ? "text-flag-green-dark"
                  : "text-ink-600 hover:text-ink-900"
              }`}
            >
              {l.label}
              {l.active && (
                <span className="absolute inset-x-3.5 -bottom-1 h-1 bg-flag-green" />
              )}
            </Link>
          ))}
        </nav>

        {/* Right section - Language, Donate, Menu */}
        <div className="flex shrink-0 items-center gap-1.5 sm:gap-3">
          {/* Language toggle stays reachable at every width */}
          <LanguageToggle className="shrink-0" />
          {/* Wrapped, not toggled on the Button itself: Button's own base
              classes set `display` unconditionally, which fights a
              `hidden lg:inline-flex` passed in as className (same CSS
              property, source-order dependent, so it was winning at
              mobile width and the donate button was showing where it
              shouldn't). */}
          <div className="hidden lg:block">
            <Button href="/get-involved#donate" variant="urgent" size="md">
              {t.nav.donate}
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="grid h-11 w-11 shrink-0 place-items-center bg-surface text-ink-800 transition-colors active:scale-[0.97] lg:hidden"
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
        <div id="mobile-menu" className="lg:hidden">
          {/* Caps at the viewport so long menus scroll instead of being cut off */}
          <nav
            aria-label="Mobile"
            className="mx-auto flex max-h-[calc(100dvh-5rem)] max-w-7xl flex-col overflow-y-auto overscroll-contain bg-bg px-4 py-4 sm:px-8 sm:py-5"
          >
            {/* Closing on click (rather than in an effect on pathname) keeps
                the menu in sync without a cascading re-render. */}
            <Link
              href="/"
              onClick={() => setOpen(false)}
              aria-current={pathname === "/" ? "page" : undefined}
              className="px-4 py-3 text-base font-medium text-ink-800 transition-colors hover:bg-ink/5"
            >
              {t.nav.home}
            </Link>
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                aria-current={l.active ? "page" : undefined}
                className={`px-4 py-3 text-base font-medium transition-colors hover:bg-ink/5 ${
                  l.active ? "bg-flag-green/10 text-flag-green-dark font-semibold" : "text-ink-800"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-4">
              <Button href="/get-involved#donate" variant="urgent" size="lg" className="w-full" onClick={() => setOpen(false)}>
                {t.nav.donate}
              </Button>
            </div>
          </nav>
        </div>
      )}
      </div>
    </header>
  );
}
