"use client";

import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { StatusBadge } from "@/components/ui/Status";
import { Button } from "@/components/ui/Button";
import { RevealGroup } from "@/lib/motion";
import { useContent } from "@/content/useContent";
import { useLanguage } from "@/i18n/LanguageProvider";

export function NewsContent() {
  const { t } = useLanguage();
  const { newsItems } = useContent();

  return (
    <>
      <PageHero title={t.ui.news.title} intro={t.ui.news.intro} />

      {/* "list" blueprint — rows, not a card grid with a placeholder-
          gradient thumbnail. No honest photograph exists for any of
          these sample items, so the list stays text: real content at
          readable size beats an invented picture (laws of the craft). */}
      <section className="bg-bg py-16 sm:py-20 lg:py-24">
        <Container width="wide">
          <RevealGroup as="ul" stagger={60} className="divide-y divide-sand-200">
            {newsItems.map((item) => (
              <li key={item.id} className="grid gap-2 py-7 first:pt-0 sm:grid-cols-[9rem_1fr] sm:gap-8 lg:grid-cols-[11rem_1fr]">
                <div className="flex flex-row items-center gap-2 sm:flex-col sm:items-start sm:gap-1.5">
                  <span className="font-display text-sm font-semibold tabular-nums text-flag-green-dark">{item.date}</span>
                  <span className="text-xs font-medium text-muted">
                    {item.kind === "News" ? t.ui.news.kindNews : t.ui.news.kindEvent}
                  </span>
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="font-display text-xl font-semibold text-ink">{item.title}</h2>
                    <StatusBadge status={item.status} />
                  </div>
                  <p className="mt-2 max-w-[65ch] text-body leading-relaxed text-ink-700">{item.excerpt}</p>
                </div>
              </li>
            ))}
          </RevealGroup>

          <div className="mt-16 bg-field-ochre px-6 py-12 text-center text-field-ochre-ink sm:px-10 sm:py-16 lg:mt-20">
            <h2 className="font-display text-head font-semibold">{t.ui.news.updatesHeading}</h2>
            <p className="mx-auto mt-4 max-w-xl text-body opacity-90">{t.ui.news.updatesBody}</p>
            <div className="mt-8">
              <Button href="/get-involved" variant="primary">{t.ui.news.updatesCta}</Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
