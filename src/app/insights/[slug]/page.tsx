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
    <article className="flex flex-col min-h-screen pt-28 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Container>
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/insights"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
          >
            <ArrowLeft size={13} />
            <span>Return to field perspectives</span>
          </Link>
        </div>

        {/* Masthead */}
        <header className="max-w-4xl mx-auto text-left mb-10">
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-[var(--text-muted)] mb-4">
            <span className="rounded-md bg-[var(--accent-subtle)] text-[var(--accent)] px-2.5 py-1 font-semibold uppercase tracking-wider">
              {article.category}
            </span>
            <span>•</span>
            <span>{article.date}</span>
            <span>•</span>
            <span className="inline-flex items-center gap-1">
              <Clock size={12} />
              <span>{article.readingTime}</span>
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[var(--text-primary)] leading-[1.12]">
            {article.title}
          </h1>

          <p className="mt-5 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
            {article.subtitle}
          </p>

          <div className="mt-8 pt-6 border-t border-[var(--border-hairline)] flex items-center justify-between text-xs">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full bg-[var(--bg-raised)] text-[var(--text-primary)] flex items-center justify-center font-mono text-xs font-semibold">
                <User size={16} />
              </div>
              <div>
                <p className="font-medium text-[var(--text-primary)]">{article.author}</p>
                <p className="font-mono text-[11px] text-[var(--text-muted)]">{article.authorRole}</p>
              </div>
            </div>
            <span className="font-mono text-[11px] text-[var(--text-muted)] hidden sm:block">
              PEER-REVIEWED ARCHIVAL MONOGRAPH
            </span>
          </div>
        </header>

        {/* Hero Visual */}
        <div className="max-w-5xl mx-auto mb-16 overflow-hidden rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] shadow-xs">
          <Image
            src={article.heroImage}
            alt={article.title}
            width={1200}
            height={675}
            priority
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Reading Grid: Chapter Navigation & Article Body */}
        <div className="grid gap-12 lg:grid-cols-12 max-w-5xl mx-auto text-left">
          {/* Left Column: Sticky Table of Contents */}
          <aside className="lg:col-span-4 hidden lg:block">
            <div className="sticky top-28 p-6 rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-surface)]">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--accent)] font-semibold block mb-3">
                TABLE OF CONTENTS
              </span>
              <nav className="space-y-2 text-xs">
                {article.tableOfContents.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="block text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:translate-x-1 transition-transform"
                  >
                    {item.title}
                  </a>
                ))}
              </nav>

              <div className="mt-8 pt-6 border-t border-[var(--border-hairline)]">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)] block mb-2">
                  RELATED CAPABILITIES
                </span>
                <div className="space-y-1.5">
                  {article.relatedCapabilities.map((c) => (
                    <Link
                      key={c.href}
                      href={c.href}
                      className="flex items-center justify-between text-xs text-[var(--text-secondary)] hover:text-[var(--accent)]"
                    >
                      <span>{c.title}</span>
                      <ArrowUpRight size={11} />
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
                  <h2 className="font-display text-2xl sm:text-3xl font-medium tracking-tight text-[var(--text-primary)]">
                    {section.heading}
                  </h2>

                  {section.subheading && (
                    <p className="font-mono text-xs text-[var(--accent)] font-medium">
                      {"// "} {section.subheading}
                    </p>
                  )}

                  <div className="space-y-4 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed pt-2">
                    {section.paragraphs.map((p, pIdx) => (
                      <p key={pIdx}>{p}</p>
                    ))}
                  </div>

                  {section.callout && (
                    <div className="my-6 p-5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-subtle)] text-xs sm:text-sm">
                      <div className="flex items-center gap-1.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-[var(--accent)] mb-2">
                        <Compass size={12} />
                        <span>{section.callout.type.toUpperCase()} PERSPECTIVE</span>
                      </div>
                      <p className="text-[var(--text-primary)] font-medium leading-relaxed italic">
                        &ldquo;{section.callout.text}&rdquo;
                      </p>
                    </div>
                  )}
                </section>
              );
            })}

            {/* Contextual Consultation Box */}
            <div className="mt-16 p-8 rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] shadow-xs">
              <span className="font-mono text-xs font-semibold text-[var(--accent)] uppercase tracking-wider">
                STRATEGIC CONSULTATION
              </span>
              <h3 className="mt-2 font-display text-2xl font-medium text-[var(--text-primary)]">
                Discuss this monograph with FIRM partners
              </h3>
              <p className="mt-2 text-xs text-[var(--text-secondary)] leading-relaxed">
                If your organization is evaluating a digital transformation, admissions modernization, or brand architecture sprint, we invite you to initiate a confidential briefing.
              </p>
              <div className="mt-6">
                <Link
                  href="/connect"
                  className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-[var(--accent)] px-5 text-xs font-medium text-white hover:bg-[var(--accent-hover)] transition-colors"
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
        <Section background="subtle">
          <div className="max-w-5xl mx-auto text-left">
            <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] font-semibold block mb-2">
              FURTHER PERSPECTIVES
            </span>
            <h3 className="font-display text-2xl font-medium text-[var(--text-primary)] mb-6">
              Related monographs in the archive
            </h3>

            <div className="grid gap-6 sm:grid-cols-2">
              {relatedArticlesList.map((rel) => (
                <div
                  key={rel.slug}
                  className="p-6 rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] flex flex-col justify-between"
                >
                  <div>
                    <span className="font-mono text-[10px] text-[var(--accent)] font-semibold uppercase">
                      {rel.category}
                    </span>
                    <h4 className="mt-2 font-display text-lg font-medium text-[var(--text-primary)] leading-snug">
                      <Link href={`/insights/${rel.slug}`} className="hover:text-[var(--accent)]">
                        {rel.title}
                      </Link>
                    </h4>
                    <p className="mt-2 text-xs text-[var(--text-secondary)] line-clamp-2">
                      {rel.excerpt}
                    </p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-[var(--border-hairline)] flex items-center justify-between text-xs">
                    <span className="font-mono text-[11px] text-[var(--text-muted)]">{rel.readingTime}</span>
                    <Link
                      href={`/insights/${rel.slug}`}
                      className="font-medium text-[var(--accent)] hover:underline inline-flex items-center gap-1"
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
