"use client";

import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageProvider";
import { useContent } from "@/content/useContent";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FlagBar } from "@/components/ui/FlagBar";
import { SplitText, ImageReveal, Parallax } from "@/lib/motion";

/**
 * Home hero — the masthead of "The Dossier" (direction sheet §6, adjusted
 * for a real primary button instead of a text-link action). The
 * headline is the signature masked-line reveal; the portrait is the
 * image-shutter unveil with a slow scale settle; the background
 * landscape gets a few percent of parallax depth, pointer-driven on
 * desktop and scroll-driven on the phone most visitors will be on.
 */
export function HomeHero() {
  const { t } = useLanguage();
  const { profile } = useContent();

  // Authored line breaks (type.md §8: let the browser break a two-line
  // headline and it breaks badly). t.hero.name is "Mohamed Abdi Affey" in
  // every active locale; splitting on the space keeps this correct even
  // where a locale's translation changes the name's presentation.
  const nameLines = t.hero.name.split(" ").length > 2
    ? [t.hero.name.split(" ").slice(0, -1).join(" "), t.hero.name.split(" ").slice(-1).join(" ")]
    : [t.hero.name];

  return (
    <section className="relative isolate overflow-hidden bg-field-dossier text-field-dossier-ink">
      <Parallax className="absolute inset-0" strength={14}>
        <Image
          src="/images/acacia.jpg"
          alt=""
          aria-hidden="true"
          fill
          priority
          sizes="100vw"
          quality={82}
          className="scale-115 object-cover object-[center_65%] grain"
        />
      </Parallax>
      {/* Flat scrim — the one gradient the house rules allow: a neutral
          scrim under text on a photograph, never a decorative wash. */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/70 to-ink-900/20" aria-hidden="true" />

      <Container className="relative py-16 sm:py-24 lg:py-32">
        <div className="grid items-end gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div className="max-w-2xl">
            <p className="font-display text-base font-medium text-ochre-300 sm:text-lg">{t.hero.kicker}</p>

            <SplitText
              as="h1"
              lines={nameLines}
              className="mt-4 font-display font-semibold tracking-tight text-sand-50"
              lineClassName=""
              stagger={110}
            />
            <p
              className="mt-3 font-display text-xl font-medium text-ochre-300 sm:text-3xl"
              style={{ letterSpacing: "-0.01em" }}
            >
              {t.hero.forOffice}
            </p>

            <p className="mt-6 max-w-xl text-lead leading-[1.35] text-sand-100/90">{t.hero.lead}</p>

            <p className="mt-6 max-w-xl text-body leading-relaxed text-sand-100/80">
              <span className="font-semibold text-ochre-300">{t.ui.home.centralPromise}</span>{" "}
              {profile.slogan.value}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center">
              <Button href="/vision" variant="accent" size="lg" className="w-full sm:w-auto">
                {t.hero.ctaPrimary}
              </Button>
              <Button href="/get-involved" size="lg" variant="ghost-on-dark" className="w-full sm:w-auto">
                {t.hero.ctaSecondary}
              </Button>
            </div>
          </div>

          <figure className="relative mx-auto w-full max-w-120 lg:mx-0">
            <ImageReveal
              src="/images/MohamedA04.jpeg"
              alt={t.ui.home.heroPhotoAlt}
              fill
              priority
              quality={82}
              sizes="(max-width: 1024px) 92vw, 30rem"
              wrapperClassName="relative aspect-video"
              className="object-cover object-center"
            />
            <FlagBar className="mt-3 h-1 w-24" />
            <figcaption className="mt-2.5 text-sm text-sand-100/70">{t.ui.home.heroPhotoCaption}</figcaption>
          </figure>
        </div>

        {/* At-a-glance strip — a flat field (ground has already changed to
            --field-dossier for the whole hero; this is one more tone step
            up, not a hairline grid of boxes). */}
        <dl className="mt-14 grid gap-px sm:mt-16 sm:grid-cols-3">
          {t.credibility.items.map((item, i) => (
            <div key={i} className="bg-sand-50/8 px-5 py-5">
              <dt className="font-display text-2xl font-semibold text-ochre-300 sm:text-3xl">{item.value}</dt>
              <dd className="mt-1 text-sm text-sand-100/80">{item.label}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
