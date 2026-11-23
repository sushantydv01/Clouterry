"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { Menu, X, ArrowUpRight } from "lucide-react";

const NAV_LINKS = [
  { href: "/capabilities", label: "Capabilities" },
  { href: "/firm", label: "The Firm" },
  { href: "/industries", label: "Industries" },
  { href: "/work", label: "Our Work" },
  { href: "/insights", label: "Insights" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle closing drawer on click
  const closeMenu = () => setMobileMenuOpen(false);

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
        <Logo />

        {/* Quiet Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary Navigation">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-md px-3.5 py-1.5 text-xs font-medium transition-colors ${
                  isActive
                    ? "text-[var(--text-primary)] bg-[var(--bg-raised)]"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-raised)]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Quiet Desktop Actions */}
        <div className="hidden items-center gap-4 md:flex">
          <Link
            href="/connect"
            className="inline-flex h-9 items-center justify-center gap-1.5 rounded-lg bg-[var(--accent)] px-4 text-xs font-medium text-white transition-colors hover:bg-[var(--accent-hover)] shadow-2xs"
          >
            <span>Start a project</span>
            <ArrowUpRight size={13} className="opacity-80" />
          </Link>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border-subtle)] text-[var(--text-primary)] md:hidden"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-[var(--border-hairline)] bg-[var(--bg-page)] px-6 py-5 md:hidden shadow-xs">
          <nav className="flex flex-col gap-1 text-sm font-normal text-[var(--text-primary)]">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="rounded-md px-3 py-2 text-xs font-medium text-[var(--text-secondary)] hover:bg-[var(--bg-raised)] hover:text-[var(--text-primary)]"
              >
                {link.label}
              </Link>
            ))}

            <div className="mt-3 pt-3 border-t border-[var(--border-hairline)] flex flex-col gap-2">
              <Link
                href="/connect"
                onClick={closeMenu}
                className="flex h-10 items-center justify-center gap-1.5 rounded-lg bg-[var(--accent)] px-4 text-xs font-medium text-white"
              >
                <span>Start a project</span>
                <ArrowUpRight size={13} />
              </Link>
              <Link
                href="/faq"
                onClick={closeMenu}
                className="flex h-10 items-center justify-center rounded-lg border border-[var(--border-subtle)] px-4 text-xs font-medium text-[var(--text-secondary)]"
              >
                Operational FAQ
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
