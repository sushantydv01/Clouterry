import React from "react";

/**
 * Hand-drawn doodle vignettes for FIRM's 5 core industries:
 * Education, Healthcare, Professional Services, Retail, Startups.
 * Clean stroke="#171717" strokeWidth="2.5", Pop Garden palette accents.
 */

/**
 * Substantial original vector artwork for Education practice flagship.
 * Depicts the architectural separation of admissions vs community utilities.
 */
export function EducationFeatureIllustration({ className = "w-full h-auto" }: { className?: string }) {
  return (
    <svg viewBox="0 0 420 280" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Education Digital Architecture Illustration">
      {/* Background Frame */}
      <rect x="10" y="10" width="400" height="260" rx="6" fill="#F8F6EF" stroke="#171717" strokeWidth="2.5" />
      
      {/* Academic Hall / Campus Architecture */}
      <g transform="translate(30, 35)">
        {/* Classical Pediment Gable */}
        <path d="M70 20 L135 55 L5 55 Z" fill="#F4CF55" stroke="#171717" strokeWidth="2.5" strokeLinejoin="round" />
        <circle cx="70" cy="42" r="8" fill="#FFFFFF" stroke="#171717" strokeWidth="2" />
        <text x="65" y="46" fontFamily="Space Grotesk, sans-serif" fontSize="10" fontWeight="800" fill="#171717">SJ</text>

        {/* Pillars */}
        <rect x="15" y="55" width="14" height="70" fill="#FFFFFF" stroke="#171717" strokeWidth="2" />
        <rect x="42" y="55" width="14" height="70" fill="#FFFFFF" stroke="#171717" strokeWidth="2" />
        <rect x="84" y="55" width="14" height="70" fill="#FFFFFF" stroke="#171717" strokeWidth="2" />
        <rect x="111" y="55" width="14" height="70" fill="#FFFFFF" stroke="#171717" strokeWidth="2" />
        
        {/* Base */}
        <rect x="5" y="125" width="130" height="12" rx="2" fill="#171717" />
        
        {/* Admissions Flag */}
        <path d="M70 20 V0 L100 8 L70 16" fill="#ED83A8" stroke="#171717" strokeWidth="2" strokeLinejoin="round" />
      </g>

      {/* Digital Admissions Funnel Interface (Right Side) */}
      <g transform="translate(190, 35)">
        <rect x="0" y="0" width="200" height="150" rx="4" fill="#FFFFFF" stroke="#171717" strokeWidth="2" />
        <rect x="0" y="0" width="200" height="22" fill="#171717" />
        <text x="10" y="15" fontFamily="monospace" fontSize="9" fontWeight="700" fill="#F4CF55">ADMISSIONS FLAGSHIP</text>

        {/* 3 Steps */}
        <g transform="translate(12, 32)">
          <rect x="0" y="0" width="176" height="28" rx="3" fill="#F8F6EF" stroke="#171717" strokeWidth="1.5" />
          <circle cx="14" cy="14" r="8" fill="#F4CF55" stroke="#171717" strokeWidth="1.5" />
          <text x="11" y="18" fontFamily="Space Grotesk, sans-serif" fontSize="10" fontWeight="900" fill="#171717">1</text>
          <text x="28" y="18" fontFamily="Space Grotesk, sans-serif" fontSize="10" fontWeight="700" fill="#171717">Interactive Prospectus</text>

          <rect x="0" y="34" width="176" height="28" rx="3" fill="#F8F6EF" stroke="#171717" strokeWidth="1.5" />
          <circle cx="14" cy="14" r="8" fill="#A6D8A1" stroke="#171717" strokeWidth="1.5" />
          <text x="11" y="18" fontFamily="Space Grotesk, sans-serif" fontSize="10" fontWeight="900" fill="#171717">2</text>
          <text x="28" y="18" fontFamily="Space Grotesk, sans-serif" fontSize="10" fontWeight="700" fill="#171717">Frictionless Tour Booking</text>

          <rect x="0" y="68" width="176" height="28" rx="3" fill="#F8F6EF" stroke="#171717" strokeWidth="1.5" />
          <circle cx="14" cy="14" r="8" fill="#ED83A8" stroke="#171717" strokeWidth="1.5" />
          <text x="11" y="18" fontFamily="Space Grotesk, sans-serif" fontSize="10" fontWeight="900" fill="#171717">3</text>
          <text x="28" y="18" fontFamily="Space Grotesk, sans-serif" fontSize="10" fontWeight="700" fill="#171717">Direct Enrollment Intake</text>
        </g>
      </g>

      {/* Persistent Family Utility Bar (Bottom Ribbon) */}
      <g transform="translate(30, 200)">
        <rect x="0" y="0" width="360" height="48" rx="4" fill="#171717" />
        <rect x="8" y="8" width="12" height="32" fill="#A6D8A1" />
        <text x="28" y="24" fontFamily="monospace" fontSize="10" fontWeight="700" fill="#A6D8A1">COMMUNITY UTILITY LAYER</text>
        <text x="28" y="38" fontFamily="Space Grotesk, sans-serif" fontSize="10" fill="#F8F6EF">Isolated portal logins, daily athletics, &amp; cafeteria menus</text>
        <rect x="270" y="12" width="80" height="24" rx="2" fill="#F4CF55" />
        <text x="282" y="28" fontFamily="Space Grotesk, sans-serif" fontSize="9" fontWeight="700" fill="#171717">SIS PORTAL →</text>
      </g>

      {/* Mortarboard Tassel in Corner */}
      <g transform="translate(355, 15)">
        <path d="M20 0 L40 10 L20 20 L0 10 Z" fill="#F4CF55" stroke="#171717" strokeWidth="2" strokeLinejoin="round" />
        <path d="M30 15 V30 L35 34" stroke="#ED83A8" strokeWidth="2" strokeLinecap="round" />
        <circle cx="35" cy="36" r="3" fill="#ED83A8" stroke="#171717" strokeWidth="1" />
      </g>
    </svg>
  );
}

export function EducationDoodle({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <path d="M32 10 L58 22 L32 34 L6 22 Z" fill="#F4CF55" stroke="#171717" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M18 28 V40 C18 46 46 46 46 40 V28" fill="#FFFFFF" stroke="#171717" strokeWidth="2.5" />
      <path d="M48 24 V42 L52 46" stroke="#ED83A8" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="52" cy="48" r="3" fill="#ED83A8" stroke="#171717" strokeWidth="1.5" />
      <rect x="14" y="48" width="36" height="10" rx="3" fill="#A6D8A1" stroke="#171717" strokeWidth="2" />
      <line x1="28" y1="48" x2="28" y2="58" stroke="#ED83A8" strokeWidth="2" />
    </svg>
  );
}

export function HealthcareDoodle({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <rect x="8" y="10" width="48" height="48" rx="8" fill="#FFFFFF" stroke="#171717" strokeWidth="2.5" />
      <path d="M26 18 H38 V26 H46 V38 H38 V46 H26 V38 H18 V26 H26 Z" fill="#A6D8A1" stroke="#171717" strokeWidth="2" strokeLinejoin="round" />
      <path d="M12 42 L24 42 L28 32 L34 50 L40 40 L44 42 L52 42" stroke="#171717" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ProfessionalDoodle({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <rect x="14" y="10" width="36" height="8" rx="2" fill="#F4CF55" stroke="#171717" strokeWidth="2.5" />
      <rect x="18" y="18" width="8" height="34" fill="#FFFFFF" stroke="#171717" strokeWidth="2" />
      <rect x="38" y="18" width="8" height="34" fill="#FFFFFF" stroke="#171717" strokeWidth="2" />
      <line x1="32" y1="20" x2="32" y2="50" stroke="#171717" strokeWidth="2" strokeDasharray="3 3" />
      <rect x="10" y="52" width="44" height="8" rx="2" fill="#F4CF55" stroke="#171717" strokeWidth="2.5" />
      <path d="M46 14 L56 4 L58 10 Z" fill="#ED83A8" stroke="#171717" strokeWidth="1.5" />
    </svg>
  );
}

export function RetailDoodle({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <rect x="12" y="22" width="40" height="36" rx="4" fill="#ED83A8" stroke="#171717" strokeWidth="2.5" />
      <path d="M22 22 V14 C22 8 42 8 42 14 V22" fill="none" stroke="#171717" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M42 28 L54 38 L48 46 L36 36 Z" fill="#F4CF55" stroke="#171717" strokeWidth="2" strokeLinejoin="round" />
      <circle cx="40" cy="34" r="2" fill="#171717" />
    </svg>
  );
}

export function StartupsDoodle({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <path d="M32 8 C42 16 46 30 42 42 H22 C18 30 22 16 32 8 Z" fill="#FFFFFF" stroke="#171717" strokeWidth="2.5" strokeLinejoin="round" />
      <circle cx="32" cy="24" r="6" fill="#ED83A8" stroke="#171717" strokeWidth="2" />
      <path d="M22 36 L12 44 V48 H22 Z" fill="#F4CF55" stroke="#171717" strokeWidth="2" strokeLinejoin="round" />
      <path d="M42 36 L52 44 V48 H42 Z" fill="#F4CF55" stroke="#171717" strokeWidth="2" strokeLinejoin="round" />
      <path d="M26 44 C26 54 32 60 32 60 C32 60 38 54 38 44 Z" fill="#ED83A8" stroke="#171717" strokeWidth="2" />
      <path d="M29 44 C29 50 32 54 32 54 C32 54 35 50 35 44 Z" fill="#F4CF55" stroke="#171717" strokeWidth="1.5" />
    </svg>
  );
}
