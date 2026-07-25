"use client";

import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageProvider";
import { navRoutes } from "@/lib/nav";
import { Container } from "./ui/Container";

export function SiteFooter() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-ink-800 bg-ink-900 text-sand-100">
      {/* Flag rule */}
      <div className="h-1 w-full bg-gradient-to-r from-flag-black via-flag-red to-flag-green" aria-hidden="true" />
      <Container width="wide" className="py-10 sm:py-14">
        <div className="grid gap-8 sm:grid-cols-2 sm:gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="sm:col-span-2 md:col-span-1">
            <p className="font-display text-2xl font-semibold text-sand-50">
              Mohamed Abdi Affey
            </p>
            <p className="mt-1 text-sm uppercase tracking-[0.16em] text-ochre-400">
              {t.hero.forOffice}
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-sand-100/70">
              {t.ui.footer.tagline}
            </p>
          </div>

          <nav aria-label="Footer" className="text-sm">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-sand-100/50">
              {t.ui.footer.explore}
            </p>
            <ul className="space-y-2">
              {navRoutes.map((r) => (
                <li key={r.href}>
                  <Link href={r.href} className="text-sand-100/80 hover:text-sand-50">
                    {t.nav[r.key]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="text-sm">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-sand-100/50">
              {t.ui.footer.takePart}
            </p>
            <ul className="space-y-2">
              <li>
                <Link href="/get-involved" className="text-sand-100/80 hover:text-sand-50">
                  {t.ui.footer.volunteer}
                </Link>
              </li>
              <li>
                <Link href="/get-involved#donate" className="text-sand-100/80 hover:text-sand-50">
                  {t.ui.footer.donate}
                </Link>
              </li>
              <li>
                <Link href="/wards" className="text-sand-100/80 hover:text-sand-50">
                  {t.ui.footer.findConstituency}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-sand-100/50 sm:mt-12 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {t.ui.footer.copyright}</p>
          <p className="max-w-xl">{t.ui.footer.disclaimer}</p>
        </div>
      </Container>
    </footer>
  );
}
