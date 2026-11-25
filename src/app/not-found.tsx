import React from "react";
import Link from "next/link";
import Container from "@/components/layout/Container";
import { ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center py-24 bg-[#000000] text-white">
      <Container size="narrow">
        <div className="text-center gumroad-card p-8 sm:p-14 border-white/10">
          <span className="inline-block px-3 py-1 rounded-full bg-[#FF90E8]/20 border border-[#FF90E8]/30 text-xs font-semibold text-[#FF90E8]">
            404 &bull; Route Not Located
          </span>
          <h1 className="mt-4 font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Page not found
          </h1>
          <p className="mt-4 text-sm sm:text-base text-white/70 leading-relaxed max-w-md mx-auto font-sans">
            The requested digital surface or resource does not exist in FIRM&apos;s current information architecture.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Link
              href="/"
              className="gumroad-btn-pink text-xs sm:text-sm font-bold !py-3 !px-6 w-full sm:w-auto"
            >
              <span>Return to Homepage</span>
              <ArrowUpRight size={14} className="stroke-[2.5]" />
            </Link>
            <Link
              href="/capabilities"
              className="gumroad-btn-secondary text-xs sm:text-sm !py-3 !px-6 w-full sm:w-auto"
            >
              <span>Explore 5 Disciplines</span>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
