"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  MonitorSmartphone, 
  Cloud, 
  PenTool, 
  TrendingUp, 
  Hexagon, 
  Zap, 
  Shield, 
  Globe,
  Layers
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
        duration: 25,
        repeat: -1,
      });

      // Reveal Animations
      gsap.from(titleRef.current, {
        y: 40,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".feature-card", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power4.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 75%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const logos = [
    { name: "Google", weight: "font-semibold text-gray-400" },
    { name: "zapier", weight: "font-black lowercase text-gray-400" },
    { name: "Notion", weight: "font-bold text-gray-400", isNotion: true },
    { name: "monday.com", weight: "font-bold lowercase text-gray-400", isMonday: true },
    { name: "Google", weight: "font-semibold text-gray-400" },
    { name: "zapier", weight: "font-black lowercase text-gray-400" },
  ];

  const services = [
    {
      num: "01",
      title: "Web & Mobile App",
      desc: "High-performance websites and mobile applications built to scale.",
      graphic: (
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Concentric circles */}
            <div className="w-48 h-48 rounded-full border border-gray-200 absolute"></div>
            <div className="w-32 h-32 rounded-full border border-gray-200 absolute"></div>
            
            {/* Center icon */}
            <div className="w-16 h-16 rounded-full bg-[#E8F5E9] flex items-center justify-center absolute z-10 shadow-sm transition-transform duration-500 group-hover:scale-110">
               <Layers className="w-8 h-8 text-green-600" />
            </div>
            
            {/* Orbiting elements */}
            <div className="absolute w-48 h-48 animate-[spin_12s_linear_infinite]">
               <div className="w-8 h-8 bg-white rounded-full border border-gray-100 shadow-sm absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                 <MonitorSmartphone className="w-4 h-4 text-blue-500" />
               </div>
            </div>
            <div className="absolute w-32 h-32 animate-[spin_8s_linear_infinite_reverse]">
               <div className="w-6 h-6 bg-white rounded-full border border-gray-100 shadow-sm absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 flex items-center justify-center">
                 <Cloud className="w-3 h-3 text-orange-500" />
               </div>
            </div>
          </div>
        </div>
      )
    },
    {
      num: "02",
      title: "SaaS Product Dev",
      desc: "Develop scalable SaaS platforms turning ideas into impactful products.",
      graphic: (
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="flex flex-col items-center gap-3 w-full px-6 transition-transform duration-500 group-hover:scale-[1.05]">
            <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center relative z-10">
               <Cloud className="w-6 h-6 text-orange-500" />
               <div className="absolute -bottom-3 left-1/2 w-[2px] h-3 bg-gray-100"></div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center relative z-10">
                 <Shield className="w-5 h-5 text-gray-400" />
                 <div className="absolute -right-3 top-1/2 h-[2px] w-3 bg-gray-100"></div>
              </div>
              <div className="w-12 h-12 bg-[#E8F5E9] rounded-xl shadow-sm border border-green-100 flex items-center justify-center relative z-10">
                 <Layers className="w-6 h-6 text-green-600" />
                 <div className="absolute -right-3 top-1/2 h-[2px] w-3 bg-gray-100"></div>
                 <div className="absolute -bottom-3 left-1/2 w-[2px] h-3 bg-gray-100"></div>
              </div>
              <div className="w-10 h-10 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center relative z-10">
                 <Globe className="w-5 h-5 text-gray-400" />
              </div>
            </div>
            <div className="w-10 h-10 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center relative z-10">
                 <Hexagon className="w-5 h-5 text-gray-400" />
            </div>
            
            {/* Background connecting lines */}
            <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
              <div className="w-3/4 h-3/4 border border-gray-200 rounded-lg"></div>
            </div>
          </div>
        </div>
      )
    },
    {
      num: "03",
      title: "UI/UX Design",
      desc: "Create seamless digital experiences that look great and drive results.",
      graphic: (
        <div className="relative w-full h-full flex flex-col gap-3 items-center justify-center p-6">
          <div className="w-full max-w-[200px] bg-white rounded-lg shadow-sm border border-gray-100 p-3 transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-md relative z-10">
             <div className="flex gap-1.5 mb-3">
               <div className="w-2 h-2 rounded-full bg-[#FF5F56]"></div>
               <div className="w-2 h-2 rounded-full bg-[#FFBD2E]"></div>
               <div className="w-2 h-2 rounded-full bg-[#27C93F]"></div>
             </div>
             <div className="w-3/4 h-2 bg-gray-100 rounded-full mb-2"></div>
             <div className="w-full h-2 bg-gray-100 rounded-full mb-2"></div>
             <div className="w-5/6 h-2 bg-gray-100 rounded-full"></div>
          </div>
          <div className="w-full max-w-[200px] bg-white rounded-lg shadow-sm border border-gray-100 p-3 opacity-60 transition-transform duration-500 group-hover:translate-y-1">
             <div className="flex gap-1.5 mb-3">
               <div className="w-2 h-2 rounded-full bg-gray-200"></div>
               <div className="w-2 h-2 rounded-full bg-gray-200"></div>
               <div className="w-2 h-2 rounded-full bg-gray-200"></div>
             </div>
             <div className="w-2/3 h-2 bg-gray-100 rounded-full mb-2"></div>
             <div className="w-full h-2 bg-gray-100 rounded-full mb-2"></div>
          </div>
        </div>
      )
    },
    {
      num: "04",
      title: "Digital Marketing",
      desc: "Strategy and branding to help businesses move faster and smarter.",
      graphic: (
        <div className="relative w-full h-full flex items-end justify-center p-6 gap-2">
           <div className="w-10 bg-blue-50 rounded-t-md h-12 relative group-hover:h-16 transition-all duration-500 group-hover:bg-blue-100"></div>
           <div className="w-10 bg-purple-50 rounded-t-md h-20 relative group-hover:h-24 transition-all duration-500 group-hover:bg-purple-100"></div>
           <div className="w-10 bg-green-100 rounded-t-md h-32 relative group-hover:h-36 transition-all duration-500 shadow-sm border-t border-green-200">
             <TrendingUp className="absolute -top-10 left-1/2 -translate-x-1/2 w-8 h-8 text-green-500 drop-shadow-sm group-hover:-translate-y-2 transition-transform duration-500" />
           </div>
           <div className="w-10 bg-orange-50 rounded-t-md h-24 relative group-hover:h-28 transition-all duration-500 group-hover:bg-orange-100"></div>
        </div>
      )
    }
  ];

  return (
    <section ref={containerRef} className="py-24 bg-white overflow-hidden">
      {/* Trusted By Section */}
      <div className="mb-32">
        <h3 className="text-center text-xl font-medium text-gray-900 mb-12">Trusted By</h3>
        
        {/* Marquee Container with fade edges */}
        <div className="relative flex overflow-hidden w-full group">
          <div className="absolute left-0 top-0 w-24 md:w-48 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-24 md:w-48 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          
          <div className="marquee-content flex w-max">
            {/* First Set */}
            <div className="flex gap-20 md:gap-32 px-10 md:px-16 items-center justify-around w-1/2">
              {logos.map((logo, index) => (
                <div key={`logo-1-${index}`} className="flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity duration-300">
                  {logo.isNotion && (
                    <div className="w-7 h-7 bg-gray-400 text-white flex items-center justify-center rounded-sm text-sm font-bold mr-1">
                      N
                    </div>
                  )}
                  {logo.isMonday && (
                    <div className="flex gap-1 mr-1">
                      <div className="w-2 h-4 rounded-full bg-gray-400"></div>
                      <div className="w-2 h-4 rounded-full bg-gray-400"></div>
                    </div>
                  )}
                  <span className={`text-3xl tracking-tight ${logo.weight}`}>{logo.name}</span>
                </div>
              ))}
            </div>
            {/* Second Set (Duplicate for seamless scroll) */}
            <div className="flex gap-20 md:gap-32 px-10 md:px-16 items-center justify-around w-1/2">
              {logos.map((logo, index) => (
                <div key={`logo-2-${index}`} className="flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity duration-300">
                  {logo.isNotion && (
                    <div className="w-7 h-7 bg-gray-400 text-white flex items-center justify-center rounded-sm text-sm font-bold mr-1">
                      N
                    </div>
                  )}
                  {logo.isMonday && (
                    <div className="flex gap-1 mr-1">
                      <div className="w-2 h-4 rounded-full bg-gray-400"></div>
                      <div className="w-2 h-4 rounded-full bg-gray-400"></div>
                    </div>
                  )}
                  <span className={`text-3xl tracking-tight ${logo.weight}`}>{logo.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-20 relative">
          <h2 ref={titleRef} className="text-4xl md:text-5xl lg:text-[56px] font-bold tracking-tight text-gray-900 leading-[1.1]">
            How Opygen Automates <br className="hidden md:block"/> and Organizes Your Growth
          </h2>
          {/* Pill Badge matching the 'FLOW' badge from the image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-12 md:mt-0 md:-translate-y-8">
            <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#83D334] text-white text-[11px] font-extrabold tracking-wider shadow-lg shadow-[#83D334]/30 -rotate-3 z-10">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse mr-1.5"></span>
              DIGITAL OXYGEN
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="feature-card flex flex-col bg-[#F9FAFB] rounded-[32px] p-8 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-all duration-500 group border border-gray-100/50"
            >
              <div className="mb-5 text-[17px] font-semibold text-gray-900">
                {service.num}
              </div>
              
              <h3 className="text-[22px] font-bold text-gray-900 mb-3 leading-snug">
                {service.title}
              </h3>
              
              <p className="text-gray-500 text-[15px] leading-relaxed mb-10 min-h-[60px]">
                {service.desc}
              </p>
              
              <div className="mt-auto h-[240px] rounded-[24px] bg-gradient-to-b from-white to-gray-50/50 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] border border-gray-100 flex items-center justify-center relative overflow-hidden">
                {service.graphic}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
