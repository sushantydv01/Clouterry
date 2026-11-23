# Design System

<!-- impeccable:design-schema 1 -->

## Creative Direction: Cheerful Neo-Brutalism
Primary reference: Gumroad (gumroad.com) visual language — bold, flat, playful, confident, geometric, high-contrast, deliberately handcrafted and technically polished.

## Colour Palette & Tokens

| Role | Token Name | Hex Value | Description |
|---|---|---|---|
| Page Background | `--bg-page` / `color-page` | `#F4F4F0` | Warm parchment ground |
| Card / Surface | `--bg-surface` / `color-surface` | `#FFFFFF` | Crisp white card surface |
| Primary Ink | `--text-primary` / `color-ink` | `#000000` | Pure structural black |
| Secondary Ink | `--text-secondary` | `#2D2A26` | Deep charcoal for readable body |
| Muted Ink | `--text-muted` | `#605C56` | Readable neutral metadata |
| Structural Border | `--border-solid` | `#000000` | 1px solid black border |
| Primary Accent | `--accent-pink` | `#FF90E8` | Signature candy pink |
| Secondary Accent | `--accent-yellow` | `#F1F333` | Electric neon yellow |
| Red Accent | `--accent-red` | `#DC341E` | Punchy signal red |
| Teal Accent | `--accent-teal` | `#55D6BE` | Bright fresh seafoam/teal |
| Inverted Background | `--bg-inverted` | `#000000` | Solid black |
| Inverted Text | `--text-inverted` | `#FFFFFF` | Crisp white |

## Palette Rules
- Black is the primary structural color (1px solid borders, text, primary CTA blocks).
- Pink (`#FF90E8`) is the signature brand accent for heroes, focal tags, and primary highlights.
- Yellow (`#F1F333`), Red (`#DC341E`), and Teal (`#55D6BE`) provide visual rhythm and section diversity.
- Use one dominant accent color per major section. Avoid chaotic simultaneous usage.
- All text on color surfaces must strictly meet WCAG AA contrast (≥4.5:1). Dark ink `#000000` is used on `#FF90E8`, `#F1F333`, and `#55D6BE`. Crisp white `#FFFFFF` is used on `#DC341E` and `#000000`.

## Borders & Geometry
- Standard border: 1px solid black on all cards, buttons, inputs, navigation, tabs, dividers.
- Corners: Square or subtle 4px–6px radius maximum (`rounded-none` or `rounded-[4px]`).
- Spacing: 4px grid rhythm (multiples of 4, 8, 12, 16, 24, 32, 48, 64px).

## Typography
- Primary Font: **Space Grotesk** (`--font-space-grotesk`, sans-serif) for all headlines, cards, navigation, and body.
- Monospace Font: **JetBrains Mono** (`--font-mono`, monospace) for technical tags, dates, and metadata.
- Body Font: **Space Grotesk** / **Inter** for readable paragraphs.
- Scale:
  - Hero Display: `clamp(2.5rem, 6vw, 5.5rem)` (40px–88px)
  - Section Headings: `clamp(1.75rem, 4vw, 3.25rem)` (28px–52px)
  - Card Titles: `clamp(1.25rem, 2.5vw, 1.75rem)` (20px–28px)
  - Body Text: `1rem` to `1.125rem` (16px–18px)
  - Metadata / Small: `0.75rem` to `0.8125rem` (12px–13px)
- Line wrapping: `text-wrap: balance` on headings, `text-wrap: pretty` on prose.

## Signature Neo-Brutalist Interactions
- **Card & Button Hover:** `hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0_0_#000]`
- **Active Press:** `active:translate-x-0 active:translate-y-0 active:shadow-none`
- **Transitions:** `transition-all duration-150 ease-out`
- **Decorative Elements:** Playful candy discs/coins with 1px black borders, tilted badges (-4deg to +6deg), geometric grid dividers.
- **Focus States:** `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2`
