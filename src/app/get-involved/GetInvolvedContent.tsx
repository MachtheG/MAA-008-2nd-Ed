"use client";

import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Kicker } from "@/components/ui/Kicker";
import { VolunteerForm } from "@/components/forms/VolunteerForm";
import { DonateWidget } from "@/components/forms/DonateWidget";
import { useLanguage } from "@/i18n/LanguageProvider";

export function GetInvolvedContent() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero
        kicker={t.ui.getInvolved.kicker}
        title={t.ui.getInvolved.title}
        intro={t.ui.getInvolved.intro}
      />

      {/* Volunteer */}
      <section className="bg-sand-50 py-12 sm:py-16 lg:py-20">
        <Container width="wide">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div className="lg:pt-4">
              <Kicker>{t.ui.getInvolved.volunteerKicker}</Kicker>
              <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight text-ink-900 sm:text-3xl lg:text-4xl">
                {t.ui.getInvolved.volunteerHeading}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-ink-700 sm:text-lg">
                {t.ui.getInvolved.volunteerBody}
              </p>
              <ul className="mt-6 space-y-3 text-ink-600">
                {t.ui.getInvolved.volunteerBullets.map((x) => (
                  <li key={x} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-flag-green" />
                    {x}
                  </li>
                ))}
              </ul>
            </div>
            <VolunteerForm />
          </div>
        </Container>
      </section>

      {/* Donate */}
      <section
        id="donate"
        className="scroll-mt-24 border-t border-line bg-sand-100 py-12 sm:py-16 lg:py-24"
      >
        <Container width="wide">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <div className="lg:pt-4">
              <Kicker tone="ochre">{t.ui.getInvolved.donateKicker}</Kicker>
              <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight text-ink-900 sm:text-3xl lg:text-4xl">
                {t.ui.getInvolved.donateHeading}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-ink-700 sm:text-lg">
                {t.ui.getInvolved.donateBody}
              </p>
              <div className="mt-6 rounded-xl border border-line bg-sand-50 p-5 text-sm leading-relaxed text-ink-600">
                <p className="font-semibold text-ink-800">
                  {t.ui.getInvolved.transparencyTitle}
                </p>
                <p className="mt-1">{t.ui.getInvolved.transparencyBody}</p>
              </div>
            </div>
            <DonateWidget />
          </div>
        </Container>
      </section>
    </>
  );
}
