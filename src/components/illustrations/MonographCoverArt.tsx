import React from "react";

interface MonographCoverArtProps {
  slug: string;
  className?: string;
}

/**
 * Bespoke Midnight Atelier 16:9 geometric paper-cut covers for all 6 Insights monographs.
 * Replaces legacy article-*.png files with crisp vector geometry zeroed of fake metrics or gibberish.
 */
export default function MonographCoverArt({ slug, className = "" }: MonographCoverArtProps) {
  switch (slug) {
    case "architecture-of-a-modern-school-website":
      return (
        <svg viewBox="0 0 800 450" fill="none" xmlns="http://www.w3.org/2000/svg" className={`w-full h-full ${className}`} role="img" aria-label="Modern school website partition diagram">
          <rect width="800" height="450" fill="#171717" />
          <path d="M400 0V450M0 225H800" stroke="#F8F6EF" strokeOpacity="0.08" strokeWidth="1" />
          {/* Left Admissions Archway (Butter Yellow) */}
          <path d="M120 370V200C120 128.203 178.203 70 250 70C321.797 70 380 128.203 380 200V370H120Z" fill="#F4CF55" />
          <path d="M180 370V212C180 173.34 211.34 142 250 142C288.66 142 320 173.34 320 212V370H180Z" fill="#171717" />
          {/* Right Parent Portal Blocks (Garden Green + Cream) */}
          <rect x="440" y="96" width="230" height="122" rx="14" fill="#A6D8A1" />
          <rect x="440" y="242" width="230" height="128" rx="14" fill="#F8F6EF" />
          {/* Continuous Pink Thread */}
          <path d="M60 280C150 280 190 158 290 162C395 166 410 310 555 306C650 304 690 220 750 210" stroke="#ED83A8" strokeWidth="7" strokeLinecap="round" fill="none" />
        </svg>
      );

    case "why-web-performance-and-architecture-matter":
      return (
        <svg viewBox="0 0 800 450" fill="none" xmlns="http://www.w3.org/2000/svg" className={`w-full h-full ${className}`} role="img" aria-label="Stepped geometric web performance architecture planes">
          <rect width="800" height="450" fill="#171717" />
          <path d="M0 150H800M0 300H800" stroke="#F8F6EF" strokeOpacity="0.08" strokeWidth="1" />
          <rect x="100" y="290" width="600" height="58" rx="29" fill="#242426" stroke="#F8F6EF" strokeOpacity="0.14" strokeWidth="1.5" />
          <rect x="140" y="200" width="520" height="58" rx="29" fill="#A6D8A1" />
          <rect x="190" y="110" width="420" height="58" rx="29" fill="#F8F6EF" />
          <circle cx="566" cy="139" r="18" fill="#F4CF55" />
          <path d="M60 360C210 350 280 140 420 139C540 138 610 230 740 228" stroke="#ED83A8" strokeWidth="7" strokeLinecap="round" fill="none" />
        </svg>
      );

    case "brand-identity-beyond-the-logo":
      return (
        <svg viewBox="0 0 800 450" fill="none" xmlns="http://www.w3.org/2000/svg" className={`w-full h-full ${className}`} role="img" aria-label="Layered typographic and color token swatch cards">
          <rect width="800" height="450" fill="#171717" />
          <circle cx="400" cy="225" r="175" stroke="#F8F6EF" strokeOpacity="0.1" strokeWidth="1" />
          <rect x="330" y="88" width="190" height="270" rx="14" transform="rotate(14 330 88)" fill="#A6D8A1" />
          <rect x="280" y="84" width="190" height="270" rx="14" transform="rotate(4 280 84)" fill="#F4CF55" />
          <rect x="220" y="92" width="210" height="266" rx="14" transform="rotate(-6 220 92)" fill="#F8F6EF" />
          <circle cx="322" cy="224" r="46" fill="#171717" />
          <circle cx="322" cy="224" r="18" fill="#ED83A8" />
          <path d="M80 284C190 276 235 160 342 156C470 152 545 316 720 264" stroke="#ED83A8" strokeWidth="7" strokeLinecap="round" fill="none" />
        </svg>
      );

    case "digital-authority-for-professional-firms":
      return (
        <svg viewBox="0 0 800 450" fill="none" xmlns="http://www.w3.org/2000/svg" className={`w-full h-full ${className}`} role="img" aria-label="Classical fluted column and bound publication folios">
          <rect width="800" height="450" fill="#171717" />
          <path d="M220 0V450M580 0V450" stroke="#F8F6EF" strokeOpacity="0.08" strokeWidth="1" />
          {/* Classical Fluted Column Silhouette */}
          <rect x="170" y="84" width="180" height="28" rx="4" fill="#F8F6EF" />
          <rect x="192" y="112" width="136" height="218" fill="#EFECE2" />
          <rect x="210" y="128" width="16" height="186" fill="#171717" fillOpacity="0.16" />
          <rect x="252" y="128" width="16" height="186" fill="#171717" fillOpacity="0.16" />
          <rect x="294" y="128" width="16" height="186" fill="#171717" fillOpacity="0.16" />
          <rect x="164" y="330" width="192" height="32" rx="4" fill="#F8F6EF" />
          {/* Stacked Monograph Volumes */}
          <rect x="410" y="148" width="230" height="58" rx="8" fill="#A6D8A1" />
          <rect x="394" y="222" width="246" height="58" rx="8" fill="#F4CF55" />
          <rect x="424" y="296" width="216" height="66" rx="8" fill="#F8F6EF" />
          <path d="M84 300C186 298 228 190 364 188C490 186 565 256 716 248" stroke="#ED83A8" strokeWidth="7" strokeLinecap="round" fill="none" />
        </svg>
      );

    case "long-term-digital-stewardship":
      return (
        <svg viewBox="0 0 800 450" fill="none" xmlns="http://www.w3.org/2000/svg" className={`w-full h-full ${className}`} role="img" aria-label="Concentric governance rings around a steady keystone center">
          <rect width="800" height="450" fill="#171717" />
          <circle cx="400" cy="225" r="185" stroke="#A6D8A1" strokeWidth="18" strokeOpacity="0.28" />
          <circle cx="400" cy="225" r="134" stroke="#F8F6EF" strokeWidth="16" strokeOpacity="0.88" strokeDasharray="340 110" />
          <circle cx="400" cy="225" r="84" stroke="#A6D8A1" strokeWidth="14" />
          <circle cx="400" cy="225" r="36" fill="#F4CF55" />
          <path d="M80 225H264M536 225H720" stroke="#ED83A8" strokeWidth="7" strokeLinecap="round" />
        </svg>
      );

    /* digital-presence-architectural-problem (E01) */
    default:
      return (
        <svg viewBox="0 0 800 450" fill="none" xmlns="http://www.w3.org/2000/svg" className={`w-full h-full ${className}`} role="img" aria-label="Stepped architectural pavilions linked by a single pink continuous thread">
          <rect width="800" height="450" fill="#171717" />
          <path d="M0 365H800M260 0V450M540 0V450" stroke="#F8F6EF" strokeOpacity="0.08" strokeWidth="1" />
          <rect x="118" y="176" width="150" height="189" rx="10" fill="#F8F6EF" />
          <rect x="325" y="106" width="150" height="259" rx="10" fill="#A6D8A1" />
          <rect x="532" y="152" width="150" height="213" rx="10" fill="#F4CF55" />
          <path d="M62 290C140 290 190 198 286 198C365 198 415 268 492 268C580 268 628 192 738 192" stroke="#ED83A8" strokeWidth="7" strokeLinecap="round" fill="none" />
          <circle cx="268" cy="198" r="8" fill="#171717" />
          <circle cx="475" cy="268" r="8" fill="#171717" />
        </svg>
      );
  }
}
