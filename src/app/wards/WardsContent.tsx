"use client";

import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { WajirMap } from "@/components/wards/WajirMap";
import { useLanguage } from "@/i18n/LanguageProvider";

export function WardsContent() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero title={t.ui.wards.title} intro={t.ui.wards.intro} />

      <section className="bg-bg py-16 sm:py-20 lg:py-24">
        <Container width="wide">
          <WajirMap />
        </Container>
      </section>
    </>
  );
}
