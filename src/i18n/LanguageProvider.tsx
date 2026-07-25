"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
} from "react";
import { ACTIVE_LOCALES, DEFAULT_LOCALE, type Locale } from "./config";
import { getDictionary, type Dictionary } from "./dictionaries";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: Dictionary;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "affey-locale";

/**
 * The saved locale lives in localStorage — an external store — so it is read
 * through useSyncExternalStore rather than an effect. That keeps SSR rendering
 * the default locale, hydrates straight to the saved one, and avoids the
 * cascading re-render an effect-plus-setState would cause.
 */
const listeners = new Set<() => void>();

function subscribe(onChange: () => void) {
  listeners.add(onChange);
  // Keep other tabs in sync too.
  window.addEventListener("storage", onChange);
  return () => {
    listeners.delete(onChange);
    window.removeEventListener("storage", onChange);
  };
}

function getSnapshot(): Locale {
  const saved = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
  return saved && ACTIVE_LOCALES.includes(saved) ? saved : DEFAULT_LOCALE;
}

function getServerSnapshot(): Locale {
  return DEFAULT_LOCALE;
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const locale = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setLocale = useCallback((l: Locale) => {
    window.localStorage.setItem(STORAGE_KEY, l);
    listeners.forEach((notify) => notify());
  }, []);

  // Keep <html lang> in sync for accessibility & SEO.
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const value = useMemo<LanguageContextValue>(
    () => ({ locale, setLocale, t: getDictionary(locale) }),
    [locale, setLocale]
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
