import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import MonographCoverArt from "@/components/illustrations/MonographCoverArt";
import { ARTICLES } from "@/data/articles";
import { getSiteUrl, siteConfig } from "@/lib/siteConfig";
import { ArrowLeft, ArrowUpRight, Clock, Compass, User } from "lucide-react";

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
    <article className="flex flex-col min-h-screen pt-28 pb-20 bg-[#171717] text-[#F8F6EF]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Container>
        <div className="mb-8">
          <Link
            href="/insights"
            className="inline-flex items-center gap-1.5 text-xs font-display font-medium text-[#C4C1B8] hover:text-[#F8F6EF] px-4 py-2 rounded-full bg-[#1E1E20] border border-[#F8F6EF]/14 hover:border-[#F8F6EF]/28 transition-colors"
          >
            <ArrowLeft size={13} className="stroke-[2.25]" />
            <span>Return to perspectives</span>
          </Link>
        </div>

        {/* Masthead */}
        <header className="max-w-4xl mx-auto text-left mb-10 space-y-4">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
            <span className="text-[#ED83A8] uppercase tracking-wider">
              {article.category}
            </span>
            <span className="text-[#F8F6EF]/25">&bull;</span>
            <span className="text-[#9C9990]">{article.date}</span>
            <span className="text-[#F8F6EF]/25">&bull;</span>
            <span className="inline-flex items-center gap-1 text-[#A6D8A1]">
              <Clock size={12} />
              <span>{article.readingTime}</span>
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#F8F6EF] leading-[1.08]">
            {article.title}
          </h1>

          <p className="text-base sm:text-xl text-[#C4C1B8] leading-relaxed font-sans">
            {article.subtitle}
          </p>

          <div className="pt-6 border-t border-[#F8F6EF]/12 flex items-center justify-between text-xs text-[#C4C1B8]">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full bg-[#1E1E20] border border-[#F8F6EF]/15 text-[#F8F6EF] flex items-center justify-center">
                <User size={15} />
              </div>
              <div>
                <p className="font-display font-bold text-[#F8F6EF]">{article.author}</p>
                <p className="text-[11px] text-[#9C9990]">{article.authorRole}</p>
              </div>
            </div>
            <span className="hidden sm:inline-block font-mono uppercase tracking-widest text-[11px] text-[#9C9990]">
              Archival Monograph
            </span>
          </div>
        </header>

        {/* Bespoke Hero Plate */}
        <div className="max-w-5xl mx-auto mb-14 overflow-hidden rounded-2xl border border-[#F8F6EF]/14 bg-[#1E1E20] p-2 sm:p-3">
          <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-[#171717]">
            <MonographCoverArt slug={article.slug} />
          </div>
        </div>

        {/* Reading Grid */}
        <div className="grid gap-12 lg:grid-cols-12 max-w-5xl mx-auto text-left">
          <aside className="lg:col-span-4 hidden lg:block">
            <div className="sticky top-28 p-6 rounded-2xl bg-[#1E1E20] border border-[#F8F6EF]/12 space-y-5">
              <span className="text-xs font-mono uppercase tracking-wider text-[#9C9990] block">
                Table of contents
              </span>
              <nav className="space-y-2 text-xs font-medium">
                {article.tableOfContents.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="block text-[#C4C1B8] hover:text-[#F8F6EF] transition-colors py-1"
                  >
                    {item.title}
                  </a>
                ))}
              </nav>

              <div className="pt-4 border-t border-[#F8F6EF]/10 space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#9C9990] block">
                  Related disciplines
                </span>
                <div className="space-y-1">
                  {article.relatedCapabilities.map((c) => (
                    <Link
                      key={c.href}
                      href={c.href}
                      className="flex items-center justify-between text-xs text-[#C4C1B8] hover:text-[#ED83A8] py-1 transition-colors"
                    >
                      <span>{c.title}</span>
                      <ArrowUpRight size={12} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          <div className="lg:col-span-8 max-w-2xl mx-auto lg:mx-0 space-y-12">
            {article.sections.map((section, idx) => {
              const tocItem = article.tableOfContents[idx];
              const sectionId = tocItem ? tocItem.id : `section-${idx}`;

              return (
                <section key={section.heading} id={sectionId} className="scroll-mt-28 space-y-4">
                  <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#F8F6EF]">
                    {section.heading}
                  </h2>

                  {section.subheading && (
                    <p className="text-xs font-mono uppercase tracking-wider text-[#F4CF55]">
                      {section.subheading}
                    </p>
                  )}

                  <div className="space-y-4 text-base text-[#C4C1B8] leading-relaxed pt-1 font-sans">
                    {section.paragraphs.map((p, pIdx) => (
                      <p key={pIdx}>{p}</p>
                    ))}
                  </div>

                  {section.callout && (
                    <blockquote className="my-6 p-6 rounded-2xl bg-[#1E1E20] border border-[#F8F6EF]/14 space-y-2">
                      <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#ED83A8]">
                        <Compass size={13} />
                        <span>{section.callout.type} perspective</span>
                      </div>
                      <p className="firm-serif-italic text-lg text-[#F8F6EF] leading-relaxed">
                        &ldquo;{section.callout.text}&rdquo;
                      </p>
                    </blockquote>
                  )}
                </section>
              );
            })}

            <div className="mt-12 p-8 rounded-2xl bg-[#1E1E20] border border-[#F8F6EF]/14 space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-[#A6D8A1] block">
                Strategic consultation
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#F8F6EF] tracking-tight">
                Discuss this monograph with FIRM partners
              </h3>
              <p className="text-sm text-[#C4C1B8] leading-relaxed font-sans">
                If your organization is evaluating a digital overhaul, admissions rebuild, or brand architecture sprint, initiate a direct partner briefing.
              </p>
              <div className="pt-2">
                <Link href="/connect" className="firm-btn-primary text-sm">
                  <span>Start a project</span>
                  <ArrowUpRight size={15} className="stroke-[2.25]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {relatedArticlesList.length > 0 && (
        <Section background="charcoal-subtle" padding="normal" className="mt-16">
          <div className="max-w-5xl mx-auto text-left space-y-6">
            <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#F8F6EF]">
              Related monographs in the archive
            </h3>

            <div className="grid gap-6 sm:grid-cols-2">
              {relatedArticlesList.map((rel) => (
                <div
                  key={rel.slug}
                  className="p-6 rounded-2xl bg-[#1E1E20] border border-[#F8F6EF]/12 hover:border-[#F8F6EF]/26 transition-colors flex flex-col justify-between group"
                >
                  <div>
                    <span className="text-xs font-mono text-[#ED83A8]">
                      {rel.category}
                    </span>
                    <h4 className="mt-2 font-display text-lg font-bold text-[#F8F6EF] group-hover:text-[#ED83A8] transition-colors leading-snug">
                      <Link href={`/insights/${rel.slug}`}>{rel.title}</Link>
                    </h4>
                    <p className="mt-2 text-sm text-[#C4C1B8] line-clamp-2 leading-relaxed">
                      {rel.excerpt}
                    </p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-[#F8F6EF]/10 flex items-center justify-between text-xs text-[#9C9990]">
                    <span className="tabular-nums">{rel.readingTime}</span>
                    <Link
                      href={`/insights/${rel.slug}`}
                      className="font-display font-semibold text-[#F8F6EF] group-hover:text-[#ED83A8] inline-flex items-center gap-1"
                    >
                      <span>Read</span>
                      <ArrowUpRight size={12} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>
      )}
    </article>
  );
}
