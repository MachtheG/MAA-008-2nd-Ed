# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: registered voters of Wajir County, Kenya (six constituencies: Wajir North, Wajir East, Wajir South, Wajir West, Eldas, Tarbaj), deciding who to support for Governor ahead of the 10 August 2027 general election. Many will visit on mid-range Android phones over metered/slow mobile data, in English, Kiswahili, or Somali.

Secondary: diaspora Kenyans and Horn-of-Africa-watchers assessing Affey's record; potential volunteers and donors; journalists and other campaigns researching his platform.

[Inferred from repository evidence (nav priorities, i18n locales, ElectionCountdown target date, VolunteerForm/DonateWidget copy) rather than a direct interview — the user authorized autonomous execution for this build.]

## Product Purpose

A campaign website for Mohamed Abdi Affey's candidacy for Governor of Wajir County: introduce the candidate, make his record and vision legible, and convert interest into volunteering, donating, or sharing. Success = a visitor who arrives skeptical ("another politician's site") leaves able to state, in one sentence, who he is and what he's promising their ward — and knows how to help.

## Positioning

Affey's claim is specific and hard for a rival to copy truthfully: thirty years at the actual tables where Horn-of-Africa decisions get made (Kenya's Parliament at 27, Ambassador to Somalia, IGAD Special Envoy, UNHCR Special Envoy) — now applied to his own county instead of someone else's. The site's job is to make that arc *feel* like a single throughline, not a résumé list, and to connect each item on it to a concrete Wajir problem (water, livestock, health, roads, peace) rather than leaving it as abstract prestige.

## Operating Context

- Pre-launch / early campaign phase: election is ~21 months out at time of writing (countdown targets 2027-08-10T00:00:00+03:00). This is an introduce-the-candidate and build-the-base phase, not a GOTV sprint.
- Three-language toggle: English and Kiswahili are live; Somali (`so`) exists in the codebase but is intentionally withheld from `ACTIVE_LOCALES` until its dictionary is translated and reviewed — do not activate it as part of this redesign.
- Deployed on Vercel (`vercel.json`); no custom routing/headers configured there currently.
- Visitors will frequently be on mid-range phones on slow/metered connections in rural Wajir County — this is a hard performance constraint, not a nice-to-have.

## Capabilities and Constraints

- Next.js 16 App Router, React 19, Tailwind v4, TypeScript. No backend/database/CMS — all copy lives in `src/content/candidate*.ts`, loaded per-locale via `useContent()`.
- `VolunteerForm` and `DonateWidget` are explicitly **not wired to any backend** (confirmed in-code: "No backend wired," "not live" UI banner on the donate widget). They are UX demonstrations the campaign must connect to a real endpoint/payment processor before launch. The redesign must preserve this honesty — never make them look or behave as if a submission actually went anywhere.
- Content carries its own verification status (`verified` / `draft` / `tbc`) rendered via `StatusBadge`. This status system is campaign-governance infrastructure, not decoration — it must survive the redesign unchanged in meaning (it may be restyled).
- No analytics currently wired into the code (none found in `layout.tsx` or elsewhere); OG metadata exists but is minimal.
- Real assets on hand: county coat of arms, 7 photographs of the candidate (`MohamedA01–07`), one landscape stock photo flagged in `public/images/CREDITS.md` as *not* actually Wajir and due for replacement, and a hand-traced SVG of the county's six constituencies.

## Brand Commitments

- Candidate name and office are fixed: "Mohamed Abdi Affey — for Governor of Wajir County." Slogan "Wajir First, Always" is verified/approved.
- Kenyan flag colours (black, red, green) are a binding identity constraint — this is a Kenyan political campaign, not a free choice of palette — but the existing code comments make clear they're meant to be used "with restraint, as rules and marks, never a wash," which the redesign should honor rather than discard as mere incumbent styling.
- Wajir County coat of arms is a real civic mark, used as-is, not reinterpreted.
- Tri-lingual by design (not a later add-on): English, Kiswahili, and (pending) Somali.

## Evidence on Hand

- Verified biography and career timeline (1968–present): MP at 27, Deputy Minister, Ambassador to Somalia, Nominated MP, IGAD Special Envoy, UNHCR Special Envoy — all marked `verified` in `candidate.ts`.
- Six vision pillars (water, livestock, health, education, roads, peace/governance) with concrete targets — marked `verified` as *drafted promises*, i.e., the prose is the site builder's, not yet campaign-approved language; this distinction must stay visible.
- Per-constituency population/voter figures and local priorities for all six constituencies.
- "County achievements" (drought response, peace forum, scholarships, health outreach, livestock cooperatives, youth funding) carry specific figures (40%, 12 conflicts, 800 students, etc.) but — unlike the rest of the content file — carry **no verification status field at all**. This is a pre-existing content-integrity gap, not something this redesign introduces or may quietly fix by inventing a status; it is noted here and will be called out again in the final report for the campaign to resolve.
- No real testimonials, press logos, donor counts, or volunteer counts exist anywhere in the codebase. None may be invented.

## Product Principles

1. **Never let polish outrun truth.** Every verified/draft/TBC distinction, every "not live" disclosure on the forms, and every existing link/claim survives the redesign exactly as true as it was before — motion and visual craft serve legibility of that truth, never obscure it.
2. **Design for the phone in someone's hand in Wajir, not the laptop in the office building it.** Mobile-first is a resource-access decision (slow data, mid-range hardware), not a breakpoint exercise.
3. **One throughline, not a résumé.** Every section should connect Affey's national/international record to a specific Wajir outcome; the site's distinctiveness comes from that connection, not from ornament.
4. **Flag colours as punctuation, not wallpaper.** The existing restraint principle around the Kenyan flag palette is a brand commitment to preserve, not incumbent styling to discard.
5. **Three languages, one quality bar.** Kiswahili (and eventually Somali) are not an afterthought skin on the English version; layout and motion must work for all active locales' real string lengths.

## Accessibility & Inclusion

No formally stated standard was supplied, but the existing codebase already implements WCAG-conscious patterns (skip link, focus-visible rings, `prefers-reduced-motion` handling, `aria-current`/`aria-pressed` on interactive elements) — treat WCAG 2.1 AA as the working target, consistent with Phase 5's stated Accessibility-100 goal, and preserve/extend the existing patterns rather than replacing them with less accessible ones.
