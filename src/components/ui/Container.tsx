import { type ElementType, type ReactNode } from "react";

const widths = {
  default: "max-w-6xl",
  wide: "max-w-7xl",
  prose: "max-w-3xl",
} as const;

export function Container({
  children,
  as: As = "div",
  width = "default",
  className = "",
}: {
  children: ReactNode;
  as?: ElementType;
  width?: keyof typeof widths;
  className?: string;
}) {
  return (
    <As className={`mx-auto w-full px-5 sm:px-8 ${widths[width]} ${className}`}>
      {children}
    </As>
  );
}
