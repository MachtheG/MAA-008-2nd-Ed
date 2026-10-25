/**
 * The real outline of Wajir County, reused from the traced region
 * polygons in src/components/wards/WajirMap.tsx (360×545 reference
 * space) rather than redrawn by eye — a drawn mark still has to be the
 * subject's actual shape, not an invented silhouette that merely looks
 * county-like.
 */
const REGION_PATHS = [
  "M150,8 L193,80 L218,133 L152,156 L85,145 L24,152 L33,138 L40,110 L52,82 L68,58 L88,38 L118,18 Z",
  "M24,152 L85,145 L152,156 L158,215 L28,222 L23,190 Z",
  "M28,222 L158,215 L180,283 L90,318 L72,298 L45,275 L33,250 Z",
  "M152,156 L218,133 L275,180 L252,280 L180,283 L158,215 Z",
  "M275,180 L338,236 L330,265 L320,295 L252,280 Z",
  "M180,283 L252,280 L320,295 L315,360 L308,405 L298,445 L285,475 L262,505 L235,530 L205,512 L180,478 L150,440 L125,398 L105,355 L90,318 Z",
];

export function WajirSilhouette({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 360 545" className={className} aria-hidden="true">
      {/* Filled, not stroked: the six regions tile with no gaps (see
          WajirMap.tsx), so a flat fill reads as one solid landmass
          instead of exposing the internal constituency boundaries. */}
      <g fill="currentColor">
        {REGION_PATHS.map((d, i) => (
          <path key={i} d={d} />
        ))}
      </g>
    </svg>
  );
}
