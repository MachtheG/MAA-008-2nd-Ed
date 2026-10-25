import { type ElementType } from "react";

/**
 * The masked line-by-line headline reveal — this build's signature move
 * (direction sheet §8). Each line of `lines` rises from behind its own
 * baseline about 900ms with a strong ease-out, each line 110ms after the
 * one before it.
 *
 * Lines are authored, not computed: a headline that passes the two-line
 * rule can still break badly if left to the browser (type.md §8), so the
 * caller supplies the exact line breaks it wants.
 *
 * No IntersectionObserver gating: this primitive is used only in the
 * above-the-fold hero, so the CSS keyframe (split-text.css) runs on
 * mount with its own authored per-line delay. An earlier version paused
 * the animation via an inline style until a JS observer confirmed the
 * element was in view — but an inline `opacity: 0` always wins over the
 * stylesheet's `prefers-reduced-motion` override (inline beats an
 * external rule regardless of the media query), so that version could
 * render the headline permanently invisible under reduced motion, or
 * briefly invisible on any load if the observer lagged. Not a client
 * component any more — one fewer hydration dependency on the first
 * thing a visitor reads.
 */
export function SplitText({
  lines,
  as: As = "h1",
  className = "",
  lineClassName = "",
  stagger = 110,
}: {
  lines: string[];
  as?: ElementType;
  className?: string;
  lineClassName?: string;
  stagger?: number;
}) {
  return (
    <As className={className}>
      {lines.map((line, i) => (
        <span key={i} className={`split-line ${lineClassName}`}>
          <span className="split-line-inner" style={{ "--split-delay": `${i * stagger}ms` } as React.CSSProperties}>
            {line}
          </span>
        </span>
      ))}
    </As>
  );
}
