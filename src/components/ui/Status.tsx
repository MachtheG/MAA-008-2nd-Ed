"use client";

import { type ReactNode } from "react";
import type { Status } from "@/content/candidate";
import { useLanguage } from "@/i18n/LanguageProvider";

const map = {
  verified: { dot: "bg-flag-green", chip: "bg-flag-green/12 text-flag-green-dark" },
  draft: { dot: "bg-ochre-500", chip: "bg-ochre-400/20 text-ochre-600" },
  tbc: { dot: "bg-flag-red", chip: "bg-flag-red/12 text-flag-red" },
} as const;

/** Campaign-governance UI, not decoration — keeps its own small pill
 * convention (taste-skill's exception for real system chips) rather
 * than the page's square-corner law. */
export function StatusBadge({
  status,
  className = "",
}: {
  status: Status;
  className?: string;
}) {
  const { t } = useLanguage();
  const s = map[status];
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
