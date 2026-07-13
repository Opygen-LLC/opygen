"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Grid, Monitor, Smartphone, Megaphone, Cloud } from "lucide-react";
import { marketingButton } from "@/lib/marketing-button";
import { projects } from "@/src/data/projects";

const categories = [
  { name: "All", icon: Grid },
  { name: "Website", icon: Monitor },
  { name: "App", icon: Smartphone },
  { name: "Marketing", icon: Megaphone },
  { name: "SaaS", icon: Cloud },
];

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter(
    (project) => activeCategory === "All" || project.project_type === activeCategory
  );

  return (
    <section id="projects" className="py-24 lg:py-32 bg-[#FAFAFA] text-black overflow-hidden font-space-grotesk">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 inline-block"
          >
            <span className="text-purple-600 font-bold text-sm tracking-wide uppercase bg-purple-50 px-4 py-1.5 rounded-full border border-purple-100">
              Our Portfolio
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-[56px] font-bold tracking-tight text-gray-900 mb-6 leading-[1.1]"
          >
            Work made to earn attention <br className="hidden md:block" /> and keep it.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto font-medium"
          >
            A selection of digital products, campaigns, and brand experiences built to create real momentum.
          </motion.p>
        </div>

        {/* Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex justify-center mb-16 px-4"
        >
          <div className="flex items-center w-full max-w-max mx-auto p-1.5 md:p-2 bg-white rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 overflow-x-auto hide-scrollbar gap-1 relative">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.name;
              return (
                <button
                  key={cat.name}
                  onClick={() => setActiveCategory(cat.name)}
                  className={`relative flex items-center gap-2 py-2.5 px-5 md:py-3 md:px-7 rounded-full transition-colors duration-300 whitespace-nowrap outline-none ${
                    isActive ? "text-white" : "text-gray-500 hover:text-gray-900"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeProjectTabBg"
                      className="absolute inset-0 bg-[#1D745C] rounded-full"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2.5">
                    <Icon className="w-4 h-4 md:w-5 md:h-5" strokeWidth={isActive ? 2.5 : 2} />
                    <span className="text-[14px] md:text-[15px] font-bold tracking-wide">
                      {cat.name}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                data-marketing-card
                className="group relative bg-white rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 cursor-pointer"
              >
                <Link href={`/projects/${project.slug}`} className="block h-full p-4 hover:-translate-y-1 transition-all duration-300">
                  <div className="relative w-full aspect-[4/3] rounded-[1.5rem] overflow-hidden mb-6 bg-gray-100">
                    <Image
                      src={project.image}
                      alt={project.project_name}
                      fill
                      className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                      unoptimized
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className={marketingButton("pointer-events-none translate-y-4 group-hover:translate-y-0")}>
                        View Project
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="px-3 pb-4">
                    <div className="inline-block px-3 py-1 bg-[#1D745C]/10 text-[#1D745C] text-[11px] font-bold uppercase tracking-widest rounded-md mb-4">
                      {project.project_type}
                    </div>
                    <h3 className="text-xl md:text-[22px] font-bold text-gray-900 mb-3 group-hover:text-[#1D745C] transition-colors leading-snug tracking-tight">
                      {project.project_name}
                    </h3>
                    <p className="text-gray-500 text-[14px] md:text-[15px] leading-relaxed font-medium line-clamp-3">
                      {project.project_description || project.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
