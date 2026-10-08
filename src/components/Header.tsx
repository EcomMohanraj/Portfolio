"use client";

import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { profile } from "@/data/content";

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-[#0b0e14]/95 backdrop-blur-md border-b border-border shadow-md shadow-black/20"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav
        aria-label="Main Navigation"
        className="mx-auto max-w-5xl px-4 sm:px-6 h-16 flex items-center justify-between gap-4"
      >
        {/* Name / Monogram */}
        <a
          href="#hero"
          className="font-mono text-sm sm:text-base font-semibold text-foreground tracking-tight flex items-center gap-1.5 focus-visible:ring-2 focus-visible:ring-accent rounded-md py-1 px-1.5 -ml-1.5 transition-colors hover:text-accent"
        >
          <span className="text-accent font-bold">&gt;</span>
          <span>{profile.name}</span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8 text-sm">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted hover:text-foreground transition-colors font-medium focus-visible:ring-2 focus-visible:ring-accent rounded px-1.5 py-1"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop Resume Download CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={profile.resumeUrl}
            download="Mohanraj_S_Resume.pdf"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent/10 border border-accent/30 px-3.5 py-2 text-xs font-semibold text-accent hover:bg-accent hover:text-white transition-all focus-visible:ring-2 focus-visible:ring-accent"
            title="Download Mohanraj's Resume PDF"
          >
            <Download size={14} className="shrink-0" />
            <span>Download Resume</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-muted hover:text-foreground hover:bg-surface border border-transparent hover:border-border transition-colors focus-visible:ring-2 focus-visible:ring-accent min-h-[44px] min-w-[44px]"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden border-b border-border bg-[#0b0e14]/98 backdrop-blur-xl px-4 py-5 shadow-2xl animate-in fade-in duration-150"
        >
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-muted hover:text-foreground hover:bg-surface transition-colors min-h-[44px] flex items-center"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-3 mt-2 border-t border-border flex flex-col gap-2">
              <a
                href={profile.resumeUrl}
                download="Mohanraj_S_Resume.pdf"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-white hover:bg-accent-hover transition-colors min-h-[44px]"
              >
                <Download size={16} />
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
