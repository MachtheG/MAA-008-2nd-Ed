"use client";

import { useEffect, useState } from "react";
import Image, { type ImageProps } from "next/image";
import { useInView } from "./useInView";
import { prefersReducedMotion } from "./tokens";

/**
 * A photograph unveiled by a clip-path wipe with a slow scale settle —
 * the hero's "portrait unveiled" moment and, at a shorter duration, every
 * other photograph's entrance (direction sheet's imagery step). Clip-path
 * and transform only; never width/height, so nothing else on the page
 * reflows while it plays.
 *
 * Fails safe: the CSS default (image-reveal.css) is fully visible. JS
 * only hides the image — by adding `.pending` after mount, once it has
 * confirmed it can also reveal it again via IntersectionObserver — so a
 * script that fails, is blocked, or hasn't hydrated yet never leaves a
 * photograph invisible. An earlier version did the opposite (started
 * hidden via React state, relying on JS to reveal it) and had no
 * prefers-reduced-motion handling at all.
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
  const [armed, setArmed] = useState(false);

  useEffect(() => {
    // Reads a browser-only media query once on mount to decide whether
    // JS may hide the image before revealing it again — there is no
    // external store to subscribe to, so the setState-in-effect lint
    // rule's usual "compute during render instead" advice doesn't apply.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (!priority && !prefersReducedMotion()) setArmed(true);
  }, [priority]);

  const pending = armed && !inView;

  return (
    <div
      ref={ref}
      className={`image-reveal-frame overflow-hidden ${pending ? "pending" : ""} ${wrapperClassName}`}
    >
      <Image
        {...imageProps}
        alt={alt}
        priority={priority}
        className={`image-reveal-img ${pending ? "pending" : ""} ${className ?? ""}`}
        style={style}
      />
    </div>
  );
}
