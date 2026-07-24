import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Kicker } from "@/components/ui/Kicker";
import { Reveal } from "@/components/ui/Reveal";
import { PhotoSlot } from "@/components/ui/PhotoSlot";
import { Button } from "@/components/ui/Button";
import { StatusBadge } from "@/components/ui/Status";
import { storyChapters, storyIntro, timeline } from "@/content/candidate";

export const metadata: Metadata = {
  title: "The Story",
  description:
    "From a Wajir childhood to Parliament, the embassy in Mogadishu and the Horn of Africa's peace and refugee negotiations — the story of Mohamed Abdi Affey.",
};

export default function StoryPage() {
  return (
    <>
      <PageHero
        kicker="The Story"
        title="A life of service — from Wajir to the world, and back."
        intro={storyIntro}
        image="/images/highlands.jpg"
        imageAlt="Warm, eroded highlands of Kenya's arid north."
      />

      {/* Narrative chapters */}
      <section className="bg-sand-50 py-16 sm:py-24">
        <Container width="wide">
          <div className="mx-auto max-w-5xl space-y-20 sm:space-y-28">
            {storyChapters.map((ch, i) => {
              const flip = i % 2 === 1;
              return (
                <Reveal key={ch.id} as="article">
                  <div
                    className={`grid items-center gap-8 lg:grid-cols-12 lg:gap-14 ${
                      flip ? "" : ""
                    }`}
                  >
                    <div className={`lg:col-span-7 ${flip ? "lg:order-2" : ""}`}>
                      <div className="flex items-center gap-3">
                        <Kicker tone={flip ? "ochre" : "green"}>{ch.eyebrow}</Kicker>
                        {ch.status !== "verified" && <StatusBadge status={ch.status} />}
                      </div>
                      <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink-900 sm:text-[2.4rem] sm:leading-[1.08]">
                        {ch.heading}
                      </h2>
                      <div className="mt-5 space-y-4 text-lg leading-relaxed text-ink-700">
                        {ch.body.map((p, j) => (
                          <p key={j}>{p}</p>
                        ))}
                      </div>
                    </div>
                    <div className={`lg:col-span-5 ${flip ? "lg:order-1" : ""}`}>
                      <PhotoSlot
                        src={ch.image}
                        alt={ch.heading}
                        ratio="5/4"
                        caption={`Photo for "${ch.heading}" — supply archival or campaign imagery.`}
                        className="shadow-lg"
                      />
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section className="border-t border-line bg-sand-100 py-16 sm:py-24">
        <Container width="wide">
          <div className="mx-auto max-w-3xl">
            <Kicker>The record, in brief</Kicker>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
              Thirty years, at a glance
            </h2>

            <ol className="relative mt-12">
              <span
                aria-hidden="true"
                className="absolute bottom-2 left-[7px] top-2 w-px bg-gradient-to-b from-flag-green via-ochre-500 to-flag-red"
              />
              {timeline.map((item, i) => (
                <Reveal key={item.id} as="li" delay={i * 50} className="relative mb-9 pl-9 last:mb-0">
                  <span
                    aria-hidden="true"
                    className={`absolute left-0 top-1.5 grid h-[15px] w-[15px] place-items-center rounded-full ring-4 ring-sand-100 ${
                      item.status === "verified" ? "bg-flag-green" : item.status === "draft" ? "bg-ochre-500" : "bg-flag-red"
                    }`}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-sand-50" />
                  </span>
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className="font-display text-sm font-semibold tabular-nums text-flag-green-dark">
                      {item.year}
                    </span>
                    <h3 className="font-display text-lg font-semibold text-ink-900">
                      {item.title}
                    </h3>
                    {item.status !== "verified" && <StatusBadge status={item.status} />}
                  </div>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-600">
                    {item.detail}
                  </p>
                </Reveal>
              ))}
            </ol>

            <div className="mt-12 flex flex-wrap gap-3">
              <Button href="/vision" variant="gold">See the vision for Wajir</Button>
              <Button href="/record" variant="outline">The full record</Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
