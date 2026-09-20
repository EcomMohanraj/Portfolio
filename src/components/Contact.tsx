import { Mail, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { profile } from "@/data/content";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-16 md:py-24 scroll-mt-20">
      <div className="text-center max-w-xl mx-auto">
        <p className="section-label text-sm mb-2">05. Contact</p>
        <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
          Let&apos;s work together
        </h2>
        <p className="text-muted leading-relaxed mb-8">
          I&apos;m currently open to full-time remote Full Stack Developer roles. If you have an
          opportunity, or just want to talk shop, my inbox is open.
        </p>

        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-medium text-[#06131a] hover:opacity-90 transition-opacity"
        >
          <Mail size={16} /> {profile.email}
        </a>

        <div className="mt-8 flex items-center justify-center gap-6 text-muted">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-foreground inline-flex items-center gap-1.5 text-sm">
            <GithubIcon size={16} /> GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-foreground inline-flex items-center gap-1.5 text-sm">
            <LinkedinIcon size={16} /> LinkedIn
          </a>
          <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" className="hover:text-foreground inline-flex items-center gap-1.5 text-sm">
            <FileText size={16} /> Resume
          </a>
        </div>
      </div>
    </section>
  );
}
