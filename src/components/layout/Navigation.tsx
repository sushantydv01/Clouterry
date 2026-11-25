"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { Menu, X, ArrowUpRight } from "lucide-react";

const NAV_LINKS = [
  { href: "/capabilities", label: "Capabilities" },
  { href: "/work", label: "Work" },
  { href: "/industries", label: "Industries" },
  { href: "/firm", label: "About" },
  { href: "/insights", label: "Insights" },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#000000]/90 backdrop-blur-md border-b border-white/10 text-white transition-all">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-8">
        {/* Left: Brand mark */}
        <div className="flex items-center gap-3">
          <Logo theme="dark" withDescriptor={false} />
        </div>

        {/* Center: Clean Gumroad-style pill navigation */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Primary Navigation">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3.5 py-1.5 text-xs sm:text-sm font-medium transition-all rounded-full ${isActive
                  ? "bg-white text-black font-semibold shadow-sm"
                  : "text-white/80 hover:text-white hover:bg-white/5"
                  }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right: Secondary action + Gumroad-style Bright Pink CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/faq"
            className="text-xs sm:text-sm font-medium text-white/70 hover:text-white px-2 py-1 transition-colors"
          >
            FAQ
          </Link>
          <div className="h-4 w-px bg-white/15" />
          <Link
            href="/connect"
            className="gumroad-btn-pink text-xs sm:text-sm !py-2 !px-4.5 font-bold"
          >
            <span>Start a project</span>
            <ArrowUpRight size={14} className="stroke-[2.5]" />
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#18181B] border border-white/15 text-white transition-colors hover:bg-white/10 md:hidden"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-white/10 bg-[#000000] px-6 py-6 md:hidden">
          <nav className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className={`px-4 py-2.5 text-base font-medium rounded-xl transition-colors ${isActive
                    ? "bg-white text-black font-semibold"
                    : "text-white/80 hover:text-white hover:bg-white/5"
                    }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-2.5">
              <Link
                href="/connect"
                onClick={closeMenu}
                className="gumroad-btn-pink text-sm py-3 w-full justify-center"
              >
                <span>Start a project</span>
                <ArrowUpRight size={15} className="stroke-[2.5]" />
              </Link>
              <Link
                href="/faq"
                onClick={closeMenu}
                className="text-center text-xs text-white/70 hover:text-white py-2"
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
