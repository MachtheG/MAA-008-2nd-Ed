"use client";

import { useState } from "react";

type Method = "mpesa" | "card" | "paypal";
const amounts = [200, 500, 1000, 2500, 5000];

export function DonateWidget() {
  const [method, setMethod] = useState<Method>("mpesa");
  const [amount, setAmount] = useState<number>(500);
  const [custom, setCustom] = useState("");
  const value = custom ? Number(custom) : amount;

  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-sand-50 shadow-sm">
      {/* Method tabs */}
      <div className="grid grid-cols-3 border-b border-line" role="tablist" aria-label="Payment method">
        {(
          [
            { id: "mpesa", label: "M-Pesa" },
            { id: "card", label: "Card" },
            { id: "paypal", label: "PayPal" },
          ] as { id: Method; label: string }[]
        ).map((m) => (
          <button
            key={m.id}
            role="tab"
            aria-selected={method === m.id}
            onClick={() => setMethod(m.id)}
            className={`px-4 py-3.5 text-sm font-semibold transition-colors ${
              method === m.id
                ? "bg-sand-50 text-flag-green-dark"
                : "bg-sand-100 text-ink-500 hover:text-ink-800"
            } ${method === m.id ? "border-b-2 border-flag-green" : ""}`}
          >
            {m.label}
          </button>
        ))}
      </div>

      <div className="p-7 sm:p-8">
        {/* Amount selector */}
        <p className="text-sm font-semibold text-ink-800">Choose an amount (KES)</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {amounts.map((a) => (
            <button
              key={a}
              type="button"
              onClick={() => { setAmount(a); setCustom(""); }}
              aria-pressed={!custom && amount === a}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                !custom && amount === a
                  ? "bg-flag-green text-sand-50"
                  : "border border-line-strong text-ink-700 hover:bg-ink-900/5"
              }`}
            >
              {a.toLocaleString()}
            </button>
          ))}
          <input
            type="number"
            min={1}
            inputMode="numeric"
            value={custom}
            onChange={(e) => setCustom(e.target.value)}
            placeholder="Other"
            aria-label="Custom amount in KES"
            className="w-24 rounded-full border border-line-strong bg-sand-50 px-4 py-2 text-sm focus:border-flag-green focus:outline-none focus:ring-2 focus:ring-flag-green/25"
          />
        </div>

        {/* Method-specific UI */}
        <div className="mt-7">
          {method === "mpesa" && <MpesaPanel amount={value} />}
          {method === "card" && <CardPanel amount={value} />}
          {method === "paypal" && <PaypalPanel amount={value} />}
        </div>

        {/* Backend flag */}
        <div className="mt-6 flex items-start gap-3 rounded-xl border border-dashed border-flag-red/40 bg-flag-red/[0.04] px-4 py-3 text-xs leading-relaxed text-ink-600">
          <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-flag-red/15 text-flag-red font-bold">!</span>
          <p>
            <strong className="text-ink-800">Not yet live.</strong> This is the
            donation experience only. Real transactions need backend
            integration &amp; credentials from you — Safaricom Daraja API
            (M-Pesa STK push), a card processor (e.g. Stripe/Flutterwave), and a
            PayPal business account — plus compliance with Kenyan campaign-finance
            rules. Nothing is charged.
          </p>
        </div>
      </div>
    </div>
  );
}

function MpesaPanel({ amount }: { amount: number }) {
  return (
    <div>
      <label htmlFor="mpesa-phone" className="mb-1.5 block text-sm font-semibold text-ink-800">
        M-Pesa phone number
      </label>
      <input
        id="mpesa-phone"
        type="tel"
        placeholder="e.g. 0712 345 678"
        className="w-full rounded-lg border border-line-strong bg-sand-50 px-3.5 py-3 focus:border-flag-green focus:outline-none focus:ring-2 focus:ring-flag-green/25"
      />
      <button
        type="button"
        className="mt-4 w-full rounded-full bg-flag-green px-6 py-3.5 text-base font-semibold text-sand-50 shadow-sm transition-transform hover:-translate-y-0.5"
      >
        Send STK push · KES {amount.toLocaleString()}
      </button>
      <p className="mt-3 text-center text-sm text-ink-500">
        You&apos;ll receive a prompt on your phone to enter your M-Pesa PIN.
      </p>
    </div>
  );
}

function CardPanel({ amount }: { amount: number }) {
  return (
    <div className="space-y-3">
      <input aria-label="Card number" placeholder="Card number" className="w-full rounded-lg border border-line-strong bg-sand-50 px-3.5 py-3 focus:border-flag-green focus:outline-none focus:ring-2 focus:ring-flag-green/25" />
      <div className="grid grid-cols-2 gap-3">
        <input aria-label="Expiry MM/YY" placeholder="MM / YY" className="rounded-lg border border-line-strong bg-sand-50 px-3.5 py-3 focus:border-flag-green focus:outline-none focus:ring-2 focus:ring-flag-green/25" />
        <input aria-label="CVC" placeholder="CVC" className="rounded-lg border border-line-strong bg-sand-50 px-3.5 py-3 focus:border-flag-green focus:outline-none focus:ring-2 focus:ring-flag-green/25" />
      </div>
      <button type="button" className="mt-1 w-full rounded-full bg-ink-900 px-6 py-3.5 text-base font-semibold text-sand-50 shadow-sm transition-transform hover:-translate-y-0.5">
        Donate KES {amount.toLocaleString()}
      </button>
      <p className="text-center text-xs text-ink-500">Card fields are illustrative — integrate a PCI-compliant processor.</p>
    </div>
  );
}

function PaypalPanel({ amount }: { amount: number }) {
  return (
    <div className="text-center">
      <button type="button" className="w-full rounded-full bg-[#ffc439] px-6 py-3.5 text-base font-bold text-[#003087] shadow-sm transition-transform hover:-translate-y-0.5">
        Pay with PayPal · KES {amount.toLocaleString()}
      </button>
      <p className="mt-3 text-sm text-ink-500">
        Redirects to PayPal once a business account &amp; SDK keys are configured.
      </p>
    </div>
  );
}
