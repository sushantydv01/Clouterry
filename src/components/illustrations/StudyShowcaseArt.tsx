import React from "react";

interface StudyShowcaseArtProps {
  slug: string;
  className?: string;
}

/**
 * Bespoke Midnight Atelier 16:10 architectural study illustrations for Case Studies
 * (saint-jude-academy, aether-health, vance-legal). Zero fake stats or filler copy.
 */
export default function StudyShowcaseArt({ slug, className = "" }: StudyShowcaseArtProps) {
  if (slug === "aether-health") {
    return (
      <svg
        viewBox="0 0 800 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full h-full ${className}`}
        role="img"
        aria-label="Aether Health Clinic calm patient gateway architectural composition"
      >
        <rect width="800" height="500" fill="#1E1E20" />
        {/* Fine architectural drafting hairlines */}
        <path d="M0 120H800M0 380H800M180 0V500M620 0V500" stroke="#F8F6EF" strokeOpacity="0.08" strokeWidth="1" />
        <circle cx="400" cy="250" r="190" stroke="#F8F6EF" strokeOpacity="0.1" strokeWidth="1" strokeDasharray="6 6" />
        {/* Serene Garden Green Sanctuary Arch */}
        <path d="M130 430V215C130 107.304 217.304 20 325 20H475C582.696 20 670 107.304 670 215V430H130Z" fill="#A6D8A1" fillOpacity="0.16" stroke="#A6D8A1" strokeOpacity="0.45" strokeWidth="1.5" />
        {/* Clean Warm Cream Clinical Gateway Plane */}
        <rect x="176" y="88" width="448" height="316" rx="18" fill="#F8F6EF" />
        <rect x="176" y="88" width="448" height="44" rx="18" fill="#EFECE2" />
        <rect x="176" y="114" width="448" height="18" fill="#EFECE2" />
        <circle cx="204" cy="110" r="5" fill="#ED83A8" />
        <circle cx="222" cy="110" r="5" fill="#F4CF55" />
        <circle cx="240" cy="110" r="5" fill="#A6D8A1" />
        {/* Structural Layout Bands (Non-textual Pure Geometry) */}
        <rect x="208" y="156" width="212" height="106" rx="10" fill="#171717" />
        <path d="M236 226C260 186 308 186 332 226" stroke="#A6D8A1" strokeWidth="12" strokeLinecap="round" />
        <circle cx="372" cy="194" r="16" fill="#F4CF55" />
        <rect x="438" y="156" width="154" height="106" rx="10" fill="#A6D8A1" />
        <rect x="458" y="182" width="114" height="14" rx="7" fill="#171717" fillOpacity="0.22" />
        <rect x="458" y="210" width="84" height="14" rx="7" fill="#171717" fillOpacity="0.14" />
        <rect x="208" y="284" width="118" height="88" rx="10" fill="#E6E3D8" />
        <rect x="341" y="284" width="118" height="88" rx="10" fill="#E6E3D8" />
        <rect x="474" y="284" width="118" height="88" rx="10" fill="#F4CF55" fillOpacity="0.45" />
        {/* Unbroken Rose Pink Patient Flow Curve */}
        <path d="M70 340C150 330 190 228 292 226C384 224 416 322 518 320C612 318 660 220 740 200" stroke="#ED83A8" strokeWidth="7" strokeLinecap="round" fill="none" />
        <circle cx="518" cy="320" r="9" fill="#ED83A8" stroke="#171717" strokeWidth="3" />
      </svg>
    );
  }

  if (slug === "vance-legal") {
    return (
      <svg
        viewBox="0 0 800 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full h-full ${className}`}
        role="img"
        aria-label="Vance and Partners Legal editorial monograph and broadsheet publication study"
      >
        <rect width="800" height="500" fill="#1E1E20" />
        <path d="M100 0V500M400 0V500M700 0V500M0 250H800" stroke="#F8F6EF" strokeOpacity="0.08" strokeWidth="1" />
        {/* Butter Yellow Quarter Architectural Accent */}
        <path d="M80 420A160 160 0 0 1 240 260V420H80Z" fill="#F4CF55" fillOpacity="0.22" />
        {/* Twin Editorial Broadsheet Folios */}
        <rect x="164" y="74" width="232" height="352" rx="10" fill="#EFECE2" />
        <rect x="384" y="58" width="256" height="372" rx="12" fill="#F8F6EF" />
        {/* Classical Column Motif on Left Sheet */}
        <rect x="196" y="114" width="154" height="14" rx="2" fill="#171717" />
        <rect x="206" y="140" width="20" height="164" fill="#171717" fillOpacity="0.18" />
        <rect x="242" y="140" width="20" height="164" fill="#171717" fillOpacity="0.18" />
        <rect x="278" y="140" width="20" height="164" fill="#171717" fillOpacity="0.18" />
        <rect x="314" y="140" width="20" height="164" fill="#171717" fillOpacity="0.18" />
        <rect x="196" y="316" width="154" height="16" rx="2" fill="#171717" />
        {/* Structured Publication Grid on Primary Right Folio */}
        <rect x="422" y="96" width="180" height="18" rx="4" fill="#171717" />
        <rect x="422" y="130" width="180" height="6" rx="3" fill="#171717" fillOpacity="0.22" />
        <rect x="422" y="146" width="146" height="6" rx="3" fill="#171717" fillOpacity="0.22" />
        <rect x="422" y="176" width="82" height="118" rx="6" fill="#A6D8A1" fillOpacity="0.45" />
        <rect x="520" y="176" width="82" height="52" rx="6" fill="#171717" />
        <rect x="520" y="242" width="82" height="52" rx="6" fill="#E6E3D8" />
        <rect x="422" y="316" width="180" height="68" rx="8" fill="#EFECE2" stroke="#171717" strokeOpacity="0.14" strokeWidth="1" />
        {/* Butter Yellow Silk Bookmark Ribbon */}
        <path d="M560 58V148L578 134L596 148V58H560Z" fill="#F4CF55" />
        {/* Rose Pink Continuous Thread Line Connecting Folios */}
        <path d="M90 364C185 364 250 384 352 340C445 300 475 372 585 352C645 342 685 280 736 270" stroke="#ED83A8" strokeWidth="7" strokeLinecap="round" fill="none" />
      </svg>
    );
  }

  /* Default: Saint Jude Academy Architectural Study (W01) */
  return (
    <svg
      viewBox="0 0 800 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-full ${className}`}
      role="img"
      aria-label="Saint Jude Preparatory Academy unified admissions and institutional archway study"
    >
      <rect width="800" height="500" fill="#1E1E20" />
      {/* Subtle architectural compass grid */}
      <path d="M120 0V500M680 0V500M0 95H800M0 405H800" stroke="#F8F6EF" strokeOpacity="0.08" strokeWidth="1" />
      <circle cx="400" cy="250" r="210" stroke="#F8F6EF" strokeOpacity="0.09" strokeWidth="1" />
      {/* Main Warm Cream Portal Shell */}
      <rect x="112" y="72" width="576" height="356" rx="20" fill="#F8F6EF" />
      {/* Top Utility Partition Bar (Families vs Prospective Admissions Separation) */}
      <rect x="112" y="72" width="576" height="44" rx="20" fill="#171717" />
      <rect x="112" y="96" width="576" height="20" fill="#171717" />
      <circle cx="144" cy="94" r="5" fill="#ED83A8" />
      <circle cx="162" cy="94" r="5" fill="#F4CF55" />
      <circle cx="180" cy="94" r="5" fill="#A6D8A1" />
      <rect x="556" y="83" width="102" height="22" rx="11" fill="#F4CF55" />
      {/* Left Campus Archway Motif + Right Admissions Steps */}
      <rect x="150" y="148" width="270" height="236" rx="14" fill="#EFECE2" />
      {/* Stepped Cream Pavilion Echoing S01 */}
      <path d="M188 384V250C188 195.876 231.876 152 286 152C340.124 152 384 195.876 384 250V384H188Z" fill="#F4CF55" />
      <path d="M226 384V262C226 228.863 252.863 202 286 202C319.137 202 346 228.863 346 262V384H226Z" fill="#171717" />
      {/* Garden Green Botanical Sprig */}
      <ellipse cx="168" cy="340" rx="22" ry="42" transform="rotate(-18 168 340)" fill="#A6D8A1" />
      <ellipse cx="400" cy="346" rx="18" ry="34" transform="rotate(24 400 346)" fill="#A6D8A1" />
      {/* Right Clean Geometric Admissions Steps */}
      <rect x="444" y="148" width="206" height="86" rx="12" fill="#171717" />
      <rect x="466" y="172" width="120" height="14" rx="7" fill="#F8F6EF" />
      <rect x="466" y="198" width="162" height="10" rx="5" fill="#F8F6EF" fillOpacity="0.35" />
      <rect x="444" y="252" width="96" height="60" rx="10" fill="#A6D8A1" />
      <rect x="554" y="252" width="96" height="60" rx="10" fill="#ED83A8" fillOpacity="0.7" />
      <rect x="444" y="328" width="206" height="56" rx="12" fill="#EFECE2" />
      {/* Continuous Rose Pink Thread Partitioning & Linking Admissions Journey */}
      <path d="M40 310C120 310 154 206 286 206C396 206 410 348 520 354C614 358 682 280 760 272" stroke="#ED83A8" strokeWidth="7" strokeLinecap="round" fill="none" />
      <circle cx="520" cy="354" r="9" fill="#F4CF55" stroke="#171717" strokeWidth="3" />
    </svg>
  );
}
