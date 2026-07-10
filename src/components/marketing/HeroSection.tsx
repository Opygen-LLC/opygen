"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import { ArrowUpRight, Activity, Layers } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Intro Timeline
      const tl = gsap.timeline();

      tl.from(".hero-word", {
        y: 80,
        opacity: 0,
        duration: 1.2,
        stagger: 0.05,
        ease: "power4.out",
      });

      tl.from(
        ".inline-img",
        {
          scale: 0,
          rotation: () => Math.random() * 40 - 20,
          opacity: 0,
          duration: 1.2,
          stagger: 0.1,
          ease: "back.out(1.8)",
        },
        "-=1"
      );

      tl.from(
        ".bottom-el",
        {
          y: 40,
          opacity: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
        },
        "-=0.6"
      );

      // Continuous Floating Elements
      gsap.utils.toArray(".float-anim").forEach((el: any) => {
        gsap.to(el, {
          y: () => "+=" + (Math.random() * 12 + 6),
          rotation: () => "+=" + (Math.random() * 8 - 4),
          duration: () => Math.random() * 2 + 3,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
          delay: Math.random() * 2,
        });
      });

      // CTA Button Spin
      gsap.to(".cta-ring", {
        rotation: 360,
        duration: 15,
        repeat: -1,
        ease: "linear",
      });
      
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative flex flex-col items-center justify-start overflow-hidden bg-[#FAFAFA] text-black min-h-screen pt-32 lg:pt-40 pb-20 font-space-grotesk"
    >
      {/* Decorative Orbs for background depth */}
      <div className="absolute top-[20%] left-[-5%] w-[400px] h-[400px] bg-emerald-100/30 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute top-[40%] right-[-5%] w-[400px] h-[400px] bg-purple-100/40 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-20 flex w-full max-w-[1400px] mx-auto flex-col items-center px-4 sm:px-6 lg:px-12">
        
        {/* BIG HEADLINE */}
        <div className="flex flex-col items-center justify-center gap-2 lg:gap-5 w-full text-[3rem] sm:text-[4.5rem] md:text-[6rem] lg:text-[7.5rem] xl:text-[8.5rem] font-bold leading-[1.05] tracking-tight text-[#111111]">
          
          {/* Line 1 */}
          <div className="flex items-center justify-center flex-wrap">
            <span className="hero-word pr-2 lg:pr-6">Everything</span>
            <div className="inline-img relative w-[90px] sm:w-[120px] lg:w-[180px] h-[50px] sm:h-[65px] lg:h-[100px] rounded-[3rem] overflow-hidden bg-[#a5d2b7] shadow-xl mx-1 lg:mx-2 -translate-y-1 lg:-translate-y-4">
              <Image src="https://i.pravatar.cc/300?img=11" alt="avatar" fill className="object-cover" unoptimized />
            </div>
            <span className="hero-word pl-2 lg:pl-4">You</span>
          </div>

          {/* Line 2 */}
          <div className="flex items-center justify-center flex-wrap relative w-full lg:w-auto">
            {/* Left Sparkle */}
            <div className="absolute -left-2 sm:-left-8 lg:-left-20 top-0 lg:top-4 float-anim hidden sm:block">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 lg:w-10 lg:h-10">
                <path d="M20 0L22.5 17.5L40 20L22.5 22.5L20 40L17.5 22.5L0 20L17.5 17.5L20 0Z" fill="#111111"/>
              </svg>
            </div>
            
            <span className="hero-word pr-2 lg:pr-5">Need</span>
            
            {/* Purple Blob shape */}
            <div className="inline-img relative w-[80px] sm:w-[110px] lg:w-[160px] h-[55px] sm:h-[75px] lg:h-[110px] mx-2 lg:mx-6 flex items-center justify-center -translate-y-1 lg:-translate-y-2">
               <div className="absolute inset-0 bg-[#8b5cf6] rounded-full rotate-6 shadow-2xl" style={{ borderRadius: "50% 40% 60% 40% / 40% 60% 50% 60%" }} />
               <div className="relative z-10 w-6 h-8 sm:w-8 sm:h-10 lg:w-12 lg:h-14 bg-white rounded-lg shadow-md border border-gray-100 -rotate-12 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-gray-300 rounded-full absolute top-1.5 lg:top-2" />
               </div>
            </div>
            
            <span className="hero-word pr-2 lg:pr-6">To</span>
            <span className="hero-word pr-2 lg:pr-6">Grow</span>
            <span className="hero-word pr-2 lg:pr-6 relative">
              Your
              {/* Yellow Hexagon */}
              <div className="inline-img absolute -right-6 lg:-right-12 top-2 lg:top-6 w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 bg-[#facc15] shadow-xl float-anim" style={{ clipPath: "polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)" }}></div>
            </span>
          </div>

          {/* Line 3 */}
          <div className="flex items-center justify-center flex-wrap mt-1 lg:mt-0">
            <span className="hero-word pr-2 lg:pr-6">Design</span>
            <div className="inline-img relative w-[70px] sm:w-[90px] lg:w-[130px] h-[70px] sm:h-[90px] lg:h-[130px] rounded-full overflow-hidden bg-blue-300 shadow-2xl border-[4px] lg:border-[6px] border-white mx-2 lg:mx-3 -translate-y-1 lg:-translate-y-4">
               <Image src="https://i.pravatar.cc/300?img=47" alt="avatar" fill className="object-cover" unoptimized />
            </div>
            <span className="hero-word pl-1 lg:pl-4">Skills</span>
          </div>
        </div>

        {/* BOTTOM ELEMENTS */}
        <div className="w-full mt-24 lg:mt-36 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-6 items-center lg:items-end relative px-4 lg:px-0">
          
          {/* Col 1 */}
          <div className="bottom-el flex flex-col items-center lg:items-start text-center lg:text-left gap-4 lg:pb-4">
             <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-[#3f5e5a] flex items-center justify-center text-white font-serif italic text-2xl lg:text-3xl shadow-lg hover:scale-110 transition-transform cursor-pointer">
               O
             </div>
             <div>
               <p className="text-[10px] lg:text-[11px] font-bold tracking-widest text-gray-400 mb-2 uppercase">Design Services</p>
               <p className="text-[13px] lg:text-sm font-medium text-gray-600 max-w-[200px] leading-relaxed mx-auto lg:mx-0">
                 Quick, affordable services tailored to your unique business needs.
               </p>
             </div>
          </div>

          {/* Col 2 */}
          <div className="bottom-el flex flex-col items-center gap-2 relative lg:pb-8">
             <div className="relative">
               <div className="absolute bottom-1 left-[-10px] right-[-10px] h-[15px] lg:h-[20px] bg-[#facc15]/40 -z-10 -rotate-2" />
               <h3 className="text-4xl lg:text-6xl font-bold text-gray-900">$1.5k</h3>
             </div>
             <p className="text-[13px] lg:text-sm font-medium text-gray-500 mb-4 lg:mb-6">Average ROI</p>
             <div className="w-10 h-10 rounded-full bg-[#f97316] flex items-center justify-center shadow-lg float-anim text-white lg:mt-4">
                <Activity className="w-4 h-4 lg:w-5 lg:h-5" />
             </div>
             
             {/* Small purple star */}
             <div className="absolute right-[10%] lg:right-[-20px] top-[50%] lg:top-[40%] float-anim text-purple-400">
               <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                 <path d="M10 0L11.5 8.5L20 10L11.5 11.5L10 20L8.5 11.5L0 10L8.5 8.5L10 0Z" />
               </svg>
             </div>
          </div>

          {/* Col 3: CTA BUTTON (Super cooler style) */}
          <div className="bottom-el flex items-center justify-center lg:pb-4">
             <Link href="#contact" className="group relative flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-500">
                {/* Rotating text ring using SVG */}
                <svg className="absolute w-[150px] h-[150px] lg:w-[190px] lg:h-[190px] cta-ring" viewBox="0 0 100 100">
                  <path id="textPath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
                  <text className="text-[10px] font-bold uppercase tracking-widest fill-gray-400 group-hover:fill-gray-600 transition-colors duration-300">
                    <textPath href="#textPath" startOffset="0%">
                      START GROWING NOW • BOOK A CALL • 
                    </textPath>
                  </text>
                </svg>
                
                {/* Main black circle */}
                <div className="relative w-[110px] h-[110px] lg:w-[130px] lg:h-[130px] bg-[#111111] rounded-full shadow-2xl flex flex-col items-center justify-center text-white overflow-hidden border-[4px] border-white z-10 group-hover:border-[#D1FF4F] transition-colors duration-500">
                   {/* Cool inner hover gradient */}
                   <div className="absolute inset-0 bg-gradient-to-tr from-[#D1FF4F]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                   
                   <span className="text-sm font-bold tracking-wide z-10 group-hover:text-[#D1FF4F] transition-colors">Get</span>
                   <span className="text-sm font-bold tracking-wide z-10 flex items-center gap-1 group-hover:text-[#D1FF4F] transition-colors">
                     Started
                     <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                   </span>
                </div>
             </Link>
          </div>

          {/* Col 4 */}
          <div className="bottom-el flex flex-col items-center lg:items-end text-center lg:text-right gap-3 lg:pb-12">
             <div className="flex items-center gap-2 mb-1">
               <Layers className="w-5 h-5 text-gray-900" />
               <span className="font-bold tracking-widest text-gray-900">IDENTITY</span>
             </div>
             <p className="text-[13px] lg:text-sm font-medium text-gray-600 max-w-[220px] leading-relaxed mx-auto lg:mx-0">
               Customize your setup to best fit your team. Easiest way to manage projects and tasks.
             </p>
          </div>

        </div>
      </div>
    </section>
  );
}
