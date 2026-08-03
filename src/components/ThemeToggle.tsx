"use client";

import { useTheme } from "@/i18n/ThemeProvider";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center gap-1 rounded-lg border border-line-strong bg-sand-50 p-1">
      <button
        type="button"
        onClick={() => setTheme("light")}
        aria-pressed={theme === "light"}
        title="Light mode"
        className={`grid h-8 w-8 shrink-0 place-items-center rounded-md transition-colors ${
          theme === "light"
            ? "bg-sand-100 text-ink-900"
            : "text-ink-600 hover:text-ink-900"
        }`}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
      </button>

      <button
        type="button"
        onClick={() => setTheme("system")}
        aria-pressed={theme === "system"}
        title="System"
        className={`grid h-8 w-8 shrink-0 place-items-center rounded-md transition-colors ${
          theme === "system"
            ? "bg-sand-100 text-ink-900"
            : "text-ink-600 hover:text-ink-900"
        }`}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="2" y1="20" x2="22" y2="20" />
        </svg>
      </button>

      <button
        type="button"
        onClick={() => setTheme("dark")}
        aria-pressed={theme === "dark"}
        title="Dark mode"
        className={`grid h-8 w-8 shrink-0 place-items-center rounded-md transition-colors ${
          theme === "dark"
            ? "bg-sand-100 text-ink-900"
            : "text-ink-600 hover:text-ink-900"
        }`}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      </button>
    </div>
  );
}
