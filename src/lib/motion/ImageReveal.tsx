"use client";

import Image, { type ImageProps } from "next/image";
import { useInView } from "./useInView";

/**
 * A photograph unveiled by a clip-path wipe with a slow scale settle —
 * the hero's "portrait unveiled" moment and, at a shorter duration, every
 * other photograph's entrance (direction sheet's imagery step). Clip-path
 * and transform only; never width/height, so nothing else on the page
 * reflows while it plays.
 */
export function ImageReveal({
  wrapperClassName = "",
  priority,
  className,
  style,
  alt,
  ...imageProps
}: ImageProps & { wrapperClassName?: string }) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.25 });
  // A priority (likely LCP) image reveals immediately rather than waiting
  // for IntersectionObserver, so it never delays the largest contentful paint.
  const revealed = inView || Boolean(priority);

  return (
    <div
      ref={ref}
      className={`overflow-hidden ${wrapperClassName}`}
      style={{
        clipPath: revealed ? "inset(0% 0% 0% 0%)" : "inset(0% 0% 0% 100%)",
        transition: "clip-path var(--duration-signature) var(--ease-out-expo)",
      }}
    >
      <Image
        {...imageProps}
        alt={alt}
        priority={priority}
        className={`${className ?? ""} transition-transform duration-1100 ease-out`}
        style={{
          ...style,
          transform: revealed ? "scale(1)" : "scale(1.08)",
          transitionTimingFunction: "var(--ease-out-expo)",
        }}
      />
    </div>
  );
}
