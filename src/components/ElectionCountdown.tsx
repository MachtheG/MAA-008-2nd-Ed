"use client";

import { useEffect, useState } from "react";

export function ElectionCountdown() {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const calculateTime = () => {
      // Election date: August 9, 2027 (adjust as needed)
      const electionDate = new Date("2027-08-09T00:00:00").getTime();
      const now = new Date().getTime();
      const difference = electionDate - now;

      if (difference > 0) {
        setTime({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div className="rounded-2xl border border-line bg-gradient-to-r from-flag-green/5 to-ochre-400/5 p-6 sm:p-8">
      <p className="text-center text-sm font-semibold uppercase tracking-[0.16em] text-flag-green-dark">
        Countdown to election
      </p>
      <div className="mt-6 grid grid-cols-4 gap-3 sm:gap-4">
        {[
          { value: time.days, label: "Days" },
          { value: time.hours, label: "Hours" },
          { value: time.minutes, label: "Minutes" },
          { value: time.seconds, label: "Seconds" },
        ].map((item) => (
          <div key={item.label} className="rounded-xl bg-sand-50 p-3 sm:p-4 text-center">
            <div className="font-display text-2xl sm:text-3xl font-semibold text-flag-green-dark tabular-nums">
              {String(item.value).padStart(2, "0")}
            </div>
            <div className="mt-1 text-xs sm:text-sm font-medium text-ink-600 uppercase tracking-tight">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
