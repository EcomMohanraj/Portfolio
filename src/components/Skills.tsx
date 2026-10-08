import { Code2, Layout, Server, Database, Cloud, ShieldCheck, Wrench, Layers } from "lucide-react";
import { skillsData } from "@/data/content";

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    skills: skillsData.languages,
  },
  {
    title: "Frontend",
    icon: Layout,
    skills: skillsData.frontend,
  },
  {
    title: "Backend",
    icon: Server,
    skills: skillsData.backend,
  },
  {
    title: "Databases",
    icon: Database,
    skills: skillsData.databases,
  },
  {
    title: "Database Expertise",
    icon: Layers,
    skills: skillsData.databaseExpertise,
  },
  {
    title: "Cloud / Platforms",
    icon: Cloud,
    skills: skillsData.cloudPlatforms,
  },
  {
    title: "Testing",
    icon: ShieldCheck,
    skills: skillsData.testing,
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: skillsData.tools,
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      aria-label="Technical Skills"
      className="mx-auto max-w-5xl px-4 sm:px-6 py-12 sm:py-20 scroll-mt-20 border-t border-border/60"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
        <p className="section-label">03. Technical Competencies</p>
        <span className="text-xs font-mono text-muted bg-surface-2 px-2.5 py-1 rounded-md border border-border self-start sm:self-auto">
          Production-Tested Stack
        </span>
      </div>

      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
        Technical Skills
      </h2>
      <p className="text-sm sm:text-base text-muted max-w-2xl mb-10">
        Categorized technologies used across production enterprise modules and deployed web systems.
      </p>

      {/* Grid of skill categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        {skillCategories.map((cat) => {
          const Icon = cat.icon;
          return (
            <div
              key={cat.title}
              className="tech-card rounded-xl p-4 sm:p-5 flex flex-col justify-between"
            >
              <div className="flex items-center gap-2.5 mb-3.5 pb-2.5 border-b border-border">
                <Icon size={16} className="text-accent shrink-0" />
                <h3 className="text-sm font-semibold text-foreground tracking-wide">
                  {cat.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {cat.skills.map((item) => (
                  <span
                    key={item}
                    className="font-mono text-xs rounded-md bg-surface-2 border border-border px-2.5 py-1 text-foreground/90 hover:border-accent/40 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
