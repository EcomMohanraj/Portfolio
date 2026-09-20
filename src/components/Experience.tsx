"use client";

import { experience } from "@/data/content";
import { usePersona } from "@/context/PersonaContext";
import { TrendingUp, Building, Calendar } from "lucide-react";

export default function Experience() {
  const { persona } = usePersona();

  return (
    <section id="experience" className="mx-auto max-w-5xl px-4 sm:px-6 py-12 sm:py-16 md:py-20 scroll-mt-20">
      <div className="flex items-center justify-between gap-4 mb-2">
        <p className="section-label text-xs sm:text-sm">02. Work History</p>
        <span className="text-xs font-mono text-accent-2 bg-accent-2/10 px-2.5 py-0.5 rounded-full border border-accent-2/20 flex items-center gap-1">
          <TrendingUp size={12} className="shrink-0" />
          <span>Promoted in 3 Months</span>
        </span>
      </div>

      <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8 sm:mb-10">
        Professional Experience
      </h2>

      {experience.map((exp) => (
        <div key={exp.company} className="glow-card rounded-xl p-4 sm:p-6 md:p-8">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-6 border-b border-border pb-4">
            <div>
              <h3 className="text-lg md:text-xl font-bold text-foreground flex items-center gap-2">
                <Building size={18} className="text-accent shrink-0" />
                <span>{exp.company}</span>
              </h3>
              <p className="text-xs sm:text-sm text-muted mt-0.5">{exp.location}</p>
            </div>
            <div className="inline-flex items-center gap-1.5 font-mono text-xs text-muted bg-surface px-2.5 py-1 rounded-md border border-border self-start sm:self-auto">
              <Calendar size={13} className="text-accent shrink-0" />
              <span>{exp.range}</span>
            </div>
          </div>

          <div className="relative border-l-2 border-border/80 pl-5 sm:pl-8 ml-1 sm:ml-2 space-y-8">
            {exp.roles.map((role) => (
              <div key={role.title} className="relative">
                <span className="absolute -left-[1.65rem] sm:-left-[2.45rem] top-1.5 h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-accent ring-4 ring-background shadow-sm shadow-accent/50" />
                
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1.5">
                  <h4 className="font-semibold text-sm sm:text-base md:text-lg text-foreground">
                    {role.title}
                  </h4>
                  <span className="font-mono text-xs text-accent bg-accent/10 px-2 py-0.5 rounded self-start sm:self-auto">
                    {role.range}
                  </span>
                </div>

                <ul className="mt-3 space-y-2.5">
                  {role.bullets.map((b, bIdx) => {
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
                        <span className="text-accent mt-0.5 font-bold shrink-0">▹</span>
                        <span className="break-words">{b}</span>
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
