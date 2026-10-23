"use client";

import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { StatusBadge } from "@/components/ui/Status";
import { Button } from "@/components/ui/Button";
import { useContent } from "@/content/useContent";
import { useLanguage } from "@/i18n/LanguageProvider";

export function NewsContent() {
  const { t } = useLanguage();
  const { newsItems } = useContent();

  return (
    <>
      <PageHero
        kicker={t.ui.news.kicker}
        title={t.ui.news.title}
        intro={t.ui.news.intro}
      />

      <section className="bg-sand-50 py-12 sm:py-16 lg:py-20">
        <Container width="wide">
          <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {newsItems.map((item) => (
              <article
                key={item.id}
                className="flex flex-col overflow-hidden rounded-2xl border border-line bg-sand-50"
              >
                <div className="relative aspect-[16/10] bg-linear-to-br from-sand-200 to-sand-300">
                  <span className="absolute left-4 top-4 rounded-full bg-ink-900/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-sand-50">
                    {item.kind === "News" ? t.ui.news.kindNews : t.ui.news.kindEvent}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-ink-500 sm:gap-3">
                    <span className="font-semibold uppercase tracking-wide">
                      {item.date}
                    </span>
                    <StatusBadge status={item.status} />
                  </div>
                  <h2 className="mt-3 font-display text-lg font-semibold leading-snug text-ink-900">
                    {item.title}
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-600">
                    {item.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-line bg-sand-100 p-6 text-center sm:p-8 lg:mt-12">
            <h2 className="font-display text-xl font-semibold text-ink-900 sm:text-2xl">
              {t.ui.news.updatesHeading}
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-ink-600">
              {t.ui.news.updatesBody}
            </p>
            <div className="mt-6">
              <Button href="/get-involved" variant="accent">
                {t.ui.news.updatesCta}
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
