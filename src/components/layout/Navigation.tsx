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
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#171717]/92 backdrop-blur-md border-b border-[#F8F6EF]/10 text-[#F8F6EF] transition-colors">
      <div className="mx-auto flex h-17 max-w-7xl items-center justify-between px-4 sm:px-8">
        <Logo theme="dark" withDescriptor={false} />

        <nav className="hidden lg:flex items-center gap-1" aria-label="Primary Navigation">
          {NAV_LINKS.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3.5 py-1.5 text-sm font-medium transition-colors rounded-full whitespace-nowrap ${
                  isActive
                    ? "bg-[#F8F6EF] text-[#171717] font-semibold"
                    : "text-[#C4C1B8] hover:text-[#F8F6EF] hover:bg-[#F8F6EF]/5"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/faq"
            className="text-sm font-medium text-[#C4C1B8] hover:text-[#F8F6EF] px-2.5 py-1.5 transition-colors whitespace-nowrap"
          >
            FAQ
          </Link>
          <div className="h-4 w-px bg-[#F8F6EF]/15" />
          <Link
            href="/connect"
            className="firm-btn-primary text-sm !min-h-[40px] !py-2 !px-4.5"
          >
            <span>Start a project</span>
            <ArrowUpRight size={15} className="stroke-[2.25]" />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#1E1E20] border border-[#F8F6EF]/15 text-[#F8F6EF] transition-colors hover:border-[#F8F6EF]/30 lg:hidden"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="border-b border-[#F8F6EF]/12 bg-[#171717] px-6 py-6 lg:hidden">
          <nav className="flex flex-col gap-1.5" aria-label="Mobile Navigation">
            {NAV_LINKS.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className={`px-4 py-3 text-base font-medium rounded-xl transition-colors ${
                    isActive
                      ? "bg-[#F8F6EF] text-[#171717] font-semibold"
                      : "text-[#C4C1B8] hover:text-[#F8F6EF] hover:bg-[#1E1E20]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <div className="mt-4 pt-4 border-t border-[#F8F6EF]/12 flex flex-col gap-3">
              <Link
                href="/connect"
                onClick={closeMenu}
                className="firm-btn-primary text-sm w-full justify-center"
              >
                <span>Start a project</span>
                <ArrowUpRight size={15} className="stroke-[2.25]" />
              </Link>
              <Link
                href="/faq"
                onClick={closeMenu}
                className="text-center text-sm text-[#C4C1B8] hover:text-[#F8F6EF] py-2"
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
