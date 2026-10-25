"use client";

import { type ReactNode } from "react";
import type { Status } from "@/content/candidate";
import { useLanguage } from "@/i18n/LanguageProvider";

/* The dot alone carries the status colour; the label text is always
 * near-black (ink) or near-white (sand-50), never the status colour
 * itself at the tint/weight a small 10.88px chip renders at — a chip
 * audit (Lighthouse/axe) measured ochre-600-on-ochre-400/20 at 3.28:1
 * against a 4.5:1 requirement. Colour + text together would still fail
 * at this size for at least ochre and likely flag-red; ink-on-tint
 * passes unconditionally regardless of which status tint sits under it. */
const map = {
  verified: { dot: "bg-flag-green", chip: "bg-flag-green/12 text-ink" },
  draft: { dot: "bg-ochre-500", chip: "bg-ochre-400/20 text-ink" },
  tbc: { dot: "bg-flag-red", chip: "bg-flag-red/12 text-ink" },
} as const;

/** Same three states, legible on a dark or saturated field instead of
 * the light paper ground: a solid white chip reads on any of this
 * site's field colours (dossier ink, flag green, ochre) where the
 * light-mode tint-on-tint chip above would lose contrast. */
const mapInverted = {
  verified: { dot: "bg-flag-green", chip: "bg-sand-50 text-ink" },
  draft: { dot: "bg-ochre-500", chip: "bg-sand-50 text-ink" },
  tbc: { dot: "bg-flag-red", chip: "bg-sand-50 text-ink" },
} as const;

/** Campaign-governance UI, not decoration — keeps its own small pill
 * convention (taste-skill's exception for real system chips) rather
 * than the page's square-corner law. Pass `inverted` on a dark or
 * saturated field colour. */
export function StatusBadge({
  status,
  inverted = false,
  className = "",
}: {
  status: Status;
  inverted?: boolean;
  className?: string;
}) {
  const { t } = useLanguage();
  const s = (inverted ? mapInverted : map)[status];
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[0.68rem] font-semibold tracking-wide ${s.chip} ${className}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${s.dot}`} aria-hidden="true" />
      {t.ui.status[status]}
    </span>
  );
}

/** A callout that frames unverified/draft content honestly — told apart
 * from its surface by a tone step, not a dashed line. */
export function DraftNote({
  status = "draft",
  title,
  children,
}: {
  status?: Status;
  title?: string;
  children: ReactNode;
}) {
  const bg = status === "tbc" ? "bg-flag-red/[0.06]" : "bg-ochre-400/10";
  return (
    <div role="note" className={`flex items-start gap-3 px-4 py-3.5 text-sm text-ink-700 ${bg}`}>
      <StatusBadge status={status} className="mt-0.5 shrink-0" />
      <div>
        {title && <p className="font-semibold text-ink-800">{title}</p>}
        <div className={title ? "mt-0.5" : ""}>{children}</div>
      </div>
    </div>
  );
}
