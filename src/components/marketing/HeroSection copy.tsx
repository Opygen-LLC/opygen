"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import Image from "next/image";
import { Heart, MessageSquare, FileText, Play, Activity } from "lucide-react";

// Using highly reliable Pravatar images to ensure they show perfectly
const avatars = [
  "https://i.pravatar.cc/200?img=11", // male 1
  "https://i.pravatar.cc/200?img=47", // female 1
  "https://i.pravatar.cc/200?img=12", // male 2
  "https://i.pravatar.cc/200?img=44", // female 2
  "https://i.pravatar.cc/200?img=15", // male 3
];

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Left content intro
      tl.from(".hero-text", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });

      // Right elements intro (floating cards and avatars)
      tl.from(
        ".float-el",
        {
          scale: 0.5,
          opacity: 0,
          y: 40,
          rotation: () => Math.random() * 20 - 10,
          duration: 1,
          stagger: 0.05,
          ease: "back.out(1.5)",
        },
        "-=0.6"
      );

      // Draw solid arrow line first
      tl.to(
        ".curved-arrow",
        {
          strokeDashoffset: 0,
          duration: 1.5,
          ease: "power2.inOut",
        },
        "-=0.4"
      );

      // Fade in arrow head
      tl.to(
        ".curved-arrow-head",
        {
          opacity: 1,
          duration: 0.3,
        },
        "-=0.2"
      );

      // Continuous animated dashed line effect on the curved line
      tl.add(() => {
        gsap.set(".curved-arrow", { strokeDasharray: "15 15" });
        gsap.to(".curved-arrow", {
          strokeDashoffset: -1000,
          duration: 25,
          repeat: -1,
          ease: "none",
        });
      });

      // Continuous floating effect
      gsap.utils.toArray(".float-el").forEach((el: any) => {
        gsap.to(el, {
          y: () => "+=" + (Math.random() * 15 + 10),
          rotation: () => "+=" + (Math.random() * 4 - 2),
          duration: () => Math.random() * 2 + 3,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
          delay: Math.random() * 2,
        });
      });

      // Wavy graph line animations
      gsap.to(".wavy-line", {
        x: -20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative flex items-center justify-center overflow-hidden bg-white text-black min-h-screen pt-28 pb-16 font-space-grotesk"
    >
      {/* Background Orbs for super cool effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[-10%] w-[30%] h-[40%] bg-lime-200/20 blur-[120px] rounded-full mix-blend-multiply" />
        <div className="absolute top-[30%] right-[-10%] w-[40%] h-[50%] bg-purple-300/20 blur-[120px] rounded-full mix-blend-multiply" />
      </div>

      <div className="relative z-20 flex w-full max-w-[1400px] mx-auto flex-col lg:flex-row items-center justify-between px-6 lg:px-12 gap-16 lg:gap-8">
        
        {/* Left: Content */}
        <div className="w-full lg:w-[45%] flex flex-col items-start z-20 relative">
          <div className="hero-text inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-100 shadow-sm mb-8">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#CDFE53] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#b2e52b]"></span>
            </span>
            <span className="text-[13px] font-bold text-gray-800 tracking-wide uppercase">New: Analytics 2.0</span>
          </div>

          <h1 className="hero-text text-[4rem] lg:text-[5.5rem] xl:text-[6rem] font-bold leading-[1.02] tracking-tighter text-[#111111] mb-6">
            Know your <br /> Customers
          </h1>
          
          <p className="hero-text text-[17px] lg:text-[20px] text-gray-500 mb-8 font-medium max-w-[550px] leading-relaxed">
            Turn online conversations into actionable insights. Monitor your brand reputation, analyze real-time sentiment, and track key metrics effortlessly.
          </p>

          <div className="hero-text flex items-center gap-8 mb-12">
            <div className="flex flex-col">
               <span className="text-3xl font-bold text-gray-900">10k+</span>
               <span className="text-[15px] font-medium text-gray-500">Active users</span>
            </div>
            <div className="w-px h-12 bg-gray-200"></div>
            <div className="flex flex-col">
               <span className="text-3xl font-bold text-gray-900">99%</span>
               <span className="text-[15px] font-medium text-gray-500">Accuracy rate</span>
            </div>
          </div>

          <div className="hero-text flex flex-wrap items-center gap-5">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center bg-[#D1FF4F] hover:bg-[#bceb40] text-gray-900 font-bold px-8 py-4 rounded-full transition-all hover:scale-105 hover:shadow-[0_15px_30px_rgba(209,255,79,0.3)] text-[16px]"
            >
              Book a meeting
            </Link>
            <Link
              href="#demo"
              className="inline-flex items-center justify-center bg-white border border-gray-200 hover:border-gray-300 text-gray-900 font-bold px-8 py-4 rounded-full transition-all hover:bg-gray-50 hover:shadow-lg text-[16px] gap-2 group"
            >
              <Play className="w-4 h-4 transition-transform group-hover:scale-110" />
              Watch Demo
            </Link>
          </div>
        </div>

        {/* Right: Visual Abstract UI - Reduced size and perfectly aligned */}
        <div className="w-full lg:w-[55%] relative h-[500px] lg:h-[600px] flex items-center justify-center mt-12 lg:mt-0">
          
          {/* Curved Arrow SVG */}
          <svg
            className="absolute left-[-5%] top-[-5%] w-[120%] h-[120%] pointer-events-none z-0 hidden lg:block overflow-visible"
            viewBox="0 0 600 600"
            fill="none"
          >
            <path
              className="curved-arrow"
              d="M 450 60 C 650 200, 550 550, 260 500"
              stroke="#1A1B20"
              strokeWidth="2.5"
              strokeDasharray="1200"
              strokeDashoffset="1200"
              strokeLinecap="round"
            />
            <path
              className="curved-arrow-head opacity-0"
              d="M 260 500 L 275 480 M 260 500 L 280 510"
              stroke="#1A1B20"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>

          {/* Core container for absolute positioning - Adjusted scaling for perfect look */}
          <div className="relative w-full max-w-[500px] h-[500px] scale-[0.85] sm:scale-100 lg:scale-[0.95] xl:scale-[1.05] origin-center">
            
            {/* Glow behind main purple card */}
            <div className="absolute top-[200px] left-[100px] w-[220px] h-[220px] bg-purple-400/30 blur-[40px] rounded-full z-0" />

            {/* Main Purple Card */}
            <div className="float-el absolute top-[200px] left-[100px] w-[240px] h-[250px] bg-[#E3DFFA] rounded-[2.5rem] p-6 shadow-2xl z-20 flex flex-col justify-between group cursor-default border border-white/50 backdrop-blur-sm">
              <div>
                <p className="text-gray-500 text-[14px] font-semibold mb-1 uppercase tracking-wide">
                  Mentions Q4
                </p>
                <h3 className="text-[44px] font-bold text-gray-900 leading-none">
                  1.2k
                </h3>
                <p className="text-[14px] font-bold mt-2 text-emerald-600 bg-emerald-50 w-max px-2 py-0.5 rounded-full">+ 9.92%</p>
              </div>
              {/* Wavy Graph inside purple card */}
              <div className="relative h-20 w-full mt-4 overflow-hidden rounded-xl bg-white/20 p-2">
                <svg
                  className="w-[150%] h-full wavy-line"
                  viewBox="0 0 150 40"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 35 Q 15 20, 30 25 T 60 15 T 90 25 T 120 10 T 150 20"
                    fill="none"
                    stroke="#111111"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <circle cx="80" cy="18" r="4" fill="#111111" className="animate-pulse" />
                </svg>
                {/* Node Label */}
                <div className="absolute right-[20%] top-[0px] bg-[#111111] text-white text-[10px] px-2.5 py-1 rounded-full font-bold shadow-xl">
                  12th Jul
                </div>
              </div>
            </div>

            {/* Vertical Black Pill */}
            <div className="float-el absolute top-[210px] left-[10px] w-[60px] h-[230px] bg-[#1A1B20] rounded-full flex flex-col items-center justify-between py-6 shadow-2xl z-10 text-white border border-gray-800">
              <span className="transform -rotate-90 whitespace-nowrap text-[13px] font-medium tracking-wide mt-16">
                Total Reach{" "}
                <span className="font-bold text-[#D1FF4F] ml-2">154M</span>
              </span>
              <div className="bg-white/10 p-2.5 rounded-full mt-2">
                 <Activity className="w-4 h-4 text-white" />
              </div>
            </div>

            {/* Lime Green Card */}
            <div className="float-el absolute top-[160px] left-[180px] w-[210px] bg-[#D1FF4F] rounded-[1.2rem] p-2.5 shadow-2xl z-30 flex items-center gap-3 hover:scale-105 transition-transform cursor-pointer">
              <div className="bg-white p-2 rounded-xl shadow-sm">
                <FileText className="w-5 h-5 text-gray-800" />
              </div>
              <div className="flex-1">
                <p className="text-[13px] font-bold text-gray-900 leading-tight">
                  Report
                </p>
                <p className="text-[11px] text-gray-700 font-medium">2.7mb</p>
              </div>
              <div className="w-14 h-6 pr-1 overflow-hidden">
                <svg
                  className="w-[150%] h-full wavy-line opacity-50"
                  viewBox="0 0 60 20"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 15 Q 10 5, 20 10 T 40 10 T 60 5"
                    fill="none"
                    stroke="#111111"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>

            {/* Black Wide Pill - Brand insights */}
            <div className="float-el absolute top-[90px] left-[30px] bg-[#1A1B20] rounded-full pl-6 pr-2 py-2 shadow-2xl z-30 flex items-center gap-5 border border-gray-800">
              <span className="text-white text-[14px] font-semibold">
                Brand insights
              </span>
              <button className="bg-white text-black text-[11px] font-bold px-4 py-2 rounded-full hover:bg-[#D1FF4F] transition-colors shadow-md">
                See
              </button>
            </div>

            {/* Avatars */}
            {/* Top Left Avatar */}
            <div className="float-el absolute top-[0px] left-[120px] w-[80px] h-[80px] bg-gray-200 rounded-[2rem] overflow-hidden shadow-2xl z-20 border-4 border-white group">
              <Image
                src={avatars[0]}
                alt="User"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                unoptimized
              />
              <div className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-[#D1FF4F] rounded-full border-2 border-white shadow-sm" />
            </div>

            {/* Top Right Avatar */}
            <div className="float-el absolute top-[20px] left-[240px] w-[100px] h-[100px] bg-gray-200 rounded-[2.5rem] overflow-hidden shadow-2xl z-10 border-[4px] border-white group">
              <Image
                src={avatars[1]}
                alt="User"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                unoptimized
              />
            </div>

            {/* Chat Bubble Icon */}
            <div className="float-el absolute top-[0px] left-[360px] w-[50px] h-[50px] bg-[#1A1B20] rounded-full flex items-center justify-center shadow-2xl z-20 text-white border-[3px] border-white">
              <MessageSquare className="w-4 h-4 text-[#D1FF4F]" />
            </div>

            {/* Middle Right Avatar (Vertical) */}
            <div className="float-el absolute top-[110px] left-[340px] w-[85px] h-[110px] bg-gray-200 rounded-[2.2rem] overflow-hidden shadow-2xl z-10 border-4 border-white group">
              <Image
                src={avatars[2]}
                alt="User"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                unoptimized
              />
            </div>

            {/* Bottom Right Avatar */}
            <div className="float-el absolute top-[250px] left-[360px] w-[80px] h-[80px] bg-gray-200 rounded-[2rem] overflow-hidden shadow-2xl z-10 border-4 border-white group">
              <Image
                src={avatars[3]}
                alt="User"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                unoptimized
              />
              <div className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-400 rounded-full border-2 border-white shadow-sm" />
            </div>

            {/* Bottom Middle Avatar */}
            <div className="float-el absolute top-[350px] left-[280px] w-[90px] h-[90px] bg-gray-200 rounded-[2.5rem] overflow-hidden shadow-2xl z-10 border-[4px] border-white group">
              <Image
                src={avatars[4]}
                alt="User"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                unoptimized
              />
            </div>

            {/* Burst Icon */}
            <div className="float-el absolute top-[50px] left-[30px] text-gray-800 opacity-60">
              <svg
                width="40"
                height="40"
                viewBox="0 0 50 50"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              >
                <line x1="20" y1="20" x2="5" y2="5" />
                <line x1="15" y1="28" x2="2" y2="28" />
                <line x1="28" y1="15" x2="28" y2="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
