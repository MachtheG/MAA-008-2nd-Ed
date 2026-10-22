"use client";

import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageProvider";
import { useContent } from "@/content/useContent";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

/**
 * Home hero.
 *
 * Background: a real landscape photograph (acacia.jpg — see
 * public/images/CREDITS.md; it is Unsplash stock, not a photo of Wajir
 * itself, so it should be swapped for campaign photography of the county
 * before launch), not a blur or a gradient wash. Overlay is a single flat
 * scrim, strong enough to hold the type legible without softening the
 * photo into mush — the point is a real place, not atmosphere.
 */
export function HomeHero() {
  const { t } = useLanguage();
  const { profile } = useContent();

  return (
    <section className="relative isolate overflow-hidden bg-ink-900 text-sand-50">
      <Image
        src="/images/acacia.jpg"
        alt=""
        aria-hidden="true"
        fill
        priority
        sizes="100vw"
        quality={90}
        className="object-cover object-[center_65%]"
      />
      {/* Flat scrim, strongest where the type sits, clear toward the horizon */}
      <div
        className="absolute inset-0 bg-linear-to-t from-ink-900 via-ink-900/75 to-ink-900/25"
        aria-hidden="true"
      />

      <Container className="relative py-14 sm:py-20 lg:py-28">
        <div className="grid items-end gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          {/* Copy */}
          <div className="max-w-2xl">
            <p className="flex items-center gap-2.5 border-l-2 border-ochre-400 pl-3 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-sand-100 sm:text-xs sm:tracking-[0.16em]">
              {t.hero.kicker}
            </p>

            <h1 className="mt-5 font-display font-semibold tracking-tight text-sand-50 sm:mt-6">
              <span
                className="block text-balance"
                style={{
                  fontSize: "var(--text-mega)",
                  lineHeight: "var(--text-mega--line-height)",
                }}
              >
                {t.hero.name}
              </span>
              <span className="mt-3 block font-display text-xl font-medium italic text-ochre-300 sm:mt-4 sm:text-3xl">
                {t.hero.forOffice}
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-sand-100/90 sm:mt-7 sm:text-lg">
              {t.hero.lead}
            </p>

            {/* Campaign slogan — a solid card, not a glass pill */}
            <div className="mt-5 inline-flex flex-wrap items-center gap-x-2.5 gap-y-1 border-l-2 border-ochre-400 bg-ink-900/60 py-2.5 pl-3.5 pr-4 text-sm sm:mt-6">
              <span className="font-semibold text-ochre-300">
                {t.ui.home.centralPromise}
              </span>
              <span className="text-sand-100">{profile.slogan.value}</span>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:items-center">
              <Button
                href="/vision"
                variant="gold"
                size="lg"
                className="w-full sm:w-auto"
              >
                {t.hero.ctaPrimary}
              </Button>
              <Button
                href="/get-involved"
                size="lg"
                variant="outline"
                className="w-full border-sand-50/40 text-sand-50 hover:bg-sand-50/10 sm:w-auto"
              >
                {t.hero.ctaSecondary}
              </Button>
            </div>
          </div>

          {/* Photograph — capped so it renders at ~native resolution */}
          <figure className="relative mx-auto w-full max-w-120 lg:mx-0">
            <div className="relative aspect-video overflow-hidden rounded-lg ring-1 ring-sand-50/25 shadow-2xl">
              <Image
                src="/images/MohamedA04.jpeg"
                alt={t.ui.home.heroPhotoAlt}
                fill
                priority
                quality={90}
                sizes="(max-width: 1024px) 92vw, 30rem"
                className="object-cover object-center"
              />
            </div>
            {/* Flag rule under the frame */}
            <span
              aria-hidden="true"
              className="mt-3 block h-1 w-24 bg-linear-to-r from-flag-black via-flag-red to-flag-green"
            />
            <figcaption className="mt-2.5 text-sm text-sand-100/70">
              {t.ui.home.heroPhotoCaption}
            </figcaption>
          </figure>
        </div>

        {/* At-a-glance strip */}
        <dl className="mt-12 grid gap-px overflow-hidden border border-sand-50/20 bg-sand-50/15 sm:mt-14 sm:grid-cols-3">
          {t.credibility.items.map((item, i) => (
            <div key={i} className="bg-ink-900/70 px-5 py-5">
              <dt className="font-display text-2xl font-semibold text-ochre-300 sm:text-3xl">
                {item.value}
              </dt>
              <dd className="mt-1 text-sm text-sand-100/80">{item.label}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
