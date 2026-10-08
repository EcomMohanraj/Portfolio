import { Download, FileText, CheckCircle2 } from "lucide-react";
import { profile } from "@/data/content";

export default function ResumeSection() {
  return (
    <section
      id="resume"
      aria-label="Resume"
      className="mx-auto max-w-5xl px-4 sm:px-6 py-12 sm:py-16 scroll-mt-20 border-t border-border/60"
    >
      <div className="tech-card rounded-2xl p-6 sm:p-8 md:p-10 relative overflow-hidden bg-gradient-to-b from-surface to-surface-2">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-xl">
            <span className="section-label block mb-2">05. Verified Credentials</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Curriculum Vitae / Resume
            </h2>
            <p className="text-sm sm:text-base text-muted-light mt-2 leading-relaxed">
              Detailed technical summary including production HIMS modules, full-stack platform architectures, MCA degree credentials, and technology proficiencies.
            </p>

            <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs font-mono text-muted">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={13} className="text-[#34d399]" />
                <span>PDF Format (60KB)</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={13} className="text-[#34d399]" />
                <span>Updated for 2026 Roles</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={13} className="text-[#34d399]" />
                <span>Direct Contact Information</span>
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            {/* Download Resume Button */}
            <a
              href={profile.resumeUrl}
              download="Mohanraj_S_Resume.pdf"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white hover:bg-accent-hover transition-all shadow-md shadow-accent/20 cursor-pointer min-h-[44px]"
            >
              <Download size={16} />
              <span>Download Resume</span>
            </a>

            {/* View Resume Button */}
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-surface border border-border px-5 py-3 text-sm font-semibold text-foreground hover:bg-surface-2 hover:border-accent/40 transition-all cursor-pointer min-h-[44px]"
            >
              <FileText size={16} className="text-accent" />
              <span>View Resume</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
