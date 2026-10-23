"use client";

import Image from "next/image";
import Link from "next/link";
import { HomeHero } from "@/components/home/HomeHero";
import { ElectionCountdown } from "@/components/ElectionCountdown";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { TextLink } from "@/components/ui/TextLink";
import { Reveal, RevealGroup } from "@/lib/motion";
import { StatusBadge } from "@/components/ui/Status";
import { useContent } from "@/content/useContent";
import { useLanguage } from "@/i18n/LanguageProvider";
import { WajirSilhouette } from "@/components/ui/WajirSilhouette";

export function HomeContent() {
  return (
    <>
      <HomeHero />
      <CountdownStrip />
      <AboutSection />
      <StatsSection />
      <FeaturesSection />
      <GallerySection />
      <StatementSection />
      <CtaSection />
    </>
  );
}

/* --------------------------------------------------------------- */

function CountdownStrip() {
  return (
    <section className="bg-field-dossier py-10 sm:py-14">
      <Container width="prose">
        <Reveal>
          <ElectionCountdown />
        </Reveal>
      </Container>
    </section>
  );
}

/**
 * "about" blueprint (Wide photo, colour tile, facts) — adjusted: the
 * right tile holds a small drawn outline of Wajir County instead of a
 * floor plan, since that is the real shape this subject owns.
 */
function AboutSection() {
  const { t } = useLanguage();
  const { storyIntro } = useContent();

  return (
    <section className="bg-bg py-16 sm:py-20 lg:py-28">
      <Container width="wide">
        <h2 className="font-display text-head font-semibold tracking-tight text-ink" style={{ letterSpacing: "-0.02em" }}>
          {t.ui.home.storyHeading}
        </h2>
        <Reveal as="p" className="mt-6 max-w-[40ch] text-lead leading-[1.35] text-ink-700">
          {storyIntro}
        </Reveal>

        <div className="mt-14 grid gap-3 lg:grid-cols-12 lg:gap-3">
          <Reveal as="div" className="relative lg:col-span-8">
            <div className="relative aspect-[16/10] overflow-hidden bg-surface">
              <Image
                src="/images/MohamedA01.jpg"
                alt={t.ui.home.portraitAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal as="div" delay={90} className="flex flex-col justify-between bg-field-green p-6 text-field-green-ink lg:col-span-4 sm:p-8">
            <WajirOutline />
          </Reveal>
        </div>

        <RevealGroup
          as="dl"
          className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4"
          stagger={60}
        >
          <Fact value="1968" label={t.ui.home.factBorn} />
          <Fact value="27" label={t.ui.home.factMp} />
          <Fact value="3" label={t.ui.home.factDecades} />
          <Fact value="2027" label={t.ui.home.factElection} />
        </RevealGroup>
      </Container>
    </section>
  );
}

function Fact({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-surface px-4 py-4">
      <dt className="font-display text-2xl font-semibold tabular-nums text-ink sm:text-3xl">{value}</dt>
      <dd className="mt-1 text-sm text-muted">{label}</dd>
    </div>
  );
}

function WajirOutline() {
  const { t } = useLanguage();
  return (
    <>
      <WajirSilhouette className="h-32 w-auto opacity-90" />
      <p className="mt-6 text-sm leading-relaxed opacity-90">{t.ui.home.mapNote}</p>
    </>
  );
}

/**
 * "stats" blueprint (Column aligned on the decimal) — the handful of
 * figures that make the platform's case, from the vision pillars'
 * stated targets. Real numbers, not invented.
 */
function StatsSection() {
  const { t } = useLanguage();
  const figures = [
    { value: "500", caption: t.ui.home.statWater },
    { value: "300", caption: t.ui.home.statRoads },
    { value: "50M", caption: t.ui.home.statBursary },
    { value: "6", caption: t.ui.home.statConstituencies },
  ];

  return (
    <section className="bg-bg py-16 sm:py-20 lg:py-28">
      <Container width="wide">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-6">
          <h2 className="font-display text-head font-semibold leading-[1.1] text-ink lg:col-span-5">
            {t.ui.home.statsHeading}
          </h2>
          <RevealGroup as="div" stagger={70} className="flex flex-col gap-5 lg:col-span-7">
            {figures.map((f) => (
              <div key={f.caption} className="flex items-baseline gap-5 border-t border-sand-300 pt-5 first:border-t-0 first:pt-0">
                <span className="font-display text-display font-semibold leading-none tabular-nums text-ink" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}>
                  {f.value}
                </span>
                <span className="text-body text-ink-600">{f.caption}</span>
              </div>
            ))}
          </RevealGroup>
        </div>
      </Container>
    </section>
  );
}

/**
 * "features" blueprint (Pinned heading, passing rows) — the six vision
 * pillars. Two have a real found photograph of their subject; the other
 * four take a flat field colour rather than a stock photo of
 * infrastructure that does not yet exist.
 */
function FeaturesSection() {
  const { t } = useLanguage();
  const { visionPillars } = useContent();

  const treatment: Record<string, { kind: "photo"; src: string; alt: string } | { kind: "field"; cls: string }> = {
    water: { kind: "field", cls: "bg-field-ochre text-field-ochre-ink" },
    livestock: { kind: "photo", src: "/images/found/camels-roadside.jpg", alt: "Camels on a roadside, central to the pastoral economy of northern Kenya" },
    health: { kind: "field", cls: "bg-field-green text-field-green-ink" },
    education: { kind: "field", cls: "bg-field-dossier text-field-dossier-ink" },
    roads: { kind: "field", cls: "bg-field-ochre text-field-ochre-ink" },
    peace: { kind: "photo", src: "/images/found/acacia-savannah.jpg", alt: "Acacia savanna, northern Kenya" },
  };

  return (
    <section className="bg-surface py-16 sm:py-20 lg:py-28">
      <Container width="wide">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <h2 className="font-display text-head font-semibold leading-[1.05] text-ink lg:sticky lg:top-28">
              {t.ui.home.visionHeading}
            </h2>
          </div>

          <div className="flex flex-col gap-16 lg:col-span-8">
            <div className="flex items-center gap-2">
              <StatusBadge status="draft" />
              <span className="text-sm text-muted">{t.ui.home.draftNotice}</span>
            </div>

            {visionPillars.map((p, i) => {
              const t2 = treatment[p.id] ?? { kind: "field", cls: "bg-field-dossier text-field-dossier-ink" };
              const flip = i % 2 === 1;
              return (
                <Reveal key={p.id} as="article">
                  <div className={`flex flex-col gap-5 sm:flex-row sm:gap-8 ${flip ? "sm:flex-row-reverse" : ""}`}>
                    <div className="relative aspect-3/4 w-full shrink-0 overflow-hidden sm:w-44">
                      {t2.kind === "photo" ? (
                        <Image src={t2.src} alt={t2.alt} fill sizes="200px" className="object-cover" />
                      ) : (
                        <div className={`h-full ${t2.cls}`} />
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-display text-xl font-semibold text-ink sm:text-2xl">{p.title}</h3>
                      <p className="mt-2 font-medium text-flag-green-dark">{p.promise}</p>
                      <ul className="mt-4 space-y-2.5">
                        {p.points.map((pt, j) => {
                          const isDraft = pt.startsWith("[DRAFT") || pt.startsWith("[RASIMU");
                          return (
                            <li key={j} className={`text-sm leading-relaxed ${isDraft ? "italic text-muted" : "text-ink-700"}`}>
                              {pt}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              );
            })}

            <div>
              <Button href="/vision" variant="primary">{t.ui.home.seeAllPriorities}</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/** "gallery" blueprint (Drag row of mixed modules) — a native scroll-
 * snap row, no library, that also works with touch, trackpad and the
 * keyboard (motion.md "Sideways gallery": native row first). */
function GallerySection() {
  const { t } = useLanguage();
  const items: { src: string; alt: string; href: string; caption: string }[] = [
    { src: "/images/wajirc.jpeg", alt: t.ui.home.galleryMapAlt, href: "/wards", caption: t.ui.home.galleryMapCaption },
    { src: "/images/found/unpos-mogadishu-2011.jpg", alt: "UNPOS conference, Mogadishu, 2011", href: "/record", caption: t.ui.home.galleryAmbassadorCaption },
    { src: "/images/found/parliament-buildings-nairobi.jpg", alt: "Parliament Buildings, Nairobi", href: "/record", caption: t.ui.home.galleryParliamentCaption },
    { src: "/images/found/dadaab-refugee-camp.jpg", alt: "Dadaab refugee camp, northern Kenya", href: "/record", caption: t.ui.home.galleryUnhcrCaption },
    { src: "/images/found/somali-livestock-trader.jpg", alt: "A Somali livestock trader", href: "/vision", caption: t.ui.home.galleryLivestockCaption },
  ];

  return (
    <section className="bg-bg py-16 sm:py-20 lg:py-28">
      <div className="flex items-baseline justify-between px-5 sm:px-8">
        <h2 className="font-display text-head font-semibold text-ink">{t.ui.home.galleryHeading}</h2>
        <span className="text-sm text-muted">{items.length}</span>
      </div>
      <ul className="mt-8 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-3 scroll-px-5 sm:gap-4 sm:px-8">
        {items.map((it) => (
          <li key={it.href + it.src} className="shrink-0 snap-start" style={{ flexBasis: "min(72vw, 22rem)" }}>
            <Link href={it.href} className="group block">
              <div className="relative aspect-4/5 overflow-hidden bg-surface">
                <Image
                  src={it.src}
                  alt={it.alt}
                  fill
                  sizes="(max-width: 640px) 72vw, 22rem"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>
              <p className="mt-2 text-sm text-ink-700">{it.caption}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

/**
 * The home page's pulled statement. The source text's attribution in
 * the dictionary is "— Anonymous" — not a named testimonial-giver — so
 * this is built as a plain statement (no portrait, no invented speaker),
 * not forced into the dealt "testimonial" blueprint's portrait-and-quote
 * composition, which would visually imply a real person vouching for the
 * candidate. Documented in the Phase 6 report as a content item for the
 * campaign to confirm (attribute it, or remove it) before launch.
 */
function StatementSection() {
  const { t } = useLanguage();
  return (
    <section className="bg-field-green py-20 text-field-green-ink sm:py-28 lg:py-36">
      <Container width="prose">
        <Reveal as="blockquote" className="font-display text-head font-medium leading-[1.15] text-balance">
          {t.ui.home.quote}
        </Reveal>
        <p className="mt-6 text-sm text-field-green-ink/70">{t.ui.home.quoteAttribution}</p>
      </Container>
    </section>
  );
}

/**
 * "cta" blueprint (Three photographs, then a field) — adjusted per the
 * direction sheet's own instructions: no button, the underlined phrase
 * is the action.
 */
function CtaSection() {
  const { t } = useLanguage();
  const strip = [
    "/images/found/camels-roadside.jpg",
    "/images/acacia.jpg",
    "/images/MohamedA05.jpeg",
  ];

  return (
    <section>
      <div className="flex">
        {strip.map((src, i) => (
          <div key={src} className="relative h-[40svh] flex-1 overflow-hidden">
            <Image src={src} alt="" aria-hidden="true" fill sizes="33vw" className="object-cover" priority={i === 0 && false} />
          </div>
        ))}
      </div>
      <div className="bg-field-dossier py-16 text-field-dossier-ink sm:py-20">
        <Container width="wide">
          <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-end">
            <p className="max-w-xl font-display text-lead leading-[1.3]">
              {t.ui.home.ctaBody}{" "}
              <TextLink href="/get-involved" tone="light" className="font-display text-lead">
                {t.ui.home.ctaPrimary}
              </TextLink>
            </p>
            <div className="flex items-center gap-4 lg:justify-end">
              <div className="relative h-24 w-20 shrink-0 overflow-hidden">
                <Image src="/images/MohamedA01.jpg" alt={t.ui.home.heroPhotoAlt} fill sizes="80px" className="object-cover" />
              </div>
              <TextLink href="/get-involved#donate" tone="light">
                {t.ui.home.ctaSecondary}
              </TextLink>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
