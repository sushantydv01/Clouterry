"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { ArrowUpRight } from "@phosphor-icons/react";

export default function Footer() {
  const [timeUtc, setTimeUtc] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeUtc(
        now.toLocaleTimeString("en-US", {
          timeZone: "America/New_York",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="relative bg-ink text-cream border-t border-cream/15 px-6 pt-20 pb-12 sm:px-10 sm:pt-28 sm:pb-16 lg:px-16 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        {/* Top Call to Action: Massive Editorial Typography */}
        <div className="border-b border-cream/15 pb-16 lg:pb-24">
          <div className="flex items-center gap-3">
            <span className="inline-block h-2 w-2 rounded-full bg-yellow animate-pulse-subtle" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-cream/60">
              Initiate Contact · Cohort Inquiries
            </span>
          </div>

          <h2 className="mt-6 font-display text-4xl font-extrabold tracking-[-0.04em] text-cream sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.94]">
            Let&apos;s make something
            <br />
            people <span className="font-serif italic font-normal text-yellow">actually</span> watch.
          </h2>

          <div className="mt-10 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
            <a
              href="mailto:hello@clouterry.com"
              className="group inline-flex items-center gap-3 rounded-md bg-red px-8 py-4 font-display text-base font-bold uppercase tracking-wider text-cream transition-all duration-300 hover:bg-red-deep shadow-sm"
            >
              <span>hello@clouterry.com</span>
              <ArrowUpRight
                size={18}
                weight="bold"
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>

            <Link
              href="/creators"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-cream/75 transition-colors hover:text-yellow hover:underline hover:underline-offset-4"
            >
              <span>Creator Application Portal</span>
              <ArrowUpRight size={14} weight="bold" />
            </Link>
          </div>
        </div>

        {/* Middle Meta Row: Timezones, Live Studio Status & Quick Links */}
        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-12 lg:items-start border-b border-cream/10">
          <div className="lg:col-span-5">
            <Logo size="md" tone="cream" />
            <p className="mt-4 max-w-sm text-xs leading-relaxed text-cream/65 font-body">
              Clouterry organizes high-retention micro-creators into curated vertical cohorts, connecting
              them with brands who value authentic short-form cultural influence.
            </p>
          </div>

          <div className="lg:col-span-3">
            <span className="font-mono text-xs uppercase tracking-widest text-cream/40">Studio Navigation</span>
            <ul className="mt-4 space-y-2.5 text-xs font-bold uppercase tracking-wider text-cream/80">
              <li>
                <Link href="/creators" className="hover:text-yellow transition-colors">
                  For Creators (Cohort Portal)
                </Link>
              </li>
              <li>
                <Link href="/brands" className="hover:text-yellow transition-colors">
                  For Brands (Explore Rosters)
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-yellow transition-colors">
                  Our Story & Manifesto
                </Link>
              </li>
              <li>
                <a
                  href="https://instagram.com/clouterry"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-yellow transition-colors inline-flex items-center gap-1"
                >
                  <span>Instagram</span>
                  <ArrowUpRight size={12} weight="bold" />
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <span className="font-mono text-xs uppercase tracking-widest text-cream/40">Studio Locations</span>
            <div className="mt-4 space-y-2 text-xs font-mono text-cream/70">
              <div className="flex items-center justify-between border-b border-cream/10 pb-1.5">
                <span>NEW YORK (EST)</span>
                <span className="text-yellow">{timeUtc || "12:00"} EST</span>
              </div>
              <div className="flex items-center justify-between border-b border-cream/10 pb-1.5">
                <span>LONDON (GMT)</span>
                <span className="text-cream/50">OFFLINE</span>
              </div>
              <div className="flex items-center justify-between border-b border-cream/10 pb-1.5">
                <span>TOKYO (JST)</span>
                <span className="text-cream/50">OFFLINE</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal / Copyright Row */}
        <div className="flex flex-col items-start justify-between gap-4 pt-8 text-[11px] font-mono uppercase tracking-wider text-cream/40 sm:flex-row sm:items-center">
          <div>© {new Date().getFullYear()} CLOUTERRY INC. ALL CREATIVE RIGHTS RESERVED.</div>
          <div className="flex items-center gap-4">
            <span>COHORT PROTOCOL V2.4</span>
            <span>·</span>
            <span>HIGH-RETENTION SHORT FORM</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
