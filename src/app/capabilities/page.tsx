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
    const colors = ["bg-[#FF90E8]", "bg-[#55D6BE]", "bg-[#F1F333]", "bg-[#FF90E8]", "bg-[#55D6BE]"];
    return colors[idx % colors.length];
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F4F4F0]">
      <Container>
        <PageHeader
          badge="CAPABILITIES"
          eyebrow="Service Directory"
          title="Five connected disciplines."
          description="We do not sell piecemeal agency hours. We engineer, deploy, and steward five connected capabilities that turn your digital surface into an enduring competitive asset."
        />
      </Container>

      {/* Signature Interactive Tool: The Presence Matrix */}
      <Section background="surface">
        <PresenceMatrix />
      </Section>

      {/* Division Directory Cards */}
      <Section background="page">
        <div className="max-w-5xl mx-auto text-left">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8 gap-3">
            <div>
              <span className="inline-block border border-black bg-[#F1F333] px-3 py-0.5 font-mono text-xs uppercase tracking-wider text-black font-bold shadow-[2px_2px_0_0_#000]">
                Detailed Division Guides
              </span>
              <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-black">
                Explore individual capability specifications
              </h2>
            </div>
            <span className="border border-black bg-white px-3 py-1 font-mono text-xs font-bold text-black shadow-[2px_2px_0_0_#000]">
              5 Dedicated Practices
            </span>
          </div>

          <div className="space-y-5">
            {SERVICES.map((s, idx) => (
              <div
                key={s.slug}
                className="neo-card p-6 sm:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6 shadow-[4px_4px_0_0_#000]"
              >
                <div className="max-w-2xl">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`border border-black ${getAccentBadge(idx)} px-2.5 py-0.5 font-mono text-xs font-bold text-black shadow-[1px_1px_0_0_#000]`}>
                      {s.code}
                    </span>
                    <span className="border border-black bg-[#F4F4F0] px-2 py-0.5 font-mono text-xs text-black font-medium">
                      {s.timeframe}
                    </span>
                  </div>
                  <h3 className="mt-2 font-display text-2xl font-bold text-black">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#2D2A26] leading-relaxed">
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
