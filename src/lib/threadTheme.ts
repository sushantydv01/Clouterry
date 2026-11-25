export interface CapabilityNode {
  num: string;
  name: string;
  shortName: string;
  slug: string;
  color: string;
  colorName: string;
  tag: string;
  image: string;
  description: string;
  deliverableSummary: string;
  deliverables: string[];
}

export const CAPABILITY_NODES: CapabilityNode[] = [
  {
    num: "01",
    name: "Brand & Identity",
    shortName: "Brand",
    slug: "brand-identity",
    color: "#ED83A8",
    colorName: "Rose Pink",
    tag: "Visual Authority",
    image: "/images/studio/s04-brand-specimen.webp",
    description:
      "Typographic hierarchies, editorial systems, and living CSS design tokens engineered to translate directly into production code.",
    deliverableSummary: "Living token system, mark geometry & editorial specimen",
    deliverables: [
      "Visual Identity Systems",
      "Living Design Tokens",
      "Art Direction",
      "Editorial Guidelines",
    ],
  },
  {
    num: "02",
    name: "Web & Technology",
    shortName: "Web",
    slug: "web-technology",
    color: "#A6D8A1",
    colorName: "Garden Green",
    tag: "Engineered Architecture",
    image: "/images/studio/s05-web-architecture.webp",
    description:
      "Bespoke Next.js App Router platforms using Server Components, edge delivery, and strict WCAG 2.1 AA accessibility without runtime bloat.",
    deliverableSummary: "Full-stack Next.js repository with WCAG 2.1 AA engineering",
    deliverables: [
      "Next.js App Router",
      "Server Components",
      "Edge Cache Architecture",
      "WCAG 2.1 AA Compliance",
    ],
  },
  {
    num: "03",
    name: "Social Media & Content",
    shortName: "Content",
    slug: "social-content",
    color: "#F4CF55",
    colorName: "Butter Yellow",
    tag: "Documentary Rigor",
    image: "/images/studio/s06-editorial-media.webp",
    description:
      "Original documentary photography, institutional field monographs, and editorial video calibrated specifically for your live viewport.",
    deliverableSummary: "Viewport-calibrated documentary film, photography & monographs",
    deliverables: [
      "Documentary Photography",
      "Editorial Monographs",
      "Institutional Video",
      "Narrative Architecture",
    ],
  },
  {
    num: "04",
    name: "Marketing & Growth",
    shortName: "Growth",
    slug: "marketing-growth",
    color: "#ED83A8",
    colorName: "Rose Pink",
    tag: "Organic Inbound",
    image: "/images/studio/s07-growth-compass.webp",
    description:
      "Programmatic JSON-LD schema, admissions and inquiry conversion architecture, and sustainable organic discovery built into core code.",
    deliverableSummary: "Structured search schema & high-intent conversion pipelines",
    deliverables: [
      "Technical SEO & Schema",
      "Conversion Architecture",
      "Admissions Funnels",
      "Discovery Analytics",
    ],
  },
  {
    num: "05",
    name: "Digital Management & Consulting",
    shortName: "Advisory",
    slug: "digital-management",
    color: "#A6D8A1",
    colorName: "Garden Green",
    tag: "Continuous Ownership",
    image: "/images/studio/s08-stewardship-arch.webp",
    description:
      "Senior partner platform stewardship, security governance, continuous maintenance, and complete client codebase ownership with zero lock-in.",
    deliverableSummary: "Complete client repository ownership & ongoing partner governance",
    deliverables: [
      "Fractional CDO Advisory",
      "Platform Governance",
      "Security Auditing",
      "Total Client Ownership",
    ],
  },
];

export const FIRM_COLOR_SYSTEM = {
  midnightCharcoal: "#171717",
  surfaceCharcoal: "#1E1E20",
  recessCharcoal: "#121214",
  warmCream: "#F8F6EF",
  rosePink: "#ED83A8",
  gardenGreen: "#A6D8A1",
  butterYellow: "#F4CF55",
  chalkWhite: "#FFFFFF",
};

export const MARQUEE_ROW_1 = [
  { label: "Brand Identity Systems", color: "#ED83A8", category: "Brand" },
  { label: "Next.js Web Engineering", color: "#A6D8A1", category: "Web" },
  { label: "Documentary Media & Film", color: "#F4CF55", category: "Content" },
  { label: "Programmatic Search Schema", color: "#ED83A8", category: "Growth" },
  { label: "Continuous Platform Stewardship", color: "#A6D8A1", category: "Advisory" },
];

export const MARQUEE_ROW_2 = [
  { label: "Admissions Conversion Portals", color: "#F4CF55", category: "Education" },
  { label: "WCAG 2.1 AA Accessibility", color: "#A6D8A1", category: "Web" },
  { label: "Living CSS Design Tokens", color: "#ED83A8", category: "Brand" },
  { label: "Healthcare Clinic Flagships", color: "#A6D8A1", category: "Healthcare" },
  { label: "Legal Thought Leadership", color: "#F4CF55", category: "Legal" },
  { label: "Zero Vendor Lock-In", color: "#ED83A8", category: "Advisory" },
];
