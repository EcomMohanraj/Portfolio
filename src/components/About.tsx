"use client";

import { usePersona } from "@/context/PersonaContext";
import { personaData, profile } from "@/data/content";
import { CheckCircle2, Award, Zap } from "lucide-react";

export default function About() {
  const { persona, config } = usePersona();
  const current = personaData[persona];

  return (
    <section id="about" className="mx-auto max-w-5xl px-4 sm:px-6 py-12 sm:py-16 md:py-18 scroll-mt-20">
      <div className="flex items-center justify-between gap-4 mb-2">
        <p className="section-label text-xs sm:text-sm">01. About Me</p>
        <span className="text-xs font-mono text-muted flex items-center gap-1.5 bg-surface px-2.5 py-1 rounded-md border border-border">
          <Zap size={12} className="text-accent" />
          <span>{config.shortLabel}</span>
        </span>
      </div>

      <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 sm:mb-8">
        Who I am &amp; What I Deliver
      </h2>

      <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
        <div className="md:col-span-2 space-y-4">
          <p className="text-muted leading-relaxed text-sm sm:text-base md:text-lg">
            {current.summary}
          </p>

          <div className="mt-5 sm:mt-6 p-3.5 sm:p-4 rounded-xl bg-surface/80 border border-border">
            <h4 className="text-xs font-mono uppercase tracking-wider text-accent mb-3 flex items-center gap-1.5">
              <Award size={14} className="shrink-0" />
              Key Strengths for {config.label}:
            </h4>
            <div className="grid sm:grid-cols-2 gap-2.5">
              {current.highlights.map((item, i) => (
                <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-foreground/90">
                  <CheckCircle2 size={14} className="text-accent-2 shrink-0 mt-0.5" />
                  <span className="leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dynamic Metric Stat Cards: Warm amber accent-2 used for stat numbers, scaling down smoothly */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-3 sm:gap-3.5">
          {current.stats.map((s) => (
            <div
              key={s.label}
              className="glow-card rounded-xl p-4 transition-transform hover:-translate-y-0.5"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent-2 tracking-tight">
                {s.value}
              </div>
              <div className="text-xs sm:text-sm text-muted mt-1 leading-snug font-medium break-words">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
