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

export default function InsightsFilterView() {
  const [selectedCategory, setSelectedCategory] = useState("All Perspectives");

  const filteredArticles =
    selectedCategory === "All Perspectives"
      ? ARTICLES
      : ARTICLES.filter((a) => a.category === selectedCategory);

  const featuredArticle = ARTICLES[0];

  return (
    <div className="flex flex-col min-h-screen bg-[#171717] text-[#F8F6EF]">
      <Container>
        <PageHeader
          badge="Insights & Perspectives"
          eyebrow="FIRM Editorial Monographs"
          title="Architectural essays for enduring platforms."
          description="Field guides and technical analyses examining how cohesive brand tokens, semantic Next.js software, and disciplined editorial content compound over decades."
        />
      </Container>

      {/* Featured Monograph */}
      <Section background="charcoal" padding="tight">
        <div className="max-w-6xl mx-auto text-left space-y-4">
          <span className="text-xs font-mono uppercase tracking-[0.14em] text-[#ED83A8] block">
            Featured Monograph · Latest Issue
          </span>

          <div className="p-6 sm:p-10 rounded-2xl bg-[#1E1E20] border border-[#F8F6EF]/12 grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono text-[#9C9990]">
                <span className="text-[#F4CF55]">{featuredArticle.category}</span>
                <span>&bull;</span>
                <span>{featuredArticle.date}</span>
                <span>&bull;</span>
                <span className="inline-flex items-center gap-1 text-[#A6D8A1]">
                  <Clock size={12} />
                  <span>{featuredArticle.readingTime}</span>
                </span>
              </div>

              <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-[#F8F6EF] leading-tight">
                <Link
                  href={`/insights/${featuredArticle.slug}`}
                  className="hover:text-[#ED83A8] transition-colors"
                >
                  {featuredArticle.title}
                </Link>
              </h2>

              <p className="text-sm text-[#C4C1B8] leading-relaxed font-sans">
                {featuredArticle.subtitle}
              </p>

              <div className="pt-4 border-t border-[#F8F6EF]/10 flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs font-mono text-[#9C9990]">
                  By {featuredArticle.author}
                </span>
                <Link
                  href={`/insights/${featuredArticle.slug}`}
                  className="firm-btn-primary text-xs sm:text-sm !py-2.5 !px-5"
                >
                  <span>Read monograph</span>
                  <ArrowUpRight size={14} className="stroke-[2.25]" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <Link
                href={`/insights/${featuredArticle.slug}`}
                className="block relative aspect-[16/9] rounded-xl overflow-hidden border border-[#F8F6EF]/12 bg-[#171717] hover:border-[#F8F6EF]/30 transition-colors"
              >
                <MonographCoverArt slug={featuredArticle.slug} />
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* Catalog & Filtering */}
      <Section background="charcoal" padding="normal" withBorder={false}>
        <div className="max-w-6xl mx-auto text-left space-y-8">
          <div className="flex flex-wrap items-center gap-2 pb-5 border-b border-[#F8F6EF]/12">
            {CATEGORIES.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 text-xs sm:text-sm font-display font-medium rounded-full transition-colors cursor-pointer whitespace-nowrap border ${
                    active
                      ? "bg-[#F8F6EF] text-[#171717] border-[#F8F6EF] font-semibold"
                      : "bg-[#1E1E20] text-[#C4C1B8] border-[#F8F6EF]/12 hover:text-[#F8F6EF] hover:border-[#F8F6EF]/25"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredArticles.map((article) => (
              <article
                key={article.slug}
                className="p-5 sm:p-6 rounded-2xl bg-[#1E1E20] border border-[#F8F6EF]/12 hover:border-[#F8F6EF]/26 transition-colors flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <Link
                    href={`/insights/${article.slug}`}
                    className="block relative aspect-[16/9] rounded-xl overflow-hidden bg-[#171717] border border-[#F8F6EF]/10"
                  >
                    <MonographCoverArt slug={article.slug} />
                  </Link>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-[11px] font-mono text-[#9C9990]">
                      <span className="text-[#ED83A8]">{article.category}</span>
                      <span>&bull;</span>
                      <span>{article.readingTime}</span>
                    </div>

                    <h3 className="font-display text-lg sm:text-xl font-bold text-[#F8F6EF] group-hover:text-[#ED83A8] transition-colors leading-snug">
                      <Link href={`/insights/${article.slug}`}>{article.title}</Link>
                    </h3>

                    <p className="text-xs sm:text-sm text-[#C4C1B8] leading-relaxed font-sans line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-[#F8F6EF]/10 flex items-center justify-between text-xs">
                  <span className="text-[#9C9990]">{article.date}</span>
                  <Link
                    href={`/insights/${article.slug}`}
                    className="font-display font-semibold text-[#F8F6EF] group-hover:text-[#ED83A8] inline-flex items-center gap-1 whitespace-nowrap"
                  >
                    <span>Read</span>
                    <ArrowUpRight size={13} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
