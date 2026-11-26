"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import StickerMark from "@/components/illustrations/StickerMark";
import { CAPABILITY_NODES } from "@/lib/threadTheme";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "/work", label: "Work", index: "02", note: "Concept architecture studies" },
  { href: "/industries", label: "Industries", index: "03", note: "Sector frameworks & schools" },
  { href: "/firm", label: "About", index: "04", note: "Philosophy & sprint methodology" },
  { href: "/insights", label: "Insights", index: "05", note: "Field monographs & essays" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [openForPath, setOpenForPath] = useState<string | null>(null);
  const [trayForPath, setTrayForPath] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [surfacePolarity, setSurfacePolarity] = useState<"dark" | "paper">("dark");
  const progressBarRef = useRef<HTMLDivElement>(null);

  const toggleBtnRef = useRef<HTMLButtonElement>(null);
  const firstMobileLinkRef = useRef<HTMLAnchorElement>(null);
  const mobileDialogRef = useRef<HTMLDivElement>(null);
  const desktopHeaderRef = useRef<HTMLElement>(null);

  const mobileMenuOpen = openForPath === pathname;
  const trayOpen = trayForPath === pathname;
  const closeMenu = () => setOpenForPath(null);
  const closeTray = () => setTrayForPath(null);

  // Adaptive polarity detection + GPU scroll Thread progress trace
  useEffect(() => {
    let rafId = 0;

    const updateHeaderState = () => {
      rafId = 0;
      const y = window.scrollY;
      setScrolled(y > 16);

      // Update top hairline Thread progress cleanly via GPU scaleX transform
      if (progressBarRef.current) {
        const docHeight =
          document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const ratio = docHeight > 0 ? Math.min(1, Math.max(0, y / docHeight)) : 0;
        progressBarRef.current.style.transform = `scaleX(${ratio})`;
      }

      // Probe which [data-surface] section sits under navbar center line (y = 40px)
      const sections = document.querySelectorAll<HTMLElement>("[data-surface]");
      let activePolarity: "dark" | "paper" = "dark";
      for (const sec of sections) {
        const rect = sec.getBoundingClientRect();
        if (rect.top <= 42 && rect.bottom >= 42) {
          activePolarity = sec.dataset.surface === "paper" ? "paper" : "dark";
          break;
        }
      }
      setSurfacePolarity(activePolarity);
    };

    const onScroll = () => {
      if (!rafId) rafId = requestAnimationFrame(updateHeaderState);
    };

    updateHeaderState();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pathname]);

  // Desktop disciplines tray keyboard Escape + outside-click closing
  useEffect(() => {
    if (!trayOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeTray();
    };
    const onPointerDown = (e: MouseEvent) => {
      if (desktopHeaderRef.current && !desktopHeaderRef.current.contains(e.target as Node)) {
        closeTray();
      }
    };

    window.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onPointerDown);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onPointerDown);
    };
  }, [trayOpen]);

  // Mobile dialog scroll lock, Escape handling, and full keyboard Tab focus trap
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const timer = requestAnimationFrame(() => {
      firstMobileLinkRef.current?.focus();
    });

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenForPath(null);
        toggleBtnRef.current?.focus();
        return;
      }

      if (e.key === "Tab" && mobileDialogRef.current) {
        const focusables = mobileDialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          toggleBtnRef.current?.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          toggleBtnRef.current?.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      cancelAnimationFrame(timer);
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const isPaper = !mobileMenuOpen && surfacePolarity === "paper";
  const capActive = pathname === "/capabilities" || pathname.startsWith("/capabilities/");

  return (
    <>
      <header
        ref={desktopHeaderRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
          isPaper
            ? "bg-[#F8F6EF]/92 backdrop-blur-md text-[#171717] border-b border-[#171717]/12"
            : scrolled || mobileMenuOpen || trayOpen
            ? "bg-[#171717]/95 backdrop-blur-md text-[#F8F6EF] border-b border-[#F8F6EF]/14"
            : "bg-[#171717]/82 backdrop-blur-sm text-[#F8F6EF] border-b border-[#F8F6EF]/8"
        }`}
      >
        <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12 xl:px-14">
          {/* Zone 1: Recognisable Studio Mark & Wordmark */}
          <Logo theme={isPaper ? "light" : "dark"} withDescriptor={true} />

          {/* Zone 2: Editorial Horizontal Rail + Expandable Capabilities Atlas */}
          <nav
            className="hidden lg:flex items-center gap-7 xl:gap-9"
            aria-label="Primary Navigation"
          >
            {/* Capabilities link + Studio Tray trigger */}
            <div className="relative flex items-center gap-1">
              <Link
                href="/capabilities"
                aria-current={capActive ? "page" : undefined}
                onClick={closeTray}
                className={`group relative py-2 text-[15px] font-sans font-medium tracking-tight transition-colors whitespace-nowrap ${
                  capActive
                    ? isPaper
                      ? "text-[#171717] font-semibold"
                      : "text-[#F8F6EF] font-semibold"
                    : isPaper
                    ? "text-[#3F3D38] hover:text-[#171717]"
                    : "text-[#D5D2C7]/85 hover:text-[#F8F6EF]"
                }`}
              >
                <span className="inline-flex items-center gap-1.5">
                  <span
                    className={`h-1.5 w-1.5 rounded-full transition-opacity duration-200 ${
                      capActive ? "bg-[#ED83A8] opacity-100" : "bg-[#ED83A8] opacity-0 group-hover:opacity-75"
                    }`}
                    aria-hidden="true"
                  />
                  <span>Capabilities</span>
                </span>
                <span
                  aria-hidden="true"
                  className={`absolute left-0 right-0 bottom-0 h-[2px] rounded-full transition-transform duration-200 origin-left ${
                    capActive
                      ? "bg-[#ED83A8] scale-x-100"
                      : isPaper
                      ? "bg-[#171717]/30 scale-x-0 group-hover:scale-x-100"
                      : "bg-[#F8F6EF]/35 scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>

              <button
                type="button"
                onClick={() => setTrayForPath(trayOpen ? null : pathname)}
                aria-expanded={trayOpen}
                aria-controls="desktop-capabilities-tray"
                aria-label={trayOpen ? "Collapse five disciplines menu" : "Inspect five disciplines"}
                className={`h-7 w-7 rounded-full inline-flex items-center justify-center transition-colors cursor-pointer ${
                  trayOpen
                    ? "bg-[#ED83A8] text-[#171717]"
                    : isPaper
                    ? "text-[#3F3D38] hover:bg-[#171717]/8 hover:text-[#171717]"
                    : "text-[#ACA89E] hover:bg-[#F8F6EF]/10 hover:text-[#F8F6EF]"
                }`}
              >
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${trayOpen ? "rotate-180" : ""}`}
                />
              </button>
            </div>

            {NAV_LINKS.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  onClick={closeTray}
                  className={`group relative py-2 text-[15px] font-sans font-medium tracking-tight transition-colors whitespace-nowrap ${
                    isActive
                      ? isPaper
                        ? "text-[#171717] font-semibold"
                        : "text-[#F8F6EF] font-semibold"
                      : isPaper
                      ? "text-[#3F3D38] hover:text-[#171717]"
                      : "text-[#D5D2C7]/85 hover:text-[#F8F6EF]"
                  }`}
                >
                  <span className="inline-flex items-center gap-1.5">
                    <span
                      className={`h-1.5 w-1.5 rounded-full transition-opacity duration-200 ${
                        isActive ? "bg-[#ED83A8] opacity-100" : "bg-[#F4CF55] opacity-0 group-hover:opacity-75"
                      }`}
                      aria-hidden="true"
                    />
                    <span>{link.label}</span>
                  </span>
                  <span
                    aria-hidden="true"
                    className={`absolute left-0 right-0 bottom-0 h-[2px] rounded-full transition-transform duration-200 origin-left ${
                      isActive
                        ? "bg-[#ED83A8] scale-x-100"
                        : isPaper
                        ? "bg-[#171717]/30 scale-x-0 group-hover:scale-x-100"
                        : "bg-[#F8F6EF]/35 scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Zone 3: FAQ + Adaptive Project Action */}
          <div className="hidden lg:flex items-center gap-5 shrink-0">
            <Link
              href="/faq"
              aria-current={pathname === "/faq" ? "page" : undefined}
              onClick={closeTray}
              className={`text-[15px] font-sans font-medium transition-colors whitespace-nowrap py-2 relative ${
                pathname === "/faq"
                  ? isPaper
                    ? "text-[#171717] font-semibold"
                    : "text-[#F8F6EF] font-semibold"
                  : isPaper
                  ? "text-[#3F3D38] hover:text-[#171717]"
                  : "text-[#D5D2C7]/80 hover:text-[#F8F6EF]"
              }`}
            >
              FAQ
              {pathname === "/faq" && (
                <span
                  aria-hidden="true"
                  className="absolute left-0 right-0 bottom-0 h-[2px] rounded-full bg-[#ED83A8]"
                />
              )}
            </Link>

            <span
              className={`h-5 w-px ${isPaper ? "bg-[#171717]/15" : "bg-[#F8F6EF]/15"}`}
              aria-hidden="true"
            />

            <Link
              href="/connect"
              onClick={closeTray}
              className={`${isPaper ? "firm-btn-dark" : "firm-btn-primary"} text-sm !min-h-[42px] !py-2 !px-5`}
            >
              <span>Start a project</span>
              <ArrowUpRight size={15} className="stroke-[2]" />
            </Link>
          </div>

          {/* Mobile Trigger Button */}
          <button
            ref={toggleBtnRef}
            type="button"
            onClick={() => setOpenForPath(mobileMenuOpen ? null : pathname)}
            className={`flex h-11 min-w-[44px] items-center justify-center gap-2 rounded-full px-4 border text-sm font-display font-medium transition-colors lg:hidden cursor-pointer ${
              isPaper
                ? "bg-[#FFFFFF] border-[#171717]/20 text-[#171717] hover:border-[#171717]/45"
                : "bg-[#1D1D20] border-[#F8F6EF]/18 text-[#F8F6EF] hover:border-[#F8F6EF]/38"
            }`}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-studio-drawer"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            <span>{mobileMenuOpen ? "Close" : "Menu"}</span>
            {mobileMenuOpen ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>

        {/* Interactive Desktop Disciplines Quick-Jump Ribbon */}
        {trayOpen && (
          <div
            id="desktop-capabilities-tray"
            role="region"
            aria-label="Five Connected Disciplines"
            className={`hidden lg:block border-t animate-drawer-enter ${
              isPaper
                ? "bg-[#EFECE3]/96 border-[#171717]/12 text-[#171717]"
                : "bg-[#121214]/98 border-[#F8F6EF]/12 text-[#F8F6EF]"
            }`}
          >
            <div className="mx-auto max-w-[1440px] px-12 xl:px-14 py-6">
              <div className="grid grid-cols-5 gap-4">
                {CAPABILITY_NODES.map((node) => {
                  const activeItem = pathname === `/capabilities/${node.slug}`;
                  return (
                    <Link
                      key={node.slug}
                      href={`/capabilities/${node.slug}`}
                      onClick={closeTray}
                      className={`group p-4 rounded-xl border transition-colors flex flex-col justify-between gap-3 ${
                        isPaper
                          ? activeItem
                            ? "bg-[#FFFFFF] border-[#171717]"
                            : "bg-[#F8F6EF] border-[#171717]/12 hover:bg-[#FFFFFF] hover:border-[#171717]/35"
                          : activeItem
                          ? "bg-[#1D1D20] border-[#ED83A8]/60"
                          : "bg-[#171717] border-[#F8F6EF]/10 hover:bg-[#1D1D20] hover:border-[#F8F6EF]/30"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-mono text-xs tabular-nums opacity-70">
                          {node.num}
                        </span>
                        <span
                          className="h-2.5 w-2.5 rounded-full shrink-0"
                          style={{ backgroundColor: node.color }}
                          aria-hidden="true"
                        />
                      </div>
                      <div className="space-y-1">
                        <span className="font-display text-sm font-semibold block group-hover:text-[#ED83A8] transition-colors">
                          {node.name}
                        </span>
                        <span
                          className={`text-xs block line-clamp-2 leading-snug ${
                            isPaper ? "text-[#3F3D38]" : "text-[#ACA89E]"
                          }`}
                        >
                          {node.tag}
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* GPU Scroll-Linked Thread Progress Track */}
        <div
          aria-hidden="true"
          className="h-[2px] w-full overflow-hidden bg-transparent"
        >
          <div
            ref={progressBarRef}
            className="h-full w-full origin-left bg-gradient-to-r from-[#ED83A8] via-[#F4CF55] to-[#A6D8A1] will-change-transform"
            style={{ transform: "scaleX(0)" }}
          />
        </div>
      </header>

      {/* Dedicated Choreographed Mobile Studio Drawer (rendered outside blurred header for full 100dvh viewport framing) */}
      {mobileMenuOpen && (
        <div
          id="mobile-studio-drawer"
          ref={mobileDialogRef}
          role="dialog"
          aria-modal="true"
          aria-label="FIRM Studio Navigation"
          style={{ overscrollBehavior: "contain" }}
          className="fixed inset-x-0 top-[76px] bottom-0 z-50 flex flex-col justify-between bg-[#171717] px-5 pt-5 pb-7 overflow-y-auto lg:hidden border-t border-[#F8F6EF]/14 animate-drawer-enter"
        >
          <div className="space-y-5">
            {/* Compact 5-Discipline Quick Thread Strip */}
            <div className="space-y-2 pb-4 border-b border-[#F8F6EF]/10">
              <span className="text-xs font-sans font-medium text-[#ACA89E] block">
                Five Disciplines
              </span>
              <div className="flex flex-wrap gap-2">
                {CAPABILITY_NODES.map((node) => (
                  <Link
                    key={node.slug}
                    href={`/capabilities/${node.slug}`}
                    onClick={closeMenu}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1D1D20] border border-[#F8F6EF]/14 text-xs font-display font-medium text-[#F8F6EF]"
                  >
                    <span
                      className="h-2 w-2 rounded-full shrink-0"
                      style={{ backgroundColor: node.color }}
                      aria-hidden="true"
                    />
                    <span>{node.shortName}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Vertical Thread Navigation Rail */}
            <nav
              className="relative pl-5 border-l border-[#ED83A8]/35 flex flex-col divide-y divide-[#F8F6EF]/10"
              aria-label="Mobile Navigation"
            >
              {[
                { href: "/capabilities", label: "Capabilities", index: "01", note: "Five integrated practices" },
                ...NAV_LINKS,
                { href: "/faq", label: "Operational FAQ", index: "06", note: "Methodology & ownership" },
              ].map((link, idx) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href));

                return (
                  <Link
                    key={link.href}
                    ref={idx === 0 ? firstMobileLinkRef : undefined}
                    href={link.href}
                    onClick={closeMenu}
                    aria-current={isActive ? "page" : undefined}
                    className="group relative py-3.5 flex items-center justify-between gap-4 min-h-[56px]"
                  >
                    <span
                      className={`absolute -left-[25px] top-1/2 -translate-y-1/2 h-2 w-2 rounded-full border border-[#171717] transition-colors ${
                        isActive ? "bg-[#ED83A8]" : "bg-[#1D1D20]"
                      }`}
                      aria-hidden="true"
                    />
                    <div className="flex items-baseline gap-3.5 min-w-0">
                      <span
                        className={`font-mono text-xs tabular-nums ${
                          isActive ? "text-[#ED83A8]" : "text-[#ACA89E]"
                        }`}
                      >
                        {link.index}
                      </span>
                      <div className="space-y-0.5 min-w-0">
                        <span
                          className={`font-display text-xl font-medium tracking-tight block ${
                            isActive
                              ? "text-[#ED83A8]"
                              : "text-[#F8F6EF] group-hover:text-[#F4CF55]"
                          }`}
                        >
                          {link.label}
                        </span>
                        <span className="text-xs text-[#ACA89E] font-sans block truncate">
                          {link.note}
                        </span>
                      </div>
                    </div>
                    <ArrowUpRight
                      size={17}
                      className={`shrink-0 ${isActive ? "text-[#ED83A8]" : "text-[#ACA89E]"}`}
                    />
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Bottom Thumb-Reachable Briefing Stamp & Action */}
          <div className="pt-5 mt-5 border-t border-[#F8F6EF]/14 space-y-3.5">
            <div className="flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-xl bg-[#F8F6EF] text-[#171717]">
              <div className="flex items-center gap-2.5 text-xs font-sans font-medium">
                <StickerMark name="s09-02-flower" size={22} />
                <span>One Studio · Q1 Briefings Open</span>
              </div>
              <span className="h-2 w-2 rounded-full bg-[#A6D8A1] border border-[#171717]/20" aria-hidden="true" />
            </div>

            <Link
              href="/connect"
              onClick={closeMenu}
              className="firm-btn-primary text-base w-full justify-center"
            >
              <span>Start a project</span>
              <ArrowUpRight size={17} className="stroke-[2]" />
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
