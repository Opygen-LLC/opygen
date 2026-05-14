// "use client";

// import { cn } from "@/lib/utils";

// const team = [
//   {
//     name: "MD. Sidur Rahaman Rupom",
//     role: "Co-founder & CEO",
//     initials: "SR",
//     bio: "Full-stack developer and systems thinker. Leads product vision and engineering at Opygen.",
//   },
//   {
//     name: "MD. Faysal Mridha",
//     role: "Co-founder & CTO",
//     initials: "FM",
//     bio: "Operations strategist. Ensures Opygen solves real business problems, not theoretical ones.",
//   },
//   {
//     name: "Syed Mohiuddin Meshal",
//     role: "Co-founder & COO",
//     initials: "SM", // Keeping FA as per your original code
//     bio: "Growth and partnerships. Connects Opygen with the service businesses that need it most.",
//   },
//   {
//     name: "Mohibbullah Khan",
//     role: "Co-founder & CPO",
//     initials: "MK",
//     bio: "Design and user experience. Makes sure everything Opygen ships is clean and intuitive.",
//   },
// ];

// export default function TeamSection() {
//   return (
//     <section id="team" className="py-24 bg-[var(--surface)] border-y border-[var(--border)]">
//       <div className="container px-6">
        
//         {/* Section Header */}
//         <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
//           <div className="max-w-xl">
//             <span className="label-pill mb-6">Human Capital</span>
//             <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--carbon)] leading-none">
//               Founding <span className="text-[var(--mid-gray)]">Engineers.</span>
//             </h2>
//           </div>
//           <p className="max-w-xs text-sm text-[var(--mid-gray)] leading-relaxed border-l border-[var(--border)] pl-6">
//             A cross-functional team dedicated to building the infrastructure for the service economy.
//           </p>
//         </div>

//         {/* Team Grid: High Contrast Modular Layout */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--border)] border border-[var(--border)] overflow-hidden shadow-sm">
//           {team.map((member, i) => (
//             <div
//               key={member.name}
//               className="bg-white p-8 md:p-10 flex flex-col h-full group hover:bg-[#FAFAFA] transition-colors duration-300"
//             >
//               {/* Profile Identifier */}
//               <div className="flex items-center justify-between mb-12">
//                 <div 
//                   className={cn(
//                     "size-12 flex items-center justify-center text-xs font-bold tracking-widest transition-transform duration-500 group-hover:rotate-[15deg]",
//                     i === 0 
//                       ? "bg-[var(--carbon)] text-white" 
//                       : "bg-[var(--surface)] text-[var(--mid-gray)] border border-[var(--border)]"
//                   )}
//                 >
//                   {member.initials}
//                 </div>
//                 <span className="text-[9px] font-black uppercase tracking-[0.3em] text-[var(--border)] group-hover:text-[var(--mid-gray)] transition-colors">
//                   MOD-0{i + 1}
//                 </span>
//               </div>

//               {/* Bio Content */}
//               <div className="flex-1">
//                 <h3 className="text-lg font-bold text-[var(--carbon)] leading-tight mb-1">
//                   {member.name}
//                 </h3>
//                 <p className="text-[10px] uppercase tracking-[0.15em] font-bold text-[var(--mid-gray)] mb-6">
//                   {member.role}
//                 </p>
//                 <p className="text-sm text-[var(--mid-gray)] leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
//                   {member.bio}
//                 </p>
//               </div>

//               {/* Functional Indicator */}
//               <div className="mt-12 h-1 w-8 bg-[var(--border)] group-hover:w-full group-hover:bg-[var(--carbon)] transition-all duration-500" />
//             </div>
//           ))}
//         </div>

//         {/* Bottom Status */}
//         <div className="mt-12 flex items-center justify-center gap-4">
//           <div className="h-px flex-1 bg-[var(--border)]" />
//           <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-[var(--mid-gray)] whitespace-nowrap">
//             Collective Operational Strength: 100%
//           </p>
//           <div className="h-px flex-1 bg-[var(--border)]" />
//         </div>
//       </div>
//     </section>
//   );
// }





"use client";

import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import Image from "next/image";

// ─── Types ────────────────────────────────────────────────────────────────────

interface TeamMember {
  name: string;
  role: string;
  initials: string;
  bio: string;
  /** Optional: pass a real photo URL to replace the generated avatar */
  image?: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const team: TeamMember[] = [
  {
    name: "MD. Sidur Rahaman Rupom",
    role: "Co-founder & CEO",
    initials: "SR",
    bio: "Full-stack developer and systems thinker. Leads product vision and engineering at Opygen.",
    image: "/team/rupom.png",  //← uncomment and point to your photo
  },
  {
    name: "MD. Faysal Mridha",
    role: "Co-founder & CTO",
    initials: "FM",
    bio: "Operations strategist. Ensures Opygen solves real business problems, not theoretical ones.",
    image: "/team/faysal.png",
  },
  {
    name: "Syed Mohiuddin Meshal",
    role: "Co-founder & COO",
    initials: "SM",
    bio: "Growth and partnerships. Connects Opygen with the service businesses that need it most.",
    image: "/team/meshal.png",
    // image: "/team/meshal.jpg",
  },
  {
    name: "Mohibbullah Khan",
    role: "Co-founder & CPO",
    initials: "MK",
    bio: "Design and user experience. Makes sure everything Opygen ships is clean and intuitive.",
    image: "/team/muhib.png",
  },
];

// ─── Avatar ───────────────────────────────────────────────────────────────────

function MemberAvatar({
  member,
  isLead,
}: {
  member: TeamMember;
  isLead: boolean;
}) {
  const [imgError, setImgError] = useState(false);

  const src =
    member.image && !imgError
      ? member.image
      : `https://api.dicebear.com/9.x/initials/svg?seed=${member.initials}&backgroundColor=${
          isLead ? "000000" : "f4f4f4"
        }&textColor=${isLead ? "ffffff" : "333333"}&radius=50&fontSize=36`;

  return (
    <div className="relative size-15 shrink-0">
      <Image
        src={src}
        alt={member.name}
        fill
        sizes="60px"
        className="object-cover border border-border"
        onError={() => setImgError(true)}
        unoptimized // remove this if you configure a remote image domain in next.config
      />
    </div>
  );
}

// ─── Card ─────────────────────────────────────────────────────────────────────

function MemberCard({
  member,
  index,
}: {
  member: TeamMember;
  index: number;
}) {
  const isLead = index === 0;

  return (
    <div
      className={cn(
        "group relative flex flex-col bg-background p-8 md:p-10",
        "transition-colors duration-300 hover:bg-muted/40",
        "overflow-hidden"
      )}
    >
      {/* Top row: avatar + module tag */}
      <div className="flex items-center justify-center mb-10">
        <MemberAvatar member={member} isLead={isLead} />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1">
        <h3 className="text-[15px] font-semibold text-foreground leading-snug mb-1">
          {member.name}
        </h3>
        <p className="text-[10px] uppercase tracking-[0.14em] font-semibold text-muted-foreground mb-5">
          {member.role}
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
          {member.bio}
        </p>
      </div>

      {/* Animated bottom bar */}
      <div
        className={cn(
          "mt-10 h-[1.5px] bg-border",
          "w-7 group-hover:w-full",
          "transition-[width] duration-500 ease-in-out",
          "group-hover:bg-foreground"
        )}
      />
    </div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export default function TeamSection() {
  return (
    <section
      id="team"
      className="py-24 bg-muted/20 border-y border-border"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <span className="label-pill mb-8">Human Capital</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-none">
              Founding{" "}
              <span className="text-muted-foreground">Engineers.</span>
            </h2>
          </div>

          <p className="max-w-60 text-sm text-muted-foreground leading-relaxed border-l border-border pl-5">
            A cross-functional team dedicated to building the infrastructure
            for the service economy.
          </p>
        </div>

        {/* Grid */}
        <div
          className={cn(
            "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
            "gap-px bg-border",
            "border border-border overflow-hidden shadow-sm"
          )}
        >
          {team.map((member, i) => (
            <MemberCard key={member.name} member={member} index={i} />
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 flex items-center gap-4">
          <Separator className="flex-1" />
          <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground whitespace-nowrap">
            Collective Operational Strength: 100%
          </p>
          <Separator className="flex-1" />
        </div>

      </div>
    </section>
  );
}
