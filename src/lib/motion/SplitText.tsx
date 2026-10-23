"use client";

import { type ElementType } from "react";
import { useInView } from "./useInView";

/**
 * The masked line-by-line headline reveal — this build's signature move
 * (direction sheet §8). Each line of `lines` rises from behind its own
 * baseline about 900ms with a strong ease-out, each line 110ms after the
 * one before it.
 *
 * Lines are authored, not computed: a headline that passes the two-line
 * rule can still break badly if left to the browser (type.md §8), so the
 * caller supplies the exact line breaks it wants.
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
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0.4 });

  return (
    <As ref={ref} className={className}>
      {lines.map((line, i) => (
        <span key={i} className={`split-line ${lineClassName}`}>
          <span
            className="split-line-inner"
            style={
              inView
                ? ({ "--split-delay": `${i * stagger}ms` } as React.CSSProperties)
                : { animationPlayState: "paused", opacity: 0 }
            }
          >
            {line}
          </span>
        </span>
      ))}
    </As>
  );
}
