import Image from "next/image";
import { type ReactNode } from "react";
import { Container } from "./Container";
import { FlagBar } from "./FlagBar";
import { Reveal } from "@/lib/motion";

/**
 * Interior-page hero. No eyebrow label (house rule: "no eyebrows" — the
 * `h1` is the title, in sentence case, at display size; that is the one
 * thing a visitor needs to read in five seconds). With a background
 * photo, it is shown at real strength — not fogged to near-invisibility —
 * with a flat scrim reserved for the text's own corner, the one gradient
 * the house rules allow.
 */
export function PageHero({
  title,
  intro,
  image,
  imageAlt = "",
  children,
}: {
  title: ReactNode;
  intro?: ReactNode;
  image?: string;
  imageAlt?: string;
  children?: ReactNode;
}) {
  const dark = Boolean(image);
  return (
    <section className={`relative overflow-hidden ${dark ? "bg-field-dossier text-field-dossier-ink" : "bg-surface text-ink"}`}>
      {image && (
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center grain"
        />
      )}
      {image && (
        <div className="absolute inset-0 bg-linear-to-t from-ink-900 via-ink-900/55 to-ink-900/10" aria-hidden="true" />
      )}
      <Container className={`relative ${image ? "py-20 sm:py-28" : "py-16 sm:py-20"}`}>
        <Reveal as="h1" className={`max-w-4xl font-display font-semibold text-balance ${dark ? "text-sand-50" : "text-ink"}`}>
          <span className="block" style={{ fontSize: "var(--text-head)", letterSpacing: "-0.02em" }}>
            {title}
          </span>
        </Reveal>
        {intro && (
          <Reveal as="p" delay={90} className={`mt-6 max-w-[48ch] text-lead leading-[1.35] ${dark ? "text-sand-100/90" : "text-ink-700"}`}>
            {intro}
          </Reveal>
        )}
        {children && <div className="mt-8">{children}</div>}
      </Container>
      {image && <FlagBar className="absolute inset-x-0 bottom-0 h-1" />}
    </section>
  );
}
