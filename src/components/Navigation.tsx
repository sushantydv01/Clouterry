"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { List, X, ArrowUpRight } from "@phosphor-icons/react";
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

export default function Navigation({ tone = "cream" }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Default to cream register unless explicitly set to red (e.g. on /creators)
  const isRed = tone === "red";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 will-change-transform ${
        scrolled
          ? isRed
            ? "border-b border-cream/20 bg-red/98 backdrop-blur-lg shadow-sm text-cream"
            : "border-b border-ink/15 bg-cream/98 backdrop-blur-lg shadow-sm text-ink"
          : isRed
            ? "border-b border-cream/15 bg-red/92 backdrop-blur-md text-cream"
            : "border-b border-ink/10 bg-cream/92 backdrop-blur-md text-ink"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-6 sm:px-10 lg:px-16 transition-all duration-300 ${
          scrolled ? "h-14" : "h-16"
        }`}
      >
        {/* Brand Logo */}
        <div className="flex items-center gap-4 sm:gap-6">
          <Link
            href="/"
            className="outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm"
            aria-label="Clouterry Home"
          >
            <div className={`transition-transform duration-300 ${scrolled ? "scale-95" : "scale-100"}`}>
              <Logo size="sm" tone={isRed ? "cream" : "red"} />
            </div>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden items-center gap-6 lg:gap-8 md:flex"
          aria-label="Main Navigation"
        >
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative py-1 text-xs font-bold uppercase tracking-widest transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 ${
                  isRed
                    ? isActive
                      ? "text-cream"
                      : "text-cream/70 hover:text-cream focus-visible:ring-cream"
                    : isActive
                      ? "text-ink"
                      : "text-ink/65 hover:text-ink focus-visible:ring-red"
                }`}
              >
                <span>{link.label}</span>
                {isActive ? (
                  <motion.span
                    layoutId="navIndicator"
                    className={`absolute -bottom-1 left-0 right-0 h-[2px] ${
                      isRed ? "bg-cream" : "bg-red"
                    }`}
                    transition={{ type: "spring", stiffness: 450, damping: 32 }}
                  />
                ) : (
                  <span
                    className={`absolute -bottom-1 left-0 right-0 h-[1.5px] scale-x-0 transition-transform duration-200 ease-out group-hover:scale-x-100 ${
                      isRed ? "bg-cream/50" : "bg-ink/40"
                    }`}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Actions: Crisp, rectangular geometry with tactile response */}
        <div className="hidden items-center gap-2.5 lg:flex">
          <Link
            href="/contact"
            className={`btn-press rounded-md border px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider focus-visible:outline-none focus-visible:ring-2 ${
              isRed
                ? "border-cream/70 text-cream hover:bg-cream hover:text-red focus-visible:ring-cream"
                : "border-ink/80 text-ink hover:bg-ink hover:text-cream focus-visible:ring-red"
            }`}
          >
            Book Call
          </Link>
          <Link
            href="/creators#apply"
            className={`btn-press rounded-md px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider focus-visible:outline-none focus-visible:ring-2 shadow-xs ${
              isRed
                ? "bg-cream text-red hover:bg-cream-dim focus-visible:ring-cream"
                : "bg-red text-cream hover:bg-red-deep focus-visible:ring-red"
            }`}
          >
            Join Cohort
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`flex h-9 w-9 items-center justify-center rounded-md border md:hidden focus-visible:outline-none focus-visible:ring-2 ${
            isRed
              ? "border-cream/30 text-cream focus-visible:ring-cream"
              : "border-ink/20 text-ink focus-visible:ring-red"
          }`}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={18} weight="bold" /> : <List size={18} weight="bold" />}
        </button>
      </div>

      {/* Mobile Dropdown Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className={`overflow-hidden border-b md:hidden ${
              isRed ? "border-cream/15 bg-red text-cream" : "border-ink/10 bg-cream text-ink"
            }`}
          >
            <div className="flex flex-col px-6 py-6 space-y-6">
              <nav className="flex flex-col gap-3">
                {NAV_LINKS.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between py-2 font-display text-xl font-bold tracking-tight transition-colors duration-200 ${
                        isRed
                          ? isActive
                            ? "text-cream underline underline-offset-4 decoration-1"
                            : "text-cream/80 hover:text-cream"
                          : isActive
                            ? "text-red"
                            : "text-ink/80 hover:text-ink"
                      }`}
                    >
                      <span>{link.label}</span>
                    </Link>
                  );
                })}
              </nav>

              <div
                className={`flex flex-col gap-2.5 border-t pt-5 ${
                  isRed ? "border-cream/20" : "border-ink/10"
                }`}
              >
                <Link
                  href="/creators"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-center gap-2 rounded-md py-3 text-center text-xs font-bold uppercase tracking-wider ${
                    isRed ? "bg-cream text-red hover:bg-cream-dim" : "bg-red text-cream hover:bg-red-deep"
                  }`}
                >
                  <span>Join a Cohort</span>
                  <ArrowUpRight size={14} weight="bold" />
                </Link>

                <Link
                  href="/brands"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`rounded-md border py-3 text-center text-xs font-bold uppercase tracking-wider ${
                    isRed
                      ? "border-cream/70 text-cream hover:bg-cream hover:text-red"
                      : "border-ink/80 text-ink hover:bg-ink hover:text-cream"
                  }`}
                >
                  Book a Brand Consultation
                </Link>
              </div>

              {/* Contact footer inside mobile nav */}
              <div
                className={`flex items-center justify-between border-t pt-4 text-xs ${
                  isRed ? "border-cream/15 text-cream/60" : "border-ink/10 text-ink/50"
                }`}
              >
                <a href="mailto:hello@clouterry.com" className="hover:underline underline-offset-4">
                  hello@clouterry.com
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
