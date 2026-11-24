"use client";

import { useState } from "react";
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#171717] border-b-2 border-[#171717] text-[#F8F6EF]">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 sm:px-10 md:px-12">
        {/* Brand Wordmark with bold dark theme styling */}
        <div className="flex items-center gap-3">
          <Logo theme="dark" withDescriptor={false} />
        </div>

        {/* Center Desktop Navigation Links with generous breathing room */}
        <nav className="hidden items-center gap-3 md:flex" aria-label="Primary Navigation">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-sm font-bold font-display tracking-tight transition-all duration-150 border ${
                  isActive
                    ? "bg-[#F4CF55] text-[#171717] border-[#171717] shadow-[3px_3px_0_0_#ED83A8] -translate-x-0.5 -translate-y-0.5"
                    : "border-transparent text-[#F8F6EF] hover:bg-[#ED83A8] hover:text-[#171717] hover:border-[#171717] hover:shadow-[2px_2px_0_0_#FFFFFF]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Action Button — Highly Prominent */}
        <div className="hidden items-center gap-4 md:flex">
          <Link
            href="/connect"
            className="neo-btn-pink text-xs px-6 py-3 shadow-[4px_4px_0_0_#FFFFFF] inline-flex items-center gap-1.5"
          >
            <span>Start a project</span>
            <ArrowUpRight size={15} className="stroke-[2.5]" />
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-11 w-11 items-center justify-center border-2 border-[#F8F6EF] bg-[#171717] text-[#F8F6EF] transition-all hover:bg-[#ED83A8] hover:text-[#171717] hover:border-[#171717] md:hidden shadow-[2px_2px_0_0_#FFFFFF]"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="border-t-2 border-[#3A3835] bg-[#171717] px-6 py-8 md:hidden">
          <nav className="flex flex-col gap-3 font-display">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className={`p-3.5 text-lg font-bold border-2 transition-all ${
                    isActive
                      ? "bg-[#F4CF55] text-[#171717] border-[#171717] shadow-[4px_4px_0_0_#ED83A8]"
                      : "border-[#3A3835] bg-[#222222] text-[#F8F6EF] hover:bg-[#ED83A8] hover:text-[#171717]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <div className="mt-6 pt-6 border-t border-[#3A3835] flex flex-col gap-3">
              <Link
                href="/connect"
                onClick={closeMenu}
                className="neo-btn-pink text-sm py-3.5 w-full justify-center inline-flex items-center gap-2"
              >
                <span>Start a project</span>
                <ArrowUpRight size={16} className="stroke-[2.5]" />
              </Link>
              <Link
                href="/faq"
                onClick={closeMenu}
                className="neo-btn-cream text-xs py-3 w-full justify-center"
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
