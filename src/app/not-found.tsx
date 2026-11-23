import React from "react";
import Link from "next/link";
import Container from "@/components/layout/Container";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-24">
      <Container size="narrow">
        <div className="text-center rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-8 sm:p-12 shadow-xs">
          <span className="font-mono text-xs font-semibold text-[var(--accent)]">
            ERROR 404 // ROUTE NOT LOCATED
          </span>
          <h1 className="mt-3 font-display text-3xl font-medium tracking-tight text-[var(--text-primary)] sm:text-4xl">
            Architectural page not found
          </h1>
          <p className="mt-3 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed max-w-md mx-auto">
            The requested digital surface or resource does not exist in FIRM’s current information architecture.
          </p>

          <div className="mt-8 flex items-center justify-center gap-3">
            <Link
              href="/"
              className="inline-flex h-10 items-center justify-center rounded-lg bg-[var(--accent)] px-5 text-xs font-medium text-white hover:bg-[var(--accent-hover)]"
            >
              Return to homepage
            </Link>
            <Link
              href="/capabilities"
              className="inline-flex h-10 items-center justify-center rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-5 text-xs font-medium text-[var(--text-primary)] hover:border-[var(--border-strong)]"
            >
              Explore capabilities
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
