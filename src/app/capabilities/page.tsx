import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import PresenceMatrix from "@/components/interactive/PresenceMatrix";
import { SERVICES } from "@/data/services";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Capabilities — Five Connected Digital Presence Disciplines | FIRM",
  description:
    "Explore FIRM's five core service divisions: Brand & Identity, Web & Technology, Social Media & Content, Marketing & Growth, and Digital Management.",
};

export default function CapabilitiesDirectoryPage() {
  const getAccentBadge = (idx: number) => {
    const colors = ["bg-[#ED83A8]", "bg-[#A6D8A1]", "bg-[#F4CF55]", "bg-[#ED83A8]", "bg-[#A6D8A1]"];
    return colors[idx % colors.length];
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F8F6EF]">
      <Container>
        <PageHeader
          badge="CAPABILITIES"
          eyebrow="Service Directory"
          title="Five connected disciplines."
          description="We do not sell piecemeal agency hours. We engineer, deploy, and steward five connected capabilities that turn your digital surface into an enduring competitive asset."
        />
      </Container>

      {/* Signature Interactive Tool: The Presence Matrix */}
      <Section background="white">
        <PresenceMatrix />
      </Section>

      {/* Division Directory Cards */}
      <Section background="cream">
        <div className="max-w-5xl mx-auto text-left">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8 gap-4">
            <div>
              <span className="inline-block border border-[#171717] bg-[#F4CF55] px-3.5 py-1 font-mono text-xs uppercase tracking-wider text-[#171717] font-bold shadow-[2px_2px_0_0_#171717]">
                Detailed Division Guides
              </span>
              <h2 className="mt-2.5 font-display text-3xl sm:text-4xl font-bold text-[#171717]">
                Explore individual capability specifications
              </h2>
            </div>
            <span className="border border-[#171717] bg-white px-3.5 py-1.5 font-mono text-xs font-bold text-[#171717] shadow-[2px_2px_0_0_#171717]">
              5 Dedicated Practices
            </span>
          </div>

          <div className="space-y-6">
            {SERVICES.map((s, idx) => (
              <div
                key={s.slug}
                className="neo-card p-6 sm:p-9 flex flex-col md:flex-row md:items-center md:justify-between gap-6 shadow-[5px_5px_0_0_#171717]"
              >
                <div className="max-w-2xl">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className={`border border-[#171717] ${getAccentBadge(idx)} px-3 py-0.5 font-mono text-xs font-bold text-[#171717] shadow-[1px_1px_0_0_#171717]`}>
                      {s.code}
                    </span>
                    <span className="border border-[#171717] bg-[#F8F6EF] px-2.5 py-0.5 font-mono text-xs text-[#171717] font-medium">
                      {s.timeframe}
                    </span>
                  </div>
                  <h3 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-[#171717]">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#3A3835] leading-relaxed font-sans">
                    {s.subtitle}
                  </p>
                </div>

                <Link
                  href={`/capabilities/${s.slug}`}
                  className="neo-btn text-xs px-5 py-2.5 shrink-0 self-start md:self-auto"
                >
                  <span>Read specifications</span>
                  <ArrowUpRight size={13} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
