import { profile } from "@/data/content";

const stats = [
  { value: "17+", label: "modules shipped in production HIMS" },
  { value: "2", label: "platforms built & shipped solo" },
  { value: "100", label: "Google PageSpeed score achieved" },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-16 md:py-20 scroll-mt-20">
      <p className="section-label text-sm mb-2">01. About</p>
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Who I am</h2>

      <div className="grid md:grid-cols-3 gap-10">
        <p className="md:col-span-2 text-muted leading-relaxed text-base md:text-lg">
          {profile.summary}
        </p>

        <div className="grid grid-cols-3 md:grid-cols-1 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="glow-card rounded-lg p-4">
              <div className="text-2xl font-bold text-accent">{s.value}</div>
              <div className="text-xs text-muted mt-1 leading-snug">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
