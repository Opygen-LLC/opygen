"use client";

import Navbar from "@/src/components/marketing/Navbar";
import Footer from "@/src/components/marketing/Footer";
import { CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const detailedServices = [
  {
    title: "Website Development",
    slug: "website-development",
    badge: "Digital Storefronts",
    desc: "Modern websites built to convert visitors into leads and booked calls. We combine stunning aesthetics with high-performance engineering to create digital storefronts that rank well on search engines and drive real business results.",
    features: [
      "Custom Business Websites", "High-Conversion Landing Pages", "Booking & Scheduling Pages",
      "Advanced SEO Architecture", "Lightning-Fast Frontend", "Flawless Mobile Design"
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    color: "text-blue-500",
    bg: "bg-blue-500",
    glow: "shadow-blue-500/20"
  },
  {
    title: "App Development",
    slug: "app-development",
    badge: "Custom Solutions",
    desc: "Custom web and mobile apps designed to streamline your business operations and provide seamless experiences for your clients. We build scalable software that grows with you.",
    features: [
      "Secure Client Portals", "Powerful Admin Dashboards", "Custom Booking Apps",
      "Internal Operational Tools", "Bespoke CRM Systems", "Native-feel Mobile Interfaces"
    ],
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&q=80",
    color: "text-purple-500",
    bg: "bg-purple-500",
    glow: "shadow-purple-500/20"
  },
  {
    title: "Digital Marketing",
    slug: "digital-marketing",
    badge: "Growth Engine",
    desc: "Data-driven marketing systems designed to bring qualified leads and aggressively improve conversions. We build comprehensive lead funnels that capture attention and turn prospects into paying customers.",
    features: [
      "Meta (Facebook/IG) Ads", "Google Search & Display Ads", "Optimized Landing Pages",
      "Automated Lead Funnels", "Strategic Content Planning", "Advanced Conversion Tracking"
    ],
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48?w=1200&q=80",
    color: "text-orange-500",
    bg: "bg-orange-500",
    glow: "shadow-orange-500/20"
  },
  {
    title: "Automation & CRM",
    slug: "automation-crm",
    badge: "Operational Efficiency",
    desc: "Smart automations that save hours of time, eliminate manual data entry, and keep your business operations perfectly organized. We implement systems that handle the heavy lifting.",
    features: [
      "Instant Lead Follow-ups", "Automated Appointment Reminders", "Full CRM Implementation",
      "Custom Workflow Automation", "Seamless Payment Flows", "Staff & Client Syncing"
    ],
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80",
    color: "text-green-500",
    bg: "bg-green-500",
    glow: "shadow-green-500/20"
  },
  {
    title: "SaaS Development",
    slug: "saas-development",
    badge: "Product Engineering",
    desc: "We partner with visionary founders to design and build scalable SaaS products from initial idea to MVP, launch, and continuous growth. Focus on your market, we handle the tech.",
    features: [
      "Comprehensive Product Strategy", "Rapid MVP Development", "Robust Subscription Systems",
      "Intuitive Dashboard Design", "Complex User Role Management", "Secure Admin Panels"
    ],
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&q=80",
    color: "text-rose-500",
    bg: "bg-rose-500",
    glow: "shadow-rose-500/20"
  }
];

const ServiceSection = ({ service, index }: { service: any, index: number }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3]);
  const isEven = index % 2 === 0;

  return (
    <section 
      ref={ref}
      id={service.slug}
      className="relative flex items-center py-12 lg:py-16 overflow-hidden"
    >
      {/* Background Glow */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[150px] opacity-10 pointer-events-none ${service.bg}`} />
      
      <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
        <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16 lg:gap-24`}>
          
          {/* Text Content */}
          <motion.div 
            style={{ opacity }}
            className="w-full lg:w-1/2 flex flex-col justify-center"
          >
            <div className={`inline-flex items-center px-4 py-1.5 rounded-full bg-white border border-gray-100 shadow-sm ${service.color} text-[11px] font-bold tracking-widest uppercase mb-8 w-max`}>
              {service.badge}
            </div>
            
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
              {service.title}
            </h2>
            
            <p className="text-lg text-gray-500 leading-relaxed font-medium mb-10 max-w-xl">
              {service.desc}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-6 mb-12">
              {service.features.map((feature: string, idx: number) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className={`mt-0.5 flex-shrink-0 flex items-center justify-center size-5 rounded-full ${service.bg}/10`}>
                    <CheckCircle2 className={`size-3.5 ${service.color}`} />
                  </div>
                  <span className="text-[15px] font-semibold text-gray-800 leading-snug">{feature}</span>
                </div>
              ))}
            </div>

            <Link 
              href="/#contact" 
              className={`inline-flex items-center justify-center gap-3 bg-black text-white px-8 py-4.5 rounded-full text-[15px] font-bold transition-all hover:scale-105 shadow-xl ${service.glow} hover:shadow-2xl w-max group`}
            >
              Start this project
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Image Content with Parallax */}
          <div className="w-full lg:w-1/2 relative">
            <motion.div 
              style={{ y }}
              className={`relative aspect-[16/9] lg:aspect-[3/2] w-full rounded-[2rem] overflow-hidden shadow-2xl ${service.glow}`}
            >
              <div className="absolute inset-0 bg-gray-100" />
              <Image 
                src={service.image} 
                alt={service.title} 
                fill 
                className="object-cover scale-[1.1]" 
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white font-space-grotesk overflow-hidden pt-32 lg:pt-48">
        
        {/* Services Hero */}
        <section className="relative px-6 lg:px-8 max-w-[1200px] mx-auto mb-12 lg:mb-16 text-center">
          <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8 inline-flex items-center gap-2 px-5 py-2 rounded-full border border-gray-200 bg-white shadow-md text-gray-900 text-[14px] font-bold tracking-wide"
          >
              <Sparkles className="size-4 text-blue-500" />
              Comprehensive Expertise
          </motion.div>
          
          <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-8 leading-[1.05]"
          >
              Digital solutions <br className="hidden md:block" />
              for <span className="text-blue-600 font-serif italic font-normal">rapid growth</span>
          </motion.h1>

          <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-500 leading-relaxed font-medium max-w-3xl mx-auto"
          >
              Explore our suite of services designed to transform your operations, elevate your brand, and accelerate your digital success.
          </motion.p>
        </section>

        {/* Detailed Services Sections */}
        <div className="flex flex-col">
          {detailedServices.map((service, index) => (
            <ServiceSection key={service.slug} service={service} index={index} />
          ))}
        </div>

      </main>
      <Footer />
    </>
  );
}
