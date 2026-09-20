"use client";

import { usePersona, PersonaType } from "@/context/PersonaContext";
import { UserCheck, Cpu, Rocket, Sparkles } from "lucide-react";

interface PersonaSwitcherProps {
  compact?: boolean;
}

export default function PersonaSwitcher({ compact = false }: PersonaSwitcherProps) {
  const { persona, setPersona, config } = usePersona();

  const options: { id: PersonaType; label: string; icon: typeof UserCheck; tag: string }[] = [
    {
      id: "hr",
      label: "Recruiter / HR",
      icon: UserCheck,
      tag: "Resume & Credentials",
    },
    {
      id: "manager",
      label: "Engineering Manager",
      icon: Cpu,
      tag: "Architecture & Code",
    },
    {
      id: "client",
      label: "Client / Founder",
      icon: Rocket,
      tag: "Live Projects & ROI",
    },
  ];

  if (compact) {
    return (
      <div className="inline-flex items-center p-1 rounded-lg bg-surface border border-border">
        {options.map((opt) => {
          const Icon = opt.icon;
          const isActive = persona === opt.id;
          return (
            <button
              key={opt.id}
              onClick={() => setPersona(opt.id)}
              className={`flex items-center gap-1.5 px-2.5 py-1 text-xs rounded-md transition-all font-medium ${
                isActive
                  ? "bg-accent/15 text-accent border border-accent/40 shadow-sm"
                  : "text-muted hover:text-foreground"
              }`}
              title={`Switch to ${opt.label} view`}
            >
              <Icon size={13} className={isActive ? "text-accent" : "text-muted"} />
              <span className="hidden sm:inline">{opt.label.split(" ")[0]}</span>
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto my-6 animate-fade-up">
      <div className="flex items-center justify-between gap-2 mb-2.5 px-1">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-accent">
          <Sparkles size={14} className="animate-spin-slow text-accent" />
          <span>Select Your Viewing Preference:</span>
        </div>
        <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20">
          {config.badge}
        </span>
      </div>

      {/* Segmented Control */}
      <div className="grid grid-cols-3 p-1.5 rounded-xl bg-surface/90 border border-border backdrop-blur shadow-lg shadow-black/20 gap-1 sm:gap-2">
        {options.map((opt) => {
          const Icon = opt.icon;
          const isActive = persona === opt.id;
          return (
            <button
              key={opt.id}
              onClick={() => setPersona(opt.id)}
              className={`group relative flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2 py-2.5 px-2 sm:px-3 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                isActive
                  ? "bg-gradient-to-b from-accent/20 to-accent/5 text-foreground border border-accent/50 shadow-md shadow-accent/10"
                  : "text-muted hover:text-foreground hover:bg-surface-2/60 border border-transparent"
              }`}
            >
              <Icon
                size={16}
                className={`transition-colors shrink-0 ${
                  isActive ? "text-accent scale-110" : "text-muted group-hover:text-foreground"
                }`}
              />
              <div className="text-center sm:text-left leading-tight">
                <span className="block font-semibold">{opt.label}</span>
                <span className="hidden md:block text-[10px] text-muted font-normal mt-0.5">
                  {opt.tag}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Contextual Description banner */}
      <div className="mt-2.5 px-3 py-2 rounded-lg bg-surface-2/40 border border-border/70 text-xs text-muted flex items-start gap-2">
        <span className="text-accent font-mono shrink-0 text-sm leading-none mt-0.5">ℹ</span>
        <p className="leading-relaxed">
          <strong className="text-foreground">{config.label} Mode: </strong>
          {config.description}
        </p>
      </div>
    </div>
  );
}
