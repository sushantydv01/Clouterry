import React from "react";
import Link from "next/link";
import Container from "@/components/layout/Container";
import { ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center py-24 bg-[#F4F4F0]">
      <Container size="narrow">
        <div className="text-center border border-black bg-white p-8 sm:p-14 shadow-[8px_8px_0_0_#000]">
          <span className="inline-block border border-black bg-[#DC341E] text-white px-3.5 py-1 font-mono text-xs font-bold uppercase tracking-wider shadow-[2px_2px_0_0_#000]">
            ERROR 404 // ROUTE NOT LOCATED
          </span>
          <h1 className="mt-4 font-display text-3xl sm:text-5xl font-bold tracking-tight text-black">
            Architectural page not found
          </h1>
          <p className="mt-4 text-xs sm:text-base text-[#2D2A26] leading-relaxed max-w-md mx-auto font-sans">
            The requested digital surface or resource does not exist in FIRM’s current information architecture.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Link
              href="/"
              className="neo-btn text-xs px-6 py-3 w-full sm:w-auto"
            >
              <span>Return to homepage</span>
              <ArrowUpRight size={13} />
            </Link>
            <Link
              href="/capabilities"
              className="neo-btn-white text-xs px-6 py-3 w-full sm:w-auto"
            >
              Explore capabilities
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
