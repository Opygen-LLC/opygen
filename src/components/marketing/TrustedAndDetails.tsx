"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Logo from "../../../public/logo/Opygen.png";
import {
  MonitorSmartphone,
  Cloud,
  PenTool,
  TrendingUp,
  Zap,
  Shield,
  Globe,
  Layers,
  Sparkles,
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function TrustedAndDetails() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Marquee animation
      gsap.to(".marquee-content", {
        xPercent: -50,
        ease: "none",
        duration: 22,
        repeat: -1,
      });

      // Reveal Animations
      gsap.fromTo(
        titleRef.current,
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        },
      );

      gsap.fromTo(
        ".feature-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 75%",
          },
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const baseLogos = [
    {
      name: "Google",
      weight: "font-semibold",
      hoverColor: "group-hover:text-[#4285F4]",
    },
    {
      name: "zapier",
      weight: "font-black lowercase",
      hoverColor: "group-hover:text-[#FF4A00]",
    },
    {
      name: "Notion",
      weight: "font-bold",
      isNotion: true,
      hoverColor: "group-hover:text-black",
      notionBg: "group-hover:bg-black",
    },
    {
      name: "monday.com",
      weight: "font-bold lowercase",
      isMonday: true,
      hoverColor: "group-hover:text-[#6161FF]",
      mondayBg: "group-hover:bg-[#6161FF]",
    },
    {
      name: "stripe",
      weight: "font-bold lowercase",
      hoverColor: "group-hover:text-[#635BFF]",
    },
    {
      name: "Vercel",
      weight: "font-black tracking-tighter",
      hoverColor: "group-hover:text-black",
    },
  ];

  const logos = [...baseLogos, ...baseLogos];

  const services = [
    {
      num: "01",
      title: "Build the Foundation",
      desc: "We empower your business with a robust digital foundation to grow, scale, and lead in a competitive world.",
      graphic: (
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Concentric circles */}
            <div className="w-48 h-48 rounded-full border border-black/10 absolute transition-all duration-500 group-hover:scale-105"></div>
            <div className="w-32 h-32 rounded-full border border-black/10 absolute transition-all duration-500 group-hover:scale-110"></div>

            {/* Center icon */}
            <div className="w-16 h-16 rounded-2xl bg-[#D9FF5B] border border-black/10 flex items-center justify-center absolute z-10 shadow-md transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
              <Layers className="w-8 h-8 text-[#111111]" />
            </div>

            {/* Orbiting elements */}
            <div className="absolute w-48 h-48 animate-[spin_12s_linear_infinite]">
              <div className="w-8 h-8 bg-white rounded-full border border-black/10 shadow-sm absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                <MonitorSmartphone className="w-4 h-4 text-blue-600" />
              </div>
            </div>
            <div className="absolute w-32 h-32 animate-[spin_8s_linear_infinite_reverse]">
              <div className="w-7 h-7 bg-white rounded-full border border-black/10 shadow-sm absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 flex items-center justify-center">
                <Cloud className="w-3.5 h-3.5 text-[#F24202]" />
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      num: "02",
      title: "Create Seamless Experiences",
      desc: "Combining strategy, marketing, and design to create digital products that look great and drive real results.",
      graphic: (
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
          {/* Grid background */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(17,17,17,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(17,17,17,0.04)_1px,transparent_1px)] bg-[size:20px_20px] opacity-70"></div>

          <div className="relative z-10 flex flex-col items-center gap-6">
            {/* Top Node */}
            <div
              className="w-12 h-12 bg-white rounded-[14px] shadow-sm border border-black/10 flex items-center justify-center relative z-20 transition-transform duration-300 group-hover:scale-110"
              style={{ animation: "float 4s ease-in-out infinite" }}
            >
              <PenTool className="w-5 h-5 text-[#F24202]" />
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[2px] h-6 bg-black/10 overflow-hidden">
                <div
                  className="w-full h-full bg-[#F24202]"
                  style={{ animation: "flowLineY 2s linear infinite" }}
                ></div>
              </div>
            </div>

            <div className="flex items-center gap-8">
              {/* Left Node */}
              <div
                className="w-12 h-12 bg-white rounded-[14px] shadow-sm border border-black/10 flex items-center justify-center relative z-20 transition-transform duration-300 group-hover:scale-110"
                style={{ animation: "float 4s ease-in-out infinite 0.5s" }}
              >
                <Shield className="w-5 h-5 text-blue-600" />
                <div className="absolute -right-8 top-1/2 -translate-y-1/2 h-[2px] w-8 bg-black/10 overflow-hidden">
                  <div
                    className="w-full h-full bg-blue-500"
                    style={{ animation: "flowLineX 2s linear infinite 0.5s" }}
                  ></div>
                </div>
              </div>

              {/* Center Main Node with Official Company Logo */}
              <div className="w-16 h-16 bg-white rounded-2xl shadow-xl border border-black/20 flex items-center justify-center relative z-30 group-hover:scale-110 transition-transform duration-500 p-2.5">
                <Image
                  src={Logo}
                  alt="Opygen company logo"
                  width={34}
                  height={34}
                  className="object-contain"
                  priority
                />
                <div className="absolute inset-0 rounded-2xl border border-black/20 opacity-30 animate-ping"></div>
              </div>

              {/* Right Node */}
              <div
                className="w-12 h-12 bg-white rounded-[14px] shadow-sm border border-black/10 flex items-center justify-center relative z-20 transition-transform duration-300 group-hover:scale-110"
                style={{ animation: "float 4s ease-in-out infinite 1s" }}
              >
                <Globe className="w-5 h-5 text-purple-600" />
                <div className="absolute -left-8 top-1/2 -translate-y-1/2 h-[2px] w-8 bg-black/10 overflow-hidden">
                  <div
                    className="w-full h-full bg-purple-500"
                    style={{
                      animation: "flowLineX 2s linear infinite reverse 1s",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      num: "03",
      title: "Accelerate Growth",
      desc: "We act as your dedicated growth partner, delivering the 'digital oxygen' needed to move faster and smarter.",
      graphic: (
        <div className="relative w-full h-full bg-white rounded-[24px] overflow-hidden group">
          {/* Grid lines */}
          <div className="absolute inset-x-0 bottom-0 h-full flex flex-col justify-end px-6 pb-8 pt-12 gap-8 z-0 opacity-60">
            <div className="w-full h-px bg-black/5"></div>
            <div className="w-full h-px bg-black/5"></div>
            <div className="w-full h-px bg-black/10 border-b border-dashed border-black/20"></div>
          </div>

          {/* The Chart */}
          <div className="absolute inset-x-8 top-12 bottom-8 z-10">
            <svg
              className="w-full h-full overflow-visible"
              preserveAspectRatio="none"
              viewBox="0 0 100 100"
            >
              <defs>
                <linearGradient
                  id="growthGradient"
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#D9FF5B" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#D9FF5B" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              {/* Area Fill */}
              <path
                d="M 0,85 C 20,80 30,50 50,60 C 70,70 85,25 100,15 L 100,100 L 0,100 Z"
                fill="url(#growthGradient)"
                className="transition-all duration-1000 ease-in-out origin-bottom group-hover:scale-y-[1.05]"
              />
              {/* Stroke Line */}
              <path
                d="M 0,85 C 20,80 30,50 50,60 C 70,70 85,25 100,15"
                fill="none"
                stroke="#111111"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="drop-shadow-md transition-all duration-1000 ease-in-out origin-bottom group-hover:scale-y-[1.05]"
              />
            </svg>

            {/* Data Points */}
            <div className="absolute top-[85%] left-0 w-3 h-3 bg-white border-2 border-[#111111] rounded-full -translate-x-1.5 -translate-y-1.5 transition-all duration-1000 group-hover:-translate-y-2"></div>
            <div className="absolute top-[60%] left-[50%] w-3 h-3 bg-white border-2 border-[#111111] rounded-full -translate-x-1.5 -translate-y-1.5 transition-all duration-1000 group-hover:-translate-y-3"></div>

            {/* End Point with Pulse */}
            <div className="absolute top-[15%] left-[100%] -translate-x-2 -translate-y-2 flex items-center justify-center transition-all duration-1000 group-hover:-translate-y-4">
              <div className="w-4 h-4 bg-[#F24202] rounded-full z-10 border-[3px] border-white shadow-md"></div>
              <div className="w-10 h-10 bg-[#F24202] rounded-full absolute opacity-30 animate-ping"></div>
            </div>

            {/* Tooltip */}
            <div
              className="absolute top-[15%] left-[100%] -translate-x-[110%] -translate-y-[120%] bg-[#111111] text-white text-[11px] font-bold py-1.5 px-3 rounded-xl shadow-xl flex items-center gap-1.5 z-20 transition-all duration-1000 group-hover:-translate-y-[150%]"
              style={{ animation: "float 4s ease-in-out infinite" }}
            >
              +324% <TrendingUp className="w-3.5 h-3.5 text-[#D9FF5B]" />
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section ref={containerRef} className="py-24 bg-white overflow-hidden font-space-grotesk">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes flowLineX {
          0% { transform: translateX(-100%); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }
        @keyframes flowLineY {
          0% { transform: translateY(-100%); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateY(100%); opacity: 0; }
        }
      `,
        }}
      />
      {/* Trusted By Section */}
      <div className="mb-28">
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/90 px-4 py-1.5 shadow-[0_8px_24px_rgba(17,17,17,0.04)] backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5 text-[#F24202]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#4B4B4B]">
              Trusted By Industry Leaders
            </span>
          </div>
        </div>

        {/* Marquee Container with fade edges */}
        <div className="relative flex overflow-hidden w-full">
          <div className="absolute left-0 top-0 w-24 md:w-48 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-24 md:w-48 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          <div className="marquee-content flex w-max">
            {/* First Set */}
            <div className="flex gap-20 md:gap-32 px-10 md:px-16 items-center justify-around w-1/2">
              {logos.map((logo, index) => (
                <div
                  key={`logo-1-${index}`}
                  className="flex items-center gap-2 text-gray-400 cursor-pointer transition-transform duration-300 hover:scale-105 group"
                >
                  {logo.isNotion && (
                    <div
                      className={`w-7 h-7 bg-gray-400 text-white flex items-center justify-center rounded-sm text-sm font-bold mr-1 transition-colors duration-300 ${logo.notionBg || ""}`}
                    >
                      N
                    </div>
                  )}
                  {logo.isMonday && (
                    <div className="flex gap-1 mr-1">
                      <div
                        className={`w-2 h-4 rounded-full bg-gray-400 transition-colors duration-300 ${logo.mondayBg || ""}`}
                      ></div>
                      <div
                        className={`w-2 h-4 rounded-full bg-gray-400 transition-colors duration-300 ${logo.mondayBg || ""}`}
                      ></div>
                    </div>
                  )}
                  <span
                    className={`text-3xl tracking-tight transition-colors duration-300 ${logo.weight} ${logo.hoverColor}`}
                  >
                    {logo.name}
                  </span>
                </div>
              ))}
            </div>
            {/* Second Set (Duplicate for seamless scroll) */}
            <div className="flex gap-20 md:gap-32 px-10 md:px-16 items-center justify-around w-1/2">
              {logos.map((logo, index) => (
                <div
                  key={`logo-2-${index}`}
                  className="flex items-center gap-2 text-gray-400 cursor-pointer transition-transform duration-300 hover:scale-105 group"
                >
                  {logo.isNotion && (
                    <div
                      className={`w-7 h-7 bg-gray-400 text-white flex items-center justify-center rounded-sm text-sm font-bold mr-1 transition-colors duration-300 ${logo.notionBg || ""}`}
                    >
                      N
                    </div>
                  )}
                  {logo.isMonday && (
                    <div className="flex gap-1 mr-1">
                      <div
                        className={`w-2 h-4 rounded-full bg-gray-400 transition-colors duration-300 ${logo.mondayBg || ""}`}
                      ></div>
                      <div
                        className={`w-2 h-4 rounded-full bg-gray-400 transition-colors duration-300 ${logo.mondayBg || ""}`}
                      ></div>
                    </div>
                  )}
                  <span
                    className={`text-3xl tracking-tight transition-colors duration-300 ${logo.weight} ${logo.hoverColor}`}
                  >
                    {logo.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-20 relative">
          <h2
            ref={titleRef}
            className="text-4xl md:text-5xl lg:text-[56px] font-bold tracking-tight text-gray-900 leading-[1.08]"
          >
            One partner for the work <br className="hidden md:block" /> that
            moves your business forward.
          </h2>
        </div>

        {/* Cards Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service, idx) => (
            <div
              key={idx}
              data-marketing-card
              className="feature-card flex flex-col bg-white rounded-[2rem] p-8 hover:shadow-[0_24px_50px_rgba(17,17,17,0.08)] hover:-translate-y-1.5 transition-all duration-500 group border border-black/10"
            >
              <div className="mb-5 text-[17px] font-bold text-[#F24202]">
                {service.num}
              </div>

              <h3 className="text-[22px] font-bold text-gray-900 mb-3 leading-snug">
                {service.title}
              </h3>

              <p className="text-gray-500 text-[15px] leading-relaxed mb-10 min-h-[60px]">
                {service.desc}
              </p>

              <div className="mt-auto h-[240px] rounded-[1.5rem] bg-[#F7F7F4] shadow-inner border border-black/5 flex items-center justify-center relative overflow-hidden">
                {service.graphic}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

