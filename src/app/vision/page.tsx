import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { StatusBadge } from "@/components/ui/Status";
import { visionPillars, visionIntro } from "@/content/candidate";

export const metadata: Metadata = {
  title: "Vision for Wajir",
  description:
    "A draft framework of priorities for Wajir County — water, livestock, health, education, roads, and peace — for the campaign to review and approve.",
};

export default function VisionPage() {
  return (
    <>
      <PageHero
        kicker="Vision for Wajir"
        title="What experience could build, applied at home."
        intro="Six priorities for a stronger, better-served Wajir County — grounded in the realities of an arid land and a proud pastoral economy."
        image="/images/desert-expanse.jpg"
        imageAlt="An open semi-arid expanse under a wide sky."
      />

      <section className="bg-sand-50 py-14 sm:py-20">
        <Container width="wide">
          <div className="mx-auto max-w-3xl">
            <p className="text-lg leading-relaxed text-ink-700">{visionIntro}</p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {visionPillars.map((p, i) => (
              <Reveal key={p.id} as="article" delay={(i % 2) * 90}>
                <div className="flex h-full flex-col rounded-2xl border border-line bg-sand-50 p-7 transition-shadow hover:shadow-md sm:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <span className="font-display text-5xl font-semibold leading-none text-ochre-400">
                      {p.number}
                    </span>
                    <StatusBadge status={p.status} />
                  </div>
                  <h2 className="mt-5 font-display text-2xl font-semibold tracking-tight text-ink-900">
                    {p.title}
                  </h2>
                  <p className="mt-2 font-medium text-flag-green-dark">{p.promise}</p>
                  <ul className="mt-5 space-y-3 border-t border-line pt-5">
                    {p.points.map((pt, j) => {
                      const isDraftMarker = pt.startsWith("[DRAFT");
                      return (
                        <li key={j} className="flex gap-3 text-sm leading-relaxed">
                          <span
                            aria-hidden="true"
                            className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${isDraftMarker ? "bg-ochre-500" : "bg-flag-green"}`}
                          />
                          <span className={isDraftMarker ? "italic text-ink-500" : "text-ink-700"}>
                            {pt}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mx-auto mt-14 max-w-3xl rounded-2xl border border-line bg-sand-100 p-8 text-center">
            <h2 className="font-display text-2xl font-semibold text-ink-900">
              Help shape these priorities
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-ink-600">
              The final platform will be built with the people of Wajir. Tell us
              what matters most in your ward.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Button href="/get-involved" variant="gold">Share your priorities</Button>
              <Button href="/wards" variant="outline">Explore the county</Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
