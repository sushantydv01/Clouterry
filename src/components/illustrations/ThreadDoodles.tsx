"use client";

import React from "react";

/**
 * FIRM Signature Hand-Drawn Doodle & Illustration Library
 * Characterized by:
 * - Confident black ink outlines (stroke="#000000" or stroke="#18181B", strokeWidth 2.2 - 2.8)
 * - Slightly imperfect, organic human hand-drawn character
 * - Flat, bold color fills using the 5 discipline colors + Gumroad Pink & Butter Yellow
 * - Zero glossy 3D effects, zero generic corporate icons
 */

/* ── 01. Brand & Identity Doodle: Swatch Fan + Typography Specimen ── */
export function DoodleBrandSpecimen({ className = "", size = 120 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 140 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Brand and typography illustration"
    >
      {/* Background palette fan card 3 (Yellow) */}
      <rect
        x="62"
        y="18"
        width="46"
        height="84"
        rx="8"
        transform="rotate(22 62 18)"
        fill="#FFB800"
        stroke="#121214"
        strokeWidth="2.5"
      />
      {/* Background palette fan card 2 (Blue) */}
      <rect
        x="38"
        y="14"
        width="46"
        height="84"
        rx="8"
        transform="rotate(6 38 14)"
        fill="#3875FF"
        stroke="#121214"
        strokeWidth="2.5"
      />
      {/* Front palette fan card 1 (Coral / Vermilion) */}
      <rect
        x="18"
        y="22"
        width="48"
        height="84"
        rx="8"
        transform="rotate(-12 18 22)"
        fill="#FF5C40"
        stroke="#121214"
        strokeWidth="2.5"
      />
      {/* Punch hole at the pivot */}
      <circle cx="58" cy="98" r="5" fill="#FFFFFF" stroke="#121214" strokeWidth="2.5" />
      <circle cx="58" cy="98" r="2" fill="#121214" />

      {/* Typography Specimen Tag: 'Aa' Badge */}
      <g transform="translate(64, 52) rotate(-4)">
        <rect x="0" y="0" width="58" height="52" rx="6" fill="#F8F6F0" stroke="#121214" strokeWidth="2.5" />
        <text
          x="10"
          y="38"
          fill="#121214"
          fontFamily="var(--font-serif), Georgia, serif"
          fontStyle="italic"
          fontSize="36"
          fontWeight="bold"
        >
          f
        </text>
        <circle cx="44" cy="20" r="4" fill="#FF5C40" />
      </g>

      {/* Drafting Pencil */}
      <g transform="translate(20, 102) rotate(-40)">
        <polygon points="0,0 12,-6 56,-6 56,6 12,6" fill="#FFC700" stroke="#121214" strokeWidth="2" />
        <polygon points="0,0 12,-6 12,6" fill="#F8F6F0" stroke="#121214" strokeWidth="2" />
        <polygon points="0,0 4,-2 4,2" fill="#121214" />
        <rect x="56" y="-6" width="10" height="12" fill="#FF90E8" stroke="#121214" strokeWidth="2" />
      </g>
    </svg>
  );
}

/* ── 02. Web & Engineering Doodle: Browser Window + Component Blocks + Edge Spark ── */
export function DoodleWebPlatform({ className = "", size = 120 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 140 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Web platform and engineering illustration"
    >
      {/* Hand-drawn Browser Frame */}
      <rect
        x="14"
        y="22"
        width="112"
        height="88"
        rx="10"
        fill="#FFFFFF"
        stroke="#121214"
        strokeWidth="2.6"
      />
      {/* Browser Title Bar */}
      <line x1="14" y1="46" x2="126" y2="46" stroke="#121214" strokeWidth="2.2" />
      {/* Traffic Dots */}
      <circle cx="28" cy="34" r="3.5" fill="#FF5C40" stroke="#121214" strokeWidth="1.5" />
      <circle cx="40" cy="34" r="3.5" fill="#FFC700" stroke="#121214" strokeWidth="1.5" />
      <circle cx="52" cy="34" r="3.5" fill="#10B981" stroke="#121214" strokeWidth="1.5" />

      {/* URL Pill */}
      <rect x="64" y="28" width="50" height="12" rx="6" fill="#F8F6F0" stroke="#121214" strokeWidth="1.5" />

      {/* Inside Viewport: React Component Hierarchy */}
      <rect x="24" y="56" width="42" height="42" rx="6" fill="#3875FF" stroke="#121214" strokeWidth="2" />
      {/* Hero mock bar inside */}
      <rect x="30" y="66" width="30" height="4" rx="2" fill="#FFFFFF" />
      <rect x="30" y="74" width="22" height="4" rx="2" fill="#FFFFFF" opacity="0.8" />
      <rect x="30" y="84" width="16" height="6" rx="3" fill="#FF90E8" stroke="#121214" strokeWidth="1" />

      {/* Secondary Component Column */}
      <rect x="74" y="56" width="42" height="18" rx="5" fill="#10B981" stroke="#121214" strokeWidth="1.8" />
      <rect x="74" y="80" width="42" height="18" rx="5" fill="#FFC700" stroke="#121214" strokeWidth="1.8" />

      {/* Sub-second Edge Spark Badge */}
      <g transform="translate(98, 86)">
        <circle cx="16" cy="16" r="16" fill="#FF90E8" stroke="#121214" strokeWidth="2.2" />
        <path
          d="M17 6 L9 18 L16 18 L14 26 L23 14 L17 14 Z"
          fill="#121214"
          stroke="#121214"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

/* ── 03. Social & Content Doodle: Camera Viewfinder + Film Strip ── */
export function DoodleEditorialCamera({ className = "", size = 120 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 140 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Editorial camera and content illustration"
    >
      {/* Film Strip behind */}
      <g transform="translate(18, 14) rotate(-10)">
        <rect x="0" y="0" width="96" height="32" rx="4" fill="#121214" stroke="#121214" strokeWidth="2" />
        {/* Sprocket holes */}
        <rect x="6" y="4" width="6" height="6" rx="1.5" fill="#FFFFFF" />
        <rect x="22" y="4" width="6" height="6" rx="1.5" fill="#FFFFFF" />
        <rect x="38" y="4" width="6" height="6" rx="1.5" fill="#FFFFFF" />
        <rect x="54" y="4" width="6" height="6" rx="1.5" fill="#FFFFFF" />
        <rect x="70" y="4" width="6" height="6" rx="1.5" fill="#FFFFFF" />
        <rect x="84" y="4" width="6" height="6" rx="1.5" fill="#FFFFFF" />

        <rect x="6" y="22" width="6" height="6" rx="1.5" fill="#FFFFFF" />
        <rect x="22" y="22" width="6" height="6" rx="1.5" fill="#FFFFFF" />
        <rect x="38" y="22" width="6" height="6" rx="1.5" fill="#FFFFFF" />
        <rect x="54" y="22" width="6" height="6" rx="1.5" fill="#FFFFFF" />
        <rect x="70" y="22" width="6" height="6" rx="1.5" fill="#FFFFFF" />
        <rect x="84" y="22" width="6" height="6" rx="1.5" fill="#FFFFFF" />
      </g>

      {/* Main Camera Body */}
      <rect
        x="20"
        y="42"
        width="98"
        height="66"
        rx="10"
        fill="#FFB800"
        stroke="#121214"
        strokeWidth="2.6"
      />
      {/* Top Viewfinder Prism */}
      <polygon points="50,42 56,28 84,28 90,42" fill="#121214" stroke="#121214" strokeWidth="2.2" />
      {/* Shutter Button */}
      <rect x="32" y="34" width="12" height="8" rx="2" fill="#FF5C40" stroke="#121214" strokeWidth="2" />

      {/* Large Lens */}
      <circle cx="69" cy="75" r="26" fill="#F8F6F0" stroke="#121214" strokeWidth="2.6" />
      <circle cx="69" cy="75" r="18" fill="#121214" stroke="#121214" strokeWidth="2" />
      <circle cx="69" cy="75" r="10" fill="#3875FF" />
      {/* Glint on Lens */}
      <circle cx="64" cy="70" r="3.5" fill="#FFFFFF" />

      {/* Monograph Tag */}
      <g transform="translate(86, 88)">
        <rect x="0" y="0" width="38" height="24" rx="4" fill="#FF90E8" stroke="#121214" strokeWidth="2" />
        <text x="7" y="16" fill="#121214" fontFamily="sans-serif" fontSize="10" fontWeight="bold">REC</text>
        <circle cx="28" cy="12" r="3" fill="#FF5C40" />
      </g>
    </svg>
  );
}

/* ── 04. Marketing & Growth Doodle: Beacon / Compass + Compounding Trajectory ── */
export function DoodleOrganicGrowth({ className = "", size = 120 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 140 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Marketing, search discovery, and organic growth illustration"
    >
      {/* Concentric Search Beacon Rings */}
      <circle cx="70" cy="70" r="54" stroke="#10B981" strokeWidth="2" strokeDasharray="4 4" opacity="0.6" />
      <circle cx="70" cy="70" r="40" stroke="#10B981" strokeWidth="2" strokeDasharray="5 3" opacity="0.8" />

      {/* Compounding Growth Curve Tile */}
      <rect
        x="24"
        y="24"
        width="92"
        height="92"
        rx="16"
        fill="#F8F6F0"
        stroke="#121214"
        strokeWidth="2.6"
      />

      {/* Inbound Trajectory Arrow Path */}
      <path
        d="M38 96 C 52 92, 64 80, 74 64 C 84 48, 92 40, 104 36"
        stroke="#10B981"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M38 96 C 52 92, 64 80, 74 64 C 84 48, 92 40, 104 36"
        stroke="#121214"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />

      {/* Target Arrow Tip */}
      <polygon points="108,34 94,36 102,46" fill="#10B981" stroke="#121214" strokeWidth="2" />

      {/* Growing Seedling / Milestone Node */}
      <circle cx="74" cy="64" r="8" fill="#FFC700" stroke="#121214" strokeWidth="2.2" />
      <circle cx="74" cy="64" r="3" fill="#121214" />

      {/* Search Radar Node */}
      <g transform="translate(32, 34)">
        <rect x="0" y="0" width="34" height="20" rx="6" fill="#121214" />
        <text x="6" y="14" fill="#10B981" fontFamily="monospace" fontSize="9" fontWeight="bold">SEO</text>
      </g>
    </svg>
  );
}

/* ── 05. Digital Advisory Doodle: Architectural Steering Helm + Golden Key ── */
export function DoodleAdvisoryHelm({ className = "", size = 120 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 140 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Digital management and consulting illustration"
    >
      {/* Background Architectural Gear / Ring */}
      <circle cx="70" cy="68" r="44" fill="#FF5C9D" stroke="#121214" strokeWidth="2.6" />
      <circle cx="70" cy="68" r="30" fill="#FFFFFF" stroke="#121214" strokeWidth="2.4" />

      {/* Helm Spokes */}
      <line x1="70" y1="20" x2="70" y2="116" stroke="#121214" strokeWidth="3" strokeLinecap="round" />
      <line x1="22" y1="68" x2="118" y2="68" stroke="#121214" strokeWidth="3" strokeLinecap="round" />
      <line x1="36" y1="34" x2="104" y2="102" stroke="#121214" strokeWidth="2.6" strokeLinecap="round" />
      <line x1="36" y1="102" x2="104" y2="34" stroke="#121214" strokeWidth="2.6" strokeLinecap="round" />

      {/* Central Hub */}
      <circle cx="70" cy="68" r="14" fill="#FFC700" stroke="#121214" strokeWidth="2.5" />
      <circle cx="70" cy="68" r="5" fill="#121214" />

      {/* Full Client Ownership Golden Key */}
      <g transform="translate(68, 76) rotate(-25)">
        <circle cx="12" cy="12" r="10" fill="#FFB800" stroke="#121214" strokeWidth="2" />
        <circle cx="12" cy="12" r="4" fill="#FFFFFF" stroke="#121214" strokeWidth="1.5" />
        <rect x="22" y="10" width="28" height="4" fill="#FFB800" stroke="#121214" strokeWidth="1.8" />
        <rect x="42" y="14" width="4" height="6" fill="#FFB800" stroke="#121214" strokeWidth="1.5" />
        <rect x="48" y="14" width="4" height="8" fill="#FFB800" stroke="#121214" strokeWidth="1.5" />
      </g>
    </svg>
  );
}

/* ── Hand-Drawn Wavy Underline Motif ── */
export function DoodleWavyLine({ className = "", color = "#FFC700", width = 260, height = 24 }: { className?: string; color?: string; width?: number; height?: number }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 260 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M4 14 C 36 6, 68 20, 100 12 C 132 4, 164 18, 196 11 C 220 5, 244 14, 256 12"
        stroke={color}
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M4 14 C 36 6, 68 20, 100 12 C 132 4, 164 18, 196 11 C 220 5, 244 14, 256 12"
        stroke="#121214"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ── Playful Looping Arrow Motif ── */
export function DoodleLoopArrow({ className = "", color = "#FF90E8" }: { className?: string; color?: string }) {
  return (
    <svg
      width="72"
      height="46"
      viewBox="0 0 72 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Background colored stroke */}
      <path
        d="M6 34 C 20 42, 42 44, 48 26 C 52 14, 38 4, 28 10 C 18 16, 26 34, 46 32 C 54 30, 62 26, 66 22"
        stroke={color}
        strokeWidth="5"
        strokeLinecap="round"
      />
      {/* Black ink outline */}
      <path
        d="M6 34 C 20 42, 42 44, 48 26 C 52 14, 38 4, 28 10 C 18 16, 26 34, 46 32 C 54 30, 62 26, 66 22"
        stroke="#121214"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      {/* Arrow head */}
      <path
        d="M58 20 L67 22 L62 30"
        stroke="#121214"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ── Hand-Drawn Star ── */
export function DoodleHandStar({ className = "", color = "#FFC700", size = 28 }: { className?: string; color?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M16 2 L19.8 11.2 L29.5 12.2 L22.2 18.8 L24.4 28.5 L16 23.5 L7.6 28.5 L9.8 18.8 L2.5 12.2 L12.2 11.2 Z"
        fill={color}
        stroke="#121214"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ── Hand-Drawn Sparkle ── */
export function DoodleHandSparkle({ className = "", color = "#FF90E8", size = 26 }: { className?: string; color?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M16 2 C16 9, 21 16, 30 16 C21 16, 16 23, 16 30 C16 23, 11 16, 2 16 C11 16, 16 9, 16 2 Z"
        fill={color}
        stroke="#121214"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ── Tactile Editorial Stamp ── */
export function DoodleBadgeStamp({
  text = "CONNECTED",
  color = "#FFC700",
  textColor = "#121214",
  className = "",
}: {
  text?: string;
  color?: string;
  textColor?: string;
  className?: string;
}) {
  return (
    <div
      className={`inline-flex items-center gap-1.5 px-3 py-1 border-2 border-[#121214] font-mono text-[11px] font-bold uppercase tracking-wider shadow-[3px_3px_0_0_#121214] rotate-[-2deg] transition-transform hover:rotate-0 select-none ${className}`}
      style={{ backgroundColor: color, color: textColor }}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current" />
      <span>{text}</span>
    </div>
  );
}
