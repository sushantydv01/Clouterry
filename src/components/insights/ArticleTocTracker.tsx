"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface TOCItem {
  id: string;
  title: string;
}

interface RelatedCap {
  href: string;
  title: string;
}

interface ArticleTocTrackerProps {
  tableOfContents: TOCItem[];
  relatedCapabilities: RelatedCap[];
}

/**
 * Progressive-enhancement sticky Contents tracker for `/insights/[slug]`:
 * Highlights active chapter while scrolling via IntersectionObserver without any scroll hijacking.
 */
export default function ArticleTocTracker({
  tableOfContents,
  relatedCapabilities,
}: ArticleTocTrackerProps) {
  const [activeId, setActiveId] = useState<string>(tableOfContents[0]?.id || "");

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-article-section]"));
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("data-article-section");
            if (id) setActiveId(id);
          }
        }
      },
      {
        rootMargin: "-20% 0px -65% 0px",
        threshold: 0.05,
      }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, [tableOfContents]);

  return (
    <aside className="lg:col-span-4 hidden lg:block lg:sticky lg:top-28 space-y-8 pr-6 border-r border-[#171717]/14">
      <div className="space-y-3">
        <span className="font-sans text-xs font-semibold text-[#3F3D38] block">
          In this essay
        </span>
        <nav className="space-y-1.5 text-sm font-sans" aria-label="Article table of contents">
          {tableOfContents.map((item) => {
            const active = activeId === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setActiveId(item.id)}
                className={`flex items-start gap-2.5 py-1.5 transition-colors ${
                  active
                    ? "text-[#171717] font-semibold"
                    : "text-[#3F3D38]/75 hover:text-[#171717]"
                }`}
              >
                <span
                  className={`mt-2 h-1.5 w-1.5 rounded-full shrink-0 transition-colors ${
                    active ? "bg-[#ED83A8]" : "bg-[#171717]/20"
                  }`}
                  aria-hidden="true"
                />
                <span>{item.title}</span>
              </a>
            );
          })}
        </nav>
      </div>

      <div className="pt-6 border-t border-[#171717]/14 space-y-3">
        <span className="font-sans text-xs font-semibold text-[#3F3D38] block">
          Connected disciplines
        </span>
        <div className="space-y-1.5">
          {relatedCapabilities.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="flex items-center justify-between text-sm text-[#171717] font-medium hover:underline py-1"
            >
              <span>{c.title}</span>
              <ArrowUpRight size={13} />
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}
