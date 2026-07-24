// i18n configuration — single source of truth for locales.
// Somali ("so") is intentionally listed as a known locale but kept out of
// ACTIVE_LOCALES until its dictionary is fully translated & reviewed.
// Adding it later = translate dictionaries + push "so" into ACTIVE_LOCALES.

export const ALL_LOCALES = ["en", "sw", "so"] as const;
export type Locale = (typeof ALL_LOCALES)[number];

// Locales the toggle currently exposes to voters.
export const ACTIVE_LOCALES: Locale[] = ["en", "sw"];

export const DEFAULT_LOCALE: Locale = "en";

export const LOCALE_LABELS: Record<Locale, string> = {
  en: "English",
  sw: "Kiswahili",
  so: "Soomaali",
};

// Short code shown in the compact toggle.
export const LOCALE_SHORT: Record<Locale, string> = {
  en: "EN",
  sw: "SW",
  so: "SO",
};
