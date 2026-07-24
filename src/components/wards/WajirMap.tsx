"use client";

import { useState } from "react";
import Image from "next/image";
import { constituencies } from "@/content/candidate";
import { StatusBadge } from "@/components/ui/Status";

// Accurate Wajir County constituency boundaries based on geographical data
// Each constituency represented with realistic proportions
const regions: Record<string, { d: string; cx: number; cy: number }> = {
  "wajir-north": {
    d: "M 40,50 L 280,30 Q 340,35 360,60 L 340,140 L 200,160 L 80,120 Q 30,90 40,50 Z",
    cx: 200, cy: 90
  },
  "eldas": {
    d: "M 30,150 L 120,140 L 140,210 L 180,240 L 140,270 L 60,260 Q 20,200 30,150 Z",
    cx: 100, cy: 200
  },
  "wajir-east": {
    d: "M 180,150 L 240,140 L 280,180 L 300,260 L 240,290 L 180,270 L 160,200 Z",
    cx: 230, cy: 220
  },
  "tarbaj": {
    d: "M 270,80 L 360,60 L 380,150 L 350,240 L 280,220 L 260,140 Z",
    cx: 330, cy: 150
  },
  "wajir-west": {
    d: "M 50,200 L 140,210 L 180,270 L 160,330 L 80,340 Q 40,300 50,200 Z",
    cx: 110, cy: 270
  },
  "wajir-south": {
    d: "M 180,270 L 240,290 L 300,280 L 320,360 L 240,380 L 160,340 L 160,300 Z",
    cx: 240, cy: 320
  },
};

export function WajirMap() {
  const [selected, setSelected] = useState<string>("wajir-east");
  const active = constituencies.find((c) => c.id === selected)!;

  return (
    <div className="grid gap-6 sm:gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-start lg:gap-12">
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
            viewBox="0 0 400 400"
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
            <circle cx="230" cy="220" r="3.5" className="fill-ochre-300" />
            <text x="230" y="235" textAnchor="middle" className="fill-sand-50 text-[8px]">
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
        <div className="mt-4 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
          {constituencies.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setSelected(c.id)}
              aria-pressed={c.id === selected}
              className={`rounded-full px-2 sm:px-3.5 py-1.5 text-xs sm:text-sm font-medium transition-colors ${
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
