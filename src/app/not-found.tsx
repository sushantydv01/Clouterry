import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
import { ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center py-28 bg-[#171717] text-[#F8F6EF]">
      <Container size="default">
        <div className="grid gap-10 lg:grid-cols-12 items-center p-8 sm:p-12 rounded-2xl bg-[#1E1E20] border border-[#F8F6EF]/14">
          <div className="lg:col-span-6 space-y-5 text-left">
            <span className="text-xs font-mono uppercase tracking-[0.14em] text-[#ED83A8] block">
              404 · Route Not Located
            </span>
            <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#F8F6EF] leading-tight">
              Page not found
            </h1>
            <p className="text-sm sm:text-base text-[#C4C1B8] leading-relaxed max-w-md font-sans">
              The requested digital surface does not exist inside FIRM&apos;s current architecture. Follow the Thread back to the studio index.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3.5">
              <Link href="/" className="firm-btn-primary text-sm w-full sm:w-auto">
                <span>Return to Homepage</span>
                <ArrowUpRight size={15} className="stroke-[2.25]" />
              </Link>
              <Link href="/capabilities" className="firm-btn-secondary text-sm w-full sm:w-auto">
                <span>Explore 5 disciplines</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 relative aspect-[16/9] rounded-xl overflow-hidden border border-[#F8F6EF]/12 bg-[#171717]">
            <Image
              src="/images/studio/s02-geometric-ribbon.webp"
              alt="Abstract geometric paper composition crossed by an unbroken rose pink thread"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
