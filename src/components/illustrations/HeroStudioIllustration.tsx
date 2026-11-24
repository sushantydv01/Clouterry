import React from "react";

/**
 * HeroStudioIllustration — Original FIRM Hand-Drawn Vector Artwork
 * Depicts a digital architect & product studio in action:
 * drafting plans, dual screens with brand & code, blueprint rolls, and connected digital blocks.
 * Pop Garden Palette: #171717 (outlines), #F8F6EF (canvas), #ED83A8 (pink), #A6D8A1 (green), #F4CF55 (yellow), #FFFFFF (card).
 */

export default function HeroStudioIllustration({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-full max-w-xl mx-auto ${className}`}>
      <svg
        viewBox="0 0 640 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-[6px_6px_0_#171717]"
        aria-label="FIRM Digital Presence Studio in action"
      >
        {/* Background Decorative Ground Plane / Studio Desk Mat */}
        <rect
          x="30"
          y="310"
          width="580"
          height="145"
          rx="6"
          fill="#FFFFFF"
          stroke="#171717"
          strokeWidth="3"
        />
        {/* Desk mat accent edge */}
        <line x1="30" y1="330" x2="610" y2="330" stroke="#171717" strokeWidth="2" strokeDasharray="6 6" />

        {/* ── Studio Screen 01: Next.js Engineering Monitor (Left) ── */}
        <g id="screen-web">
          {/* Stand */}
          <rect x="135" y="270" width="20" height="50" fill="#F4CF55" stroke="#171717" strokeWidth="2.5" />
          <path d="M105 320 H185" stroke="#171717" strokeWidth="3" strokeLinecap="round" />
          {/* Bezel */}
          <rect x="55" y="110" width="180" height="160" rx="4" fill="#FFFFFF" stroke="#171717" strokeWidth="3" />
          {/* Header bar */}
          <rect x="55" y="110" width="180" height="24" rx="4" fill="#171717" />
          <circle cx="70" cy="122" r="3.5" fill="#ED83A8" />
          <circle cx="82" cy="122" r="3.5" fill="#F4CF55" />
          <circle cx="94" cy="122" r="3.5" fill="#A6D8A1" />
          <text x="120" y="126" fill="#F8F6EF" fontSize="9" fontFamily="monospace" fontWeight="bold">nextjs.firm</text>
          {/* Code Specimen on Screen */}
          <rect x="70" y="148" width="85" height="10" rx="2" fill="#ED83A8" />
          <rect x="70" y="165" width="145" height="6" rx="2" fill="#171717" opacity="0.15" />
          <rect x="70" y="177" width="115" height="6" rx="2" fill="#171717" opacity="0.15" />
          <rect x="70" y="189" width="130" height="6" rx="2" fill="#171717" opacity="0.15" />
          {/* 100/100 Core Web Vital Gauge */}
          <rect x="70" y="210" width="55" height="38" rx="3" fill="#A6D8A1" stroke="#171717" strokeWidth="2" />
          <text x="78" y="233" fill="#171717" fontSize="16" fontFamily="sans-serif" fontWeight="900">100</text>
          <text x="76" y="244" fill="#171717" fontSize="7" fontFamily="monospace" fontWeight="bold">PERF // AA</text>

          <rect x="135" y="210" width="80" height="38" rx="3" fill="#F8F6EF" stroke="#171717" strokeWidth="2" />
          <path d="M145 236 L158 222 L172 230 L195 218" stroke="#ED83A8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="195" cy="218" r="3" fill="#171717" />
        </g>

        {/* ── Studio Screen 02: Brand Architecture Specimen (Center) ── */}
        <g id="screen-brand">
          {/* Stand */}
          <rect x="330" y="240" width="24" height="80" fill="#ED83A8" stroke="#171717" strokeWidth="2.5" />
          <path d="M295 320 H390" stroke="#171717" strokeWidth="3" strokeLinecap="round" />
          {/* Monitor Frame */}
          <rect x="235" y="60" width="220" height="180" rx="6" fill="#F8F6EF" stroke="#171717" strokeWidth="3" />
          {/* Screen Header */}
          <rect x="235" y="60" width="220" height="26" fill="#171717" />
          <circle cx="252" cy="73" r="4" fill="#ED83A8" />
          <circle cx="266" cy="73" r="4" fill="#F4CF55" />
          <circle cx="280" cy="73" r="4" fill="#A6D8A1" />
          <text x="310" y="77" fill="#F8F6EF" fontSize="10" fontFamily="sans-serif" fontWeight="bold">BRAND SPECIMEN</text>
          {/* Architectural Emblem F inside monitor */}
          <rect x="270" y="105" width="80" height="80" rx="4" fill="#ED83A8" stroke="#171717" strokeWidth="2.5" />
          <path d="M292 125 H330 M292 145 H320 M292 125 V168" stroke="#171717" strokeWidth="6" strokeLinecap="square" />
          {/* Swatch chips */}
          <rect x="365" y="105" width="22" height="22" rx="2" fill="#171717" stroke="#171717" strokeWidth="1.5" />
          <rect x="395" y="105" width="22" height="22" rx="2" fill="#F4CF55" stroke="#171717" strokeWidth="1.5" />
          <rect x="365" y="133" width="22" height="22" rx="2" fill="#A6D8A1" stroke="#171717" strokeWidth="1.5" />
          <rect x="395" y="133" width="22" height="22" rx="2" fill="#F8F6EF" stroke="#171717" strokeWidth="1.5" />
          {/* Typographic baseline */}
          <line x1="265" y1="205" x2="425" y2="205" stroke="#171717" strokeWidth="2" strokeDasharray="4 4" />
          <text x="270" y="222" fill="#171717" fontSize="11" fontFamily="sans-serif" fontWeight="800" letterSpacing="0.05em">
            SPACE GROTESK // BOLD
          </text>
        </g>

        {/* ── Mobile Device / Responsive Companion ── */}
        <g id="mobile-device">
          <rect x="475" y="160" width="60" height="110" rx="10" fill="#FFFFFF" stroke="#171717" strokeWidth="2.5" />
          <rect x="495" y="166" width="20" height="4" rx="2" fill="#171717" />
          <rect x="483" y="178" width="44" height="22" rx="2" fill="#ED83A8" />
          <rect x="483" y="206" width="30" height="4" rx="1" fill="#171717" />
          <rect x="483" y="214" width="40" height="3" rx="1" fill="#171717" opacity="0.3" />
          <rect x="483" y="220" width="36" height="3" rx="1" fill="#171717" opacity="0.3" />
          <rect x="483" y="228" width="44" height="18" rx="2" fill="#A6D8A1" />
        </g>

        {/* ── Physical Drafting Tools on Desk ── */}
        {/* Architect Ruler / Scale */}
        <g id="ruler">
          <rect x="65" y="350" width="170" height="18" rx="2" fill="#F4CF55" stroke="#171717" strokeWidth="2" transform="rotate(-3 65 350)" />
          <line x1="75" y1="350" x2="75" y2="358" stroke="#171717" strokeWidth="1.5" />
          <line x1="90" y1="350" x2="90" y2="355" stroke="#171717" strokeWidth="1.5" />
          <line x1="105" y1="350" x2="105" y2="358" stroke="#171717" strokeWidth="1.5" />
          <line x1="120" y1="350" x2="120" y2="355" stroke="#171717" strokeWidth="1.5" />
          <line x1="135" y1="350" x2="135" y2="358" stroke="#171717" strokeWidth="1.5" />
          <line x1="150" y1="350" x2="150" y2="355" stroke="#171717" strokeWidth="1.5" />
          <line x1="165" y1="350" x2="165" y2="358" stroke="#171717" strokeWidth="1.5" />
          <line x1="180" y1="350" x2="180" y2="355" stroke="#171717" strokeWidth="1.5" />
          <line x1="195" y1="350" x2="195" y2="358" stroke="#171717" strokeWidth="1.5" />
          <line x1="210" y1="350" x2="210" y2="358" stroke="#171717" strokeWidth="1.5" />
        </g>

        {/* Rolled Blueprint Tube */}
        <g id="blueprint-roll">
          <rect x="250" y="345" width="130" height="32" rx="6" fill="#A6D8A1" stroke="#171717" strokeWidth="2.5" />
          <ellipse cx="254" cy="361" rx="8" ry="16" fill="#FFFFFF" stroke="#171717" strokeWidth="2" />
          <path d="M254 353 C256 357 256 365 254 369" stroke="#171717" strokeWidth="2" />
          <line x1="285" y1="345" x2="285" y2="377" stroke="#171717" strokeWidth="2" strokeDasharray="3 3" />
          <line x1="335" y1="345" x2="335" y2="377" stroke="#171717" strokeWidth="2" strokeDasharray="3 3" />
        </g>

        {/* Ceramic Studio Coffee Mug */}
        <g id="coffee-mug">
          <rect x="420" y="340" width="34" height="40" rx="5" fill="#ED83A8" stroke="#171717" strokeWidth="2.5" />
          {/* Mug handle */}
          <path d="M454 348 C465 348 465 372 454 372" fill="none" stroke="#171717" strokeWidth="2.5" strokeLinecap="round" />
          {/* Steam Doodle */}
          <path d="M430 332 C428 324 434 320 432 312" fill="none" stroke="#171717" strokeWidth="2" strokeLinecap="round" />
          <path d="M442 330 C440 322 446 318 444 310" fill="none" stroke="#171717" strokeWidth="2" strokeLinecap="round" />
        </g>

        {/* ── Playful Speech Bubble: Creative Manifesto ── */}
        <g id="speech-bubble">
          <path
            d="M455 45 C455 35 465 25 480 25 H575 C590 25 600 35 600 45 V85 C600 95 590 105 575 105 H510 L485 125 L492 105 H480 C465 105 455 95 455 85 Z"
            fill="#F4CF55"
            stroke="#171717"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <text x="472" y="55" fill="#171717" fontSize="11" fontFamily="sans-serif" fontWeight="900">
            ALL 4 DISCIPLINES
          </text>
          <text x="472" y="72" fill="#171717" fontSize="10" fontFamily="monospace" fontWeight="bold">
            UNDER ONE ROOF.
          </text>
          <text x="472" y="90" fill="#171717" fontSize="9" fontFamily="sans-serif" fontWeight="600">
            Zero vendor seams.
          </text>
        </g>

        {/* ── Floating Doodle Stars & Sparkles ── */}
        <g id="doodle-sparkles">
          {/* Star Left */}
          <path
            d="M38 78 L43 92 L57 93 L46 102 L49 116 L38 108 L27 116 L30 102 L19 93 L33 92 Z"
            fill="#F4CF55"
            stroke="#171717"
            strokeWidth="1.75"
            strokeLinejoin="round"
          />
          {/* Sparkle Center Top */}
          <path
            d="M210 20 C210 28 215 33 223 33 C215 33 210 38 210 46 C210 38 205 33 197 33 C205 33 210 28 210 20 Z"
            fill="#ED83A8"
            stroke="#171717"
            strokeWidth="1.75"
            strokeLinejoin="round"
          />
          {/* Tiny Green Sparkle */}
          <circle cx="585" cy="180" r="4" fill="#A6D8A1" stroke="#171717" strokeWidth="1.5" />
          <circle cx="560" cy="220" r="3" fill="#ED83A8" stroke="#171717" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}
