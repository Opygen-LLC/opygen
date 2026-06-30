"use client";

import Link from "next/link";
import { ArrowUpRight, Star } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const carouselImages = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&q=80",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&q=80",
  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&q=80",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&q=80",
  "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&q=80",
];

export default function HeroSection() {
  return (
    <section id="home" className="relative flex flex-col items-center justify-start overflow-hidden bg-white text-black pt-32 pb-20 font-space-grotesk min-h-screen">
      
      {/* Soft gradient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-100/50 blur-[100px] rounded-full" />
        <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] bg-orange-100/40 blur-[100px] rounded-full" />
      </div>

      <div className="relative z-20 flex w-full max-w-[1200px] mx-auto flex-col items-center justify-center px-6 text-center">
        
        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 text-[clamp(2.5rem,6vw,5.5rem)] font-bold leading-[1.05] tracking-tight text-[#111111]"
        >
          Building bold brands <br />
          with <span className="font-serif italic font-normal pr-2">thoughtful design</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12 max-w-2xl text-[clamp(0.95rem,1.5vw,1.15rem)] text-gray-500 leading-relaxed font-medium"
        >
          At Opygen, we help small startups tackle the world's biggest challenges with tailored solutions, guiding you from strategy to success in a competitive market.
        </motion.p>

        {/* CTA and Trusted Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center gap-8 mb-24"
        >
          {/* CTA Button */}
          <Link
            href="#contact"
            className="group flex items-center gap-3 rounded-full bg-[#111111] pl-6 pr-2 py-2 text-sm font-bold text-white transition-all hover:scale-105 shadow-xl shadow-black/10"
          >
            Book an intro call
            <div className="flex size-8 items-center justify-center rounded-full bg-white text-black transition-transform group-hover:rotate-45">
              <ArrowUpRight className="size-4" />
            </div>
          </Link>

          {/* Trusted Badge */}
          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="relative size-10 rounded-full border-[3px] border-white overflow-hidden bg-gray-200">
                  <Image src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Client" fill className="object-cover" unoptimized />
                </div>
              ))}
            </div>
            <div className="flex flex-col items-start gap-1">
              <div className="flex text-[#F97316]">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} fill="currentColor" className="size-[14px]" />
                ))}
              </div>
              <span className="text-[13px] font-semibold text-gray-500">Trusted by 1000+ clients</span>
            </div>
          </div>
        </motion.div>

        {/* 3D Curved Carousel */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative w-full h-[350px] flex justify-center items-center overflow-hidden [perspective:1200px]"
        >
          {/* Fading edges to blend seamlessly into white */}
          <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-white via-transparent to-white w-full"></div>
          
          <div className="relative w-[240px] h-[320px] [transform-style:preserve-3d] animate-carousel">
            {carouselImages.map((src, i) => {
              // Calculate rotation. 8 images = 45 degrees each
              const rotateY = i * 45;
              // TranslateZ pushes images out to form the circle. Larger Z = wider circle
              const translateZ = 450; 
              return (
                <div 
                  key={i} 
                  className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl bg-gray-100 border-4 border-white"
                  style={{
                    transform: `rotateY(${rotateY}deg) translateZ(${translateZ}px)`
                  }}
                >
                  <Image src={src} alt={`Work ${i}`} fill className="object-cover" unoptimized />
                </div>
              );
            })}
          </div>
        </motion.div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes carousel-spin {
          from { transform: rotateY(0deg); }
          to { transform: rotateY(-360deg); }
        }
        .animate-carousel {
          animation: carousel-spin 35s infinite linear;
        }
      `}} />
    </section>
  );
}
