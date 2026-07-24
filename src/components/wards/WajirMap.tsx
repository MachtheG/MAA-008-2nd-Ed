"use client";

import { useState } from "react";
import Image from "next/image";
import { constituencies } from "@/content/candidate";
import { StatusBadge } from "@/components/ui/Status";

// Schematic (NOT to scale) region shapes for Wajir's 6 constituencies.
// Replace with real GeoJSON/SVG boundaries when supplied by the campaign.
const regions: Record<string, { d: string; cx: number; cy: number }> = {
  "wajir-north": { d: "M60,40 L360,40 Q382,40 380,72 L378,150 L212,176 L60,152 Q44,118 50,80 Z", cx: 210, cy: 100 },
  "eldas": { d: "M50,168 L152,160 L168,272 L62,292 Q40,250 46,202 Z", cx: 104, cy: 224 },
  "wajir-east": { d: "M168,182 L226,184 L246,300 L176,316 L162,276 Z", cx: 202, cy: 246 },
  "tarbaj": { d: "M232,186 L380,166 Q396,192 390,242 L370,320 L248,302 Z", cx: 314, cy: 240 },
  "wajir-west": { d: "M72,302 L166,288 L186,396 Q142,416 92,406 Q66,360 70,322 Z", cx: 122, cy: 348 },
  "wajir-south": { d: "M202,316 L370,336 Q382,382 356,410 L222,426 L190,400 Z", cx: 288, cy: 372 },
};

export function WajirMap() {
  const [selected, setSelected] = useState<string>("wajir-east");
  const active = constituencies.find((c) => c.id === selected)!;

  return (
    <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-start lg:gap-12">
      {/* Reference image and Map */}
      <div className="space-y-6">
        {/* Landscape reference */}
        <div className="rounded-2xl border border-line overflow-hidden bg-sand-50 shadow-sm">
          <Image
            src="/images/Wajir Landscape.jpeg"
            alt="Wajir County landscape — geographical reference"
            width={600}
            height={400}
            className="w-full h-auto"
          />
          <p className="p-3 text-center text-xs text-ink-500">Reference: Wajir County landscape</p>
        </div>

        {/* Interactive Map */}
        <div className="rounded-2xl border border-line bg-sand-50 p-4 sm:p-6">
          <p className="mb-3 text-center text-xs font-semibold uppercase tracking-wider text-ink-500">
            Six constituencies, one county
          </p>
          <svg
            viewBox="0 0 420 460"
            className="h-auto w-full"
            role="group"
            aria-label="Interactive map of Wajir County's six constituencies"
          >
          {constituencies.map((c) => {
            const r = regions[c.id];
            const isActive = c.id === selected;
            return (
              <g key={c.id}>
                <path
                  d={r.d}
                  tabIndex={0}
                  role="button"
                  aria-pressed={isActive}
                  aria-label={c.name}
                  onClick={() => setSelected(c.id)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setSelected(c.id);
                    }
                  }}
                  className={`cursor-pointer outline-none transition-colors duration-200 focus-visible:stroke-flag-green ${
                    isActive
                      ? "fill-flag-green stroke-flag-green-dark"
                      : "fill-sand-200 stroke-ink-500/40 hover:fill-ochre-300"
                  }`}
                  strokeWidth={2}
                  strokeLinejoin="round"
                />
                <text
                  x={r.cx}
                  y={r.cy}
                  textAnchor="middle"
                  className={`pointer-events-none select-none text-[11px] font-semibold ${
                    isActive ? "fill-sand-50" : "fill-ink-700"
                  }`}
                >
                  {c.name}
                </text>
              </g>
            );
          })}
          {/* County HQ marker on Wajir East */}
          <g className="pointer-events-none">
            <circle cx="202" cy="262" r="3.5" className="fill-ochre-300" />
            <text x="202" y="278" textAnchor="middle" className="fill-sand-50 text-[8px]">
              Wajir town (HQ)
            </text>
          </g>
        </svg>
        <p className="mt-3 text-center text-xs text-ink-500">
          Schematic map — not to scale. Replace with official boundaries.
        </p>
        </div>
      </div>

      {/* Detail panel */}
      <div className="lg:sticky lg:top-24">
        <div className="rounded-2xl border border-line bg-sand-100 p-7 sm:p-8">
          <div className="flex items-center justify-between gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-flag-green-dark">
              Constituency
            </p>
            <StatusBadge status={active.status} />
          </div>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink-900">
            {active.name}
          </h2>
          <p className="mt-4 leading-relaxed text-ink-600">{active.note}</p>

          <div className="mt-6 rounded-xl border border-dashed border-ochre-500/40 bg-ochre-400/[0.07] p-4 text-sm text-ink-600">
            <p className="font-semibold text-ink-800">What will live here</p>
            <p className="mt-1">
              Local priorities, active projects, ward representatives and contact
              details — once supplied by the campaign for each area.
            </p>
          </div>
        </div>

        {/* Quick selector */}
        <div className="mt-4 flex flex-wrap gap-2">
          {constituencies.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setSelected(c.id)}
              aria-pressed={c.id === selected}
              className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors ${
                c.id === selected
                  ? "bg-flag-green text-sand-50"
                  : "border border-line text-ink-600 hover:bg-ink-900/5"
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
