const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const WIDTH = 1200;
const HEIGHT = 675;

// Color Palette Tokens
const BG_PAGE = '#F7F4EE';
const BG_SURFACE = '#FFFFFF';
const BG_RAISED = '#EFE9DF';
const INK_PRIMARY = '#1F1B16';
const INK_SECONDARY = '#5E554A';
const INK_MUTED = '#7B7266';
const ACCENT = '#B84A29';
const POSITIVE = '#1E6B42';
const BORDER_HAIRLINE = 'rgba(31, 27, 22, 0.12)';
const BORDER_STRONG = 'rgba(31, 27, 22, 0.35)';

const assets = [
  {
    name: 'article-01-architectural-presence',
    dir: 'public/images/editorial',
    title: 'Why Digital Presence Is an Architectural Problem',
    category: 'ESSAY 01 // ARCHITECTURAL PRESENCE',
    subtitle: 'Fragmented Tools vs. Unified Digital Surface Architecture',
    draw() {
      return `
        <!-- Left: Fragmented Disconnected Silos -->
        <g transform="translate(80, 200)">
          <rect x="0" y="0" width="460" height="380" rx="16" fill="${BG_SURFACE}" stroke="${BORDER_HAIRLINE}" stroke-width="1.5" />
          <text x="32" y="48" font-family="monospace" font-size="12" fill="${ACCENT}" font-weight="600">THE FRAGMENTED MODEL (CONVENTIONAL)</text>
          <text x="32" y="76" font-family="serif" font-size="20" fill="${INK_PRIMARY}" font-weight="500">Disconnected Agency Silos</text>
          
          <g transform="translate(32, 110)">
            <rect x="0" y="0" width="180" height="70" rx="8" fill="${BG_PAGE}" stroke="${BORDER_HAIRLINE}" />
            <text x="16" y="28" font-family="sans-serif" font-size="13" fill="${INK_PRIMARY}" font-weight="600">Ad Agency</text>
            <text x="16" y="48" font-family="monospace" font-size="11" fill="${INK_MUTED}">Isolated Ad Spend</text>
            
            <rect x="210" y="0" width="180" height="70" rx="8" fill="${BG_PAGE}" stroke="${BORDER_HAIRLINE}" />
            <text x="16" y="28" font-family="sans-serif" font-size="13" fill="${INK_PRIMARY}" font-weight="600">Freelance Web</text>
            <text x="16" y="48" font-family="monospace" font-size="11" fill="${INK_MUTED}">Template Drift</text>

            <rect x="0" y="90" width="180" height="70" rx="8" fill="${BG_PAGE}" stroke="${BORDER_HAIRLINE}" />
            <text x="16" y="28" font-family="sans-serif" font-size="13" fill="${INK_PRIMARY}" font-weight="600">Social Team</text>
            <text x="16" y="48" font-family="monospace" font-size="11" fill="${INK_MUTED}">Inconsistent Voice</text>

            <rect x="210" y="90" width="180" height="70" rx="8" fill="${BG_PAGE}" stroke="${BORDER_HAIRLINE}" />
            <text x="16" y="28" font-family="sans-serif" font-size="13" fill="${INK_PRIMARY}" font-weight="600">Dev Contractor</text>
            <text x="16" y="48" font-family="monospace" font-size="11" fill="${INK_MUTED}">Technical Debt</text>
          </g>
          
          <path d="M 120 300 L 320 300" stroke="#BA2D2D" stroke-dasharray="4,4" stroke-width="2" />
          <text x="140" y="325" font-family="monospace" font-size="11" fill="#BA2D2D">TRUST AND CONVERSION LEAKAGE</text>
        </g>

        <!-- Right: FIRM Connected Blueprint -->
        <g transform="translate(620, 200)">
          <rect x="0" y="0" width="500" height="380" rx="16" fill="${BG_SURFACE}" stroke="${ACCENT}" stroke-width="2" />
          <text x="36" y="48" font-family="monospace" font-size="12" fill="${POSITIVE}" font-weight="600">THE FIRM BLUEPRINT (COHERENT)</text>
          <text x="36" y="76" font-family="serif" font-size="20" fill="${INK_PRIMARY}" font-weight="500">Unified Presence Architecture</text>

          <circle cx="250" cy="220" r="110" fill="none" stroke="${BORDER_HAIRLINE}" stroke-width="1.5" />
          <circle cx="250" cy="220" r="70" fill="${BG_PAGE}" stroke="${ACCENT}" stroke-width="1.5" />
          <text x="215" y="224" font-family="sans-serif" font-size="14" font-weight="700" fill="${INK_PRIMARY}">FIRM</text>
          <text x="195" y="242" font-family="monospace" font-size="10" fill="${ACCENT}">CORE SYSTEM</text>

          <circle cx="250" cy="90" r="28" fill="${BG_SURFACE}" stroke="${INK_PRIMARY}" stroke-width="1.5" />
          <text x="236" y="94" font-family="monospace" font-size="10" font-weight="600" fill="${INK_PRIMARY}">01</text>

          <circle cx="365" cy="180" r="28" fill="${BG_SURFACE}" stroke="${INK_PRIMARY}" stroke-width="1.5" />
          <text x="351" y="184" font-family="monospace" font-size="10" font-weight="600" fill="${INK_PRIMARY}">02</text>

          <circle cx="330" cy="300" r="28" fill="${BG_SURFACE}" stroke="${INK_PRIMARY}" stroke-width="1.5" />
          <text x="316" y="304" font-family="monospace" font-size="10" font-weight="600" fill="${INK_PRIMARY}">03</text>

          <circle cx="170" cy="300" r="28" fill="${BG_SURFACE}" stroke="${INK_PRIMARY}" stroke-width="1.5" />
          <text x="156" y="304" font-family="monospace" font-size="10" font-weight="600" fill="${INK_PRIMARY}">04</text>

          <circle cx="135" cy="180" r="28" fill="${BG_SURFACE}" stroke="${INK_PRIMARY}" stroke-width="1.5" />
          <text x="121" y="184" font-family="monospace" font-size="10" font-weight="600" fill="${INK_PRIMARY}">05</text>

          <line x1="250" y1="150" x2="250" y2="118" stroke="${ACCENT}" stroke-width="2" />
          <line x1="305" y1="195" x2="340" y2="185" stroke="${ACCENT}" stroke-width="2" />
          <line x1="285" y1="265" x2="310" y2="285" stroke="${ACCENT}" stroke-width="2" />
          <line x1="215" y1="265" x2="190" y2="285" stroke="${ACCENT}" stroke-width="2" />
          <line x1="195" y1="195" x2="160" y2="185" stroke="${ACCENT}" stroke-width="2" />

          <text x="150" y="360" font-family="monospace" font-size="11" fill="${POSITIVE}">COMPOUNDING INSTITUTIONAL VALUE</text>
        </g>
      `;
    }
  },
  {
    name: 'article-02-school-architecture',
    dir: 'public/images/editorial',
    title: 'The Architecture of a Modern School Website',
    category: 'ESSAY 02 // INSTITUTIONAL EDUCATION',
    subtitle: 'Transforming Legacy Bulletin Boards into Admissions Gateways',
    draw() {
      return `
        <g transform="translate(100, 200)">
          <rect x="0" y="0" width="1000" height="85" rx="12" fill="${BG_SURFACE}" stroke="${BORDER_HAIRLINE}" />
          <rect x="24" y="24" width="38" height="38" rx="8" fill="${ACCENT}" />
          <text x="35" y="48" font-family="serif" font-size="18" fill="#FFF" font-weight="700">SJ</text>
          <text x="76" y="38" font-family="serif" font-size="16" fill="${INK_PRIMARY}" font-weight="600">Saint Jude Academy</text>
          <text x="76" y="55" font-family="monospace" font-size="10" fill="${INK_MUTED}">EST. 1884 // ADMISSIONS OPEN COHORT 2027</text>
          
          <rect x="740" y="26" width="130" height="34" rx="6" fill="${BG_PAGE}" stroke="${BORDER_HAIRLINE}" />
          <text x="758" y="48" font-family="sans-serif" font-size="11" fill="${INK_PRIMARY}">Virtual Viewbook</text>

          <rect x="884" y="26" width="92" height="34" rx="6" fill="${ACCENT}" />
          <text x="906" y="48" font-family="sans-serif" font-size="11" fill="#FFF" font-weight="500">Book Tour</text>

          <g transform="translate(0, 105)">
            <rect x="0" y="0" width="485" height="260" rx="12" fill="${BG_SURFACE}" stroke="${BORDER_HAIRLINE}" />
            <text x="28" y="36" font-family="monospace" font-size="11" fill="${ACCENT}" font-weight="600">LAYER 01 // ADMISSIONS PIPELINE</text>
            <text x="28" y="64" font-family="serif" font-size="20" fill="${INK_PRIMARY}">Frictionless Tour &amp; Discovery</text>
            <text x="28" y="90" font-family="sans-serif" font-size="12" fill="${INK_SECONDARY}">92% Mobile Engagement Conversion Standard</text>
            
            <rect x="28" y="115" width="429" height="42" rx="8" fill="${BG_PAGE}" />
            <text x="44" y="141" font-family="monospace" font-size="11" fill="${INK_PRIMARY}">01. Interactive Academic Curriculum Breakdown</text>

            <rect x="28" y="167" width="429" height="42" rx="8" fill="${BG_PAGE}" />
            <text x="44" y="193" font-family="monospace" font-size="11" fill="${INK_PRIMARY}">02. Faculty Credentials &amp; Student-Teacher Ratio</text>
          </g>

          <g transform="translate(515, 105)">
            <rect x="0" y="0" width="485" height="260" rx="12" fill="${BG_SURFACE}" stroke="${BORDER_HAIRLINE}" />
            <text x="28" y="36" font-family="monospace" font-size="11" fill="${POSITIVE}" font-weight="600">LAYER 02 // GOVERNANCE &amp; COMMUNITY</text>
            <text x="28" y="64" font-family="serif" font-size="20" fill="${INK_PRIMARY}">Institutional Reputation &amp; Alumni</text>
            <text x="28" y="90" font-family="sans-serif" font-size="12" fill="${INK_SECONDARY}">Clean Partitioning from Public Admissions Funnel</text>

            <rect x="28" y="115" width="429" height="42" rx="8" fill="${BG_PAGE}" />
            <text x="44" y="141" font-family="monospace" font-size="11" fill="${INK_PRIMARY}">03. Endowment Campaign &amp; Strategic Plan</text>

            <rect x="28" y="167" width="429" height="42" rx="8" fill="${BG_PAGE}" />
            <text x="44" y="193" font-family="monospace" font-size="11" fill="${INK_PRIMARY}">04. WCAG 2.1 AA Compliance &amp; Board Governance</text>
          </g>
        </g>
      `;
    }
  },
  {
    name: 'article-03-web-performance',
    dir: 'public/images/editorial',
    title: 'Why Website Performance Is a Business Requirement',
    category: 'ESSAY 03 // ENGINEERING STANDARDS',
    subtitle: 'Core Web Vitals, App Router Speed, and Conversion Economics',
    draw() {
      return `
        <g transform="translate(80, 200)">
          <rect x="0" y="0" width="235" height="180" rx="12" fill="${BG_SURFACE}" stroke="${BORDER_HAIRLINE}" />
          <text x="24" y="36" font-family="monospace" font-size="11" fill="${INK_MUTED}">LARGEST CONTENTFUL PAINT</text>
          <text x="24" y="90" font-family="serif" font-size="44" fill="${POSITIVE}" font-weight="600">0.78s</text>
          <rect x="24" y="115" width="90" height="22" rx="4" fill="rgba(30,107,66,0.1)" />
          <text x="32" y="130" font-family="monospace" font-size="10" fill="${POSITIVE}">GOOD (&lt; 1.2s)</text>
          <text x="24" y="156" font-family="sans-serif" font-size="11" fill="${INK_MUTED}">Turbopack Static SSG</text>

          <rect x="260" y="0" width="235" height="180" rx="12" fill="${BG_SURFACE}" stroke="${BORDER_HAIRLINE}" />
          <text x="24" y="36" font-family="monospace" font-size="11" fill="${INK_MUTED}">INTERACTION TO NEXT PAINT</text>
          <text x="24" y="90" font-family="serif" font-size="44" fill="${POSITIVE}" font-weight="600">38ms</text>
          <rect x="24" y="115" width="90" height="22" rx="4" fill="rgba(30,107,66,0.1)" />
          <text x="32" y="130" font-family="monospace" font-size="10" fill="${POSITIVE}">GOOD (&lt; 200ms)</text>
          <text x="24" y="156" font-family="sans-serif" font-size="11" fill="${INK_MUTED}">React 19 Zero-Jank</text>

          <rect x="520" y="0" width="235" height="180" rx="12" fill="${BG_SURFACE}" stroke="${BORDER_HAIRLINE}" />
          <text x="24" y="36" font-family="monospace" font-size="11" fill="${INK_MUTED}">CUMULATIVE LAYOUT SHIFT</text>
          <text x="24" y="90" font-family="serif" font-size="44" fill="${POSITIVE}" font-weight="600">0.000</text>
          <rect x="24" y="115" width="70" height="22" rx="4" fill="rgba(30,107,66,0.1)" />
          <text x="32" y="130" font-family="monospace" font-size="10" fill="${POSITIVE}">PERFECT</text>
          <text x="24" y="156" font-family="sans-serif" font-size="11" fill="${INK_MUTED}">Strict Sizing Tokens</text>

          <rect x="780" y="0" width="260" height="180" rx="12" fill="${BG_SURFACE}" stroke="${ACCENT}" stroke-width="2" />
          <text x="24" y="36" font-family="monospace" font-size="11" fill="${ACCENT}">LIGHTHOUSE SCORE</text>
          <text x="24" y="90" font-family="serif" font-size="48" fill="${INK_PRIMARY}" font-weight="600">100/100</text>
          <text x="24" y="125" font-family="sans-serif" font-size="12" fill="${INK_SECONDARY}">Perf: 100 • A11y: 100 • SEO: 100</text>
          <text x="24" y="154" font-family="monospace" font-size="10" fill="${POSITIVE}">● ZERO RUNTIME PENALTY</text>

          <g transform="translate(0, 205)">
            <rect x="0" y="0" width="1040" height="160" rx="12" fill="${BG_SURFACE}" stroke="${BORDER_HAIRLINE}" />
            <text x="28" y="36" font-family="monospace" font-size="11" fill="${INK_SECONDARY}">SERVER RESPONSE TIME (TTFB) UNDER CONCURRENT CONVERSION PEAK</text>
            <line x1="28" y1="120" x2="1012" y2="120" stroke="${BORDER_HAIRLINE}" />
            <line x1="28" y1="70" x2="1012" y2="70" stroke="${BORDER_HAIRLINE}" stroke-dasharray="3,3" />
            
            <polyline fill="none" stroke="${ACCENT}" stroke-width="2.5" points="
              28,110 150,105 280,108 410,75 540,78 670,72 800,74 930,71 1012,70
            " />
            <text x="920" y="60" font-family="monospace" font-size="11" fill="${ACCENT}" font-weight="600">32ms Global Edge</text>
          </g>
        </g>
      `;
    }
  },
  {
    name: 'article-04-brand-identity',
    dir: 'public/images/editorial',
    title: 'Brand Identity Beyond the Logo',
    category: 'ESSAY 04 // BRAND ARCHITECTURE',
    subtitle: 'Typographic Design Systems, Editorial Voice, and Digital Coherence',
    draw() {
      return `
        <g transform="translate(80, 200)">
          <rect x="0" y="0" width="600" height="380" rx="16" fill="${BG_SURFACE}" stroke="${BORDER_HAIRLINE}" />
          <text x="36" y="44" font-family="monospace" font-size="11" fill="${ACCENT}" font-weight="600">TYPOGRAPHY SPECIMEN // NEWSREADER DISPLAY</text>
          <text x="36" y="110" font-family="serif" font-size="52" fill="${INK_PRIMARY}" font-weight="400">Aa Bb Gg Rr 0123</text>
          
          <line x1="36" y1="140" x2="564" y2="140" stroke="${BORDER_HAIRLINE}" />
          <text x="36" y="175" font-family="monospace" font-size="11" fill="${INK_MUTED}">INTERFACE COMPANION // INTER + JETBRAINS MONO</text>
          <text x="36" y="210" font-family="sans-serif" font-size="18" fill="${INK_SECONDARY}">Quiet chrome, crystal legibility, and tabular figures.</text>

          <g transform="translate(36, 250)">
            <rect x="0" y="0" width="160" height="90" rx="8" fill="${BG_PAGE}" stroke="${BORDER_HAIRLINE}" />
            <text x="16" y="32" font-family="monospace" font-size="10" fill="${INK_MUTED}">TOKEN: BG-PAGE</text>
            <text x="16" y="58" font-family="sans-serif" font-size="14" font-weight="600" fill="${INK_PRIMARY}">#F7F4EE</text>
            <text x="16" y="76" font-family="sans-serif" font-size="10" fill="${INK_SECONDARY}">Warm Parchment</text>

            <rect x="180" y="0" width="160" height="90" rx="8" fill="${INK_PRIMARY}" />
            <text x="196" y="32" font-family="monospace" font-size="10" fill="${BG_PAGE}">TOKEN: TEXT-INK</text>
            <text x="196" y="58" font-family="sans-serif" font-size="14" font-weight="600" fill="#FFF">#1F1B16</text>
            <text x="196" y="76" font-family="sans-serif" font-size="10" fill="#AAA">Dense Drafting Ink</text>

            <rect x="360" y="0" width="160" height="90" rx="8" fill="${ACCENT}" />
            <text x="376" y="32" font-family="monospace" font-size="10" fill="#FFF">TOKEN: ACCENT</text>
            <text x="376" y="58" font-family="sans-serif" font-size="14" font-weight="600" fill="#FFF">#B84A29</text>
            <text x="376" y="76" font-family="sans-serif" font-size="10" fill="rgba(255,255,255,0.8)">Terracotta</text>
          </g>
        </g>

        <g transform="translate(710, 200)">
          <rect x="0" y="0" width="410" height="380" rx="16" fill="${BG_SURFACE}" stroke="${BORDER_HAIRLINE}" />
          <rect x="28" y="28" width="354" height="220" rx="8" fill="${BG_PAGE}" stroke="${BORDER_HAIRLINE}" />
          <text x="48" y="60" font-family="monospace" font-size="10" fill="${ACCENT}">BRAND SYSTEM MANUAL // v1.0</text>
          <text x="48" y="95" font-family="serif" font-size="24" fill="${INK_PRIMARY}">The Architecture</text>
          <text x="48" y="125" font-family="serif" font-size="24" fill="${INK_PRIMARY}">of Consistency</text>
          <circle cx="320" cy="85" r="24" fill="${ACCENT}" />
          <text x="312" y="92" font-family="sans-serif" font-size="18" font-weight="700" fill="#FFF">F</text>

          <text x="28" y="280" font-family="sans-serif" font-size="14" font-weight="600" fill="${INK_PRIMARY}">Beyond the Logo Mark</text>
          <text x="28" y="305" font-family="sans-serif" font-size="12" fill="${INK_SECONDARY}">A logo is merely an identifier. An identity system is how an organization speaks, structures, and presents across all touchpoints.</text>
          <text x="28" y="345" font-family="monospace" font-size="11" fill="${POSITIVE}">● ZERO VISUAL FRAGMENTATION</text>
        </g>
      `;
    }
  },
  {
    name: 'article-05-professional-firms',
    dir: 'public/images/editorial',
    title: 'Building a Sustainable Digital Presence for Professional Firms',
    category: 'ESSAY 05 // PROFESSIONAL PRACTICE',
    subtitle: 'Authority, Partner Credibility, and High-Stakes Inbound Inquiries',
    draw() {
      return `
        <g transform="translate(100, 200)">
          <rect x="0" y="0" width="1000" height="380" rx="16" fill="${BG_SURFACE}" stroke="${BORDER_HAIRLINE}" />
          <rect x="0" y="0" width="1000" height="60" rx="16" fill="${BG_PAGE}" />
          <text x="36" y="36" font-family="serif" font-size="18" fill="${INK_PRIMARY}" font-weight="600">VANCE &amp; ASSOCIATES // CORPORATE DISPUTES</text>
          <text x="820" y="36" font-family="monospace" font-size="11" fill="${INK_MUTED}">PRECEDENT ARCHIVE</text>

          <g transform="translate(36, 90)">
            <rect x="0" y="0" width="928" height="36" rx="4" fill="${BG_PAGE}" />
            <text x="20" y="23" font-family="monospace" font-size="11" fill="${INK_SECONDARY}">MATTER CLASSIFICATION</text>
            <text x="320" y="23" font-family="monospace" font-size="11" fill="${INK_SECONDARY}">JURISDICTION</text>
            <text x="560" y="23" font-family="monospace" font-size="11" fill="${INK_SECONDARY}">LEAD PARTNER</text>
            <text x="780" y="23" font-family="monospace" font-size="11" fill="${INK_SECONDARY}">DISPOSITION</text>

            <line x1="0" y1="80" x2="928" y2="80" stroke="${BORDER_HAIRLINE}" />
            <text x="20" y="66" font-family="sans-serif" font-size="13" font-weight="600" fill="${INK_PRIMARY}">Cross-Border Intellectual Property Dispute</text>
            <text x="320" y="66" font-family="monospace" font-size="12" fill="${INK_SECONDARY}">Delaware Chancery</text>
            <text x="560" y="66" font-family="sans-serif" font-size="12" fill="${INK_PRIMARY}">M. Vance, P.C.</text>
            <text x="780" y="66" font-family="monospace" font-size="11" fill="${POSITIVE}">RESOLVED // CONFIDENTIAL</text>

            <line x1="0" y1="126" x2="928" y2="126" stroke="${BORDER_HAIRLINE}" />
            <text x="20" y="112" font-family="sans-serif" font-size="13" font-weight="600" fill="${INK_PRIMARY}">Antitrust Defense in Healthcare Acquisition</text>
            <text x="320" y="112" font-family="monospace" font-size="12" fill="${INK_SECONDARY}">S.D.N.Y.</text>
            <text x="560" y="112" font-family="sans-serif" font-size="12" fill="${INK_PRIMARY}">E. Hawthorne, Partner</text>
            <text x="780" y="112" font-family="monospace" font-size="11" fill="${POSITIVE}">SUMMARY JUDGMENT</text>

            <line x1="0" y1="172" x2="928" y2="172" stroke="${BORDER_HAIRLINE}" />
            <text x="20" y="158" font-family="sans-serif" font-size="13" font-weight="600" fill="${INK_PRIMARY}">Securities Class Action Mitigation ($180M)</text>
            <text x="320" y="158" font-family="monospace" font-size="12" fill="${INK_SECONDARY}">2nd Circuit Appeals</text>
            <text x="560" y="158" font-family="sans-serif" font-size="12" fill="${INK_PRIMARY}">C. Sterling, Partner</text>
            <text x="780" y="158" font-family="monospace" font-size="11" fill="${POSITIVE}">SETTLEMENT AFFIRMED</text>

            <rect x="0" y="200" width="928" height="60" rx="8" fill="${BG_PAGE}" />
            <text x="24" y="235" font-family="sans-serif" font-size="13" fill="${INK_PRIMARY}">
              High-ticket corporate clients evaluate partner depth, case clarity, and institutional poise.
            </text>
          </g>
        </g>
      `;
    }
  },
  {
    name: 'article-06-digital-stewardship',
    dir: 'public/images/editorial',
    title: 'Digital Stewardship: What Happens After a Website Launch?',
    category: 'ESSAY 06 // LONG-TERM STEWARDSHIP',
    subtitle: 'Preventing Technical Debt, Security Degradation, and Performance Decay',
    draw() {
      return `
        <g transform="translate(100, 200)">
          <rect x="0" y="0" width="1000" height="380" rx="16" fill="${BG_SURFACE}" stroke="${BORDER_HAIRLINE}" />

          <g transform="translate(36, 36)">
            <text x="0" y="16" font-family="monospace" font-size="11" fill="${ACCENT}" font-weight="600">STEWARDSHIP TELEMETRY // 24/7 INFRASTRUCTURE LOG</text>
            <text x="0" y="44" font-family="serif" font-size="24" fill="${INK_PRIMARY}">Operational Runbook &amp; Continuous Health</text>
          </g>

          <g transform="translate(36, 110)">
            <rect x="0" y="0" width="280" height="220" rx="12" fill="${BG_PAGE}" stroke="${BORDER_HAIRLINE}" />
            <text x="24" y="32" font-family="monospace" font-size="11" fill="${INK_MUTED}">ANNUAL PLATFORM AVAILABILITY</text>
            <text x="24" y="80" font-family="serif" font-size="44" fill="${POSITIVE}" font-weight="600">99.98%</text>
            <text x="24" y="115" font-family="sans-serif" font-size="12" fill="${INK_SECONDARY}">Edge CDN, Multi-Region Failover, Zero Downtime SSG Deploys</text>
            <rect x="24" y="150" width="232" height="6" rx="3" fill="#E2DDD5" />
            <rect x="24" y="150" width="228" height="6" rx="3" fill="${POSITIVE}" />
            <text x="24" y="180" font-family="monospace" font-size="10" fill="${POSITIVE}">● HEALTHY // 0 INCIDENTS Q4</text>

            <rect x="310" y="0" width="280" height="220" rx="12" fill="${BG_PAGE}" stroke="${BORDER_HAIRLINE}" />
            <text x="24" y="32" font-family="monospace" font-size="11" fill="${INK_MUTED}">VULNERABILITY AUDITING</text>
            <text x="24" y="80" font-family="serif" font-size="44" fill="${INK_PRIMARY}" font-weight="600">0 Alerts</text>
            <text x="24" y="115" font-family="sans-serif" font-size="12" fill="${INK_SECONDARY}">Weekly automated npm audit, Next.js security patch cycle</text>
            <rect x="24" y="150" width="232" height="6" rx="3" fill="#E2DDD5" />
            <rect x="24" y="150" width="232" height="6" rx="3" fill="${ACCENT}" />
            <text x="24" y="180" font-family="monospace" font-size="10" fill="${ACCENT}">● CONTINUOUS SECURITY CADENCE</text>

            <rect x="620" y="0" width="280" height="220" rx="12" fill="${BG_PAGE}" stroke="${BORDER_HAIRLINE}" />
            <text x="24" y="32" font-family="monospace" font-size="11" fill="${INK_MUTED}">PERFORMANCE DECAY PREVENTION</text>
            <text x="24" y="80" font-family="serif" font-size="44" fill="${INK_PRIMARY}" font-weight="600">&lt; 0.05%</text>
            <text x="24" y="115" font-family="sans-serif" font-size="12" fill="${INK_SECONDARY}">Automated Lighthouse CI regression gates on every git merge</text>
            <rect x="24" y="150" width="232" height="6" rx="3" fill="#E2DDD5" />
            <rect x="24" y="150" width="220" height="6" rx="3" fill="${POSITIVE}" />
            <text x="24" y="180" font-family="monospace" font-size="10" fill="${POSITIVE}">● BUDGET LOCK: &lt; 100KB FIRST LOAD</text>
          </g>
        </g>
      `;
    }
  },
  {
    name: 'saint-jude-preview',
    dir: 'public/images/work',
    title: 'Saint Jude Academy Institutional Case Study',
    category: 'CASE STUDY // EDUCATION // PREP SCHOOL',
    subtitle: '140-Year Heritage Reimagined for Next-Generation Admissions',
    draw() {
      return `
        <g transform="translate(100, 180)">
          <rect x="0" y="0" width="1000" height="420" rx="16" fill="${BG_SURFACE}" stroke="${BORDER_STRONG}" stroke-width="1.5" />
          <rect x="0" y="0" width="1000" height="46" rx="16" fill="${BG_PAGE}" />
          <circle cx="28" cy="23" r="5" fill="#FF5F56" />
          <circle cx="44" cy="23" r="5" fill="#FFBD2E" />
          <circle cx="60" cy="23" r="5" fill="#27C93F" />
          <rect x="180" y="12" width="640" height="22" rx="4" fill="${BG_SURFACE}" stroke="${BORDER_HAIRLINE}" />
          <text x="380" y="27" font-family="monospace" font-size="11" fill="${INK_MUTED}">https://saintjude.academy/admissions</text>

          <g transform="translate(40, 70)">
            <rect x="0" y="0" width="920" height="320" rx="8" fill="${BG_PAGE}" />
            <text x="40" y="50" font-family="monospace" font-size="11" fill="${ACCENT}" font-weight="600">INDEPENDENT PREPARATORY ACADEMY // EST. 1884</text>
            <text x="40" y="100" font-family="serif" font-size="36" fill="${INK_PRIMARY}" font-weight="500">Character, Intellect, &amp; Purpose.</text>
            <text x="40" y="135" font-family="sans-serif" font-size="14" fill="${INK_SECONDARY}">Now welcoming applications for Grades 6 through 12. Tour our historic 42-acre Hudson Valley campus.</text>

            <rect x="40" y="165" width="140" height="40" rx="6" fill="${ACCENT}" />
            <text x="64" y="190" font-family="sans-serif" font-size="12" fill="#FFF" font-weight="600">Book Campus Tour</text>

            <rect x="195" y="165" width="160" height="40" rx="6" fill="${BG_SURFACE}" stroke="${BORDER_HAIRLINE}" />
            <text x="215" y="190" font-family="sans-serif" font-size="12" fill="${INK_PRIMARY}">Explore Curriculum</text>

            <g transform="translate(40, 230)">
              <rect x="0" y="0" width="840" height="60" rx="8" fill="${BG_SURFACE}" stroke="${BORDER_HAIRLINE}" />
              <text x="30" y="35" font-family="serif" font-size="20" font-weight="600" fill="${INK_PRIMARY}">8:1</text>
              <text x="80" y="35" font-family="monospace" font-size="10" fill="${INK_MUTED}">STUDENT-FACULTY RATIO</text>

              <text x="280" y="35" font-family="serif" font-size="20" font-weight="600" fill="${INK_PRIMARY}">100%</text>
              <text x="345" y="35" font-family="monospace" font-size="10" fill="${INK_MUTED}">COLLEGE MATRICULATION</text>

              <text x="540" y="35" font-family="serif" font-size="20" font-weight="600" fill="${POSITIVE}">+64%</text>
              <text x="605" y="35" font-family="monospace" font-size="10" fill="${POSITIVE}">INQUIRY CONVERSION VELOCITY</text>
            </g>
          </g>
        </g>
      `;
    }
  },
  {
    name: 'aether-health-preview',
    dir: 'public/images/work',
    title: 'Aether Health Telehealth Interface Study',
    category: 'CASE STUDY // HEALTHCARE &amp; CLINICAL',
    subtitle: 'Calm Clinical Telehealth Interface &amp; Intake Onboarding Flow',
    draw() {
      return `
        <g transform="translate(100, 180)">
          <rect x="0" y="0" width="1000" height="420" rx="16" fill="${BG_SURFACE}" stroke="${BORDER_STRONG}" stroke-width="1.5" />
          <rect x="0" y="0" width="1000" height="46" rx="16" fill="${BG_PAGE}" />
          <circle cx="28" cy="23" r="5" fill="#FF5F56" />
          <circle cx="44" cy="23" r="5" fill="#FFBD2E" />
          <circle cx="60" cy="23" r="5" fill="#27C93F" />
          <rect x="180" y="12" width="640" height="22" rx="4" fill="${BG_SURFACE}" stroke="${BORDER_HAIRLINE}" />
          <text x="370" y="27" font-family="monospace" font-size="11" fill="${INK_MUTED}">https://aether.health/clinical/intake</text>

          <g transform="translate(40, 70)">
            <rect x="0" y="0" width="920" height="320" rx="8" fill="#F8FAFC" />
            <text x="40" y="50" font-family="monospace" font-size="11" fill="#0284C7" font-weight="600">HIPAA COMPLIANT TELEHEALTH // SPECIALTY CLINICAL CARE</text>
            <text x="40" y="95" font-family="serif" font-size="32" fill="${INK_PRIMARY}">Specialized Care Without Waiting Rooms</text>
            <text x="40" y="125" font-family="sans-serif" font-size="13" fill="${INK_SECONDARY}">Consult board-certified physicians from home with secure encrypted records.</text>

            <g transform="translate(40, 155)">
              <rect x="0" y="0" width="260" height="130" rx="8" fill="#FFF" stroke="${BORDER_HAIRLINE}" />
              <text x="20" y="30" font-family="sans-serif" font-size="14" font-weight="600" fill="${INK_PRIMARY}">Cardiometabolic</text>
              <text x="20" y="55" font-family="sans-serif" font-size="11" fill="${INK_SECONDARY}">Continuous biomarker monitoring and tailored therapeutics.</text>
              <text x="20" y="105" font-family="monospace" font-size="10" fill="${POSITIVE}">● NEXT AVAIL: TODAY 3:15 PM</text>

              <rect x="280" y="0" width="260" height="130" rx="8" fill="#FFF" stroke="${BORDER_HAIRLINE}" />
              <text x="20" y="30" font-family="sans-serif" font-size="14" font-weight="600" fill="${INK_PRIMARY}">Endocrine Health</text>
              <text x="20" y="55" font-family="sans-serif" font-size="11" fill="${INK_SECONDARY}">Metabolic panels, thyroid optimization, and physician consults.</text>
              <text x="20" y="105" font-family="monospace" font-size="10" fill="${POSITIVE}">● NEXT AVAIL: TOMORROW</text>

              <rect x="560" y="0" width="280" height="130" rx="8" fill="#FFF" stroke="${BORDER_HAIRLINE}" />
              <text x="20" y="30" font-family="sans-serif" font-size="14" font-weight="600" fill="${INK_PRIMARY}">Physician Verification</text>
              <text x="20" y="55" font-family="sans-serif" font-size="11" fill="${INK_SECONDARY}">100% Licensed Medical Doctors with Ivy League clinical credentials.</text>
              <text x="20" y="105" font-family="monospace" font-size="10" fill="${ACCENT}">● VERIFIED CREDENTIALS</text>
            </g>
          </g>
        </g>
      `;
    }
  },
  {
    name: 'vance-legal-preview',
    dir: 'public/images/work',
    title: 'Vance &amp; Associates Corporate Litigation Portal Study',
    category: 'CASE STUDY // PROFESSIONAL SERVICES // LEGAL',
    subtitle: 'High-Stakes Corporate Dispute Resolution &amp; Precedent Repository',
    draw() {
      return `
        <g transform="translate(100, 180)">
          <rect x="0" y="0" width="1000" height="420" rx="16" fill="${BG_SURFACE}" stroke="${BORDER_STRONG}" stroke-width="1.5" />
          <rect x="0" y="0" width="1000" height="46" rx="16" fill="${BG_PAGE}" />
          <circle cx="28" cy="23" r="5" fill="#FF5F56" />
          <circle cx="44" cy="23" r="5" fill="#FFBD2E" />
          <circle cx="60" cy="23" r="5" fill="#27C93F" />
          <rect x="180" y="12" width="640" height="22" rx="4" fill="${BG_SURFACE}" stroke="${BORDER_HAIRLINE}" />
          <text x="360" y="27" font-family="monospace" font-size="11" fill="${INK_MUTED}">https://vanceassociates.law/precedents</text>

          <g transform="translate(40, 70)">
            <rect x="0" y="0" width="920" height="320" rx="8" fill="${BG_SURFACE}" />
            <text x="36" y="44" font-family="monospace" font-size="11" fill="${ACCENT}" font-weight="600">BOUTIQUE LITIGATION COUNSEL // NEW YORK &amp; LONDON</text>
            <text x="36" y="90" font-family="serif" font-size="34" fill="${INK_PRIMARY}">Strategic Advocacy in High-Stakes Disputes.</text>
            
            <g transform="translate(36, 120)">
              <rect x="0" y="0" width="410" height="160" rx="8" fill="${BG_PAGE}" stroke="${BORDER_HAIRLINE}" />
              <text x="24" y="32" font-family="monospace" font-size="10" fill="${INK_MUTED}">PRACTICE 01</text>
              <text x="24" y="60" font-family="serif" font-size="20" fill="${INK_PRIMARY}">Corporate Governance &amp; M&amp;A Defense</text>
              <text x="24" y="90" font-family="sans-serif" font-size="12" fill="${INK_SECONDARY}">Representing special committees, boards of directors, and enterprise founders in contested takeovers.</text>
              <text x="24" y="135" font-family="monospace" font-size="11" fill="${ACCENT}">VIEW 42 MATTERS →</text>

              <rect x="435" y="0" width="410" height="160" rx="8" fill="${BG_PAGE}" stroke="${BORDER_HAIRLINE}" />
              <text x="24" y="32" font-family="monospace" font-size="10" fill="${INK_MUTED}">PRACTICE 02</text>
              <text x="24" y="60" font-family="serif" font-size="20" fill="${INK_PRIMARY}">Complex Commercial Arbitration</text>
              <text x="24" y="90" font-family="sans-serif" font-size="12" fill="${INK_SECONDARY}">Multi-jurisdictional enforcement under ICC, LCIA, and AAA international tribunal rules.</text>
              <text x="24" y="135" font-family="monospace" font-size="11" fill="${ACCENT}">VIEW 28 MATTERS →</text>
            </g>
          </g>
        </g>
      `;
    }
  }
];

async function generateAll() {
  console.log('Generating architectural SVG + WebP visual assets...');
  
  for (const asset of assets) {
    const targetDir = path.resolve(__dirname, '..', asset.dir);
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    const svgContent = `
      <svg width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="${BORDER_HAIRLINE}" stroke-width="0.75"/>
          </pattern>
        </defs>

        <rect width="${WIDTH}" height="${HEIGHT}" fill="${BG_PAGE}" />
        <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#grid)" />

        <g transform="translate(80, 60)">
          <text x="0" y="16" font-family="monospace" font-size="12" fill="${ACCENT}" font-weight="600" letter-spacing="1.5">${asset.category}</text>
          <text x="0" y="58" font-family="serif" font-size="34" fill="${INK_PRIMARY}" font-weight="500">${asset.title}</text>
          <text x="0" y="90" font-family="sans-serif" font-size="14" fill="${INK_SECONDARY}">${asset.subtitle}</text>
          <line x1="0" y1="110" x2="1040" y2="110" stroke="${BORDER_HAIRLINE}" stroke-width="1.5" />
        </g>

        ${asset.draw()}

        <g transform="translate(80, 630)">
          <text x="0" y="0" font-family="monospace" font-size="10" fill="${INK_MUTED}">FIRM ATELIER ARCHIVE // SPECIFICATION REF: 40.7128° N, 74.0060° W</text>
          <text x="920" y="0" font-family="monospace" font-size="10" fill="${INK_MUTED}">APPROVED // PRODUCTION</text>
        </g>
      </svg>
    `;

    const svgPath = path.join(targetDir, `${asset.name}.svg`);
    const webpPath = path.join(targetDir, `${asset.name}.webp`);
    const pngPath = path.join(targetDir, `${asset.name}.png`);

    fs.writeFileSync(svgPath, svgContent);

    await sharp(Buffer.from(svgContent))
      .webp({ quality: 90 })
      .toFile(webpPath);

    await sharp(Buffer.from(svgContent))
      .png({ quality: 90 })
      .toFile(pngPath);

    console.log(`Generated: ${asset.name}.webp & .png in ${asset.dir}`);
  }
}

generateAll().catch(err => {
  console.error('Error generating assets:', err);
  process.exit(1);
});
