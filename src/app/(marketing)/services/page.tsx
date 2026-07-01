"use client";

import Navbar from "@/src/components/marketing/Navbar";
import Footer from "@/src/components/marketing/Footer";
import { CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const detailedServices = [
  {
    title: "Website Development",
    slug: "website-development",
    badge: "Digital Storefronts",
    desc: "Modern websites built to convert visitors into leads and booked calls. We combine stunning aesthetics with high-performance engineering to create digital storefronts that rank well on search engines and drive real business results. Every site is optimized for speed, accessibility, and mobile responsiveness.",
    features: [
      "Custom Business Websites", "High-Conversion Landing Pages", "Booking & Scheduling Pages",
      "Advanced SEO Architecture", "Lightning-Fast Frontend", "Flawless Mobile Design"
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    title: "App Development",
    slug: "app-development",
    badge: "Custom Solutions",
    desc: "Custom web and mobile apps designed to streamline your business operations and provide seamless experiences for your clients. From internal dashboards that manage your workflow to client portals that elevate your service delivery, we build scalable software that grows with you.",
    features: [
      "Secure Client Portals", "Powerful Admin Dashboards", "Custom Booking Apps",
      "Internal Operational Tools", "Bespoke CRM Systems", "Native-feel Mobile Interfaces"
    ],
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&q=80",
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
  {
    title: "Digital Marketing",
    slug: "digital-marketing",
    badge: "Growth Engine",
    desc: "Data-driven marketing systems designed to bring qualified leads and aggressively improve conversions. We don't just run ads; we build comprehensive lead funnels that capture attention, nurture prospects, and turn them into paying customers using proven strategies.",
    features: [
      "Meta (Facebook/IG) Ads", "Google Search & Display Ads", "Optimized Landing Pages",
      "Automated Lead Funnels", "Strategic Content Planning", "Advanced Conversion Tracking"
    ],
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48?w=1200&q=80",
    color: "text-orange-500",
    bg: "bg-orange-500/10",
  },
  {
    title: "Automation & CRM Systems",
    slug: "automation-crm",
    badge: "Operational Efficiency",
    desc: "Smart automations that save hours of time, eliminate manual data entry, and keep your business operations perfectly organized. We implement systems that handle the heavy lifting of follow-ups, scheduling, and client management so your team can focus on delivering great service.",
    features: [
      "Instant Lead Follow-ups", "Automated Appointment Reminders", "Full CRM Implementation",
      "Custom Workflow Automation", "Seamless Payment Flows", "Staff & Client Syncing"
    ],
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80",
    color: "text-green-500",
    bg: "bg-green-500/10",
  },
  {
    title: "SaaS Product Development",
    slug: "saas-development",
    badge: "Product Engineering",
    desc: "We partner with visionary founders to design and build scalable SaaS products from initial idea to MVP, launch, and continuous growth. Our team handles the entire technical architecture, allowing you to focus on market strategy and user acquisition.",
    features: [
      "Comprehensive Product Strategy", "Rapid MVP Development", "Robust Subscription Systems",
      "Intuitive Dashboard Design", "Complex User Role Management", "Secure Admin Panels"
    ],
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&q=80",
    color: "text-rose-500",
    bg: "bg-rose-500/10",
  }
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 lg:pt-40 pb-20 min-h-screen bg-white font-space-grotesk overflow-hidden">
        
        {/* Services Hero */}
        <section className="relative px-6 lg:px-8 max-w-[1200px] mx-auto mb-24 lg:mb-32 text-center">
          <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 bg-white text-gray-900 text-[13px] font-bold tracking-wide shadow-sm"
          >
              <Sparkles className="size-4 text-blue-500" />
              Our Expertise
          </motion.div>
          
          <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-8 leading-[1.1]"
          >
              Digital solutions built <br className="hidden md:block" />
              for <span className="text-blue-600 font-serif italic font-normal">measurable growth</span>
          </motion.h1>

          <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-500 leading-relaxed font-medium max-w-2xl mx-auto"
          >
              Explore our comprehensive suite of services designed to transform your business operations, elevate your brand, and accelerate your digital success.
          </motion.p>
        </section>

        {/* Detailed Services Sections */}
        <div className="flex flex-col gap-24 lg:gap-40">
          {detailedServices.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <section 
                key={service.slug} 
                id={service.slug}
                className="scroll-mt-32 px-6 lg:px-8 max-w-[1400px] mx-auto w-full"
              >
                <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}>
                  
                  {/* Image Column */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="w-full lg:w-1/2"
                  >
                    <div className="relative aspect-[4/3] w-full rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] group">
                      <Image 
                        src={service.image} 
                        alt={service.title} 
                        fill 
                        className="object-cover transition-transform duration-700 group-hover:scale-105" 
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500"></div>
                    </div>
                  </motion.div>

                  {/* Content Column */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                    className="w-full lg:w-1/2 flex flex-col justify-center"
                  >
                    <div className={`inline-flex items-center px-4 py-1.5 rounded-full ${service.bg} ${service.color} text-[12px] font-bold tracking-widest uppercase mb-6 w-max`}>
                      {service.badge}
                    </div>
                    
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                      {service.title}
                    </h2>
                    
                    <p className="text-lg text-gray-500 leading-relaxed font-medium mb-10">
                      {service.desc}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 mb-12">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className={`size-5 shrink-0 ${service.color} mt-0.5`} />
                          <span className="text-[15px] font-semibold text-gray-800">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link 
                        href="/#contact" 
                        className="inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-4 rounded-xl text-[15px] font-bold transition-all hover:bg-gray-800 hover:scale-105 hover:shadow-lg hover:shadow-black/20"
                      >
                        Book a Consultation
                        <ArrowRight className="size-4" />
                      </Link>
                    </div>
                  </motion.div>

                </div>
              </section>
            );
          })}
        </div>

      </main>
      <Footer />
    </>
  );
}
