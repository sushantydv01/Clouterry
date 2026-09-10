import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-star-white/8 bg-void/80 backdrop-blur-xs px-6 py-12 text-silver relative z-10">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-xs">
        <div className="flex items-center gap-6">
          <Link href="/" aria-label="Clouterry Home">
            <Logo size="sm" tone="white" />
          </Link>
          <span className="text-silver/40">
            © {new Date().getFullYear()} Clouterry Inc.
          </span>
        </div>

        <div className="flex items-center gap-6 font-medium text-silver/60">
          <a
            href="https://instagram.com/clouterry"
            target="_blank"
            rel="noreferrer"
            className="relative hover:text-star-white transition-colors duration-300 group"
          >
            Instagram
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-vermillion group-hover:w-full transition-all duration-300" />
          </a>
          <a
            href="mailto:hello@clouterry.com"
            className="relative hover:text-star-white transition-colors duration-300 group"
          >
            hello@clouterry.com
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-vermillion group-hover:w-full transition-all duration-300" />
          </a>
        </div>
      </div>
    </footer>
  );
}
