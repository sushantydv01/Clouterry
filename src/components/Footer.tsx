import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border-hairline)] bg-[var(--bg-page)] px-6 py-12 text-[var(--text-primary)]">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          {/* Logo & Brief Description */}
          <div className="flex flex-col items-start gap-2">
            <Logo />
            <p className="text-xs text-[var(--text-secondary)] max-w-xs">
              Curated micro-creator cohorts connected with forward-thinking brands.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs text-[var(--text-secondary)]">
            <a
              href="#cohorts"
              className="transition-colors hover:text-[var(--text-primary)]"
            >
              Cohorts
            </a>
            <a
              href="#how-it-works"
              className="transition-colors hover:text-[var(--text-primary)]"
            >
              How it works
            </a>
            <a
              href="#brands"
              className="transition-colors hover:text-[var(--text-primary)]"
            >
              For brands
            </a>
            <a
              href="#creators"
              className="transition-colors hover:text-[var(--text-primary)]"
            >
              For creators
            </a>
            <a
              href="#story"
              className="transition-colors hover:text-[var(--text-primary)]"
            >
              About
            </a>
            <a
              href="mailto:partnerships@clouterry.com"
              className="transition-colors hover:text-[var(--accent)] font-mono"
            >
              partnerships@clouterry.com
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[var(--border-hairline)] flex flex-col items-start justify-between gap-4 text-xs text-[var(--text-muted)] sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Clouterry Inc. All rights reserved.</p>
          <div className="flex items-center gap-4 font-mono text-[11px]">
            <span>Curated creator cohorts</span>
            <span>•</span>
            <span className="text-[var(--text-secondary)]">Standardized media delivery</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
