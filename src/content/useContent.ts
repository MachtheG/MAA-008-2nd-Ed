"use client";

import type { Locale } from "@/i18n/config";
import { useLanguage } from "@/i18n/LanguageProvider";
import { contentEn, type SiteContent } from "./candidate";
import { contentSw } from "./candidate.sw";

// Somali is not yet translated — it falls back to English, matching the
// dictionary behaviour in i18n/dictionaries.ts.
const byLocale: Record<Locale, SiteContent> = {
  en: contentEn,
  sw: contentSw,
  so: contentEn,
};

/** Page copy for the active locale. Client components only. */
export function useContent(): SiteContent {
  const { locale } = useLanguage();
  return byLocale[locale] ?? contentEn;
}
