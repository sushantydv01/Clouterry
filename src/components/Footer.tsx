"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { ArrowUpRight, CheckCircle, Clock, Sparkle } from "@phosphor-icons/react";

export default function Footer() {
  const [times, setTimes] = useState({
    london: "12:00 PM",
    newYork: "07:00 AM",
    tokyo: "08:00 PM",
  });
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    const updateTimes = () => {
      const now = new Date();
      const formatTime = (timeZone: string) =>
        new Intl.DateTimeFormat("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
          timeZone,
        }).format(now);

      setTimes({
        london: formatTime("Europe/London"),
        newYork: formatTime("America/New_York"),
        tokyo: formatTime("Asia/Tokyo"),
      });
    };

    updateTimes();
    const interval = setInterval(updateTimes, 30000);
    return () => clearInterval(interval);
  }, []);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="relative bg-ink text-cream border-t border-cream/15 pt-20 pb-12 sm:pt-28 sm:pb-16 px-6 sm:px-10 lg:px-16 overflow-hidden selection:bg-gold selection:text-ink">
      <div className="mx-auto max-w-7xl">
        {/* Top Section: Grand Statement & Direct Booking Portal */}
        <div className="border-b border-cream/15 pb-16 lg:pb-20">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-cream/20 bg-cream/5 px-3 py-1 text-xs font-mono font-semibold uppercase tracking-wider text-gold mb-6">
                <Sparkle size={13} weight="fill" />
                <span>Next Cohort Sprint Opens Monday</span>
              </div>

              <h2 className="font-display text-4xl font-extrabold tracking-[-0.04em] text-cream sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.93]">
                Let&apos;s make something
                <br />
                people actually watch.
              </h2>

              <p className="mt-6 max-w-xl text-base sm:text-lg text-cream/75 font-body leading-relaxed">
                Whether you are a brand looking for high-retention short-form video or an independent creator
                ready for fair rates with zero script constraints, Clouterry delivers on a guaranteed 14-day cadence.
              </p>
            </div>

            {/* Direct Dual CTAs */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3.5 shrink-0">
              <Link
                href="/brands"
                className="btn-press group inline-flex items-center justify-center gap-3 rounded-md bg-red px-8 py-4 font-display text-sm font-bold uppercase tracking-wider text-cream transition-all duration-300 hover:bg-red-deep shadow-sm"
              >
                <span>Book Brand Consultation</span>
                <ArrowUpRight
                  size={16}
                  weight="bold"
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>

              <Link
                href="/creators"
                className="btn-press inline-flex items-center justify-center gap-2 rounded-md border border-cream/40 px-8 py-4 font-display text-sm font-bold uppercase tracking-wider text-cream hover:bg-cream hover:text-ink transition-all duration-200"
              >
                <span>Join Creator Cohort</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Studio Real-time Status & World Clocks */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-8 border-b border-cream/15 text-xs font-mono">
          <div className="space-y-1">
            <span className="text-cream/40 uppercase tracking-widest block text-[10px]">Studio Status</span>
            <div className="flex items-center gap-1.5 text-cream font-semibold">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Accepting Cycle 03 Sprints</span>
            </div>
          </div>

          <div className="space-y-1">
            <span className="text-cream/40 uppercase tracking-widest block text-[10px]">London (GMT)</span>
            <div className="flex items-center gap-1.5 text-cream font-semibold">
              <Clock size={12} className="text-gold" />
              <span>{times.london}</span>
            </div>
          </div>

          <div className="space-y-1">
            <span className="text-cream/40 uppercase tracking-widest block text-[10px]">New York (EST)</span>
            <div className="flex items-center gap-1.5 text-cream font-semibold">
              <Clock size={12} className="text-gold" />
              <span>{times.newYork}</span>
            </div>
          </div>

          <div className="space-y-1">
            <span className="text-cream/40 uppercase tracking-widest block text-[10px]">Tokyo (JST)</span>
            <div className="flex items-center gap-1.5 text-cream font-semibold">
              <Clock size={12} className="text-gold" />
              <span>{times.tokyo}</span>
            </div>
          </div>
        </div>

        {/* Multi-Column Agency Directory Sitemap */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 sm:gap-10 py-16 border-b border-cream/15 text-sm font-body">
          {/* Col 1: Active Cohorts */}
          <div className="col-span-2 sm:col-span-1 md:col-span-3 space-y-3">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-gold block mb-4">
              01 / Active Cohorts
            </span>
            <ul className="space-y-2.5 text-cream/75">
              <li>
                <Link href="/cohorts" className="hover:text-cream transition-colors">
                  Beauty & Daily Rituals
                </Link>
              </li>
              <li>
                <Link href="/cohorts" className="hover:text-cream transition-colors">
                  Artisanal Culinary & Terroir
                </Link>
              </li>
              <li>
                <Link href="/cohorts" className="hover:text-cream transition-colors">
                  Workspaces & Hardware EDC
                </Link>
              </li>
              <li>
                <Link href="/cohorts" className="hover:text-cream transition-colors">
                  Mindful Movement & Conditioning
                </Link>
              </li>
              <li className="pt-2">
                <Link
                  href="/cohorts"
                  className="inline-flex items-center gap-1 text-xs font-mono font-bold uppercase text-cream hover:text-gold transition-colors"
                >
                  <span>View All 6 Cohort Dossiers</span>
                  <ArrowUpRight size={11} weight="bold" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2: Platform Infrastructure */}
          <div className="col-span-2 sm:col-span-1 md:col-span-3 space-y-3">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-gold block mb-4">
              02 / Agency Model
            </span>
            <ul className="space-y-2.5 text-cream/75">
              <li>
                <Link href="/brands" className="hover:text-cream transition-colors">
                  Brand Partnership Sprint
                </Link>
              </li>
              <li>
                <Link href="/creators" className="hover:text-cream transition-colors">
                  Creator Application Portal
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-cream transition-colors">
                  14-Day Delivery Guarantee
                </Link>
              </li>
              <li>
                <Link href="/creators#apply" className="hover:text-cream transition-colors">
                  The Creator Charter
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-cream transition-colors">
                  90-Day Spark Ads Rights
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Company & Governance */}
          <div className="col-span-2 sm:col-span-1 md:col-span-2 space-y-3">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-gold block mb-4">
              03 / Studio
            </span>
            <ul className="space-y-2.5 text-cream/75">
              <li>
                <Link href="/about" className="hover:text-cream transition-colors">
                  Studio Story
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-cream transition-colors">
                  Master FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-cream transition-colors">
                  Contact Studio
                </Link>
              </li>
              <li>
                <a
                  href="https://instagram.com/clouterry"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 hover:text-cream transition-colors"
                >
                  <span>Instagram</span>
                  <ArrowUpRight size={11} weight="bold" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Dispatch Newsletter */}
          <div className="col-span-2 sm:col-span-2 md:col-span-4 space-y-4">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-gold block">
              04 / The Clouterry Dispatch
            </span>
            <p className="text-xs text-cream/70 leading-relaxed font-body">
              Bi-weekly analysis of high-retention short-form creative direction, acoustic pacing, and new cohort brief openings.
            </p>

            {!subscribed ? (
              <form onSubmit={handleNewsletter} className="flex items-center rounded-md border border-cream/25 bg-cream/5 p-1 focus-within:border-gold">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="marketing@brand.com"
                  className="w-full bg-transparent px-3 py-2 text-xs text-cream placeholder:text-cream/35 outline-none font-body"
                />
                <button
                  type="submit"
                  className="btn-press rounded-md bg-cream px-4 py-2 text-xs font-bold uppercase tracking-wider text-ink hover:bg-cream-dim transition-colors shrink-0"
                >
                  Join
                </button>
              </form>
            ) : (
              <div className="flex items-center gap-2 text-xs font-mono text-gold bg-cream/10 p-3 rounded-md">
                <CheckCircle size={16} weight="fill" />
                <span>Subscribed to Dispatch. Welcome.</span>
              </div>
            )}

            <div className="text-[11px] text-cream/40 font-mono">
              Zero spam. Unsubscribe anytime.
            </div>
          </div>
        </div>

        {/* Bottom Row: Wordmark, Legal & Direct Inquiries */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-xs text-cream/50 font-body">
          <div className="flex items-center gap-4">
            <Logo size="sm" tone="cream" />
            <span className="font-mono text-[11px]">
              &copy; {new Date().getFullYear()} Clouterry Talent Infrastructure. All rights reserved.
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-6 font-mono text-[11px]">
            <Link href="/faq" className="hover:text-cream transition-colors">
              Commercial Terms
            </Link>
            <Link href="/faq" className="hover:text-cream transition-colors">
              Privacy Standard
            </Link>
            <a href="mailto:hello@clouterry.com" className="hover:text-cream transition-colors underline underline-offset-4">
              hello@clouterry.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
