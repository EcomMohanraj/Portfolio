import { Building2, Calendar, MapPin, TrendingUp, CheckCircle2 } from "lucide-react";
import { experience } from "@/data/content";

export default function Experience() {
  const currentExp = experience[0];

  return (
    <section
      id="experience"
      aria-label="Professional Experience"
      className="mx-auto max-w-5xl px-4 sm:px-6 py-12 sm:py-18 scroll-mt-20 border-t border-border/60"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2">
        <p className="section-label">01. Production Engineering Work</p>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#10b981]/10 text-[#34d399] border border-[#10b981]/25 self-start sm:self-auto">
          <TrendingUp size={13} className="shrink-0" />
          <span>Promoted in 3 Months</span>
        </span>
      </div>

      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
        Professional Experience
      </h2>
      <p className="text-sm sm:text-base text-muted max-w-2xl mb-8 sm:mb-10">
        Hands-on production software engineering delivering real-time telemetry, normalized schemas, and secure full-stack modules.
      </p>

      {/* Main Experience Card */}
      <div className="tech-card rounded-2xl p-5 sm:p-8">
        {/* Company Header */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-6 border-b border-border">
          <div>
            <div className="flex items-center gap-2">
              <Building2 size={20} className="text-accent shrink-0" />
              <h3 className="text-lg sm:text-xl font-bold text-foreground">
                {currentExp.company}
              </h3>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-muted mt-1.5">
              <MapPin size={13} className="shrink-0 text-muted" />
              <span>{currentExp.location}</span>
            </div>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-2 border border-border text-xs font-mono text-muted self-start sm:self-auto">
            <Calendar size={13} className="text-accent shrink-0" />
            <span>{currentExp.period}</span>
          </div>
        </div>

        {/* Promotion Highlight Banner */}
        <div className="my-6 p-3.5 sm:p-4 rounded-xl bg-accent/10 border border-accent/25 flex items-start gap-3">
          <TrendingUp size={18} className="text-accent shrink-0 mt-0.5" />
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-accent block">
              Merit-Based Promotion
            </span>
            <p className="text-xs sm:text-sm text-foreground/90 mt-0.5 font-medium leading-relaxed">
              {currentExp.promotionCallout}
            </p>
          </div>
        </div>

        {/* Roles Timeline */}
        <div className="space-y-8 pl-1 sm:pl-2">
          {currentExp.roles.map((role, roleIdx) => (
            <div key={role.title} className="relative pl-6 sm:pl-8 border-l-2 border-border/80">
              {/* Timeline marker */}
              <div
                className={`absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 ${
                  roleIdx === 0
                    ? "bg-accent border-background ring-4 ring-accent/20"
                    : "bg-surface-2 border-border ring-2 ring-background"
                }`}
              />

              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-3">
                <h4 className="text-base sm:text-lg font-bold text-foreground">
                  {role.title}
                </h4>
                <span className="font-mono text-xs text-muted self-start sm:self-auto">
                  {role.period}
                </span>
              </div>

              {/* Highlights */}
              <ul className="space-y-2.5">
                {role.highlights.map((highlight, hIdx) => (
                  <li
                    key={hIdx}
                    className="text-xs sm:text-sm text-muted-light leading-relaxed flex items-start gap-2.5"
                  >
                    <CheckCircle2
                      size={15}
                      className="text-accent shrink-0 mt-0.5"
                    />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Stack badges applied in production */}
        <div className="mt-8 pt-6 border-t border-border flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono text-muted mr-1">Production Technologies:</span>
          {["React", "TypeScript", "Golang", "PostgreSQL", "MQTT", "REST APIs"].map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md text-xs font-mono bg-surface-2 border border-border text-muted-light"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
