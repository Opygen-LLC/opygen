"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Terminal, Cpu } from "lucide-react";
import { Button } from "../ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";

export default function HeroSection() {
  const [text, setText] = useState("");
  const fullText = "SERVICE GROWTH.";
  const [index, setIndex] = useState(0);
  const gridRef = useRef(null);
  const containerRef = useRef(null);

  // 1. Typewriter Logic (Framer-compatible)
  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, 70);
      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  // 2. GSAP: Interactive Background Grid & Parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 30;
      const yPos = (clientY / window.innerHeight - 0.5) * 30;

      gsap.to(".hero-grid", {
        x: xPos,
        y: yPos,
        duration: 2,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden bg-white pt-24 pb-12 px-4"
    >
      
      {/* GSAP Managed Grid: Moving slightly with mouse */}
      <div 
        className="hero-grid absolute inset-0 pointer-events-none opacity-[0.2]"
        style={{
          backgroundImage: `linear-gradient(#E8E8E8 1px, transparent 1px), linear-gradient(90deg, #E8E8E8 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
          width: '110%',
          height: '110%',
          top: '-5%',
          left: '-5%',
          maskImage: 'radial-gradient(circle at center, black, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black, transparent 70%)'
        }}
      />

      <div className="relative z-10 w-full max-w-5xl flex flex-col items-center">
        
        {/* Top Badge: Framer Motion Entrance */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "circOut" }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 bg-[#F5F5F5] border border-[#E8E8E8] px-4 py-2 text-[10px] font-bold tracking-[0.2em] uppercase text-[#6B6B6B]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <Cpu className="size-3 animate-spin-slow" />
            Core Status: Optimal
          </div>
        </motion.div>

        {/* Headline: Staggered Entrance */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center text-[#0A0A0A] text-[clamp(2.2rem,9vw,5.5rem)] font-bold leading-[0.9] tracking-[-0.05em] mb-8"
        >
          THE ENGINE FOR <br />
          <span className="text-[#6B6B6B]">
            {text}
            <motion.span 
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="inline-block w-[3px] h-[0.8em] bg-[#0A0A0A] ml-1 align-middle"
            />
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-center text-[#6B6B6B] text-sm md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed px-2 font-medium"
        >
          Opygen is the operating system for cleaning and service teams. 
          Replace manual chaos with a high-performance system for scheduling, 
          payments, and team management.
        </motion.p>

        {/* Action Buttons: GSAP Hover Effects */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto px-4"
        >
          <Button 
            asChild 
            className="w-full sm:w-auto bg-[#0A0A0A] text-white hover:bg-black rounded-none h-14 px-10 text-[11px] font-bold uppercase tracking-[0.2em] relative overflow-hidden group"
          >
            <Link href="/get-started">
              <span className="relative z-10 flex items-center">
                Initialize System
                <ArrowRight className="ml-2 size-4 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </Link>
          </Button>
          
          <Button 
            asChild 
            variant="outline" 
            className="w-full sm:w-auto border-[#E8E8E8] rounded-none h-14 px-10 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-[#F9F9F9] transition-all"
          >
            <Link href="/demo">Request System Demo</Link>
          </Button>
        </motion.div>

        {/* Feature Grid: Framer Motion Staggered Children */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="mt-24 w-full grid grid-cols-2 md:grid-cols-4 gap-px bg-[#E8E8E8] border border-[#E8E8E8]"
        >
          {[
            { label: "Stability", val: "99.9%" },
            { label: "Automation", val: "Active" },
            { label: "Onboarding", val: "15 Min" },
            { label: "Security", val: "AES-256" },
          ].map((item, i) => (
            <motion.div 
              key={i} 
              whileHover={{ backgroundColor: "#F9F9F9" }}
              className="bg-white p-6 md:p-10 flex flex-col items-center justify-center group"
            >
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 + (i * 0.1) }}
                className="text-[9px] uppercase tracking-[0.2em] text-[#ADADAD] group-hover:text-[#6B6B6B] mb-2 font-black transition-colors"
              >
                {item.label}
              </motion.p>
              <motion.p 
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ delay: 1.8 + (i * 0.1) }}
                className="text-lg md:text-xl font-bold text-[#0A0A0A]"
              >
                {item.val}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style jsx global>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </section>
  );
}