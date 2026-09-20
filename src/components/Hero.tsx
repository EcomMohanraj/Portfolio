import { ArrowRight, MapPin, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { profile } from "@/data/content";

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pt-16 pb-20 md:pt-24 md:pb-28">
      <div className="animate-fade-up">
        <p className="section-label text-sm mb-4">Hi, I&apos;m</p>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
          {profile.name}
        </h1>
        <p className="mt-3 text-xl md:text-2xl text-muted font-medium">{profile.role}</p>

        <p className="mt-6 max-w-2xl text-base md:text-lg text-muted leading-relaxed">
          {profile.tagline}
        </p>

        <div className="mt-6 flex items-center gap-2 text-sm text-muted">
          <MapPin size={16} className="text-accent" />
          {profile.location}
          <span className="mx-1">·</span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-2 animate-pulse" />
            Open to remote roles
          </span>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-[#06131a] hover:opacity-90 transition-opacity"
          >
            View my work <ArrowRight size={16} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground hover:border-accent/50 transition-colors"
          >
            Get in touch
          </a>

          <div className="flex items-center gap-3 ml-2">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted hover:text-foreground transition-colors"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted hover:text-foreground transition-colors"
            >
              <LinkedinIcon size={20} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="text-muted hover:text-foreground transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
