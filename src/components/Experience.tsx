import { experience } from "@/data/content";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-16 md:py-20 scroll-mt-20">
      <p className="section-label text-sm mb-2">02. Experience</p>
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10">Where I&apos;ve worked</h2>

      {experience.map((exp) => (
        <div key={exp.company} className="mb-2">
          <div className="flex flex-wrap items-baseline justify-between gap-2 mb-6">
            <h3 className="text-lg font-semibold text-foreground">
              {exp.company} <span className="text-muted font-normal">· {exp.location}</span>
            </h3>
            <span className="font-mono text-xs text-muted">{exp.range}</span>
          </div>

          <div className="relative border-l border-border pl-8 ml-1 space-y-10">
            {exp.roles.map((role) => (
              <div key={role.title} className="relative">
                <span className="absolute -left-[2.31rem] top-1.5 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-background" />
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h4 className="font-medium text-foreground">{role.title}</h4>
                  <span className="font-mono text-xs text-muted">{role.range}</span>
                </div>
                <ul className="mt-3 space-y-2">
                  {role.bullets.map((b) => (
                    <li key={b} className="text-sm text-muted leading-relaxed flex gap-2">
                      <span className="text-accent mt-1">▹</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
