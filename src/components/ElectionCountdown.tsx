"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/i18n/LanguageProvider";

/**
 * Kenya's next general election. The Constitution (Art. 101) sets polling for
 * the second Tuesday in August of the fifth year — that is 10 August 2027.
 * Stored as UTC+03:00 (EAT) so the countdown is correct from any timezone.
 */
const ELECTION_ISO = "2027-08-10T00:00:00+03:00";

type Remaining = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  passed: boolean;
};

function remainingFrom(target: number, now: number): Remaining {
  const diff = target - now;
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, passed: true };
  }
  const s = Math.floor(diff / 1000);
  return {
    days: Math.floor(s / 86400),
    hours: Math.floor(s / 3600) % 24,
    minutes: Math.floor(s / 60) % 60,
    seconds: s % 60,
    passed: false,
  };
}

/**
 * Shared ticking state for both the full card and the slim header bar.
 * `null` until mounted: the server has no stable "now", so each consumer
 * renders a steady placeholder instead of a value that would mismatch on
 * hydration.
 */
function useElectionCountdown(): Remaining | null {
  const [time, setTime] = useState<Remaining | null>(null);

  useEffect(() => {
    const target = new Date(ELECTION_ISO).getTime();
    const tick = () => setTime(remainingFrom(target, Date.now()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return time;
}

/** Full feature card — used once, as the centrepiece on the home page. */
export function ElectionCountdown() {
  const { t } = useLanguage();
  const time = useElectionCountdown();

  const units = [
    { key: "d", value: time?.days, label: t.ui.countdown.days },
    { key: "h", value: time?.hours, label: t.ui.countdown.hours },
    { key: "m", value: time?.minutes, label: t.ui.countdown.minutes },
    { key: "s", value: time?.seconds, label: t.ui.countdown.seconds },
  ];

  return (
    <div className="bg-surface p-4 sm:p-6 lg:p-8">
      <div className="text-center">
        <p className="font-display text-base font-semibold text-flag-green-dark sm:text-lg">
          {t.ui.countdown.label}
        </p>
        <p className="mt-1.5 text-sm text-muted">{t.ui.countdown.dateLine}</p>
      </div>

      {time?.passed ? (
        <p className="mt-6 text-center font-display text-xl font-semibold text-flag-green-dark">
          {t.ui.countdown.passed}
        </p>
      ) : (
        <div className="mt-5 grid grid-cols-4 gap-1.5 sm:mt-6 sm:gap-3">
          {units.map((u) => (
            <div
              key={u.key}
              className="min-w-0 bg-ink px-1 py-3 text-center sm:px-2 sm:py-4"
            >
              <div
                className="font-display text-[1.6rem] font-semibold leading-none tabular-nums text-ochre-300 sm:text-4xl"
                // Reserve the digits' width before hydration so nothing jumps.
                suppressHydrationWarning
              >
                {u.value === undefined ? "––" : String(u.value).padStart(2, "0")}
              </div>
              {/* Labels shrink rather than wrap on the narrowest phones */}
              <div className="mt-1.5 truncate text-[0.7rem] font-medium text-sand-100/70 sm:mt-2 sm:text-xs">
                {u.label}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/**
 * One-line strip for the site header — present on every page. Deliberately
 * plain (a flat rule, tabular digits, no gradient or glass) so it reads as
 * a fixed instrument rather than a promotional banner.
 */
export function ElectionCountdownBar() {
  const { t } = useLanguage();
  const time = useElectionCountdown();

  if (time?.passed) {
    return (
      <div className="bg-flag-green-dark px-4 py-1.5 text-center text-xs font-semibold text-sand-50 sm:text-sm">
        {t.ui.countdown.passed}
      </div>
    );
  }

  const units = [
    { key: "d", value: time?.days, label: t.ui.countdown.days },
    { key: "h", value: time?.hours, label: t.ui.countdown.hours },
    { key: "m", value: time?.minutes, label: t.ui.countdown.minutes },
    { key: "s", value: time?.seconds, label: t.ui.countdown.seconds },
  ];

  return (
    <div className="bg-flag-green-dark text-sand-50">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-2 gap-y-1 px-4 py-1.5 text-center sm:justify-between sm:px-8">
        <span className="hidden text-xs font-semibold text-sand-100/80 sm:inline">
          {t.ui.countdown.label}
        </span>
        <span
          className="flex items-baseline gap-1 text-xs font-semibold tabular-nums sm:text-sm"
          suppressHydrationWarning
        >
          {units.map((u, i) => (
            <span key={u.key} className="flex items-baseline gap-1">
              {i > 0 && <span className="text-sand-100/50">·</span>}
              <span className="text-ochre-300">
                {u.value === undefined ? "––" : String(u.value).padStart(2, "0")}
              </span>
              <span className="text-[0.65rem] font-medium normal-case text-sand-100/70">
                {u.label.slice(0, 1).toLowerCase()}
              </span>
            </span>
          ))}
        </span>
      </div>
    </div>
  );
}
