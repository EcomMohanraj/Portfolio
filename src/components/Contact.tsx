"use client";

import { Mail, FileText, Phone, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { profile, personaData } from "@/data/content";
import { usePersona } from "@/context/PersonaContext";

export default function Contact() {
  const { persona } = usePersona();
  const current = personaData[persona];

  const emailSubjects: Record<string, string> = {
    hr: "Full Stack Engineer Role - Interview Invitation",
    manager: "Engineering Discussion / Code Review",
    client: "New Project Inquiry - Full Stack Development",
  };

  const currentSubject = encodeURIComponent(emailSubjects[persona] || "Hello Mohanraj");

  return (
    <section id="contact" className="mx-auto max-w-5xl px-4 sm:px-6 py-12 sm:py-16 md:py-24 scroll-mt-20">
      <div className="glow-card rounded-2xl p-5 sm:p-8 md:p-12 text-center max-w-2xl mx-auto border-accent/30 relative overflow-hidden">
        <div className="absolute -top-12 -right-12 w-36 h-36 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-12 -left-12 w-36 h-36 bg-accent-2/10 rounded-full blur-3xl pointer-events-none" />

        <p className="section-label text-xs sm:text-sm mb-2">05. What&apos;s Next</p>
        
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4 break-words">
          {persona === "hr" && "Ready to Strengthen Your Engineering Team?"}
          {persona === "manager" && "Let's Discuss Architecture & Deep Dives"}
          {persona === "client" && "Let's Build & Launch Your Product"}
        </h2>

        <p className="text-muted text-xs sm:text-sm md:text-base leading-relaxed mb-6 sm:mb-8 max-w-lg mx-auto">
          {current.contactMessage}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full">
          <a
            href={`mailto:${profile.email}?subject=${currentSubject}`}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 min-h-[44px] text-sm font-semibold text-accent-foreground hover:bg-accent-hover transition-all shadow-md shadow-accent/20 cursor-pointer w-full sm:w-auto"
          >
            <Mail size={16} /> <span>Send Email ({profile.email})</span>
          </a>

          <a
            href={`tel:${profile.phone.replace(/\s+/g, "")}`}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-surface px-5 py-3 min-h-[44px] text-sm font-medium text-foreground hover:border-accent/40 hover:bg-surface-2 transition-colors w-full sm:w-auto"
          >
            <Phone size={15} className="text-accent-2" /> <span>{profile.phone}</span>
          </a>
        </div>

        <div className="mt-8 pt-6 border-t border-border flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-muted">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground inline-flex items-center justify-center gap-1.5 min-h-[44px] px-3 transition-colors"
          >
            <GithubIcon size={16} /> <span>GitHub</span> <ArrowUpRight size={13} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground inline-flex items-center justify-center gap-1.5 min-h-[44px] px-3 transition-colors"
          >
            <LinkedinIcon size={16} /> <span>LinkedIn</span> <ArrowUpRight size={13} />
          </a>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground inline-flex items-center justify-center gap-1.5 min-h-[44px] px-3 transition-colors"
          >
            <FileText size={16} /> <span>Resume</span> <ArrowUpRight size={13} />
          </a>
        </div>
      </div>
    </section>
  );
}
