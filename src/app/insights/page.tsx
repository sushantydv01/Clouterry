"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import { ARTICLES } from "@/data/articles";
import { ArrowUpRight, BookOpen, Clock, Tag } from "lucide-react";

const CATEGORIES = [
  "All Perspectives",
  "Digital Strategy & Architecture",
  "Institutional Education",
  "Web Engineering",
  "Brand & Identity",
  "Professional Services",
  "Digital Management",
];

export default function InsightsArchivePage() {
  const [selectedCategory, setSelectedCategory] = useState("All Perspectives");

  const filteredArticles = selectedCategory === "All Perspectives"
    ? ARTICLES
    : ARTICLES.filter((a) => a.category === selectedCategory);

  const featuredArticle = ARTICLES[0];

  return (
    <div className="flex flex-col min-h-screen bg-[#F8F6EF]">
      <Container>
        <PageHeader
          badge="INSIGHTS & PERSPECTIVES"
          eyebrow="FIRM Editorial Journal"
          title="Architectural thinking for digital presence."
          description="In-depth monographs, engineering analyses, and institutional field guides exploring how unified brand, technology, and content systems compound enterprise value."
        />
      </Container>

      {/* ── Featured Monograph Hero ── */}
      <Section background="cream">
        <div className="max-w-5xl mx-auto text-left">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block border border-[#171717] bg-[#ED83A8] px-3 py-0.5 font-mono text-xs uppercase tracking-wider text-[#171717] font-bold shadow-[2px_2px_0_0_#171717]">
              FEATURED MONOGRAPH // LATEST PUBLICATION
            </span>
          </div>

          <div className="grid gap-8 lg:grid-cols-12 lg:items-center border border-[#171717] bg-[#FFFFFF] p-6 sm:p-10 shadow-[6px_6px_0_0_#171717]">
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-[#171717] mb-3">
                <span className="border border-[#171717] bg-[#F4CF55] px-2 py-0.5 font-bold shadow-[1px_1px_0_0_#171717]">{featuredArticle.category}</span>
                <span>•</span>
                <span className="font-medium">{featuredArticle.date}</span>
                <span>•</span>
                <span className="inline-flex items-center gap-1 border border-[#171717] bg-[#A6D8A1] px-2 py-0.5 font-bold shadow-[1px_1px_0_0_#171717]">
                  <Clock size={11} className="stroke-[2.5]" />
                  <span>{featuredArticle.readingTime}</span>
                </span>
              </div>

              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#171717] leading-snug">
                <Link href={`/insights/${featuredArticle.slug}`} className="hover:underline">
                  {featuredArticle.title}
                </Link>
              </h2>

              <p className="mt-4 text-xs sm:text-sm text-[#404040] leading-relaxed">
                {featuredArticle.subtitle}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4 pt-4 border-t border-[#171717]">
                <Link
                  href={`/insights/${featuredArticle.slug}`}
                  className="neo-btn-pink text-xs px-5 py-2.5"
                >
                  <span>Read full monograph</span>
                  <ArrowUpRight size={13} />
                </Link>
                <span className="font-mono text-xs text-[#171717] font-semibold">
                  By {featuredArticle.author}
                </span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <Link href={`/insights/${featuredArticle.slug}`} className="block border border-[#171717] bg-[#F8F6EF] p-1.5 shadow-[4px_4px_0_0_#171717] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-transform">
                <Image
                  src={featuredArticle.heroImage}
                  alt={featuredArticle.title}
                  width={1200}
                  height={675}
                  priority
                  className="w-full h-auto object-cover border border-[#171717]"
                />
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* ── Category Filter & Article Exhibition ── */}
      <Section background="white">
        <div className="max-w-5xl mx-auto text-left">
          {/* Category Pills */}
          <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-[#171717]">
            <span className="font-mono text-xs font-bold text-[#171717] mr-2 flex items-center gap-1.5">
              <Tag size={13} className="stroke-[2.5]" />
              <span>Filter:</span>
            </span>
            {CATEGORIES.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-mono border border-[#171717] transition-all ${
                    active
                      ? "bg-[#F4CF55] text-[#171717] font-bold shadow-[3px_3px_0_0_#171717] -translate-x-0.5 -translate-y-0.5"
                      : "bg-[#FFFFFF] text-[#171717] font-medium shadow-[2px_2px_0_0_#171717] hover:bg-[#F8F6EF]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Article List Grid */}
          <div className="grid gap-6 md:grid-cols-2">
            {filteredArticles.map((article, idx) => {
              const tagColors = ["bg-[#ED83A8]", "bg-[#F4CF55]", "bg-[#A6D8A1]"];
              const tagColor = tagColors[idx % tagColors.length];

              return (
                <article
                  key={article.slug}
                  className="neo-card p-6 shadow-[4px_4px_0_0_#171717] flex flex-col justify-between"
                >
                  <div>
                    <div className="overflow-hidden border border-[#171717] bg-[#F8F6EF] mb-4 shadow-[2px_2px_0_0_#171717]">
                      <Link href={`/insights/${article.slug}`}>
                        <Image
                          src={article.heroImage}
                          alt={article.title}
                          width={1200}
                          height={675}
                          className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-300"
                        />
                      </Link>
                    </div>

                    <div className="flex items-center gap-2 font-mono text-[10px] text-[#171717] mb-2">
                      <span className={`border border-[#171717] ${tagColor} px-2 py-0.5 font-bold uppercase shadow-[1px_1px_0_0_#171717]`}>
                        {article.category}
                      </span>
                      <span>•</span>
                      <span className="font-medium">{article.readingTime}</span>
                    </div>

                    <h3 className="font-display text-xl font-bold text-[#171717] hover:underline leading-snug">
                      <Link href={`/insights/${article.slug}`}>
                        {article.title}
                      </Link>
                    </h3>

                    <p className="mt-2.5 text-xs sm:text-sm text-[#404040] leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#171717] flex items-center justify-between text-xs">
                    <span className="font-mono text-[11px] font-semibold text-[#171717]">
                      {article.date}
                    </span>
                    <Link
                      href={`/insights/${article.slug}`}
                      className="neo-btn text-xs px-3.5 py-1.5"
                    >
                      <span>Read monograph</span>
                      <ArrowUpRight size={12} />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Editorial Dispatch Note */}
          <div className="mt-16 p-8 border border-[#171717] bg-[#A6D8A1] shadow-[6px_6px_0_0_#171717] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 border border-[#171717] bg-[#FFFFFF] px-2.5 py-0.5 font-mono text-xs font-bold text-[#171717] uppercase shadow-[2px_2px_0_0_#171717] mb-2">
                <BookOpen size={13} className="stroke-[2.5]" />
                <span>QUARTERLY EDITORIAL DISPATCH</span>
              </div>
              <h4 className="font-display text-2xl font-bold text-[#171717]">
                Syndicate FIRM field perspectives via RSS
              </h4>
              <p className="mt-1 text-xs sm:text-sm text-[#171717] font-medium max-w-xl">
                We publish quarterly architectural monographs on digital presence, institutional strategy, and Next.js engineering. All content is distributed openly via standard RSS 2.0.
              </p>
            </div>
            <a
              href="/rss.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="neo-btn text-xs px-5 py-2.5 shrink-0"
            >
              <span>Subscribe to RSS Feed</span>
              <ArrowUpRight size={12} />
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
}
