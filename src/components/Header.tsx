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
          ? "bg-background/90 backdrop-blur-md border-b border-border shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-5xl px-6 py-3.5 flex items-center justify-between gap-4">
        <a href="#top" className="font-mono text-sm text-foreground flex items-center gap-1.5 shrink-0">
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
              <a href={l.href} className="hover:text-foreground transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={profile.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center gap-1.5 rounded-lg border border-accent/40 bg-accent/10 px-3.5 py-1.5 text-xs font-semibold text-accent hover:bg-accent hover:text-[#06131a] transition-all"
        >
          <FileText size={14} /> Resume
        </a>

        <button
          aria-label="Toggle menu"
          className="md:hidden text-foreground p-1"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md px-6 py-4 space-y-4">
          <div className="pt-1 pb-2">
            <p className="text-[11px] font-mono text-muted mb-2">VIEWING PREFERENCE:</p>
            <PersonaSwitcher compact />
          </div>

          <ul className="flex flex-col gap-3 text-sm text-muted border-t border-border/60 pt-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="hover:text-foreground block py-1"
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
                className="text-accent font-medium inline-flex items-center gap-1 pt-1"
              >
                Resume PDF ↗
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
