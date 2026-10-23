"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { hasFinePointer, prefersReducedMotion, SPRING_INTERACTIVE } from "./tokens";

/**
 * A control that leans gently toward the cursor within its own bounds —
 * desktop-only (gated on a fine pointer) and interruptible, since a spring
 * naturally re-targets mid-motion rather than restarting. This is the one
 * primitive CSS/WAAPI cannot do: a value that keeps tracking a moving
 * pointer rather than animating between two fixed states, so it is the
 * one place this build reaches for the `motion` library (ground rule 5's
 * third preference tier) instead of CSS.
 *
 * Touch devices get the plain element with ordinary :active press
 * feedback (applied by the caller's own classes) — Magnetic adds nothing
 * there, it does not simulate the effect.
 */
export function Magnetic({
  children,
  strength = 0.35,
  className = "",
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, SPRING_INTERACTIVE);
  const springY = useSpring(y, SPRING_INTERACTIVE);
  const enabled = useRef(false);

  useEffect(() => {
    enabled.current = hasFinePointer() && !prefersReducedMotion();
  }, []);

  function onMove(e: React.PointerEvent<HTMLDivElement>) {
    if (!enabled.current || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * strength);
    y.set((e.clientY - rect.top - rect.height / 2) * strength);
  }

  function onLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      style={{ x: springX, y: springY }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
