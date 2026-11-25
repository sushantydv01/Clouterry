import React from "react";

/**
 * HeroStudioIllustration — Original FIRM Hand-Drawn Vector Artwork
 * Depicts the complete 5-discipline digital presence studio in action:
 * Brand Architecture, Bespoke Web Engineering, Documentary Media, Organic Growth, and Stewardship.
 * Connected by "The Seam" visual motif.
 *
 * Pop Garden Palette: #171717 (outlines), #F8F6EF (cream), #ED83A8 (pink), #A6D8A1 (green), #F4CF55 (yellow), #FFFFFF (card).
 */

export default function HeroStudioIllustration({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-full max-w-2xl mx-auto ${className}`}>
      <svg
        viewBox="0 0 640 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-[8px_8px_0_#171717]"
        aria-label="FIRM Digital Presence Studio: 5 connected disciplines under one senior standard"
      >
        {/* Background Studio Desk Ground Surface */}
        <rect
          x="20"
          y="310"
          width="600"
          height="145"
          rx="6"
          fill="#FFFFFF"
          stroke="#171717"
          strokeWidth="3"
        />
        <line x1="20" y1="330" x2="620" y2="330" stroke="#171717" strokeWidth="2" strokeDasharray="6 6" />

        {/* ── "The Seam" — A bold continuous ribbon weaving through all 5 disciplines ── */}
        <path
          d="M35 240 C110 200 150 280 230 220 C310 160 380 260 480 200 C530 170 570 190 605 180"
          stroke="#171717"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M35 240 C110 200 150 280 230 220 C310 160 380 260 480 200 C530 170 570 190 605 180"
          stroke="#ED83A8"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />

        {/* ── Discipline 01: Brand Identity & Typography (Center-Left Monitor) ── */}
        <g id="screen-brand">
          <rect x="235" y="240" width="24" height="80" fill="#ED83A8" stroke="#171717" strokeWidth="2.5" />
          <path d="M200 320 H295" stroke="#171717" strokeWidth="3" strokeLinecap="round" />
          {/* Monitor Frame */}
          <rect x="145" y="55" width="210" height="185" rx="6" fill="#F8F6EF" stroke="#171717" strokeWidth="3" />
          <rect x="145" y="55" width="210" height="26" fill="#171717" />
          <circle cx="162" cy="68" r="4" fill="#ED83A8" />
          <circle cx="176" cy="68" r="4" fill="#F4CF55" />
          <circle cx="190" cy="68" r="4" fill="#A6D8A1" />
          <text x="215" y="72" fill="#F8F6EF" fontSize="10" fontFamily="Space Grotesk, sans-serif" fontWeight="bold">01 • BRAND IDENTITY</text>
          
          {/* Emblem Stamp */}
          <rect x="175" y="98" width="65" height="65" rx="4" fill="#ED83A8" stroke="#171717" strokeWidth="2" />
          <path d="M192 114 H224 M192 130 H216 M192 114 V148" stroke="#171717" strokeWidth="5" strokeLinecap="square" />
          
          {/* Palette Swatches */}
          <rect x="255" y="98" width="18" height="18" rx="2" fill="#171717" stroke="#171717" strokeWidth="1" />
          <rect x="280" y="98" width="18" height="18" rx="2" fill="#F4CF55" stroke="#171717" strokeWidth="1" />
          <rect x="255" y="122" width="18" height="18" rx="2" fill="#A6D8A1" stroke="#171717" strokeWidth="1" />
          <rect x="280" y="122" width="18" height="18" rx="2" fill="#ED83A8" stroke="#171717" strokeWidth="1" />
          
          {/* Brand Tagline */}
          <text x="175" y="188" fill="#171717" fontSize="10" fontFamily="Space Grotesk, sans-serif" fontWeight="bold">
            Visual Authority &amp; System
          </text>
          <text x="175" y="202" fill="#525252" fontSize="9" fontFamily="monospace">
            Living typography tokens
          </text>
        </g>

        {/* ── Discipline 02: Bespoke Web Engineering (Left Monitor) ── */}
        <g id="screen-web">
          <rect x="85" y="260" width="18" height="55" fill="#F4CF55" stroke="#171717" strokeWidth="2.5" />
          <path d="M60 315 H130" stroke="#171717" strokeWidth="3" strokeLinecap="round" />
          <rect x="25" y="115" width="165" height="150" rx="4" fill="#FFFFFF" stroke="#171717" strokeWidth="3" />
          <rect x="25" y="115" width="165" height="24" rx="4" fill="#171717" />
          <text x="40" y="131" fill="#A6D8A1" fontSize="9" fontFamily="monospace" fontWeight="bold">02 • WEB PLATFORM</text>
          
          {/* Sub-Second Fast Badge */}
          <rect x="40" y="150" width="135" height="32" rx="3" fill="#A6D8A1" stroke="#171717" strokeWidth="2" />
          <text x="50" y="171" fill="#171717" fontSize="13" fontFamily="Space Grotesk, sans-serif" fontWeight="800">Fast &amp; Bespoke</text>
          
          {/* Clean wireframe bars */}
          <rect x="40" y="194" width="90" height="7" rx="2" fill="#171717" opacity="0.2" />
          <rect x="40" y="206" width="125" height="7" rx="2" fill="#171717" opacity="0.2" />
          <rect x="40" y="218" width="75" height="7" rx="2" fill="#171717" opacity="0.2" />
          <text x="40" y="244" fill="#171717" fontSize="8" fontFamily="monospace" fontWeight="bold">WCAG AA COMPLIANT</text>
        </g>

        {/* ── Discipline 03: Editorial Media & Content (Right Tablet) ── */}
        <g id="tablet-content">
          <rect x="375" y="125" width="105" height="145" rx="8" fill="#FFFFFF" stroke="#171717" strokeWidth="2.5" />
          <rect x="375" y="125" width="105" height="22" fill="#171717" />
          <text x="385" y="140" fill="#F4CF55" fontSize="8" fontFamily="monospace" fontWeight="bold">03 • CONTENT</text>
          
          {/* Viewfinder frame */}
          <rect x="387" y="155" width="80" height="60" rx="4" fill="#F8F6EF" stroke="#171717" strokeWidth="1.5" />
          <circle cx="427" cy="185" r="14" fill="#ED83A8" stroke="#171717" strokeWidth="1.5" />
          <circle cx="427" cy="185" r="6" fill="#171717" />
          <text x="388" y="232" fill="#171717" fontSize="8" fontFamily="Space Grotesk, sans-serif" fontWeight="bold">Documentary Rigor</text>
          <text x="388" y="244" fill="#525252" fontSize="7" fontFamily="monospace">Real Photography</text>
        </g>

        {/* ── Discipline 04: Marketing & Organic Visibility (Growth Card) ── */}
        <g id="card-growth" transform="translate(495, 145)">
          <rect x="0" y="0" width="115" height="120" rx="6" fill="#F8F6EF" stroke="#171717" strokeWidth="2.5" />
          <rect x="0" y="0" width="115" height="22" fill="#171717" />
          <text x="8" y="15" fill="#ED83A8" fontSize="8" fontFamily="monospace" fontWeight="bold">04 • INBOUND SEO</text>
          
          {/* Trend line */}
          <path d="M12 90 L38 78 L65 82 L100 45" stroke="#171717" strokeWidth="3" strokeLinecap="round" />
          <path d="M12 90 L38 78 L65 82 L100 45" stroke="#A6D8A1" strokeWidth="2" strokeLinecap="round" />
          <circle cx="100" cy="45" r="4" fill="#ED83A8" stroke="#171717" strokeWidth="1.5" />
          
          <text x="10" y="106" fill="#171717" fontSize="8" fontFamily="Space Grotesk, sans-serif" fontWeight="bold">Compounding Intent</text>
        </g>

        {/* ── Discipline 05: Ongoing Stewardship & Management (Desktop Stamp) ── */}
        <g id="badge-stewardship" transform="translate(505, 290)">
          <rect x="0" y="0" width="105" height="48" rx="4" fill="#F4CF55" stroke="#171717" strokeWidth="2" />
          <text x="8" y="18" fill="#171717" fontSize="9" fontFamily="monospace" fontWeight="bold">05 • STEWARDSHIP</text>
          <text x="8" y="34" fill="#171717" fontSize="8" fontFamily="Space Grotesk, sans-serif">Continuous Care &amp; SLA</text>
        </g>

        {/* ── Desk Drafting Tools: Blueprint & Ruler ── */}
        <g id="ruler" transform="translate(45, 345)">
          <rect x="0" y="0" width="160" height="18" rx="2" fill="#F4CF55" stroke="#171717" strokeWidth="2" transform="rotate(-2)" />
          <line x1="15" y1="0" x2="15" y2="8" stroke="#171717" strokeWidth="1.5" />
          <line x1="35" y1="0" x2="35" y2="8" stroke="#171717" strokeWidth="1.5" />
          <line x1="55" y1="0" x2="55" y2="8" stroke="#171717" strokeWidth="1.5" />
          <line x1="75" y1="0" x2="75" y2="8" stroke="#171717" strokeWidth="1.5" />
          <line x1="95" y1="0" x2="95" y2="8" stroke="#171717" strokeWidth="1.5" />
          <line x1="115" y1="0" x2="115" y2="8" stroke="#171717" strokeWidth="1.5" />
          <line x1="135" y1="0" x2="135" y2="8" stroke="#171717" strokeWidth="1.5" />
        </g>

        <g id="blueprint-tube" transform="translate(230, 342)">
          <rect x="0" y="0" width="140" height="30" rx="5" fill="#A6D8A1" stroke="#171717" strokeWidth="2.5" />
          <ellipse cx="6" cy="15" rx="6" ry="15" fill="#FFFFFF" stroke="#171717" strokeWidth="2" />
          <line x1="45" y1="0" x2="45" y2="30" stroke="#171717" strokeWidth="2" strokeDasharray="3 3" />
          <line x1="95" y1="0" x2="95" y2="30" stroke="#171717" strokeWidth="2" strokeDasharray="3 3" />
        </g>

        <g id="coffee-mug" transform="translate(410, 335)">
          <rect x="0" y="0" width="34" height="42" rx="4" fill="#ED83A8" stroke="#171717" strokeWidth="2.5" />
          <path d="M34 8 C44 8 44 32 34 32" fill="none" stroke="#171717" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M10 -8 C8 -16 14 -20 12 -28" fill="none" stroke="#171717" strokeWidth="2" strokeLinecap="round" />
          <path d="M22 -10 C20 -18 26 -22 24 -30" fill="none" stroke="#171717" strokeWidth="2" strokeLinecap="round" />
        </g>

        {/* ── Playful Speech Bubble: 5 Connected Capabilities ── */}
        <g id="speech-bubble" transform="translate(430, 20)">
          <path
            d="M20 20 C20 10 30 0 45 0 H175 C190 0 200 10 200 20 V65 C200 75 190 85 175 85 H90 L65 105 L72 85 H45 C30 85 20 75 20 65 Z"
            fill="#F4CF55"
            stroke="#171717"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <text x="36" y="28" fill="#171717" fontSize="11" fontFamily="Space Grotesk, sans-serif" fontWeight="900">
            5 CONNECTED DISCIPLINES
          </text>
          <text x="36" y="46" fill="#171717" fontSize="10" fontFamily="monospace" fontWeight="bold">
            ONE ACCOUNTABLE PARTNER
          </text>
          <text x="36" y="65" fill="#171717" fontSize="9" fontFamily="Space Grotesk, sans-serif" fontWeight="600">
            Zero fragmented handoffs.
          </text>
        </g>

        {/* Floating Accents */}
        <circle cx="48" cy="85" r="5" fill="#F4CF55" stroke="#171717" strokeWidth="1.5" />
        <path d="M605 130 L610 142 L622 143 L612 151 L615 163 L605 156 L595 163 L598 151 L588 143 L600 142 Z" fill="#ED83A8" stroke="#171717" strokeWidth="1.5" />
      </svg>
    </div>
  );
}
