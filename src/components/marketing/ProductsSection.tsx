"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight, Bell, Zap, Layers, Wind, Target } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { gsap } from "gsap";

const products = [
  {
    name: "Cleaning CRM",
    slug: "cleaningcrm",
    status: "live",
    icon: Wind,
    accent: "#1A7A5E",
    description: "The primary module for residential and commercial cleaning squads. Automate team sync and recurring schedules.",
    features: ["Job dispatching", "Recurring bookings", "GPS tracking", "Instant invoicing"],
  },
  {
    name: "Maintenance CRM",
    slug: null,
    status: "soon",
    icon: Zap,
    accent: "#C45E10",
    description: "Work order flow and technician assignments for property maintenance. Control the chaos of facility management.",
    features: ["Work order flow", "Technician portal", "Asset history", "Preventive alerts"],
  },
  {
    name: "Landscaping CRM",
    slug: null,
    status: "soon",
    icon: Layers,
    accent: "#3A7A1A",
    description: "Route optimization and seasonal planning for lawn care. Engineered for high-volume terrain management.",
    features: ["Route optimization", "Crew management", "Equipment logs", "Seasonal planning"],
  },
];

export default function ProductsSection() {
  const gridRef = useRef(null);

  // GSAP: Background grid movement on mouse move
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 20;
      const yPos = (clientY / window.innerHeight - 0.5) * 20;

      gsap.to(".blueprint-grid", {
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
    <section id="products" className="relative py-32 bg-white overflow-hidden">
      
      {/* GSAP Managed Background Grid */}
      <div 
        className="blueprint-grid absolute inset-0 pointer-events-none opacity-[0.3]"
        style={{
          backgroundImage: `linear-gradient(#F0F0F0 1px, transparent 1px), linear-gradient(90deg, #F0F0F0 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          width: '110%',
          height: '110%',
          top: '-5%',
          left: '-5%'
        }}
      />

      <div className="container relative z-10 px-6 mx-auto">
        
        {/* Header with Framer Motion Entrance */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "circOut" }}
          className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-20"
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F5F5F5] border border-[#E8E8E8] mb-6">
              <Target className="size-3 text-[#0A0A0A]" />
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#6B6B6B] font-black">Vertical Deployment</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-[#0A0A0A] leading-[0.9]">
              CORE <br />
              <span className="text-[#ADADAD]">SOLUTIONS.</span>
            </h2>
          </div>
          <p className="max-w-[280px] text-xs font-bold uppercase tracking-widest text-[#6B6B6B] leading-loose border-l-2 border-[#0A0A0A] pl-6">
            Standardizing service operations through industry-specific logic layers.
          </p>
        </motion.div>

        {/* Product Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#E8E8E8] border border-[#E8E8E8]">
          {products.map((product, i) => {
            const Icon = product.icon;
            const isLive = product.status === "live";

            return (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={cn(
                  "group relative bg-white p-10 md:p-14 flex flex-col min-h-[580px] overflow-hidden"
                )}
              >
                {/* GSAP Number Reveal on Hover */}
                <span className="absolute top-10 right-10 text-6xl font-black text-[#F5F5F5] group-hover:text-[#0A0A0A]/5 transition-colors duration-500">
                  0{i + 1}
                </span>

                <div className="relative z-10 flex flex-col h-full">
                  {/* Framer Motion Icon Hover */}
                  <motion.div 
                    whileHover={{ rotate: -10, scale: 1.1 }}
                    className="size-16 flex items-center justify-center mb-12 border shadow-sm"
                    style={{ borderColor: `${product.accent}30`, backgroundColor: `${product.accent}05` }}
                  >
                    <Icon className="size-7" style={{ color: product.accent }} />
                  </motion.div>

                  <div className="mb-auto">
                    <h3 className="text-2xl font-bold text-[#0A0A0A] tracking-tight mb-4 flex items-center gap-2">
                      {product.name}
                      {isLive && <span className="size-1.5 rounded-full bg-green-500 animate-pulse" />}
                    </h3>
                    <p className="text-[#6B6B6B] text-sm leading-relaxed mb-10">
                      {product.description}
                    </p>

                    <div className="space-y-3 mb-12 border-l-2 pl-6" style={{ borderColor: isLive ? product.accent : '#E8E8E8' }}>
                      {product.features.map((feat, idx) => (
                        <motion.div 
                          key={feat}
                          whileHover={{ x: 5 }}
                          className="text-[10px] uppercase tracking-[0.15em] font-bold text-[#ADADAD] hover:text-[#0A0A0A] cursor-default transition-colors"
                        >
                          {feat}
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8">
                    {isLive ? (
                      <Button 
                        asChild 
                        className="w-full h-14 bg-[#0A0A0A] text-white hover:bg-[#1A1A1A] rounded-none font-bold uppercase tracking-widest text-[10px]"
                      >
                        <Link href={`/${product.slug}`} className="flex items-center justify-center gap-2">
                          Initialize System
                          <motion.div
                            animate={{ x: [0, 5, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                          >
                            <ArrowRight className="size-4" />
                          </motion.div>
                        </Link>
                      </Button>
                    ) : (
                      <Button 
                        variant="outline" 
                        className="w-full h-14 border-[#E8E8E8] text-[#ADADAD] rounded-none font-bold uppercase tracking-widest text-[10px] opacity-50"
                      >
                        <Bell className="size-4 mr-2" />
                        Queue Deployment
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}