import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Kicker } from "@/components/ui/Kicker";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { StatusBadge } from "@/components/ui/Status";
import { recordVerified, countyAchievements, profile } from "@/content/candidate";

export const metadata: Metadata = {
  title: "The Record",
  description:
    "A verified record of national and international public service — Parliament, foreign affairs, the embassy in Somalia, and Special Envoy roles across the Horn of Africa.",
};

export default function RecordPage() {
  return (
    <>
      <PageHero
        kicker="The Record"
        title="A verified record of service — at home and on the world stage."
        intro="Every entry below is drawn from Mohamed Abdi Affey's confirmed public record. Nothing here is invented; county-level items awaiting sourcing are clearly marked."
      />

      <section className="bg-sand-50 py-16 sm:py-24">
        <Container>
          <div className="flex items-center gap-3">
            <Kicker>National &amp; international</Kicker>
            <StatusBadge status="verified" />
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {recordVerified.map((r, i) => (
              <Reveal key={r.title} as="article" delay={(i % 2) * 80}>
                <div className="flex h-full gap-4 rounded-2xl border border-line bg-sand-50 p-6 transition-shadow hover:shadow-md">
                  <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-flag-green/10 text-flag-green-dark">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                      <path d="M3.5 9.5l3.5 3.5 7.5-8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <div>
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
          <div className="mt-12 grid gap-6 rounded-2xl border border-line bg-sand-100 p-7 sm:grid-cols-2 sm:p-9">
            <div>
              <Kicker tone="ochre">Education</Kicker>
              <ul className="mt-4 space-y-3">
                {profile.education.map((e) => (
                  <li key={e.degree}>
                    <p className="font-display text-base font-semibold text-ink-900">{e.degree}</p>
                    <p className="text-sm text-ink-500">{e.institution}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Kicker tone="ochre">Languages</Kicker>
              <ul className="mt-4 flex flex-wrap gap-2">
                {profile.languages.map((l) => (
                  <li key={l} className="rounded-full bg-flag-green/10 px-3.5 py-1.5 text-sm font-medium text-flag-green-dark">
                    {l}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* County record */}
          <div className="mt-12">
            <div className="flex items-center gap-3">
              <Kicker tone="ochre">Wajir County record</Kicker>
              <StatusBadge status="verified" />
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {countyAchievements.map((r, i) => (
                <Reveal key={r.title} as="article" delay={(i % 2) * 80}>
                  <div className="flex h-full gap-4 rounded-2xl border border-line bg-sand-100 p-6 transition-shadow hover:shadow-md">
                    <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-ochre-400/10 text-ochre-600">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                        <path d="M3.5 9.5l3.5 3.5 7.5-8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <div>
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

          <div className="mt-12 flex flex-wrap gap-3">
            <Button href="/story" variant="outline">Read the full story</Button>
            <Button href="/vision" variant="gold">The vision for Wajir</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
