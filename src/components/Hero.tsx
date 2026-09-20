"use client";

import { ArrowRight, MapPin, Mail, Download, ExternalLink, Sparkles, CheckCircle2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { profile, personaData } from "@/data/content";
import { usePersona } from "@/context/PersonaContext";
import PersonaSwitcher from "@/components/PersonaSwitcher";

export default function Hero() {
  const { persona } = usePersona();
  const current = personaData[persona];

  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pt-10 pb-16 md:pt-16 md:pb-24">
      {/* Interactive Persona View Preference Switcher */}
      <PersonaSwitcher />

      <div className="mt-8 animate-fade-up">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="section-label text-sm">Hi, I&apos;m</span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent/10 text-accent border border-accent/30">
            <Sparkles size={12} />
            {current.headline}
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground">
          {profile.name}
        </h1>

        <p className="mt-3 text-lg md:text-2xl text-accent font-medium leading-snug">
          {current.subheading}
        </p>

        <p className="mt-5 max-w-3xl text-base md:text-lg text-muted leading-relaxed">
          {current.tagline}
        </p>

        {/* Dynamic Highlight Pills based on Persona */}
        <div className="mt-6 flex flex-wrap items-center gap-2 text-xs md:text-sm">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface border border-border text-muted">
            <MapPin size={14} className="text-accent" />
            <span>{profile.location}</span>
          </div>

          {current.highlights.slice(0, 2).map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface border border-border text-muted"
            >
              <CheckCircle2 size={13} className="text-accent-2" />
              <span>{item}</span>
            </div>
          ))}

          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface border border-border text-muted">
            <span className="h-2 w-2 rounded-full bg-accent-2 animate-pulse" />
            <span className="text-foreground font-medium">Open to remote roles</span>
          </div>
        </div>

        {/* Dynamic Action Buttons */}
        <div className="mt-9 flex flex-wrap items-center gap-4">
          {current.primaryCta.isDownload ? (
            <a
              href={current.primaryCta.href}
              download="Mohanraj_S_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-[#06131a] hover:opacity-90 transition-all shadow-md shadow-accent/20 cursor-pointer"
            >
              <Download size={16} />
              {current.primaryCta.label}
            </a>
          ) : (
            <a
              href={current.primaryCta.href}
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-[#06131a] hover:opacity-90 transition-all shadow-md shadow-accent/20 cursor-pointer"
            >
              {current.primaryCta.label} <ArrowRight size={16} />
            </a>
          )}

          {current.secondaryCta.external ? (
            <a
              href={current.secondaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface/60 px-5 py-2.5 text-sm font-medium text-foreground hover:border-accent/50 hover:bg-surface transition-all"
            >
              {current.secondaryCta.label} <ExternalLink size={14} />
            </a>
          ) : (
            <a
              href={current.secondaryCta.href}
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface/60 px-5 py-2.5 text-sm font-medium text-foreground hover:border-accent/50 hover:bg-surface transition-all"
            >
              {current.secondaryCta.label}
            </a>
          )}

          {/* Social Links */}
          <div className="flex items-center gap-3 sm:ml-4 border-l border-border/80 pl-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-md text-muted hover:text-foreground hover:bg-surface transition-colors"
              title="GitHub Profile"
            >
              <GithubIcon size={19} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-md text-muted hover:text-foreground hover:bg-surface transition-colors"
              title="LinkedIn Profile"
            >
              <LinkedinIcon size={19} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="p-2 rounded-md text-muted hover:text-foreground hover:bg-surface transition-colors"
              title="Email Mohanraj"
            >
              <Mail size={19} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
