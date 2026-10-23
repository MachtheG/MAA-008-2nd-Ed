"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { hasFinePointer, prefersReducedMotion } from "./tokens";

/**
 * Depth on a photograph: pointer-driven on a device that has a precise
 * pointer (desktop), scroll-driven on everything else (phones — the
 * common case here). The two modes never run on the same device, so they
 * never both try to own `transform`.
 *
 * The child must be sized larger than its frame (e.g. `scale-115`) so the
 * drift never shows the edge of the image.
 */
export function Parallax({ children, className = "", strength = 18 }: { children: ReactNode; className?: string; strength?: number }) {
  const frameRef = useRef<HTMLDivElement>(null);
  const layerRef = useRef<HTMLDivElement>(null);
  const fine = useRef(false);

  useEffect(() => {
    fine.current = hasFinePointer() && !prefersReducedMotion();
    if (!fine.current) return;

    const frame = frameRef.current;
    const layer = layerRef.current;
    if (!frame || !layer) return;

    // A fine pointer takes over entirely: drop the scroll-driven CSS
    // animation so it never fights the JS-set transform below.
    layer.classList.remove("parallax-scroll");

    let raf = 0;
    function onMove(e: PointerEvent) {
      const rect = frame!.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        layer!.style.transform = `translate3d(${px * -strength}px, ${py * -strength}px, 0)`;
      });
    }
    function onLeave() {
      cancelAnimationFrame(raf);
      layer!.style.transform = "translate3d(0, 0, 0)";
    }

    frame.addEventListener("pointermove", onMove);
    frame.addEventListener("pointerleave", onLeave);
    return () => {
      frame.removeEventListener("pointermove", onMove);
      frame.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, [strength]);

  return (
    <div ref={frameRef} className={`relative overflow-hidden ${className}`}>
      <div ref={layerRef} className="parallax-scroll h-full w-full will-change-transform">
        {children}
      </div>
    </div>
  );
}
