"use client";

import Link from "next/link";
import { HomeHero } from "@/components/home/HomeHero";
import { ElectionCountdown } from "@/components/ElectionCountdown";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { PhotoSlot } from "@/components/ui/PhotoSlot";
import { StatusBadge } from "@/components/ui/Status";
import { useContent } from "@/content/useContent";
import { useLanguage } from "@/i18n/LanguageProvider";

export function HomeContent() {
  return (
    <>
      <HomeHero />
      <CountdownSection />
      <VisionTeaser />
      <StoryTeaser />
      <PullQuote />
      <CtaBand />
    </>
  );
}

/* --------------------------------------------------------------- */

function CountdownSection() {
  return (
    <section className="border-b border-line bg-sand-100 py-12 sm:py-16">
      <Container>
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <ElectionCountdown />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function VisionTeaser() {
  const { t } = useLanguage();
  const { visionPillars } = useContent();
  const featured = visionPillars.slice(0, 3);

  return (
    <section className="bg-sand-50 bg-topo py-16 sm:py-20 lg:py-28">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <Kicker>{t.ui.home.visionKicker}</Kicker>
            <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight text-balance text-ink-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.05]">
              {t.ui.home.visionHeading}
            </h2>
          </div>
          <Button href="/vision" variant="outline" className="shrink-0 self-start sm:self-auto">
            {t.ui.home.seeAllPriorities}
          </Button>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-ink-500">
          <StatusBadge status="draft" />
          <span>{t.ui.home.draftNotice}</span>
        </div>

        <div className="mt-10 grid gap-5 sm:gap-6 md:grid-cols-3 lg:mt-12">
          {featured.map((p, i) => (
            <Reveal key={p.id} as="article" delay={i * 90}>
              <Link
                href="/vision"
                className="group flex h-full flex-col rounded-2xl border border-line bg-sand-50 p-6 transition-all hover:-translate-y-1 hover:border-flag-green/40 hover:shadow-lg sm:p-7"
              >
                <span className="font-display text-4xl font-semibold text-ochre-400">
                  {p.number}
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold text-ink-900">
                  {p.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-600">
                  {p.promise}
                </p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-flag-green-dark">
                  {t.ui.home.readMore}
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function StoryTeaser() {
  const { t } = useLanguage();
  const { storyIntro } = useContent();

  return (
    <section className="border-y border-line bg-sand-100 py-16 sm:py-20 lg:py-28">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal className="order-2 lg:order-1">
            <Kicker tone="ochre">{t.ui.home.storyKicker}</Kicker>
            <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight text-balance text-ink-900 sm:text-4xl lg:text-[2.5rem] lg:leading-[1.08]">
              {t.ui.home.storyHeading}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-700 sm:mt-6 sm:text-lg">
              {storyIntro}
            </p>
            <div className="mt-7 sm:mt-8">
              <Button href="/story">{t.ui.home.readFullStory}</Button>
            </div>
          </Reveal>
          <Reveal className="order-1 lg:order-2" delay={120}>
            <PhotoSlot
              src="/images/MohamedA01.jpg"
              alt={t.ui.home.portraitAlt}
              caption={t.ui.home.portraitCaption}
              ratio="1/1"
              className="mx-auto w-full max-w-sm shadow-xl sm:max-w-md"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function PullQuote() {
  const { t } = useLanguage();
  return (
    <section className="relative overflow-hidden bg-flag-green-deep py-16 text-sand-50 sm:py-20 lg:py-28">
      <div className="absolute inset-0 bg-contour opacity-60" aria-hidden="true" />
      <Container width="prose" className="relative text-center">
        <span className="font-display text-6xl leading-none text-ochre-300" aria-hidden="true">
          &ldquo;
        </span>
        <blockquote className="mt-2 font-display text-xl font-medium leading-snug text-balance sm:text-2xl lg:text-[2rem] lg:leading-[1.25]">
          {t.ui.home.quote}
        </blockquote>
        <p className="mt-6 text-sm uppercase tracking-[0.16em] text-sand-100/70">
          <span className="italic normal-case tracking-normal text-ochre-200">
            {t.ui.home.quoteAttribution}
          </span>
        </p>
      </Container>
    </section>
  );
}

function CtaBand() {
  const { t } = useLanguage();
  return (
    <section className="bg-sand-50 py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-ink-900 px-6 py-10 text-sand-50 sm:px-10 sm:py-14 lg:px-14">
          <div className="absolute inset-0 bg-topo opacity-[0.15]" aria-hidden="true" />
          <div className="relative grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-center">
            <div>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-balance sm:text-3xl lg:text-4xl">
                {t.ui.home.ctaHeading}
              </h2>
              <p className="mt-4 max-w-xl text-base text-sand-100/85 sm:text-lg">
                {t.ui.home.ctaBody}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Button href="/get-involved" variant="gold" size="lg" className="w-full">
                {t.ui.home.ctaPrimary}
              </Button>
              <Button
                href="/get-involved#donate"
                size="lg"
                variant="outline"
                className="w-full border-sand-50/40 text-sand-50 hover:bg-sand-50/10"
              >
                {t.ui.home.ctaSecondary}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
