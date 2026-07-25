"use client";

import { useState } from "react";
import { useContent } from "@/content/useContent";
import { useLanguage } from "@/i18n/LanguageProvider";
import { StatusBadge } from "@/components/ui/Status";

/**
 * Wajir County, traced from the county constituency map supplied by the
 * campaign (public/images/wajirc.jpeg).
 *
 * Coordinates live in the reference image's own space (360 × 545), so the
 * silhouette keeps the county's real proportions — tall, with the wide
 * northern lobe, the eastern spur at Wajir East, and the broad southern mass.
 *
 * Neighbouring regions share identical vertices, so the six pieces tile with
 * no seams or gaps. Boundaries are indicative, not survey-grade — confirm
 * against official IEBC shapefiles before publishing.
 */
const MAP_W = 360;
const MAP_H = 545;

type Region = {
  /** Polygon path in the 360 × 545 reference space. */
  d: string;
  /** Label anchor (visual centroid). */
  cx: number;
  cy: number;
  /**
   * Break the label across two lines. Wajir East is a narrow eastern spur —
   * a single line ("Wajir Mashariki" in Kiswahili) spills past its border.
   */
  stack?: boolean;
};

const regions: Record<string, Region> = {
  "wajir-north": {
    d: "M150,8 L193,80 L218,133 L152,156 L85,145 L24,152 L33,138 L40,110 L52,82 L68,58 L88,38 L118,18 Z",
    cx: 118,
    cy: 95,
  },
  eldas: {
    d: "M24,152 L85,145 L152,156 L158,215 L28,222 L23,190 Z",
    cx: 88,
    cy: 186,
  },
  "wajir-west": {
    d: "M28,222 L158,215 L180,283 L90,318 L72,298 L45,275 L33,250 Z",
    cx: 105,
    cy: 262,
  },
  tarbaj: {
    d: "M152,156 L218,133 L275,180 L252,280 L180,283 L158,215 Z",
    cx: 208,
    cy: 212,
  },
  "wajir-east": {
    d: "M275,180 L338,236 L330,265 L320,295 L252,280 Z",
    cx: 297,
    cy: 228,
    stack: true,
  },
  "wajir-south": {
    d: "M180,283 L252,280 L320,295 L315,360 L308,405 L298,445 L285,475 L262,505 L235,530 L205,512 L180,478 L150,440 L125,398 L105,355 L90,318 Z",
    cx: 215,
    cy: 392,
  },
};

/** County HQ — Wajir town, in Wajir East. */
const HQ = { x: 294, y: 262 };

/** Splits a label at its last space, so the longer word lands on line two. */
function splitLabel(name: string): string[] {
  const i = name.lastIndexOf(" ");
  return i === -1 ? [name] : [name.slice(0, i), name.slice(i + 1)];
}

export function WajirMap() {
  const { t } = useLanguage();
  const { constituencies } = useContent();
  const [selected, setSelected] = useState<string>("wajir-east");
  const active = constituencies.find((c) => c.id === selected) ?? constituencies[0];
  const nf = new Intl.NumberFormat("en-KE");

  return (
    <div className="grid gap-6 sm:gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-start lg:gap-12">
      {/* Map */}
      <div className="rounded-2xl border border-line bg-sand-50 p-4 sm:p-6">
        <p className="mb-4 text-center text-xs font-semibold uppercase tracking-wider text-ink-500">
          {t.ui.wards.mapTitle}
        </p>

        <svg
          viewBox={`0 0 ${MAP_W} ${MAP_H}`}
          className="mx-auto h-auto w-full max-w-76 sm:max-w-sm"
          role="group"
          aria-label={t.ui.wards.mapAria}
        >
          {/* Soft drop shadow so the county reads as one landmass */}
          <defs>
            <filter id="wajir-shadow" x="-10%" y="-6%" width="120%" height="112%">
              <feDropShadow
                dx="0"
                dy="3"
                stdDeviation="4"
                floodColor="#3b2f24"
                floodOpacity="0.18"
              />
            </filter>
          </defs>

          <g filter="url(#wajir-shadow)">
            {constituencies.map((c) => {
              const r = regions[c.id];
              if (!r) return null;
              const isActive = c.id === selected;
              return (
                <path
                  key={c.id}
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
                  className={`cursor-pointer outline-none transition-colors duration-200 focus-visible:stroke-ink-900 ${
                    isActive
                      ? "fill-flag-green stroke-flag-green-dark"
                      : "fill-sand-200 stroke-ink-500/45 hover:fill-ochre-300"
                  }`}
                  strokeWidth={isActive ? 2.5 : 1.5}
                  strokeLinejoin="round"
                />
              );
            })}
          </g>

          {/* Labels sit above every polygon so neighbours never clip them */}
          {constituencies.map((c) => {
            const r = regions[c.id];
            if (!r) return null;
            const isActive = c.id === selected;
            // Split on the last space so "Wajir Mashariki" stacks as
            // "Wajir" / "Mashariki" rather than overflowing its region.
            const lines = r.stack ? splitLabel(c.name) : [c.name];
            const startY = r.cy - ((lines.length - 1) * 13) / 2;
            return (
              <text
                key={`${c.id}-label`}
                x={r.cx}
                y={startY}
                textAnchor="middle"
                dominantBaseline="middle"
                paintOrder="stroke"
                stroke={isActive ? "#1d5c3a" : "#f7f1e6"}
                strokeWidth={3}
                strokeLinejoin="round"
                className={`pointer-events-none select-none text-[12px] font-semibold ${
                  isActive ? "fill-sand-50" : "fill-ink-800"
                }`}
              >
                {lines.map((line, i) => (
                  <tspan key={line} x={r.cx} dy={i === 0 ? 0 : 13}>
                    {line}
                  </tspan>
                ))}
              </text>
            );
          })}

          {/* County HQ marker. Labelled in the legend below rather than on the
              map itself, so it never collides with the constituency labels. */}
          <g className="pointer-events-none">
            <title>{t.ui.wards.hqLabel}</title>
            <circle
              cx={HQ.x}
              cy={HQ.y}
              r={4.5}
              className="fill-flag-red stroke-sand-50"
              strokeWidth={2}
            />
          </g>
        </svg>

        <p className="mt-4 flex items-center justify-center gap-2 text-xs font-medium text-ink-600">
          <span
            aria-hidden="true"
            className="h-2.5 w-2.5 shrink-0 rounded-full bg-flag-red ring-2 ring-sand-50"
          />
          {t.ui.wards.hqLabel}
        </p>

        <p className="mx-auto mt-3 max-w-sm text-center text-xs leading-relaxed text-ink-500">
          {t.ui.wards.mapCaption}
        </p>
      </div>

      {/* Detail panel */}
      <div className="lg:sticky lg:top-24">
        <div className="rounded-2xl border border-line bg-sand-100 p-5 sm:p-7 lg:p-8">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-flag-green-dark">
              {t.ui.wards.constituencyLabel}
            </p>
            <StatusBadge status={active.status} />
          </div>
          <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink-900 sm:text-3xl">
            {active.name}
          </h2>

          {/* Population & voters, from the reference constituency map */}
          <dl className="mt-5 grid grid-cols-2 gap-3">
            <div className="rounded-xl border border-line bg-sand-50 px-4 py-3">
              <dt className="text-xs font-medium text-ink-500">
                {t.ui.wards.population}
              </dt>
              <dd className="mt-0.5 font-display text-xl font-semibold tabular-nums text-ink-900">
                {nf.format(active.population)}
              </dd>
            </div>
            <div className="rounded-xl border border-line bg-sand-50 px-4 py-3">
              <dt className="text-xs font-medium text-ink-500">
                {t.ui.wards.voters}
              </dt>
              <dd className="mt-0.5 font-display text-xl font-semibold tabular-nums text-flag-green-dark">
                {nf.format(active.voters)}
              </dd>
            </div>
          </dl>

          <p className="mt-5 leading-relaxed text-ink-600">{active.note}</p>

          <div className="mt-6 rounded-xl border border-dashed border-ochre-500/40 bg-ochre-400/[0.07] p-4 text-sm text-ink-600">
            <p className="font-semibold text-ink-800">
              {t.ui.wards.whatLivesHereTitle}
            </p>
            <p className="mt-1">{t.ui.wards.whatLivesHereBody}</p>
          </div>
        </div>

        {/* Quick selector */}
        <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:flex lg:flex-wrap">
          {constituencies.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setSelected(c.id)}
              aria-pressed={c.id === selected}
              className={`rounded-full px-3 py-2 text-center text-xs font-medium transition-colors sm:text-sm ${
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
