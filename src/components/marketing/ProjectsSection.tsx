"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Grid, Monitor, Smartphone, Megaphone, Cloud } from "lucide-react";

const categories = [
  { name: "All", icon: Grid },
  { name: "Website", icon: Monitor },
  { name: "App", icon: Smartphone },
  { name: "Marketing", icon: Megaphone },
  { name: "SaaS", icon: Cloud },
];

const projects = [
  {
    id: 1,
    title: "E-Commerce Replatforming",
    description: "A complete overhaul of a legacy e-commerce system resulting in a 40% increase in conversions.",
    category: "Website",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    slug: "ecommerce-replatforming"
  },
  {
    id: 2,
    title: "Fintech Mobile Application",
    description: "A sleek, secure mobile banking app designed to streamline personal finance management.",
    category: "App",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    slug: "fintech-app"
  },
  {
    id: 3,
    title: "Global Brand Campaign",
    description: "A comprehensive digital marketing campaign that reached over 5 million target users.",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=800&q=80",
    slug: "global-brand-campaign"
  },
  {
    id: 4,
    title: "AI-Powered CRM Dashboard",
    description: "An intuitive SaaS platform leveraging AI to predict customer churn and automate outreach.",
    category: "SaaS",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    slug: "ai-crm-dashboard"
  },
  {
    id: 5,
    title: "Healthcare Portal Redesign",
    description: "Modernizing patient scheduling and telemedicine access with a robust web application.",
    category: "Website",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    slug: "healthcare-portal"
  },
  {
    id: 6,
    title: "Fitness Tracking Ecosystem",
    description: "A seamless mobile experience connecting wearable devices to personalized workout plans.",
    category: "App",
    image: "https://images.unsplash.com/photo-1526406915894-7bcd65f60845?w=800&q=80",
    slug: "fitness-tracking"
  },
];

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  return (
    <section id="projects" className="py-24 lg:py-32 bg-[#FAFAFA] text-black overflow-hidden font-space-grotesk border-b border-dashed border-gray-300">
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
            Get Unlimited Benefits When <br className="hidden md:block" /> Creating With Opygen
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto font-medium"
          >
            Our team leverages advanced technologies and design systems to automate repetitive tasks, freeing up your team to focus on high-value work.
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
          <div className="flex items-center justify-between w-full max-w-5xl p-2 bg-white rounded-2xl shadow-[0_2px_15px_rgba(0,0,0,0.03)] border border-gray-100 overflow-x-auto hide-scrollbar gap-2 relative">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.name;
              return (
                <button
                  key={cat.name}
                  onClick={() => setActiveCategory(cat.name)}
                  className={`relative flex-1 min-w-[100px] md:min-w-[140px] flex flex-col items-center gap-2.5 py-4 px-2 rounded-xl transition-colors ${
                    isActive ? "text-gray-900" : "text-gray-400 hover:text-gray-600 hover:bg-gray-50/50"
                  }`}
                >
                  <Icon className="w-5 h-5 md:w-6 md:h-6" strokeWidth={isActive ? 2.5 : 2} />
                  <span className={`text-[12px] md:text-[14px] font-semibold tracking-wide ${isActive ? "" : "font-medium"}`}>
                    {cat.name}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="activeProjectTab"
                      className="absolute bottom-0 left-1/4 right-1/4 h-[3px] bg-purple-600 rounded-t-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
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
                initial={{ opacity: 0, scale: 0.9, filter: "blur(5px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.9, filter: "blur(5px)" }}
                transition={{ duration: 0.4, type: "spring", bounce: 0.1 }}
                className="group relative"
              >
                <Link href={`/projects/${project.slug}`} className="block h-full bg-white rounded-[2rem] p-4 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300">
                  
                  {/* Image Container */}
                  <div className="relative w-full aspect-[4/3] rounded-[1.5rem] overflow-hidden mb-6 bg-gray-100">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      unoptimized
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-white/95 backdrop-blur-md text-black px-6 py-3 rounded-full font-bold text-[13px] tracking-wide transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-xl flex items-center gap-2">
                        View Project
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="px-3 pb-4">
                    <div className="inline-block px-3 py-1 bg-[#F5F3FF] text-[#7C3AED] text-[11px] font-bold uppercase tracking-widest rounded-md mb-4">
                      {project.category}
                    </div>
                    <h3 className="text-xl md:text-[22px] font-bold text-gray-900 mb-3 group-hover:text-[#7C3AED] transition-colors leading-snug tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-gray-500 text-[14px] md:text-[15px] leading-relaxed font-medium">
                      {project.description}
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
