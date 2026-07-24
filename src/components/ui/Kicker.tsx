import { type ReactNode } from "react";

/** Small editorial eyebrow label with a leading rule. */
export function Kicker({
  children,
  tone = "green",
  className = "",
}: {
  children: ReactNode;
  tone?: "green" | "ochre" | "light";
  className?: string;
}) {
  const color =
    tone === "green"
      ? "text-flag-green-dark"
      : tone === "ochre"
        ? "text-ochre-600"
        : "text-sand-200";
  const rule =
    tone === "green"
      ? "bg-flag-green"
      : tone === "ochre"
        ? "bg-ochre-500"
        : "bg-sand-300";
  return (
    <span
      className={`inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.18em] ${color} ${className}`}
    >
      <span className={`h-px w-7 ${rule}`} aria-hidden="true" />
      {children}
    </span>
  );
}
