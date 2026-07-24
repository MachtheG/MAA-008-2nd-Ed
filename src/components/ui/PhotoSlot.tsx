import Image from "next/image";

/**
 * A designed image slot. When `src` is provided it renders the photo; until
 * the campaign supplies official photography it renders a tasteful labelled
 * placeholder (never a broken frame). `caption` describes what belongs here.
 */
export function PhotoSlot({
  src,
  alt,
  caption,
  ratio = "4/5",
  priority = false,
  className = "",
  rounded = "rounded-2xl",
}: {
  src?: string;
  alt?: string;
  caption?: string;
  ratio?: string;
  priority?: boolean;
  className?: string;
  rounded?: string;
}) {
  return (
    <figure
      className={`relative overflow-hidden ${rounded} bg-sand-200 ${className}`}
      style={{ aspectRatio: ratio }}
    >
      {src ? (
        <Image
          src={src}
          alt={alt ?? ""}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 40vw"
          className="object-cover"
        />
      ) : (
        <div className="absolute inset-0 grid place-items-center bg-gradient-to-br from-sand-200 to-sand-300">
          <div className="px-6 text-center">
            <svg
              width="56"
              height="56"
              viewBox="0 0 56 56"
              className="mx-auto text-ink-500/40"
              aria-hidden="true"
            >
              <rect x="4" y="8" width="48" height="40" rx="4" fill="none" stroke="currentColor" strokeWidth="2.5" />
              <circle cx="19" cy="22" r="5" fill="none" stroke="currentColor" strokeWidth="2.5" />
              <path d="M6 44l14-13 9 8 8-7 13 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p className="mt-3 text-sm font-semibold text-ink-700">
              Official photo
            </p>
            {caption && (
              <p className="mx-auto mt-1 max-w-[22ch] text-xs leading-snug text-ink-500">
                {caption}
              </p>
            )}
          </div>
        </div>
      )}
      {/* corner ticks for an intentional, editorial frame */}
      <span aria-hidden className="pointer-events-none absolute left-3 top-3 h-4 w-4 border-l-2 border-t-2 border-sand-50/70" />
      <span aria-hidden className="pointer-events-none absolute bottom-3 right-3 h-4 w-4 border-b-2 border-r-2 border-sand-50/70" />
    </figure>
  );
}
