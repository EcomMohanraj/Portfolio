"use client";

import { ArrowRight, Download, Mail, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { profile } from "@/data/content";

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="mx-auto max-w-5xl px-4 sm:px-6 pt-10 sm:pt-16 pb-12 sm:pb-20 scroll-mt-20"
    >
      <div className="max-w-4xl">
        {/* Availability Status Badge & Location */}
        <div className="flex flex-wrap items-center gap-2.5 mb-5 sm:mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-[#10b981]/10 text-[#34d399] border border-[#10b981]/30">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10b981]" />
            </span>
            <span>Available for Software Engineering Opportunities</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs text-muted bg-surface border border-border">
            <MapPin size={12} className="text-accent shrink-0" />
            <span>{profile.location}</span>
          </div>
        </div>

        {/* Name Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground">
          {profile.name}
        </h1>

        {/* Primary Title */}
        <p className="mt-3 sm:mt-4 text-xl sm:text-2xl md:text-3xl font-semibold text-accent tracking-tight">
          {profile.role}
        </p>

        {/* Concrete Positioning Statement */}
        <p className="mt-4 sm:mt-5 text-base sm:text-lg md:text-xl text-muted-light leading-relaxed max-w-3xl">
          {profile.tagline}
        </p>

        {/* Primary CTA Buttons & Secondary Links */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3 sm:gap-4">
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent-hover transition-all shadow-md shadow-accent/20 cursor-pointer min-h-[44px]"
          >
            <span>View Projects</span>
            <ArrowRight size={16} className="shrink-0" />
          </a>

          <a
            href={profile.resumeUrl}
            download="Mohanraj_S_Resume.pdf"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-surface border border-border px-5 py-3 text-sm font-semibold text-foreground hover:bg-surface-2 hover:border-accent/40 transition-all cursor-pointer min-h-[44px]"
          >
            <Download size={16} className="text-accent shrink-0" />
            <span>Download Resume</span>
          </a>

          {/* Secondary Links: GitHub, LinkedIn, Email */}
          <div className="flex items-center gap-2 sm:ml-2 sm:border-l sm:border-border sm:pl-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="inline-flex items-center justify-center p-2.5 rounded-lg text-muted hover:text-foreground hover:bg-surface border border-transparent hover:border-border transition-colors min-h-[44px] min-w-[44px]"
              title="GitHub Profile"
            >
              <GithubIcon size={20} />
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="inline-flex items-center justify-center p-2.5 rounded-lg text-muted hover:text-foreground hover:bg-surface border border-transparent hover:border-border transition-colors min-h-[44px] min-w-[44px]"
              title="LinkedIn Profile"
            >
              <LinkedinIcon size={20} />
            </a>

            <a
              href={`mailto:${profile.email}`}
              aria-label="Send an email to Mohanraj"
              className="inline-flex items-center justify-center p-2.5 rounded-lg text-muted hover:text-foreground hover:bg-surface border border-transparent hover:border-border transition-colors min-h-[44px] min-w-[44px]"
              title={`Email: ${profile.email}`}
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* 10-Second Recruiter Summary Strip */}
        <div className="mt-10 sm:mt-12 pt-8 border-t border-border/80">
          <p className="font-mono text-xs uppercase tracking-wider text-muted mb-4">
            Snapshot for Technical Recruiters &amp; Engineering Leads:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="tech-card rounded-xl p-3.5">
              <span className="text-[11px] font-mono text-muted uppercase tracking-wider block">Production Role</span>
              <span className="text-sm font-semibold text-foreground mt-0.5 block">Full Stack Software Engineer</span>
              <span className="text-xs text-muted mt-1 block">Sanrado Techsolutions</span>
            </div>

            <div className="tech-card rounded-xl p-3.5">
              <span className="text-[11px] font-mono text-muted uppercase tracking-wider block">Experience</span>
              <span className="text-sm font-semibold text-foreground mt-0.5 block">~1 Year Production</span>
              <span className="text-xs text-[#34d399] mt-1 block">Promoted in 3 mos</span>
            </div>

            <div className="tech-card rounded-xl p-3.5">
              <span className="text-[11px] font-mono text-muted uppercase tracking-wider block">Core Stack</span>
              <span className="text-sm font-semibold text-foreground mt-0.5 block">React, Next.js, Golang</span>
              <span className="text-xs text-muted mt-1 block">TypeScript, Node.js, Postgres</span>
            </div>

            <div className="tech-card rounded-xl p-3.5">
              <span className="text-[11px] font-mono text-muted uppercase tracking-wider block">Production Proof</span>
              <span className="text-sm font-semibold text-foreground mt-0.5 block">17+ HIMS Modules</span>
              <span className="text-xs text-muted mt-1 block">+ 2 Deployed Full-Stack Apps</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
