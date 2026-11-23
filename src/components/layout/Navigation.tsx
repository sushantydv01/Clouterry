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
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#171717] border-b border-[#171717] text-[#F8F6EF]">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8 md:px-10">
        {/* Brand Wordmark with dark theme styling */}
        <Logo theme="dark" withDescriptor={false} />

        {/* Center Desktop Navigation Links */}
        <nav className="hidden items-center gap-2 md:flex" aria-label="Primary Navigation">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-sm font-semibold font-display tracking-tight transition-all duration-150 ${
                  isActive
                    ? "bg-[#F4CF55] text-[#171717] border border-[#171717] shadow-[2px_2px_0_0_#ED83A8] -translate-x-0.5 -translate-y-0.5"
                    : "text-[#F8F6EF] hover:bg-[#ED83A8] hover:text-[#171717] hover:border hover:border-[#171717] hover:shadow-[2px_2px_0_0_#F8F6EF]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Action Button */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/connect"
            className="neo-btn-pink text-xs px-5 py-2.5 shadow-[3px_3px_0_0_#F8F6EF]"
          >
            <span>Start a project</span>
            <ArrowUpRight size={14} className="stroke-[2.5]" />
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-10 w-10 items-center justify-center border border-[#F8F6EF] bg-[#171717] text-[#F8F6EF] transition-all hover:bg-[#ED83A8] hover:text-[#171717] hover:border-[#171717] md:hidden"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="border-t border-[#3A3835] bg-[#171717] px-6 py-6 md:hidden">
          <nav className="flex flex-col gap-2.5 font-display">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className={`p-3 text-base font-bold border transition-all ${
                    isActive
                      ? "bg-[#F4CF55] text-[#171717] border-[#171717] shadow-[3px_3px_0_0_#ED83A8]"
                      : "border-[#3A3835] bg-[#222222] text-[#F8F6EF] hover:bg-[#ED83A8] hover:text-[#171717]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <div className="mt-4 pt-4 border-t border-[#3A3835] flex flex-col gap-2.5">
              <Link
                href="/connect"
                onClick={closeMenu}
                className="neo-btn-pink text-xs py-3 w-full justify-center"
              >
                <span>Start a project</span>
                <ArrowUpRight size={14} className="stroke-[2.5]" />
              </Link>
              <Link
                href="/faq"
                onClick={closeMenu}
                className="neo-btn-cream text-xs py-2.5 w-full justify-center"
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
