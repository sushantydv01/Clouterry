"use client";

import { useState } from "react";

interface Creator {
  handle: string;
  name: string;
  niche: string;
  reach: string;
  engagement: string;
  retention: string;
  sound: string;
  formatDuration: string;
  deliverable: string;
  palette: string[];
  status: "Confirmed" | "Approved" | "In review";
}

interface CohortData {
  id: string;
  number: string;
  title: string;
  category: string;
  window: string;
  creatorsCount: number;
  openSlots: number;
  totalReach: string;
  avgEngagement: string;
  retentionRate: string;
  creators: Creator[];
}

const COHORTS: CohortData[] = [
  {
    id: "cohort-04",
    number: "04",
    title: "Editorial Living & Morning Routines",
    category: "Home & Lifestyle",
    window: "Oct 14 — Oct 20",
    creatorsCount: 6,
    openSlots: 1,
    totalReach: "214,000",
    avgEngagement: "5.1%",
    retentionRate: "68%",
    creators: [
      {
        handle: "@elena.rituals",
        name: "Elena Vance",
        niche: "Natural morning light, ceramic vessels, tea routines",
        reach: "28.4k",
        engagement: "5.4%",
        retention: "71%",
        sound: "slow daylight · 8.2k reels",
        formatDuration: "0:45",
        deliverable: "1 Reel (4K) + 3 High-res stills",
        palette: ["#E8DFD1", "#C7B9A5", "#4A4238"],
        status: "Confirmed",
      },
      {
        handle: "@marcus.space",
        name: "Marcus Lin",
        niche: "Architectural interiors, minimal physical organization",
        reach: "42.1k",
        engagement: "4.8%",
        retention: "66%",
        sound: "ambient vinyl audio · 3.4k reels",
        formatDuration: "0:60",
        deliverable: "1 Reel (4K) + Raw B-roll vault",
        palette: ["#DDD7CD", "#9E9589", "#2E2A25"],
        status: "Approved",
      },
      {
        handle: "@clara.dailies",
        name: "Clara Dupré",
        niche: "Tactile micro-vlogs, thoughtful everyday carry",
        reach: "18.6k",
        engagement: "6.2%",
        retention: "74%",
        sound: "analog acoustic · 1.9k reels",
        formatDuration: "0:30",
        deliverable: "1 Reel (4K) + Whitelist permission",
        palette: ["#F0EAE1", "#C2B29F", "#52473B"],
        status: "Confirmed",
      },
    ],
  },
  {
    id: "cohort-05",
    number: "05",
    title: "Table, Pantry & Specialty Dining",
    category: "Culinary & Culture",
    window: "Nov 02 — Nov 08",
    creatorsCount: 8,
    openSlots: 0,
    totalReach: "348,500",
    avgEngagement: "4.7%",
    retentionRate: "72%",
    creators: [
      {
        handle: "@julian.plates",
        name: "Julian Meyer",
        niche: "Fermentation, single-origin pantry, macro closeups",
        reach: "51.0k",
        engagement: "4.6%",
        retention: "69%",
        sound: "kitchen soundscape · 5.1k reels",
        formatDuration: "0:45",
        deliverable: "1 Reel + Recipe process card",
        palette: ["#EADCC9", "#B89972", "#3D2B1F"],
        status: "Approved",
      },
      {
        handle: "@talia.table",
        name: "Talia Rossi",
        niche: "Natural wine, weekend gatherings, ceramics",
        reach: "34.2k",
        engagement: "5.1%",
        retention: "75%",
        sound: "warm jazz brass · 2.7k reels",
        formatDuration: "0:60",
        deliverable: "1 Reel + 4 Editorial stills",
        palette: ["#F4E6DC", "#BC8062", "#482618"],
        status: "Confirmed",
      },
      {
        handle: "@kaiden.roasts",
        name: "Kaiden Wu",
        niche: "Specialty coffee brewing, pour-over craft",
        reach: "22.8k",
        engagement: "5.8%",
        retention: "78%",
        sound: "barista morning · 12.4k reels",
        formatDuration: "0:30",
        deliverable: "1 Reel + Whitelist permission",
        palette: ["#E8DFC8", "#A6865A", "#332214"],
        status: "In review",
      },
    ],
  },
  {
    id: "cohort-06",
    number: "06",
    title: "Workspace & Quiet Computing",
    category: "Hardware & Tools",
    window: "Nov 18 — Nov 24",
    creatorsCount: 6,
    openSlots: 3,
    totalReach: "186,000",
    avgEngagement: "5.6%",
    retentionRate: "65%",
    creators: [
      {
        handle: "@devin.desk",
        name: "Devin Zhao",
        niche: "Solid wood ergonomics, mechanical keycaps",
        reach: "39.5k",
        engagement: "5.2%",
        retention: "67%",
        sound: "typing acoustics · 6.9k reels",
        formatDuration: "0:60",
        deliverable: "1 Reel + 4K B-roll vault",
        palette: ["#D8D9D7", "#7D8284", "#1E2224"],
        status: "Confirmed",
      },
      {
        handle: "@sora.software",
        name: "Sora Takahashi",
        niche: "Typography in code, minimal setups",
        reach: "16.8k",
        engagement: "6.9%",
        retention: "72%",
        sound: "lo-fi programming · 4.4k reels",
        formatDuration: "0:45",
        deliverable: "1 Reel + 2 Stills",
        palette: ["#DCE2DF", "#6E837D", "#1D2825"],
        status: "Approved",
      },
      {
        handle: "@leo.analog",
        name: "Leo Miller",
        niche: "Paper notebooks, tactile desk accessories",
        reach: "27.4k",
        engagement: "4.9%",
        retention: "63%",
        sound: "page turns · 1.8k reels",
        formatDuration: "0:30",
        deliverable: "1 Reel + Story breakdown",
        palette: ["#EFEAE0", "#9E8B75", "#2C251C"],
        status: "In review",
      },
    ],
  },
];

export default function CohortDossier() {
  const [activeCohortId, setActiveCohortId] = useState("cohort-04");
  const [activeView, setActiveView] = useState<"creators" | "spec">("creators");

  const currentCohort =
    COHORTS.find((c) => c.id === activeCohortId) || COHORTS[0];

  return (
    <div className="w-full rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-5 sm:p-8 shadow-xs">
      {/* Dossier Header Bar */}
      <div className="flex flex-col gap-4 pb-6 border-b border-[var(--border-hairline)] sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-xs text-[var(--accent)] font-semibold tracking-tight">
              COHORT // {currentCohort.number}
            </span>
            <span className="text-xs text-[var(--text-muted)]">•</span>
            <span className="text-xs text-[var(--text-secondary)]">
              {currentCohort.category}
            </span>
            {currentCohort.openSlots > 0 ? (
              <span className="inline-flex items-center rounded-md bg-[var(--bg-raised)] px-2 py-0.5 font-mono text-[11px] text-[var(--text-secondary)]">
                {currentCohort.openSlots} seat{currentCohort.openSlots > 1 ? "s" : ""} open
              </span>
            ) : (
              <span className="inline-flex items-center rounded-md bg-[var(--positive-subtle)] px-2 py-0.5 font-mono text-[11px] font-medium text-[var(--positive)]">
                Roster locked
              </span>
            )}
          </div>
          <h3 className="mt-1 font-display text-xl font-medium text-[var(--text-primary)] sm:text-2xl">
            {currentCohort.title}
          </h3>
        </div>

        {/* View Switcher Tabs */}
        <div className="flex items-center rounded-lg border border-[var(--border-hairline)] bg-[var(--bg-subtle)] p-1 text-xs self-start sm:self-auto">
          <button
            type="button"
            onClick={() => setActiveView("creators")}
            className={`rounded-md px-3 py-1.5 font-medium transition-colors ${
              activeView === "creators"
                ? "bg-[var(--bg-surface)] text-[var(--text-primary)] shadow-xs"
                : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
            }`}
          >
            Cohort roster ({currentCohort.creatorsCount})
          </button>
          <button
            type="button"
            onClick={() => setActiveView("spec")}
            className={`rounded-md px-3 py-1.5 font-medium transition-colors ${
              activeView === "spec"
                ? "bg-[var(--bg-surface)] text-[var(--text-primary)] shadow-xs"
                : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
            }`}
          >
            Campaign spec sheet
          </button>
        </div>
      </div>

      {/* Cohort Selector Directory */}
      <div className="flex flex-wrap items-center gap-2 pt-4 pb-6">
        <span className="text-xs font-mono text-[var(--text-muted)] mr-1">
          Active cohorts:
        </span>
        {COHORTS.map((cohort) => {
          const isActive = cohort.id === activeCohortId;
          return (
            <button
              key={cohort.id}
              type="button"
              onClick={() => setActiveCohortId(cohort.id)}
              className={`rounded-lg border px-3 py-1.5 text-xs transition-colors ${
                isActive
                  ? "border-[var(--text-primary)] bg-[var(--text-primary)] text-white shadow-xs font-medium"
                  : "border-[var(--border-hairline)] bg-[var(--bg-subtle)] text-[var(--text-secondary)] hover:border-[var(--border-subtle)] hover:text-[var(--text-primary)]"
              }`}
            >
              <span className="font-mono mr-1.5 opacity-75">#{cohort.number}</span>
              {cohort.title.split("&")[0].trim()}
            </button>
          );
        })}
      </div>

      {/* Tabular Stats Ribbon */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-subtle)] p-4 text-left">
        <div>
          <p className="text-xs font-mono text-[var(--text-muted)]">Verified reach</p>
          <p className="mt-1 font-mono text-lg font-medium text-[var(--text-primary)] tabular-nums">
            {currentCohort.totalReach}
          </p>
          <p className="text-[11px] text-[var(--text-muted)]">Across 6 creators</p>
        </div>
        <div>
          <p className="text-xs font-mono text-[var(--text-muted)]">Average engagement</p>
          <p className="mt-1 font-mono text-lg font-medium text-[var(--positive)] tabular-nums">
            {currentCohort.avgEngagement}
          </p>
          <p className="text-[11px] text-[var(--text-muted)]">3.2x industry baseline</p>
        </div>
        <div>
          <p className="text-xs font-mono text-[var(--text-muted)]">Reel retention</p>
          <p className="mt-1 font-mono text-lg font-medium text-[var(--text-primary)] tabular-nums">
            {currentCohort.retentionRate}
          </p>
          <p className="text-[11px] text-[var(--text-muted)]">3-second hook average</p>
        </div>
        <div>
          <p className="text-xs font-mono text-[var(--text-muted)]">Drop window</p>
          <p className="mt-1 font-mono text-lg font-medium text-[var(--text-primary)] tabular-nums">
            {currentCohort.window}
          </p>
          <p className="text-[11px] text-[var(--text-muted)]">Synchronized posts</p>
        </div>
      </div>

      {/* Main View Area */}
      <div className="mt-6">
        {activeView === "creators" ? (
          <div>
            <div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
              <span className="text-xs font-medium text-[var(--text-secondary)]">
                Featured cohort creators & deliverables
              </span>
              <span className="font-mono text-xs text-[var(--text-muted)]">
                Showing 3 of {currentCohort.creatorsCount} verified profiles
              </span>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {currentCohort.creators.map((creator) => (
                <div
                  key={creator.handle}
                  className="rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-4 text-left transition-colors hover:border-[var(--border-strong)] flex flex-col justify-between"
                >
                  <div>
                    {/* Visual Media Header Preview */}
                    <div
                      className="relative h-28 w-full rounded-lg p-3 flex flex-col justify-between overflow-hidden border border-[var(--border-hairline)]"
                      style={{
                        background: `linear-gradient(135deg, ${creator.palette[0]} 0%, ${creator.palette[1]} 55%, ${creator.palette[2]} 100%)`,
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <span className="rounded-md bg-black/40 px-2 py-0.5 font-mono text-[10px] text-white backdrop-blur-xs">
                          9:16 REEL
                        </span>
                        <span className="rounded-md bg-black/40 px-2 py-0.5 font-mono text-[10px] text-white tabular-nums backdrop-blur-xs">
                          {creator.formatDuration}
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[10px] text-white/90 truncate max-w-[180px] drop-shadow-xs">
                          {creator.sound}
                        </span>
                        <span className="h-2 w-2 rounded-full bg-white/80" />
                      </div>
                    </div>

                    {/* Creator Identity */}
                    <div className="mt-3 flex items-start justify-between">
                      <div>
                        <p className="font-mono text-xs font-semibold text-[var(--text-primary)]">
                          {creator.handle}
                        </p>
                        <p className="text-[11px] text-[var(--text-muted)]">
                          {creator.name}
                        </p>
                      </div>
                      <span className="rounded-sm bg-[var(--bg-raised)] px-1.5 py-0.5 font-mono text-[10px] text-[var(--text-secondary)]">
                        {creator.status}
                      </span>
                    </div>

                    {/* Aesthetic Description */}
                    <p className="mt-2.5 text-xs text-[var(--text-secondary)] leading-relaxed">
                      {creator.niche}
                    </p>
                  </div>

                  <div>
                    {/* Tabular Creator Metrics */}
                    <div className="mt-4 pt-3 border-t border-[var(--border-hairline)] grid grid-cols-3 gap-2 font-mono text-xs">
                      <div>
                        <span className="text-[10px] text-[var(--text-muted)] block">Reach</span>
                        <span className="font-medium text-[var(--text-primary)] tabular-nums">
                          {creator.reach}
                        </span>
                      </div>
                      <div>
                        <span className="text-[10px] text-[var(--text-muted)] block">Engage</span>
                        <span className="font-medium text-[var(--positive)] tabular-nums">
                          {creator.engagement}
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] text-[var(--text-muted)] block">Retention</span>
                        <span className="font-medium text-[var(--text-primary)] tabular-nums">
                          {creator.retention}
                        </span>
                      </div>
                    </div>

                    {/* Deliverable Tag */}
                    <div className="mt-3 rounded-lg bg-[var(--bg-subtle)] p-2.5 text-[11px] text-[var(--text-secondary)] border border-[var(--border-hairline)]">
                      <span className="font-mono text-[10px] text-[var(--text-muted)] block uppercase">
                        Deliverable
                      </span>
                      <span className="font-medium text-[var(--text-primary)] mt-0.5 block">
                        {creator.deliverable}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-6 text-left">
            <h4 className="font-display text-base font-medium text-[var(--text-primary)]">
              What brands receive in this cohort
            </h4>
            <p className="mt-1 text-xs text-[var(--text-secondary)]">
              All deliverables managed under one master services agreement and single consolidated invoice.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-subtle)] p-5">
                <span className="font-mono text-xs text-[var(--accent)] font-semibold">01 // ASSETS</span>
                <p className="mt-2 text-sm font-medium text-[var(--text-primary)]">
                  6 Dedicated Reels
                </p>
                <p className="mt-1.5 text-xs text-[var(--text-secondary)] leading-relaxed">
                  Produced in raw 4K by aesthetic creators matching a unified brief. Includes natural integration without forced corporate scripts.
                </p>
                <div className="mt-3 pt-3 border-t border-[var(--border-hairline)] text-[11px] font-mono text-[var(--text-muted)]">
                  Delivered via private cloud vault
                </div>
              </div>

              <div className="rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-subtle)] p-5">
                <span className="font-mono text-xs text-[var(--accent)] font-semibold">02 // RIGHTS</span>
                <p className="mt-2 text-sm font-medium text-[var(--text-primary)]">
                  12-Month Whitelist
                </p>
                <p className="mt-1.5 text-xs text-[var(--text-secondary)] leading-relaxed">
                  Direct partnership ads permission for Meta & TikTok, plus raw B-roll vault files for brand organic channels.
                </p>
                <div className="mt-3 pt-3 border-t border-[var(--border-hairline)] text-[11px] font-mono text-[var(--text-muted)]">
                  Standardized usage rights
                </div>
              </div>

              <div className="rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-subtle)] p-5">
                <span className="font-mono text-xs text-[var(--accent)] font-semibold">03 // OPERATIONS</span>
                <p className="mt-2 text-sm font-medium text-[var(--text-primary)]">
                  10-Day Sprint
                </p>
                <p className="mt-1.5 text-xs text-[var(--text-secondary)] leading-relaxed">
                  From approved brief to simultaneous posting window. 1 invoice, 1 review portal, zero creator chasing.
                </p>
                <div className="mt-3 pt-3 border-t border-[var(--border-hairline)] text-[11px] font-mono text-[var(--text-muted)]">
                  Guaranteed schedule delivery
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Quiet Footer */}
      <div className="mt-6 pt-4 border-t border-[var(--border-hairline)] flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-xs text-[var(--text-muted)]">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[var(--positive)]" />
          <span>Cohort 04 synchronized posting window: Oct 14 — Oct 20</span>
        </div>
        <div className="flex items-center gap-4 font-mono text-[11px]">
          <a
            href="#brands"
            className="text-[var(--text-primary)] underline hover:text-[var(--accent)]"
          >
            Sponsor this cohort
          </a>
          <span>•</span>
          <a
            href="#creators"
            className="text-[var(--text-primary)] underline hover:text-[var(--accent)]"
          >
            Apply for remaining seat
          </a>
        </div>
      </div>
    </div>
  );
}
