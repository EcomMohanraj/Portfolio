"use client";

import { useEffect, useState } from "react";
import { Menu, X, FileText } from "lucide-react";
import { profile } from "@/data/content";
import PersonaSwitcher from "@/components/PersonaSwitcher";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border shadow-lg shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-5xl px-4 sm:px-6 py-3 flex items-center justify-between gap-3 sm:gap-4">
        <a
          href="#top"
          className="font-mono text-sm text-foreground flex items-center gap-1.5 shrink-0 min-h-[44px] px-1"
        >
          <span className="text-accent font-bold">&gt;</span>
          <span className="font-semibold">{profile.name}</span>
        </a>

        {/* Compact Persona Switcher in Header for quick access */}
        <div className="hidden lg:block">
          <PersonaSwitcher compact />
        </div>

        <ul className="hidden md:flex items-center gap-6 text-sm text-muted">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="hover:text-foreground transition-colors min-h-[44px] inline-flex items-center px-1"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={profile.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center justify-center gap-1.5 rounded-lg border border-accent/40 bg-accent/10 px-3.5 py-2 min-h-[44px] text-xs font-semibold text-accent hover:bg-accent hover:text-accent-foreground transition-all"
        >
          <FileText size={14} /> <span>Resume</span>
        </a>

        {/* Mobile Hamburger button with min 44x44px touch target */}
        <button
          aria-label="Toggle navigation menu"
          className="md:hidden text-foreground min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg hover:bg-surface border border-transparent hover:border-border transition-colors cursor-pointer"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Drawer with smooth scroll and min 44px tap targets */}
      {open && (
        <div className="md:hidden border-t border-border bg-background/98 backdrop-blur-lg px-4 sm:px-6 py-4 space-y-4 max-h-[calc(100vh-4.5rem)] overflow-y-auto">
          <div className="pt-1 pb-1">
            <p className="text-[11px] font-mono text-muted mb-2 tracking-wider">VIEWING PREFERENCE:</p>
            <PersonaSwitcher compact />
          </div>

          <ul className="flex flex-col gap-1 text-sm text-muted border-t border-border/70 pt-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="hover:text-foreground hover:bg-surface min-h-[44px] flex items-center px-3 rounded-lg transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="text-accent font-medium min-h-[44px] flex items-center px-3 rounded-lg hover:bg-accent/10 transition-colors gap-1.5"
              >
                <FileText size={15} /> <span>Resume PDF ↗</span>
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
