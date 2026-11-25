import React from "react";
import Image from "next/image";
import Link from "next/link";
import StickerMark from "@/components/illustrations/StickerMark";
import { ArrowUpRight } from "lucide-react";

const FRAGMENTED_SEAMS = [
  { label: "Design Systems", note: "Static PDF decks rebuild poorly in code" },
  { label: "Web Engineering", note: "Template plugins create maintenance debt" },
  { label: "Editorial Media", note: "Generic stock assets dilute institutional trust" },
  { label: "Search & Growth", note: "Ad spend leaks into slow landing pages" },
];

export default function FragmentationStory() {
  return (
    <div className="w-full max-w-6xl mx-auto space-y-10">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center space-y-3">
        <span className="text-xs font-mono uppercase tracking-[0.14em] text-[#A6D8A1] block">
          Architectural Synthesis
        </span>
        <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#F8F6EF] leading-[1.08]">
          Why fragmented contractors leak momentum.
        </h2>
      </div>

      {/* Twin Balanced Panels: Midnight Surface vs Warm Cream Editorial Plate */}
      <div className="grid gap-6 lg:grid-cols-12 items-stretch">
        {/* Left: Fragmented Status Quo (#1E1E20 Surface) */}
        <div className="lg:col-span-5 p-7 sm:p-9 rounded-2xl bg-[#1E1E20] border border-[#F8F6EF]/12 flex flex-col justify-between space-y-8">
          <div className="space-y-4">
            <span className="text-xs font-mono uppercase tracking-[0.14em] text-[#9C9990] block">
              Conventional Multi-Vendor Model
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#F8F6EF] leading-tight">
              Four isolated retainers, four broken handoffs.
            </h3>
            <p className="text-sm text-[#C4C1B8] leading-relaxed font-sans">
              When brand direction, software builds, media shoots, and SEO operate under competing invoices, coordination burden falls back on your team.
            </p>
          </div>

          <ul className="divide-y divide-[#F8F6EF]/10 border-t border-[#F8F6EF]/10">
            {FRAGMENTED_SEAMS.map((seam) => (
              <li key={seam.label} className="py-3.5 flex items-start justify-between gap-4 text-xs sm:text-sm">
                <span className="font-display font-semibold text-[#F8F6EF] shrink-0">
                  {seam.label}
                </span>
                <span className="text-[#9C9990] text-right leading-snug">
                  {seam.note}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Unified FIRM Standard (#F8F6EF Warm Cream Showcase with S03 Art) */}
        <div className="lg:col-span-7 p-7 sm:p-9 rounded-2xl bg-[#F8F6EF] text-[#171717] border border-[#171717]/12 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-4">
              <span className="text-xs font-mono uppercase tracking-[0.14em] text-[#171717]/70 font-semibold">
                Unified Midnight Atelier Model
              </span>
              <StickerMark name="s09-12-check-box" size={26} />
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#171717] leading-tight">
              One senior standard compiled into one live codebase.
            </h3>
            <p className="text-sm sm:text-base text-[#171717]/80 leading-relaxed font-sans">
              Brand variables, Next.js components, art-directed imagery, and semantic schema live together so every iteration compounds total authority.
            </p>
          </div>

          {/* Bespoke S03 Split Visual Plate (Zero fake app windows) */}
          <div className="relative aspect-[3/2] w-full rounded-xl overflow-hidden bg-[#171717] border border-[#171717]/15">
            <Image
              src="/images/studio/s03-cohesion-contrast.webp"
              alt="Split collage contrasting fragmented paper scraps with unified architectural forms bound by a rose pink thread"
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover"
            />
          </div>

          <div className="pt-2 border-t border-[#171717]/12 flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs font-mono text-[#171717]/70 font-medium">
              Direct Partner Accountability · Full Ownership
            </span>
            <Link
              href="/capabilities"
              className="inline-flex items-center gap-1.5 text-sm font-display font-bold text-[#171717] hover:text-[#171717]/70 underline underline-offset-4 whitespace-nowrap"
            >
              <span>Inspect disciplines</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
