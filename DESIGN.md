# Design System — Pop Garden

<!-- impeccable:design-schema 1 -->

## Creative Direction: Pop Garden (Professional × Playful)
Reference: Gumroad confidence, bold typography, visual energy, crisp outlines, editorial rhythm, and distinctive character — engineered into an original visual identity for FIRM.

## Official Working Colour Palette

| Role | Colour Name | Hex Value | Purpose |
|---|---|---|---|
| Dark Base | Midnight Black | `#171717` | Navigation, dark sections, typography, structural 1px borders, hard shadows |
| Light Base | Warm Cream | `#F8F6EF` | Main page canvas and light editorial sections |
| Signature Accent | Rose Pink | `#ED83A8` | Primary playful brand accent, hero highlights, focal stickers, primary CTAs |
| Secondary Accent | Fresh Garden Green | `#A6D8A1` | Balance, highlighted surfaces, verified deliverables, positive metrics |
| Energy Accent | Butter Yellow | `#F4CF55` | Attention moments, active navigation indicators, key CTA buttons, quotes |
| Surface Crisp | Card White | `#FFFFFF` | Card surfaces providing clean contrast on warm cream or dark grounds |

## Colour Distribution Rules
- **Black (`#171717`) and Warm Cream (`#F8F6EF`)** establish the visual foundation.
- **Rose Pink (`#ED83A8`)** is the most recognisable signature accent (logo mark, hero stickers, key intakes).
- **Fresh Garden Green (`#A6D8A1`)** provides balance and variety (framework deliverables, badges, verified credentials).
- **Butter Yellow (`#F4CF55`)** creates moments of visual energy (active nav pills, pull quotes, spotlight banners).
- No random additional accent colors; no pastel dilution; no neon clashes.
- Text contrast strictly follows WCAG AA (≥4.5:1). Dark ink `#171717` is used on Warm Cream, Rose Pink, Fresh Green, Butter Yellow, and White. Inverted text `#F8F6EF` is used on Midnight Black.

## Architectural Composition & Rhythm
- Avoid monotone rectangular repetition.
- Alternate between:
  - Full-width Midnight Black sections (`bg-[#171717] text-[#F8F6EF]`).
  - Warm Cream editorial sections (`bg-[#F8F6EF]`).
  - Signature Rose Pink (`bg-[#ED83A8]`), Fresh Green (`bg-[#A6D8A1]`), or Butter Yellow (`bg-[#F4CF55]`) feature blocks.
- Asymmetric card grids, oversized chapter numerals (`01`, `02`), architectural stamps, and framed browser previews.

## Typography
- Primary Display: **Space Grotesk** (`--font-space-grotesk`, sans-serif) for all headlines, navigation, cards, and titles.
- Monospace: **JetBrains Mono** (`--font-mono`, monospace) for technical tags, SLA metrics, and metadata.
- Body: **Space Grotesk** / **Inter** for readable narrative paragraphs.

## Signature Interactions
- **Cards & Buttons Hover:** `hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0_0_#171717]`
- **Active Press:** `active:translate-x-0 active:translate-y-0 active:shadow-none`
- **Transitions:** `transition-all duration-140 ease-out`
- **Focus Rings:** `focus-visible:ring-2 focus-visible:ring-[#171717]`
