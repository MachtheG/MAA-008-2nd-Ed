"use client";

import { useState } from "react";
import { constituencies } from "@/content/candidate";

const interests = [
  "Door-to-door outreach",
  "Host a ward meeting",
  "Social media",
  "Events & logistics",
  "Youth mobilisation",
  "Women's network",
];

export function VolunteerForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // NOTE: No backend wired. This only demonstrates the UX.
    // Connect to a real endpoint / CRM (and add spam protection) before launch.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-flag-green/30 bg-flag-green/5 p-8 text-center">
        <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-flag-green text-sand-50">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
            <path d="M4 11l5 5 9-10" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="mt-4 font-display text-xl font-semibold text-ink-900">
          Thank you for stepping up.
        </h3>
        <p className="mx-auto mt-2 max-w-sm text-sm text-ink-600">
          This is a demo submission — the form is not yet connected to a backend.
          Wire it to your CRM / email service to start collecting real sign-ups.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-5 text-sm font-semibold text-flag-green-dark underline underline-offset-4"
        >
          Submit another response
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-line bg-sand-50 p-7 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" htmlFor="v-name" required>
          <input id="v-name" name="name" type="text" required autoComplete="name" className={inputCls} />
        </Field>
        <Field label="Phone number" htmlFor="v-phone" required>
          <input id="v-phone" name="phone" type="tel" required autoComplete="tel" placeholder="0712 345 678" className={inputCls} />
        </Field>
        <Field label="Email (optional)" htmlFor="v-email">
          <input id="v-email" name="email" type="email" autoComplete="email" className={inputCls} />
        </Field>
        <Field label="Your constituency" htmlFor="v-ward">
          <select id="v-ward" name="ward" className={inputCls} defaultValue="">
            <option value="" disabled>Select…</option>
            {constituencies.map((c) => (
              <option key={c.id} value={c.id}>{c.name}</option>
            ))}
          </select>
        </Field>
      </div>

      <fieldset className="mt-6">
        <legend className="text-sm font-semibold text-ink-800">How would you like to help?</legend>
        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          {interests.map((it) => (
            <label key={it} className="flex cursor-pointer items-center gap-2.5 rounded-lg border border-line bg-sand-100/50 px-3.5 py-2.5 text-sm text-ink-700 hover:bg-sand-100">
              <input type="checkbox" name="interests" value={it} className="h-4 w-4 accent-flag-green" />
              {it}
            </label>
          ))}
        </div>
      </fieldset>

      <button
        type="submit"
        className="mt-7 w-full rounded-full bg-flag-green px-6 py-3.5 text-base font-semibold text-sand-50 shadow-sm transition-transform hover:-translate-y-0.5 sm:w-auto sm:px-10"
      >
        Join the campaign
      </button>
      <p className="mt-3 text-xs text-ink-500">
        Demo form — not yet connected to a backend. No data is stored or sent.
      </p>
    </form>
  );
}

const inputCls =
  "w-full rounded-lg border border-line-strong bg-sand-50 px-3.5 py-2.5 text-ink-900 placeholder:text-ink-400 focus:border-flag-green focus:outline-none focus:ring-2 focus:ring-flag-green/25";

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
