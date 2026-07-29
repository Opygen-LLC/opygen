"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check, X, Users, Building2, User, Briefcase, Sparkles } from "lucide-react";
import Logo from "../../../public/logo/Opygen.png";

type PlatformRow = {
  id: string;
  name: string;
  desc: string;
  icon?: any;
  isHero?: boolean;
  matrix: boolean[]; // [Speed, Flexibility, Quality, Scalability, Affordability]
};

const platforms: PlatformRow[] = [
  {
    id: "opygen",
    name: "Opygen Studio",
    desc: "Expert-driven & committed to higher quality. Get effective result & full support without hiring in-house employees.",
    isHero: true,
    matrix: [true, true, true, true, true],
  },
  {
    id: "inhouse",
    name: "In House Team",
    desc: "A full-time engineer may ensure consistency, but there's a risk of limited expertise even though you pay regularly.",
    icon: Users,
    matrix: [false, false, false, true, false],
  },
  {
    id: "agencies",
    name: "Traditional Agencies",
    desc: "Agencies offer structured processes but mostly with high costs, long timelines, and less flexibility for your projects.",
    icon: Building2,
    matrix: [false, false, true, true, false],
  },
  {
    id: "freelancers",
    name: "Freelancers",
    desc: "Freelancers may provide affordable design services but they mostly lack consistency, reliability, and collaboration.",
    icon: User,
    matrix: [false, true, false, false, true],
  },
  {
    id: "diy",
    name: "Self-Service Tools",
    desc: "DIY tools like website builders are budget-friendly, but you can't expect strategic thinking & originality.",
    icon: Briefcase,
    matrix: [false, false, true, true, false],
  },
];

const categories = ["Speed", "Flexibility", "Quality", "Scalability", "Affordability"];

export default function AgencyComparison() {
  return (
    <section
      id="why-opygen"
      aria-labelledby="comparison-title"
      className="relative overflow-hidden bg-[#F7F7F4] px-4 py-20 text-[#111111] sm:px-8 sm:py-24 lg:px-12 lg:py-32 font-space-grotesk"
    >
      {/* Background Orbs */}
      <div aria-hidden="true" className="absolute -left-28 bottom-0 h-80 w-80 rounded-full bg-[#FFD6C7]/50 blur-3xl pointer-events-none" />
      <div aria-hidden="true" className="absolute -right-28 top-0 h-80 w-80 rounded-full bg-[#D9FF5B]/40 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-[1280px]">
        
        {/* Header */}
        <header className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 shadow-xs">
            <Sparkles className="h-3.5 w-3.5 text-[#F24202]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-gray-700">Why Choose Us</span>
          </div>

          <h2 id="comparison-title" className="mt-6 text-4xl sm:text-5xl lg:text-[3.75rem] font-semibold leading-[0.95] tracking-[-0.06em] text-gray-900">
            Opygen’s Alternative? <br className="hidden sm:block" />
            Think One More Time!
          </h2>

          <p className="mt-5 text-base text-gray-600 font-medium max-w-xl mx-auto">
            We eliminated bureaucracy, slow handoffs, and hidden fees to deliver exceptional software and design at speed.
          </p>
        </header>

        {/* Mobile Swipe Hint */}
        <div className="mt-8 flex md:hidden justify-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-black/5 px-3 py-1 text-[11px] font-bold text-gray-600 border border-black/10">
            Swipe horizontally to compare platforms &rarr;
          </span>
        </div>

        {/* Matrix Container */}
        <div className="mt-6 md:mt-16 w-full overflow-x-auto pb-4">
          <div className="min-w-[840px]">
            
            {/* Table Header Row */}
            <div className="grid grid-cols-[2.2fr_repeat(5,1fr)] items-center px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-600 border-b border-black/10">
              <div>Platform</div>
              {categories.map((cat) => (
                <div key={cat} className="text-center">
                  {cat}
                </div>
              ))}
            </div>

            {/* Rows List */}
            <div className="mt-4 space-y-4">
              {platforms.map((plat) => {
                const Icon = plat.icon;

                if (plat.isHero) {
                  return (
                    <motion.div
                      key={plat.id}
                      whileHover={{ scale: 1.01 }}
                      transition={{ duration: 0.2 }}
                      className="relative overflow-hidden rounded-2xl border-2 border-[#111111] bg-[#111111] p-5 shadow-xl text-white"
                    >
                      {/* Glow Highlights */}
                      <div aria-hidden="true" className="absolute -right-20 top-0 h-44 w-44 rounded-full bg-[#D9FF5B]/20 blur-3xl pointer-events-none" />
                      <div aria-hidden="true" className="absolute -left-20 bottom-0 h-44 w-44 rounded-full bg-[#F24202]/30 blur-3xl pointer-events-none" />

                      <div className="relative z-10 grid grid-cols-[2.2fr_repeat(5,1fr)] items-center gap-4">
                        
                        {/* Opygen Platform Info with Official Company Logo */}
                        <div className="flex items-center gap-4 pr-4">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white p-2 shadow-md border border-white/20">
                            <Image
                              src={Logo}
                              alt="Opygen company logo"
                              width={28}
                              height={28}
                              className="object-contain"
                              priority
                            />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className="text-lg font-bold text-white tracking-tight">{plat.name}</h3>
                              <span className="rounded bg-[#D9FF5B] px-2 py-0.5 text-[9px] font-black text-black uppercase">Standard</span>
                            </div>
                            <p className="text-xs text-gray-300 leading-relaxed font-medium mt-1">
                              {plat.desc}
                            </p>
                          </div>
                        </div>

                        {/* Matrix Indicators */}
                        {plat.matrix.map((val, idx) => (
                          <div key={idx} className="flex justify-center">
                            {val ? (
                              <Check className="h-6 w-6 text-[#D9FF5B] stroke-[3]" />
                            ) : (
                              <X className="h-6 w-6 text-red-500 stroke-[2]" />
                            )}
                          </div>
                        ))}

                      </div>
                    </motion.div>
                  );
                }

                return (
                  <div
                    key={plat.id}
                    className="grid grid-cols-[2.2fr_repeat(5,1fr)] items-center gap-4 px-6 py-5 rounded-xl border border-black/10 bg-white transition-colors hover:bg-gray-50/80 shadow-xs"
                  >
                    {/* Platform Info */}
                    <div className="flex items-center gap-4 pr-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#111111] text-white">
                        <Icon className="h-5 w-5 text-[#D9FF5B]" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-gray-900 tracking-tight">{plat.name}</h3>
                        <p className="text-xs text-gray-500 leading-relaxed font-medium mt-1">
                          {plat.desc}
                        </p>
                      </div>
                    </div>

                    {/* Matrix Indicators */}
                    {plat.matrix.map((val, idx) => (
                      <div key={idx} className="flex justify-center">
                        {val ? (
                          <Check className="h-5 w-5 text-gray-900 stroke-[2.5]" />
                        ) : (
                          <X className="h-5 w-5 text-red-500 stroke-[2]" />
                        )}
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
