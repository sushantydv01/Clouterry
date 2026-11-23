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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-black">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 md:px-8">
        {/* Brand Wordmark */}
        <Logo />

        {/* Neo-Brutalist Desktop Navigation Links */}
        <nav className="hidden items-center gap-1.5 md:flex" aria-label="Primary Navigation">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3.5 py-1.5 text-xs font-medium font-display transition-all duration-150 ${
                  isActive
                    ? "bg-[#F1F333] text-black border border-black shadow-[2px_2px_0_0_#000]"
                    : "text-black hover:bg-[#FF90E8] hover:border hover:border-black hover:shadow-[2px_2px_0_0_#000]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA Action Button */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/connect"
            className="neo-btn text-xs px-4 py-2"
          >
            <span>Start a project</span>
            <ArrowUpRight size={13} />
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-9 w-9 items-center justify-center border border-black bg-white text-black transition-all hover:bg-[#F1F333] hover:shadow-[2px_2px_0_0_#000] active:translate-x-0 active:translate-y-0 md:hidden"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-black bg-white px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-2 font-display">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className={`p-2.5 text-sm font-medium border border-black transition-all ${
                    isActive
                      ? "bg-[#F1F333] text-black shadow-[2px_2px_0_0_#000]"
                      : "bg-[#F4F4F0] text-black hover:bg-[#FF90E8]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <div className="mt-2 pt-3 border-t border-black flex flex-col gap-2">
              <Link
                href="/connect"
                onClick={closeMenu}
                className="neo-btn text-xs py-2.5 w-full justify-center"
              >
                <span>Start a project</span>
                <ArrowUpRight size={13} />
              </Link>
              <Link
                href="/faq"
                onClick={closeMenu}
                className="neo-btn-white text-xs py-2 w-full justify-center"
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
