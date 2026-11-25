import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import PresenceMatrix from "@/components/interactive/PresenceMatrix";
import TheThreadMini from "@/components/thread/TheThreadMini";
import {
  DoodleBrandSpecimen,
  DoodleWebPlatform,
  DoodleEditorialCamera,
  DoodleOrganicGrowth,
  DoodleAdvisoryHelm,
  DoodleBadgeStamp,
  DoodleHandStar,
} from "@/components/illustrations/ThreadDoodles";
import { SERVICES } from "@/data/services";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Capabilities — Five Connected Digital Presence Disciplines | FIRM",
  description:
    "Explore FIRM's five core service divisions: Brand & Identity, Web & Technology, Social Media & Content, Marketing & Growth, and Digital Management.",
};

export default function CapabilitiesDirectoryPage() {
  const getNodeColor = (idx: number) => {
    const colors = ["#FF5C40", "#3875FF", "#FFB800", "#10B981", "#FF5C9D"];
    return colors[idx % colors.length];
  };

  const getDoodleIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <DoodleBrandSpecimen size={56} />;
      case 1:
        return <DoodleWebPlatform size={56} />;
      case 2:
        return <DoodleEditorialCamera size={56} />;
      case 3:
        return <DoodleOrganicGrowth size={56} />;
      case 4:
        return <DoodleAdvisoryHelm size={56} />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#000000] text-white">
      <Container>
        <PageHeader
          badge="CAPABILITIES"
          eyebrow="Continuous Architecture"
          title="Five connected disciplines."
          description="We do not sell piecemeal agency hours. We engineer, deploy, and steward five connected capabilities that turn your digital surface into an enduring competitive asset."
        >
          <div className="pt-2 max-w-md">
            <TheThreadMini showLabels={true} size="md" />
          </div>
        </PageHeader>
      </Container>

      {/* Signature Interactive Tool: The Presence Matrix */}
      <Section background="black" padding="tight">
        <PresenceMatrix />
      </Section>

      {/* Division Directory on Warm Paper Canvas for Visual Relief */}
      <Section background="warm-paper" padding="spacious">
        <div className="max-w-5xl mx-auto text-left space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 pb-4 border-b border-black/10">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <DoodleBadgeStamp text="PRACTICE SPECIFICATIONS" color="#FFC700" />
                <DoodleHandStar color="#FF90E8" size={20} />
              </div>
              <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#121214] tracking-tight">
                Explore individual capability specifications
              </h2>
            </div>
            <span className="px-3.5 py-1.5 rounded-full bg-black text-white text-xs font-mono font-bold">
              5 Dedicated Practices
            </span>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {SERVICES.map((s, idx) => {
              const nodeColor = getNodeColor(idx);
              return (
                <div
                  key={s.slug}
                  className="firm-warm-card p-6 sm:p-8 flex flex-col justify-between group hover:border-black/30 transition-all border-2 border-black/10"
                >
                  <div className="space-y-5">
                    <div className="flex items-center justify-between pb-3 border-b border-black/10">
                      <div className="flex items-center gap-2">
                        <span
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: nodeColor }}
                        />
                        <span className="text-xs font-mono font-bold text-[#121214]">
                          {s.code}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-full bg-[#F8F6F0] border border-black/10 text-[11px] font-mono text-black/60">
                          {s.timeframe}
                        </span>
                        {getDoodleIcon(idx)}
                      </div>
                    </div>

                    <h3 className="font-display text-2xl font-bold text-[#121214] group-hover:text-[#FF90E8] transition-colors">
                      {s.title}
                    </h3>

                    <p className="text-sm text-black/70 leading-relaxed font-sans">
                      {s.subtitle}
                    </p>

                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {s.deliverables[0]?.items.slice(0, 3).map((item) => (
                        <span
                          key={item}
                          className="px-2.5 py-1 rounded-full bg-[#F8F6F0] text-[11px] text-black/70 border border-black/10 font-mono"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-black/10 flex items-center justify-between">
                    <span className="text-xs text-black/50 font-mono">Zero vendor seams</span>
                    <Link
                      href={`/capabilities/${s.slug}`}
                      className="text-xs font-bold text-[#121214] group-hover:text-[#FF90E8] group-hover:underline inline-flex items-center gap-1"
                    >
                      <span>Read specifications</span>
                      <ArrowUpRight size={13} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Section>
    </div>
  );
}
