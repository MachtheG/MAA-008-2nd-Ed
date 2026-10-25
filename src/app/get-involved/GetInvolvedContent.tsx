"use client";

import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { VolunteerForm } from "@/components/forms/VolunteerForm";
import { DonateWidget } from "@/components/forms/DonateWidget";
import { Reveal } from "@/lib/motion";
import { useLanguage } from "@/i18n/LanguageProvider";

export function GetInvolvedContent() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero title={t.ui.getInvolved.title} intro={t.ui.getInvolved.intro} />

      {/* Volunteer */}
      <section className="bg-bg py-16 sm:py-20 lg:py-28">
        <Container width="wide">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <Reveal as="div" className="lg:pt-4">
              <h2 className="font-display text-head font-semibold tracking-tight text-ink">
                {t.ui.getInvolved.volunteerHeading}
              </h2>
              <p className="mt-5 text-body leading-relaxed text-ink-700">{t.ui.getInvolved.volunteerBody}</p>
              <ul className="mt-6 space-y-3 text-ink-700">
                {t.ui.getInvolved.volunteerBullets.map((x) => (
                  <li key={x} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-flag-green" />
                    {x}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={90}>
              <VolunteerForm />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Donate */}
      <section id="donate" className="scroll-mt-24 bg-field-dossier py-16 text-field-dossier-ink sm:py-20 lg:py-28">
        <Container width="wide">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <Reveal as="div" className="lg:pt-4">
              <h2 className="font-display text-head font-semibold tracking-tight">{t.ui.getInvolved.donateHeading}</h2>
              <p className="mt-5 text-body leading-relaxed text-sand-100/85">{t.ui.getInvolved.donateBody}</p>
              <div className="mt-6 bg-sand-50/8 p-5 text-sm leading-relaxed text-sand-100/80">
                <p className="font-semibold text-sand-50">{t.ui.getInvolved.transparencyTitle}</p>
                <p className="mt-1">{t.ui.getInvolved.transparencyBody}</p>
              </div>
            </Reveal>
            <Reveal delay={90}>
              <DonateWidget />
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
