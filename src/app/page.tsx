import Link from "next/link";
import { HomeHero } from "@/components/home/HomeHero";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { PhotoSlot } from "@/components/ui/PhotoSlot";
import { StatusBadge } from "@/components/ui/Status";
import { visionPillars, storyIntro } from "@/content/candidate";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <VisionTeaser />
      <StoryTeaser />
      <PullQuote />
      <CtaBand />
    </>
  );
}

/* --------------------------------------------------------------- */

function VisionTeaser() {
  const featured = visionPillars.slice(0, 3);
  return (
    <section className="bg-sand-50 bg-topo py-20 sm:py-28">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <Kicker>A vision for Wajir</Kicker>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink-900 sm:text-[2.75rem] sm:leading-[1.05]">
              Experience earned at the world&apos;s tables, put to work at home.
            </h2>
          </div>
          <Button href="/vision" variant="outline" className="shrink-0">
            See all priorities →
          </Button>
        </div>

        <div className="mt-4 flex items-center gap-2 text-sm text-ink-500">
          <StatusBadge status="draft" />
          <span>Draft priorities shown for direction — pending campaign approval.</span>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {featured.map((p, i) => (
            <Reveal key={p.id} as="article" delay={i * 90}>
              <Link
                href="/vision"
                className="group flex h-full flex-col rounded-2xl border border-line bg-sand-50 p-7 transition-all hover:-translate-y-1 hover:border-flag-green/40 hover:shadow-lg"
              >
                <span className="font-display text-4xl font-semibold text-ochre-400">
                  {p.number}
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold text-ink-900">
                  {p.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-600">
                  {p.promise}
                </p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-flag-green-dark">
                  Read more
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function StoryTeaser() {
  return (
    <section className="border-y border-line bg-sand-100 py-20 sm:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="order-2 lg:order-1">
            <Kicker tone="ochre">The Story</Kicker>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink-900 sm:text-[2.5rem] sm:leading-[1.08]">
              From the youngest voice in Parliament to the Horn of Africa&apos;s peace tables.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-700">{storyIntro}</p>
            <div className="mt-8">
              <Button href="/story">Read the full story</Button>
            </div>
          </Reveal>
          <Reveal className="order-1 lg:order-2" delay={120}>
            <PhotoSlot
              src="/images/MohamedA01.jpg"
              alt="Official portrait of Mohamed Abdi Affey"
              caption="A portrait of Mohamed Abdi Affey — supply an official, rights-cleared photo."
              ratio="4/5"
              className="mx-auto max-w-md shadow-xl"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function PullQuote() {
  return (
    <section className="relative overflow-hidden bg-flag-green-deep py-20 text-sand-50 sm:py-28">
      <div className="absolute inset-0 bg-contour opacity-60" aria-hidden="true" />
      <Container width="prose" className="relative text-center">
        <span className="font-display text-6xl leading-none text-ochre-300" aria-hidden="true">
          &ldquo;
        </span>
        <blockquote className="mt-2 font-display text-2xl font-medium leading-snug text-balance sm:text-[2rem] sm:leading-[1.25]">
          Stability, dignity and development for the people of the north are not
          competing goals — they are the same goal.
        </blockquote>
        <p className="mt-6 text-sm uppercase tracking-[0.16em] text-sand-100/70">
          <span className="italic normal-case tracking-normal text-ochre-200">
            — Anonymous
          </span>
        </p>
      </Container>
    </section>
  );
}

function CtaBand() {
  return (
    <section className="bg-sand-50 py-20 sm:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-ink-900 px-7 py-14 text-sand-50 sm:px-14">
          <div className="absolute inset-0 bg-topo opacity-[0.15]" aria-hidden="true" />
          <div className="relative grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-center">
            <div>
              <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                This campaign belongs to Wajir.
              </h2>
              <p className="mt-4 max-w-xl text-lg text-sand-100/85">
                Volunteer your time, host a conversation in your ward, or help
                power the campaign. Every hand moves us closer to home.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Button href="/get-involved" variant="gold" size="lg" className="w-full">
                Get involved
              </Button>
              <Button
                href="/get-involved#donate"
                size="lg"
                variant="outline"
                className="w-full border-sand-50/40 text-sand-50 hover:bg-sand-50/10"
              >
                Donate
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
