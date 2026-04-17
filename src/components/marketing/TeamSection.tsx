"use client";

import { cn } from "@/lib/utils";

const team = [
  {
    name: "MD. Sidur Rahaman Rupom",
    role: "Co-founder & CEO",
    initials: "SR",
    bio: "Full-stack developer and systems thinker. Leads product vision and engineering at Opygen.",
  },
  {
    name: "MD. Faysal Mridha",
    role: "Co-founder",
    initials: "FM",
    bio: "Operations strategist. Ensures Opygen solves real business problems, not theoretical ones.",
  },
  {
    name: "Meshal",
    role: "Co-founder",
    initials: "FA", // Keeping FA as per your original code
    bio: "Growth and partnerships. Connects Opygen with the service businesses that need it most.",
  },
  {
    name: "Mohibbullah Khan",
    role: "Co-founder",
    initials: "MK",
    bio: "Design and user experience. Makes sure everything Opygen ships is clean and intuitive.",
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="py-24 bg-[var(--surface)] border-y border-[var(--border)]">
      <div className="container px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <span className="label-pill mb-6">Human Capital</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--carbon)] leading-none">
              Founding <span className="text-[var(--mid-gray)]">Engineers.</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm text-[var(--mid-gray)] leading-relaxed border-l border-[var(--border)] pl-6">
            A cross-functional team dedicated to building the infrastructure for the service economy.
          </p>
        </div>

        {/* Team Grid: High Contrast Modular Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--border)] border border-[var(--border)] overflow-hidden shadow-sm">
          {team.map((member, i) => (
            <div
              key={member.name}
              className="bg-white p-8 md:p-10 flex flex-col h-full group hover:bg-[#FAFAFA] transition-colors duration-300"
            >
              {/* Profile Identifier */}
              <div className="flex items-center justify-between mb-12">
                <div 
                  className={cn(
                    "size-12 flex items-center justify-center text-xs font-bold tracking-widest transition-transform duration-500 group-hover:rotate-[15deg]",
                    i === 0 
                      ? "bg-[var(--carbon)] text-white" 
                      : "bg-[var(--surface)] text-[var(--mid-gray)] border border-[var(--border)]"
                  )}
                >
                  {member.initials}
                </div>
                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-[var(--border)] group-hover:text-[var(--mid-gray)] transition-colors">
                  MOD-0{i + 1}
                </span>
              </div>

              {/* Bio Content */}
              <div className="flex-1">
                <h3 className="text-lg font-bold text-[var(--carbon)] leading-tight mb-1">
                  {member.name}
                </h3>
                <p className="text-[10px] uppercase tracking-[0.15em] font-bold text-[var(--mid-gray)] mb-6">
                  {member.role}
                </p>
                <p className="text-sm text-[var(--mid-gray)] leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                  {member.bio}
                </p>
              </div>

              {/* Functional Indicator */}
              <div className="mt-12 h-1 w-8 bg-[var(--border)] group-hover:w-full group-hover:bg-[var(--carbon)] transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* Bottom Status */}
        <div className="mt-12 flex items-center justify-center gap-4">
          <div className="h-px flex-1 bg-[var(--border)]" />
          <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-[var(--mid-gray)] whitespace-nowrap">
            Collective Operational Strength: 100%
          </p>
          <div className="h-px flex-1 bg-[var(--border)]" />
        </div>
      </div>
    </section>
  );
}