"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { profile } from "@/data/content";

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
      className={`sticky top-0 z-50 transition-colors ${
        scrolled ? "bg-background/85 backdrop-blur border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
        <a href="#top" className="font-mono text-sm text-foreground">
          <span className="text-accent">&gt;</span> {profile.name}
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm text-muted">
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
          className="hidden md:inline-flex items-center rounded-md border border-accent/40 px-4 py-1.5 text-sm text-accent hover:bg-accent/10 transition-colors"
        >
          Resume
        </a>

        <button
          aria-label="Toggle menu"
          className="md:hidden text-foreground"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border bg-background px-6 py-4">
          <ul className="flex flex-col gap-4 text-sm text-muted">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="hover:text-foreground">
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" className="text-accent">
                Resume ↗
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
