/**
 * The flag rule: three hard-edged solid stripes (black / red / green),
 * real DOM blocks rather than a CSS gradient — flags have hard stripe
 * edges, not a blend, and the house rules ban gradients outright.
 * Replaces every `bg-linear-to-r from-flag-black via-flag-red to-flag-green`
 * from the incumbent system (hero rule, footer rule, PageHero rule).
 */
export function FlagBar({ className = "h-1" }: { className?: string }) {
  return (
    <div className={`flex w-full ${className}`} aria-hidden="true">
      <span className="flex-1 bg-flag-black" />
      <span className="flex-1 bg-flag-red" />
      <span className="flex-1 bg-flag-green" />
    </div>
  );
}
