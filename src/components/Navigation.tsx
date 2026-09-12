"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { ArrowUpRight } from "@phosphor-icons/react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { href: "/cohorts", label: "Cohorts" },
  { href: "/brands", label: "Brands" },
  { href: "/creators", label: "Creators" },
  { href: "/faq", label: "FAQ" },
  { href: "/about", label: "Story" },
  { href: "/contact", label: "Contact" },
];

interface NavigationProps {
  tone?: "cream" | "red";
}

export default function Navigation({ tone }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);

  // Dynamic tone detection: if on /creators, tone is crimson unless overridden
  const effectiveTone = tone || (pathname === "/creators" ? "red" : "cream");
  const isRed = effectiveTone === "red";

  // Scroll listener for compacting pill on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
  }

  // Handle escape key to dismiss mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };
    if (mobileMenuOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  // Dynamic mouse reflection sheen tracking on desktop pill
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!navRef.current) return;
    const rect = navRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    navRef.current.style.setProperty("--mouse-x", `${x}px`);
    navRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <>
      <header
        className="fixed top-3.5 sm:top-5 left-0 right-0 z-50 pointer-events-none flex justify-center px-3.5 sm:px-6"
        aria-label="Primary Navigation Header"
      >
        <div
          ref={navRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setHoveredLink(null)}
          className={`liquid-glass-pill pointer-events-auto flex items-center justify-between transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isRed
              ? `liquid-glass-red text-cream ${scrolled ? "scrolled py-1.5 px-3.5 sm:px-4.5" : "py-2 px-4 sm:px-5"}`
              : `liquid-glass-cream text-ink ${scrolled ? "scrolled py-1.5 px-3.5 sm:px-4.5" : "py-2 px-4 sm:px-5"}`
          } w-full max-w-5xl shadow-2xl`}
        >
          {/* Dynamic liquid specular caustic follower */}
          <div className="liquid-sheen" aria-hidden="true" />

          {/* ── Left: Brand Identity ── */}
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/"
              className="group flex items-center gap-2 outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-full transition-transform duration-200 active:scale-95"
              aria-label="Clouterry Home"
            >
              <div
                className={`transition-transform duration-300 group-hover:rotate-6 ${
                  scrolled ? "scale-90" : "scale-95 sm:scale-100"
                }`}
              >
                <Logo size="sm" tone={isRed ? "cream" : "red"} />
              </div>
            </Link>
          </div>

          {/* ── Center: Desktop Navigation with Liquid Sliding Indicator ── */}
          <nav
            className="hidden md:flex items-center gap-1 lg:gap-1.5 px-2"
            aria-label="Desktop Menu"
          >
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              const isHovered = hoveredLink === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onMouseEnter={() => setHoveredLink(link.href)}
                  className={`relative px-3 py-1.5 text-[11px] lg:text-xs font-bold uppercase tracking-wider rounded-full transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 ${
                    isRed
                      ? isActive
                        ? "text-red"
                        : "text-cream/80 hover:text-cream focus-visible:ring-cream"
                      : isActive
                        ? "text-cream"
                        : "text-ink/75 hover:text-ink focus-visible:ring-red"
                  }`}
                >
                  {/* Fluid Active Liquid Pill */}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavPill"
                      className={`absolute inset-0 rounded-full ${
                        isRed
                          ? "bg-cream shadow-sm"
                          : "bg-ink shadow-sm"
                      }`}
                      style={{ zIndex: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 420,
                        damping: 32,
                        mass: 0.8,
                      }}
                    />
                  )}

                  {/* Fluid Hover Pill Preview */}
                  {!isActive && isHovered && (
                    <motion.span
                      layoutId="hoverNavPill"
                      className={`absolute inset-0 rounded-full ${
                        isRed ? "bg-cream/15" : "bg-ink/8"
                      }`}
                      style={{ zIndex: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 450,
                        damping: 35,
                      }}
                    />
                  )}

                  {/* Link Text */}
                  <span className="relative z-10 block transition-transform duration-150 active:scale-95">
                    {link.label}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* ── Right: Desktop Actions ── */}
          <div className="hidden md:flex items-center gap-2 shrink-0">
            <Link
              href="/contact"
              className={`rounded-full px-3.5 py-1.5 text-[11px] lg:text-xs font-bold uppercase tracking-wider transition-all duration-150 active:scale-95 focus-visible:outline-none focus-visible:ring-2 ${
                isRed
                  ? "border border-cream/40 text-cream hover:bg-cream/15 focus-visible:ring-cream"
                  : "border border-ink/25 text-ink hover:bg-ink/5 focus-visible:ring-red"
              }`}
            >
              Book Call
            </Link>

            <Link
              href="/creators#apply"
              className={`group relative overflow-hidden rounded-full px-4 py-1.5 text-[11px] lg:text-xs font-bold uppercase tracking-wider transition-all duration-150 active:scale-95 focus-visible:outline-none focus-visible:ring-2 shadow-sm ${
                isRed
                  ? "bg-cream text-red hover:bg-cream-dim focus-visible:ring-cream"
                  : "bg-red text-cream hover:bg-red-deep focus-visible:ring-red"
              }`}
            >
              {/* Subtle liquid shimmer on button */}
              <span
                className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"
                aria-hidden="true"
              />
              <span className="relative z-10 flex items-center gap-1">
                <span>Join Cohort</span>
                <ArrowUpRight size={12} weight="bold" />
              </span>
            </Link>
          </div>

          {/* ── Mobile Right: Menu Toggle with Morphing Icon ── */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`relative flex h-8.5 w-8.5 items-center justify-center rounded-full transition-transform duration-150 active:scale-90 focus-visible:outline-none focus-visible:ring-2 ${
                isRed
                  ? "bg-cream/15 text-cream border border-cream/30 focus-visible:ring-cream"
                  : "bg-ink/5 text-ink border border-ink/15 focus-visible:ring-red"
              }`}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {/* Morphing Hamburger SVG */}
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-300"
              >
                <motion.line
                  x1="4"
                  y1="7"
                  x2="20"
                  y2="7"
                  animate={
                    mobileMenuOpen
                      ? { rotate: 45, y: 5, x: 0 }
                      : { rotate: 0, y: 0, x: 0 }
                  }
                  transition={{ type: "spring", stiffness: 400, damping: 28 }}
                  style={{ originX: "50%", originY: "50%" }}
                />
                <motion.line
                  x1="4"
                  y1="12"
                  x2="20"
                  y2="12"
                  animate={
                    mobileMenuOpen
                      ? { opacity: 0, scaleX: 0 }
                      : { opacity: 1, scaleX: 1 }
                  }
                  transition={{ duration: 0.15 }}
                />
                <motion.line
                  x1="4"
                  y1="17"
                  x2="20"
                  y2="17"
                  animate={
                    mobileMenuOpen
                      ? { rotate: -45, y: -5, x: 0 }
                      : { rotate: 0, y: 0, x: 0 }
                  }
                  transition={{ type: "spring", stiffness: 400, damping: 28 }}
                  style={{ originX: "50%", originY: "50%" }}
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile Liquid Glass Drawer / Overlay ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Soft Ambient Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-ink/20 backdrop-blur-xs md:hidden"
              aria-hidden="true"
            />

            {/* Suspended Liquid Glass Sheet */}
            <motion.div
              initial={{ opacity: 0, y: -16, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.97 }}
              transition={{
                type: "spring",
                stiffness: 380,
                damping: 30,
                mass: 0.85,
              }}
              className={`fixed top-17 left-3.5 right-3.5 z-40 max-w-lg mx-auto rounded-3xl p-5 overflow-hidden md:hidden ${
                isRed
                  ? "liquid-glass-drawer-red text-cream"
                  : "liquid-glass-drawer text-ink"
              }`}
            >
              <div className="flex flex-col space-y-5">
                {/* Mobile Navigation Links */}
                <nav className="flex flex-col gap-1">
                  {NAV_LINKS.map((link, idx) => {
                    const isActive = pathname === link.href;

                    return (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: 0.04 + idx * 0.03,
                          duration: 0.25,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`flex items-center justify-between px-4 py-3 rounded-xl font-display text-lg font-bold tracking-tight transition-all duration-150 active:scale-98 ${
                            isRed
                              ? isActive
                                ? "bg-cream text-red shadow-sm"
                                : "text-cream/80 hover:bg-cream/15 hover:text-cream"
                              : isActive
                                ? "bg-ink text-cream shadow-sm"
                                : "text-ink/80 hover:bg-ink/5 hover:text-ink"
                          }`}
                        >
                          <span>{link.label}</span>
                          {isActive && (
                            <span
                              className={`h-2 w-2 rounded-full ${
                                isRed ? "bg-red" : "bg-gold"
                              }`}
                            />
                          )}
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>

                {/* Mobile Action CTAs */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.24, duration: 0.25 }}
                  className={`flex flex-col gap-2.5 border-t pt-4 ${
                    isRed ? "border-cream/20" : "border-ink/10"
                  }`}
                >
                  <Link
                    href="/creators#apply"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-center gap-2 rounded-xl py-3 text-center text-xs font-bold uppercase tracking-wider transition-transform duration-150 active:scale-98 shadow-sm ${
                      isRed
                        ? "bg-cream text-red hover:bg-cream-dim"
                        : "bg-red text-cream hover:bg-red-deep"
                    }`}
                  >
                    <span>Join a Cohort</span>
                    <ArrowUpRight size={14} weight="bold" />
                  </Link>

                  <Link
                    href="/brands"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`rounded-xl border py-3 text-center text-xs font-bold uppercase tracking-wider transition-transform duration-150 active:scale-98 ${
                      isRed
                        ? "border-cream/50 text-cream hover:bg-cream/15"
                        : "border-ink/30 text-ink hover:bg-ink/5"
                    }`}
                  >
                    Book Brand Consultation
                  </Link>
                </motion.div>

                {/* Mobile Footer Meta */}
                <div
                  className={`flex items-center justify-between border-t pt-3 text-xs ${
                    isRed ? "border-cream/15 text-cream/60" : "border-ink/10 text-ink/50"
                  }`}
                >
                  <a
                    href="mailto:hello@clouterry.com"
                    className="hover:underline underline-offset-4"
                  >
                    hello@clouterry.com
                  </a>
                  <span className="font-mono text-[10px] uppercase tracking-wider opacity-75">
                    14-Day Delivery
                  </span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
