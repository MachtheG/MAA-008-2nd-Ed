"use client";

import { useState } from "react";
import { useContent } from "@/content/useContent";
import { useLanguage } from "@/i18n/LanguageProvider";

export function VolunteerForm() {
  const { t } = useLanguage();
  const { constituencies } = useContent();
  const [submitted, setSubmitted] = useState(false);
  const f = t.ui.volunteerForm;

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // NOTE: No backend wired. This only demonstrates the UX.
    // Connect to a real endpoint / CRM (and add spam protection) before launch.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-flag-green/8 p-6 text-center sm:p-8">
        <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-flag-green text-sand-50">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
            <path
              d="M4 11l5 5 9-10"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h3 className="mt-4 font-display text-xl font-semibold text-ink">{f.thanksHeading}</h3>
        <p className="mx-auto mt-2 max-w-sm text-sm text-ink-600">{f.thanksBody}</p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-5 text-sm font-semibold text-flag-green-dark underline underline-offset-4"
        >
          {f.submitAnother}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-sand-50 p-5 sm:p-7 lg:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label={f.fullName} htmlFor="v-name" required>
          <input id="v-name" name="name" type="text" required autoComplete="name" className={inputCls} />
        </Field>
        <Field label={f.phone} htmlFor="v-phone" required>
          <input
            id="v-phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="0712 345 678"
            className={inputCls}
          />
        </Field>
        <Field label={f.email} htmlFor="v-email">
          <input id="v-email" name="email" type="email" autoComplete="email" className={inputCls} />
        </Field>
        <Field label={f.constituency} htmlFor="v-ward">
          <select id="v-ward" name="ward" className={inputCls} defaultValue="">
            <option value="" disabled>
              {f.selectPlaceholder}
            </option>
            {constituencies.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <fieldset className="mt-6">
        <legend className="text-sm font-semibold text-ink-800">{f.howHelp}</legend>
        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          {f.interests.map((it) => (
            <label
              key={it}
              className="flex cursor-pointer items-center gap-2.5 bg-surface px-3.5 py-2.5 text-sm text-ink-700 hover:bg-sand-200"
            >
              <input
                type="checkbox"
                name="interests"
                value={it}
                className="h-4 w-4 shrink-0 accent-flag-green"
              />
              <span className="min-w-0">{it}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <button
        type="submit"
        className="mt-7 w-full bg-flag-green px-6 py-3.5 text-base font-semibold text-sand-50 transition-transform active:scale-[0.97] sm:w-auto sm:px-10"
      >
        {f.submit}
      </button>
      <p className="mt-3 text-xs text-muted">{f.demoNote}</p>
    </form>
  );
}

const inputCls =
  "w-full bg-surface px-3.5 py-2.5 text-ink placeholder:text-ink-400 focus:outline-2 focus:outline-flag-green focus:-outline-offset-1";

function Field({
  label,
  htmlFor,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-semibold text-ink-800">
        {label}
        {required && <span className="ml-0.5 text-flag-red">*</span>}
      </label>
      {children}
    </div>
  );
}
