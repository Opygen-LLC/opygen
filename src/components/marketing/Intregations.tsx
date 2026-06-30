"use client";

import { useEffect, useRef } from "react";
import { Activity, Bot, Cloud, Database, Zap } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Logo from "../../../public/logo/Opygen.png";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const apps = [
  { name: "Activity", icon: Activity, color: "text-zinc-800" },
  { name: "Cloud", icon: Cloud, color: "text-rose-500" },
  { name: "AI", icon: Bot, color: "text-black" },
  { name: "Database", icon: Database, color: "text-orange-500" },
  { name: "Zapier", icon: Zap, color: "text-amber-500" },
];

export default function Intregations() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animation
      gsap.fromTo(
        leftContentRef.current,
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );

      gsap.fromTo(
        containerRef.current,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-white font-space-grotesk overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Left Content */}
          <div ref={leftContentRef} className="max-w-xl">
            <div className="mb-6 inline-flex items-center px-4 py-1.5 rounded-full border border-gray-200 bg-white text-gray-900 text-[13px] font-bold tracking-wide shadow-sm">
              Integration
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-[52px] font-bold tracking-tight text-gray-900 leading-[1.1] mb-6">
              Your entire tech stack, Perfectly connected
            </h2>
            
            <p className="text-[17px] leading-relaxed text-gray-500 mb-10 max-w-lg">
              Unlock the full potential of your technology stack with secure,
              enterprise-grade integrations.
            </p>
            
            <button className="bg-black text-white px-8 py-3.5 rounded-full text-[15px] font-bold transition-transform hover:scale-105 shadow-lg shadow-black/10">
              Get Started
            </button>
          </div>

          {/* Right Visual */}
          <div ref={containerRef} className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-blue-50/50 via-white to-orange-50/30 border border-gray-100 shadow-[0_8px_40px_rgba(0,0,0,0.04)] flex items-center justify-center p-8">
            
            <div className="relative w-full max-w-[500px] aspect-[4/3]">
              
              {/* SVG Connecting Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 500 400" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="glowLine" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f97316" stopOpacity="1" />
                    <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
                  </linearGradient>
                </defs>

                {/* Base subtle lines */}
                {[
                  "M 250 120 C 150 180, 80 250, 60 320", // Line 1
                  "M 250 120 C 200 180, 160 250, 155 320", // Line 2
                  "M 250 120 C 250 180, 250 250, 250 320", // Line 3
                  "M 250 120 C 300 180, 340 250, 345 320", // Line 4
                  "M 250 120 C 350 180, 420 250, 440 320"  // Line 5
                ].map((d, i) => (
                  <path
                    key={`base-${i}`}
                    d={d}
                    fill="none"
                    stroke="#22c55e"
                    strokeWidth="1"
                    strokeOpacity="0.2"
                  />
                ))}

                {/* Animated Glowing Pulses */}
                {[
                  { d: "M 250 120 C 150 180, 80 250, 60 320", delay: "0s" },
                  { d: "M 250 120 C 200 180, 160 250, 155 320", delay: "1.2s" },
                  { d: "M 250 120 C 250 180, 250 250, 250 320", delay: "0.6s" },
                  { d: "M 250 120 C 300 180, 340 250, 345 320", delay: "1.8s" },
                  { d: "M 250 120 C 350 180, 420 250, 440 320", delay: "0.3s" }
                ].map((path, i) => (
                  <path
                    key={`glow-${i}`}
                    d={path.d}
                    fill="none"
                    stroke="url(#glowLine)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    style={{
                      strokeDasharray: "40 1000",
                      animation: `pulse-line 3s infinite linear ${path.delay}`
                    }}
                  />
                ))}
              </svg>

              {/* Central Hub Node */}
              <div className="absolute top-[80px] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="relative size-24 md:size-[110px] bg-white rounded-[28px] shadow-2xl flex items-center justify-center overflow-hidden border border-gray-100 p-3">
                  {/* Opygen Logo Inside */}
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image src={Logo} alt="Opygen" fill className="object-contain" />
                  </div>
                </div>
              </div>

              {/* Bottom App Nodes */}
              <div className="absolute bottom-[20px] left-0 w-full flex justify-between px-4 sm:px-6">
                {apps.map((app, i) => {
                  const Icon = app.icon;
                  // The center icon is highlighted
                  const isCenter = i === 2;
                  return (
                    <div
                      key={app.name}
                      className={cn(
                        "relative flex items-center justify-center rounded-2xl shadow-xl z-10 transition-transform hover:-translate-y-2",
                        isCenter ? "size-16 md:size-20 bg-zinc-900 -mt-2" : "size-14 md:size-16 bg-white border border-gray-100"
                      )}
                    >
                      <Icon className={cn("size-6 md:size-8", isCenter ? "text-white" : app.color)} />
                    </div>
                  );
                })}
              </div>

            </div>
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes pulse-line {
          0% { stroke-dashoffset: 0; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { stroke-dashoffset: -400; opacity: 0; }
        }
      `}} />
    </section>
  );
}
