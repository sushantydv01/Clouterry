export interface ServiceDeliverable {
  category: string;
  items: string[];
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceDivision {
  id: string;
  slug: string;
  code: string;
  title: string;
  eyebrow: string;
  subtitle: string;
  proposition: string;
  timeframe: string;
  problems: {
    title: string;
    description: string;
  }[];
  methodology: {
    step: string;
    title: string;
    description: string;
  }[];
  deliverables: ServiceDeliverable[];
  crossConnections: {
    division: string;
    slug: string;
    relationship: string;
  }[];
  faqs: ServiceFAQ[];
}

export const SERVICES: ServiceDivision[] = [
  {
    id: "brand-identity",
    slug: "brand-identity",
    code: "01 // DIVISION",
    title: "Brand & Identity",
    eyebrow: "Strategic Reputation & Visual Systems",
    subtitle: "We craft enduring brand platforms, typographic systems, and digital design tokens that establish immediate market authority.",
    proposition: "A brand is not a logo file. It is the visual, typographic, and narrative standard that governs every interaction an organization has with the world.",
    timeframe: "4–8 Week Sprint",
    problems: [
      {
        title: "Visual Incoherence Across Touchpoints",
        description: "Organizations accumulate fractured assets over years—different fonts on the website, mismatched slide decks, and amateur social graphics that erode perceived competence.",
      },
      {
        title: "Commoditized Market Positioning",
        description: "When an organization's voice mirrors its competitors, it is forced to compete on price rather than intellectual and operational stature.",
      },
      {
        title: "Static Guidelines No One Follows",
        description: "Traditional agencies deliver 200-page static PDFs that sit in drawers. We engineer living, digital-first token systems integrated directly into code repositories.",
      },
    ],
    methodology: [
      {
        step: "01",
        title: "Reputation & Market Audit",
        description: "Deep stakeholder interviews, competitive positioning landscape analysis, and visual surface inventory.",
      },
      {
        step: "02",
        title: "Core Thesis & Narrative Architecture",
        description: "Formulating the foundational positioning statement, tone of voice principles, and vocabulary guidelines.",
      },
      {
        step: "03",
        title: "Typographic & Mark Engineering",
        description: "Custom wordmark drafting, brand symbol geometry, responsive type hierarchy, and high-contrast color ramps.",
      },
      {
        step: "04",
        title: "Digital Design System & Guidelines",
        description: "Publishing digital brand tokens for CSS/Tailwind alongside physical stationery, deck, and collateral specifications.",
      },
    ],
    deliverables: [
      {
        category: "Strategic Foundation",
        items: [
          "Market positioning platform & core narrative thesis",
          "Tone of voice principles & communication standards",
          "Audience segmentation & messaging matrices",
        ],
      },
      {
        category: "Visual Identity Assets",
        items: [
          "Primary, secondary & monogram wordmarks (SVG/vector)",
          "Editorial serif, sans-serif & mono typographic system",
          "Accessible tinted neutral ramp & architectural accent colors",
          "Custom iconography & structural grid specifications",
        ],
      },
      {
        category: "Digital & Production Tokens",
        items: [
          "Tailwind CSS v4 `@theme` tokens ready for engineering",
          "Figma master design library with nested component radiuses",
          "Executive presentation decks, letterhead & collateral templates",
          "Web-based living brand guidelines documentation",
        ],
      },
    ],
    crossConnections: [
      {
        division: "Web & Technology",
        slug: "web-technology",
        relationship: "Tokens, typography, and layout grids translate directly into semantic Next.js App Router code.",
      },
      {
        division: "Social & Content",
        slug: "social-content",
        relationship: "Brand tone, typographic hierarchy, and color palettes dictate short-form video art direction and photography.",
      },
      {
        division: "Marketing & Growth",
        slug: "marketing-growth",
        relationship: "High-authority brand positioning increases inbound ad conversion and commands premium search presence.",
      },
      {
        division: "Digital Management",
        slug: "digital-management",
        relationship: "Continuous brand governance guarantees that new landing pages never drift from the established design standard.",
      },
    ],
    faqs: [
      {
        question: "Do you design logos in isolation without a strategy?",
        answer: "No. A logo mark detached from positioning, typography, and digital architecture fails within months. We only craft identity systems as part of a complete reputation framework.",
      },
      {
        question: "How are the final brand assets handed over?",
        answer: "We provide complete vector packages (SVG, EPS, PDF, PNG) organized by optical size and colorway, alongside living web guidelines and ready-to-import CSS tokens for developers.",
      },
      {
        question: "Who owns the intellectual property and font licenses?",
        answer: "You own all custom marks, layouts, and copy completely upon settlement. For proprietary typefaces, we assist your team in acquiring direct perpetual commercial licenses.",
      },
    ],
  },
  {
    id: "web-technology",
    slug: "web-technology",
    code: "02 // DIVISION",
    title: "Web & Technology",
    eyebrow: "Next.js App Router & Software Engineering",
    subtitle: "We engineer ultra-fast, accessible, bespoke web platforms that turn your digital flagship into an institutional conversion engine.",
    proposition: "Your website is your organization’s most valuable digital asset. It should not be built on brittle, bloated templates that frustrate users and degrade search rankings.",
    timeframe: "6–10 Week Sprint",
    problems: [
      {
        title: "Legacy CMS Fragility & Security Holes",
        description: "WordPress and generic page-builder stacks require constant patch maintenance, crash under traffic spikes, and leak user data through unvetted plugins.",
      },
      {
        title: "Failing Core Web Vitals & Lost Inbound Demand",
        description: "Slow mobile load times (3+ seconds) trigger severe Google ranking penalties and cause 40%+ of prospective clients or parents to abandon the page.",
      },
      {
        title: "Inaccessible, Non-Compliant Layouts",
        description: "Websites failing WCAG 2.1 AA accessibility expose schools, healthcare providers, and institutions to civil rights compliance lawsuits and alienate key users.",
      },
    ],
    methodology: [
      {
        step: "01",
        title: "Information Architecture & Wireframes",
        description: "Audience journey mapping, sitemap consolidation, and low-fidelity structural flow blueprints.",
      },
      {
        step: "02",
        title: "Bespoke Interface Design",
        description: "High-craft desktop and mobile UI design adhering to 4px spacing grids, nested radiuses, and typographic hierarchy.",
      },
      {
        step: "03",
        title: "Turbopack Next.js App Router Build",
        description: "Clean React 19 server components, static generation (SSG) for instantaneous loads, and edge-rendered dynamic APIs.",
      },
      {
        step: "04",
        title: "Audits, Accessibility & Staged Rollout",
        description: "100% Core Web Vitals verification, WCAG AA screen-reader testing, DNS migration, and deployment pipelines.",
      },
    ],
    deliverables: [
      {
        category: "Frontend Engineering",
        items: [
          "Bespoke Next.js 16 App Router application with Turbopack",
          "Zero client-side layout shifts (CLS < 0.05) & sub-second page loads",
          "Fully responsive layouts optimized across 360px to 2560px viewports",
          "WCAG 2.1 AA compliant color contrast, focus rings & keyboard navigation",
        ],
      },
      {
        category: "Infrastructure & Security",
        items: [
          "Automated Netlify / Vercel edge deployment configuration",
          "Strict Content Security Policies (CSP), HSTS, and nosniff headers",
          "Clean REST / Server Action endpoints with server-side validation",
          "Structured MDX or headless CMS integration for effortless publishing",
        ],
      },
      {
        category: "Conversion & SEO Mechanics",
        items: [
          "Automated dynamic XML sitemaps, robots.txt, and metadata generation",
          "JSON-LD Schema.org structured data (Organization, EducationalOrg, LocalBusiness)",
          "Friction-free multi-step intake, inquiry & consultation booking funnels",
          "Privacy-first analytics integration (Plausible / Fathom / GA4)",
        ],
      },
    ],
    crossConnections: [
      {
        division: "Brand & Identity",
        slug: "brand-identity",
        relationship: "Brings brand tokens, editorial typography, and visual standards to life in interactive production code.",
      },
      {
        division: "Marketing & Growth",
        slug: "marketing-growth",
        relationship: "Provides the ultra-fast technical foundation required to rank #1 on Google and convert ad traffic.",
      },
      {
        division: "Social & Content",
        slug: "social-content",
        relationship: "Hosts video embeds, editorial articles, and documentary assets without sacrificing millisecond performance.",
      },
      {
        division: "Digital Management",
        slug: "digital-management",
        relationship: "Includes clean, documented codebases designed for effortless long-term stewardship and zero tech debt.",
      },
    ],
    faqs: [
      {
        question: "Can our non-technical team update copy and case studies?",
        answer: "Yes. We configure structured MDX files or lightweight headless visual editors so your communications staff can publish articles, update events, or add team members in seconds.",
      },
      {
        question: "What hosting environment do you recommend?",
        answer: "We deploy onto Netlify or Vercel edge networks with global CDN caching and automatic SSL. Hosting costs typically range from \$0 to \$20/month with enterprise-grade reliability.",
      },
      {
        question: "Do you build e-commerce or custom portals?",
        answer: "Yes. We engineer bespoke headless commerce workflows (Shopify / Stripe) and secure client/parent intake gateways that maintain instantaneous sub-second speeds.",
      },
    ],
  },
  {
    id: "social-content",
    slug: "social-content",
    code: "03 // DIVISION",
    title: "Social Media & Content",
    eyebrow: "Editorial Video, Photography & Narrative Strategy",
    subtitle: "We direct and produce disciplined editorial content that reinforces organizational stature and drives authentic organic attention.",
    proposition: "Social media for serious organizations is not about following dance trends. It is the continuous, dignified demonstration of institutional excellence, culture, and craft.",
    timeframe: "Monthly Stewardship Retainer",
    problems: [
      {
        title: "Embarrassing, Cheap-Looking Video Formats",
        description: "Prestigious institutions and premier brands frequently post blurry phone clips with awkward corporate scripts that undermine their reputation.",
      },
      {
        title: "Inconsistent, Exhausting Production Burdens",
        description: "Internal teams start with enthusiasm but burn out after three weeks, leaving social profiles looking abandoned or sporadic.",
      },
      {
        title: "Vanity Metrics Disconnected from Business Goals",
        description: "Agencies celebrate thousands of random overseas views on viral memes that generate zero admissions inquiries, client calls, or sales.",
      },
    ],
    methodology: [
      {
        step: "01",
        title: "Content Narrative Strategy",
        description: "Defining 3 core content pillars that align with commercial objectives (e.g. academic rigor, faculty craft, student life).",
      },
      {
        step: "02",
        title: "Documentary Art Direction & Production",
        description: "On-site or studio documentary capture: natural lighting, clean audio stems, and authentic, unhurried framing.",
      },
      {
        step: "03",
        title: "Editorial Post-Production",
        description: "High-retention 9:16 vertical video editing with brand-aligned typography, subtle color grading, and zero artificial gimmicks.",
      },
      {
        step: "04",
        title: "Governance & Cadence Distribution",
        description: "Structured monthly calendar delivery with pre-approved copy, community protocols, and conversion link tracking.",
      },
    ],
    deliverables: [
      {
        category: "Short-Form Video (Reels / TikTok / Shorts)",
        items: [
          "8–12 dedicated 4K vertical video assets per month",
          "Color-graded footage matching brand palette & lighting guidelines",
          "Clean audio mastering with subtle room resonance and speech clarity",
          "Hardcoded accessible closed captions in brand typography",
        ],
      },
      {
        category: "Photography & Still Assets",
        items: [
          "High-resolution campus, office & documentary photographic library",
          "Executive & leadership portraiture with editorial art direction",
          "Multi-slide carousel narratives for LinkedIn & Instagram",
        ],
      },
      {
        category: "Operational Governance",
        items: [
          "90-day rolling content calendar aligned with institutional milestones",
          "Pre-cleared copy captions with zero hype words or emoji spam",
          "Crisis communication & community moderation guidelines",
        ],
      },
    ],
    crossConnections: [
      {
        division: "Brand & Identity",
        slug: "brand-identity",
        relationship: "Ensures that every frame of video and every photo reflects the established visual and typographic standards.",
      },
      {
        division: "Web & Technology",
        slug: "web-technology",
        relationship: "Feeds social traffic directly into tailored, high-converting landing pages engineered on the website.",
      },
      {
        division: "Marketing & Growth",
        slug: "marketing-growth",
        relationship: "Provides high-performing organic creative assets that can be boosted as targeted paid search and social campaigns.",
      },
      {
        division: "Digital Management",
        slug: "digital-management",
        relationship: "Allows continuous monthly asset updates across the web platform without requiring separate one-off agency fees.",
      },
    ],
    faqs: [
      {
        question: "Do you come on-site to film?",
        answer: "Yes. For schools, clinics, and regional institutions, we direct structured quarterly or bi-monthly capture days with minimal disruption to daily operations.",
      },
      {
        question: "Can you train our in-house staff to shoot footage?",
        answer: "Yes. We create practical 'Pocket Production Guides' detailing smartphone camera settings, lighting kits, and audio mics so your team can capture daily moments at high standards.",
      },
      {
        question: "Do we review content before it goes live?",
        answer: "Always. All video files, captions, and scheduling dates are loaded into a private review dashboard for your communications lead's approval 7 days prior to posting.",
      },
    ],
  },
  {
    id: "marketing-growth",
    slug: "marketing-growth",
    code: "04 // DIVISION",
    title: "Marketing & Visibility",
    eyebrow: "Search Visibility, Inbound Funnels & Paid Acquisition",
    subtitle: "We connect your digital flagship with high-intent audiences through technical search visibility, paid distribution, and conversion architecture.",
    proposition: "Visibility without conversion is an expensive hobby. Conversion without brand stature damages pricing power. We engineer growth that protects institutional trust.",
    timeframe: "12-Week Sprint or Retainer",
    problems: [
      {
        title: "Invisible to High-Intent Search Queries",
        description: "When parents search 'best independent preparatory school in [city]' or clients search for specialized counsel, competitors dominate page one.",
      },
      {
        title: "Wasted Advertising Spend on Generic Clicks",
        description: "Google and Meta ad campaigns burning thousands monthly by targeting broad keywords and sending traffic to unoptimized homepages.",
      },
      {
        title: "Broken Funnel Tracking & Blind Decision-Making",
        description: "Leadership having no clear data on which channels produce actual enrolled students, signed retainers, or qualified inquiries.",
      },
    ],
    methodology: [
      {
        step: "01",
        title: "Search Demand & Keyword Architecture",
        description: "Mapping high-intent organic search terms, competitor visibility gaps, and local map-pack opportunities.",
      },
      {
        step: "02",
        title: "Technical & On-Page SEO Overhaul",
        description: "Structuring semantic schema markups, internal link hierarchies, and lightning-fast page speed performance.",
      },
      {
        step: "03",
        title: "Targeted Paid Search Infrastructure",
        description: "Building tightly clustered Google Search campaigns directed to dedicated, high-converting landing pages.",
      },
      {
        step: "04",
        title: "Conversion Architecture & Analytics",
        description: "Engineering friction-free intake workflows with privacy-first analytics and executive-level monthly reporting.",
      },
    ],
    deliverables: [
      {
        category: "Organic Search Optimization (SEO)",
        items: [
          "Technical SEO implementation (Core Web Vitals, canonical tags, sitemaps)",
          "Local map pack optimization & Google Business Profile architecture",
          "Editorial content strategy targeting high-intent inquiry keywords",
          "Institutional backlink & digital PR authority building",
        ],
      },
      {
        category: "Paid Acquisition Campaigns",
        items: [
          "High-intent Google Search ad campaign setup & ongoing bid optimization",
          "Negative keyword sculpting to prevent wasteful consumer clicks",
          "Dedicated campaign landing pages designed for conversion",
          "Targeted Meta & LinkedIn sponsored thought leadership distribution",
        ],
      },
      {
        category: "Analytics & Governance",
        items: [
          "Privacy-compliant conversion event tracking (inquiries, calls, downloads)",
          "Executive monthly reporting dashboard with cost-per-inquiry visibility",
          "A/B testing of messaging headlines, form lengths, and CTAs",
        ],
      },
    ],
    crossConnections: [
      {
        division: "Web & Technology",
        slug: "web-technology",
        relationship: "Relies on the ultra-fast Next.js engineering stack to ensure 100% Core Web Vitals and high Quality Scores.",
      },
      {
        division: "Brand & Identity",
        slug: "brand-identity",
        relationship: "Applies authoritative brand positioning so ad messaging stands out from commoditized competitor ads.",
      },
      {
        division: "Social & Content",
        slug: "social-content",
        relationship: "Uses organic high-retention video assets as sponsored social creative that converts at significantly lower cost.",
      },
      {
        division: "Digital Management",
        slug: "digital-management",
        relationship: "Continually refines website landing pages and meta descriptions based on real user conversion data.",
      },
    ],
    faqs: [
      {
        question: "How long does SEO take to generate qualified inquiries?",
        answer: "Technical and local SEO fixes often show measurable ranking improvements within 30 to 60 days. Comprehensive search dominance for competitive terms builds steadily over 3 to 6 months.",
      },
      {
        question: "Do you require long-term ad spend commitments?",
        answer: "No. You pay ad platforms (Google/Meta) directly with zero hidden markups. We charge a transparent, fixed management fee for campaign architecture, optimization, and reporting.",
      },
      {
        question: "How do you protect school or medical privacy?",
        answer: "We adhere strictly to privacy guidelines (COPPA, HIPAA, GDPR), utilizing privacy-preserving analytics without invasive third-party cookie trackers.",
      },
    ],
  },
  {
    id: "digital-management",
    slug: "digital-management",
    code: "05 // DIVISION",
    title: "Digital Management & Consulting",
    eyebrow: "Fractional Stewardship & Platform Governance",
    subtitle: "We provide senior digital leadership, continuous software governance, and strategic advisory for organizations without in-house digital directors.",
    proposition: "Launching a website is not the finish line—it is day one. An unmanaged digital platform decays in performance, develops security vulnerabilities, and falls behind modern standards.",
    timeframe: "Annual Stewardship SLA",
    problems: [
      {
        title: "Platform Decay & Software Vulnerability",
        description: "Websites left unattended for 12 months accumulate deprecated libraries, unpatched security vulnerabilities, and broken third-party integrations.",
      },
      {
        title: "Internal Frustration with Digital Changes",
        description: "Leadership teams wanting to launch a new program, announce a faculty hire, or publish an annual report wait weeks for unresponsive freelancers.",
      },
      {
        title: "Vendor Chaos & Overpriced Technology Contracts",
        description: "Organizations paying redundant software licenses for separate form builders, hosting tools, and email plugins without unified oversight.",
      },
    ],
    methodology: [
      {
        step: "01",
        title: "Infrastructure & Security Onboarding",
        description: "Auditing domain records, DNS routing, dependency trees, and accessibility standards.",
      },
      {
        step: "02",
        title: "Continuous Maintenance & Monitoring",
        description: "Automated daily uptime checks, monthly dependency security patches, and quarterly Core Web Vitals audits.",
      },
      {
        step: "03",
        title: "Priority Content & Feature Sprints",
        description: "Dedicated monthly engineering hours for creating new landing pages, updating staff rosters, and refining forms.",
      },
      {
        step: "04",
        title: "Quarterly Executive Digital Reviews",
        description: "Strategic briefings with your board or leadership evaluating search growth, digital roadmaps, and software spend.",
      },
    ],
    deliverables: [
      {
        category: "Platform Stewardship",
        items: [
          "Continuous Next.js, Node.js & dependency security updates",
          "Global edge hosting, SSL certification & DNS management",
          "Automated 24/7 uptime monitoring & instant incident response",
          "Quarterly WCAG 2.1 AA accessibility and speed regression audits",
        ],
      },
      {
        category: "Content & Engineering Support",
        items: [
          "Guaranteed 24-business-hour response time for platform requests",
          "Dedicated monthly allocation for new page creation & design tweaks",
          "Form routing, CRM integration & intake workflow maintenance",
          "Staff training and technical documentation for communications teams",
        ],
      },
      {
        category: "Executive Advisory",
        items: [
          "Quarterly digital roadmap briefing with FIRM partners",
          "Software vendor evaluation & contract negotiation support",
          "Strategic advice on AI tooling, parent portals, and digital policy",
        ],
      },
    ],
    crossConnections: [
      {
        division: "Web & Technology",
        slug: "web-technology",
        relationship: "Ensures the custom Next.js codebase remains cutting-edge, secure, and fast year after year.",
      },
      {
        division: "Brand & Identity",
        slug: "brand-identity",
        relationship: "Acts as brand guardian, ensuring newly added sections strictly adhere to established design tokens.",
      },
      {
        division: "Social & Content",
        slug: "social-content",
        relationship: "Synchronizes platform updates with seasonal admissions cycles and marketing announcements.",
      },
      {
        division: "Marketing & Growth",
        slug: "marketing-growth",
        relationship: "Maintains analytics pipelines and implements ongoing landing page conversion refinements.",
      },
    ],
    faqs: [
      {
        question: "What happens if our website goes down?",
        answer: "Our automated monitoring checks your site every 60 seconds from multiple global regions. In the rare event of an incident, senior engineers resolve the issue immediately under our SLA.",
      },
      {
        question: "Can we roll over unused monthly update hours?",
        answer: "Yes. Unused monthly support allocation rolls over into quarterly feature sprints, allowing you to fund larger page overhauls or seasonal campaigns without surprise invoices.",
      },
      {
        question: "Do you manage websites built by other agencies?",
        answer: "We occasionally take over stewardship of modern Next.js / React platforms after conducting an initial technical architecture audit.",
      },
    ],
  },
];
