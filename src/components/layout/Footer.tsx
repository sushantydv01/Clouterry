import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import StickerMark from "@/components/illustrations/StickerMark";
import { CAPABILITY_NODES } from "@/lib/threadTheme";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#F8F6EF]/12 bg-[#171717] text-[#F8F6EF] relative overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-14 pt-16 pb-12 space-y-14">
        {/* Top Spread: Calm Architectural Identity + Clean 3-Column Directory */}
        <div className="grid gap-12 lg:grid-cols-12 items-start">
          <div className="lg:col-span-5 space-y-6">
            <Logo theme="dark" variant="full" />

            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-medium tracking-[-0.025em] text-[#F8F6EF] max-w-md leading-[1.15]">
              A unified digital presence studio for organizations that compound.
            </h2>

            <p className="text-[15px] text-[#D5D2C7] max-w-md leading-relaxed font-sans font-normal">
              Brand identity, web engineering, documentary media, organic search visibility, and continuous stewardship governed under one senior standard.
            </p>

            <div className="pt-2 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-sans text-[#A6D8A1]">
                <span className="h-2 w-2 rounded-full bg-[#A6D8A1]" aria-hidden="true" />
                <span>Accepting Q1 partner briefings</span>
              </div>
              <div>
                <Link
                  href="/connect"
                  className="firm-btn-primary text-sm"
                >
                  <span>Start a project</span>
                  <ArrowUpRight size={15} className="stroke-[2]" />
                </Link>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-10 lg:pl-8 text-[15px]">
            <div className="space-y-4">
              <h3 className="text-sm font-display font-semibold text-[#F8F6EF] tracking-tight">
                Disciplines
              </h3>
              <ul className="space-y-3">
                {CAPABILITY_NODES.map((node) => (
                  <li key={node.slug}>
                    <Link
                      href={`/capabilities/${node.slug}`}
                      className="text-[#D5D2C7] hover:text-[#F8F6EF] transition-colors inline-flex items-center gap-2"
                    >
                      <span
                        className="h-1.5 w-1.5 rounded-full shrink-0"
                        style={{ backgroundColor: node.color }}
                        aria-hidden="true"
                      />
                      <span>
                        {node.name === "Digital Management & Consulting"
                          ? "Digital Advisory"
                          : node.name === "Social Media & Content"
                          ? "Social & Content"
                          : node.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-display font-semibold text-[#F8F6EF] tracking-tight">
                Practice areas
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/industries/education" className="text-[#D5D2C7] hover:text-[#F8F6EF] transition-colors">
                    Education &amp; Schools
                  </Link>
                </li>
                <li>
                  <Link href="/industries/healthcare" className="text-[#D5D2C7] hover:text-[#F8F6EF] transition-colors">
                    Healthcare Clinics
                  </Link>
                </li>
                <li>
                  <Link href="/industries/professional" className="text-[#D5D2C7] hover:text-[#F8F6EF] transition-colors">
                    Professional Services
                  </Link>
                </li>
                <li>
                  <Link href="/industries/retail" className="text-[#D5D2C7] hover:text-[#F8F6EF] transition-colors">
                    Boutique Retail
                  </Link>
                </li>
                <li>
                  <Link href="/industries/startups" className="text-[#D5D2C7] hover:text-[#F8F6EF] transition-colors">
                    Startups &amp; Ventures
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1 space-y-4">
              <h3 className="text-sm font-display font-semibold text-[#F8F6EF] tracking-tight">
                Studio &amp; index
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/work" className="text-[#D5D2C7] hover:text-[#F8F6EF] transition-colors">
                    Concept Studies
                  </Link>
                </li>
                <li>
                  <Link href="/firm" className="text-[#D5D2C7] hover:text-[#F8F6EF] transition-colors">
                    Studio Philosophy
                  </Link>
                </li>
                <li>
                  <Link href="/insights" className="text-[#D5D2C7] hover:text-[#F8F6EF] transition-colors">
                    Field Monographs
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-[#D5D2C7] hover:text-[#F8F6EF] transition-colors">
                    Operational FAQ
                  </Link>
                </li>
                <li>
                  <a href="/rss.xml" className="text-[#D5D2C7] hover:text-[#F8F6EF] transition-colors">
                    Perspectives RSS
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Baseline Bar with Crisp S09 Loop Stamp */}
        <div className="pt-8 border-t border-[#F8F6EF]/12 flex flex-col sm:flex-row sm:items-center justify-between gap-5 text-xs text-[#ACA89E]">
          <div className="flex items-center gap-3.5">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#F8F6EF]">
              <StickerMark name="s09-06-loop-ribbon" size={22} />
            </span>
            <span>&copy; {currentYear} FIRM Studio. One continuous thread across five disciplines.</span>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[#D5D2C7]">
            <Link href="/capabilities" className="hover:text-[#F8F6EF] transition-colors whitespace-nowrap">
              Disciplines
            </Link>
            <Link href="/work" className="hover:text-[#F8F6EF] transition-colors whitespace-nowrap">
              Concept Studies
            </Link>
            <Link href="/connect" className="text-[#ED83A8] font-medium hover:underline whitespace-nowrap">
              Start a project
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
