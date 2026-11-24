import React from "react";

/**
 * Hand-drawn doodle vignettes for FIRM's 5 core industries:
 * Education, Healthcare, Professional, Retail, Startups.
 * Clean stroke="#171717" strokeWidth="2.5", Pop Garden palette accents.
 */

export function EducationDoodle({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      {/* Mortarboard Cap */}
      <path d="M32 10 L58 22 L32 34 L6 22 Z" fill="#F4CF55" stroke="#171717" strokeWidth="2.5" strokeLinejoin="round" />
      {/* Skullcap */}
      <path d="M18 28 V40 C18 46 46 46 46 40 V28" fill="#FFFFFF" stroke="#171717" strokeWidth="2.5" />
      {/* Tassel */}
      <path d="M48 24 V42 L52 46" stroke="#ED83A8" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="52" cy="48" r="3" fill="#ED83A8" stroke="#171717" strokeWidth="1.5" />
      {/* Little Diploma Scroll */}
      <rect x="14" y="48" width="36" height="10" rx="3" fill="#A6D8A1" stroke="#171717" strokeWidth="2" />
      <line x1="28" y1="48" x2="28" y2="58" stroke="#ED83A8" strokeWidth="2" />
    </svg>
  );
}

export function HealthcareDoodle({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      {/* Clinical Cross / Heart Shield */}
      <rect x="8" y="10" width="48" height="48" rx="10" fill="#FFFFFF" stroke="#171717" strokeWidth="2.5" />
      <path d="M26 18 H38 V26 H46 V38 H38 V46 H26 V38 H18 V26 H26 Z" fill="#ED83A8" stroke="#171717" strokeWidth="2" strokeLinejoin="round" />
      {/* Pulse / Vital Line */}
      <path d="M12 42 L24 42 L28 32 L34 50 L40 40 L44 42 L52 42" stroke="#171717" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ProfessionalDoodle({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      {/* Classical Architecture Pillar */}
      <rect x="14" y="10" width="36" height="8" rx="2" fill="#F4CF55" stroke="#171717" strokeWidth="2.5" />
      <rect x="18" y="18" width="8" height="34" fill="#FFFFFF" stroke="#171717" strokeWidth="2" />
      <rect x="38" y="18" width="8" height="34" fill="#FFFFFF" stroke="#171717" strokeWidth="2" />
      <line x1="32" y1="20" x2="32" y2="50" stroke="#171717" strokeWidth="2" strokeDasharray="3 3" />
      <rect x="10" y="52" width="44" height="8" rx="2" fill="#F4CF55" stroke="#171717" strokeWidth="2.5" />
      {/* Fountain Pen Quill nib */}
      <path d="M46 14 L56 4 L58 10 Z" fill="#ED83A8" stroke="#171717" strokeWidth="1.5" />
    </svg>
  );
}

export function RetailDoodle({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      {/* Shopping Tote Bag */}
      <rect x="12" y="22" width="40" height="36" rx="4" fill="#A6D8A1" stroke="#171717" strokeWidth="2.5" />
      {/* Bag Handles */}
      <path d="M22 22 V14 C22 8 42 8 42 14 V22" fill="none" stroke="#171717" strokeWidth="2.5" strokeLinecap="round" />
      {/* Price Tag Hanging */}
      <path d="M42 28 L54 38 L48 46 L36 36 Z" fill="#F4CF55" stroke="#171717" strokeWidth="2" strokeLinejoin="round" />
      <circle cx="40" cy="34" r="2" fill="#171717" />
      {/* Star sparkle */}
      <path d="M26 34 L28 40 L34 41 L29 45 L31 51 L26 47 L21 51 L23 45 L18 41 L24 40 Z" fill="#ED83A8" stroke="#171717" strokeWidth="1.5" />
    </svg>
  );
}

export function StartupsDoodle({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      {/* Launch Rocket */}
      <path d="M32 8 C42 16 46 30 42 42 H22 C18 30 22 16 32 8 Z" fill="#FFFFFF" stroke="#171717" strokeWidth="2.5" strokeLinejoin="round" />
      {/* Porthole */}
      <circle cx="32" cy="24" r="6" fill="#ED83A8" stroke="#171717" strokeWidth="2" />
      {/* Fins */}
      <path d="M22 36 L12 44 V48 H22 Z" fill="#F4CF55" stroke="#171717" strokeWidth="2" strokeLinejoin="round" />
      <path d="M42 36 L52 44 V48 H42 Z" fill="#F4CF55" stroke="#171717" strokeWidth="2" strokeLinejoin="round" />
      {/* Exhaust Flame */}
      <path d="M26 44 C26 54 32 60 32 60 C32 60 38 54 38 44 Z" fill="#ED83A8" stroke="#171717" strokeWidth="2" />
      <path d="M29 44 C29 50 32 54 32 54 C32 54 35 50 35 44 Z" fill="#F4CF55" stroke="#171717" strokeWidth="1.5" />
    </svg>
  );
}
