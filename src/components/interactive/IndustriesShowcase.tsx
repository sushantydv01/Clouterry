import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  EducationDoodle,
  HealthcareDoodle,
  ProfessionalDoodle,
  RetailDoodle,
  StartupsDoodle,
} from "@/components/illustrations/IndustryIcons";

const SECTORS = [
  {
    slug: "education",
    title: "Education & Schools",
    eyebrow: "Institutional Stature",
    tagline: "Balancing admissions conversion with academic dignity. Separate portals for prospective vs current families.",
    color: "#F4CF55",
    doodle: EducationDoodle,
    accentWord: "Admissions",
  },
  {
    slug: "healthcare",
    title: "Healthcare & Clinics",
    eyebrow: "Patient-Centered",
    tagline: "Calm, reassuring digital architecture for specialty clinics, surgical centers, and healthcare flagships.",
    color: "#ED83A8",
    doodle: HealthcareDoodle,
    accentWord: "Trust",
  },
  {
    slug: "professional",
    title: "Professional Services",
    eyebrow: "Intellectual Prestige",
    tagline: "Editorial thought leadership, partner directories, and practice area architecture for legal and advisory partnerships.",
    color: "#A6D8A1",
    doodle: ProfessionalDoodle,
    accentWord: "Prestige",
  },
  {
    slug: "retail",
    title: "Retail & E-commerce",
    eyebrow: "Headless Storefronts",
    tagline: "Editorial storytelling for boutique consumer brands that refuse to look like generic cookie-cutter templates.",
    color: "#ED83A8",
    doodle: RetailDoodle,
    accentWord: "Conversion",
  },
  {
    slug: "startups",
    title: "Startups & Ventures",
    eyebrow: "Rapid 4-Week Sprint",
    tagline: "Investor-grade brand identity and Next.js launchpad to look like a category leader before your next funding round.",
    color: "#F4CF55",
    doodle: StartupsDoodle,
    accentWord: "Velocity",
  },
];

export default function IndustriesShowcase() {
  return (
    <div className="w-full max-w-6xl mx-auto text-left">
      {/* Top Headline Lockup with Asymmetric Layout */}
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 gap-6">
        <div>
          <span className="inline-block border border-[#171717] bg-[#ED83A8] px-3.5 py-1 font-mono text-xs uppercase tracking-wider text-[#171717] font-bold shadow-[2px_2px_0_0_#171717]">
            DOMAINS OF SPECIALIZATION
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#171717] leading-tight">
            Tailored for your sector.{" "}
            <span className="inline-block bg-[#F4CF55] px-3 py-0.5 border border-[#171717] shadow-[3px_3px_0_0_#171717] rotate-[1deg]">
              Zero generic templates.
            </span>
          </h2>
        </div>

        <Link
          href="/industries"
          className="neo-btn text-xs px-5 py-2.5 self-start lg:self-auto inline-flex items-center gap-1.5"
        >
          <span>Explore all 5 practice guides</span>
          <ArrowUpRight size={14} className="stroke-[2.5]" />
        </Link>
      </div>

      {/* ── Asymmetric Staggered Sector Grid (Breaking the Boxiness) ── */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Education Hero Tile (Span 2 on large screens for primary specialization) */}
        <div className="sm:col-span-2 lg:col-span-2 border-2 border-[#171717] bg-[#FFFFFF] p-8 sm:p-10 shadow-[8px_8px_0_0_#171717] flex flex-col justify-between group hover:-translate-y-1 transition-transform">
          <div>
            <div className="flex items-center justify-between mb-6">
              <span className="border border-[#171717] bg-[#F4CF55] px-3 py-1 font-mono text-xs font-bold text-[#171717] uppercase shadow-[2px_2px_0_0_#171717]">
                PRIMARY PRACTICE SPECIALIZATION
              </span>
              <EducationDoodle className="w-14 h-14" />
            </div>

            <h3 className="font-display text-3xl sm:text-4xl font-bold text-[#171717] leading-snug">
              Education &amp; Independent Schools
            </h3>
            <p className="mt-3 text-sm sm:text-base text-[#404040] leading-relaxed max-w-xl font-sans">
              Dedicated institutional digital presence architecture for independent preparatory academies, K-12 schools, and universities. Decoupling admissions inquiry funnels from parent community utilities.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-[#171717] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <span className="font-mono text-xs font-bold text-[#171717]">
              Includes the interactive 4-Layer School Blueprint
            </span>
            <Link
              href="/industries/education"
              className="neo-btn-pink text-xs px-5 py-2.5 self-start sm:self-auto inline-flex items-center gap-1.5"
            >
              <span>Read education practice</span>
              <ArrowUpRight size={13} className="stroke-[2.5]" />
            </Link>
          </div>
        </div>

        {/* 4 Companion Sector Tiles */}
        {SECTORS.slice(1).map((s) => {
          const Doodle = s.doodle;

          return (
            <div
              key={s.slug}
              className="border-2 border-[#171717] bg-[#FFFFFF] p-6 sm:p-8 shadow-[5px_5px_0_0_#171717] flex flex-col justify-between group hover:-translate-y-1 transition-transform"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="border border-[#171717] px-2.5 py-0.5 font-mono text-[10px] font-bold text-[#171717] uppercase tracking-wider shadow-[1px_1px_0_0_#171717]"
                    style={{ backgroundColor: s.color }}
                  >
                    {s.eyebrow}
                  </span>
                  <Doodle className="w-11 h-11" />
                </div>

                <h3 className="font-display text-2xl font-bold text-[#171717]">
                  {s.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#404040] leading-relaxed font-sans">
                  {s.tagline}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#171717] flex items-center justify-between">
                <span className="font-mono text-[10px] font-bold text-[#666666] uppercase">
                  {s.accentWord} Focus
                </span>
                <Link
                  href={`/industries/${s.slug}`}
                  className="font-display font-bold text-xs text-[#171717] hover:text-[#ED83A8] inline-flex items-center gap-1 hover:underline"
                >
                  <span>Practice guide</span>
                  <ArrowUpRight size={13} className="stroke-[2.5]" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
