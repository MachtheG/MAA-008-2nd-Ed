import Image from "next/image";
import { type ReactNode } from "react";
import { Container } from "./Container";
import { Kicker } from "./Kicker";

/**
 * Interior-page hero. Optional background image renders as a duotone-ish band
 * behind a dark scrim for legibility.
 */
export function PageHero({
  kicker,
  title,
  intro,
  image,
  imageAlt = "",
  children,
}: {
  kicker: string;
  title: ReactNode;
  intro?: ReactNode;
  image?: string;
  imageAlt?: string;
  children?: ReactNode;
}) {
  const dark = Boolean(image);
  return (
    <section className={`relative overflow-hidden ${dark ? "bg-ink-900 text-sand-50" : "bg-sand-100 text-ink-900"}`}>
      {image && (
        <>
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/70 to-ink-900/40" aria-hidden="true" />
          <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-flag-black via-flag-red to-flag-green" aria-hidden="true" />
        </>
      )}
      <Container className={`relative ${image ? "py-20 sm:py-28" : "py-16 sm:py-20"}`}>
        <Kicker tone={dark ? "light" : "green"}>{kicker}</Kicker>
        <h1
          className={`mt-5 max-w-4xl font-display font-semibold tracking-tight text-balance ${dark ? "text-sand-50" : "text-ink-900"}`}
          style={{ fontSize: "var(--text-hero)", lineHeight: "var(--text-hero--line-height)" }}
        >
          {title}
        </h1>
        {intro && (
          <p className={`mt-6 max-w-2xl text-lg leading-relaxed ${dark ? "text-sand-100/85" : "text-ink-700"}`}>
            {intro}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </Container>
    </section>
  );
}
