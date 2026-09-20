"use client";

import { useState } from "react";
import { ExternalLink, ChevronDown, Layers, Terminal, Sparkles, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { projects } from "@/data/content";
import { usePersona } from "@/context/PersonaContext";

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  const { persona } = usePersona();
  const [open, setOpen] = useState(false);

  const personaBadge = project.personaBadges?.[persona];

  return (
    <div className="glow-card rounded-xl p-4 sm:p-6 md:p-8 transition-all hover:border-accent/40 w-full overflow-hidden">
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4">
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-1.5">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground break-words">
              {project.name}
            </h3>
            {project.tamilName && (
              <span className="text-xs text-muted font-normal">({project.tamilName})</span>
            )}
          </div>

          <p className="text-xs sm:text-sm text-muted">
            <span className="text-accent-2 font-medium">{project.role}</span> ·{" "}
            <span className="font-mono">{project.year}</span>
          </p>
        </div>

        {/* Live and Github links with min 44px tap targets */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 self-start sm:self-auto">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 text-xs sm:text-sm font-semibold rounded-lg bg-accent/15 border border-accent/40 text-accent px-3.5 py-2 min-h-[44px] hover:bg-accent hover:text-accent-foreground transition-all cursor-pointer"
            >
              <span>Live Demo</span> <ExternalLink size={14} className="shrink-0" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 text-xs sm:text-sm font-medium rounded-lg border border-border bg-surface px-3.5 py-2 min-h-[44px] text-muted hover:text-foreground hover:border-foreground/40 transition-colors"
            >
              <GithubIcon size={14} className="shrink-0" /> <span>Code</span>
            </a>
          )}
        </div>
      </div>

      {/* Persona Badge */}
      {personaBadge && (
        <div className="mt-3.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono bg-accent/10 border border-accent/25 text-accent max-w-full">
          <Sparkles size={13} className="text-accent shrink-0" />
          <span className="break-words">{personaBadge}</span>
        </div>
      )}

      <p className="mt-3.5 sm:mt-4 text-sm sm:text-base text-foreground/90 leading-relaxed font-normal break-words">
        {project.tagline}
      </p>

      {/* Tech Stack Pills: Wraps cleanly without overflow */}
      <div className="mt-3.5 sm:mt-4 flex flex-wrap gap-1.5 max-w-full">
        {project.stack.map((s) => (
          <span
            key={s}
            className="font-mono text-[11px] sm:text-xs rounded-md bg-surface border border-border px-2.5 py-1 text-muted break-words"
          >
            {s}
          </span>
        ))}
      </div>

      {/* Impact Grid */}
      <div className="mt-4 sm:mt-5 grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
        {project.impact.map((i) => (
          <div
            key={i}
            className="rounded-lg bg-background/70 border border-border px-3 py-2.5 text-xs text-muted flex items-start gap-2 leading-relaxed break-words"
          >
            <CheckCircle2 size={14} className="text-accent-2 shrink-0 mt-0.5" />
            <span className="break-words">{i}</span>
          </div>
        ))}
      </div>

      {/* Case Study Toggle with min 44px tap target */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="mt-4 sm:mt-5 inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-accent hover:underline cursor-pointer min-h-[44px] py-2"
        aria-expanded={open}
      >
        <span>{open ? "Hide technical case study" : "Read technical case study & architecture"}</span>
        <ChevronDown size={16} className={`shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>

      {/* Case Study Container without layout shift or horizontal overflow */}
      {open && (
        <div className="mt-4 pt-4 border-t border-border space-y-3.5 animate-fade-up w-full overflow-hidden">
          <div className="rounded-lg bg-surface/50 border border-border p-3.5 sm:p-4">
            <p className="text-xs font-mono text-accent mb-1.5 flex items-center gap-1.5">
              <Layers size={13} className="shrink-0" />
              <span>THE BUSINESS &amp; TECHNICAL PROBLEM</span>
            </p>
            <p className="text-xs sm:text-sm text-muted leading-relaxed break-words">{project.problem}</p>
          </div>

          <div className="rounded-lg bg-surface/50 border border-border p-3.5 sm:p-4">
            <p className="text-xs font-mono text-accent mb-2 flex items-center gap-1.5">
              <Terminal size={13} className="shrink-0" />
              <span>ENGINEERING APPROACH &amp; ARCHITECTURE</span>
            </p>
            <ul className="space-y-2">
              {project.approach.map((a) => (
                <li key={a} className="text-xs sm:text-sm text-muted leading-relaxed flex gap-2.5">
                  <span className="text-accent-2 mt-0.5 font-bold shrink-0">▹</span>
                  <span className="break-words">{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  const { config } = usePersona();

  return (
    <section id="projects" className="mx-auto max-w-5xl px-4 sm:px-6 py-12 sm:py-16 md:py-20 scroll-mt-20">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 mb-2">
        <p className="section-label text-xs sm:text-sm">03. Projects &amp; Deliverables</p>
        <span className="text-xs font-mono text-accent bg-accent/10 px-2.5 py-0.5 rounded-full border border-accent/20 self-start sm:self-auto">
          Showing highlights for {config.shortLabel}
        </span>
      </div>

      <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2 sm:mb-3">
        Featured Production Systems
      </h2>
      <p className="text-xs sm:text-sm md:text-base text-muted max-w-2xl mb-8 sm:mb-10">
        Live platforms and engineering systems built with real-time streaming, automated payments, and production-grade architectures.
      </p>

      <div className="space-y-6">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </section>
  );
}
