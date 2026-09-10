# Clouterry — Design Direction

### The complete brief: what this site should actually be

---

## 0. The Thesis

**Fun yet elegant** isn't a compromise between two moods — it's one idea, executed with restraint. Think of a bar of designer chocolate wrapped in bright, playful foil: the wrapper is loud, the object inside is precise. Clouterry's planet mark already *is* this idea in logo form — a childlike, slightly wobbly hand-drawn ring wrapped around a perfect circle, in one committed color.

The rule for the whole site: **the shapes and motion get to be fun. The typography, spacing, and structure stay elegant.** Never let both go loose at once — that's chaos, not personality. Never let both go tight at once — that's a generic SaaS page. Fun lives in the *gestures* (the planet's spin, a hand-set line-break, a color that commits). Elegant lives in the *bones* (grid discipline, generous whitespace, a type scale that never wobbles).

---

## 1. Color System

| Token | Hex | Role |
|---|---|---|
| `cream` | `#F5F1E6` | Primary background. Warm, not sterile white. |
| `cream-dim` | `#EDE6D3` | Secondary surface — used once or twice for subtle separation, never as a "card" background. |
| `ink` | `#1A1410` | Primary text. A warm near-black, never pure `#000`. |
| `red` | `#C41E3A` | The brand's one committed color. Used at full saturation, full confidence — never tinted down to "safe." |
| `red-deep` | `#8B1428` | Depth and pressed states only. Never a standalone background. |
| `gold` | `#D4A94A` | The rare flourish. Appears at most 1–2 times per page, hand-placed, never repeated as a system color. |

**The elegance rule:** three colors do 95% of the work (cream, ink, red). Gold is a *signature*, not a palette member — the way a tailor uses exactly one unexpected button. If you find yourself reaching for gold a third time on a page, that's a sign something else should have carried that moment instead (usually: scale, or motion).

**The fun rule:** when red shows up, it shows up as a full-bleed section, not a small accent chip. Half-committed color (a red border here, a red icon there) reads timid. Full sections of red read confident and a little bold — which is the "fun" half of the brief.

---

## 2. Typography

**Display face:** a rounded, high-personality sans with real weight range — carrying every headline with soft terminals, confidence at large sizes.
**Body face:** a quieter, precise grotesk — Manrope / General Sans. Clean, legible, never decorative.

**The scale:**
- Hero headline: enormous (72–96px on desktop), tight leading (0.95–1.0).
- Section headlines: large but clearly subordinate to the hero — roughly half the hero's size.
- Body copy: restrained, 16–18px, line length under 80 characters, generous line-height (1.6+) so it reads as unhurried.

**Where to break the rules, on purpose:**
- Hand-set line breaks in every headline (`Real creators.⏎Real voice.⏎Cohorts brands can trust.`).
- Let the creator-section headline run looser: more line-height, slightly larger size.
- Let the brand-section headline run tighter and smaller than the creator headline.
- Never pick out a single word in a different color or weight inside a headline.

---

## 3. Layout & Grid

**Overall alignment logic:** the hero is centered (the planet is a singular object, centering treats it like one); **everything below the hero is left-aligned**. This shift from centered-hero to left-aligned-body settles down after the opening gesture.

**Spacing rhythm — deliberately uneven, not metronomic:**
- Hero: the most spacious section on the page by a wide margin (`pt-44 pb-36 sm:pt-56 sm:pb-44`).
- Creator section (full red): slightly tighter vertical rhythm than the hero (`py-20 sm:py-24`).
- Brand section: the tightest, most controlled spacing on the page (`py-16 sm:py-20`). Confidence through economy — no bullet points, no icon grids.
- About section: reads more like a letter than a marketing block — narrower measure, denser paragraph, less air around it.

**The one grid-breaking move:** let the planet visually cross a boundary into the headline text below.

**Form fields (creator application):** no floating white card. Fields sit directly on the red as bare, underlined inputs — transparent background, bottom-border only, label above in body type.

---

## 4. The Planet — Detailed Direction

- **Behavior:** idle slow rotation on load. Speeds up on hover/cursor-proximity. Fully drag-to-rotate with real momentum on release.
- **The signature flourish:** if someone drags it past a full rotation, let it "wobble" slightly, like it got a little dizzy, before settling back into its idle spin.
- **Material:** matte red, not glossy/plastic — `roughness: 0.68`, `metalness: 0.02`. Subtle emissive glow (deep red) rather than hard specular highlights.
- **Placement:** dead center of the hero, large enough to compete with the headline.

---

## 5. Motion Language

**Spend motion like a budget, not a theme.**
- **On load:** exactly one orchestrated hero sequence — planet scales/fades in, headline follows with short stagger, CTAs settle last.
- **On scroll:** nothing fires automatically. No fade-up-on-every-section. Sections simply *are there* when scrolled to.
- **On interaction:** motion reserved for user actions. Hover shifts color or weight only — never lift-and-shadow.

---

## 6. Page-by-Page Direction

### Home / Hero
Centered planet, enormous hand-broken headline, one calm supporting line, two CTAs (one filled red, one outlined ink). Everything below hero is left-aligned.

### For Creators (full red section)
Loosest, warmest writing. Category list presented as plain text, not decorative pills. Application form lives directly on the red as bare underlined fields.

### For Brands (cream, restrained)
Tightest writing and spacing. Small, confident headline. Model explained in one clean paragraph — no bullet points, no icon grid. Categories presented as a simple quiet list. One CTA: "Book a call".

### About / The Story
Narrowest measure, reads like a personal letter. Well-set paragraphs.

### Footer
Minimal: Instagram link, contact email, copyright. No newsletter signup, no sitemap, no social icon row.

---

## 7. Components & Rules

- **Buttons:** Primary CTA filled red; secondary outline in ink. Crisp shape language (`rounded-md`).
- **Links:** Underline on hover only, ink color, no arrow glyphs appended everywhere.
- **Form fields:** Underline-style, transparent background, label above.
- **Category/niche list:** Plain inline text or comma-separated line.
- **Dividers:** Single hairline rule where a real section boundary exists.
- **No decorative icon rows:** Icons only appear if they help someone complete a task.
