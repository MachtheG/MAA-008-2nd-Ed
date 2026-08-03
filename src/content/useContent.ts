"use client";

import type { Locale } from "@/i18n/config";
import { useLanguage } from "@/i18n/LanguageProvider";
import { contentEn, type SiteContent } from "./candidate";
import { contentSw } from "./candidate.sw";
import { contentSo } from "./candidate.so";

const byLocale: Record<Locale, SiteContent> = {
  en: contentEn,
  sw: contentSw,
  so: contentSo,
};

/** Page copy for the active locale. Client components only. */
export function useContent(): SiteContent {
  const { locale } = useLanguage();
  return byLocale[locale] ?? contentEn;
}
