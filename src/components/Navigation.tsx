"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import MagneticButton from "./MagneticButton";
import { List, X } from "@phosphor-icons/react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { href: "/creators", label: "For Creators" },
  { href: "/brands", label: "For Brands" },
  { href: "/about", label: "Our Story" },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 sm:pt-6 pointer-events-none">
      <div className="mx-auto max-w-5xl">
        {/* Navigation Bar */}
        <div
          className={`pointer-events-auto flex items-center justify-between rounded-lg px-4 py-2.5 sm:px-6 transition-all duration-500 ${
            scrolled
              ? "liquid-glass shadow-lg"
              : "bg-star-white/[0.02] border border-transparent backdrop-blur-sm"
          }`}
        >
          {/* Brand Logo */}
          <MagneticButton strength={0.2}>
            <Link
              href="/"
              className="outline-none focus-visible:ring-2 focus-visible:ring-vermillion"
              aria-label="Clouterry Home"
            >
              <Logo size="sm" tone="white" />
            </Link>
          </MagneticButton>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden items-center gap-7 md:flex"
            aria-label="Main Navigation"
          >
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <MagneticButton key={link.href} strength={0.15}>
                  <Link
                    href={link.href}
                    className={`relative text-xs font-medium transition-colors duration-300 py-1 ${
                      isActive
                        ? "text-star-white font-semibold"
                        : "text-silver/70 hover:text-star-white"
                    } focus-visible:ring-2 focus-visible:ring-vermillion focus-visible:outline-none`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="navIndicator"
                        className="absolute -bottom-0.5 left-0 right-0 h-[1.5px] bg-vermillion rounded-full"
                        transition={{ type: "spring", stiffness: 500, damping: 35 }}
                      />
                    )}
                  </Link>
                </MagneticButton>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-3 md:flex">
            <MagneticButton strength={0.2}>
              <Link
                href="/brands"
                data-cursor="cta"
                className="rounded-md liquid-glass-interactive px-4 py-1.5 text-xs font-semibold text-star-white border-b-2 border-b-vermillion/50 hover:border-b-vermillion focus-visible:ring-2 focus-visible:ring-vermillion"
              >
                Book a Call
              </Link>
            </MagneticButton>
            <MagneticButton strength={0.2}>
              <Link
                href="/creators"
                data-cursor="cta"
                className="rounded-md bg-vermillion px-4 py-1.5 text-xs font-bold text-star-white transition-all duration-300 hover:bg-vermillion-deep hover:shadow-[0_0_16px_rgba(255,61,46,0.3)] focus-visible:ring-2 focus-visible:ring-vermillion"
              >
                Join a Cohort
              </Link>
            </MagneticButton>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-8 w-8 items-center justify-center rounded-md border border-star-white/12 text-star-white md:hidden focus-visible:ring-2 focus-visible:ring-vermillion"
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

        {/* Mobile Dropdown with spring animation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="pointer-events-auto mt-2 rounded-lg liquid-glass p-6 md:hidden"
            >
              <nav className="flex flex-col gap-3 text-sm font-semibold text-star-white">
                {NAV_LINKS.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`py-2 transition-colors duration-300 ${
                        isActive ? "text-vermillion font-bold" : "text-silver hover:text-star-white"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
                <div className="mt-2 flex flex-col gap-2.5 pt-4 border-t border-star-white/8">
                  <Link
                    href="/creators"
                    onClick={() => setMobileMenuOpen(false)}
                    className="rounded-md bg-vermillion py-2.5 text-center text-xs font-bold text-star-white"
                  >
                    Join a Cohort
                  </Link>
                  <Link
                    href="/brands"
                    onClick={() => setMobileMenuOpen(false)}
                    className="rounded-md liquid-glass-interactive py-2.5 text-center text-xs font-bold text-star-white border-b-2 border-b-vermillion/60"
                  >
                    Book a Call
                  </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
