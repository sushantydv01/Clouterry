---
name: FIRM Studio · Midnight Atelier
description: Architectural digital presence studio balancing midnight charcoal surfaces, warm archival cream paper, and bespoke tactile artwork.
colors:
  midnight-charcoal: "#171717"
  charcoal-surface: "#1d1d20"
  charcoal-recess: "#121214"
  warm-cream: "#f8f6ef"
  paper-subtle: "#efece3"
  chalk-white: "#ffffff"
  rose-pink: "#ed83a8"
  rose-pink-hover: "#f49ebb"
  garden-green: "#a6d8a1"
  butter-yellow: "#f4cf55"
  charcoal-hover: "#29292d"
  ink-secondary: "#d5d2c7"
  ink-muted: "#aca89e"
  ink-dark-secondary: "#3f3d38"
typography:
  display:
    fontFamily: "Bricolage Grotesque, ui-sans-serif, system-ui, sans-serif"
    fontSize: "4.5rem"
    fontWeight: 500
    lineHeight: 1.01
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Bricolage Grotesque, ui-sans-serif, system-ui, sans-serif"
    fontSize: "3.25rem"
    fontWeight: 500
    lineHeight: 1.06
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Bricolage Grotesque, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "0em"
  label:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.08em"
rounded:
  pill: "9999px"
  surface: "20px"
  card: "16px"
  field: "12px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "48px"
  xl: "72px"
components:
  button-primary:
    backgroundColor: "{colors.rose-pink}"
    textColor: "{colors.midnight-charcoal}"
    typography: "{typography.title}"
    rounded: "{rounded.pill}"
    padding: "11.5px 24.8px"
    height: "46px"
  button-secondary:
    backgroundColor: "{colors.midnight-charcoal}"
    textColor: "{colors.warm-cream}"
    typography: "{typography.title}"
    rounded: "{rounded.pill}"
    padding: "11.5px 24.8px"
    height: "46px"
  button-dark:
    backgroundColor: "{colors.midnight-charcoal}"
    textColor: "{colors.warm-cream}"
    typography: "{typography.title}"
    rounded: "{rounded.pill}"
    padding: "11.5px 24.8px"
    height: "46px"
  button-outline-dark:
    backgroundColor: "{colors.warm-cream}"
    textColor: "{colors.midnight-charcoal}"
    typography: "{typography.title}"
    rounded: "{rounded.pill}"
    padding: "11.5px 24.8px"
    height: "46px"
  surface-charcoal:
    backgroundColor: "{colors.charcoal-surface}"
    textColor: "{colors.warm-cream}"
    rounded: "{rounded.surface}"
    padding: "28px"
  surface-paper:
    backgroundColor: "{colors.chalk-white}"
    textColor: "{colors.midnight-charcoal}"
    rounded: "{rounded.surface}"
    padding: "28px"
  input-field:
    backgroundColor: "{colors.midnight-charcoal}"
    textColor: "{colors.warm-cream}"
    typography: "{typography.body}"
    rounded: "{rounded.field}"
    padding: "12px 16px"
    height: "48px"
---

# Design System: FIRM Studio · Midnight Atelier

## Overview

**Creative North Star: "The Midnight Atelier"**

Midnight Atelier treats digital architecture like a physical print and industrial design practice working at dusk. Wide charcoal galleries hold unboxed photography and tactile paper-cut artwork in full scale, alternating intentionally with warm archival cream plates so dense capability matrices, engineering breakdowns, and long-form essays read with print-journal calm rather than software dashboard fatigue.

Instead of decorative floating cards, fake KPI counters, or uniform bento grids, identity emerges through spatial contrast, assertive display letterforms paired with readable editorial body typography, and bespoke artwork created strictly within a disciplined five-ink studio palette. Motion stays calm, continuous, and responsive only to deliberate interaction.

**Key Characteristics:**
- Dark charcoal ground alternating cleanly with warm archival paper reading rooms.
- Bespoke paper-cut collage and architectural diagram artwork blended seamlessly onto dark and cream surfaces without browser chrome mockups.
- Expansive 1360px and 1440px viewport framing with open hairline dividers replacing heavy bordered card walls.
- Expressive display headlines backed by neutral sans-serif UI text and optical serif callouts strictly for essays and study theses.
- Restrained botanical and warm paper accents applied functionally for orientation, active selection, and primary action.

## Colors

A five-ink editorial palette anchored in deep matte charcoal and warm off-white paper, accented sparingly with rose pink, garden green, and butter yellow.

### Primary
- **Rose Pink** (`#ed83a8`): Signature brand accent reserved for primary conversion pill buttons, active navigation indicators, logo crossbar seal, and key focal callouts. Always pairs with dark charcoal ink (`#171717`).

### Secondary
- **Garden Green** (`#a6d8a1`): Botanical verification ink used for availability badges, checkmarks, structural blueprint highlights, and second-discipline orientation.

### Tertiary
- **Butter Yellow** (`#f4cf55`): Warm drafting ink used sparingly for orbital thread diagram arcs, pull-quote accents, numbered layer markers, and editorial highlights.

### Neutral
- **Midnight Charcoal** (`#171717`): Primary page ground, sticky header base, dark button fill on cream surfaces, and primary dark text on light paper.
- **Charcoal Surface** (`#1d1d20`): Slightly lifted dark container fill for grouped workbench controls and featured panels when contrast separation from `#171717` is required.
- **Charcoal Recess** (`#121214`): Deeper dark panel recess for secondary cards, footer ground, and inset diagram canvases.
- **Warm Cream** (`#f8f6ef`): Editorial paper band canvas, primary light text on charcoal, and warm reading-room surface for Insights essays.
- **Paper Subtle** (`#efece3`): Muted off-white divider surface and gentle inset band inside light paper views.
- **Chalk White** (`#ffffff`): Crisp specimen plate background placed atop warm cream canvases when clean contrast is needed.
- **Ink Secondary** (`#d5d2c7`): Warm grey narrative copy on dark charcoal backgrounds (passing WCAG AA comfortably above 10:1).
- **Ink Muted** (`#aca89e`): Secondary coordinate labels, chapter numerals, and metadata captions on dark grounds.
- **Ink Dark Secondary** (`#3f3d38`): Readable body paragraph ink on Warm Cream and Chalk White paper canvases.

**The Scarcity Rule.** Accent inks (Rose Pink, Garden Green, Butter Yellow) occupy under 12% of any viewport so neutral charcoal and cream surfaces establish authority first.
**The Honest Ground Rule.** Never place saturated gradient washes, neon glows, or decorative blur blobs behind headlines or cards; all sections sit on solid Midnight Charcoal, Warm Cream, or clean scrim-blended artwork.

## Typography

**Display Font:** Bricolage Grotesque (with ui-sans-serif, system-ui, sans-serif fallback)
**Body Font:** Hanken Grotesk (with ui-sans-serif, system-ui, sans-serif fallback)
**Editorial Serif Font:** Newsreader (with Georgia, serif fallback)
**Label / Coordinate Font:** JetBrains Mono (with ui-monospace, monospace fallback)

**Character:** Expressive neo-grotesque headlines with warm architectural quirks meet crisp, neutral body prose and literary optical serif callouts inside long-form essays and study theses.

### Hierarchy
- **Display** (`500` medium, clamp `44px` to `78px`, line-height `1.01`, letter-spacing `-0.03em`): Hero statements and architectural anchors, accented cleanly by optical italic serif lines without chunky bold bloat.
- **Headline** (`500` medium, `30px` to `52px`, line-height `1.06`, letter-spacing `-0.025em`): Major section headers across dark and paper bands.
- **Title** (`500` medium, `20px` to `24px`, line-height `1.25`, letter-spacing `-0.02em`): Interactive tab headings, blueprint layers, and open editorial list headings.
- **Body** (`400` regular, `16px` to `18px`, line-height `1.65`, letter-spacing `0em`): Default prose capped near 60–72ch on reading pages; pretty-wrapped paragraphs.
- **Label / Coordinates** (`400–500`, `12px`, line-height `1.4`, letter-spacing `0.08em`, tabular numerals): Strictly sparse numeric indices (`01`, `02`), WCAG contrast indicators, and cadence metadata. Never forced into all-caps directory headers.

**The Single-Emphasis Rule.** At most one typographic emphasis mode appears in any single headline; never combine gradients, dual accent colors, and italics inside the same display phrase.
**The Prose Rhythm Rule.** Extended multi-section essays and case theses shift to Newsreader serif on Warm Cream (`#f8f6ef`) for print-grade reading comfort.

## Layout

Full-bleed section canvases span edge to edge, bounding internal content inside wide `1360px` (`default`) or `1440px` (`wide`) containers with responsive horizontal padding (`20px` mobile, `32px` tablet, `48px` desktop).

Pages alternate rhythmically between asymmetric `5/7` or `7/5` editorial splits, horizontal interactive workbenches, unboxed panoramic artwork transitions, and hairline-divided lists. Mobile viewports (`360px–430px`) stack media early without redundant vertical chrome so the homepage compresses cleanly without fatigue. Section vertical breathing space shifts naturally (`48px–64px` compact, `64px–88px` normal, `80px–112px` spacious).

## Elevation & Depth

Surfaces remain completely flat at rest, replacing drop shadows and 3px neo-brutalist black border offsets with 1px translucent hairlines (`rgba(248, 246, 239, 0.10)` on dark, `rgba(23, 23, 23, 0.12)` on cream) and subtle tonal shifts between Charcoal Recess (`#121214`), Midnight Charcoal (`#171717`), and Charcoal Surface (`#1d1d20`).

### Shadow Vocabulary
- **Paper Plate Rest** (`box-shadow: 0 10px 30px rgba(23, 23, 23, 0.05)`): Used on Chalk White specimen surfaces sitting atop Warm Cream paper bands to separate overlapping plates softly.
- **Primary CTA Hover** (`box-shadow: 0 8px 24px rgba(237, 131, 168, 0.18)`): Appears exclusively on hover over Rose Pink pill buttons paired with a `-1px` vertical lift.

**The Flat-By-Default Rule.** Rest states never cast hard offset shadows; elevation is communicated exclusively through tonal surface layering, crisp hairlines, and hairline dividers.

## Shapes

Every interactive action uses full capsule pills (`9999px` radius) to stand unmistakably apart from structural frames. Content panels and specimen plates use architectural rounded rectangles (`20px` radius on large panels, `16px` on compact list cards, `12px` on form controls). Artwork plates blend cleanly on dark grounds or rest inside subtle hairline frames with zero artificial browser toolbar dots.

## Components

### Buttons
- **Shape:** Full capsule pill (`9999px`), minimum `46px` height, `white-space: nowrap` single-line invariant.
- **Primary:** Rose Pink (`#ed83a8`) background with Midnight Charcoal (`#171717`) semibold label and `11.5px 24.8px` padding.
- **Hover / Focus:** Lightens subtly (`#f49ebb`) with `-1px` lift and soft Rose Pink bloom; keyboard focus applies a `2px` solid Rose Pink outline offset by `3px`.
- **Secondary & Light Paper Variants:** Transparent dark outline (`rgba(248, 246, 239, 0.24)` stroke) for dark canvas secondary links; solid Midnight Charcoal (`#171717`) fill with Warm Cream text or subtle charcoal outline (`rgba(23, 23, 23, 0.28)` stroke) on Warm Cream bands.

### Cards / Containers
- **Corner Style:** Soft architectural curve (`20px` for workbench and showcase panels, `16px` for linked sector cells).
- **Background:** Charcoal Surface (`#1d1d20`) or Chalk White (`#ffffff`) according to section polarity.
- **Shadow Strategy:** Flat at rest on dark surfaces; ambient diffuse plate elevation on light paper.
- **Border:** Fine `1px` translucent hairline (`rgba(248, 246, 239, 0.12)` dark / `rgba(23, 23, 23, 0.12)` light), brightening subtly on interactive hover.

### Inputs / Fields
- **Style:** Midnight Charcoal (`#171717`) inset background inside `#1d1d20` intake form panels, `12px` radius, `1px` hairline border (`rgba(248, 246, 239, 0.16)`), `48px` minimum height.
- **Focus:** Smooth border transition to Rose Pink (`#ed83a8`) alongside keyboard focus ring.
- **Error:** Honest inline validation message below input labels with clear ARIA description; never fakes successful network delivery when mailer configuration is unset.

### Navigation
- **Adaptive Desktop Header:** Sticky translucent `76px` bar detecting underlying section polarity (`[data-surface="paper"]` vs dark charcoal) cleanly on scroll, crowned by a GPU-accelerated `scaleX` reading-progress Thread hairline, expandable five-discipline quick-jump ribbon, FAQ utility, and unified `Start a project` CTA.
- **Mobile Navigation:** Opens outside the blurred header stacking context into a full-viewport (`100dvh - 76px`) Midnight Charcoal drawer animated with native iOS drawer physics (`cubic-bezier(0.32, 0.72, 0, 1)`), quick 5-discipline pill shortcuts, vertical Rose Pink Thread index connecting `01` through `06`, Tab keyboard focus containment, `Escape` support, and full-width bottom primary action.

### Signature Component: Architectural Thread Orbital Loop
- Interactive dark showcase combining the approved abstract geometric ribbon artwork with five clickable discipline nodes arranged around a subtle continuous Butter Yellow (`#f4cf55`) dashed orbital path (`prefers-reduced-motion` static fallback respected). Clicking any node synchronizes the adjacent narrative thesis without reloading or shifting layout geometry.

## Do's and Don'ts

### Do:
- **Do** keep navigation items strictly single-line (`<= 62px` height, `76px` header) with unified `Start a project` CTA wording across header and footer.
- **Do** separate dense interactive UI from light Warm Cream editorial copy inside balanced `5/7` or `7/5` asymmetric splits.
- **Do** ensure text overlapping blended illustrations always sits behind a smooth dark scrim or stops cleanly before light artwork edges.
- **Do** render every artwork frame edge-to-edge without synthetic browser dot headers or fake SaaS invoice overlays.

### Don't:
- **Don't** place uppercase monospace eyebrow badges above more than one-third of sections on any route.
- **Don't** invent placeholder performance metrics (`100/100`, `<600ms`), client testimonials, or commercial portfolio claims.
- **Don't** nest `position: fixed` full-screen mobile overlays inside ancestors using `backdrop-filter`.
- **Don't** duplicate identical split-header alignments across consecutive vertical sections.
