import React from "react";

interface ScheduleItem {
  number: string;
  niche: string;
  focus: string;
  slotsTotal: number;
  slotsRemaining: number;
  dropDate: string;
  status: "Finalizing" | "In production" | "Accepting creators" | "Open for brands";
}

const SCHEDULE: ScheduleItem[] = [
  {
    number: "04",
    niche: "Editorial Living & Morning Routines",
    focus: "Ceramics, architectural spaces, quiet slow-living rhythms",
    slotsTotal: 6,
    slotsRemaining: 1,
    dropDate: "Oct 14, 2026",
    status: "Finalizing",
  },
  {
    number: "05",
    niche: "Table, Pantry & Specialty Dining",
    focus: "Single-origin pantry, natural wine, culinary aesthetics",
    slotsTotal: 8,
    slotsRemaining: 0,
    dropDate: "Nov 02, 2026",
    status: "In production",
  },
  {
    number: "06",
    niche: "Workspace & Quiet Computing",
    focus: "Solid wood ergonomics, mechanical keycaps, code & paper",
    slotsTotal: 6,
    slotsRemaining: 3,
    dropDate: "Nov 18, 2026",
    status: "Accepting creators",
  },
  {
    number: "07",
    niche: "Mindful Rituals & Daily Movement",
    focus: "Cold plunges, functional training, natural sleep protocols",
    slotsTotal: 6,
    slotsRemaining: 4,
    dropDate: "Dec 05, 2026",
    status: "Open for brands",
  },
];

export default function CohortSchedule() {
  return (
    <section id="cohorts" className="px-6 py-20 sm:py-24 border-t border-[var(--border-hairline)] bg-[var(--bg-page)]">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] font-medium">
              Upcoming Schedule
            </p>
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-[var(--text-primary)] sm:text-4xl">
              Cohort release schedule
            </h2>
            <p className="mt-3 text-sm text-[var(--text-secondary)] leading-relaxed">
              Cohorts launch on fixed dates with capped seat limits. Creators join cohorts matched to their aesthetic; brands reserve complete cohorts for synchronized drops.
            </p>
          </div>

          <div className="flex items-center gap-3 text-xs">
            <a
              href="#creators"
              className="inline-flex h-9 items-center justify-center rounded-lg bg-[var(--accent)] px-4 font-medium text-white transition-colors hover:bg-[var(--accent-hover)]"
            >
              Apply as creator
            </a>
            <a
              href="#brands"
              className="inline-flex h-9 items-center justify-center rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-4 font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--border-strong)]"
            >
              Reserve a cohort
            </a>
          </div>
        </div>

        {/* Desktop Schedule Table */}
        <div className="mt-10 hidden sm:block overflow-hidden rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-[var(--border-hairline)] bg-[var(--bg-subtle)] font-mono text-[11px] text-[var(--text-muted)]">
                <tr>
                  <th scope="col" className="px-6 py-3.5 font-medium">
                    Cohort
                  </th>
                  <th scope="col" className="px-6 py-3.5 font-medium">
                    Aesthetic niche
                  </th>
                  <th scope="col" className="px-6 py-3.5 font-medium">
                    Capacity
                  </th>
                  <th scope="col" className="px-6 py-3.5 font-medium">
                    Drop date
                  </th>
                  <th scope="col" className="px-6 py-3.5 font-medium">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3.5 text-right font-medium">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border-hairline)]">
                {SCHEDULE.map((item) => (
                  <tr
                    key={item.number}
                    className="transition-colors hover:bg-[var(--bg-subtle)]"
                  >
                    <td className="whitespace-nowrap px-6 py-4 font-mono font-medium text-[var(--text-primary)]">
                      COHORT // {item.number}
                    </td>
                    <td className="px-6 py-4">
                      <p className="font-medium text-[var(--text-primary)]">
                        {item.niche}
                      </p>
                      <p className="mt-0.5 text-[11px] text-[var(--text-muted)]">
                        {item.focus}
                      </p>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 font-mono tabular-nums text-[var(--text-secondary)]">
                      {item.slotsRemaining > 0 ? (
                        <span>
                          {item.slotsRemaining} of {item.slotsTotal} seats open
                        </span>
                      ) : (
                        <span className="text-[var(--text-muted)]">
                          Full ({item.slotsTotal} seats)
                        </span>
                      )}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 font-mono text-[var(--text-secondary)] tabular-nums">
                      {item.dropDate}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <span
                        className={`inline-flex items-center rounded-sm px-2 py-0.5 font-mono text-[10px] ${
                          item.slotsRemaining > 0
                            ? "bg-[var(--bg-raised)] text-[var(--text-primary)]"
                            : "bg-[var(--positive-subtle)] text-[var(--positive)] font-medium"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-right">
                      {item.slotsRemaining > 0 ? (
                        <a
                          href="#creators"
                          className="font-medium text-[var(--accent)] hover:underline"
                        >
                          Apply now
                        </a>
                      ) : (
                        <a
                          href="#brands"
                          className="text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                        >
                          View waitlist
                        </a>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile Schedule Cards (Responsive & Clean) */}
        <div className="mt-8 sm:hidden space-y-3">
          {SCHEDULE.map((item) => (
            <div
              key={item.number}
              className="rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-4 text-left shadow-xs"
            >
              <div className="flex items-center justify-between pb-2 border-b border-[var(--border-hairline)]">
                <span className="font-mono text-xs font-semibold text-[var(--text-primary)]">
                  COHORT // {item.number}
                </span>
                <span
                  className={`inline-flex items-center rounded-sm px-2 py-0.5 font-mono text-[10px] ${
                    item.slotsRemaining > 0
                      ? "bg-[var(--bg-raised)] text-[var(--text-primary)]"
                      : "bg-[var(--positive-subtle)] text-[var(--positive)] font-medium"
                  }`}
                >
                  {item.status}
                </span>
              </div>

              <div className="mt-3">
                <p className="text-sm font-medium text-[var(--text-primary)]">
                  {item.niche}
                </p>
                <p className="mt-1 text-xs text-[var(--text-muted)] leading-relaxed">
                  {item.focus}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[var(--border-hairline)] flex items-center justify-between text-xs font-mono">
                <div>
                  <span className="text-[10px] text-[var(--text-muted)] block">Capacity</span>
                  <span className="text-[var(--text-secondary)]">
                    {item.slotsRemaining > 0
                      ? `${item.slotsRemaining} of ${item.slotsTotal} seats open`
                      : `Full (${item.slotsTotal} seats)`}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-[var(--text-muted)] block">Drop date</span>
                  <span className="text-[var(--text-secondary)]">{item.dropDate}</span>
                </div>
              </div>

              <div className="mt-3 pt-2">
                {item.slotsRemaining > 0 ? (
                  <a
                    href="#creators"
                    className="block w-full text-center rounded-lg bg-[var(--bg-raised)] py-2 text-xs font-medium text-[var(--accent)] hover:bg-[var(--accent)] hover:text-white transition-colors"
                  >
                    Apply for open seat
                  </a>
                ) : (
                  <a
                    href="#brands"
                    className="block w-full text-center rounded-lg bg-[var(--bg-subtle)] py-2 text-xs font-medium text-[var(--text-muted)]"
                  >
                    Reserve brand sponsorship
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-4 text-right font-mono text-[11px] text-[var(--text-muted)]">
          Need a custom vertical? We curate private cohorts for enterprise brand launches.
        </p>
      </div>
    </section>
  );
}
