"use client";

import { ACTIVE_LOCALES, LOCALE_LABELS, LOCALE_SHORT } from "@/i18n/config";
import { useLanguage } from "@/i18n/LanguageProvider";

export function LanguageToggle({ className = "" }: { className?: string }) {
  const { locale, setLocale, t } = useLanguage();

  return (
    <div
      className={`inline-flex items-center bg-surface p-0.5 ${className}`}
      role="group"
      aria-label={t.common.langLabel}
    >
      {ACTIVE_LOCALES.map((l) => {
        const active = l === locale;
        return (
          <button
            key={l}
            type="button"
            onClick={() => setLocale(l)}
            aria-pressed={active}
            className={`px-2 py-1.5 text-xs font-semibold transition-colors sm:px-3 sm:text-sm ${
              active ? "bg-flag-green text-sand-50" : "text-ink-700 hover:bg-ink/5"
            }`}
          >
            <span aria-hidden="true">{LOCALE_SHORT[l]}</span>
            <span className="sr-only">{LOCALE_LABELS[l]}</span>
          </button>
        );
      })}
    </div>
  );
}
