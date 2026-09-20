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
    <section id="top" className="mx-auto max-w-5xl px-4 sm:px-6 pt-6 sm:pt-10 pb-12 sm:pb-16 md:pt-16 md:pb-24">
      {/* Interactive Persona View Preference Switcher */}
      <PersonaSwitcher />

      <div className="mt-6 sm:mt-8 animate-fade-up">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="section-label text-xs sm:text-sm">Hi, I&apos;m</span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent/10 text-accent border border-accent/30 max-w-full truncate">
            <Sparkles size={12} className="shrink-0" />
            <span className="truncate">{current.headline}</span>
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground break-words">
          {profile.name}
        </h1>

        <p className="mt-2 sm:mt-3 text-base sm:text-xl md:text-2xl text-accent font-medium leading-snug break-words">
          {current.subheading}
        </p>

        <p className="mt-4 sm:mt-5 max-w-3xl text-sm sm:text-base md:text-lg text-muted leading-relaxed">
          {current.tagline}
        </p>

        {/* Dynamic Highlight Pills based on Persona */}
        <div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-2 text-xs sm:text-sm">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface border border-border text-muted">
            <MapPin size={14} className="text-accent shrink-0" />
            <span>{profile.location}</span>
          </div>

          {current.highlights.slice(0, 2).map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface border border-border text-muted"
            >
              <CheckCircle2 size={13} className="text-accent-2 shrink-0" />
              <span>{item}</span>
            </div>
          ))}

          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface border border-border text-muted">
            <span className="h-2 w-2 rounded-full bg-accent-2 animate-pulse shrink-0" />
            <span className="text-foreground font-medium">Open to remote roles</span>
          </div>
        </div>

        {/* Dynamic Action Buttons with minimum 44px tap targets */}
        <div className="mt-8 sm:mt-9 flex flex-wrap items-center gap-3 sm:gap-4">
          {current.primaryCta.isDownload ? (
            <a
              href={current.primaryCta.href}
              download="Mohanraj_S_Resume.pdf"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 min-h-[44px] text-sm font-semibold text-accent-foreground hover:bg-accent-hover transition-all shadow-md shadow-accent/20 cursor-pointer w-full sm:w-auto"
            >
              <Download size={16} />
              {current.primaryCta.label}
            </a>
          ) : (
            <a
              href={current.primaryCta.href}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 min-h-[44px] text-sm font-semibold text-accent-foreground hover:bg-accent-hover transition-all shadow-md shadow-accent/20 cursor-pointer w-full sm:w-auto"
            >
              {current.primaryCta.label} <ArrowRight size={16} />
            </a>
          )}

          {current.secondaryCta.external ? (
            <a
              href={current.secondaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-surface px-5 py-3 min-h-[44px] text-sm font-medium text-foreground hover:border-accent/50 hover:bg-surface-2 transition-all w-full sm:w-auto"
            >
              {current.secondaryCta.label} <ExternalLink size={14} />
            </a>
          ) : (
            <a
              href={current.secondaryCta.href}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-surface px-5 py-3 min-h-[44px] text-sm font-medium text-foreground hover:border-accent/50 hover:bg-surface-2 transition-all w-full sm:w-auto"
            >
              {current.secondaryCta.label}
            </a>
          )}

          {/* Social Links with min 44x44px touch targets */}
          <div className="flex items-center gap-2 sm:gap-3 sm:ml-2 sm:border-l sm:border-border sm:pl-4 mt-2 sm:mt-0">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg text-muted hover:text-foreground hover:bg-surface transition-colors"
              title="GitHub Profile"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg text-muted hover:text-foreground hover:bg-surface transition-colors"
              title="LinkedIn Profile"
            >
              <LinkedinIcon size={20} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg text-muted hover:text-foreground hover:bg-surface transition-colors"
              title="Email Mohanraj"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
