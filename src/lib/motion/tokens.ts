/**
 * Motion tokens — the JS-side mirror of the CSS custom properties in
 * globals.css's @theme block. Keep both in sync by hand; there are only
 * five durations and three eases, so drift is easy to catch in review.
 *
 * Rule (Emil Kowalski / review-animations): transform and opacity only,
 * custom cubic-beziers, ease-out for entrances, never the default
 * `ease`/`ease-in` for UI motion.
 */

export const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;
export const EASE_OUT_QUART = [0.25, 1, 0.5, 1] as const;
export const EASE_SPRING = [0.34, 1.56, 0.64, 1] as const;

export const DURATION = {
  instant: 0.12,
  fast: 0.2,
  base: 0.4,
  slow: 0.7,
  signature: 0.9,
} as const;

/** A spring tuned for interruptible, interactive motion (drag, magnetic, press). */
export const SPRING_INTERACTIVE = { type: "spring", stiffness: 420, damping: 32, mass: 0.6 } as const;

/** A softer spring for larger, slower-moving elements (sheets, panels). */
export const SPRING_SHEET = { type: "spring", stiffness: 300, damping: 34, mass: 0.9 } as const;

/** True when the visitor has asked for less motion. Read once; this app
 * does not need to react live to the setting changing mid-session. */
export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** True only for an input device that can hover with precision — the
 * gate for every pointer-following effect (Magnetic, desktop parallax). */
export function hasFinePointer(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
}
