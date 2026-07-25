"use client";

import { useLanguage } from "@/i18n/LanguageProvider";

export function SkipLink() {
  const { t } = useLanguage();
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:absolute focus:z-60 focus:left-4 focus:top-4 focus:rounded-md focus:bg-ink-900 focus:px-4 focus:py-2 focus:text-sand-50"
    >
      {t.ui.footer.skipToContent}
    </a>
  );
}
