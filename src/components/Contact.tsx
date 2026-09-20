"use client";

import { Mail, FileText, Phone, ArrowUpRight, MessageSquareQuote } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { profile, personaData } from "@/data/content";
import { usePersona } from "@/context/PersonaContext";

export default function Contact() {
  const { persona, config } = usePersona();
  const current = personaData[persona];

  const emailSubjects: Record<string, string> = {
    hr: "Full Stack Engineer Role - Interview Invitation",
    manager: "Engineering Discussion / Code Review",
    client: "New Project Inquiry - Full Stack Development",
  };

  const currentSubject = encodeURIComponent(emailSubjects[persona] || "Hello Mohanraj");

  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-16 md:py-24 scroll-mt-20">
      <div className="glow-card rounded-2xl p-8 md:p-12 text-center max-w-2xl mx-auto border-accent/30 relative overflow-hidden">
        <div className="absolute -top-12 -right-12 w-40 h-40 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-accent-2/10 rounded-full blur-3xl pointer-events-none" />

        <p className="section-label text-sm mb-2">05. What&apos;s Next</p>
        
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
          {persona === "hr" && "Ready to Strengthen Your Engineering Team?"}
          {persona === "manager" && "Let's Discuss Architecture & Deep Dives"}
          {persona === "client" && "Let's Build & Launch Your Product"}
        </h2>

        <p className="text-muted text-sm sm:text-base leading-relaxed mb-8 max-w-lg mx-auto">
          {current.contactMessage}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <a
            href={`mailto:${profile.email}?subject=${currentSubject}`}
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-[#06131a] hover:opacity-90 transition-all shadow-md shadow-accent/20 cursor-pointer"
          >
            <Mail size={16} /> Send Email ({profile.email})
          </a>

          <a
            href={`tel:${profile.phone.replace(/\s+/g, "")}`}
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-5 py-3 text-sm font-medium text-foreground hover:border-accent/40 transition-colors"
          >
            <Phone size={15} className="text-accent-2" /> {profile.phone}
          </a>
        </div>

        <div className="mt-8 pt-6 border-t border-border flex flex-wrap items-center justify-center gap-6 text-sm text-muted">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground inline-flex items-center gap-1.5 transition-colors"
          >
            <GithubIcon size={16} /> GitHub <ArrowUpRight size={13} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground inline-flex items-center gap-1.5 transition-colors"
          >
            <LinkedinIcon size={16} /> LinkedIn <ArrowUpRight size={13} />
          </a>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground inline-flex items-center gap-1.5 transition-colors"
          >
            <FileText size={16} /> Resume <ArrowUpRight size={13} />
          </a>
        </div>
      </div>
    </section>
  );
}
