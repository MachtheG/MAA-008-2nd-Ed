import Link from "next/link";
import { type ReactNode } from "react";

/**
 * The secondary action most of the direction's blueprints call for
 * instead of a second button: a plain link whose underline sweeps in
 * from the left on hover/focus. The sweep is a solid-colour pseudo-
 * element scaled with `transform`, not a CSS gradient, so it is exempt
 * from the no-gradients rule while still reading as "something moved."
 */
export function TextLink({
  href,
  children,
  className = "",
  tone = "ink",
  external = false,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  tone?: "ink" | "light";
  external?: boolean;
}) {
  const cls = `group relative inline-flex items-center gap-1.5 font-medium ${
    tone === "light" ? "text-sand-50" : "text-ink"
  } ${className}`;

  const sweep = (
    <span className="relative inline-block">
      <span>{children}</span>
      <span
        aria-hidden="true"
        className={`absolute inset-x-0 -bottom-0.5 h-[2px] origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100 ${
          tone === "light" ? "bg-sand-50" : "bg-ink"
        }`}
      />
    </span>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {sweep}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {sweep}
    </Link>
  );
}
