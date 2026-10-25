"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Fires once when the element first crosses the viewport, then disconnects.
 * Shared by every "entrance" primitive so there is exactly one
 * IntersectionObserver idiom in the codebase, not one per component.
 */
export function useInView<T extends Element>(options?: { threshold?: number; rootMargin?: string }) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: options?.threshold ?? 0.15, rootMargin: options?.rootMargin ?? "0px 0px -8% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { ref, inView };
}
