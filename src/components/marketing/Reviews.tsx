"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, Reorder } from "framer-motion";

const OpygenLogo = ({ dark = false }: { dark?: boolean }) => (
  <div className={`flex items-center gap-1.5 font-bold text-2xl tracking-tight select-none pointer-events-none ${dark ? 'text-white' : 'text-gray-900'}`}>
    opygen
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="mb-2">
      <path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10L12 0Z" />
    </svg>
  </div>
);

const initialReviews = [
  {
    id: "r1",
    type: "large-light",
    quote: "Working with this team has been a game-changer for our business. They helped us generate quality leads consistently, and our revenue has doubled in just six months.",
    name: "Guillermo Rauch",
    role: "CEO / Vercel",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80",
  },
  {
    id: "r2",
    type: "normal",
    quote: "This agency transformed our digital presence. Within months, leads doubled, sales increased, and we finally felt confident about our marketing.",
    name: "Sarah M",
    role: "E-commerce Owner",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80",
  },
  {
    id: "r3",
    type: "normal",
    quote: "We saw measurable growth after their campaigns. The team knows exactly how to target audiences and maximize every marketing dollar spent.",
    name: "Priya K",
    role: "Boutique Owner",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80",
  },
  {
    id: "r4",
    type: "normal",
    quote: "Creative, professional, and results-driven. They helped us build a recognizable brand and achieve consistent conversions across multiple digital channels.",
    name: "David L",
    role: "Real Estate Consultant",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&q=80",
  },
  {
    id: "r5",
    type: "normal",
    quote: "From SEO to paid ads, everything exceeded expectations. Their expertise gave us clarity, results, and a strong foundation for sustainable growth.",
    name: "Emily W",
    role: "Fitness Coach",
    avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=80&q=80",
  },
  {
    id: "r6",
    type: "normal",
    quote: "The team brought fresh ideas and flawless execution. Our brand visibility grew faster than expected, and customer engagement reached record highs.",
    name: "James R",
    role: "SaaS Founder",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&q=80",
  },
  {
    id: "r7",
    type: "large-dark",
    quote: "\"I've worked with a few agencies before, but none were this transparent and proactive. Their strategy sessions alone gave us more clarity than we've had in years.\"",
    name: "David L",
    role: "CEO / Beskon",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80",
  }
];

const ReviewCardInner = ({ review }: { review: any }) => {
  const isLargeLight = review.type === "large-light";
  const isLargeDark = review.type === "large-dark";
  const isNormal = review.type === "normal";

  return (
    <div className={`relative w-full h-full rounded-[2rem] overflow-hidden group flex flex-col justify-between ${
        isLargeLight ? 'bg-white p-8 md:p-10 shadow-[0_15px_60px_rgba(255,0,0,0.06)] border border-red-50/50' : 
        isLargeDark ? 'bg-[#F94527] p-8 md:p-10 shadow-[0_15px_40px_rgba(249,69,39,0.3)]' : 
        'bg-white p-8 border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)]'
    }`}>
      {isLargeLight && (
         <div className="absolute inset-0 bg-red-100/50 rounded-[2rem] blur-[60px] -z-10 scale-90 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
      )}

      {isLargeLight && <OpygenLogo />}
      {isLargeDark && <OpygenLogo dark />}

      <div className={`pointer-events-none ${isLargeLight || isLargeDark ? "mt-12" : "flex-grow"}`}>
        <p className={`
          ${isLargeLight ? "text-2xl md:text-[28px] font-bold text-gray-900 leading-[1.3] tracking-tight" : ""}
          ${isLargeDark ? "text-2xl md:text-[28px] font-bold text-white leading-[1.3] tracking-tight" : ""}
          ${isNormal ? "text-[15px] font-medium text-gray-600 leading-relaxed mb-10" : ""}
        `}>
          {review.quote}
        </p>
      </div>

      <div className={`flex items-center justify-between pointer-events-none mt-auto ${isLargeLight || isLargeDark ? "" : "pt-4"}`}>
        <div>
          <p className={`text-[15px] font-bold ${isLargeDark ? "text-white" : "text-gray-900"}`}>{review.name}</p>
          <p className={`text-[13px] font-medium ${isLargeDark ? "text-white/80" : "text-gray-500"}`}>{review.role}</p>
        </div>
        
        <div className="relative shrink-0">
          <div className={`absolute inset-0 rounded-full blur-[6px] opacity-70 ${isLargeDark ? 'bg-white/40' : 'bg-gradient-to-tr from-[#FF3B30] to-[#FF9500]'}`}></div>
          <div className={`relative w-12 h-12 rounded-full p-[2px] ${isLargeDark ? 'bg-white/40' : 'bg-gradient-to-tr from-[#FF3B30] to-[#FF9500]'}`}>
             <div className="w-full h-full rounded-full border-[2px] border-white overflow-hidden bg-white relative">
               <Image 
                 src={review.avatar} 
                 alt={review.name} 
                 fill
                 sizes="48px"
                 className="object-cover" 
                 unoptimized 
               />
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Reviews() {
  const [cards, setCards] = useState(initialReviews);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-scroll logic
  useEffect(() => {
    let animationFrameId: number;
    let lastTime = performance.now();
    let direction = 1; 

    const animateScroll = (time: number) => {
      const deltaTime = time - lastTime;
      lastTime = time;

      if (!containerRef.current || isHovered) {
        animationFrameId = requestAnimationFrame(animateScroll);
        return;
      }
      
      const container = containerRef.current;
      const speed = 0.05; // Adjust speed here
      
      container.scrollLeft += direction * speed * deltaTime;
      
      // Ping-pong effect
      if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 1) {
        direction = -1;
      } else if (container.scrollLeft <= 0) {
        direction = 1;
      }
      
      animationFrameId = requestAnimationFrame(animateScroll);
    };

    animationFrameId = requestAnimationFrame(animateScroll);
    
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered]);

  return (
    <section id="reviews" className="py-24 lg:py-32 bg-white font-space-grotesk overflow-hidden relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="mb-20 text-center flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 inline-flex items-center px-4 py-1.5 rounded-full border border-red-200 bg-white text-red-500 text-[13px] font-bold tracking-wide shadow-sm"
          >
            Testimonial
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl lg:text-[56px] font-bold tracking-tight text-gray-900 leading-[1.1]"
          >
            Why everyone&apos;s talking <br className="hidden sm:block" /> about our service
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[15px] font-bold text-gray-400 mt-6 tracking-widest uppercase"
          >
            Drag to rearrange cards
          </motion.p>
        </div>

        {/* 
          True Drag & Drop Reorder Slider (2 Rows)
          Uses grid-rows-2 with grid-flow-col to create a beautiful horizontal layout.
        */}
        <div 
          className="w-full relative -mx-4 px-4 sm:mx-0 sm:px-0"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => setIsHovered(false)}
        >
          <Reorder.Group 
            axis="x" 
            values={cards} 
            onReorder={setCards} 
            as="div"
            ref={containerRef}
            className="grid grid-rows-2 grid-flow-col gap-6 auto-cols-[300px] sm:auto-cols-[340px] md:auto-cols-[400px] auto-rows-[260px] overflow-x-auto pb-12 pt-4 px-4 sm:px-8"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {cards.map((review) => {
              const isLarge = review.type.includes("large");
              return (
                <Reorder.Item 
                  key={review.id} 
                  value={review} 
                  as="div"
                  className={`w-full h-full cursor-grab active:cursor-grabbing ${isLarge ? "row-span-2" : "row-span-1"}`}
                  whileDrag={{ scale: 1.03, zIndex: 50, rotate: -2 }}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                >
                  <ReviewCardInner review={review} />
                </Reorder.Item>
              );
            })}
          </Reorder.Group>
        </div>

      </div>
    </section>
  );
}
