"use client";

import { skills, education } from "@/data/content";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-4 sm:px-6 py-12 sm:py-16 md:py-20 scroll-mt-20">
      <p className="section-label text-xs sm:text-sm mb-2">04. Skills</p>
      <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8 sm:mb-10">
        What I work with
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-10 sm:mb-12">
        {skills.map((group) => (
          <div key={group.group} className="glow-card rounded-xl p-4 sm:p-5">
            <h3 className="text-xs sm:text-sm font-semibold text-foreground mb-3">{group.group}</h3>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="font-mono text-xs rounded-md bg-background/70 border border-border px-2.5 py-1 text-muted break-words"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <h3 className="text-sm font-semibold text-foreground mb-4">Education</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        {education.map((e) => (
          <div key={e.degree} className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-border pb-3">
            <div className="leading-snug">
              <span className="font-medium text-foreground text-sm">{e.degree}</span>
              <span className="text-muted text-xs sm:text-sm block sm:inline"> — {e.school}</span>
              {e.detail && <span className="text-accent text-xs sm:text-sm block sm:inline font-mono"> · {e.detail}</span>}
            </div>
            <span className="font-mono text-xs text-muted shrink-0 self-start sm:self-auto sm:ml-3">{e.year}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
