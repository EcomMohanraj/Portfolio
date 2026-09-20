import { skills, education } from "@/data/content";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-16 md:py-20 scroll-mt-20">
      <p className="section-label text-sm mb-2">04. Skills</p>
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10">
        What I work with
      </h2>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {skills.map((group) => (
          <div key={group.group} className="glow-card rounded-lg p-5">
            <h3 className="text-sm font-semibold text-foreground mb-3">{group.group}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="font-mono text-xs rounded-md bg-background/60 border border-border px-2.5 py-1 text-muted"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <h3 className="text-sm font-semibold text-foreground mb-4">Education</h3>
      <div className="grid sm:grid-cols-2 gap-4">
        {education.map((e) => (
          <div key={e.degree} className="flex items-baseline justify-between border-b border-border pb-3">
            <div>
              <span className="font-medium text-foreground">{e.degree}</span>
              <span className="text-muted text-sm"> — {e.school}</span>
              {e.detail && <span className="text-muted text-sm"> · {e.detail}</span>}
            </div>
            <span className="font-mono text-xs text-muted shrink-0 ml-3">{e.year}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
