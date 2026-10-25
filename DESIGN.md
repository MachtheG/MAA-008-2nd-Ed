---
name: Affey for Wajir — "The Dossier" (v2)
description: An axis-organised printed-report visual language for a statesman's campaign — flat colour chapters, square corners, no gradients, no shadows at rest
colors:
  bg: "#f8f4ec"
  surface: "#f1ebdf"
  ink: "#16130f"
  muted: "#6b6153"
  accent: "#084a34"
  accent-ink: "#f8f4ec"
  field-dossier: "#16130f"
  field-dossier-ink: "#f8f4ec"
  field-green: "#063c2b"
  field-green-ink: "#f8f4ec"
  field-ochre: "#d9a94f"
  field-ochre-ink: "#16130f"
  field-paper: "#f8f4ec"
  field-paper-ink: "#16130f"
  flag-green: "#0d6a4c"
  flag-green-dark: "#084a34"
  flag-red: "#a52a1e"
  flag-black: "#14110d"
  ochre-500: "#c68a2a"
typography:
  display:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(4rem, 2rem + 8.3vw, 8rem)"
    fontWeight: 600
    lineHeight: 0.92
    letterSpacing: "-0.02em to -0.035em (scales with size, see type.md)"
  head:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(2rem, 1.3rem + 3.2vw, 4rem)"
    fontWeight: 600
    lineHeight: 1.04
  lead:
    fontFamily: "IBM Plex Sans, system-ui, sans-serif"
    fontSize: "clamp(1.25rem, 1.1rem + 0.7vw, 1.625rem)"
    fontWeight: 400
    lineHeight: 1.35
  body:
    fontFamily: "IBM Plex Sans, system-ui, sans-serif"
    fontSize: "clamp(1.0625rem, 1rem + 0.25vw, 1.1875rem)"
    fontWeight: 400
    lineHeight: 1.55
  small:
    fontFamily: "IBM Plex Sans, system-ui, sans-serif"
    fontSize: "clamp(0.8125rem, 0.79rem + 0.1vw, 0.875rem)"
    fontWeight: 400
    lineHeight: 1.45
rounded:
  page: "0px"
  pill: "9999px (StatusBadge only — see Named Rules)"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.bg}"
    rounded: "{rounded.page}"
    padding: "11px 20px (md) / 12px 28px (lg)"
  button-accent:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.accent-ink}"
    rounded: "{rounded.page}"
    padding: "11px 20px (md) / 12px 28px (lg)"
  button-urgent:
    backgroundColor: "{colors.flag-red}"
    textColor: "{colors.bg}"
    rounded: "{rounded.page}"
    padding: "11px 20px (md) / 12px 28px (lg)"
---

# Design System: Affey for Wajir — "The Dossier" (v2)

<!-- Supersedes the pre-redesign DESIGN.md captured in Phase 1 (see git history on
     redesign/v2: "docs: capture product truth and incumbent design system before
     redesign"). This file documents the SHIPPED v2 system, not a plan for one —
     every value below is in production in src/app/globals.css and src/lib/motion. -->

## Overview

**Creative North Star: "The Printed Annual"**

taste-skill dealt "editorial-report" as the direction (`.taste-skill/direction.json`):
a page laid out like a well-edited printed report — an axis-organised masthead, type
pages that alternate with full-bleed flat-colour "chapter" fields, and colour used in
solid blocks the way a two-colour print job would. Two things were redrawn against the
dealt sheet and are binding product truth, not incumbent habit (see PRODUCT.md Brand
Commitments): the palette keeps the dealt ground/panel/accent *proportions* but takes
its actual *colours* from the subject (warm paper, Kenyan flag green, Wajir ochre, flag
red reserved as a rare mark) rather than the dealt full-page bottle-green wash; type
keeps Fraunces/IBM Plex Sans (next/font, zero new dependency, already a deliberate
non-default pairing) rather than the dealt Fontshare faces.

The system reads as a statesman's dossier: confident, edited, substantive. Nothing is
soft — no rounded cards, no pastel wash, no hairline dividers, no shadow on anything at
rest. Richness comes from scale (large type), real photographs, and whole sections of
flat colour, never from ornament.

**Key Characteristics:**
- One radius for the entire page: 0px. `StatusBadge` alone keeps a pill shape, as
  campaign-governance UI with its own small-system-chip convention (see Named Rules).
- Flag colours (black/red/green) are marks and rare solid fields, never a page-wide
  wash — a binding brand commitment, not a stylistic choice up for revision.
- Exactly five type steps (small/body/lead/head/display); nothing sits between any two.
- Sections are told apart by a flat field-colour change, not a hairline or a shadow.
- No gradients anywhere except one: a flat ink scrim under text on a photograph
  (`PageHero`, `HomeHero`) — the one exception the house rules name explicitly.

## Colors

One warm-paper neutral family (`bg`/`surface`) carries most running pages; four flat
field colours (`field-dossier`, `field-green`, `field-ochre`, `field-paper`) carry
whole "chapter" sections (Vision's six pillars, Home's hero/statement/cta,
Story's timeline, Get Involved's donate panel).

### Primary
- **Ink** (`#16130f`): running text and the dark field colour (`field-dossier`) —
  footer, hero masthead, CTA bands. Warm near-black, never pure `#000`.

### Secondary
- **Flag green** (`#0d6a4c`, deep step `#084a34`/`#063c2b`): the one accent colour —
  primary CTA fill, active nav state, focus ring, the one `field-green` chapter colour.

### Tertiary
- **Wajir ochre** (`#d9a94f`/`#c68a2a`): the second field colour and the "gold"
  moments — vision-pillar figures, countdown digits on dark, one `field-ochre` chapter.

### Rare mark
- **Flag red** (`#a52a1e`): reserved for urgency only — the Donate button
  (`Button variant="urgent"`), the `tbc` status dot, the Wajir HQ map marker. Never a
  field colour, never decorative.

### Neutral
- **bg** (`#f8f4ec`) / **surface** (`#f1ebdf`): the warm paper ground and its one tone
  step up, used for panels, form fields and alternating section backgrounds.
- **muted** (`#6b6153`): secondary text on a light ground — never below it in weight,
  always checked against its background for contrast (see Accessibility below).

### Named Rules
**The Restraint Rule.** Flag colours are rules, dots and small marks only; no section's
*entire* background is black, red or green used as a wash — this is the one rule this
system never redraws for convenience (PRODUCT.md Brand Commitment).

**The One-Shape Rule.** Every button, card, photo frame and panel is square-cornered
(`radius-page: 0`). `StatusBadge` is the sole, deliberate exception: a small pill chip
for campaign-governance UI (verified/draft/tbc), which keeps its own convention the way
a real table or form field does, rather than bending to the page's corner law.

## Typography

**Display Font:** Fraunces (variable, optical sizing on, `ss01`/`dlig` features)
**Body Font:** IBM Plex Sans (400/500/600/700)

**Character:** A narrow, confident serif for anything over ~32px, set against a
technical, slightly utilitarian sans for everything else — the "one very large, one
plain" pairing the direction's type law calls for, satisfied without adding a typeface.

### Hierarchy
- **Display** (600, `clamp(4rem, 2rem + 8.3vw, 8rem)`, lh 0.92): the hero name only —
  carried by `SplitText`'s masked-line reveal, never used elsewhere.
- **Head** (600, `clamp(2rem, 1.3rem + 3.2vw, 4rem)`, lh 1.04): every section heading,
  site-wide. One size, used consistently — no "subheading" size invented beside it.
- **Lead** (400, `clamp(1.25rem, 1.1rem + 0.7vw, 1.625rem)`, lh 1.35): supporting
  sentences directly under a heading or hero title.
- **Body** (400, `clamp(1.0625rem, 1rem + 0.25vw, 1.1875rem)`, lh 1.55): running text,
  measure capped at 62ch.
- **Small** (400, `clamp(0.8125rem, 0.79rem + 0.1vw, 0.875rem)`, lh 1.45): captions,
  footer legal text, credit lines — never smaller than this step (13px floor).

### Named Rules
**The Five-Step Rule.** `small → body → lead → head → display`, nothing between any
two. A new "subheading" size is a sign a step was skipped, not a sign one is missing.

## Layout

`Container` (`src/components/ui/Container.tsx`) drives three widths (`default`
72rem / `wide` 80rem / `prose` 48rem) with a constant `px-5 sm:px-8` outer gutter
(20–32px) at every width — the one pair of margins reused on every page, per
layout.md's anchor-line law. A `prose`-width block must still share the *left* edge of
the surrounding `wide` content on the same page (Phase 6 fix: Vision's intro paragraph
was briefly centred against the wide pillars below it — corrected to share the margin).
Section rhythm runs `py-16/20/28` (64–112px), scaling with viewport.

## Elevation & Depth

Flat, by rule, not by default. No `box-shadow` exists anywhere on the shipped site at
rest or on hover — surfaces are told apart by a tone step (`bg` → `surface`, or a full
field-colour change) exactly as colour.md §4 prescribes. The one thing allowed to float
(per the house rules' own exception) is the mobile nav sheet, and even that ships flat,
told apart by occupying its own screen region rather than a shadow.

### Named Rules
**The Tone-Step Rule.** A surface is never a card with a border or a shadow; it is
either the page's `bg`, one step up to `surface`, or a full change of field colour.

## Shapes

One radius for the whole page: `0px`. Photo frames (`PhotoSlot`, `ImageReveal`), every
`Button`, every panel and every form field are square-cornered. The only rounded shapes
on the site are perfect circles used as functional markers (the countdown's digit
boxes stay square; status dots, the map's HQ marker, and `StatusBadge`'s pill are the
exceptions, each a real system/governance affordance, not decoration).

## Components

### Buttons (`src/components/ui/Button.tsx`)
- **Shape:** square-cornered, one shape, decided once. No hover shadow, no lift.
- **`primary`:** ink fill, bg text — the default action.
- **`accent`:** flag-green fill — spends the one accent colour the proportion rule
  allows (colour.md §3: under 5% of any screen); used for at most one action per view.
- **`urgent`:** flag-red fill — Donate only, the Restraint Rule's one persistent mark.
- **`ghost-on-dark`:** transparent with a 1px ring, for a secondary action on a dark
  field (hero's "Get involved").
- **Press/hover:** `active:scale-[0.97]` on every variant; background-colour shifts on
  hover, never a shadow or a translate.
- **Danger found in review:** a caller must never toggle `display` on `<Button>` via its
  own `className` (e.g. `hidden lg:inline-flex`) — the component's own base classes set
  `display` unconditionally and the two fight for the same CSS property. Wrap the
  button in a `hidden lg:block` container instead (see SiteHeader.tsx for the pattern).

### TextLink (`src/components/ui/TextLink.tsx`)
The secondary action most of the direction's blueprints call for instead of a second
button ("no button, the underlined phrase is the action"). Underline sweeps in via a
`scaleX` transform on a solid pseudo-element — never a CSS gradient.

### StatusBadge (`src/components/ui/Status.tsx`)
Campaign-governance UI (`verified`/`draft`/`tbc`), not decoration — the one place a
pill shape and a coloured dot are legitimate. The coloured *dot* carries the status
colour; chip *text* is always `ink` (light mode) or `sand-50`/white (`inverted`,
for use on a dark or saturated field) — a tinted-text-on-tint chip measured 3.28:1 in
review, below the 4.5:1 requirement, so colour-coding now lives in the dot alone.

### PhotoSlot / ImageReveal (`src/components/ui/PhotoSlot.tsx`, `src/lib/motion/`)
Square frame, `bg-surface` placeholder fill (never a gradient). `ImageReveal` adds the
clip-path "shutter" entrance; its CSS default is fully visible (safe if JS never
runs), and JS only ever *hides* it after confirming, on mount, that it can also reveal
it again — see Named Rules in `src/lib/motion/image-reveal.css`.

### FlagBar (`src/components/ui/FlagBar.tsx`)
Three solid DOM stripes (black/red/green), not a CSS gradient — replaces every
`from-flag-black via-flag-red to-flag-green` rule from the incumbent system. A flag has
hard stripe edges; a gradient blend was never actually what it looked like.

### WajirSilhouette (`src/components/ui/WajirSilhouette.tsx`)
The real traced county outline (reused from `WajirMap.tsx`'s six region polygons,
filled as one shape), not an invented silhouette — a drawn mark still has to be the
subject's actual shape.

### Navigation (`SiteHeader.tsx`)
Sticky two-tier bar: `ElectionCountdownBar` above a flat (never blurred/glass) nav row.
No backdrop-blur anywhere — the scrolled state is a tone-step colour change
(`bg` → `surface`), not glass. Mobile menu is a flat full-width sheet, not a floating
card.

## Do's and Don'ts

### Do:
- **Do** keep the Restraint Rule and the One-Shape Rule — both are confirmed product
  truth (PRODUCT.md), not styling this redesign is free to relitigate.
- **Do** keep `ElectionCountdownBar` and `WajirSilhouette`/the traced constituency map
  as the two signature, non-generic devices the identity is built around.
- **Do** keep every motion primitive's CSS-default-visible, JS-only-hides pattern
  (`Reveal`, `SplitText`, `ImageReveal`) — the opposite ordering (JS reveals a
  JS-hidden default) shipped a real bug in Phase 4/5: an inline `opacity: 0` always
  wins over a `prefers-reduced-motion` stylesheet override, so the hero headline could
  render permanently invisible under reduced motion until this was caught and fixed.

### Don't:
- **Don't** reintroduce hairline borders, at-rest shadows, pill buttons, uppercase
  tracked eyebrow labels, index numerals (01/02/03), icon-topped cards, or gradients
  outside the one allowed photo scrim — all were present in the incumbent system (see
  git history) and are deliberately absent here, per the dealt direction's house rules.
- **Don't** toggle `display` via `className` on `<Button>` (see Components above).
- **Don't** wrap `RevealGroup`'s mapped children in their own `<li>`/block element when
  `as="ul"` — `RevealGroup`'s `itemAs` prop exists precisely so it supplies the single
  wrapping element itself; a child that also renders its own `<li>` produces invalid,
  axe-flagged nested-list markup (fixed in Phase 5 on Record and News).
