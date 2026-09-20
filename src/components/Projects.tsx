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
    <div className="glow-card rounded-xl p-6 md:p-8 transition-all hover:border-accent/40">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-1.5">
            <h3 className="text-xl md:text-2xl font-bold text-foreground">{project.name}</h3>
            {project.tamilName && (
              <span className="text-xs text-muted/80 font-normal">({project.tamilName})</span>
            )}
          </div>

          <p className="text-sm text-muted">
            <span className="text-accent-2 font-medium">{project.role}</span> ·{" "}
            <span className="font-mono">{project.year}</span>
          </p>
        </div>

        {/* Live and Github links */}
        <div className="flex items-center gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold rounded-md bg-accent/15 border border-accent/40 text-accent px-3 py-1.5 hover:bg-accent hover:text-[#06131a] transition-all"
            >
              Live Demo <ExternalLink size={14} />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium rounded-md border border-border bg-surface px-3 py-1.5 text-muted hover:text-foreground hover:border-foreground/40 transition-colors"
            >
              <GithubIcon size={14} /> Code
            </a>
          )}
        </div>
      </div>

      {/* Persona Badge */}
      {personaBadge && (
        <div className="mt-3.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono bg-accent/10 border border-accent/25 text-accent">
          <Sparkles size={13} className="text-accent" />
          <span>{personaBadge}</span>
        </div>
      )}

      <p className="mt-4 text-base text-foreground/90 leading-relaxed font-normal">
        {project.tagline}
      </p>

      {/* Tech Stack Pills */}
      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.stack.map((s) => (
          <span
            key={s}
            className="font-mono text-xs rounded-md bg-surface border border-border/80 px-2.5 py-1 text-muted"
          >
            {s}
          </span>
        ))}
      </div>

      {/* Impact Grid */}
      <div className="mt-5 grid sm:grid-cols-3 gap-3">
        {project.impact.map((i) => (
          <div
            key={i}
            className="rounded-lg bg-background/70 border border-border/90 px-3 py-2.5 text-xs text-muted flex items-start gap-2 leading-relaxed"
          >
            <CheckCircle2 size={14} className="text-accent-2 shrink-0 mt-0.5" />
            <span>{i}</span>
          </div>
        ))}
      </div>

      {/* Case Study Toggle */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline cursor-pointer"
      >
        {open ? "Hide technical case study" : "Read technical case study & architecture"}
        <ChevronDown size={16} className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="mt-5 pt-5 border-t border-border space-y-4 animate-fade-up">
          <div className="rounded-lg bg-surface/50 border border-border p-4">
            <p className="text-xs font-mono text-accent mb-1.5 flex items-center gap-1.5">
              <Layers size={13} />
              THE BUSINESS &amp; TECHNICAL PROBLEM
            </p>
            <p className="text-sm text-muted leading-relaxed">{project.problem}</p>
          </div>

          <div className="rounded-lg bg-surface/50 border border-border p-4">
            <p className="text-xs font-mono text-accent mb-2 flex items-center gap-1.5">
              <Terminal size={13} />
              ENGINEERING APPROACH &amp; ARCHITECTURE
            </p>
            <ul className="space-y-2.5">
              {project.approach.map((a) => (
                <li key={a} className="text-sm text-muted leading-relaxed flex gap-2.5">
                  <span className="text-accent-2 mt-0.5 font-bold">▹</span>
                  <span>{a}</span>
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
    <section id="projects" className="mx-auto max-w-5xl px-6 py-14 md:py-20 scroll-mt-20">
      <div className="flex items-center justify-between gap-4 mb-2">
        <p className="section-label text-sm">03. Projects &amp; Deliverables</p>
        <span className="text-xs font-mono text-accent/90 bg-accent/10 px-2.5 py-0.5 rounded-full border border-accent/20">
          Showing highlights for {config.shortLabel}
        </span>
      </div>

      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
        Featured Production Systems
      </h2>
      <p className="text-sm md:text-base text-muted max-w-2xl mb-10">
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
