"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { Globe } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
  clipPathId: string;
  color: string;
}

const team: TeamMember[] = [
  {
    name: "MD. Sidur Rahaman Rupom",
    role: "Co-founder & CEO",
    website: "https://iamrupom.netlify.app/",
    linkedin: "https://www.linkedin.com/in/iamrupom7/",
    image: "/team/rupom-team.jpeg",
    clipPathId: "shape-2",
    color: "bg-[#38BDF8]",
  },
  {
    name: "MD. Faysal Mridha",
    role: "Co-founder & CTO",
    website: "https://faysaldev.vercel.app",
    linkedin: "https://www.linkedin.com/in/faysaldev/",
    image: "/team/faysal-team.png",
    clipPathId: "shape-2",
    color: "bg-[#4338CA]",
  },
  {
    name: "Syed Mohiuddin Meshal",
    role: "Co-founder & COO",
    website: "https://syedmohiuddinmeshal.me",
    linkedin: "https://www.linkedin.com/in/10613-meshal",
    image: "/team/meshal-team.png",
    clipPathId: "shape-2",
    color: "bg-[#FDBA74]",
  },
  {
    name: "Mohibbullah Khan",
    role: "Co-founder & CPO",
    website: "https://muhibkhan.netlify.app/",
    linkedin: "https://www.linkedin.com/in/mohibbullahkhan/",
    image: "/team/mohib-team.jpeg",
    clipPathId: "shape-2",
    color: "bg-[#FDE047]",
  },
];

export default function TeamSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // 1. Entrance animation for cards
      gsap.fromTo(
        cardsRef.current,
        { y: 120, opacity: 0, scale: 0.9 },
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

      // 2. Subtle continuous floating animation for the photo shapes
      cardsRef.current.forEach((card, i) => {
        const imageShape = card?.querySelector(".image-shape");
        if (imageShape) {
          gsap.to(imageShape, {
            y: i % 2 === 0 ? -10 : 10,
            duration: 2.5 + i * 0.5,
            yoyo: true,
            repeat: -1,
            ease: "sine.inOut",
          });
        }
      });
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

      {/* SVG Clip Paths for exactly matching the organic image shapes */}
      <svg
        width="0"
        height="0"
        className="absolute w-0 h-0 pointer-events-none"
      >
        <defs>
          {/* Shape 1: Figure-8 / Hourglass / Peanut */}
          <clipPath id="shape-1" clipPathUnits="objectBoundingBox">
            <rect x="0" y="0" width="1" height="0.55" rx="0.35" ry="0.25" />
            <rect x="0" y="0.45" width="1" height="0.55" rx="0.35" ry="0.25" />
          </clipPath>
          {/* Shape 2: Arch */}
          <clipPath id="shape-2" clipPathUnits="objectBoundingBox">
            <rect x="0" y="0.4" width="1" height="0.6" />
            <ellipse cx="0.5" cy="0.4" rx="0.5" ry="0.4" />
          </clipPath>
          {/* Shape 3: Circle */}
          <clipPath id="shape-3" clipPathUnits="objectBoundingBox">
            <ellipse cx="0.5" cy="0.5" rx="0.5" ry="0.5" />
          </clipPath>
          {/* Shape 4: Three stacked wavy pills */}
          <clipPath id="shape-4" clipPathUnits="objectBoundingBox">
            <rect
              x="0.05"
              y="0"
              width="0.9"
              height="0.36"
              rx="0.45"
              ry="0.18"
            />
            <rect x="0" y="0.32" width="1" height="0.36" rx="0.5" ry="0.18" />
            <rect
              x="0.05"
              y="0.64"
              width="0.9"
              height="0.36"
              rx="0.45"
              ry="0.18"
            />
          </clipPath>
        </defs>
      </svg>

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

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 max-w-lg sm:max-w-none mx-auto">
          {team.map((member, index) => (
            <div
              key={member.name}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="flex flex-col items-center text-center group"
            >
              {/* Photo Shape Container */}
              <div
                className={`image-shape relative w-[240px] sm:w-[220px] lg:w-full aspect-[4/5] overflow-hidden mb-8 transition-shadow duration-500 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] ${member.color}`}
                style={{
                  clipPath: `url(#${member.clipPathId})`,
                  WebkitClipPath: `url(#${member.clipPathId})`,
                }}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  unoptimized
                />
              </div>

              {/* Info */}
              <h3 className="text-[18px] md:text-[20px] font-bold text-gray-900 mb-1.5 tracking-tight group-hover:text-black transition-colors">
                {member.name}
              </h3>
              <p className="text-[13px] md:text-[14px] text-gray-500 font-medium mb-5">
                {member.role}
              </p>

              {/* Social Links */}
              <div className="flex items-center justify-center gap-4">
                <a
                  href={member.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-900 transition-colors p-1"
                >
                  <Globe className="w-5 h-5" strokeWidth={2} />
                </a>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#0A66C2] transition-colors p-1"
                >
                  <LinkedinIcon className="w-5 h-5" strokeWidth={2} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
