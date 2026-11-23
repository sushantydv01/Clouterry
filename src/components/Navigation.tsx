"use client";

import { useState, useEffect } from "react";
import Logo from "./Logo";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        scrolled
          ? "bg-[var(--bg-page)]/95 backdrop-blur-sm border-b border-[var(--border-hairline)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 sm:px-8">
        {/* Brand Wordmark */}
        <a
          href="#"
          className="rounded-md outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
          aria-label="Clouterry Home"
        >
          <Logo />
        </a>

        {/* Quiet Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary Navigation">
          <a
            href="#cohorts"
            className="rounded-md px-3 py-1.5 text-sm font-normal text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)] hover:bg-[var(--bg-raised)]"
          >
            Cohorts
          </a>
          <a
            href="#how-it-works"
            className="rounded-md px-3 py-1.5 text-sm font-normal text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)] hover:bg-[var(--bg-raised)]"
          >
            How it works
          </a>
          <a
            href="#brands"
            className="rounded-md px-3 py-1.5 text-sm font-normal text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)] hover:bg-[var(--bg-raised)]"
          >
            For brands
          </a>
          <a
            href="#creators"
            className="rounded-md px-3 py-1.5 text-sm font-normal text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)] hover:bg-[var(--bg-raised)]"
          >
            For creators
          </a>
          <a
            href="#story"
            className="rounded-md px-3 py-1.5 text-sm font-normal text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)] hover:bg-[var(--bg-raised)]"
          >
            About
          </a>
        </nav>

        {/* Quiet Desktop Actions */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#brands"
            className="px-2 py-1.5 text-sm font-normal text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
          >
            Brand inquiry
          </a>
          <a
            href="#creators"
            className="inline-flex h-9 items-center justify-center rounded-lg bg-[var(--accent)] px-4 text-sm font-medium text-white transition-colors hover:bg-[var(--accent-hover)]"
          >
            Join a cohort
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border-subtle)] text-[var(--text-primary)] md:hidden"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
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
        <div className="border-b border-[var(--border-hairline)] bg-[var(--bg-page)] px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-1 text-sm font-normal text-[var(--text-primary)]">
            <a
              href="#cohorts"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-md px-3 py-2 text-[var(--text-secondary)] hover:bg-[var(--bg-raised)] hover:text-[var(--text-primary)]"
            >
              Cohorts
            </a>
            <a
              href="#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-md px-3 py-2 text-[var(--text-secondary)] hover:bg-[var(--bg-raised)] hover:text-[var(--text-primary)]"
            >
              How it works
            </a>
            <a
              href="#brands"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-md px-3 py-2 text-[var(--text-secondary)] hover:bg-[var(--bg-raised)] hover:text-[var(--text-primary)]"
            >
              For brands
            </a>
            <a
              href="#creators"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-md px-3 py-2 text-[var(--text-secondary)] hover:bg-[var(--bg-raised)] hover:text-[var(--text-primary)]"
            >
              For creators
            </a>
            <a
              href="#story"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-md px-3 py-2 text-[var(--text-secondary)] hover:bg-[var(--bg-raised)] hover:text-[var(--text-primary)]"
            >
              About
            </a>

            <div className="mt-2 flex flex-col gap-2 pt-3 border-t border-[var(--border-hairline)]">
              <a
                href="#creators"
                onClick={() => setMobileMenuOpen(false)}
                className="flex h-10 items-center justify-center rounded-lg bg-[var(--accent)] px-4 text-sm font-medium text-white"
              >
                Join a cohort
              </a>
              <a
                href="#brands"
                onClick={() => setMobileMenuOpen(false)}
                className="flex h-10 items-center justify-center rounded-lg border border-[var(--border-subtle)] px-4 text-sm font-medium text-[var(--text-primary)]"
              >
                Brand inquiry
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
