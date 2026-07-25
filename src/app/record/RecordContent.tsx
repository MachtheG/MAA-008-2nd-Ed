"use client";

import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Kicker } from "@/components/ui/Kicker";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { StatusBadge } from "@/components/ui/Status";
import { useContent } from "@/content/useContent";
import { useLanguage } from "@/i18n/LanguageProvider";

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path
        d="M3.5 9.5l3.5 3.5 7.5-8"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function RecordContent() {
  const { t } = useLanguage();
  const { recordVerified, countyAchievements, profile } = useContent();

  return (
    <>
      <PageHero
        kicker={t.ui.record.kicker}
        title={t.ui.record.title}
        intro={t.ui.record.intro}
      />

      <section className="bg-sand-50 py-12 sm:py-16 lg:py-24">
        <Container>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <Kicker>{t.ui.record.nationalKicker}</Kicker>
            <StatusBadge status="verified" />
          </div>

          <div className="mt-8 grid gap-5 sm:mt-10 sm:grid-cols-2">
            {recordVerified.map((r, i) => (
              <Reveal key={r.title} as="article" delay={(i % 2) * 80}>
                <div className="flex h-full gap-4 rounded-2xl border border-line bg-sand-50 p-5 transition-shadow hover:shadow-md sm:p-6">
                  <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-flag-green/10 text-flag-green-dark">
                    <CheckIcon />
                  </span>
                  <div className="min-w-0">
                    <h2 className="font-display text-lg font-semibold text-ink-900">
                      {r.title}
                    </h2>
                    <p className="mt-1 text-sm leading-relaxed text-ink-600">
                      {r.detail}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Education & languages */}
          <div className="mt-10 grid gap-6 rounded-2xl border border-line bg-sand-100 p-6 sm:grid-cols-2 sm:p-9 lg:mt-12">
            <div>
              <Kicker tone="ochre">{t.ui.record.educationKicker}</Kicker>
              <ul className="mt-4 space-y-3">
                {profile.education.map((e) => (
                  <li key={e.degree}>
                    <p className="font-display text-base font-semibold text-ink-900">
                      {e.degree}
                    </p>
                    <p className="text-sm text-ink-500">{e.institution}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Kicker tone="ochre">{t.ui.record.languagesKicker}</Kicker>
              <ul className="mt-4 flex flex-wrap gap-2">
                {profile.languages.map((l) => (
                  <li
                    key={l}
                    className="rounded-full bg-flag-green/10 px-3.5 py-1.5 text-sm font-medium text-flag-green-dark"
                  >
                    {l}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* County record */}
          <div className="mt-10 lg:mt-12">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <Kicker tone="ochre">{t.ui.record.countyKicker}</Kicker>
              <StatusBadge status="verified" />
            </div>
            <div className="mt-8 grid gap-5 sm:mt-10 sm:grid-cols-2">
              {countyAchievements.map((r, i) => (
                <Reveal key={r.title} as="article" delay={(i % 2) * 80}>
                  <div className="flex h-full gap-4 rounded-2xl border border-line bg-sand-100 p-5 transition-shadow hover:shadow-md sm:p-6">
                    <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-ochre-400/10 text-ochre-600">
                      <CheckIcon />
                    </span>
                    <div className="min-w-0">
                      <h2 className="font-display text-lg font-semibold text-ink-900">
                        {r.title}
                      </h2>
                      <p className="mt-1 text-sm leading-relaxed text-ink-600">
                        {r.detail}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-3 lg:mt-12">
            <Button href="/story" variant="outline">{t.ui.record.ctaStory}</Button>
            <Button href="/vision" variant="gold">{t.ui.record.ctaVision}</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
