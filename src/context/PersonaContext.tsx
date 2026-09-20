"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type PersonaType = "hr" | "manager" | "client";

export interface PersonaConfig {
  id: PersonaType;
  label: string;
  shortLabel: string;
  tagline: string;
  description: string;
  badge: string;
  iconName: string;
}

export const PERSONA_CONFIGS: Record<PersonaType, PersonaConfig> = {
  hr: {
    id: "hr",
    label: "Recruiter / HR",
    shortLabel: "HR View",
    tagline: "Candidate Overview & Qualifications",
    description: "Tailored for recruiters: Fast-scan highlights, core technical stack, credentials, education, and 1-click resume access.",
    badge: "Fast Scan · Immediate Availability",
    iconName: "UserCheck",
  },
  manager: {
    id: "manager",
    label: "Engineering Manager",
    shortLabel: "Tech Lead View",
    tagline: "Architecture & Engineering Depth",
    description: "Tailored for tech leads: System architecture, code quality, database tuning, real-time protocols, and testing rigor.",
    badge: "Architecture & Code · System Design",
    iconName: "Cpu",
  },
  client: {
    id: "client",
    label: "Client / Founder",
    shortLabel: "Business View",
    tagline: "Business Impact & Live Deliverables",
    description: "Tailored for founders & clients: Real production deliverables, solo end-to-end execution, cost efficiency, and proven performance.",
    badge: "Production Delivered · High ROI",
    iconName: "Rocket",
  },
};

interface PersonaContextType {
  persona: PersonaType;
  setPersona: (p: PersonaType) => void;
  config: PersonaConfig;
}

const PersonaContext = createContext<PersonaContextType | undefined>(undefined);

export function PersonaProvider({ children }: { children: React.ReactNode }) {
  const [persona, setPersonaState] = useState<PersonaType>("hr");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("portfolio_persona") as PersonaType | null;
    if (saved && (saved === "hr" || saved === "manager" || saved === "client")) {
      setPersonaState(saved);
    }
  }, []);

  const setPersona = (p: PersonaType) => {
    setPersonaState(p);
    if (typeof window !== "undefined") {
      localStorage.setItem("portfolio_persona", p);
    }
  };

  return (
    <PersonaContext.Provider
      value={{
        persona: mounted ? persona : "hr",
        setPersona,
        config: PERSONA_CONFIGS[mounted ? persona : "hr"],
      }}
    >
      {children}
    </PersonaContext.Provider>
  );
}

export function usePersona() {
  const context = useContext(PersonaContext);
  if (!context) {
    throw new Error("usePersona must be used within a PersonaProvider");
  }
  return context;
}
