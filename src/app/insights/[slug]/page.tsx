import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { ARTICLES } from "@/data/articles";
import { ArrowLeft, ArrowUpRight, Clock, User, Compass } from "lucide-react";

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

  if (!article) {
    return {
      title: "Article Not Found | FIRM",
    };
  }

  return {
    title: `${article.title} | FIRM Insights`,
    description: article.subtitle,
    openGraph: {
      title: article.title,
      description: article.subtitle,
      url: `https://firm.agency/insights/${article.slug}`,
      siteName: "FIRM",
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

  if (!article) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.subtitle,
    image: `https://firm.agency${article.heroImage}`,
    datePublished: article.isoDate,
    dateModified: article.isoDate,
    author: {
      "@type": "Organization",
      name: article.author,
      url: "https://firm.agency",
    },
    publisher: {
      "@type": "Organization",
      name: "FIRM",
      url: "https://firm.agency",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://firm.agency/insights/${article.slug}`,
    },
  };

  const relatedArticlesList = ARTICLES.filter((a) =>
    article.relatedArticles.includes(a.slug)
  );

  return (
    <article className="flex flex-col min-h-screen pt-28 pb-20 bg-[#F8F6EF]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Container>
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/insights"
            className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-[#171717] border border-[#171717] bg-[#FFFFFF] px-3 py-1 shadow-[2px_2px_0_0_#171717] hover:bg-[#F4CF55] transition-colors"
          >
            <ArrowLeft size={13} className="stroke-[2.5]" />
            <span>Return to field perspectives</span>
          </Link>
        </div>

        {/* Masthead */}
        <header className="max-w-4xl mx-auto text-left mb-10">
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-[#171717] mb-4">
            <span className="border border-[#171717] bg-[#ED83A8] text-[#171717] px-3 py-0.5 font-bold uppercase tracking-wider shadow-[2px_2px_0_0_#171717]">
              {article.category}
            </span>
            <span>•</span>
            <span className="font-semibold">{article.date}</span>
            <span>•</span>
            <span className="inline-flex items-center gap-1 border border-[#171717] bg-[#F4CF55] px-2 py-0.5 font-bold shadow-[1px_1px_0_0_#171717]">
              <Clock size={12} className="stroke-[2.5]" />
              <span>{article.readingTime}</span>
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#171717] leading-tight">
            {article.title}
          </h1>

          <p className="mt-5 text-base sm:text-lg text-[#404040] font-medium leading-relaxed">
            {article.subtitle}
          </p>

          <div className="mt-8 pt-6 border-t border-[#171717] flex items-center justify-between text-xs">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-none border border-[#171717] bg-[#A6D8A1] text-[#171717] flex items-center justify-center font-mono text-xs font-bold shadow-[2px_2px_0_0_#171717]">
                <User size={16} className="stroke-[2.5]" />
              </div>
              <div>
                <p className="font-bold text-[#171717]">{article.author}</p>
                <p className="font-mono text-[11px] text-[#404040] font-medium">{article.authorRole}</p>
              </div>
            </div>
            <span className="border border-[#171717] bg-[#FFFFFF] px-2.5 py-1 font-mono text-[10px] font-bold text-[#171717] uppercase shadow-[2px_2px_0_0_#171717] hidden sm:block">
              PEER-REVIEWED ARCHIVAL MONOGRAPH
            </span>
          </div>
        </header>

        {/* Hero Visual */}
        <div className="max-w-5xl mx-auto mb-16 overflow-hidden border border-[#171717] bg-[#FFFFFF] p-2 shadow-[6px_6px_0_0_#171717]">
          <Image
            src={article.heroImage}
            alt={article.title}
            width={1200}
            height={675}
            priority
            className="w-full h-auto object-cover border border-[#171717]"
          />
        </div>

        {/* Reading Grid: Chapter Navigation & Article Body */}
        <div className="grid gap-12 lg:grid-cols-12 max-w-5xl mx-auto text-left">
          {/* Left Column: Sticky Table of Contents */}
          <aside className="lg:col-span-4 hidden lg:block">
            <div className="sticky top-28 p-6 border border-[#171717] bg-[#FFFFFF] shadow-[4px_4px_0_0_#171717]">
              <span className="inline-block border border-[#171717] bg-[#ED83A8] px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-[#171717] font-bold shadow-[2px_2px_0_0_#171717] mb-4">
                TABLE OF CONTENTS
              </span>
              <nav className="space-y-2 text-xs font-medium">
                {article.tableOfContents.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="block text-[#404040] hover:text-[#171717] hover:font-bold hover:translate-x-1 transition-all"
                  >
                    {item.title}
                  </a>
                ))}
              </nav>

              <div className="mt-8 pt-6 border-t border-[#171717]">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#171717] font-bold block mb-3">
                  RELATED CAPABILITIES
                </span>
                <div className="space-y-2">
                  {article.relatedCapabilities.map((c) => (
                    <Link
                      key={c.href}
                      href={c.href}
                      className="flex items-center justify-between text-xs font-semibold text-[#171717] hover:bg-[#F4CF55] p-1 border border-transparent hover:border-[#171717] transition-colors"
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
                  <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#171717]">
                    {section.heading}
                  </h2>

                  {section.subheading && (
                    <p className="font-mono text-xs text-[#ED83A8] font-bold">
                      {"// "} {section.subheading}
                    </p>
                  )}

                  <div className="space-y-4 text-sm sm:text-base text-[#404040] leading-relaxed pt-2 font-sans">
                    {section.paragraphs.map((p, pIdx) => (
                      <p key={pIdx}>{p}</p>
                    ))}
                  </div>

                  {section.callout && (
                    <div className="my-6 p-5 border border-[#171717] bg-[#F4CF55] shadow-[4px_4px_0_0_#171717] text-xs sm:text-sm">
                      <div className="flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-wider text-[#171717] mb-2">
                        <Compass size={13} className="stroke-[2.5]" />
                        <span>{section.callout.type.toUpperCase()} PERSPECTIVE</span>
                      </div>
                      <p className="text-[#171717] font-bold leading-relaxed italic">
                        &ldquo;{section.callout.text}&rdquo;
                      </p>
                    </div>
                  )}
                </section>
              );
            })}

            {/* Contextual Consultation Box */}
            <div className="mt-16 p-8 border border-[#171717] bg-[#ED83A8] shadow-[6px_6px_0_0_#171717]">
              <span className="inline-block border border-[#171717] bg-[#FFFFFF] px-2.5 py-0.5 font-mono text-xs font-bold text-[#171717] uppercase tracking-wider shadow-[2px_2px_0_0_#171717]">
                STRATEGIC CONSULTATION
              </span>
              <h3 className="mt-3 font-display text-2xl sm:text-3xl font-bold text-[#171717]">
                Discuss this monograph with FIRM partners
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#171717] font-medium leading-relaxed">
                If your organization is evaluating a digital transformation, admissions modernization, or brand architecture sprint, we invite you to initiate a confidential briefing.
              </p>
              <div className="mt-6">
                <Link
                  href="/connect"
                  className="neo-btn text-xs px-6 py-3"
                >
                  <span>Initiate a project briefing</span>
                  <ArrowUpRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Related Reading Bar */}
      {relatedArticlesList.length > 0 && (
        <Section background="cream">
          <div className="max-w-5xl mx-auto text-left">
            <span className="inline-block border border-[#171717] bg-[#A6D8A1] px-3 py-0.5 font-mono text-xs uppercase tracking-wider text-[#171717] font-bold shadow-[2px_2px_0_0_#171717] mb-2">
              FURTHER PERSPECTIVES
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#171717] mb-6">
              Related monographs in the archive
            </h3>

            <div className="grid gap-6 sm:grid-cols-2">
              {relatedArticlesList.map((rel) => (
                <div
                  key={rel.slug}
                  className="neo-card p-6 shadow-[4px_4px_0_0_#171717] flex flex-col justify-between"
                >
                  <div>
                    <span className="border border-[#171717] bg-[#ED83A8] px-2 py-0.5 font-mono text-[10px] text-[#171717] font-bold uppercase shadow-[2px_2px_0_0_#171717]">
                      {rel.category}
                    </span>
                    <h4 className="mt-3 font-display text-lg font-bold text-[#171717] hover:underline leading-snug">
                      <Link href={`/insights/${rel.slug}`}>
                        {rel.title}
                      </Link>
                    </h4>
                    <p className="mt-2 text-xs sm:text-sm text-[#404040] line-clamp-2">
                      {rel.excerpt}
                    </p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-[#171717] flex items-center justify-between text-xs">
                    <span className="font-mono text-[11px] font-bold text-[#171717]">{rel.readingTime}</span>
                    <Link
                      href={`/insights/${rel.slug}`}
                      className="neo-btn text-xs px-3.5 py-1.5"
                    >
                      <span>Read</span>
                      <ArrowUpRight size={11} />
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
