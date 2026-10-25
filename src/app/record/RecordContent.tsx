"use client";

import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/lib/motion";
import { Button } from "@/components/ui/Button";
import { StatusBadge } from "@/components/ui/Status";
import { useContent } from "@/content/useContent";
import { useLanguage } from "@/i18n/LanguageProvider";

export function RecordContent() {
  const { t } = useLanguage();
  const { recordVerified, countyAchievements, profile } = useContent();

  return (
    <>
      <PageHero title={t.ui.record.title} intro={t.ui.record.intro} />

      {/* National & international record — a ledger list, not icon cards:
          told apart by space and a change of scale, not a hairline or a
          circle-badge checkmark (house rule: no icon-topped cards). */}
      <section className="bg-bg py-16 sm:py-20 lg:py-28">
        <Container width="wide">
          <div className="flex flex-wrap items-center gap-3">
            <h2 className="font-display text-head font-semibold text-ink">{t.ui.record.nationalKicker}</h2>
            <StatusBadge status="verified" />
          </div>

          <ul className="mt-10 divide-y divide-sand-200">
            {recordVerified.map((r, i) => (
              <Reveal key={r.title} as="li" delay={i * 60} className="grid gap-1 py-6 first:pt-0 sm:grid-cols-[1fr_2fr] sm:gap-8 sm:py-7">
                <h3 className="font-display text-lg font-semibold text-ink sm:text-xl">{r.title}</h3>
                <p className="text-body leading-relaxed text-ink-700">{r.detail}</p>
              </Reveal>
            ))}
          </ul>

          {/* Education & languages */}
          <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:mt-20">
            <div>
              <h2 className="font-display text-lg font-semibold text-flag-green-dark">{t.ui.record.educationKicker}</h2>
              <ul className="mt-4 space-y-3">
                {profile.education.map((e) => (
                  <li key={e.degree}>
                    <p className="font-display text-base font-semibold text-ink">{e.degree}</p>
                    <p className="text-sm text-muted">{e.institution}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display text-lg font-semibold text-flag-green-dark">{t.ui.record.languagesKicker}</h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {profile.languages.map((l) => (
                  <li key={l} className="bg-flag-green/10 px-3.5 py-1.5 text-sm font-medium text-flag-green-dark">
                    {l}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* County record — a tone step apart from the national section, not
          a line. countyAchievements carries specific figures but no
          verification status field in the content source (unlike the
          rest of the site's content), so this heading discloses that
          plainly rather than silently matching the "Verified" badge
          above it. */}
      <section className="bg-surface py-16 sm:py-20 lg:py-28">
        <Container width="wide">
          <h2 className="font-display text-head font-semibold text-ink">{t.ui.record.countyKicker}</h2>
          <p className="mt-3 max-w-[60ch] text-sm text-muted">{t.ui.record.countyNote}</p>

          <ul className="mt-10 divide-y divide-sand-300">
            {countyAchievements.map((r, i) => (
              <Reveal key={r.title} as="li" delay={i * 60} className="grid gap-1 py-6 first:pt-0 sm:grid-cols-[1fr_2fr] sm:gap-8 sm:py-7">
                <h3 className="font-display text-lg font-semibold text-ink sm:text-xl">{r.title}</h3>
                <p className="text-body leading-relaxed text-ink-700">{r.detail}</p>
              </Reveal>
            ))}
          </ul>

          <div className="mt-12 flex flex-wrap gap-3 lg:mt-16">
            <Button href="/story" variant="primary">{t.ui.record.ctaStory}</Button>
            <Button href="/vision" variant="accent">{t.ui.record.ctaVision}</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
