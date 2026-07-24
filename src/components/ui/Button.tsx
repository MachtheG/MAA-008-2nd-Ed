import Link from "next/link";
import { type ReactNode } from "react";

type Variant = "solid" | "outline" | "ghost" | "gold";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus-visible:outline-3 focus-visible:outline-offset-2 disabled:opacity-50";

const variants: Record<Variant, string> = {
  solid:
    "bg-ink-900 text-sand-50 hover:bg-ink-800 hover:-translate-y-0.5 shadow-sm",
  gold: "bg-ochre-500 text-ink-900 hover:bg-ochre-400 hover:-translate-y-0.5 shadow-sm",
  outline:
    "border border-ink-900/25 text-ink-900 hover:bg-ink-900/5 hover:border-ink-900/40",
  ghost: "text-ink-800 hover:bg-ink-900/5",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

export function Button({
  href,
  children,
  variant = "solid",
  size = "md",
  className = "",
  external = false,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  external?: boolean;
}) {
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
