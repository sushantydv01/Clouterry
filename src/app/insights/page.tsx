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
    <div className="flex flex-col min-h-screen">
      <Container>
        <PageHeader
          badge="INSIGHTS & PERSPECTIVES"
          eyebrow="FIRM Editorial Journal"
          title="Architectural thinking for digital presence."
          description="In-depth monographs, engineering analyses, and institutional field guides exploring how unified brand, technology, and content systems compound enterprise value."
        />
      </Container>

      {/* ── Featured Monograph Hero ── */}
      <Section background="subtle">
        <div className="max-w-5xl mx-auto text-left">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
            <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] font-semibold">
              FEATURED MONOGRAPH // LATEST PUBLICATION
            </span>
          </div>

          <div className="grid gap-8 lg:grid-cols-12 lg:items-center rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-6 sm:p-8 shadow-xs">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 font-mono text-[11px] text-[var(--text-muted)] mb-3">
                <span className="text-[var(--accent)] font-medium">{featuredArticle.category}</span>
                <span>•</span>
                <span>{featuredArticle.date}</span>
                <span>•</span>
                <span className="inline-flex items-center gap-1">
                  <Clock size={11} />
                  <span>{featuredArticle.readingTime}</span>
                </span>
              </div>

              <h2 className="font-display text-2xl sm:text-3xl font-medium tracking-tight text-[var(--text-primary)] leading-snug">
                <Link href={`/insights/${featuredArticle.slug}`} className="hover:text-[var(--accent)] transition-colors">
                  {featuredArticle.title}
                </Link>
              </h2>

              <p className="mt-4 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                {featuredArticle.subtitle}
              </p>

              <div className="mt-6 flex items-center gap-4 pt-4 border-t border-[var(--border-hairline)]">
                <Link
                  href={`/insights/${featuredArticle.slug}`}
                  className="inline-flex h-9 items-center justify-center gap-1.5 rounded-lg bg-[var(--accent)] px-4 text-xs font-medium text-white transition-colors hover:bg-[var(--accent-hover)]"
                >
                  <span>Read full monograph</span>
                  <ArrowUpRight size={13} />
                </Link>
                <span className="font-mono text-[11px] text-[var(--text-muted)]">
                  By {featuredArticle.author}
                </span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <Link href={`/insights/${featuredArticle.slug}`} className="block group overflow-hidden rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-page)]">
                <Image
                  src={featuredArticle.heroImage}
                  alt={featuredArticle.title}
                  width={1200}
                  height={675}
                  priority
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* ── Category Filter & Article Exhibition ── */}
      <Section background="page">
        <div className="max-w-5xl mx-auto text-left">
          {/* Category Pills */}
          <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-[var(--border-hairline)]">
            <span className="font-mono text-xs text-[var(--text-muted)] mr-2 flex items-center gap-1">
              <Tag size={12} />
              <span>Filter:</span>
            </span>
            {CATEGORIES.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                    active
                      ? "bg-[var(--accent)] text-white shadow-2xs"
                      : "border border-[var(--border-hairline)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-strong)]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Article List Grid */}
          <div className="grid gap-6 md:grid-cols-2">
            {filteredArticles.map((article) => (
              <article
                key={article.slug}
                className="rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-6 flex flex-col justify-between transition-colors hover:border-[var(--border-strong)] text-left group"
              >
                <div>
                  <div className="overflow-hidden rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-page)] mb-4">
                    <Link href={`/insights/${article.slug}`}>
                      <Image
                        src={article.heroImage}
                        alt={article.title}
                        width={1200}
                        height={675}
                        className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                      />
                    </Link>
                  </div>

                  <div className="flex items-center gap-2 font-mono text-[10px] text-[var(--text-muted)] mb-2">
                    <span className="text-[var(--accent)] font-semibold uppercase">{article.category}</span>
                    <span>•</span>
                    <span>{article.readingTime}</span>
                  </div>

                  <h3 className="font-display text-xl font-medium text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors leading-snug">
                    <Link href={`/insights/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h3>

                  <p className="mt-2.5 text-xs text-[var(--text-secondary)] leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[var(--border-hairline)] flex items-center justify-between text-xs">
                  <span className="font-mono text-[11px] text-[var(--text-muted)]">
                    {article.date}
                  </span>
                  <Link
                    href={`/insights/${article.slug}`}
                    className="font-medium text-[var(--accent)] hover:underline inline-flex items-center gap-1"
                  >
                    <span>Read monograph</span>
                    <ArrowUpRight size={12} />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Editorial Dispatch Note */}
          <div className="mt-16 p-8 rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-subtle)] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[var(--accent)] font-semibold mb-1">
                <BookOpen size={14} />
                <span>QUARTERLY EDITORIAL DISPATCH</span>
              </div>
              <h4 className="font-display text-xl font-medium text-[var(--text-primary)]">
                Syndicate FIRM field perspectives via RSS
              </h4>
              <p className="mt-1 text-xs text-[var(--text-secondary)] max-w-xl">
                We publish quarterly architectural monographs on digital presence, institutional strategy, and Next.js engineering. All content is distributed openly via standard RSS 2.0.
              </p>
            </div>
            <a
              href="/rss.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 items-center justify-center gap-1.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-4 text-xs font-medium text-[var(--text-primary)] hover:border-[var(--border-strong)] shrink-0"
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
