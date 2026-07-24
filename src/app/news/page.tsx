import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { StatusBadge } from "@/components/ui/Status";
import { Button } from "@/components/ui/Button";
import { newsItems } from "@/content/candidate";

export const metadata: Metadata = {
  title: "News & Events",
  description:
    "The latest from the campaign — statements, coverage, rallies, town-halls and community meetings across Wajir County.",
};

export default function NewsPage() {
  return (
    <>
      <PageHero
        kicker="News & Events"
        title="From the campaign trail across Wajir."
        intro="Statements, press coverage and upcoming events — rallies, town-halls and community meetings, ward by ward."
      />

      <section className="bg-sand-50 py-14 sm:py-20">
        <Container width="wide">
          <div className="grid gap-6 md:grid-cols-3">
            {newsItems.map((item) => (
              <article
                key={item.id}
                className="flex flex-col overflow-hidden rounded-2xl border border-line bg-sand-50"
              >
                <div className="relative aspect-[16/10] bg-gradient-to-br from-sand-200 to-sand-300">
                  <span className="absolute left-4 top-4 rounded-full bg-ink-900/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-sand-50">
                    {item.kind}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3 text-xs text-ink-500">
                    <span className="font-semibold uppercase tracking-wide">{item.date}</span>
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

          <div className="mt-12 rounded-2xl border border-line bg-sand-100 p-8 text-center">
            <h2 className="font-display text-2xl font-semibold text-ink-900">
              Never miss an update
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-ink-600">
              Sign up to hear about events in your ward and news from the campaign.
            </p>
            <div className="mt-6">
              <Button href="/get-involved" variant="gold">Join the campaign</Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
