"use client";

import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageProvider";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { StatusBadge } from "@/components/ui/Status";

export function HomeHero() {
  const { t } = useLanguage();

  return (
    <section className="relative isolate overflow-hidden bg-ink-900 text-sand-50">
      {/* Background photograph (Wajir County Government Office) */}
      <Image
        src="/images/WajirGoffice.jpg"
        alt="Wajir County Government Office — the seat of county administration."
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* Scrims for legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/75 to-ink-900/45" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink-900/80 via-transparent to-transparent" aria-hidden="true" />

      <Container className="relative flex min-h-[86vh] flex-col justify-end pb-16 pt-28 sm:pb-20">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2.5 rounded-full border border-sand-50/25 bg-sand-50/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-sand-100 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-ochre-400" />
            {t.hero.kicker}
          </p>

          <h1 className="mt-6 font-display font-semibold tracking-tight text-sand-50">
            <span
              className="block text-balance"
              style={{ fontSize: "var(--text-mega)", lineHeight: "var(--text-mega--line-height)" }}
            >
              {t.hero.name}
            </span>
            <span className="mt-4 block font-display text-2xl font-medium italic text-ochre-300 sm:text-3xl">
              {t.hero.forOffice}
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-sand-100/90">
            {t.hero.lead}
          </p>

          {/* Campaign slogan */}
          <div className="mt-6 inline-flex items-center gap-3 rounded-lg border border-ochre-400/30 bg-ochre-400/10 px-3.5 py-2.5 text-sm backdrop-blur-sm">
            <span className="text-ochre-300 font-semibold">Central promise:</span>
            <span className="text-sand-100">
              Wajir First, Always.
            </span>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button href="/vision" variant="gold" size="lg">
              {t.hero.ctaPrimary}
            </Button>
            <Button href="/get-involved" size="lg" variant="outline" className="border-sand-50/40 text-sand-50 hover:bg-sand-50/10">
              {t.hero.ctaSecondary}
            </Button>
          </div>
        </div>

        {/* At-a-glance strip */}
        <dl className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-sand-50/15 bg-sand-50/10 sm:grid-cols-3">
          {t.credibility.items.map((item, i) => (
            <div key={i} className="bg-ink-900/40 px-5 py-5 backdrop-blur-sm">
              <dt className="font-display text-3xl font-semibold text-ochre-300">
                {item.value}
              </dt>
              <dd className="mt-1 text-sm text-sand-100/80">{item.label}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
