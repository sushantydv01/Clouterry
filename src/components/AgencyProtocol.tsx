"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { scrollReveal, staggerGroup, staggerChild, viewportOnce } from "@/lib/motion";

const PROTOCOLS = [
  {
    num: "01",
    title: "Vertical Curation",
    subtitle: "Not a bloated database. A high-signal squad.",
    desc: "We don't sell access to 50,000 unvetted handles. We hand-select cohorts of 14 to 18 micro-creators who dominate a single cultural niche with undeniable taste and aesthetic discipline.",
    tag: "High Signal",
    accent: "text-red",
  },
  {
    num: "02",
    title: "Zero Operational Drag",
    subtitle: "One brief. One contract. Zero DM wrangling.",
    desc: "Brands receive guaranteed deliverables through a single agency point of contact. We handle talent vetting, contract clearance, usage rights, product shipping logistics, and rapid creator payouts.",
    tag: "1 Contact",
    accent: "text-red",
  },
  {
    num: "03",
    title: "14-Day Delivery Cycle",
    subtitle: "From approved brief to rights-cleared video.",
    desc: "Short-form commerce cannot wait for 8-week corporate review loops. Our cohorts operate on an uncompromising two-week cadence, delivering Spark-ready assets on time, every time.",
    tag: "14 Days",
    accent: "text-yellow",
  },
  {
    num: "04",
    title: "Aesthetic Sovereignty",
    subtitle: "Real voice beats corporate teleprompter reads.",
    desc: "We never force creators into canned scripts or synthetic talking points. Audiences buy because they trust the creator's natural eye. We preserve that trust while delivering on brand objectives.",
    tag: "Unfiltered",
    accent: "text-red",
  },
];

export default function AgencyProtocol() {
  return (
    <section className="bg-red text-cream border-t border-cream/15 px-6 py-20 sm:px-10 sm:py-28 lg:px-16 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          variants={scrollReveal}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col justify-between gap-6 border-b border-cream/15 pb-8 md:flex-row md:items-end"
        >
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-cream/60">
              Agency Protocol · How It Works
            </span>
            <h2 className="mt-3 font-display text-4xl font-extrabold tracking-[-0.035em] text-cream sm:text-5xl md:text-6xl">
              The Cohort Operating Model.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-cream/80">
            Designed for brands tired of empty influencer software and creators tired of predatory 30%
            management cuts. A streamlined infrastructure built for taste and execution.
          </p>
        </motion.div>

        {/* 4-Step Asymmetric Grid */}
        <motion.div
          variants={staggerGroup(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {PROTOCOLS.map((item) => (
            <motion.div
              key={item.num}
              variants={staggerChild}
              className="card-interactive group relative flex flex-col justify-between border border-cream/20 bg-red-deep/70 p-7 hover:border-cream/50 text-cream rounded-md"
            >
              <div>
                <div className="flex items-center justify-between border-b border-cream/15 pb-4">
                  <span className="font-mono text-2xl font-black text-yellow">{item.num}</span>
                  <span className="rounded-sm bg-cream/15 px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-cream border border-cream/20">
                    {item.tag}
                  </span>
                </div>

                <h3 className="mt-5 font-display text-xl font-bold tracking-tight text-cream">
                  {item.title}
                </h3>

                <p className="mt-1 font-serif text-sm italic text-cream/90">{item.subtitle}</p>

                <p className="mt-4 text-xs leading-relaxed text-cream/80 font-body">{item.desc}</p>
              </div>

              <div className="mt-6 border-t border-cream/15 pt-4">
                <span className="font-mono text-[11px] uppercase tracking-wider text-cream/60 group-hover:text-cream transition-colors flex items-center justify-between">
                  <span>Standard Rule</span>
                  <span className="font-bold text-yellow">✓</span>
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Manifesto Pullquote with Editorial Framing */}
        <motion.div
          variants={scrollReveal}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-16 border border-cream/20 bg-red-deep p-8 text-cream sm:p-12 lg:p-16 rounded-md"
        >
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-yellow">
                The Philosophy
              </span>
              <blockquote className="mt-3 font-display text-2xl font-bold leading-tight sm:text-3xl md:text-4xl text-cream">
                “Traditional agencies manage creators like line items on an invoice. We organize them like an
                orchestra — independent soloists performing with collective power.”
              </blockquote>
              <div className="mt-6 flex items-center gap-3">
                <span className="font-mono text-xs text-cream/60">Clouterry Foundational Principle · 2026</span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center gap-4">
              <Link
                href="/about"
                className="btn-press inline-flex items-center gap-2 rounded-md bg-cream px-6 py-3 text-xs font-bold uppercase tracking-wider text-red hover:bg-yellow hover:text-ink shadow-sm"
              >
                <span>Read Full Studio Story</span>
                <ArrowUpRight size={14} weight="bold" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
