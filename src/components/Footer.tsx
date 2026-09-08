import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-cream px-6 py-12 text-ink">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center gap-2 md:items-start">
            <Logo />
            <p className="text-xs text-ink/60 max-w-xs text-center md:text-left">
              Curated creator cohorts connected with forward-thinking brands.
            </p>
          </div>

          {/* Quick Links & Contact */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm font-medium text-ink/75">
            <a
              href="#creators"
              className="transition-colors hover:text-red focus-visible:ring-2 focus-visible:ring-red focus-visible:outline-none rounded-sm"
            >
              For Creators
            </a>
            <a
              href="#brands"
              className="transition-colors hover:text-ink focus-visible:ring-2 focus-visible:ring-red focus-visible:outline-none rounded-sm"
            >
              For Brands
            </a>
            <a
              href="#story"
              className="transition-colors hover:text-ink focus-visible:ring-2 focus-visible:ring-red focus-visible:outline-none rounded-sm"
            >
              Our Story
            </a>
            <a
              href="https://instagram.com/clouterry"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-red focus-visible:ring-2 focus-visible:ring-red focus-visible:outline-none rounded-sm"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>Instagram</span>
            </a>
            <a
              href="mailto:hello@clouterry.com"
              className="transition-colors hover:text-ink focus-visible:ring-2 focus-visible:ring-red focus-visible:outline-none rounded-sm"
            >
              hello@clouterry.com
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-ink/8 flex flex-col items-center justify-between gap-4 text-xs text-ink/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Clouterry Inc. All rights reserved.</p>
          <p className="text-center sm:text-right">
            Pre-launch creator cohorts • Handcrafted with care
          </p>
        </div>
      </div>
    </footer>
  );
}
