"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import { ARTICLES } from "@/data/articles";
import { ArrowUpRight, Clock, Tag } from "lucide-react";

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
    <div className="flex flex-col min-h-screen bg-[#000000] text-white">
      <Container>
        <PageHeader
          badge="INSIGHTS & PERSPECTIVES"
          eyebrow="FIRM Editorial Journal"
          title="Architectural thinking for digital presence."
          description="In-depth monographs, engineering analyses, and institutional field guides exploring how unified brand, technology, and content systems compound enterprise value."
        />
      </Container>

      {/* Featured Monograph Hero */}
      <Section background="black" padding="tight">
        <div className="max-w-5xl mx-auto text-left space-y-4">
          <span className="inline-block px-3 py-1 rounded-full bg-[#FF90E8]/20 border border-[#FF90E8]/30 text-xs font-semibold text-[#FF90E8]">
            Featured Monograph &bull; Latest Publication
          </span>

          <div className="gumroad-card p-6 sm:p-10 border-white/10 grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-2 text-xs text-white/50">
                <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-white font-medium">
                  {featuredArticle.category}
                </span>
                <span>•</span>
                <span>{featuredArticle.date}</span>
                <span>•</span>
                <span className="inline-flex items-center gap-1 text-[#10B981]">
                  <Clock size={11} />
                  <span>{featuredArticle.readingTime}</span>
                </span>
              </div>

              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-snug">
                <Link
                  href={`/insights/${featuredArticle.slug}`}
                  className="hover:text-[#FF90E8] transition-colors"
                >
                  {featuredArticle.title}
                </Link>
              </h2>

              <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-sans">
                {featuredArticle.subtitle}
              </p>

              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-4">
                <Link
                  href={`/insights/${featuredArticle.slug}`}
                  className="gumroad-btn-pink text-xs sm:text-sm font-bold !py-2.5 !px-5"
                >
                  <span>Read monograph</span>
                  <ArrowUpRight size={14} className="stroke-[2.5]" />
                </Link>
                <span className="text-xs text-white/50 font-medium">
                  By {featuredArticle.author}
                </span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <Link
                href={`/insights/${featuredArticle.slug}`}
                className="block rounded-xl overflow-hidden border border-white/10 bg-[#141416] p-1.5 hover:border-white/30 transition-all group"
              >
                <Image
                  src={featuredArticle.heroImage}
                  alt={featuredArticle.title}
                  width={1200}
                  height={675}
                  priority
                  className="w-full h-auto object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                />
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* Category Filter & Article Exhibition */}
      <Section background="black" padding="normal">
        <div className="max-w-5xl mx-auto text-left space-y-8">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pb-4 border-b border-white/10">
            <span className="text-xs font-semibold text-white/50 mr-2 flex items-center gap-1.5">
              <Tag size={13} />
              <span>Filter:</span>
            </span>
            {CATEGORIES.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-full transition-all cursor-pointer ${
                    active
                      ? "bg-white text-black font-semibold shadow-sm"
                      : "bg-[#18181B] text-white/70 hover:text-white border border-white/10 hover:border-white/20"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Article Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredArticles.map((article) => (
              <article
                key={article.slug}
                className="gumroad-card p-5 sm:p-6 flex flex-col justify-between group hover:border-white/30 transition-all"
              >
                <div className="space-y-4">
                  <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-[#141416] border border-white/10">
                    <Image
                      src={article.heroImage}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div>
                    <div className="flex items-center gap-2 text-[11px] text-white/50 mb-1.5">
                      <span className="text-[#FF90E8] font-semibold">{article.category}</span>
                      <span>•</span>
                      <span>{article.readingTime}</span>
                    </div>

                    <h3 className="font-display text-lg font-bold text-white group-hover:text-[#FF90E8] transition-colors leading-snug">
                      <Link href={`/insights/${article.slug}`}>
                        {article.title}
                      </Link>
                    </h3>

                    <p className="mt-2 text-xs text-white/60 line-clamp-3 leading-relaxed font-sans">
                      {article.subtitle}
                    </p>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-white/40">
                  <span>{article.author}</span>
                  <Link
                    href={`/insights/${article.slug}`}
                    className="font-semibold text-white/80 group-hover:text-white inline-flex items-center gap-1"
                  >
                    <span>Read</span>
                    <ArrowUpRight size={12} />
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
