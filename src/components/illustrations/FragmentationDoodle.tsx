import React from "react";

/**
 * FragmentationDoodle — Original FIRM Hand-Drawn Comparison Illustration
 * Visually communicates "Disconnected Agency Silos" vs "Unified FIRM Architecture" in seconds.
 * Avoids walls of text, replacing explanations with immediate visual clarity.
 */

export default function FragmentationDoodle({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full max-w-4xl mx-auto ${className}`}>
      <div className="grid gap-8 md:grid-cols-2">
        {/* ── Left Side: The Fragmented Agency Silos ── */}
        <div className="relative border-2 border-[#171717] bg-[#222222] p-6 sm:p-8 text-left shadow-[6px_6px_0_0_#DC341E] overflow-hidden group">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 border border-[#DC341E] bg-[#171717] px-3 py-1 font-mono text-[11px] font-bold text-[#DC341E] uppercase tracking-wider mb-5">
            <span className="h-2 w-2 rounded-full bg-[#DC341E] animate-ping" />
            <span>THE CONVENTIONAL VENDOR TRAP</span>
          </div>

          <h3 className="font-display text-2xl font-bold text-[#F8F6EF]">
            Disconnected silos, leaking momentum.
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-[#A8A49A] font-sans">
            A freelance designer makes a logo. A template builder hacks together code. An ad agency runs traffic to pages that fail to convert.
          </p>

          {/* SVG Diagram: Tangled Wires & Silos */}
          <div className="mt-6 pt-4 border-t border-[#3A3835]">
            <svg
              viewBox="0 0 380 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto"
              aria-label="Illustration of disconnected vendors and leaking budget"
            >
              {/* Leaking dollar arrows */}
              <g id="leaking-arrows">
                <path d="M190 90 L210 120" stroke="#DC341E" strokeWidth="2.5" strokeDasharray="4 4" strokeLinecap="round" />
                <path d="M210 120 L200 118 M210 120 L212 108" stroke="#DC341E" strokeWidth="2.5" strokeLinecap="round" />
                <text x="215" y="132" fill="#DC341E" fontSize="12" fontFamily="monospace" fontWeight="bold">-\$4,000/mo waste</text>
              </g>

              {/* Tangled Wires connecting nothing */}
              <path
                d="M75 55 C120 15 150 90 200 45 C240 10 270 75 315 45"
                stroke="#A8A49A"
                strokeWidth="2"
                strokeDasharray="4 4"
                fill="none"
              />
              <path
                d="M60 145 C110 180 160 110 220 160 C260 190 290 125 325 155"
                stroke="#DC341E"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
              />

              {/* Box 1: Logo Freelancer */}
              <rect x="20" y="30" width="95" height="42" rx="3" fill="#171717" stroke="#3A3835" strokeWidth="2" />
              <text x="32" y="48" fill="#F8F6EF" fontSize="10" fontFamily="sans-serif" fontWeight="bold">Graphic Freelancer</text>
              <text x="32" y="62" fill="#DC341E" fontSize="8" fontFamily="monospace">&ldquo;Not my code&rdquo;</text>

              {/* Box 2: Template Dev */}
              <rect x="250" y="25" width="105" height="42" rx="3" fill="#171717" stroke="#3A3835" strokeWidth="2" />
              <text x="262" y="43" fill="#F8F6EF" fontSize="10" fontFamily="sans-serif" fontWeight="bold">Outsourced Dev</text>
              <text x="262" y="57" fill="#DC341E" fontSize="8" fontFamily="monospace">&ldquo;Blame the design&rdquo;</text>

              {/* Broken Plug Icon in Center */}
              <circle cx="185" cy="55" r="14" fill="#DC341E" />
              <path d="M180 50 L190 60 M190 50 L180 60" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />

              {/* Box 3: Social Agency */}
              <rect x="30" y="125" width="95" height="42" rx="3" fill="#171717" stroke="#3A3835" strokeWidth="2" />
              <text x="42" y="143" fill="#F8F6EF" fontSize="10" fontFamily="sans-serif" fontWeight="bold">Social Retainer</text>
              <text x="42" y="157" fill="#DC341E" fontSize="8" fontFamily="monospace">&ldquo;Just posting clips&rdquo;</text>

              {/* Box 4: SEO Contractor */}
              <rect x="255" y="130" width="105" height="42" rx="3" fill="#171717" stroke="#3A3835" strokeWidth="2" />
              <text x="267" y="148" fill="#F8F6EF" fontSize="10" fontFamily="sans-serif" fontWeight="bold">SEO Contractor</text>
              <text x="267" y="162" fill="#DC341E" fontSize="8" fontFamily="monospace">&ldquo;Pages too slow&rdquo;</text>
            </svg>
          </div>

          <div className="mt-4 pt-3 border-t border-[#3A3835] flex items-center justify-between text-xs font-mono text-[#DC341E] font-bold">
            <span>Result: Friction at every seam</span>
            <span>0% Compound Equity</span>
          </div>
        </div>

        {/* ── Right Side: The FIRM Unified Architecture ── */}
        <div className="relative border-2 border-[#171717] bg-[#FFFFFF] p-6 sm:p-8 text-left shadow-[6px_6px_0_0_#ED83A8] overflow-hidden group">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 border border-[#171717] bg-[#A6D8A1] px-3 py-1 font-mono text-[11px] font-bold text-[#171717] uppercase tracking-wider mb-5 shadow-[2px_2px_0_0_#171717]">
            <span className="h-2 w-2 rounded-full bg-[#171717]" />
            <span>THE UNIFIED FIRM STANDARD</span>
          </div>

          <h3 className="font-display text-2xl font-bold text-[#171717]">
            One integrated architectural system.
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-[#404040] font-sans">
            Brand direction, custom Next.js engineering, editorial media, and search visibility compound together under one senior partner standard.
          </p>

          {/* SVG Diagram: Harmonious Interlocking Pipeline */}
          <div className="mt-6 pt-4 border-t border-[#171717]">
            <svg
              viewBox="0 0 380 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto"
              aria-label="Illustration of unified digital presence pipeline"
            >
              {/* Continuous Flow Arrow Backbone */}
              <path
                d="M45 100 H335"
                stroke="#171717"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <path d="M325 90 L345 100 L325 110" fill="#171717" stroke="#171717" strokeWidth="2" strokeLinejoin="round" />

              {/* Interlocking Block 01: Brand */}
              <g id="block-brand">
                <rect x="25" y="45" width="70" height="60" rx="3" fill="#ED83A8" stroke="#171717" strokeWidth="2.5" />
                <text x="37" y="68" fill="#171717" fontSize="11" fontFamily="sans-serif" fontWeight="900">01</text>
                <text x="35" y="85" fill="#171717" fontSize="9" fontFamily="monospace" fontWeight="bold">BRAND</text>
                <circle cx="60" cy="120" r="10" fill="#A6D8A1" stroke="#171717" strokeWidth="2" />
                <path d="M56 120 L59 123 L65 116" stroke="#171717" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </g>

              {/* Interlocking Block 02: Web */}
              <g id="block-web">
                <rect x="110" y="35" width="70" height="70" rx="3" fill="#F4CF55" stroke="#171717" strokeWidth="2.5" />
                <text x="122" y="58" fill="#171717" fontSize="11" fontFamily="sans-serif" fontWeight="900">02</text>
                <text x="120" y="75" fill="#171717" fontSize="9" fontFamily="monospace" fontWeight="bold">NEXT.JS</text>
                <text x="120" y="88" fill="#171717" fontSize="8" fontFamily="monospace">100/100</text>
                <circle cx="145" cy="125" r="10" fill="#A6D8A1" stroke="#171717" strokeWidth="2" />
                <path d="M141 125 L144 128 L150 121" stroke="#171717" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </g>

              {/* Interlocking Block 03: Content */}
              <g id="block-content">
                <rect x="195" y="45" width="70" height="60" rx="3" fill="#A6D8A1" stroke="#171717" strokeWidth="2.5" />
                <text x="207" y="68" fill="#171717" fontSize="11" fontFamily="sans-serif" fontWeight="900">03</text>
                <text x="203" y="85" fill="#171717" fontSize="8" fontFamily="monospace" fontWeight="bold">CONTENT</text>
                <circle cx="230" cy="120" r="10" fill="#A6D8A1" stroke="#171717" strokeWidth="2" />
                <path d="M226 120 L229 123 L235 116" stroke="#171717" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </g>

              {/* Interlocking Block 04: Growth */}
              <g id="block-growth">
                <rect x="280" y="30" width="75" height="75" rx="3" fill="#F8F6EF" stroke="#171717" strokeWidth="2.5" />
                <text x="292" y="53" fill="#171717" fontSize="11" fontFamily="sans-serif" fontWeight="900">04</text>
                <text x="288" y="70" fill="#171717" fontSize="9" fontFamily="monospace" fontWeight="bold">GROWTH</text>
                <path d="M292 90 L310 78 L325 82 L340 70" stroke="#ED83A8" strokeWidth="3" strokeLinecap="round" />
                <circle cx="317" cy="125" r="10" fill="#A6D8A1" stroke="#171717" strokeWidth="2" />
                <path d="M313 125 L316 128 L322 121" stroke="#171717" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </g>

              {/* Foundation Banner Below */}
              <rect x="40" y="155" width="300" height="30" rx="3" fill="#171717" />
              <text x="58" y="174" fill="#F8F6EF" fontSize="9" fontFamily="monospace" fontWeight="bold" letterSpacing="0.08em">
                100% OWNED STACK • ZERO VENDOR HANDOFFS
              </text>
            </svg>
          </div>

          <div className="mt-4 pt-3 border-t border-[#171717] flex items-center justify-between text-xs font-mono text-[#171717] font-bold">
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-[#A6D8A1]" />
              <span>Full institutional alignment</span>
            </span>
            <span className="bg-[#ED83A8] px-2 py-0.5 border border-[#171717]">Compounding Value</span>
          </div>
        </div>
      </div>
    </div>
  );
}
