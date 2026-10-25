"use client";

import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/lib/motion";
import { PhotoSlot } from "@/components/ui/PhotoSlot";
import { Button } from "@/components/ui/Button";
import { StatusBadge } from "@/components/ui/Status";
import { useContent } from "@/content/useContent";
import { useLanguage } from "@/i18n/LanguageProvider";

export function StoryContent() {
  const { t } = useLanguage();
  const { storyChapters, storyIntro, timeline } = useContent();

  return (
    <>
      <PageHero
        title={t.ui.story.title}
        intro={storyIntro}
        image="/images/highlands.jpg"
        imageAlt={t.ui.story.imageAlt}
      />

      {/* Narrative chapters — "about" blueprint repeated as the page's own
          chapters: text and photo alternate sides, no card, no border. */}
      <section className="bg-bg py-16 sm:py-20 lg:py-28">
        <Container width="wide">
          <div className="mx-auto max-w-5xl space-y-16 sm:space-y-24 lg:space-y-32">
            {storyChapters.map((ch, i) => {
              const flip = i % 2 === 1;
              return (
                <Reveal key={ch.id} as="article">
                  <div className="grid items-center gap-6 sm:gap-8 lg:grid-cols-12 lg:gap-14">
                    <div className={`lg:col-span-7 ${flip ? "lg:order-2" : ""}`}>
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                        <p className="font-display text-base font-semibold text-flag-green-dark">{ch.eyebrow}</p>
                        {ch.status !== "verified" && <StatusBadge status={ch.status} />}
                      </div>
                      <h2 className="mt-3 font-display text-xl font-semibold tracking-tight text-balance text-ink sm:text-2xl lg:text-[2rem] lg:leading-[1.1]">
                        {ch.heading}
                      </h2>
                      <div className="mt-5 space-y-4 text-body leading-relaxed text-ink-700">
                        {ch.body.map((p, j) => (
                          <p key={j}>{p}</p>
                        ))}
                      </div>
                    </div>
                    <div className={`lg:col-span-5 ${flip ? "lg:order-1" : ""}`}>
                      <PhotoSlot src={ch.image} alt={ch.heading} ratio="5/4" className="w-full" />
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Timeline — the one place a thin vertical rule is legitimate: a
          real ordered list (<ol>), not a decorative hairline. */}
      <section className="bg-field-dossier py-16 text-field-dossier-ink sm:py-20 lg:py-28">
        <Container width="wide">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-display text-head font-semibold">{t.ui.story.timelineHeading}</h2>

            <ol className="relative mt-12 sm:mt-14">
              <span aria-hidden="true" className="absolute bottom-2 left-1.75 top-2 w-px bg-sand-50/20" />
              {timeline.map((item, i) => (
                <Reveal key={item.id} as="li" delay={i * 50} className="relative mb-9 pl-9 last:mb-0">
                  <span
                    aria-hidden="true"
                    className={`absolute left-0 top-1.5 grid h-[15px] w-[15px] place-items-center rounded-full ${
                      item.status === "verified"
                        ? "bg-flag-green"
                        : item.status === "draft"
                          ? "bg-ochre-500"
                          : "bg-flag-red"
                    }`}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-field-dossier" />
                  </span>
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className="font-display text-sm font-semibold tabular-nums text-ochre-300">{item.year}</span>
                    <h3 className="font-display text-lg font-semibold text-sand-50">{item.title}</h3>
                    {item.status !== "verified" && <StatusBadge status={item.status} />}
                  </div>
                  <p className="mt-1.5 text-sm leading-relaxed text-sand-100/75">{item.detail}</p>
                </Reveal>
              ))}
            </ol>

            <div className="mt-10 flex flex-wrap gap-3 sm:mt-12">
              <Button href="/vision" variant="accent">{t.ui.story.ctaVision}</Button>
              <Button href="/record" variant="ghost-on-dark">{t.ui.story.ctaRecord}</Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
