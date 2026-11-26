"use client";

import React, { useState } from "react";
import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import MonographCoverArt from "@/components/illustrations/MonographCoverArt";
import { ARTICLES } from "@/data/articles";
import { ArrowUpRight, Clock } from "lucide-react";

const CATEGORIES = [
  "All Perspectives",
  "Digital Strategy & Architecture",
  "Institutional Education",
  "Web Engineering",
  "Brand & Identity",
  "Professional Services",
  "Digital Management",
];

/**
 * Editorial Publication Index:
 * Leads with featured monograph spread on Warm Cream followed by categorized open essays.
 */
export default function InsightsFilterView() {
  const [selectedCategory, setSelectedCategory] = useState("All Perspectives");

  const featuredArticle = ARTICLES[0];
  const isAll = selectedCategory === "All Perspectives";

  const remainingArticles = isAll
    ? ARTICLES.slice(1)
    : ARTICLES.filter((a) => a.category === selectedCategory);

  const highlightPair = isAll ? remainingArticles.slice(0, 2) : remainingArticles;
  const archiveTrio = isAll ? remainingArticles.slice(2) : [];

  return (
    <div className="flex flex-col min-h-screen bg-[#171717] text-[#F8F6EF]">
      <Container size="wide">
        <PageHeader
          kicker="FIRM Editorial Monographs"
          title="Architectural essays for enduring platforms."
          description="Field monographs examining design token governance, independent school admissions systems, Next.js software architecture, and long-term digital custody."
        >
          <div className="flex flex-wrap items-center gap-2 pt-2">
            {CATEGORIES.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 text-xs sm:text-sm font-display font-medium rounded-full transition-colors cursor-pointer whitespace-nowrap border ${
                    active
                      ? "bg-[#F8F6EF] text-[#171717] border-[#F8F6EF]"
                      : "bg-[#1D1D20] text-[#D5D2C7] border-[#F8F6EF]/14 hover:text-[#F8F6EF] hover:border-[#F8F6EF]/35"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </PageHeader>
      </Container>

      {/* Featured Issue Masthead on Warm Cream Paper */}
      {isAll && (
        <Section background="warm-paper" containerSize="wide" padding="normal">
          <article className="grid gap-10 lg:gap-14 lg:grid-cols-12 items-center text-left group">
            <div className="lg:col-span-6 space-y-5">
              <div className="flex flex-wrap items-center gap-3 text-xs font-sans text-[#3F3D38]">
                <span className="px-2.5 py-1 rounded-full bg-[#ED83A8] text-[#171717] font-semibold">
                  Featured Essay
                </span>
                <span>{featuredArticle.category}</span>
                <span>·</span>
                <span className="inline-flex items-center gap-1 font-mono">
                  <Clock size={12} />
                  <span>{featuredArticle.readingTime}</span>
                </span>
              </div>

              <h2 className="font-display text-3xl sm:text-5xl font-medium tracking-[-0.025em] text-[#171717] leading-[1.06]">
                <Link
                  href={`/insights/${featuredArticle.slug}`}
                  className="group-hover:underline"
                >
                  {featuredArticle.title}
                </Link>
              </h2>

              <p className="text-base sm:text-lg text-[#3F3D38] leading-relaxed font-sans">
                {featuredArticle.subtitle}
              </p>

              <div className="pt-4 border-t border-[#171717]/15 flex flex-wrap items-center justify-between gap-4">
                <div className="text-xs font-sans text-[#3F3D38]">
                  <span className="text-[#171717] font-medium block">
                    {featuredArticle.author}
                  </span>
                  <span className="font-mono">{featuredArticle.date}</span>
                </div>
                <Link
                  href={`/insights/${featuredArticle.slug}`}
                  className="firm-btn-dark text-sm"
                >
                  <span>Read monograph</span>
                  <ArrowUpRight size={15} />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <Link
                href={`/insights/${featuredArticle.slug}`}
                className="block relative aspect-[16/9] rounded-2xl overflow-hidden border border-[#171717]/15 bg-[#171717] shadow-[0_24px_48px_rgba(23,23,23,0.12)]"
              >
                <MonographCoverArt
                  slug={featuredArticle.slug}
                  priority
                  loading="eager"
                  sizes="(max-width: 1024px) 100vw, 48vw"
                />
              </Link>
            </div>
          </article>
        </Section>
      )}

      {/* Publication Spread */}
      <Section background="charcoal" containerSize="wide" padding="spacious">
        <div className="w-full space-y-16 text-left">
          <div className="grid gap-10 lg:grid-cols-2">
            {highlightPair.map((article) => (
              <article key={article.slug} className="space-y-5 group flex flex-col justify-between">
                <div className="space-y-5">
                  <Link
                    href={`/insights/${article.slug}`}
                    className="block relative aspect-[16/9] rounded-2xl overflow-hidden bg-[#121214] border border-[#F8F6EF]/14"
                  >
                    <MonographCoverArt
                      slug={article.slug}
                      loading="eager"
                      sizes="(max-width: 1024px) 100vw, 48vw"
                    />
                  </Link>

                  <div className="space-y-2.5">
                    <div className="flex flex-wrap items-center gap-2 text-xs font-sans text-[#ACA89E]">
                      <span className="text-[#ED83A8] font-medium">{article.category}</span>
                      <span>·</span>
                      <span className="font-mono">{article.readingTime}</span>
                      <span>·</span>
                      <span>{article.date}</span>
                    </div>

                    <h2 className="font-display text-2xl sm:text-3xl font-medium text-[#F8F6EF] group-hover:text-[#F4CF55] transition-colors leading-snug">
                      <Link href={`/insights/${article.slug}`}>{article.title}</Link>
                    </h2>

                    <p className="text-base text-[#D5D2C7] leading-relaxed font-sans">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#F8F6EF]/12 flex items-center justify-between">
                  <span className="text-xs font-sans text-[#ACA89E]">{article.author}</span>
                  <Link
                    href={`/insights/${article.slug}`}
                    className="font-display text-sm font-medium text-[#F8F6EF] group-hover:text-[#ED83A8] inline-flex items-center gap-1"
                  >
                    <span>Read essay</span>
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Archival Trio */}
          {archiveTrio.length > 0 && (
            <div className="pt-12 border-t border-[#F8F6EF]/14 space-y-8">
              <div className="flex items-center justify-between">
                <h2 className="font-display text-xl sm:text-2xl font-medium text-[#F8F6EF]">
                  From the field monograph archive
                </h2>
                <a href="/rss.xml" className="text-xs font-mono text-[#ED83A8] hover:underline">
                  Subscribe via RSS
                </a>
              </div>

              <div className="grid gap-8 md:grid-cols-3">
                {archiveTrio.map((article) => (
                  <article key={article.slug} className="space-y-4 group flex flex-col justify-between">
                    <div className="space-y-4">
                      <Link
                        href={`/insights/${article.slug}`}
                        className="block relative aspect-[16/9] rounded-xl overflow-hidden bg-[#121214] border border-[#F8F6EF]/12"
                      >
                        <MonographCoverArt
                          slug={article.slug}
                          loading="eager"
                          sizes="(max-width: 1024px) 100vw, 31vw"
                        />
                      </Link>
                      <div className="space-y-2">
                        <span className="text-xs font-sans font-medium text-[#A6D8A1] block">
                          {article.category} · {article.readingTime}
                        </span>
                        <h3 className="font-display text-xl font-medium text-[#F8F6EF] group-hover:text-[#ED83A8] transition-colors leading-snug">
                          <Link href={`/insights/${article.slug}`}>{article.title}</Link>
                        </h3>
                        <p className="text-sm text-[#D5D2C7] leading-relaxed font-sans line-clamp-3">
                          {article.excerpt}
                        </p>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-[#F8F6EF]/10 flex items-center justify-between text-xs text-[#ACA89E]">
                      <span>{article.date}</span>
                      <Link
                        href={`/insights/${article.slug}`}
                        className="font-display text-sm font-medium text-[#F8F6EF] group-hover:text-[#ED83A8] inline-flex items-center gap-1"
                      >
                        <span>Read</span>
                        <ArrowUpRight size={13} />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}
        </div>
      </Section>
    </div>
  );
}
