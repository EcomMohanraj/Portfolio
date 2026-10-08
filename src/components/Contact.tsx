import { Mail, ArrowUpRight, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { profile } from "@/data/content";

export default function Contact() {
  return (
    <section
      id="contact"
      aria-label="Contact Information"
      className="mx-auto max-w-5xl px-4 sm:px-6 py-12 sm:py-20 scroll-mt-20 border-t border-border/60"
    >
      {/* 11. Subtle Availability / Hiring CTA */}
      <div className="mb-14 p-5 sm:p-6 rounded-2xl bg-surface border border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-wider text-[#34d399] font-medium block">
            Status: Active &amp; Interviewing
          </span>
          <p className="text-sm sm:text-base font-semibold text-foreground mt-0.5">
            Open to Full Stack Developer and Software Engineer opportunities.
          </p>
        </div>

        <div className="flex items-center gap-2.5 shrink-0 w-full sm:w-auto">
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-surface-2 border border-border text-xs font-semibold text-foreground hover:border-accent/40 transition-colors min-h-[44px] flex-1 sm:flex-initial"
          >
            <FileText size={14} className="text-accent shrink-0" />
            <span>View Resume</span>
          </a>

          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-accent text-xs font-semibold text-white hover:bg-accent-hover transition-colors min-h-[44px] flex-1 sm:flex-initial"
          >
            <Mail size={14} className="shrink-0" />
            <span>Contact Me</span>
          </a>
        </div>
      </div>

      {/* 10. Main Contact Section */}
      <div className="tech-card rounded-2xl p-6 sm:p-10 text-center max-w-2xl mx-auto">
        <p className="section-label mb-2">06. Get In Touch</p>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
          Let&apos;s build something together.
        </h2>

        <p className="text-sm sm:text-base text-muted-light max-w-md mx-auto mb-8 leading-relaxed">
          I am actively available for software engineering roles. Reach out directly via email, GitHub, or LinkedIn.
        </p>

        {/* Primary Contact Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent-hover transition-all shadow-md shadow-accent/20 cursor-pointer min-h-[44px] w-full sm:w-auto"
          >
            <Mail size={16} />
            <span>Email Me</span>
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-surface-2 border border-border px-5 py-3 text-sm font-semibold text-foreground hover:border-accent/40 hover:bg-surface transition-all cursor-pointer min-h-[44px] w-full sm:w-auto"
          >
            <LinkedinIcon size={16} />
            <span>LinkedIn</span>
            <ArrowUpRight size={14} className="text-muted" />
          </a>

          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-surface-2 border border-border px-5 py-3 text-sm font-semibold text-foreground hover:border-accent/40 hover:bg-surface transition-all cursor-pointer min-h-[44px] w-full sm:w-auto"
          >
            <GithubIcon size={16} />
            <span>GitHub</span>
            <ArrowUpRight size={14} className="text-muted" />
          </a>
        </div>

        {/* Direct Email Address for Copying */}
        <div className="pt-6 border-t border-border text-xs text-muted font-mono">
          <span>Direct Email: </span>
          <a
            href={`mailto:${profile.email}`}
            className="text-foreground hover:text-accent underline underline-offset-4 ml-1"
          >
            {profile.email}
          </a>
        </div>
      </div>
    </section>
  );
}
