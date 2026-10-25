"use client";

import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/lib/motion";
import { Button } from "@/components/ui/Button";
import { StatusBadge } from "@/components/ui/Status";
import { useContent } from "@/content/useContent";
import { useLanguage } from "@/i18n/LanguageProvider";

/**
 * Six pillars as six full-bleed chapters — "colour by chapter"
 * (motion.md's signature-move table): the whole ground changes at each
 * pillar, hard cuts, no card, no grid. Distinct from the Home page's
 * pinned-heading teaser of the same six pillars, so the two pages don't
 * repeat one composition for one subject.
 */
const FIELDS = [
  "bg-field-paper text-field-paper-ink",
  "bg-field-green text-field-green-ink",
  "bg-field-ochre text-field-ochre-ink",
  "bg-field-dossier text-field-dossier-ink",
  "bg-field-paper text-field-paper-ink",
  "bg-field-green text-field-green-ink",
];

export function VisionContent() {
  const { t } = useLanguage();
  const { visionPillars, visionIntro } = useContent();

  return (
    <>
      <PageHero title={t.ui.vision.title} intro={t.ui.vision.intro} image="/images/desert-expanse.jpg" imageAlt={t.ui.vision.imageAlt} />

      <div className="bg-bg py-10 sm:py-12">
        <Container width="wide">
          <p className="max-w-[60ch] text-lead leading-[1.35] text-ink-700">{visionIntro}</p>
          <div className="mt-5 flex items-center gap-2">
            <StatusBadge status="draft" />
            <span className="text-sm text-muted">{t.ui.home.draftNotice}</span>
          </div>
        </Container>
      </div>

      {visionPillars.map((p, i) => (
        <section key={p.id} className={FIELDS[i % FIELDS.length]}>
          <Container width="wide" className="py-16 sm:py-20 lg:py-28">
            <div className="grid gap-8 lg:grid-cols-12 lg:gap-14">
              <Reveal as="div" className="lg:col-span-5">
                <h2 className="font-display text-head font-semibold leading-[1.05]" style={{ letterSpacing: "-0.02em" }}>
                  {p.title}
                </h2>
                <p className="mt-4 text-lead font-medium leading-[1.3] opacity-90">{p.promise}</p>
              </Reveal>
              <Reveal as="ul" delay={90} className="space-y-4 lg:col-span-7">
                {p.points.map((pt, j) => {
                  const isDraft = pt.startsWith("[DRAFT") || pt.startsWith("[RASIMU");
                  return (
                    <li key={j} className={`text-body leading-relaxed ${isDraft ? "italic opacity-70" : "opacity-90"}`}>
                      {pt}
                    </li>
                  );
                })}
              </Reveal>
            </div>
          </Container>
        </section>
      ))}

      <section className="bg-bg py-16 sm:py-20 lg:py-24">
        <Container width="prose" className="text-center">
          <h2 className="font-display text-head font-semibold text-ink">{t.ui.vision.helpHeading}</h2>
          <p className="mx-auto mt-4 max-w-xl text-body text-ink-700">{t.ui.vision.helpBody}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
            <Button href="/get-involved" variant="accent">{t.ui.vision.helpCtaPriorities}</Button>
            <Button href="/wards" variant="primary">{t.ui.vision.helpCtaCounty}</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
