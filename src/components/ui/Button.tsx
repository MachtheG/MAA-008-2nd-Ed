import Link from "next/link";
import { type ReactNode } from "react";

type Variant = "primary" | "accent" | "ghost-on-dark" | "urgent";
type Size = "md" | "lg";

/**
 * One button shape, decided once (taste-skill law): square corners, flat
 * fill, no shadow at rest or on hover. `accent` spends the one accent
 * colour the proportion rule allows (colour.md §3) — use it for at most
 * one action per screen. For a secondary action, prefer `TextLink`
 * instead of a second button variant; the direction's own blueprints
 * mostly use "no button, the underlined phrase is the action."
 */
const base =
  "inline-flex items-center justify-center gap-2 font-medium transition-[background-color,transform] duration-200 ease-out active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary: "bg-ink text-bg hover:bg-ink-800",
  accent: "bg-accent text-accent-ink hover:bg-flag-green",
  "ghost-on-dark": "bg-transparent text-sand-50 ring-1 ring-sand-50/40 hover:ring-sand-50/70",
  /** Donate — flag-red is reserved for urgency marks (DESIGN.md Restraint
   * Rule); one persistent button is the mark, not a wash. */
  urgent: "bg-flag-red text-sand-50 hover:bg-flag-red/90",
};

const sizes: Record<Size, string> = {
  md: "min-h-11 px-5 text-[0.95rem]",
  lg: "min-h-12 px-7 text-base",
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  external = false,
  onClick,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  external?: boolean;
  onClick?: () => void;
}) {
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls} onClick={onClick}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} onClick={onClick}>
      {children}
    </Link>
  );
}
