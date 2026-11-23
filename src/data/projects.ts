export interface CaseStudyDeliverable {
  title: string;
  description: string;
}

export interface ProjectCaseStudy {
  slug: string;
  title: string;
  image: string;
  clientType: string;
  industry: string;
  classification: "Client Commission" | "Strategic Concept & Architecture Study" | "Studio Initiative";
  classificationNotice: string;
  timeframe: string;
  divisions: string[];
  summary: string;
  challenge: string;
  strategicApproach: string;
  technicalDecisions: string[];
  executionDetails: {
    heading: string;
    description: string;
  }[];
  deliverables: CaseStudyDeliverable[];
  accentColor: string;
  heroMockup: {
    urlText: string;
    screenTitle: string;
    screenSubtitle: string;
    metrics: {
      label: string;
      value: string;
    }[];
  };
}

export const PROJECTS: ProjectCaseStudy[] = [
  {
    slug: "saint-jude-academy",
    title: "Saint Jude Academy",
    image: "/images/work/saint-jude-preview.webp",
    clientType: "K-12 Independent Preparatory Academy",
    industry: "Education & Schools",
    classification: "Strategic Concept & Architecture Study",
    classificationNotice: "This project is a detailed demonstration concept and architectural blueprint developed by FIRM to illustrate our specialized digital practice for educational institutions.",
    timeframe: "8-Week Comprehensive Study",
    divisions: ["Brand & Identity", "Web & Technology", "Social Media & Content"],
    summary: "A unified digital presence overhaul demonstrating how an established 80-year-old preparatory academy can decouple prospective parent admissions conversion from internal family community portals.",
    challenge: "The academy operated a fragmented 500-page legacy website built on proprietary school CMS software. Prospective parents seeking open house tours and viewbooks were overwhelmed by daily cafeteria menus, athletic rain delays, and dense PDF forms. Mobile page load times averaged 4.8 seconds, causing severe mobile drop-off during peak autumn admissions cycles.",
    strategicApproach: "FIRM engineered a clean architectural separation: The primary public domain was redesigned as a high-conversion Admissions Flagship with documentary photography, friction-free mobile tour booking, and clear tuition justification. Current parent utilities (calendars, announcements, portal logins) were isolated into a dedicated, persistent utility bar.",
    technicalDecisions: [
      "Next.js 16 App Router with static generation for sub-second page loads across all global regions.",
      "Strict WCAG 2.1 AA accessibility compliance with verified screen-reader testing and 4.5:1 contrast ratios.",
      "Custom 3-step tour booking module with zero external iframe dependencies.",
      "Documentary art direction shot lists capturing authentic classroom focus without artificial stock smiles.",
    ],
    executionDetails: [
      {
        heading: "01 // The Admissions & Tour Funnel",
        description: "Replaced an 18-field monolithic registration form with an intuitive 3-step mobile RSVP flow, capturing parent intent, student grade level, and scheduled tour dates with instant confirmation.",
      },
      {
        heading: "02 // Academic & Faculty Stature",
        description: "Transformed flat faculty rosters into rich biographical dossiers highlighting educational backgrounds, research publications, and direct department contacts.",
      },
      {
        heading: "03 // The Community Utility Bar",
        description: "Created a quiet, persistent header ribbon providing current families with one-click access to Google Calendar sync, daily athletics notices, and direct SIS gateway logins.",
      },
    ],
    deliverables: [
      {
        title: "Next.js Admissions Flagship",
        description: "Bespoke web application engineered with static site generation for lightning-fast speeds.",
      },
      {
        title: "Brand Guidelines & Typographic System",
        description: "Editorial serif and sans-serif pairings reflecting 80 years of institutional dignity.",
      },
      {
        title: "Mobile Tour Booking Engine",
        description: "Interactive scheduling interface with automated confirmation notifications.",
      },
      {
        title: "Documentary Photography Guidebook",
        description: "Lighting, framing, and student consent protocols for in-house communications staff.",
      },
    ],
    accentColor: "#B84A29",
    heroMockup: {
      urlText: "saintjude.academy/admissions",
      screenTitle: "Saint Jude Preparatory Academy",
      screenSubtitle: "Nurturing intellectual curiosity and moral character since 1946.",
      metrics: [
        { label: "Core Web Vitals", value: "100% Green" },
        { label: "Admissions Funnel", value: "3-Step Mobile" },
        { label: "Compliance Standard", value: "WCAG 2.1 AA" },
      ],
    },
  },
  {
    slug: "aether-health",
    title: "Aether Health Clinic",
    image: "/images/work/aether-health-preview.webp",
    clientType: "Specialty Surgical & Medical Practice",
    industry: "Healthcare & Medical",
    classification: "Strategic Concept & Architecture Study",
    classificationNotice: "This project is a detailed demonstration concept and architectural blueprint developed by FIRM to illustrate our patient-first digital presence framework for specialty healthcare practices.",
    timeframe: "6-Week Architecture Study",
    divisions: ["Brand & Identity", "Web & Technology", "Marketing & Growth"],
    summary: "Transforming a specialty medical practice’s digital presence from an anxious, clinical portal into a reassuring, high-trust flagship with friction-free patient intake.",
    challenge: "The clinic's existing website was cold, clinical, and difficult to navigate on mobile. Prospective patients seeking consultation for complex surgical procedures faced confusing medical jargon, slow-loading provider bios, and an intake form requiring manual printing and scanning.",
    strategicApproach: "We applied calm, patient-first color psychology (soft sage neutrals, warm alabaster, deep slate) and structured provider biographies around verified surgical specialties, patient outcomes, and direct appointment requests.",
    technicalDecisions: [
      "Client-side encrypted intake workflows protecting sensitive patient medical inquiries.",
      "High-speed provider directory searchable by clinical specialty and treatment focus.",
      "Accessible typography and generous line heights tested for low-vision and elderly patients.",
      "Local search schema markup achieving map-pack dominance for regional medical queries.",
    ],
    executionDetails: [
      {
        heading: "01 // Reassuring Visual Environment",
        description: "Replaced sterile white backgrounds and harsh hospital blue tones with warm, grounding tinted neutrals that reduce patient anxiety upon arrival.",
      },
      {
        heading: "02 // Provider Credential Showcase",
        description: "Engineered detailed physician profiles featuring high-resolution editorial portraiture, surgical fellowships, board certifications, and verified patient reviews.",
      },
      {
        heading: "03 // Streamlined Patient Gateway",
        description: "Designed a digital pre-visit intake checklist that patients can complete on their phone in 2 minutes prior to their consultation.",
      },
    ],
    deliverables: [
      {
        title: "Patient Web Flagship",
        description: "Ultra-fast Next.js platform optimized for seamless mobile navigation.",
      },
      {
        title: "Calm Healthcare Design System",
        description: "Color tokens, typography hierarchy, and accessibility guidelines.",
      },
      {
        title: "Specialist Provider Directory",
        description: "Searchable physician and treatment matrix with direct scheduling.",
      },
      {
        title: "Local Medical SEO Infrastructure",
        description: "Structured JSON-LD medical schema and Google Business Profile optimization.",
      },
    ],
    accentColor: "#1E6B42",
    heroMockup: {
      urlText: "aetherhealth.clinic/specialties",
      screenTitle: "Aether Health Surgical Institute",
      screenSubtitle: "World-class clinical precision with compassionate, unhurried patient care.",
      metrics: [
        { label: "Mobile Page Speed", value: "0.6s Load" },
        { label: "Patient Booking Flow", value: "Mobile First" },
        { label: "Accessibility Level", value: "WCAG 2.1 AA" },
      ],
    },
  },
  {
    slug: "vance-legal",
    title: "Vance & Partners Legal",
    image: "/images/work/vance-legal-preview.webp",
    clientType: "Corporate & Commercial Law Firm",
    industry: "Professional Services",
    classification: "Strategic Concept & Architecture Study",
    classificationNotice: "This project is a detailed demonstration concept and architectural study developed by FIRM to illustrate our intellectual prestige framework for legal partnerships.",
    timeframe: "7-Week Architecture Study",
    divisions: ["Brand & Identity", "Web & Technology", "Digital Management"],
    summary: "Elevating a commercial law practice's digital presence to reflect the intellectual stature of its senior partners through literary typography and structured legal thought leadership.",
    challenge: "The firm was competing against national practices for high-value corporate mandates, but its digital presence looked like an outdated, generic corporate template from 2014. Groundbreaking legal commentary written by senior partners was buried in an unsearchable blog.",
    strategicApproach: "We redesigned the firm’s website as a prestigious legal publication and practice authority. Using editorial typography (*Newsreader* + *Inter*), we transformed legal alerts into dignified journal essays cross-linked with partner dossiers and practice area matrices.",
    technicalDecisions: [
      "MDX-driven publication system enabling communications staff to publish client alerts in minutes.",
      "Searchable practice area directory linking relevant transactions, partners, and legal commentaries.",
      "Strict security headers and encrypted client consultation request channels.",
      "Print-optimized stylesheet allowing corporate clients to print formatted legal briefs with one click.",
    ],
    executionDetails: [
      {
        heading: "01 // Editorial Legal Journal",
        description: "Treated partner insights like a formal law review with estimated reading times, citation callouts, and author biographies.",
      },
      {
        heading: "02 // Partner & Transaction Dossiers",
        description: "Structured partner biographies showcasing bar admissions, landmark commercial transactions, and direct vCard downloads.",
      },
      {
        heading: "03 // Practice Area Architecture",
        description: "Structured complex commercial litigation, mergers, and regulatory advisory into clear, intuitive client pathways.",
      },
    ],
    deliverables: [
      {
        title: "Bespoke Legal Flagship",
        description: "High-craft web platform reflecting corporate and institutional prestige.",
      },
      {
        title: "Journal Publishing Architecture",
        description: "Structured thought leadership portal with search and topic filtering.",
      },
      {
        title: "Partner & Practice Directory",
        description: "Comprehensive biography and transaction showcase system.",
      },
      {
        title: "Print & Deck Design Tokens",
        description: "Consistent typography and layout tokens for executive pitch decks.",
      },
    ],
    accentColor: "#1F1B16",
    heroMockup: {
      urlText: "vancepartners.law/journal",
      screenTitle: "Vance & Partners Attorneys at Law",
      screenSubtitle: "Strategic legal counsel for complex commercial transactions and cross-border governance.",
      metrics: [
        { label: "Publishing Cadence", value: "Instant MDX" },
        { label: "Partner Directory", value: "Searchable Matrix" },
        { label: "Typography Standard", value: "Editorial Serif" },
      ],
    },
  },
];
