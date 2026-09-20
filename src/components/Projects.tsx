"use client";

import { useState } from "react";
import { ExternalLink, ChevronDown } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { projects } from "@/data/content";

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="glow-card rounded-xl p-6 md:p-8 transition-colors">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold text-foreground">{project.name}</h3>
          {project.tamilName && (
            <p className="text-sm text-muted mt-0.5">{project.tamilName}</p>
          )}
          <p className="text-sm text-muted mt-1">
            {project.role} · <span className="font-mono">{project.year}</span>
          </p>
        </div>

        <div className="flex items-center gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-accent hover:underline"
            >
              Live site <ExternalLink size={14} />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-foreground"
            >
              <GithubIcon size={14} /> Code
            </a>
          )}
        </div>
      </div>

      <p className="mt-4 text-base text-foreground/90">{project.tagline}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((s) => (
          <span
            key={s}
            className="font-mono text-xs rounded-full border border-border px-2.5 py-1 text-muted"
          >
            {s}
          </span>
        ))}
      </div>

      <div className="mt-5 grid sm:grid-cols-3 gap-3">
        {project.impact.map((i) => (
          <div key={i} className="rounded-lg bg-background/60 border border-border px-3 py-2 text-xs text-muted leading-snug">
            {i}
          </div>
        ))}
      </div>

      <button
        onClick={() => setOpen((v) => !v)}
        className="mt-5 inline-flex items-center gap-1.5 text-sm text-accent"
      >
        {open ? "Hide case study" : "Read case study"}
        <ChevronDown size={16} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="mt-4 pt-4 border-t border-border space-y-4 animate-fade-up">
          <div>
            <p className="text-xs font-mono text-accent mb-1.5">THE PROBLEM</p>
            <p className="text-sm text-muted leading-relaxed">{project.problem}</p>
          </div>
          <div>
            <p className="text-xs font-mono text-accent mb-1.5">WHAT I BUILT</p>
            <ul className="space-y-2">
              {project.approach.map((a) => (
                <li key={a} className="text-sm text-muted leading-relaxed flex gap-2">
                  <span className="text-accent-2 mt-1">▹</span>
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
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-16 md:py-20 scroll-mt-20">
      <p className="section-label text-sm mb-2">03. Projects</p>
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10">
        Things I&apos;ve built
      </h2>

      <div className="space-y-6">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </section>
  );
}
