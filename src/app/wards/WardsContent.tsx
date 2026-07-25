"use client";

import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { WajirMap } from "@/components/wards/WajirMap";
import { useLanguage } from "@/i18n/LanguageProvider";

export function WardsContent() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero
        kicker={t.ui.wards.kicker}
        title={t.ui.wards.title}
        intro={t.ui.wards.intro}
      />

      <section className="bg-sand-50 py-12 sm:py-16 lg:py-20">
        <Container width="wide">
          <WajirMap />
        </Container>
      </section>
    </>
  );
}
