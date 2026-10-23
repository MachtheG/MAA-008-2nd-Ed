---
name: Affey for Wajir (incumbent, pre-redesign)
description: Warm-paper editorial campaign site with restrained Kenyan flag-colour accents
colors:
  sand-50: "#f8f4ec"
  sand-100: "#f1ebdf"
  sand-200: "#e6dcc9"
  sand-300: "#d6c7a8"
  sand-400: "#c2ad87"
  ink-900: "#16130f"
  ink-800: "#221d17"
  ink-700: "#362f26"
  ink-600: "#4f463a"
  ink-500: "#6b6153"
  ink-400: "#8c8272"
  ink-300: "#aba08d"
  flag-green: "#0d6a4c"
  flag-green-dark: "#084a34"
  flag-green-deep: "#063c2b"
  flag-red: "#a52a1e"
  flag-black: "#14110d"
  ochre-300: "#e6c583"
  ochre-400: "#d9a94f"
  ochre-500: "#c68a2a"
  ochre-600: "#a56d1c"
typography:
  display:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(3rem, 9vw, 7.5rem)"
    fontWeight: 600
    lineHeight: 0.92
    letterSpacing: "-0.015em"
  body:
    fontFamily: "IBM Plex Sans, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "24px"
  full: "9999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "40px"
  xl: "64px"
components:
  button-primary:
    backgroundColor: "{colors.ink-900}"
    textColor: "{colors.sand-50}"
    rounded: "{rounded.full}"
    padding: "10px 20px"
  button-gold:
    backgroundColor: "{colors.ochre-500}"
    textColor: "{colors.ink-900}"
    rounded: "{rounded.full}"
    padding: "10px 20px"
---

# Design System: Affey for Wajir (incumbent — captured before redesign)

<!-- This file documents the SYSTEM AS IT STOOD when the Phase 1 redesign began. It is evidence
     and anti-reference for the redesign, per the brief's "turn generic into one-of-a-kind" goal
     and impeccable's "redesign replaces" model. It will be REPLACED (not merged) by the dealt
     direction from Phase 1/2 once chosen — see new-work's output for the file that supersedes
     this one. Keep this version in git history as the honest "before" baseline for Phase 6's
     before/after comparison. -->

## Overview

**Creative North Star: "The Arid-North Dossier"**

The incumbent system reads as an editorial dossier on a statesman: warm paper surfaces (never pure
white), a near-black warm ink, a single serif display face (Fraunces) over a technical sans body
(IBM Plex Sans), and the Kenyan flag's three colours used sparingly as rules, dots and a single
gradient bar — never as a wash. A topographic dot-grid and a faint contour-line texture gesture at
cartography and terrain without becoming decoration for its own sake. The system is sincere and
competent, built by someone who clearly cared about restraint (dark mode was deliberately removed;
flag colours are explicitly commented as "used with restraint, as rules and marks, never a wash").

Its weakness is not bad taste — it is *safety*. Every section follows the same grammar: an eyebrow
label, a heading, a paragraph, then either a 2–3 column card grid or a text/photo split. Nothing on
the page could not have been built from a component library in an afternoon. That sameness, not any
individual choice, is what the redesign (Phase 1–6) exists to replace.

**Key Characteristics:**
- Warm paper + warm near-black, never cool grey or pure white/black.
- One serif display face, one sans body face; no third face anywhere.
- Flag colours (black/red/green) appear only as: a 4px horizontal rule, small dots/markers, and text
  accents — never as a background fill.
- Every interactive surface uses `rounded-full` (buttons, chips, badges) or `rounded-2xl` (cards) —
  no sharp corners anywhere in the incumbent system.
- Reveal-on-scroll is the only motion idiom: translateY(18px)+opacity, once, via one shared
  `.reveal`/`.is-visible` utility and an `IntersectionObserver`-backed `<Reveal>` component.

## Colors

One warm "paper" neutral family carries 90% of every surface; the flag palette is reserved almost
entirely for identity marks, not fields.

### Primary
- **Flag Green** (`#0d6a4c`): the one color with "brand accent" duty — active nav underline, primary
  buttons (via its darker steps), focus ring, link/CTA text, verified-status dot.

### Secondary
- **Wajir Ochre/Gold** (`#d9a94f`, deep step `#c68a2a`): secondary accent — "gold" button variant,
  draft-status dot, numerals on vision-pillar/record cards, countdown digits on dark surfaces.

### Tertiary
- **Flag Red** (`#a52a1e`): used only for alarm/urgency — "Donate" button, TBC-status dot, Wajir HQ
  map marker, flag gradient rule. Never used decoratively.

### Neutral
- **Sand 50** (`#f8f4ec`): base page background (the "paper").
- **Sand 100** (`#f1ebdf`): the next tone step up, used for alternating section backgrounds.
- **Ink 900** (`#16130f`): primary text color and the dark-surface background (hero, footer, CTA band).
- **Ink 500/600** (`#6b6153` / `#4f463a`): secondary/body text on light surfaces.
- **line / line-strong** (`rgba(22,19,15,.12/.22)`): the one hairline-border color, used everywhere a
  card or divider needs an edge.

### Named Rules
**The Restraint Rule.** Flag colours are rules, dots and small text accents only; no section's
background is ever filled with black, red or green (the code comment states this explicitly — it is
a confirmed brand commitment, not incumbent habit, and the redesign must keep it even though the
*mechanism* for achieving it will change).

## Typography

**Display Font:** Fraunces (variable, optical sizing on, `ss01`/`dlig` features, -0.015em tracking)
**Body Font:** IBM Plex Sans (400/500/600/700)

**Character:** A literary/diplomatic serif paired with a faintly technical, telecom-grade sans — the
pairing itself is a point of view (not Inter/Georgia), already a differentiator worth keeping.

### Hierarchy
- **Mega** (600, `clamp(3rem, 9vw, 7.5rem)`, lh 0.92): home hero name only.
- **Hero** (600, `clamp(2.5rem, 6.5vw, 5rem)`, lh 0.98): interior page `<h1>` in `PageHero`.
- **Display** (600, `clamp(2rem, 4.5vw, 3.25rem)`, lh 1.02): large section headings.
- **Body** (400, 16–18px, lh 1.5–1.625): running text, 65–75ch measure via `max-w-*` containers.
- **Label** (600, 11–12px, tracking 0.14–0.18em, uppercase): kickers, countdown unit labels,
  status badges, footer column headers.

### Named Rules
**The One-Pair Rule.** Exactly two faces, system-wide; no monospace, no third display face.

## Layout

Single `Container` component drives three max-widths (`default` 72rem / `wide` 80rem / `prose` 48rem),
with `px-5 sm:px-8` outer gutters at every width — the equal-margin discipline taste-skill's house
rules also require, already present here. Section rhythm is `py-12/16/20/24/28` scaling up with
viewport (roughly 48–112px), noticeably tighter than taste-skill's 120–240px desktop standard. Grids
are the default composition device: 2–3 column card grids (Vision, Record, News) and a 12-column
text/photo split that alternates side on Story. Mobile collapses every grid to one column; the Wajir
map panel becomes `lg:sticky` only above 1024px.

## Elevation & Depth

Hybrid, leaning flat: most surfaces are flat with a `border-line` hairline edge, but cards gain
`hover:shadow-md`/`hover:shadow-lg` on interaction and the hero photo frame, mobile menu and countdown
digits carry an at-rest `shadow-sm`/`shadow-2xl`. This at-rest shadow usage is exactly what
taste-skill's house rules forbid ("no shadows on things at rest… only on what truly floats") and is a
primary target for the redesign.

### Shadow Vocabulary
- **card-hover** (`shadow-md`/`shadow-lg`): Vision/Record article cards on hover only.
- **photo-frame** (`shadow-xl`/`shadow-2xl`): hero portrait frame, PhotoSlot images — at rest.
- **floating** (`shadow-sm`): buttons, mobile menu panel — at rest.

## Shapes

Two corner languages only, both soft: `rounded-full` for every clickable chip/button/badge, and
`rounded-2xl` (16px) for every card/panel/photo frame. No sharp corners exist anywhere in the current
build. Hairline 1px borders (`border-line`) delineate almost every card and divider — this is the
other primary taste-skill conflict ("no thin rules").

## Components

### Buttons
- **Shape:** fully round (`rounded-full`), no sharp-corner variant exists.
- **Primary (`solid`):** ink-900 fill, sand-50 text.
- **Gold:** ochre-500 fill, ink-900 text — used for the "visionary/primary action" slot (hero, CTAs).
- **Outline / Ghost:** transparent, ink-900 border or no border; hover fills `ink-900/5`.
- **Hover/Focus:** `-translate-y-0.5` lift + `shadow-sm`; focus-visible gets a 3px flag-green outline
  ring with 2px offset, sitewide (defined once in `globals.css`, inherited everywhere — a real asset
  to carry forward).

### Chips / Badges
- **StatusBadge:** rounded-full pill, colored dot + label, three states (verified=green,
  draft=ochre, tbc=red) — this is campaign-governance UI, not decorative, and must be redesigned
  without losing its three-state legibility.

### Cards / Containers
- **Corner:** `rounded-2xl` uniformly.
- **Background:** sand-50 or sand-100, never a gradient fill.
- **Shadow:** none at rest; `hover:shadow-md/lg` only.
- **Border:** `border border-line` (1px, ~12% opacity ink) on nearly every card — the single most
  overused device in the incumbent system.

### Inputs / Fields
- **Style:** `rounded-lg`, `border-line-strong`, sand-50 fill.
- **Focus:** border shifts to flag-green + a 2px flag-green/25 ring (consistent with the global
  focus-visible treatment — good existing pattern, keep the mechanism even as the shape changes).

### Navigation
- **SiteHeader:** sticky, two-tier (an `ElectionCountdownBar` strip above the main bar on every
  page — unusual and worth keeping as a signature device), wordmark + coat-of-arms crest, desktop
  inline links with an active-state underline, full-bleed slide-down panel on mobile with a CTA at
  its foot. This countdown-above-nav pattern is one of the few things in the incumbent system that is
  not a stock layout — a candidate to preserve or even amplify as the site's one recognizable device.

### Wajir Map (signature component)
A hand-authored SVG of the county's six constituencies, traced to real proportions, click/keyboard
selectable, synced to a detail panel. This is the strongest, most distinctive asset in the codebase —
no competitor's site has this — and should be a centerpiece of the new direction, not merely ported.

## Do's and Don'ts

### Do:
- **Do** keep the flag-colour Restraint Rule (marks and rules, never a fill) — it is a stated brand
  commitment, not incumbent habit.
- **Do** keep the global focus-visible ring and `prefers-reduced-motion` handling — both already
  correct and worth carrying forward verbatim into the new motion system.
- **Do** keep the ElectionCountdownBar-above-nav device and the hand-traced Wajir map as the two
  signature, non-generic assets worth building the new identity around.

### Don't:
- **Don't** carry forward the hairline-border-on-every-card pattern, the uppercase-tracked Kicker
  eyebrow on every section, at-rest shadows, or the repeated 2–3-identical-card grid — these are
  exactly the "could be any template" tells the redesign brief calls out, and they are also what
  taste-skill's house rules independently forbid.
- **Don't** reinterpret the Kenyan flag colours as a new palette family (e.g. tinting them pastel or
  using them as large fields) — they are a civic identity constraint, not a design lever.
