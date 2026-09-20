"use client";

import { experience } from "@/data/content";
import { usePersona } from "@/context/PersonaContext";
import { TrendingUp, Building, Calendar, CheckCircle2 } from "lucide-react";

export default function Experience() {
  const { persona } = usePersona();

  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-14 md:py-20 scroll-mt-20">
      <div className="flex items-center justify-between gap-4 mb-2">
        <p className="section-label text-sm">02. Work History</p>
        <span className="text-xs font-mono text-accent-2/90 bg-accent-2/10 px-2.5 py-0.5 rounded-full border border-accent-2/20 flex items-center gap-1">
          <TrendingUp size={12} />
          <span>Promoted in 3 Months</span>
        </span>
      </div>

      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10">
        Professional Experience
      </h2>

      {experience.map((exp) => (
        <div key={exp.company} className="glow-card rounded-xl p-6 md:p-8">
          <div className="flex flex-wrap items-baseline justify-between gap-2 mb-6 border-b border-border pb-4">
            <div>
              <h3 className="text-lg md:text-xl font-bold text-foreground flex items-center gap-2">
                <Building size={18} className="text-accent" />
                {exp.company}
              </h3>
              <p className="text-sm text-muted mt-0.5">{exp.location}</p>
            </div>
            <div className="flex items-center gap-1.5 font-mono text-xs text-muted bg-surface px-3 py-1 rounded-md border border-border">
              <Calendar size={13} className="text-accent" />
              <span>{exp.range}</span>
            </div>
          </div>

          <div className="relative border-l-2 border-border/80 pl-6 sm:pl-8 ml-2 space-y-8">
            {exp.roles.map((role, idx) => (
              <div key={role.title} className="relative">
                <span className="absolute -left-[1.95rem] sm:-left-[2.45rem] top-1 h-3 w-3 rounded-full bg-accent ring-4 ring-background shadow-sm shadow-accent/50" />
                
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h4 className="font-semibold text-base sm:text-lg text-foreground">
                    {role.title}
                  </h4>
                  <span className="font-mono text-xs text-accent/80 bg-accent/10 px-2 py-0.5 rounded">
                    {role.range}
                  </span>
                </div>

                <ul className="mt-3.5 space-y-2.5">
                  {role.bullets.map((b, bIdx) => {
                    // Highlight key metrics
                    const isHighlight =
                      b.includes("Promoted") ||
                      b.includes("17+ full-stack modules") ||
                      b.includes("MQTT-based");

                    return (
                      <li
                        key={bIdx}
                        className={`text-xs sm:text-sm leading-relaxed flex gap-2.5 ${
                          isHighlight ? "text-foreground font-medium" : "text-muted"
                        }`}
                      >
                        <span className="text-accent mt-0.5 font-bold">▹</span>
                        <span>{b}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
