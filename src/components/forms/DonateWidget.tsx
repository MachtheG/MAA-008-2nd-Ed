"use client";

import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageProvider";
import type { Dictionary } from "@/i18n/dictionaries";

type Method = "mpesa" | "crypto";
type DonateCopy = Dictionary["ui"]["donate"];

const amounts = [200, 500, 1000, 2500, 5000];

export function DonateWidget() {
  const { t } = useLanguage();
  const d = t.ui.donate;
  const [method, setMethod] = useState<Method>("mpesa");
  const [amount, setAmount] = useState<number>(500);
  const [custom, setCustom] = useState("");
  const value = custom ? Number(custom) : amount;

  const tabs: { id: Method; label: string }[] = [
    { id: "mpesa", label: d.mpesa },
    { id: "crypto", label: d.crypto },
  ];

  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-sand-50 shadow-sm">
      {/* Method tabs */}
      <div className="grid grid-cols-2 border-b border-line" role="tablist" aria-label={d.methodAria}>
        {tabs.map((m) => (
          <button
            key={m.id}
            role="tab"
            aria-selected={method === m.id}
            onClick={() => setMethod(m.id)}
            className={`px-2 py-3.5 text-sm font-semibold transition-colors sm:px-4 ${
              method === m.id
                ? "border-b-2 border-flag-green bg-sand-50 text-flag-green-dark"
                : "bg-sand-100 text-ink-500 hover:text-ink-800"
            }`}
          >
            {m.label}
          </button>
        ))}
      </div>

      <div className="p-5 sm:p-7 lg:p-8">
        {/* Amount selector */}
        <p className="text-sm font-semibold text-ink-800">{d.chooseAmount}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {amounts.map((a) => (
            <button
              key={a}
              type="button"
              onClick={() => {
                setAmount(a);
                setCustom("");
              }}
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
            placeholder={d.other}
            aria-label={d.customAria}
            className="w-24 rounded-full border border-line-strong bg-sand-50 px-4 py-2 text-sm focus:border-flag-green focus:outline-none focus:ring-2 focus:ring-flag-green/25"
          />
        </div>

        {/* Method-specific UI */}
        <div className="mt-7">
          {method === "mpesa" && <MpesaPanel amount={value} d={d} />}
          {method === "crypto" && <CryptoPanel amount={value} d={d} />}
        </div>

        {/* Backend flag */}
        <div className="mt-6 flex items-start gap-3 rounded-xl border border-dashed border-flag-red/40 bg-flag-red/4 px-4 py-3 text-xs leading-relaxed text-ink-600">
          <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-flag-red/15 font-bold text-flag-red">
            !
          </span>
          <p>
            <strong className="text-ink-800">{d.notLiveTitle}</strong> {d.notLiveBody}
          </p>
        </div>
      </div>
    </div>
  );
}

function MpesaPanel({ amount, d }: { amount: number; d: DonateCopy }) {
  return (
    <div>
      <div className="space-y-4 rounded-lg border border-ochre-400/30 bg-ochre-400/5 p-4">
        <div>
          <p className="text-sm font-semibold text-ink-800">{d.mpesaPaybill}</p>
          <p className="mt-1 text-sm text-ink-600">Paybill Business No: 008008</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-ink-800">{d.mpesaAccount}</p>
          <p className="mt-1 text-sm text-ink-600">Account Reference: MA-008</p>
        </div>
      </div>

      <label htmlFor="mpesa-phone" className="mb-1.5 mt-5 block text-sm font-semibold text-ink-800">
        {d.mpesaPhone}
      </label>
      <input
        id="mpesa-phone"
        type="tel"
        placeholder={d.mpesaPlaceholder}
        className="w-full rounded-lg border border-line-strong bg-sand-50 px-3.5 py-3 focus:border-flag-green focus:outline-none focus:ring-2 focus:ring-flag-green/25"
      />

      <div className="mt-4 grid grid-cols-2 gap-3">
        <button
          type="button"
          className="rounded-full bg-flag-green px-4 py-3.5 text-sm font-semibold text-sand-50 shadow-sm transition-transform hover:-translate-y-0.5"
        >
          {d.stkPush} · KES {amount.toLocaleString()}
        </button>
        <button
          type="button"
          className="rounded-full border border-flag-green bg-sand-50 px-4 py-3.5 text-sm font-semibold text-flag-green-dark transition-transform hover:-translate-y-0.5"
        >
          {d.mpesaPrompt}
        </button>
      </div>
      <p className="mt-3 text-center text-sm text-ink-500">{d.stkNote}</p>
    </div>
  );
}

function CryptoPanel({ amount, d }: { amount: number; d: DonateCopy }) {
  return (
    <div>
      <label htmlFor="crypto-address" className="mb-1.5 block text-sm font-semibold text-ink-800">
        {d.cryptoAddress}
      </label>
      <input
        id="crypto-address"
        type="text"
        placeholder="0x... or 1... or bc1..."
        readOnly
        value="[Campaign wallet address to be configured]"
        className="w-full rounded-lg border border-line-strong bg-sand-100 px-3.5 py-3 text-sm text-ink-500"
      />
      <button
        type="button"
        className="mt-4 w-full rounded-full border-2 border-flag-green bg-sand-50 px-6 py-3.5 text-base font-semibold text-flag-green-dark shadow-sm transition-transform hover:-translate-y-0.5"
      >
        Send Crypto · KES {amount.toLocaleString()}
      </button>
      <p className="mt-3 text-center text-sm text-ink-500">{d.cryptoNote}</p>
    </div>
  );
}
