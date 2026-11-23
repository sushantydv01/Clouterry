import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import { INDUSTRIES } from "@/data/industries";
import { ArrowUpRight, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Professional Services — Legal & Advisory Digital Presence | FIRM",
  description:
    "Intellectual prestige, editorial thought leadership publishing, and practice area architecture for law firms, accounting practices, and consultancies.",
};

export default function ProfessionalServicesIndustryPage() {
  const sector = INDUSTRIES.find((i) => i.slug === "professional") || INDUSTRIES[2];

  return (
    <div className="flex flex-col min-h-screen bg-[#F4F4F0]">
      <Container>
        <PageHeader
          badge={sector.eyebrow}
          eyebrow="Legal & Financial Partnerships"
          title={sector.title}
          description={sector.description}
        >
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/connect"
              className="neo-btn text-xs px-5 py-2.5"
            >
              <span>Schedule a partnership briefing</span>
              <ArrowUpRight size={13} />
            </Link>
            <Link
              href="/work/vance-legal"
              className="neo-btn-white text-xs px-5 py-2.5"
            >
              View Vance &amp; Partners Case Study
            </Link>
          </div>
        </PageHeader>
      </Container>

      {/* Challenges */}
      <Section background="surface">
        <div className="max-w-4xl mx-auto text-left">
          <span className="inline-block border border-black bg-[#FF90E8] px-3 py-0.5 font-mono text-xs uppercase tracking-wider text-black font-bold shadow-[2px_2px_0_0_#000]">
            Prestige Challenges
          </span>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold tracking-tight text-black mb-8">
            Why generic corporate templates fail prestigious practices
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {sector.challenges.map((c, idx) => {
              const tagColors = ["bg-[#FF90E8]", "bg-[#F1F333]", "bg-[#55D6BE]"];
              return (
                <div
                  key={c.title}
                  className="neo-card p-6 shadow-[4px_4px_0_0_#000] flex flex-col justify-between"
                >
                  <div>
                    <span className={`inline-block border border-black ${tagColors[idx % tagColors.length]} px-2 py-0.5 font-mono text-[10px] text-black font-bold uppercase mb-3`}>
                      Challenge 0{idx + 1}
                    </span>
                    <h3 className="font-display text-base font-bold text-black">
                      {c.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-[#2D2A26] leading-relaxed">
                      {c.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Deliverables */}
      <Section background="page">
        <div className="max-w-4xl mx-auto text-left">
          <span className="inline-block border border-black bg-[#F1F333] px-3 py-0.5 font-mono text-xs uppercase tracking-wider text-black font-bold shadow-[2px_2px_0_0_#000]">
            FIRM Professional Framework
          </span>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold tracking-tight text-black mb-8">
            Tangible deliverables for professional partnerships
          </h2>

          <div className="grid gap-4 sm:grid-cols-2">
            {sector.deliverables.map((deliv) => (
              <div
                key={deliv}
                className="p-4 border border-black bg-white shadow-[3px_3px_0_0_#000] flex items-center gap-3 text-xs sm:text-sm font-semibold text-black"
              >
                <div className="w-6 h-6 rounded-none border border-black bg-[#F1F333] flex items-center justify-center shrink-0">
                  <Check size={14} className="text-black stroke-[3]" />
                </div>
                <span>{deliv}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section background="surface">
        <div className="max-w-3xl mx-auto text-left">
          <span className="inline-block border border-black bg-[#55D6BE] px-3 py-0.5 font-mono text-xs uppercase tracking-wider text-black font-bold shadow-[2px_2px_0_0_#000]">
            Partnership FAQ
          </span>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold tracking-tight text-black mb-6">
            Frequently asked questions by senior partners
          </h2>

          <div className="space-y-4">
            {sector.faqs.map((faq) => (
              <div
                key={faq.question}
                className="p-5 border border-black bg-white shadow-[3px_3px_0_0_#000]"
              >
                <h3 className="font-display text-base font-bold text-black">
                  {faq.question}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#2D2A26] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section background="page">
        <div className="max-w-3xl mx-auto text-center border border-black bg-[#F1F333] p-8 sm:p-12 shadow-[8px_8px_0_0_#000]">
          <span className="inline-block border border-black bg-white px-3 py-1 font-mono text-xs font-bold text-black shadow-[2px_2px_0_0_#000]">
            PROFESSIONAL INTAKE
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-black leading-tight">
            Reflect the true intellectual stature of your practice
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-[#2D2A26] font-medium leading-relaxed max-w-lg mx-auto">
            Discuss an editorial publishing and practice directory transformation with our partners.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Link
              href="/connect"
              className="neo-btn text-xs px-6 py-3 w-full sm:w-auto"
            >
              <span>Submit partnership briefing</span>
              <ArrowUpRight size={13} />
            </Link>
            <Link
              href="/industries"
              className="neo-btn-white text-xs px-6 py-3 w-full sm:w-auto"
            >
              View all industry sectors
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
