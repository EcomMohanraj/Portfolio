"use client";

import {
  ExternalLink,
  ShieldCheck,
  Zap,
  Users,
  CheckCircle2,
  ArrowRight,
  Server,
  Layers,
  Sparkles,
} from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { yazhisaiProject, milkyMushroomProject } from "@/data/content";

export default function Projects() {
  const yazhisai = yazhisaiProject;
  const milkyMushroom = milkyMushroomProject;

  return (
    <section
      id="projects"
      aria-label="Featured Projects"
      className="mx-auto max-w-5xl px-4 sm:px-6 py-12 sm:py-20 scroll-mt-20 border-t border-border/60"
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
        <p className="section-label">02. Featured Projects</p>
        <span className="text-xs font-mono text-muted bg-surface-2 px-2.5 py-1 rounded-md border border-border self-start sm:self-auto">
          2 Deployed Production Platforms
        </span>
      </div>

      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
        Engineered &amp; Deployed Systems
      </h2>
      <p className="text-sm sm:text-base text-muted max-w-2xl mb-10 sm:mb-12">
        Real-world platforms with multi-role workflows, live payments, real-time communication, and automated E2E testing.
      </p>

      <div className="space-y-12 sm:space-y-16">
        {/* ==============================================================
            FEATURED PROJECT #1: YAZHISAI CLOUD KITCHEN
            ============================================================== */}
        <article className="tech-card rounded-2xl p-5 sm:p-8 md:p-9 relative overflow-hidden">
          {/* Header row */}
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 pb-6 border-b border-border">
            <div>
              <div className="flex flex-wrap items-center gap-2.5 mb-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold bg-accent/15 text-accent border border-accent/30 font-mono">
                  <Sparkles size={13} className="shrink-0" />
                  {yazhisai.badge}
                </span>
                <span className="text-xs font-mono text-muted px-2.5 py-1 rounded-md bg-surface-2 border border-border">
                  {yazhisai.type}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                {yazhisai.title}
              </h3>
              <p className="text-xs sm:text-sm text-accent font-medium mt-1">
                Position: {yazhisai.position}
              </p>
              <p className="text-xs sm:text-sm text-muted-light mt-2 max-w-2xl leading-relaxed">
                {yazhisai.description}
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-2.5 shrink-0 self-start lg:self-auto">
              <a
                href={yazhisai.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-xs sm:text-sm font-semibold text-white hover:bg-accent-hover transition-all shadow-md shadow-accent/20 cursor-pointer min-h-[44px]"
              >
                <span>Live Demo</span>
                <ExternalLink size={14} className="shrink-0" />
              </a>

              {yazhisai.githubUrl && (
                <a
                  href={yazhisai.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-surface-2 border border-border px-4 py-2.5 text-xs sm:text-sm font-semibold text-foreground hover:border-accent/40 hover:bg-surface transition-all cursor-pointer min-h-[44px]"
                >
                  <GithubIcon size={16} className="shrink-0" />
                  <span>GitHub</span>
                </a>
              )}
            </div>
          </div>

          {/* Technology Badges */}
          <div className="my-6">
            <span className="text-xs font-mono text-muted block mb-2">Technology Stack:</span>
            <div className="flex flex-wrap gap-2">
              {yazhisai.displayBadges.map((badge) => (
                <span
                  key={badge}
                  className="font-mono text-xs px-2.5 py-1 rounded-md bg-surface-2 border border-border text-foreground/90"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* VISUAL ORDER FLOW: Customer -> Place Order -> Admin -> Chef -> Delivery Rider -> Customer Receives Order */}
          <div className="my-8 p-4 sm:p-6 rounded-xl bg-[#090b10] border border-border">
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="text-xs font-mono uppercase tracking-wider text-accent flex items-center gap-2">
                <Layers size={14} className="shrink-0" />
                <span>End-to-End Real-Time Order Flow</span>
              </span>
              <span className="text-[11px] font-mono text-muted hidden sm:inline">
                Socket.io Event Pipeline
              </span>
            </div>

            <p className="text-xs text-muted mb-4">
              Real-time state synchronization across all four user roles.
            </p>

            {/* Desktop Flow (horizontal) / Mobile Flow (vertical/grid) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3">
              {yazhisai.orderFlow.map((step, idx) => (
                <div
                  key={step.step}
                  className="relative flex flex-col justify-between p-3 rounded-lg bg-surface border border-border"
                >
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[10px] font-mono font-bold text-accent bg-accent/10 px-1.5 py-0.5 rounded">
                        STEP {step.step}
                      </span>
                      {idx < yazhisai.orderFlow.length - 1 && (
                        <ArrowRight size={12} className="text-muted/60 hidden lg:block" />
                      )}
                    </div>
                    <span className="text-xs font-bold text-foreground block leading-tight">
                      {step.title}
                    </span>
                  </div>
                  <span className="text-[11px] text-muted mt-2 leading-snug">
                    {step.action}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 4-ROLE ARCHITECTURE BREAKDOWN */}
          <div className="my-8">
            <div className="flex items-center gap-2 mb-4">
              <Users size={16} className="text-accent shrink-0" />
              <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground font-mono">
                Multi-Role Capabilities (4 Distinct Roles)
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {yazhisai.roles.map((r) => (
                <div
                  key={r.role}
                  className="rounded-xl bg-surface-2/60 border border-border p-4 flex flex-col"
                >
                  <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-border/80">
                    <span className="font-bold text-sm text-foreground">{r.role}</span>
                    <span className="text-[10px] font-mono text-accent bg-accent/10 px-2 py-0.5 rounded">
                      Role {r.role === "Customer" ? "01" : r.role === "Admin" ? "02" : r.role === "Chef" ? "03" : "04"}
                    </span>
                  </div>
                  <ul className="space-y-2 text-xs text-muted flex-1">
                    {r.capabilities.map((cap, cIdx) => (
                      <li key={cIdx} className="flex items-start gap-2 leading-relaxed">
                        <CheckCircle2 size={13} className="text-[#34d399] shrink-0 mt-0.5" />
                        <span className="text-muted-light">{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* TECHNICAL ARCHITECTURE & TESTING PROOF */}
          <div className="pt-6 border-t border-border">
            <h4 className="text-xs font-mono uppercase tracking-wider text-accent mb-4 flex items-center gap-2">
              <Server size={14} className="shrink-0" />
              <span>Full Stack Architecture &amp; Verification</span>
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-5">
              {yazhisai.technicalArchitecture.map((arch) => (
                <div
                  key={arch.layer}
                  className="p-3 rounded-lg bg-surface-2 border border-border flex items-start justify-between gap-3 text-xs"
                >
                  <div>
                    <span className="font-mono text-[11px] text-accent block font-medium">
                      {arch.layer}
                    </span>
                    <span className="font-semibold text-foreground text-xs block mt-0.5">
                      {arch.tech}
                    </span>
                  </div>
                  <span className="text-muted text-[11px] text-right max-w-[55%] leading-tight">
                    {arch.note}
                  </span>
                </div>
              ))}
            </div>

            {/* Playwright Test Suite Callout */}
            <div className="p-4 rounded-xl bg-[#10b981]/10 border border-[#10b981]/25 flex items-start gap-3">
              <ShieldCheck size={18} className="text-[#34d399] shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#34d399] block">
                  Testing Achievement: Playwright E2E Suite
                </span>
                <p className="text-xs sm:text-sm text-foreground/90 mt-0.5 font-medium leading-relaxed">
                  {yazhisai.testingAchievement}
                </p>
              </div>
            </div>
          </div>
        </article>

        {/* ==============================================================
            FEATURED PROJECT #2: MILKY MUSHROOM – E-COMMERCE PLATFORM
            ============================================================== */}
        <article className="tech-card rounded-2xl p-5 sm:p-8 md:p-9 relative overflow-hidden">
          {/* Header row */}
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 pb-6 border-b border-border">
            <div>
              <div className="flex flex-wrap items-center gap-2.5 mb-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold bg-[#10b981]/15 text-[#34d399] border border-[#10b981]/30 font-mono">
                  <Zap size={13} className="shrink-0" />
                  {milkyMushroom.badge}
                </span>
                <span className="text-xs font-mono text-muted px-2.5 py-1 rounded-md bg-surface-2 border border-border">
                  {milkyMushroom.type}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                {milkyMushroom.title}
              </h3>
              <p className="text-xs sm:text-sm text-accent font-medium mt-1">
                Position: {milkyMushroom.position}
              </p>
              <p className="text-xs sm:text-sm text-muted-light mt-2 max-w-2xl leading-relaxed">
                {milkyMushroom.description}
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-2.5 shrink-0 self-start lg:self-auto">
              <a
                href={milkyMushroom.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-xs sm:text-sm font-semibold text-white hover:bg-accent-hover transition-all shadow-md shadow-accent/20 cursor-pointer min-h-[44px]"
              >
                <span>Live Demo</span>
                <ExternalLink size={14} className="shrink-0" />
              </a>

              <span className="inline-flex items-center justify-center gap-1.5 text-xs font-mono text-muted px-3 py-2.5 rounded-lg bg-surface-2 border border-border">
                Production Agri-Store
              </span>
            </div>
          </div>

          {/* Technology Badges */}
          <div className="my-6">
            <span className="text-xs font-mono text-muted block mb-2">Technology Stack:</span>
            <div className="flex flex-wrap gap-2">
              {milkyMushroom.displayBadges.map((badge) => (
                <span
                  key={badge}
                  className="font-mono text-xs px-2.5 py-1 rounded-md bg-surface-2 border border-border text-foreground/90"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* COMPLETE PRODUCT LIFECYCLE OWNERSHIP: Architecture -> Development -> Testing -> Deployment -> Production */}
          <div className="my-8 p-4 sm:p-6 rounded-xl bg-[#090b10] border border-border">
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="text-xs font-mono uppercase tracking-wider text-accent flex items-center gap-2">
                <Layers size={14} className="shrink-0" />
                <span>Full Product Lifecycle Ownership</span>
              </span>
              <span className="text-[11px] font-mono text-[#34d399] font-medium hidden sm:inline">
                Solo Engineering Delivery
              </span>
            </div>

            <p className="text-xs text-muted mb-4">
              Complete end-to-end execution from initial schema design to live customer transactions:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3">
              {milkyMushroom.lifecycleSteps.map((step, idx) => (
                <div
                  key={step.step}
                  className="p-3 rounded-lg bg-surface border border-border flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[10px] font-mono font-bold text-accent bg-accent/10 px-1.5 py-0.5 rounded">
                        PHASE {step.step}
                      </span>
                      {idx < milkyMushroom.lifecycleSteps.length - 1 && (
                        <ArrowRight size={12} className="text-muted/60 hidden lg:block" />
                      )}
                    </div>
                    <span className="text-xs font-bold text-foreground block">
                      {step.title}
                    </span>
                  </div>
                  <span className="text-[11px] text-muted mt-2 leading-relaxed">
                    {step.detail}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* KEY FEATURES GRID */}
          <div className="my-8">
            <h4 className="text-xs font-mono uppercase tracking-wider text-accent mb-3 flex items-center gap-2">
              <CheckCircle2 size={14} className="shrink-0" />
              <span>Key Platform Features</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {milkyMushroom.keyFeatures.map((feat) => (
                <div
                  key={feat}
                  className="p-3 rounded-lg bg-surface-2 border border-border text-xs text-muted-light flex items-center gap-2"
                >
                  <span className="text-accent font-bold text-sm">▹</span>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* PERFORMANCE SCORES: GOOGLE PAGESPEED */}
          <div className="pt-6 border-t border-border">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 sm:p-5 rounded-xl bg-surface-2 border border-border">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-muted block">
                  Audited Performance
                </span>
                <span className="text-sm sm:text-base font-bold text-foreground mt-0.5 block">
                  Google PageSpeed Insights Verified Scores
                </span>
                <span className="text-xs text-muted mt-1 block">
                  Lightweight Next.js SSR architecture with WebP media pipeline.
                </span>
              </div>

              <div className="flex items-center gap-4 shrink-0">
                {/* Mobile Score */}
                <div className="flex items-center gap-2.5 bg-surface px-4 py-2 rounded-xl border border-border">
                  <div className="h-10 w-10 rounded-full border-2 border-[#10b981] flex items-center justify-center font-mono font-bold text-sm text-[#34d399] bg-[#10b981]/10">
                    {milkyMushroom.performanceScores.mobile}
                  </div>
                  <div className="leading-tight">
                    <span className="text-xs font-bold text-foreground block">Mobile</span>
                    <span className="text-[11px] text-muted font-mono">PageSpeed</span>
                  </div>
                </div>

                {/* Desktop Score */}
                <div className="flex items-center gap-2.5 bg-surface px-4 py-2 rounded-xl border border-border">
                  <div className="h-10 w-10 rounded-full border-2 border-[#10b981] flex items-center justify-center font-mono font-bold text-sm text-[#34d399] bg-[#10b981]/10">
                    {milkyMushroom.performanceScores.desktop}
                  </div>
                  <div className="leading-tight">
                    <span className="text-xs font-bold text-foreground block">Desktop</span>
                    <span className="text-[11px] text-muted font-mono">PageSpeed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
