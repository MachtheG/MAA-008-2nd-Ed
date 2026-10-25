"use client";

import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageProvider";
import type { Dictionary } from "@/i18n/dictionaries";

type Method = "mpesa" | "crypto";
type DonateCopy = Dictionary["ui"]["donate"];

const amounts = [200, 500, 1000, 2500, 5000];
const inputCls =
  "w-full bg-sand-50 px-3.5 py-3 text-ink focus:outline-2 focus:outline-flag-green focus:-outline-offset-1";

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
    <div className="bg-sand-50 text-ink">
      {/* Method tabs */}
      <div className="grid grid-cols-2" role="tablist" aria-label={d.methodAria}>
        {tabs.map((m) => (
          <button
            key={m.id}
            role="tab"
            aria-selected={method === m.id}
            onClick={() => setMethod(m.id)}
            className={`px-2 py-3.5 text-sm font-semibold transition-colors sm:px-4 ${
              method === m.id ? "bg-flag-green text-sand-50" : "bg-surface text-ink-500 hover:text-ink-800"
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
              className={`px-4 py-2 text-sm font-semibold transition-colors active:scale-[0.97] ${
                !custom && amount === a ? "bg-flag-green text-sand-50" : "bg-surface text-ink-700 hover:bg-sand-200"
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
            className="w-24 bg-surface px-4 py-2 text-sm focus:outline-2 focus:outline-flag-green focus:-outline-offset-1"
          />
        </div>

        {/* Method-specific UI */}
        <div className="mt-7">
          {method === "mpesa" && <MpesaPanel amount={value} d={d} />}
          {method === "crypto" && <CryptoPanel amount={value} d={d} />}
        </div>

        {/* Backend flag — this disclosure is load-bearing honesty, not
            decoration (PRODUCT.md: the forms must never look live). */}
        <div className="mt-6 flex items-start gap-3 bg-flag-red/8 px-4 py-3.5 text-xs leading-relaxed text-ink-700">
          <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-flag-red text-sand-50 font-bold">
            !
          </span>
          <p>
            <strong className="text-ink-900">{d.notLiveTitle}</strong> {d.notLiveBody}
          </p>
        </div>
      </div>
    </div>
  );
}

function MpesaPanel({ amount, d }: { amount: number; d: DonateCopy }) {
  return (
    <div>
      <div className="space-y-4 bg-field-ochre/15 p-4">
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
      <input id="mpesa-phone" type="tel" placeholder={d.mpesaPlaceholder} className={inputCls} />

      <div className="mt-4 grid grid-cols-2 gap-px">
        <button type="button" className="bg-flag-green px-4 py-3.5 text-sm font-semibold text-sand-50 transition-transform active:scale-[0.97]">
          {d.stkPush} · KES {amount.toLocaleString()}
        </button>
        <button type="button" className="bg-surface px-4 py-3.5 text-sm font-semibold text-flag-green-dark transition-transform active:scale-[0.97]">
          {d.mpesaPrompt}
        </button>
      </div>
      <p className="mt-3 text-center text-sm text-muted">{d.stkNote}</p>
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
        readOnly
        value="[Campaign wallet address to be configured]"
        className="w-full bg-surface px-3.5 py-3 text-sm text-muted"
      />
      <button type="button" className="mt-4 w-full bg-flag-green px-6 py-3.5 text-base font-semibold text-sand-50 transition-transform active:scale-[0.97]">
        Send Crypto · KES {amount.toLocaleString()}
      </button>
      <p className="mt-3 text-center text-sm text-muted">{d.cryptoNote}</p>
    </div>
  );
}
