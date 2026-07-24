import { type ReactNode } from "react";
import type { Status } from "@/content/candidate";

const map = {
  verified: {
    label: "Verified",
    dot: "bg-flag-green",
    chip: "bg-flag-green/10 text-flag-green-dark ring-flag-green/20",
  },
  draft: {
    label: "Draft — for approval",
    dot: "bg-ochre-500",
    chip: "bg-ochre-400/20 text-ochre-600 ring-ochre-500/30",
  },
  tbc: {
    label: "To confirm",
    dot: "bg-flag-red",
    chip: "bg-flag-red/10 text-flag-red ring-flag-red/20",
  },
} as const;

export function StatusBadge({
  status,
  className = "",
}: {
  status: Status;
  className?: string;
}) {
  const s = map[status];
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-wide ring-1 ring-inset ${s.chip} ${className}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${s.dot}`} aria-hidden="true" />
      {s.label}
    </span>
  );
}

/** A dashed callout that frames unverified/draft content honestly. */
export function DraftNote({
  status = "draft",
  title,
  children,
}: {
  status?: Status;
  title?: string;
  children: ReactNode;
}) {
  const border =
    status === "tbc" ? "border-flag-red/40" : "border-ochre-500/50";
  const bg = status === "tbc" ? "bg-flag-red/[0.04]" : "bg-ochre-400/[0.07]";
  return (
    <div
      role="note"
      className={`flex items-start gap-3 rounded-xl border border-dashed ${border} ${bg} px-4 py-3.5 text-sm text-ink-700`}
    >
      <StatusBadge status={status} className="mt-0.5 shrink-0" />
      <div>
        {title && <p className="font-semibold text-ink-800">{title}</p>}
        <div className={title ? "mt-0.5" : ""}>{children}</div>
      </div>
    </div>
  );
}
