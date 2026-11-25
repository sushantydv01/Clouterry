"use client";

import React from "react";

/**
 * StudioTenetsVignettes — 4 Bespoke Hand-Drawn Editorial Vignettes for FIRM Operating Tenets.
 * Conveys: Architectural Coherence, Senior Engagement, Client Ownership, and Enduring Utility.
 */

export function VignetteArchitecturalCoherence({ size = 80 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="50" cy="50" r="42" fill="#F8F6F0" stroke="#121214" strokeWidth="2.2" />
      {/* Code bracket left */}
      <path d="M36 34 L24 50 L36 66" stroke="#FF5C40" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Code bracket right */}
      <path d="M64 34 L76 50 L64 66" stroke="#FF5C40" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Central Drafting Compass Needle */}
      <line x1="50" y1="26" x2="50" y2="74" stroke="#121214" strokeWidth="2" strokeDasharray="3 3" />
      <polygon points="50,22 46,30 54,30" fill="#121214" />
      <circle cx="50" cy="50" r="7" fill="#FFC700" stroke="#121214" strokeWidth="2" />
    </svg>
  );
}

export function VignetteSeniorEngagement({ size = 80 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="50" cy="50" r="42" fill="#F8F6F0" stroke="#121214" strokeWidth="2.2" />
      {/* Drafting Set Square Triangle */}
      <polygon
        points="22,76 78,76 22,20"
        fill="#3875FF"
        stroke="#121214"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      {/* Cutout inside triangle */}
      <polygon
        points="32,70 64,70 32,38"
        fill="#FFFFFF"
        stroke="#121214"
        strokeWidth="1.8"
      />
      {/* Small direct alignment mark */}
      <circle cx="48" cy="54" r="4" fill="#FF90E8" stroke="#121214" strokeWidth="1.5" />
    </svg>
  );
}

export function VignetteClientOwnership({ size = 80 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="50" cy="50" r="42" fill="#F8F6F0" stroke="#121214" strokeWidth="2.2" />
      {/* Open Repository Vault Chest */}
      <rect x="26" y="44" width="48" height="34" rx="6" fill="#10B981" stroke="#121214" strokeWidth="2.4" />
      <path d="M26 44 L50 62 L74 44" stroke="#121214" strokeWidth="2" fill="none" />
      {/* Golden Key floating above */}
      <g transform="translate(40, 24)">
        <circle cx="8" cy="8" r="6" fill="#FFC700" stroke="#121214" strokeWidth="1.8" />
        <rect x="14" y="6" width="16" height="4" fill="#FFC700" stroke="#121214" strokeWidth="1.6" />
        <rect x="24" y="10" width="3" height="4" fill="#FFC700" stroke="#121214" strokeWidth="1.4" />
        <rect x="28" y="10" width="3" height="5" fill="#FFC700" stroke="#121214" strokeWidth="1.4" />
      </g>
    </svg>
  );
}

export function VignetteEnduringUtility({ size = 80 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="50" cy="50" r="42" fill="#F8F6F0" stroke="#121214" strokeWidth="2.2" />
      {/* Architectural Column / Arch */}
      <rect x="28" y="70" width="44" height="8" rx="2" fill="#121214" />
      <rect x="34" y="38" width="8" height="32" rx="2" fill="#FF5C9D" stroke="#121214" strokeWidth="2" />
      <rect x="58" y="38" width="8" height="32" rx="2" fill="#FF5C9D" stroke="#121214" strokeWidth="2" />
      {/* Roman Arch atop */}
      <path
        d="M34 38 C34 24, 66 24, 66 38 Z"
        fill="#FFC700"
        stroke="#121214"
        strokeWidth="2.2"
      />
      {/* Keystone at crown */}
      <polygon points="50,22 45,30 55,30" fill="#FF90E8" stroke="#121214" strokeWidth="1.5" />
    </svg>
  );
}
