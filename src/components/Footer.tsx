import { ArrowUp } from "lucide-react";
import { profile } from "@/data/content";

export default function Footer() {
  return (
    <footer className="border-t border-border mt-auto bg-surface/50">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-muted">
        <div>
          <span>© {new Date().getFullYear()} {profile.name}. </span>
          <span className="text-muted/70">Full Stack Software Engineer.</span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            Resume
          </a>
          <a
            href="#hero"
            className="inline-flex items-center gap-1 hover:text-accent transition-colors ml-2"
            title="Back to top"
          >
            <span>Top</span>
            <ArrowUp size={12} />
          </a>
        </div>
      </div>
    </footer>
  );
}
