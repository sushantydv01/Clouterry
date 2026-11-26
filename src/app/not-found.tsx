import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
import { ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[82vh] flex items-center py-28 bg-[#171717] text-[#F8F6EF]">
      <Container size="wide">
        <div className="grid gap-12 lg:grid-cols-12 items-center">
          <div className="lg:col-span-5 space-y-5 text-left">
            <span className="font-mono text-xs uppercase tracking-[0.12em] text-[#ED83A8] block">
              404 · Route Not Located
            </span>
            <h1 className="font-display text-4xl sm:text-6xl font-medium tracking-[-0.03em] text-[#F8F6EF] leading-tight">
              Page not found
            </h1>
            <p className="text-base text-[#D5D2C7] leading-relaxed max-w-md font-sans">
              The requested address is outside FIRM&apos;s current route index. Follow the studio navigation back to our active practices.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3.5">
              <Link href="/" className="firm-btn-primary text-sm w-full sm:w-auto">
                <span>Return to Homepage</span>
                <ArrowUpRight size={15} className="stroke-[2]" />
              </Link>
              <Link href="/capabilities" className="firm-btn-secondary text-sm w-full sm:w-auto">
                <span>Explore disciplines</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 relative aspect-[16/9] rounded-2xl overflow-hidden border border-[#F8F6EF]/14 bg-[#121214]">
            <Image
              src="/images/studio/s02-geometric-ribbon.webp"
              alt="Abstract geometric paper composition crossed by an unbroken rose pink thread"
              fill
              sizes="(max-width: 1024px) 100vw, 56vw"
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
