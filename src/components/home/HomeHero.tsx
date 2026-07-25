"use client";

import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageProvider";
import { useContent } from "@/content/useContent";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

/**
 * Home hero.
 *
 * The portrait (MohamedA04) is only 533 × 299px, so it is deliberately NOT
 * used as a full-bleed `fill` background — stretching it to 100vw would
 * upscale it ~4× and destroy it. Instead it renders inside a capped frame
 * (max 30rem) where it sits at roughly native resolution and stays sharp,
 * while a heavily blurred copy provides the warm atmospheric wash behind.
 * Blur hides the upscaling entirely, so no clarity is lost anywhere.
 */
export function HomeHero() {
  const { t } = useLanguage();
  const { profile } = useContent();

  return (
    <section className="relative isolate overflow-hidden bg-ink-900 text-sand-50">
      {/* Atmospheric wash — blurred, so low resolution is invisible */}
      <Image
        src="/images/MohamedA04.jpeg"
        alt=""
        aria-hidden="true"
        fill
        priority
        sizes="100vw"
        className="scale-125 object-cover object-center opacity-30 blur-2xl"
      />
      <div
        className="absolute inset-0 bg-linear-to-t from-ink-900 via-ink-900/85 to-ink-900/70"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-topo opacity-[0.12]" aria-hidden="true" />

      <Container className="relative py-14 sm:py-20 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          {/* Copy */}
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2.5 rounded-full border border-sand-50/25 bg-sand-50/5 px-3.5 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-sand-100 backdrop-blur-sm sm:text-xs sm:tracking-[0.16em]">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-ochre-400" />
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

            {/* Campaign slogan */}
            <div className="mt-5 inline-flex flex-wrap items-center gap-x-2.5 gap-y-1 rounded-lg border border-ochre-400/30 bg-ochre-400/10 px-3.5 py-2.5 text-sm backdrop-blur-sm sm:mt-6">
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
            <div className="relative aspect-video overflow-hidden rounded-2xl ring-1 ring-sand-50/20 shadow-2xl">
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
              className="mt-3 block h-1 w-24 rounded-full bg-linear-to-r from-flag-black via-flag-red to-flag-green"
            />
            <figcaption className="mt-2.5 text-sm text-sand-100/70">
              {t.ui.home.heroPhotoCaption}
            </figcaption>
          </figure>
        </div>

        {/* At-a-glance strip */}
        <dl className="mt-12 grid gap-px overflow-hidden rounded-xl border border-sand-50/15 bg-sand-50/10 sm:mt-14 sm:grid-cols-3">
          {t.credibility.items.map((item, i) => (
            <div key={i} className="bg-ink-900/50 px-5 py-5 backdrop-blur-sm">
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
