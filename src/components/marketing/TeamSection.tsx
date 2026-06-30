"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { Globe } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const LinkedinIcon = ({
  className,
  strokeWidth = 2,
}: {
  className?: string;
  strokeWidth?: number;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

interface TeamMember {
  name: string;
  role: string;
  website: string;
  linkedin: string;
  image: string;
  color: string;
  description: string;
}

const team: TeamMember[] = [
  {
    name: "MD. Sidur Rahaman Rupom",
    role: "Co-founder & CEO",
    website: "https://iamrupom.netlify.app/",
    linkedin: "https://www.linkedin.com/in/iamrupom7/",
    image: "/team/rupom-team.jpeg",
    color: "from-[#38BDF8] to-blue-500",
    description: "Driving Opygen's vision and strategy to empower businesses with impactful digital solutions.",
  },
  {
    name: "MD. Faysal Mridha",
    role: "Co-founder & CTO",
    website: "https://faysaldev.vercel.app",
    linkedin: "https://www.linkedin.com/in/faysaldev/",
    image: "/team/faysal-team.png",
    color: "from-[#4338CA] to-indigo-600",
    description: "Architecting robust, scalable, and high-performance technology stacks for modern applications.",
  },
  {
    name: "Syed Mohiuddin Meshal",
    role: "Co-founder & COO",
    website: "https://syedmohiuddinmeshal.me",
    linkedin: "https://www.linkedin.com/in/10613-meshal",
    image: "/team/meshal-team.png",
    color: "from-[#FDBA74] to-orange-500",
    description: "Streamlining operations and ensuring seamless delivery of digital products across the board.",
  },
  {
    name: "Mohibbullah Khan",
    role: "Co-founder & CPO",
    website: "https://muhibkhan.netlify.app/",
    linkedin: "https://www.linkedin.com/in/mohibbullahkhan/",
    image: "/team/mohib-team.jpeg",
    color: "from-[#FDE047] to-amber-500",
    description: "Crafting intuitive, engaging, and user-centric product experiences that people truly love.",
  },
];

export default function TeamSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Entrance animation for cards
      gsap.fromTo(
        cardsRef.current,
        { y: 80, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          stagger: 0.15,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="team"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-white text-black font-space-grotesk overflow-hidden"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-24">
          <div className="mb-6 inline-flex items-center px-5 py-1.5 rounded-full border border-gray-200 bg-white text-gray-900 text-[13px] font-bold tracking-wide shadow-sm">
            Team
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold tracking-tight text-gray-900 leading-[1.1] max-w-3xl mx-auto">
            Meet the creative minds <br className="hidden sm:block" /> behind
            our success
          </h2>
        </div>

        {/* 3D Flip Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6 max-w-lg sm:max-w-none mx-auto">
          {team.map((member, index) => (
            <div
              key={member.name}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="group relative h-[420px] w-full max-w-[300px] mx-auto [perspective:2000px]"
            >
              <div
                className={cn(
                  "relative h-full w-full",
                  "[transform-style:preserve-3d]",
                  "transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]",
                  "group-hover:[transform:rotateY(180deg)]"
                )}
              >
                {/* FRONT OF CARD */}
                <div
                  className={cn(
                    "absolute inset-0 h-full w-full",
                    "[backface-visibility:hidden] [transform:rotateY(0deg)]",
                    "overflow-hidden rounded-3xl",
                    "bg-zinc-100",
                    "border border-zinc-200/50",
                    "shadow-lg",
                    "transition-shadow duration-500",
                    "group-hover:shadow-2xl"
                  )}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                    unoptimized
                  />
                  {/* Dark gradient overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white leading-snug tracking-tight mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm font-medium text-zinc-300">
                      {member.role}
                    </p>
                  </div>
                </div>

                {/* BACK OF CARD */}
                <div
                  className={cn(
                    "absolute inset-0 h-full w-full",
                    "[backface-visibility:hidden] [transform:rotateY(180deg)]",
                    "rounded-3xl p-8 flex flex-col justify-between",
                    "bg-gradient-to-br",
                    member.color,
                    "shadow-2xl text-white"
                  )}
                >
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight mb-1">
                      {member.name}
                    </h3>
                    <p className="text-[15px] font-semibold opacity-90 mb-6">
                      {member.role}
                    </p>
                    <p className="text-[15px] leading-relaxed opacity-95">
                      {member.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 mt-auto">
                    <a
                      href={member.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/20 hover:bg-white/30 rounded-full transition-colors backdrop-blur-sm"
                      aria-label={`${member.name}'s Website`}
                    >
                      <Globe className="w-5 h-5 text-white" />
                    </a>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/20 hover:bg-white/30 rounded-full transition-colors backdrop-blur-sm"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <LinkedinIcon className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
