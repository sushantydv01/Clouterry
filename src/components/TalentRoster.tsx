"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkle } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { scrollReveal, staggerGroup, staggerChild, viewportOnce } from "@/lib/motion";

interface Creator {
  name: string;
  handle: string;
  vertical: string;
  image: string;
  followers: string;
  signature: string;
  color: string;
  tag: string;
}

const CREATORS: Creator[] = [
  {
    name: "Maya Lin",
    handle: "@mayaskinritual",
    vertical: "Beauty & Daily Rituals",
    image: "/creators/maya.jpg",
    followers: "48k community",
    signature: "Unhurried morning rituals, daylight skin checks & serum macro",
    color: "bg-red text-cream",
    tag: "Aesthetic Rituals",
  },
  {
    name: "Kai Tanaka",
    handle: "@kaicrafts",
    vertical: "Workspaces & Tech EDC",
    image: "/creators/kai.jpg",
    followers: "72k community",
    signature: "Mechanical acoustics, walnut workspaces & clean industrial EDC",
    color: "bg-ink text-cream",
    tag: "Industrial Craft",
  },
  {
    name: "Elena Rostova",
    handle: "@elenamovement",
    vertical: "Movement & Conditioning",
    image: "/creators/elena.jpg",
    followers: "34k community",
    signature: "Architectural conditioning, pilates form & nervous system recovery",
    color: "bg-yellow text-ink",
    tag: "Form & Longevity",
  },
  {
    name: "Marcus Vance",
    handle: "@marcuscooks",
    vertical: "Artisanal Culinary",
    image: "/creators/marcus.jpg",
    followers: "61k community",
    signature: "Regional terroir, sizzling cast iron ASMR & heritage sourdough",
    color: "bg-red text-cream",
    tag: "Kitchen ASMR",
  },
  {
    name: "Mateo Alvarez",
    handle: "@mateolens",
    vertical: "Visual Cinema & EDC",
    image: "/creators/mateo.jpg",
    followers: "29k community",
    signature: "Tactile gear loadouts, low-light film grading & audio detail",
    color: "bg-cream-dim text-ink border border-ink/15",
    tag: "Cinema Short-Form",
  },
  {
    name: "Sophia Laurent",
    handle: "@sophialifestyle",
    vertical: "Aesthetic Living",
    image: "/creators/sophia.jpg",
    followers: "85k community",
    signature: "Mindful apartment design, linen textures & capsule wardrobe",
    color: "bg-red text-cream",
    tag: "Tactile Minimal",
  },
];

export default function TalentRoster() {
  const [hoveredCreator, setHoveredCreator] = useState<string | null>(null);

  return (
    <section className="bg-ink px-6 py-20 text-cream sm:px-10 sm:py-28 lg:px-16 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading with Editorial Contrast */}
        <motion.div
          variants={scrollReveal}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col justify-between gap-6 border-b border-cream/15 pb-8 md:flex-row md:items-end"
        >
          <div>
            <div className="flex items-center gap-2.5">
              <Sparkle size={16} weight="fill" className="text-yellow" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-cream/60">
                Talent Roster · Curated Cohorts
              </span>
            </div>

            <h2 className="mt-3 font-display text-4xl font-extrabold tracking-[-0.035em] text-cream sm:text-5xl md:text-6xl">
              Real creators.
              <br />
              <span className="font-serif italic font-normal text-yellow">Uncompromised</span> taste.
            </h2>
          </div>

          <div className="max-w-md text-sm leading-relaxed text-cream/75">
            <p>
              We don&apos;t run an open directory of random spam handles. Every cohort member is
              individually selected for aesthetic discipline, retention rate, and authentic audience rapport.
            </p>
          </div>
        </motion.div>

        {/* Gallery Grid: Editorial fashion spread, non-generic cards */}
        <motion.div
          variants={staggerGroup(0.06)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {CREATORS.map((creator) => {
            const isHovered = hoveredCreator === creator.handle;

            return (
              <motion.article
                key={creator.handle}
                variants={staggerChild}
                onMouseEnter={() => setHoveredCreator(creator.handle)}
                onMouseLeave={() => setHoveredCreator(null)}
                className="group relative flex flex-col justify-between border border-cream/15 bg-ink/80 p-4 transition-all duration-300 hover:border-cream/40"
              >
                {/* Photo Frame */}
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-ink/50">
                  <Image
                    src={creator.image}
                    alt={`${creator.name} - ${creator.vertical}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity duration-300" />

                  {/* Corner Pill Tag */}
                  <span
                    className={`absolute top-3 left-3 rounded-sm px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-wider ${creator.color}`}
                  >
                    {creator.tag}
                  </span>

                  {/* Audience Metric Badge */}
                  <span className="absolute bottom-3 right-3 rounded-sm bg-ink/90 px-2 py-0.5 font-mono text-[11px] font-medium text-cream/90 backdrop-blur-sm border border-cream/20">
                    {creator.followers}
                  </span>
                </div>

                {/* Creator Details */}
                <div className="mt-4 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-baseline justify-between">
                      <h3 className="font-display text-xl font-bold tracking-tight text-cream">
                        {creator.name}
                      </h3>
                      <span className="font-mono text-xs text-cream/50">{creator.handle}</span>
                    </div>

                    <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-yellow">
                      {creator.vertical}
                    </div>

                    <p className="mt-3 text-xs leading-relaxed text-cream/70 font-body">
                      {creator.signature}
                    </p>
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-cream/10 pt-3 text-[11px] font-mono uppercase tracking-wider text-cream/50">
                    <span>14-Day Delivery</span>
                    <span className="text-yellow group-hover:underline flex items-center gap-1 transition-colors">
                      Cohort Active <ArrowRight size={12} weight="bold" />
                    </span>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Closing Action Row */}
        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-cream/15 pt-8 sm:flex-row">
          <div className="flex items-center gap-3">
            <span className="inline-block h-2 w-2 rounded-full bg-yellow animate-pulse-subtle" />
            <span className="font-mono text-xs uppercase tracking-wider text-cream/70">
              Evaluating applications for new cohort verticals
            </span>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/creators"
              className="btn-press inline-flex items-center gap-2 rounded-md bg-cream px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-ink hover:bg-yellow shadow-xs"
            >
              <span>Apply to Join Roster</span>
              <ArrowRight size={14} weight="bold" />
            </Link>

            <Link
              href="/brands"
              className="btn-press inline-flex items-center rounded-md border border-cream/30 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-cream hover:border-cream hover:bg-cream hover:text-ink"
            >
              Book Cohort Roster
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
