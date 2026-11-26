import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import MonographCoverArt from "@/components/illustrations/MonographCoverArt";
import ArticleTocTracker from "@/components/insights/ArticleTocTracker";
import { ARTICLES } from "@/data/articles";
import { getSiteUrl, siteConfig } from "@/lib/siteConfig";
import { ArrowLeft, ArrowUpRight, Clock, User } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    return {
      title: `Article Not Found | ${siteConfig.workingName}`,
    };
  }

  return {
    title: `${article.title} | ${siteConfig.workingName} Insights`,
    description: article.subtitle,
    openGraph: {
      title: article.title,
      description: article.subtitle,
      type: "article",
      publishedTime: article.isoDate,
      authors: [article.author],
      url: `${getSiteUrl()}/insights/${article.slug}`,
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);
  const siteUrl = getSiteUrl();

  if (!article) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.subtitle,
    datePublished: article.isoDate,
    dateModified: article.isoDate,
    author: {
      "@type": "Organization",
      name: article.author,
      url: siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.workingName,
      url: siteUrl,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/insights/${article.slug}`,
    },
  };

  const relatedArticlesList = ARTICLES.filter((a) =>
    article.relatedArticles.includes(a.slug)
  );

  return (
    <article className="flex flex-col min-h-screen bg-[#171717] text-[#F8F6EF]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 01. Midnight Charcoal Masthead + Commissioned Cover Plate */}
      <header data-surface="dark" className="pt-28 pb-12 sm:pt-32 sm:pb-16">
        <Container size="wide">
          <div className="mb-8">
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-sm font-display font-medium text-[#D5D2C7] hover:text-[#F8F6EF] transition-colors"
            >
              <ArrowLeft size={15} />
              <span>All insights &amp; monographs</span>
            </Link>
          </div>

          <div className="grid gap-10 lg:gap-14 lg:grid-cols-12 lg:items-center text-left">
            <div className="lg:col-span-6 space-y-5">
              <div className="flex flex-wrap items-center gap-3 text-xs font-sans">
                <span className="text-[#ED83A8] font-medium">{article.category}</span>
                <span className="text-[#ACA89E]">·</span>
                <span className="text-[#ACA89E]">{article.date}</span>
                <span className="text-[#ACA89E]">·</span>
                <span className="inline-flex items-center gap-1 text-[#A6D8A1] font-mono">
                  <Clock size={12} />
                  <span>{article.readingTime}</span>
                </span>
              </div>

              <h1 className="font-display text-3xl sm:text-5xl lg:text-[52px] font-medium tracking-[-0.025em] text-[#F8F6EF] leading-[1.06]">
                {article.title}
              </h1>

              <p className="text-base sm:text-xl text-[#D5D2C7] leading-relaxed font-sans">
                {article.subtitle}
              </p>

              <div className="pt-5 border-t border-[#F8F6EF]/12 flex items-center gap-3.5 text-sm text-[#D5D2C7]">
                <div className="h-10 w-10 rounded-full bg-[#1D1D20] border border-[#F8F6EF]/16 text-[#F8F6EF] flex items-center justify-center shrink-0">
                  <User size={16} />
                </div>
                <div>
                  <p className="font-display font-medium text-[#F8F6EF]">{article.author}</p>
                  <p className="text-xs text-[#ACA89E]">{article.authorRole}</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-[#F8F6EF]/14 bg-[#121214]">
                <MonographCoverArt
                  slug={article.slug}
                  priority
                  loading="eager"
                  sizes="(max-width: 1024px) 100vw, 48vw"
                />
              </div>
            </div>
          </div>
        </Container>
      </header>

      {/* 02. Warm Cream Archival Paper Reading Room with Live Scrollspy TOC & Unboxed Serif Pullquotes */}
      <Section background="warm-paper" containerSize="wide" padding="spacious">
        <div className="grid gap-12 lg:grid-cols-12 items-start text-left">
          <ArticleTocTracker
            tableOfContents={article.tableOfContents}
            relatedCapabilities={article.relatedCapabilities}
          />

          <div className="lg:col-span-8 lg:pl-6 max-w-[66ch] space-y-12">
            {article.sections.map((section, idx) => {
              const tocItem = article.tableOfContents[idx];
              const sectionId = tocItem ? tocItem.id : `section-${idx}`;

              return (
                <section
                  key={section.heading}
                  id={sectionId}
                  data-article-section={sectionId}
                  className="scroll-mt-28 space-y-4"
                >
                  <div className="space-y-1.5">
                    <h2 className="font-display text-2xl sm:text-3xl font-medium tracking-tight text-[#171717]">
                      {section.heading}
                    </h2>
                    {section.subheading && (
                      <p className="text-sm font-sans text-[#3F3D38]">
                        {section.subheading}
                      </p>
                    )}
                  </div>

                  <div className="space-y-5 text-lg text-[#171717]/90 leading-[1.72] pt-1 firm-serif-prose">
                    {section.paragraphs.map((p, pIdx) => (
                      <p key={pIdx}>{p}</p>
                    ))}
                  </div>

                  {section.callout && (
                    <blockquote className="my-8 pl-6 border-l-2 border-[#ED83A8] py-1">
                      <p className="firm-serif-italic text-xl sm:text-2xl text-[#171717] leading-relaxed">
                        &ldquo;{section.callout.text}&rdquo;
                      </p>
                    </blockquote>
                  )}
                </section>
              );
            })}

            <div className="pt-8 border-t border-[#171717]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
              <div className="space-y-1">
                <h3 className="font-display text-2xl font-medium text-[#171717]">
                  Discuss this perspective with FIRM
                </h3>
                <p className="text-sm text-[#3F3D38] font-sans">
                  Initiate a direct partner conversation regarding your digital platform.
                </p>
              </div>
              <Link href="/connect" className="firm-btn-dark text-sm shrink-0">
                <span>Start a project</span>
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* 03. Related Monographs Archive */}
      {relatedArticlesList.length > 0 && (
        <Section background="charcoal" containerSize="wide" padding="normal">
          <div className="text-left space-y-8">
            <h2 className="font-display text-2xl sm:text-3xl font-medium tracking-tight text-[#F8F6EF]">
              Related monographs
            </h2>

            <div className="grid gap-8 md:grid-cols-2">
              {relatedArticlesList.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/insights/${rel.slug}`}
                  className="group p-6 rounded-2xl bg-[#1D1D20] border border-[#F8F6EF]/12 hover:border-[#F8F6EF]/30 transition-colors grid gap-5 sm:grid-cols-12 items-center"
                >
                  <div className="sm:col-span-5 relative aspect-[16/9] rounded-xl overflow-hidden bg-[#121214]">
                    <MonographCoverArt
                      slug={rel.slug}
                      loading="eager"
                      sizes="(max-width: 1024px) 100vw, 22vw"
                    />
                  </div>
                  <div className="sm:col-span-7 space-y-1.5">
                    <span className="font-sans text-xs font-medium text-[#ED83A8] block">
                      {rel.category} · {rel.readingTime}
                    </span>
                    <h3 className="font-display text-lg sm:text-xl font-medium text-[#F8F6EF] group-hover:text-[#F4CF55] transition-colors leading-snug">
                      {rel.title}
                    </h3>
                    <p className="text-sm text-[#D5D2C7] line-clamp-2 leading-relaxed font-sans">
                      {rel.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Section>
      )}
    </article>
  );
}
