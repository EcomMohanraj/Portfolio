import { Briefcase, GraduationCap, MapPin, CheckCircle2 } from "lucide-react";
import { profile, education } from "@/data/content";

export default function About() {
  return (
    <section
      id="about"
      aria-label="About Mohanraj S"
      className="mx-auto max-w-5xl px-4 sm:px-6 py-12 sm:py-20 scroll-mt-20 border-t border-border/60"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
        <p className="section-label">04. Professional Background</p>
        <span className="text-xs font-mono text-muted bg-surface-2 px-2.5 py-1 rounded-md border border-border self-start sm:self-auto">
          Full Lifecycle Engineering
        </span>
      </div>

      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-8">
        About Me
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Main narrative */}
        <div className="lg:col-span-7 space-y-4 text-muted-light leading-relaxed text-sm sm:text-base">
          <p>
            I’m a Full Stack Software Engineer with production experience building web applications using React, Next.js, TypeScript, Golang, Node.js and PostgreSQL.
          </p>
          <p>
            I have worked on a production Healthcare Information Management System and independently built and deployed full-stack platforms involving e-commerce, real-time communication, payments, authentication and automated testing.
          </p>
          <p>
            I enjoy working across the complete application lifecycle — from database and API design to frontend development, testing and deployment.
          </p>

          {/* Target Roles Card */}
          <div className="mt-6 pt-5 border-t border-border">
            <span className="text-xs font-mono uppercase tracking-wider text-accent block mb-3 flex items-center gap-1.5">
              <Briefcase size={14} className="shrink-0" />
              <span>Actively Looking For Roles In:</span>
            </span>
            <div className="flex flex-wrap gap-2">
              {profile.targetRoles.map((role) => (
                <span
                  key={role}
                  className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg bg-surface-2 border border-border text-foreground"
                >
                  <CheckCircle2 size={12} className="text-[#34d399] shrink-0" />
                  <span>{role}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Credentials & Education Sidebar */}
        <div className="lg:col-span-5 space-y-4">
          <div className="tech-card rounded-xl p-5">
            <span className="text-xs font-mono uppercase tracking-wider text-accent block mb-3 flex items-center gap-1.5">
              <GraduationCap size={15} className="shrink-0" />
              <span>Academic Foundation</span>
            </span>

            <div className="space-y-4">
              {education.map((edu) => (
                <div key={edu.degree} className="border-b border-border/70 last:border-0 pb-3 last:pb-0">
                  <span className="text-sm font-bold text-foreground block">
                    {edu.degree}
                  </span>
                  <span className="text-xs text-muted block mt-0.5">
                    {edu.school}
                  </span>
                  <div className="flex items-center justify-between mt-1 text-xs font-mono">
                    <span className="text-accent">{edu.detail}</span>
                    <span className="text-muted">{edu.period}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Location & Experience Snapshot */}
          <div className="tech-card rounded-xl p-4 text-xs font-mono space-y-2">
            <div className="flex items-center justify-between text-muted">
              <span>Location:</span>
              <span className="text-foreground">{profile.location}</span>
            </div>
            <div className="flex items-center justify-between text-muted">
              <span>Experience Level:</span>
              <span className="text-foreground">{profile.targetExperience}</span>
            </div>
            <div className="flex items-center justify-between text-muted">
              <span>Status:</span>
              <span className="text-[#34d399] font-semibold">Immediate Joiner / Open</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
