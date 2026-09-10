"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { List, X } from "@phosphor-icons/react";

const NAV_LINKS = [
  { href: "/creators", label: "For Creators" },
  { href: "/brands", label: "For Brands" },
  { href: "/about", label: "Our Story" },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 sm:pt-6 pointer-events-none">
      <div className="mx-auto max-w-5xl">
        {/* Navigation Bar with Liquid Glass Treatment */}
        <div className="pointer-events-auto flex items-center justify-between rounded-lg liquid-glass px-4 py-2.5 sm:px-6">
          {/* Brand Logo in crisp Star White */}
          <Link
            href="/"
            className="outline-none focus-visible:ring-2 focus-visible:ring-ember"
            aria-label="Clouterry Home"
          >
            <Logo size="sm" tone="white" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden items-center gap-7 md:flex"
            aria-label="Main Navigation"
          >
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xs font-medium transition-colors ${
                    isActive
                      ? "text-star-white font-semibold"
                      : "text-silver/80 hover:text-star-white"
                  } focus-visible:ring-2 focus-visible:ring-ember focus-visible:outline-none`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Actions: Liquid Glass "Book a Call" & Star-White "Join a Cohort" */}
          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="/brands"
              className="rounded-md liquid-glass-interactive px-4 py-1.5 text-xs font-semibold text-star-white border-b-2 border-b-ember/70 hover:border-b-ember focus-visible:ring-2 focus-visible:ring-ember"
            >
              Book a Call
            </Link>
            <Link
              href="/creators"
              className="rounded-md bg-star-white px-4 py-1.5 text-xs font-bold text-void transition-colors hover:bg-star-white/90 focus-visible:ring-2 focus-visible:ring-ember"
            >
              Join a Cohort
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-8 w-8 items-center justify-center rounded-md border border-star-white/15 text-star-white md:hidden focus-visible:ring-2 focus-visible:ring-ember"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X size={18} weight="bold" />
            ) : (
              <List size={18} weight="bold" />
            )}
          </button>
        </div>

        {/* Mobile Dropdown Panel */}
        {mobileMenuOpen && (
          <div className="pointer-events-auto mt-2 rounded-lg liquid-glass p-6 md:hidden animate-in fade-in duration-200">
            <nav className="flex flex-col gap-3 text-sm font-semibold text-star-white">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`py-2 transition-colors ${
                      isActive ? "text-star-white font-bold" : "text-silver hover:text-star-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="mt-2 flex flex-col gap-2.5 pt-4 border-t border-star-white/10">
                <Link
                  href="/creators"
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-md bg-star-white py-2.5 text-center text-xs font-bold text-void"
                >
                  Join a Cohort
                </Link>
                <Link
                  href="/brands"
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-md liquid-glass-interactive py-2.5 text-center text-xs font-bold text-star-white border-b-2 border-b-ember/80"
                >
                  Book a Call
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
