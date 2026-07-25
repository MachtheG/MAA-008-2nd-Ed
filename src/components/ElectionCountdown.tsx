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

export function ElectionCountdown() {
  const { t } = useLanguage();
  // `null` until mounted: the server has no stable "now", so we render a
  // fixed-height skeleton instead of a mismatched value. Keeps layout steady.
  const [time, setTime] = useState<Remaining | null>(null);

  useEffect(() => {
    const target = new Date(ELECTION_ISO).getTime();
    const tick = () => setTime(remainingFrom(target, Date.now()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { key: "d", value: time?.days, label: t.ui.countdown.days },
    { key: "h", value: time?.hours, label: t.ui.countdown.hours },
    { key: "m", value: time?.minutes, label: t.ui.countdown.minutes },
    { key: "s", value: time?.seconds, label: t.ui.countdown.seconds },
  ];

  return (
    <div className="rounded-2xl border border-line bg-linear-to-br from-flag-green/[0.07] to-ochre-400/[0.07] p-4 sm:p-6 lg:p-8">
      <div className="text-center">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-flag-green-dark sm:text-xs sm:tracking-[0.16em]">
          {t.ui.countdown.label}
        </p>
        <p className="mt-1.5 text-sm text-ink-500">{t.ui.countdown.dateLine}</p>
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
              className="min-w-0 rounded-xl bg-sand-50 px-1 py-3 text-center sm:px-2 sm:py-4"
            >
              <div
                className="font-display text-[1.6rem] font-semibold leading-none tabular-nums text-flag-green-dark sm:text-4xl"
                // Reserve the digits' width before hydration so nothing jumps.
                suppressHydrationWarning
              >
                {u.value === undefined ? "––" : String(u.value).padStart(2, "0")}
              </div>
              {/* Labels shrink rather than wrap on the narrowest phones */}
              <div className="mt-1.5 truncate text-[0.6rem] font-medium uppercase tracking-tight text-ink-600 sm:mt-2 sm:text-xs sm:tracking-wide">
                {u.label}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
