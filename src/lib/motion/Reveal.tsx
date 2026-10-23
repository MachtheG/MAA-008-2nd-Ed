"use client";

import { type ElementType, type ReactNode, Children } from "react";
import { useInView } from "./useInView";

type Props = {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  className?: string;
};

/**
 * The entrance for the parts of a section: rises 20px with opacity, once,
 * triggered when it enters the viewport. Pure CSS (the `.reveal`/
 * `.is-visible` utilities in globals.css) so it costs nothing on the main
 * thread and degrades to "just visible" if JS is slow — the content is
 * never hidden behind a script that might not run.
 */
export function Reveal({ children, as: As = "div", delay = 0, className = "" }: Props) {
  const { ref, inView } = useInView<HTMLElement>();

  return (
    <As
      ref={ref}
      className={`reveal ${inView ? "is-visible" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </As>
  );
}

/**
 * Staggers its direct children through the same reveal, 70ms apart (within
 * the brief's 30–80ms band). Use for a heading → text → picture sequence
 * inside one section, instead of hand-rolling `delay={i * 70}` everywhere.
 */
export function RevealGroup({
  children,
  as: As = "div",
  stagger = 70,
  className = "",
}: {
  children: ReactNode;
  as?: ElementType;
  stagger?: number;
  className?: string;
}) {
  const items = Children.toArray(children);
  return (
    <As className={className}>
      {items.map((child, i) => (
        <Reveal key={i} delay={i * stagger}>
          {child}
        </Reveal>
      ))}
    </As>
  );
}
