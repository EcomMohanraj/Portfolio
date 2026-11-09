"use client";

import React, { createContext, useContext, useSyncExternalStore } from "react";

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

const STORAGE_KEY = "portfolio_persona";
const listeners = new Set<() => void>();

function subscribe(onChange: () => void) {
  listeners.add(onChange);
  window.addEventListener("storage", onChange);
  return () => {
    listeners.delete(onChange);
    window.removeEventListener("storage", onChange);
  };
}

function readSavedPersona(): PersonaType {
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved === "hr" || saved === "manager" || saved === "client" ? saved : "hr";
}

// Server render and hydration always use "hr"; the saved choice is applied on the client afterwards.
const serverPersona = (): PersonaType => "hr";

export function PersonaProvider({ children }: { children: React.ReactNode }) {
  const persona = useSyncExternalStore(subscribe, readSavedPersona, serverPersona);

  const setPersona = (p: PersonaType) => {
    localStorage.setItem(STORAGE_KEY, p);
    listeners.forEach((notify) => notify());
  };

  return (
    <PersonaContext.Provider
      value={{
        persona,
        setPersona,
        config: PERSONA_CONFIGS[persona],
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
