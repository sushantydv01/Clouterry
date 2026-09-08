"use client";

import { useState, useEffect } from "react";
import Logo from "./Logo";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/90 backdrop-blur-md py-3.5 border-b border-ink/8 shadow-xs"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 sm:px-8">
        {/* Brand Logo */}
        <a
          href="#"
          className="rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-red"
          aria-label="Clouterry Home"
        >
          <Logo />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main Navigation">
          <a
            href="#creators"
            className="text-sm font-medium text-ink/75 transition-colors hover:text-red focus-visible:ring-2 focus-visible:ring-red focus-visible:outline-none rounded-md px-1"
          >
            For Creators
          </a>
          <a
            href="#brands"
            className="text-sm font-medium text-ink/75 transition-colors hover:text-ink focus-visible:ring-2 focus-visible:ring-red focus-visible:outline-none rounded-md px-1"
          >
            For Brands
          </a>
          <a
            href="#story"
            className="text-sm font-medium text-ink/75 transition-colors hover:text-ink focus-visible:ring-2 focus-visible:ring-red focus-visible:outline-none rounded-md px-1"
          >
            Our Story
          </a>
        </nav>

        {/* Desktop Quick Actions */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#brands"
            className="rounded-full border border-ink/20 px-4 py-2 text-xs font-semibold text-ink transition-colors hover:border-ink/50 hover:bg-ink/5 focus-visible:ring-2 focus-visible:ring-ink focus-visible:outline-none"
          >
            Book a Call
          </a>
          <a
            href="#creators"
            className="rounded-full bg-red px-4 py-2 text-xs font-semibold text-cream shadow-xs transition-transform hover:scale-[1.03] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-red focus-visible:outline-none"
          >
            Join a Cohort
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink md:hidden focus-visible:ring-2 focus-visible:ring-red"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-ink/10 bg-cream px-6 py-6 shadow-md md:hidden animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-4 text-base font-medium text-ink">
            <a
              href="#creators"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-ink/80 hover:text-red"
            >
              For Creators
            </a>
            <a
              href="#brands"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-ink/80 hover:text-ink"
            >
              For Brands
            </a>
            <a
              href="#story"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-ink/80 hover:text-ink"
            >
              Our Story
            </a>
            <div className="mt-4 flex flex-col gap-3 pt-4 border-t border-ink/10">
              <a
                href="#creators"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-full bg-red px-5 py-2.5 text-center text-sm font-semibold text-cream"
              >
                Join a Cohort
              </a>
              <a
                href="#brands"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-full border border-ink/20 px-5 py-2.5 text-center text-sm font-semibold text-ink"
              >
                Book a Call
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
