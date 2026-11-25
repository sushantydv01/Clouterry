export interface CapabilityNode {
  num: string;
  name: string;
  shortName: string;
  slug: string;
  color: string;
  borderClass: string;
  bgClass: string;
  textClass: string;
  accentBg: string;
  description: string;
  deliverables: string[];
}

export const CAPABILITY_NODES: CapabilityNode[] = [
  {
    num: "01",
    name: "Brand & Identity",
    shortName: "Brand",
    slug: "brand-identity",
    color: "#FF5C40", // Vermilion / Coral
    borderClass: "border-[#FF5C40]",
    bgClass: "bg-[#FF5C40]",
    textClass: "text-[#FF5C40]",
    accentBg: "rgba(255, 92, 64, 0.15)",
    description:
      "Visual identity systems, typography, documentary art direction, and brand guidelines built to endure a decade.",
    deliverables: ["Visual Identity Systems", "Living Design Tokens", "Art Direction", "Documentary Assets"],
  },
  {
    num: "02",
    name: "Web & Technology",
    shortName: "Web",
    slug: "web-technology",
    color: "#3875FF", // Cobalt / Electric Blue
    borderClass: "border-[#3875FF]",
    bgClass: "bg-[#3875FF]",
    textClass: "text-[#3875FF]",
    accentBg: "rgba(56, 117, 255, 0.15)",
    description:
      "Next.js 16 platforms, Server Component architecture, sub-second edge delivery, and 100/100 Core Web Vitals.",
    deliverables: ["Next.js 16 App Router", "Server Components", "Cloudflare Edge", "WCAG 2.1 AA Portals"],
  },
  {
    num: "03",
    name: "Social Media & Content",
    shortName: "Content",
    slug: "social-content",
    color: "#FFB800", // Marigold / Yellow
    borderClass: "border-[#FFB800]",
    bgClass: "bg-[#FFB800]",
    textClass: "text-[#FFB800]",
    accentBg: "rgba(255, 184, 0, 0.15)",
    description:
      "Documentary storytelling, editorial social cadences, and authoritative field monographs that build intellectual equity.",
    deliverables: ["Documentary Video", "Quarterly Monographs", "Multi-Platform Cadence", "Content Operations"],
  },
  {
    num: "04",
    name: "Marketing & Growth",
    shortName: "Growth",
    slug: "marketing-growth",
    color: "#10B981", // Jade / Emerald Green
    borderClass: "border-[#10B981]",
    bgClass: "bg-[#10B981]",
    textClass: "text-[#10B981]",
    accentBg: "rgba(16, 185, 129, 0.15)",
    description:
      "Technical search infrastructure, high-intent admissions conversion funnels, and precision inbound acquisition.",
    deliverables: ["Programmatic SEO", "Conversion Architecture", "High-Intent Pipelines", "Analytics Infrastructure"],
  },
  {
    num: "05",
    name: "Digital Management & Consulting",
    shortName: "Advisory",
    slug: "digital-management",
    color: "#FF5C9D", // Rose / Vivid Fuchsia
    borderClass: "border-[#FF5C9D]",
    bgClass: "bg-[#FF5C9D]",
    textClass: "text-[#FF5C9D]",
    accentBg: "rgba(255, 92, 157, 0.15)",
    description:
      "Fractional digital leadership, SLA maintenance stewardship, security compliance, and vendor consolidation advisory.",
    deliverables: ["Fractional CTO / CDO", "SLA Stewardship", "Security & Auditing", "Vendor Consolidation"],
  },
];

export const FIRM_COLOR_SYSTEM = {
  deepInk: "#0A0A0B", // Strong visual anchor and high-contrast typography
  warmPaper: "#F8F6F0", // Reading surfaces, breathing space, tactile warmth
  vibrantPink: "#FF90E8", // Primary action, Gumroad energy, select highlights
  butterYellow: "#FFC700", // The Thread signature, energy, optimism
  freshGreen: "#10B981", // Connection, growth, positive compounding outcomes
  cobaltBlue: "#3875FF", // Web engineering, cloud infrastructure, reliability
  vermilionCoral: "#FF5C40", // Brand identity, living design tokens, craftsmanship
  marigoldAmber: "#FFB800", // Documentary storytelling, photography, monographs
  fuchsiaRose: "#FF5C9D", // Digital advisory, SLA stewardship, executive direction
  pureBlack: "#000000",
  charcoal: "#18181B",
  charcoalCard: "#141416",
  charcoalBorder: "rgba(255, 255, 255, 0.12)",
};

export const GUMROAD_THEME = {
  bg: "#000000",
  charcoal: "#18181B",
  charcoalSubtle: "#222226",
  charcoalHover: "#2A2A30",
  borderSubtle: "rgba(255, 255, 255, 0.10)",
  borderCard: "rgba(255, 255, 255, 0.14)",
  pinkAccent: "#FF90E8", // Iconic Gumroad Pink
  yellowAccent: "#FFC700", // Iconic Gumroad Yellow
  textWhite: "#FFFFFF",
  textMuted: "#A1A1AA",
  textTertiary: "#71717A",
};

export const MARQUEE_ROW_1 = [
  { label: "Brand Identity Systems", color: "#FF5C40", category: "Brand" },
  { label: "Next.js 16 Web Engineering", color: "#3875FF", category: "Web" },
  { label: "Documentary Film & Video", color: "#FFB800", category: "Content" },
  { label: "Programmatic SEO Architecture", color: "#10B981", category: "Growth" },
  { label: "Fractional Digital Stewardship", color: "#FF5C9D", category: "Advisory" },
  { label: "Living Design Tokens", color: "#FF5C40", category: "Brand" },
  { label: "Server Components & Edge CDN", color: "#3875FF", category: "Web" },
  { label: "Quarterly Field Monographs", color: "#FFB800", category: "Content" },
];

export const MARQUEE_ROW_2 = [
  { label: "Admissions Conversion Portals", color: "#10B981", category: "Growth" },
  { label: "Multi-Platform Editorial Cadence", color: "#FFB800", category: "Content" },
  { label: "WCAG 2.1 AA Accessibility", color: "#3875FF", category: "Web" },
  { label: "Institutional Typography", color: "#FF5C40", category: "Brand" },
  { label: "Zero Vendor Handoff Strategy", color: "#FF5C9D", category: "Advisory" },
  { label: "Core Web Vitals Optimization", color: "#3875FF", category: "Web" },
  { label: "High-Intent Lead Routing", color: "#10B981", category: "Growth" },
  { label: "SLA Maintenance & Patching", color: "#FF5C9D", category: "Advisory" },
];

export const MARQUEE_ROW_3 = [
  { label: "Healthcare Clinic Platforms", color: "#3875FF", category: "Web" },
  { label: "Legal Practice Thought Leadership", color: "#FFB800", category: "Content" },
  { label: "Independent School Blueprints", color: "#10B981", category: "Growth" },
  { label: "Design System Architecture", color: "#FF5C40", category: "Brand" },
  { label: "Security & CSP Compliance", color: "#FF5C9D", category: "Advisory" },
  { label: "Edge Static Generation (SSG)", color: "#3875FF", category: "Web" },
  { label: "Custom Analytics Pipelines", color: "#10B981", category: "Growth" },
  { label: "Executive Digital Advisory", color: "#FF5C9D", category: "Advisory" },
];

