"use client";

import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { StatusBadge } from "@/components/ui/Status";
import { useContent } from "@/content/useContent";
import { useLanguage } from "@/i18n/LanguageProvider";

export function VisionContent() {
  const { t } = useLanguage();
  const { visionPillars, visionIntro } = useContent();

  return (
    <>
      <PageHero
        kicker={t.ui.vision.kicker}
        title={t.ui.vision.title}
        intro={t.ui.vision.intro}
        image="/images/desert-expanse.jpg"
        imageAlt={t.ui.vision.imageAlt}
      />

      <section className="bg-sand-50 py-12 sm:py-16 lg:py-20">
        <Container width="wide">
          <div className="mx-auto max-w-3xl">
            <p className="text-base leading-relaxed text-ink-700 sm:text-lg">
              {visionIntro}
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:gap-6 lg:mt-14 lg:grid-cols-2">
            {visionPillars.map((p, i) => (
              <Reveal key={p.id} as="article" delay={(i % 2) * 90}>
                <div className="flex h-full flex-col rounded-2xl border border-line bg-sand-50 p-6 transition-shadow hover:shadow-md sm:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <span className="font-display text-4xl font-semibold leading-none text-ochre-400 sm:text-5xl">
                      {p.number}
                    </span>
                    <StatusBadge status={p.status} />
                  </div>
                  <h2 className="mt-5 font-display text-xl font-semibold tracking-tight text-ink-900 sm:text-2xl">
                    {p.title}
                  </h2>
                  <p className="mt-2 font-medium text-flag-green-dark">{p.promise}</p>
                  <ul className="mt-5 space-y-3 border-t border-line pt-5">
                    {p.points.map((pt, j) => {
                      const isDraftMarker = pt.startsWith("[DRAFT") || pt.startsWith("[RASIMU");
                      return (
                        <li key={j} className="flex gap-3 text-sm leading-relaxed">
                          <span
                            aria-hidden="true"
                            className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${
                              isDraftMarker ? "bg-ochre-500" : "bg-flag-green"
                            }`}
                          />
                          <span className={isDraftMarker ? "italic text-ink-500" : "text-ink-700"}>
                            {pt}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-line bg-sand-100 p-6 text-center sm:p-8 lg:mt-14">
            <h2 className="font-display text-xl font-semibold text-ink-900 sm:text-2xl">
              {t.ui.vision.helpHeading}
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-ink-600">{t.ui.vision.helpBody}</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
              <Button href="/get-involved" variant="gold">
                {t.ui.vision.helpCtaPriorities}
              </Button>
              <Button href="/wards" variant="outline">
                {t.ui.vision.helpCtaCounty}
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
