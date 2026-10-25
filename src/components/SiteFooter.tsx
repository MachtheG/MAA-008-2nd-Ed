"use client";

import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageProvider";
import { navRoutes } from "@/lib/nav";
import { Container } from "./ui/Container";
import { FlagBar } from "./ui/FlagBar";

export function SiteFooter() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-field-dossier text-field-dossier-ink">
      <FlagBar />
      <Container width="wide" className="py-10 sm:py-14">
        <div className="grid gap-8 sm:grid-cols-2 sm:gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="sm:col-span-2 md:col-span-1">
            <p className="font-display text-2xl font-semibold text-sand-50">
              Mohamed Abdi Affey
            </p>
            <p className="mt-1 text-sm text-ochre-300">{t.hero.forOffice}</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-sand-100/70">
              {t.ui.footer.tagline}
            </p>
          </div>

          <nav aria-label="Footer" className="text-sm">
            <p className="mb-3 font-display text-base font-semibold text-sand-50">
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
            <p className="mb-3 font-display text-base font-semibold text-sand-50">
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

        <div className="mt-12 flex flex-col gap-3 pt-6 text-xs text-sand-100/50 sm:mt-16 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {t.ui.footer.copyright}</p>
          <p className="max-w-xl">{t.ui.footer.disclaimer}</p>
        </div>
        <p className="mt-3 max-w-3xl text-[0.7rem] leading-relaxed text-sand-100/70">
          {t.ui.footer.photoCreditsLabel}{" "}
          <a href="https://commons.wikimedia.org/w/index.php?curid=97274605" className="underline text-sand-100/70 hover:text-sand-100">AMISOM Public Information (CC0)</a>,{" "}
          <a href="https://commons.wikimedia.org/w/index.php?curid=16001833" className="underline text-sand-100/70 hover:text-sand-100">Oxfam East Africa (CC BY 2.0)</a>,{" "}
          <a href="https://commons.wikimedia.org/w/index.php?curid=13284136" className="underline text-sand-100/70 hover:text-sand-100">Jorge Láscar (CC BY-SA 2.0)</a>,{" "}
          <a href="https://www.flickr.com/photos/64924693@N00/39838085314" className="underline text-sand-100/70 hover:text-sand-100">Nagarjun (CC BY 2.0)</a> — full list in{" "}
          <code className="text-sand-100/50">public/images/CREDITS.md</code>.
        </p>
      </Container>
    </footer>
  );
}
