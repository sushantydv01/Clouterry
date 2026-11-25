import React from "react";

/**
 * FragmentationDoodle — Original FIRM Hand-Drawn Comparison & "The Seam" Motif
 *
 * Visually communicates:
 * Left: Disconnected conventional agency silos with jagged, broken seams and misaligned priorities.
 * Right: The unified 5-capability FIRM engine where "The Seam" resolves into a continuous, compounding spine.
 *
 * Palette: Pop Garden (#171717, #F8F6EF, #ED83A8, #A6D8A1, #F4CF55, #FFFFFF, #DC341E for problem)
 */

export default function FragmentationDoodle({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full max-w-5xl mx-auto ${className}`}>
      <div className="grid gap-8 lg:grid-cols-2 items-stretch">
        {/* ── Left Side: The Fragmented Agency Silos ── */}
        <div className="relative border-2 border-[#171717] bg-[#201E1C] p-6 sm:p-8 text-left shadow-[6px_6px_0_0_#DC341E] flex flex-col justify-between">
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 border border-[#DC341E] bg-[#171717] px-3 py-1 font-mono text-[11px] font-bold text-[#DC341E] uppercase tracking-wider mb-4">
              <span className="h-2 w-2 rounded-full bg-[#DC341E] animate-pulse" />
              <span>THE CONVENTIONAL DISCONNECT</span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#F8F6EF] leading-snug">
              Five isolated vendors. Leaking momentum at every seam.
            </h3>
            <p className="mt-3 text-xs sm:text-sm text-[#D5D2C9] font-sans leading-relaxed">
              When design, code, content, and marketing are contracted piecemeal, no single entity owns the outcome. Coordination burden falls entirely on the client.
            </p>
          </div>

          {/* SVG Diagram: 5 Disconnected Silos & The Broken Seam */}
          <div className="my-6 pt-5 border-t border-[#3A3835]">
            <svg
              viewBox="0 0 440 240"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto"
              aria-label="Illustration of five disconnected agency silos with broken communication seams"
            >
              {/* Broken / Tangled "Seam" Lines (Red & Gray dashed) */}
              <path
                d="M80 50 C120 10 140 85 190 35 C230 5 250 70 290 40"
                stroke="#A8A49A"
                strokeWidth="2"
                strokeDasharray="4 4"
                fill="none"
              />
              <path
                d="M70 120 C110 160 140 95 200 140 C240 170 260 110 320 150"
                stroke="#DC341E"
                strokeWidth="2.5"
                strokeDasharray="5 3"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M190 140 C220 200 280 180 370 190"
                stroke="#DC341E"
                strokeWidth="2"
                strokeDasharray="3 3"
                fill="none"
              />

              {/* Silo 1: Freelance Designer */}
              <g transform="translate(15, 20)">
                <rect x="0" y="0" width="120" height="52" rx="4" fill="#171717" stroke="#3A3835" strokeWidth="2" />
                <text x="10" y="22" fill="#F8F6EF" fontSize="10" fontFamily="sans-serif" fontWeight="bold">01 • Graphic Designer</text>
                <text x="10" y="38" fill="#DC341E" fontSize="9" fontFamily="monospace">&ldquo;Static mockups only&rdquo;</text>
              </g>

              {/* Silo 2: Outsourced Developer */}
              <g transform="translate(160, 10)">
                <rect x="0" y="0" width="120" height="52" rx="4" fill="#171717" stroke="#3A3835" strokeWidth="2" />
                <text x="10" y="22" fill="#F8F6EF" fontSize="10" fontFamily="sans-serif" fontWeight="bold">02 • Template Dev</text>
                <text x="10" y="38" fill="#DC341E" fontSize="9" fontFamily="monospace">&ldquo;Hacked CMS plugin&rdquo;</text>
              </g>

              {/* Silo 3: Social Freelancer */}
              <g transform="translate(305, 25)">
                <rect x="0" y="0" width="120" height="52" rx="4" fill="#171717" stroke="#3A3835" strokeWidth="2" />
                <text x="10" y="22" fill="#F8F6EF" fontSize="10" fontFamily="sans-serif" fontWeight="bold">03 • Social Agency</text>
                <text x="10" y="38" fill="#DC341E" fontSize="9" fontFamily="monospace">&ldquo;No brand guidelines&rdquo;</text>
              </g>

              {/* Disconnection Warning Icon in Center */}
              <circle cx="220" cy="115" r="16" fill="#DC341E" stroke="#171717" strokeWidth="2" />
              <path d="M213 108 L227 122 M227 108 L213 122" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />

              {/* Silo 4: Performance Marketer */}
              <g transform="translate(30, 120)">
                <rect x="0" y="0" width="130" height="52" rx="4" fill="#171717" stroke="#3A3835" strokeWidth="2" />
                <text x="10" y="22" fill="#F8F6EF" fontSize="10" fontFamily="sans-serif" fontWeight="bold">04 • Media Buyer</text>
                <text x="10" y="38" fill="#DC341E" fontSize="9" fontFamily="monospace">&ldquo;Bounce rate too high&rdquo;</text>
              </g>

              {/* Silo 5: Maintenance Contractor */}
              <g transform="translate(280, 125)">
                <rect x="0" y="0" width="135" height="52" rx="4" fill="#171717" stroke="#3A3835" strokeWidth="2" />
                <text x="10" y="22" fill="#F8F6EF" fontSize="10" fontFamily="sans-serif" fontWeight="bold">05 • IT Contractor</text>
                <text x="10" y="38" fill="#DC341E" fontSize="9" fontFamily="monospace">&ldquo;Not our problem&rdquo;</text>
              </g>

              {/* Seam Breakage Callout */}
              <rect x="110" y="196" width="220" height="28" rx="3" fill="#171717" stroke="#DC341E" strokeWidth="1.5" />
              <text x="122" y="214" fill="#DC341E" fontSize="10" fontFamily="monospace" fontWeight="bold">SEAM BREAK: 5 SEPARATE INVOICES</text>
            </svg>
          </div>

          <div className="pt-4 border-t border-[#3A3835] flex items-center justify-between text-xs font-mono text-[#DC341E] font-bold">
            <span>Result: Friction at every transition</span>
            <span>Zero Compounding Value</span>
          </div>
        </div>

        {/* ── Right Side: The FIRM Unified Architecture ── */}
        <div className="relative border-2 border-[#171717] bg-[#FFFFFF] p-6 sm:p-8 text-left shadow-[6px_6px_0_0_#A6D8A1] flex flex-col justify-between">
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 border border-[#171717] bg-[#A6D8A1] px-3 py-1 font-mono text-[11px] font-bold text-[#171717] uppercase tracking-wider mb-4 shadow-[2px_2px_0_0_#171717]">
              <span className="h-2 w-2 rounded-full bg-[#171717]" />
              <span>THE UNIFIED FIRM STANDARD</span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#171717] leading-snug">
              Five disciplines. Connected by one continuous architectural seam.
            </h3>
            <p className="mt-3 text-xs sm:text-sm text-[#404040] font-sans leading-relaxed">
              Brand identity informs the code. Code ensures lightning-fast delivery. Content drives organic search. Stewardship protects your investment over years.
            </p>
          </div>

          {/* SVG Diagram: Harmonious 5-Block Pipeline with The Unified Seam */}
          <div className="my-6 pt-5 border-t border-[#171717]">
            <svg
              viewBox="0 0 440 240"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto"
              aria-label="Illustration of five unified capabilities linked by The Seam"
            >
              {/* "The Seam" Motif — Continuous Green & Black Spine */}
              <path
                d="M20 115 H415"
                stroke="#171717"
                strokeWidth="5"
                strokeLinecap="round"
              />
              <path
                d="M20 115 H415"
                stroke="#A6D8A1"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              {/* Arrow Head */}
              <path d="M405 105 L425 115 L405 125" fill="#171717" stroke="#171717" strokeWidth="2" strokeLinejoin="round" />

              {/* Block 01: Brand & Identity */}
              <g transform="translate(12, 38)">
                <rect x="0" y="0" width="76" height="64" rx="4" fill="#ED83A8" stroke="#171717" strokeWidth="2.5" />
                <text x="10" y="24" fill="#171717" fontSize="12" fontFamily="Space Grotesk, sans-serif" fontWeight="900">01</text>
                <text x="10" y="42" fill="#171717" fontSize="9" fontFamily="monospace" fontWeight="bold">BRAND</text>
                <text x="10" y="54" fill="#171717" fontSize="8" fontFamily="sans-serif">Authority</text>
                {/* Connection Anchor to The Seam */}
                <circle cx="38" cy="77" r="9" fill="#F8F6EF" stroke="#171717" strokeWidth="2" />
                <circle cx="38" cy="77" r="4" fill="#ED83A8" />
              </g>

              {/* Block 02: Web & Technology */}
              <g transform="translate(98, 28)">
                <rect x="0" y="0" width="76" height="74" rx="4" fill="#F4CF55" stroke="#171717" strokeWidth="2.5" />
                <text x="10" y="24" fill="#171717" fontSize="12" fontFamily="Space Grotesk, sans-serif" fontWeight="900">02</text>
                <text x="10" y="42" fill="#171717" fontSize="9" fontFamily="monospace" fontWeight="bold">WEB DEV</text>
                <text x="10" y="56" fill="#171717" fontSize="8" fontFamily="monospace">Next.js 16</text>
                <text x="10" y="68" fill="#171717" fontSize="8" fontFamily="sans-serif">Sub-second</text>
                <circle cx="38" cy="87" r="9" fill="#F8F6EF" stroke="#171717" strokeWidth="2" />
                <circle cx="38" cy="87" r="4" fill="#F4CF55" />
              </g>

              {/* Block 03: Social Media & Content */}
              <g transform="translate(184, 38)">
                <rect x="0" y="0" width="76" height="64" rx="4" fill="#A6D8A1" stroke="#171717" strokeWidth="2.5" />
                <text x="10" y="24" fill="#171717" fontSize="12" fontFamily="Space Grotesk, sans-serif" fontWeight="900">03</text>
                <text x="10" y="42" fill="#171717" fontSize="9" fontFamily="monospace" fontWeight="bold">CONTENT</text>
                <text x="10" y="54" fill="#171717" fontSize="8" fontFamily="sans-serif">Editorial</text>
                <circle cx="38" cy="77" r="9" fill="#F8F6EF" stroke="#171717" strokeWidth="2" />
                <circle cx="38" cy="77" r="4" fill="#A6D8A1" />
              </g>

              {/* Block 04: Marketing & Growth */}
              <g transform="translate(270, 28)">
                <rect x="0" y="0" width="76" height="74" rx="4" fill="#ED83A8" stroke="#171717" strokeWidth="2.5" />
                <text x="10" y="24" fill="#171717" fontSize="12" fontFamily="Space Grotesk, sans-serif" fontWeight="900">04</text>
                <text x="10" y="42" fill="#171717" fontSize="9" fontFamily="monospace" fontWeight="bold">GROWTH</text>
                <text x="10" y="56" fill="#171717" fontSize="8" fontFamily="monospace">Organic SEO</text>
                <text x="10" y="68" fill="#171717" fontSize="8" fontFamily="sans-serif">Inbound</text>
                <circle cx="38" cy="87" r="9" fill="#F8F6EF" stroke="#171717" strokeWidth="2" />
                <circle cx="38" cy="87" r="4" fill="#ED83A8" />
              </g>

              {/* Block 05: Digital Management */}
              <g transform="translate(356, 38)">
                <rect x="0" y="0" width="76" height="64" rx="4" fill="#F4CF55" stroke="#171717" strokeWidth="2.5" />
                <text x="10" y="24" fill="#171717" fontSize="12" fontFamily="Space Grotesk, sans-serif" fontWeight="900">05</text>
                <text x="10" y="42" fill="#171717" fontSize="9" fontFamily="monospace" fontWeight="bold">CARE</text>
                <text x="10" y="54" fill="#171717" fontSize="8" fontFamily="sans-serif">Stewardship</text>
                <circle cx="38" cy="77" r="9" fill="#F8F6EF" stroke="#171717" strokeWidth="2" />
                <circle cx="38" cy="77" r="4" fill="#F4CF55" />
              </g>

              {/* Continuous Seam Banner Below */}
              <g transform="translate(40, 160)">
                <rect x="0" y="0" width="360" height="34" rx="3" fill="#171717" />
                <text x="16" y="22" fill="#F8F6EF" fontSize="10" fontFamily="monospace" fontWeight="bold" letterSpacing="0.08em">
                  THE SEAM: 100% ALIGNED ARCHITECTURAL DELIVERY
                </text>
              </g>
            </svg>
          </div>

          <div className="pt-4 border-t border-[#171717] flex items-center justify-between text-xs font-mono text-[#171717] font-bold">
            <span className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#A6D8A1] border border-[#171717]" />
              <span>Single Accountable Partner</span>
            </span>
            <span className="bg-[#ED83A8] px-2.5 py-1 border border-[#171717] shadow-[2px_2px_0_0_#171717]">
              Compounding Equity
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
