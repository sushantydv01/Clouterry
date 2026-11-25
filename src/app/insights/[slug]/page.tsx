import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { ARTICLES } from "@/data/articles";
import { ArrowLeft, ArrowUpRight, Clock, User, Compass } from "lucide-react";
import { getSiteUrl, siteConfig } from "@/lib/siteConfig";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);
  const siteUrl = getSiteUrl();

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
      url: `${siteUrl}/insights/${article.slug}`,
      siteName: siteConfig.workingName,
      type: "article",
      publishedTime: article.isoDate,
      authors: [article.author],
      images: [
        {
          url: article.heroImage,
          width: 1200,
          height: 675,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.subtitle,
      images: [article.heroImage],
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
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
    image: `${siteUrl}${article.heroImage}`,
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
    <article className="flex flex-col min-h-screen pt-28 pb-20 bg-[#000000] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Container>
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/insights"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-white/70 hover:text-white px-3.5 py-1.5 rounded-full bg-[#18181B] border border-white/10 hover:border-white/25 transition-all"
          >
            <ArrowLeft size={13} className="stroke-[2.5]" />
            <span>Return to field perspectives</span>
          </Link>
        </div>

        {/* Masthead */}
        <header className="max-w-4xl mx-auto text-left mb-10 space-y-4">
          <div className="flex flex-wrap items-center gap-3 text-xs text-white/50">
            <span className="font-semibold text-[#FF90E8]">
              {article.category}
            </span>
            <span>•</span>
            <span>{article.date}</span>
            <span>•</span>
            <span className="inline-flex items-center gap-1 text-[#10B981]">
              <Clock size={12} />
              <span>{article.readingTime}</span>
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
            {article.title}
          </h1>

          <p className="text-base sm:text-xl text-white/70 leading-relaxed font-sans">
            {article.subtitle}
          </p>

          <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs text-white/60">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full bg-[#18181B] border border-white/15 text-white flex items-center justify-center font-bold">
                <User size={15} />
              </div>
              <div>
                <p className="font-bold text-white">{article.author}</p>
                <p className="text-[11px] text-white/50">{article.authorRole}</p>
              </div>
            </div>
            <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-white/5 text-white/60 text-[11px] font-medium tracking-wide">
              Archival Monograph
            </span>
          </div>
        </header>

        {/* Hero Visual */}
        <div className="max-w-5xl mx-auto mb-16 overflow-hidden rounded-2xl border border-white/10 bg-[#141416] p-2">
          <Image
            src={article.heroImage}
            alt={article.title}
            width={1200}
            height={675}
            priority
            className="w-full h-auto object-cover rounded-xl"
          />
        </div>

        {/* Reading Grid: Chapter Navigation & Article Body */}
        <div className="grid gap-12 lg:grid-cols-12 max-w-5xl mx-auto text-left">
          {/* Left Column: Sticky Table of Contents */}
          <aside className="lg:col-span-4 hidden lg:block">
            <div className="sticky top-28 p-6 gumroad-card border-white/10 space-y-4">
              <span className="text-xs font-semibold text-white/50 block">
                Table of contents
              </span>
              <nav className="space-y-2 text-xs font-medium">
                {article.tableOfContents.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="block text-white/60 hover:text-white transition-colors py-1"
                  >
                    {item.title}
                  </a>
                ))}
              </nav>

              <div className="pt-4 border-t border-white/10 space-y-2">
                <span className="text-xs text-white/40 font-medium block">
                  Related disciplines
                </span>
                <div className="space-y-1">
                  {article.relatedCapabilities.map((c) => (
                    <Link
                      key={c.href}
                      href={c.href}
                      className="flex items-center justify-between text-xs text-white/70 hover:text-[#FF90E8] py-1 transition-colors"
                    >
                      <span>{c.title}</span>
                      <ArrowUpRight size={12} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Right Column: Long-Form Editorial Content */}
          <div className="lg:col-span-8 max-w-2xl mx-auto lg:mx-0 space-y-12">
            {article.sections.map((section, idx) => {
              const tocItem = article.tableOfContents[idx];
              const sectionId = tocItem ? tocItem.id : `section-${idx}`;

              return (
                <section key={section.heading} id={sectionId} className="scroll-mt-28 space-y-4">
                  <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white">
                    {section.heading}
                  </h2>

                  {section.subheading && (
                    <p className="text-xs text-[#FF90E8] font-semibold tracking-wide">
                      {section.subheading}
                    </p>
                  )}

                  <div className="space-y-4 text-sm sm:text-base text-white/80 leading-relaxed pt-2 font-sans">
                    {section.paragraphs.map((p, pIdx) => (
                      <p key={pIdx}>{p}</p>
                    ))}
                  </div>

                  {section.callout && (
                    <div className="my-6 p-6 rounded-2xl bg-[#18181B] border border-white/10 space-y-2 text-xs sm:text-sm">
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-[#FF90E8]">
                        <Compass size={13} className="stroke-[2.5]" />
                        <span>{section.callout.type} perspective</span>
                      </div>
                      <p className="text-white/90 font-medium leading-relaxed italic">
                        &ldquo;{section.callout.text}&rdquo;
                      </p>
                    </div>
                  )}
                </section>
              );
            })}

            {/* Contextual Consultation Box */}
            <div className="mt-16 p-8 gumroad-card border-white/10 space-y-4 bg-gradient-to-b from-[#18181B] to-[#121214]">
              <span className="text-xs text-white/50 font-medium">
                Strategic consultation
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Discuss this monograph with FIRM partners
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-sans">
                If your organization is evaluating a digital transformation, admissions modernization, or brand architecture sprint, we invite you to initiate a briefing.
              </p>
              <div className="pt-2">
                <Link
                  href="/connect"
                  className="gumroad-btn-pink text-xs sm:text-sm font-bold !py-3 !px-6"
                >
                  <span>Start a project</span>
                  <ArrowUpRight size={14} className="stroke-[2.5]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Related Reading Bar */}
      {relatedArticlesList.length > 0 && (
        <Section background="black" padding="normal">
          <div className="max-w-5xl mx-auto text-left space-y-6">
            <div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Related monographs in the archive
              </h3>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {relatedArticlesList.map((rel) => (
                <div
                  key={rel.slug}
                  className="gumroad-card p-6 flex flex-col justify-between group hover:border-white/30 transition-all"
                >
                  <div>
                    <span className="text-xs font-medium text-white/50">
                      {rel.category}
                    </span>
                    <h4 className="mt-2 font-display text-lg font-bold text-white group-hover:text-[#FF90E8] transition-colors leading-snug">
                      <Link href={`/insights/${rel.slug}`}>
                        {rel.title}
                      </Link>
                    </h4>
                    <p className="mt-2 text-xs sm:text-sm text-white/70 line-clamp-2 leading-relaxed">
                      {rel.excerpt}
                    </p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-white/50">
                    <span className="tabular-nums">{rel.readingTime}</span>
                    <Link
                      href={`/insights/${rel.slug}`}
                      className="font-semibold text-white/80 group-hover:text-white inline-flex items-center gap-1"
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
