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
      <Container width="wide" className="py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-display text-2xl font-semibold text-sand-50">
              Mohamed Abdi Affey
            </p>
            <p className="mt-1 text-sm uppercase tracking-[0.16em] text-ochre-400">
              {t.hero.forOffice}
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-sand-100/70">
              A record of service across Kenya and the Horn of Africa — now for
              home. Built for the people of Wajir County.
            </p>
          </div>

          <nav aria-label="Footer" className="text-sm">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-sand-100/50">
              Explore
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
              Take part
            </p>
            <ul className="space-y-2">
              <li>
                <Link href="/get-involved" className="text-sand-100/80 hover:text-sand-50">
                  Volunteer
                </Link>
              </li>
              <li>
                <Link href="/get-involved#donate" className="text-sand-100/80 hover:text-sand-50">
                  Donate
                </Link>
              </li>
              <li>
                <Link href="/wards" className="text-sand-100/80 hover:text-sand-50">
                  Find your constituency
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-sand-100/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Mohamed Abdi Affey Campaign. Site in development.</p>
          <p className="max-w-xl">
            Draft site — content marked “Draft” or “To confirm” is not final and
            must be approved before publishing. Imagery is placeholder/atmospheric.
          </p>
        </div>
      </Container>
    </footer>
  );
}
