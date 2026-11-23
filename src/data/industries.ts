export interface IndustryLayer {
  layer: string;
  name: string;
  tagline: string;
  purpose: string;
  features: string[];
  problemsAddressed: string[];
  exampleDeliverables: string[];
  connectedCapabilities: string[];
}

export interface IndustrySector {
  id: string;
  slug: string;
  title: string;
  eyebrow: string;
  tagline: string;
  description: string;
  audiences: string[];
  challenges: {
    title: string;
    description: string;
  }[];
  solutions: {
    title: string;
    description: string;
  }[];
  deliverables: string[];
  blueprintLayers?: IndustryLayer[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const INDUSTRIES: IndustrySector[] = [
  {
    id: "education",
    slug: "education",
    title: "Education & Schools",
    eyebrow: "Primary Sector Practice",
    tagline: "Dedicated digital presence architecture for preparatory academies, independent K-12 schools, and educational institutions.",
    description: "Schools face a complex institutional challenge: they must inspire prospective parents to inquire and apply, while serving current families with daily calendars and communications, and engaging alumni for giving. We engineer unified presence systems that balance admissions conversion with institutional dignity.",
    audiences: [
      "Independent K-12 Preparatory Schools & Day Academies",
      "Boarding Schools & International Academies",
      "Specialized Montessori & Arts Schools",
      "Higher Education Departments & Specialized Institutes",
    ],
    challenges: [
      {
        title: "Conflicting Stakeholder Journeys",
        description: "Prospective parents wanting tour booking get buried under lunch menus, bus routes, and internal parent notices on a cluttered homepage.",
      },
      {
        title: "Generic Stock Imagery & Diluted Voice",
        description: "Nearly every school website uses identical slogans ('nurturing excellence') and stock photography of kids in microscopes, failing to communicate authentic campus distinction.",
      },
      {
        title: "Brittle Legacy Portals with Poor Mobile UX",
        description: "School systems built on proprietary platforms (Blackbaud, Finalsite) that take 5+ seconds to load on mobile phones, frustrating busy parents and leaking admissions inquiries.",
      },
      {
        title: "Accessibility & Compliance Vulnerability",
        description: "Failure to comply with WCAG 2.1 AA accessibility guidelines exposes schools to legal risk and alienates community members with assistive needs.",
      },
    ],
    solutions: [
      {
        title: "Clean Stakeholder Partitioning",
        description: "The primary public website is engineered purely as a high-conversion Admissions & Reputation flagship. Current family utilities (calendars, forms, portals) are cleanly accessible via a dedicated top utility bar.",
      },
      {
        title: "Friction-Free Mobile Tour Booking",
        description: "Streamlined 3-step open house RSVP, virtual tour viewbook download, and automated inquiry routing into school admissions CRMs.",
      },
      {
        title: "Documentary Art Direction",
        description: "Shot lists and video direction that capture real classroom focus, architectural majesty, athletic spirit, and faculty passion without staging artificial smiles.",
      },
      {
        title: "Full WCAG 2.1 AA Compliance",
        description: "Built-in keyboard accessibility, semantic headings, high-contrast typography, and screen-reader tested components.",
      },
    ],
    deliverables: [
      "Custom Next.js Admissions Flagship Website",
      "Frictionless Mobile Tour Booking & Inquiry Engine",
      "Interactive Campus Map & Virtual Viewbook Architecture",
      "Independent Parent & Community Portal Utility Bar",
      "Institutional Documentary Photography & Video Art Direction",
      "WCAG 2.1 AA Accessibility Certification Audit",
      "Alumni Stature & Annual Giving Campaign Landing Pages",
    ],
    blueprintLayers: [
      {
        layer: "01",
        name: "Admissions & Public Gateway",
        tagline: "The Inbound Conversion Engine",
        purpose: "Capture prospective family interest, build immediate institutional trust, and convert visits into open house tours and completed applications.",
        features: [
          "Interactive 3-step tour booking & inquiry flow",
          "Digital interactive viewbook with downloadable curriculum guides",
          "Sub-second mobile performance for busy parents on smartphones",
          "Automated inquiry synchronization with admissions CRMs (HubSpot, Slate, Blackbaud)",
        ],
        problemsAddressed: [
          "Low conversion on tour booking forms",
          "High mobile bounce rate on complex legacy portals",
          "Lost inquiries due to unformatted PDF application downloads",
        ],
        exampleDeliverables: [
          "Next.js Admissions Hub",
          "Mobile Tour Booking Module",
          "Digital Viewbook Reader",
        ],
        connectedCapabilities: ["Web & Technology", "Marketing & Growth"],
      },
      {
        layer: "02",
        name: "Institutional Reputation & Stature",
        tagline: "The Brand Stature Canvas",
        purpose: "Articulate the unique academic philosophy, faculty excellence, and student outcomes that justify tuition and inspire philanthropic commitment.",
        features: [
          "Faculty credential showcase & academic philosophy exposition",
          "College matriculation records & alumni success narratives",
          "Arts, athletic achievements & signature programs exhibition",
          "Documentary classroom photography & student project galleries",
        ],
        problemsAddressed: [
          "Commoditized messaging that sounds like every neighboring school",
          "Inability to clearly justify tuition value to prospective families",
          "Lack of faculty intellectual authority online",
        ],
        exampleDeliverables: [
          "Brand Platform & Guidelines",
          "Documentary Photo Library",
          "Alumni & Matriculation Showcase",
        ],
        connectedCapabilities: ["Brand & Identity", "Social & Content"],
      },
      {
        layer: "03",
        name: "Parent & Community Experience",
        tagline: "The Clean Utility Hub",
        purpose: "Provide current families, faculty, and alumni with instant, organized access to daily operational tools without cluttering the admissions experience.",
        features: [
          "Dedicated parent quick-links utility bar at top of viewport",
          "Dynamic school calendar with iCal / Google Calendar subscription sync",
          "Athletic game schedules, weather notices & daily announcements",
          "Clean gateway authentication into LMS and student information portals",
        ],
        problemsAddressed: [
          "Current parents complaining they can never find the school calendar or daily forms",
          "Homepage cluttered with internal notices meant only for current families",
          "Frustrating daily login workflows for busy parents",
        ],
        exampleDeliverables: [
          "Community Utility Bar",
          "Dynamic Calendar Hub",
          "Parent Gateway Hub",
        ],
        connectedCapabilities: ["Web & Technology", "Digital Management"],
      },
      {
        layer: "04",
        name: "Governance, Safety & Accessibility",
        tagline: "The Institutional Trust Shield",
        purpose: "Ensure total regulatory compliance, child data privacy protection, accessibility for all community members, and platform uptime.",
        features: [
          "Strict WCAG 2.1 AA screen-reader and keyboard accessibility",
          "COPPA / FERPA child privacy conscious form architectures",
          "Encrypted edge hosting with 99.99% uptime guarantee during application deadlines",
          "Emergency alert banner system with instant push to homepage",
        ],
        problemsAddressed: [
          "Legal liability from non-compliant inaccessible web pages",
          "Website crashes during major admissions deadline traffic surges",
          "Inability to publish emergency campus notices within 60 seconds",
        ],
        exampleDeliverables: [
          "Emergency Alert Banner System",
          "WCAG 2.1 AA Audit Report",
          "Annual Maintenance SLA",
        ],
        connectedCapabilities: ["Digital Management", "Web & Technology"],
      },
    ],
    faqs: [
      {
        question: "Do we have to replace our existing school software (Blackbaud, PowerSchool, Veracross)?",
        answer: "No. FIRM specializes in the public-facing brand, admissions, and community gateway. We integrate seamlessly with your existing SIS / LMS by providing high-speed gateways and single-sign-on links, leaving your student records intact.",
      },
      {
        question: "How long does a school website overhaul take?",
        answer: "A complete school digital presence transformation typically spans 8 to 12 weeks. We schedule discovery and photography around academic terms, aiming for staging reviews prior to major fall admissions cycles.",
      },
      {
        question: "How do you handle student privacy in photography and video?",
        answer: "We work directly with your communications office to ensure strict adherence to family media consent registries, developing approved student rosters prior to any photography sprint.",
      },
    ],
  },
  {
    id: "healthcare",
    slug: "healthcare",
    title: "Healthcare & Medical",
    eyebrow: "Sector Specialization",
    tagline: "Calm, dignified digital presence for specialty clinics, surgical centers, and healthcare organizations.",
    description: "Healthcare digital experiences are often cold, clinical, and difficult to navigate. We engineer reassuring, high-speed platforms that build patient confidence, clarify clinical credentials, and make appointment booking friction-free.",
    audiences: [
      "Specialty Medical & Surgical Practices",
      "Dental & Orthodontic Studios",
      "Mental Health & Psychiatric Clinics",
      "Diagnostic & Wellness Centers",
    ],
    challenges: [
      {
        title: "Anxiety-Inducing, Cluttered Medical Interfaces",
        description: "Patients seeking care are already stressed; confusing menus, aggressive stock photos, and broken forms heighten anxiety.",
      },
      {
        title: "Opaque Provider Credentials",
        description: "Patients want to trust their doctor, but provider biographies are often buried in unreadable text without clear specialties.",
      },
      {
        title: "Confusing Intake & Appointment Booking",
        description: "Requiring new patients to print and mail paper PDFs leads to high cancellation rates and administrative overhead.",
      },
    ],
    solutions: [
      {
        title: "Calm, Patient-First Color Psychology",
        description: "Warm, grounding palettes and generous spacing that reassure patients and convey clinical excellence without sterile coldness.",
      },
      {
        title: "Dignified Provider Profiles",
        description: "High-resolution portraiture, clear clinical focus areas, educational backgrounds, and verified patient reviews.",
      },
      {
        title: "Frictionless Online Intake Workflows",
        description: "Modern, secure mobile appointment booking and intake forms integrated with practice management systems.",
      },
    ],
    deliverables: [
      "Custom Next.js Patient Flagship Platform",
      "Seamless Mobile Appointment Request Workflows",
      "Physician & Specialist Credential Profiles",
      "Clinical Service & Treatment Guides",
      "HIPAA-Conscious Form Routing Architecture",
      "Local Search & Medical SEO Dominance",
    ],
    faqs: [
      {
        question: "Are your healthcare forms HIPAA-compliant?",
        answer: "Yes. For sensitive clinical intake, we architect integrations that route patient inquiries through encrypted, HIPAA-compliant form gateways or directly into your EHR portal.",
      },
      {
        question: "Can patients book appointments directly on their phones?",
        answer: "Yes. We engineer mobile-first booking funnels that integrate with systems like Zocdoc, NexHealth, or your internal scheduling software.",
      },
    ],
  },
  {
    id: "professional",
    slug: "professional",
    title: "Professional Services",
    eyebrow: "Sector Specialization",
    tagline: "Intellectual prestige and editorial authority for law firms, accounting practices, and executive consultancies.",
    description: "In professional services, your website is your digital handshake with corporate boards and high-net-worth clients. We design dignified presences featuring literary typography, structured thought leadership, and partner portfolios.",
    audiences: [
      "Corporate & Boutique Law Practices",
      "Architectural & Urban Planning Consultancies",
      "Executive Search & Management Advisory Firms",
      "Wealth Management & Private Equity Partnerships",
    ],
    challenges: [
      {
        title: "Generic Corporate Blue Templates",
        description: "Nearly all professional firms look identical: blue headers, generic stock handshakes, and dense blocks of unreadable legalese.",
      },
      {
        title: "Buried Thought Leadership",
        description: "Senior partners author brilliant legal alerts and market commentaries that get lost in poorly organized blog archives.",
      },
      {
        title: "Weak Partner Bio Credibility",
        description: "Prospective corporate clients want to see representative transactions and bar admissions, not a blurry 10-year-old headshot.",
      },
    ],
    solutions: [
      {
        title: "Editorial Publishing Architecture",
        description: "Treating partner perspectives like high-craft legal journals with search tagging, estimated read times, and author cross-linking.",
      },
      {
        title: "Sophisticated Typographic Hierarchy",
        description: "Pairing editorial serifs with crisp neutral sans-serifs that communicate decades of institutional judgment.",
      },
      {
        title: "Structured Practice Area Directories",
        description: "Organizing complex legal and consulting services into clear, searchable matrices that clients can understand in seconds.",
      },
    ],
    deliverables: [
      "Bespoke Professional Firm Web Flagship",
      "Partner & Principal Directory with Transaction History",
      "Journal & Thought Leadership Publishing System",
      "Practice Area & Service Matrices",
      "Executive Presentation & Deck Design Tokens",
      "High-Intent Organic Search Architecture",
    ],
    faqs: [
      {
        question: "How do you help our partners publish articles efficiently?",
        answer: "We build intuitive, structured markdown publishing workflows where your communications team can publish client alerts and cross-link authors in minutes without formatting headaches.",
      },
      {
        question: "Can we showcase representative case results without violating confidentiality?",
        answer: "Yes. We design structured 'Selected Matters' layouts that highlight complex legal or financial accomplishments while respecting client anonymity where required.",
      },
    ],
  },
  {
    id: "retail",
    slug: "retail",
    title: "Retail & E-commerce",
    eyebrow: "Sector Specialization",
    tagline: "Headless commerce engineering and editorial brand storytelling for boutique consumer brands.",
    description: "Modern commerce brands should not have to choose between rich editorial storytelling and instant sub-second checkout speeds. We engineer bespoke headless storefronts that captivate audiences and maximize conversion.",
    audiences: [
      "Boutique Lifestyle & Apparel Brands",
      "Specialty Food, Wine & Culinary Makers",
      "Architectural Furniture & Home Goods Studios",
      "Direct-to-Consumer Beauty & Wellness Brands",
    ],
    challenges: [
      {
        title: "Slow, Bloated Template Themes",
        description: "Standard Shopify and WooCommerce stores laden with 20 conflicting plugins that crawl on mobile and crater checkout conversion.",
      },
      {
        title: "Sacrificing Brand Craft for Commercial Function",
        description: "Brands with exquisite physical packaging that look like commoditized dropshipping sites when forced into generic grid templates.",
      },
    ],
    solutions: [
      {
        title: "Headless Next.js Storefronts",
        description: "Decoupling the frontend interface from the commerce engine (Shopify/Stripe) to deliver instantaneous, app-like browsing.",
      },
      {
        title: "Editorial Lookbooks & Narrative Commerce",
        description: "Blending editorial photography and documentary product stories seamlessly with 'Add to Bag' workflows.",
      },
    ],
    deliverables: [
      "Headless Next.js Storefront Engineering",
      "Interactive Lookbook & Product Dossier Modules",
      "Instant Cart & Frictionless Checkout Funnel",
      "Brand Art Direction & Editorial Campaign Guidelines",
    ],
    faqs: [
      {
        question: "Do we still use our existing Shopify backend for inventory and shipping?",
        answer: "Yes. Your warehouse and fulfillment team continues to manage orders and inventory in Shopify as normal; we simply build a bespoke, ultra-fast frontend that replaces the slow default theme.",
      },
    ],
  },
  {
    id: "startups",
    slug: "startups",
    title: "Startups & Ventures",
    eyebrow: "Sector Specialization",
    tagline: "Rapid-cadence brand identity and investor-grade web platforms for high-growth ventures.",
    description: "Ambitious startups need to establish market authority, communicate technical differentiation, and drive customer acquisition before their next funding round. We ship complete presence systems in 4-week sprints.",
    audiences: [
      "Seed & Series A Venture-Backed Startups",
      "Deep Tech, Developer Tools & AI Companies",
      "Fintech & Specialized B2B Platforms",
      "Studio Incubators & Emerging Ventures",
    ],
    challenges: [
      {
        title: "Looking Too Junior for Enterprise Sales",
        description: "Early-stage companies with world-class technology whose amateur website scares away Fortune 500 procurement teams.",
      },
      {
        title: "Endless Agency Timelines That Miss Launch Windows",
        description: "Traditional agencies spending 4 months on mood boards while startups burn capital and miss critical conference deadlines.",
      },
    ],
    solutions: [
      {
        title: "The 4-Week Launch Sprint",
        description: "Disciplined rapid execution: Week 1 positioning, Week 2 visual identity, Week 3 engineering, Week 4 QA and launch.",
      },
      {
        title: "Enterprise-Ready Technical Polish",
        description: "Code architecture, security headers, and typography that make a 6-person team look like an established market leader.",
      },
    ],
    deliverables: [
      "Launch-Ready Next.js Web Platform",
      "Investor-Grade Brand Identity & Vector Assets",
      "Interactive Product Demo & Architecture Diagrams",
      "High-Converting Waitlist & Lead Intake Funnels",
    ],
    faqs: [
      {
        question: "How fast can you launch our startup presence?",
        answer: "Our dedicated startup sprint runs in 4 calendar weeks from kickoff to production deployment, adhering to tight milestones and senior partner execution.",
      },
    ],
  },
];
