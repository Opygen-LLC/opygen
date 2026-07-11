"use client";

import Navbar from "@/src/components/marketing/Navbar";
import Footer from "@/src/components/marketing/Footer";
import { projects } from "@/src/data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, CheckCircle2, Calendar, User, Briefcase, Sparkles } from "lucide-react";
import { useRef, use } from "react";

export default function ProjectDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const project = projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white font-space-grotesk overflow-hidden selection:bg-[#1D745C]/20">
        
        {/* Immersive Hero Section */}
        <section ref={heroRef} className="relative h-[90vh] min-h-[600px] w-full flex items-end pb-20 bg-[#050505] overflow-hidden">
          {/* Background Image with Parallax */}
          <motion.div 
            style={{ y, opacity }}
            className="absolute top-[-20%] left-0 w-full h-[140%]"
          >
            <Image 
              src={project.image}
              alt={project.project_name}
              fill
              className="object-cover"
              unoptimized
              priority
            />
            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          </motion.div>

          <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-8">
            <Link 
              href="/#projects" 
              className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-8 font-medium group"
            >
              <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
              Back to Portfolio
            </Link>
            
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="bg-[#1D745C] text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                {project.project_type}
              </span>
              <span className="bg-white/20 backdrop-blur-md border border-white/10 text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-widest">
                CASE STUDY
              </span>
            </div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.05] tracking-tight max-w-4xl"
            >
              {project.project_name}
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-gray-300 max-w-2xl font-medium leading-relaxed"
            >
              {project.project_description || project.description}
            </motion.p>
          </div>
        </section>

        {/* Project Meta Info - Glassmorphism Bar */}
        <section className="relative z-20 -mt-10 px-6 lg:px-8 max-w-[1400px] mx-auto">
          <div className="bg-white/80 backdrop-blur-xl border border-gray-100 shadow-[0_20px_40px_rgba(0,0,0,0.06)] rounded-3xl p-6 md:p-10 flex flex-col md:flex-row gap-8 justify-between items-start md:items-center">
            <div className="flex items-center gap-4">
              <div className="size-12 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100">
                <Briefcase className="size-5 text-gray-400" />
              </div>
              <div>
                <p className="text-[12px] font-bold text-gray-400 uppercase tracking-widest mb-1">Tech Stack</p>
                <p className="font-bold text-gray-900 text-lg">{project.tech_stack?.slice(0, 2).join(", ")}{project.tech_stack?.length > 2 ? '...' : ''}</p>
              </div>
            </div>
            
            <div className="hidden md:block w-px h-12 bg-gray-100"></div>
            
            <div className="flex items-center gap-4">
              <div className="size-12 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100">
                <Calendar className="size-5 text-gray-400" />
              </div>
              <div>
                <p className="text-[12px] font-bold text-gray-400 uppercase tracking-widest mb-1">Timeline</p>
                <p className="font-bold text-gray-900 text-lg">{project.duration}</p>
              </div>
            </div>

            {project.live_link && (
              <>
                <div className="hidden md:block w-px h-12 bg-gray-100"></div>

                <div className="flex items-center gap-4">
                  <a href={project.live_link} target="_blank" rel="noopener noreferrer" className="bg-[#1D745C] text-white px-6 py-3 rounded-full font-bold hover:scale-105 transition-transform shadow-[0_4px_20px_rgba(29,116,92,0.3)]">
                    Visit Live Site
                  </a>
                </div>
              </>
            )}
          </div>
        </section>

        {/* Content Section: Challenge & Solution */}
        <section className="py-24 lg:py-32 px-6 lg:px-8 max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* The Challenge */}
            <div className="flex flex-col gap-6">
              <div className="inline-flex items-center gap-2">
                <span className="size-2 rounded-full bg-rose-500 animate-pulse"></span>
                <h2 className="text-2xl font-bold text-gray-900 tracking-tight">The Challenge</h2>
              </div>
              <div className="text-[17px] text-gray-500 leading-relaxed font-medium space-y-4">
                {project.real_challenges?.map((challenge, idx) => (
                  <p key={idx} className="relative pl-4 border-l-2 border-rose-500/30">{challenge}</p>
                ))}
              </div>
            </div>

            {/* The Solution */}
            <div className="flex flex-col gap-6">
              <div className="inline-flex items-center gap-2">
                <span className="size-2 rounded-full bg-[#1D745C]"></span>
                <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Our Solution</h2>
              </div>
              <div className="text-[17px] text-gray-500 leading-relaxed font-medium space-y-4">
                {(project.solutions_implemented || project.technical_solutions)?.map((solution, idx) => (
                  <p key={idx} className="relative pl-4 border-l-2 border-[#1D745C]/30">{solution}</p>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* Parallax Gallery */}
        <section className="py-12 bg-gray-50 overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.gallery?.map((img, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  className={`relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl shadow-black/5 ${i % 2 !== 0 ? 'md:mt-16' : ''}`}
                >
                  <Image 
                    src={img} 
                    alt={`Gallery Image ${i + 1}`} 
                    fill 
                    className="object-cover hover:scale-105 transition-transform duration-700" 
                    unoptimized 
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Results & CTA */}
        <section className="py-24 lg:py-32 px-6 lg:px-8 max-w-[1400px] mx-auto">
          <div className="bg-[#1D745C] rounded-[3rem] p-8 md:p-16 lg:p-20 relative overflow-hidden shadow-2xl">
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white opacity-5 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
            
            <div className="relative z-10 flex flex-col lg:flex-row gap-16 items-center">
              <div className="w-full lg:w-1/2">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white text-[12px] font-bold tracking-widest uppercase mb-6">
                  <Sparkles className="size-4" />
                  Measurable Impact
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                  The Results
                </h2>
                <div className="flex flex-col gap-6">
                  {project.key_features?.map((result, idx) => (
                    <div key={idx} className="flex items-start gap-4 bg-white/10 p-5 rounded-2xl border border-white/10 backdrop-blur-sm transition-transform hover:scale-[1.02]">
                      <div className="flex-shrink-0 size-8 mt-1 rounded-full bg-white flex items-center justify-center">
                        <CheckCircle2 className="size-4 text-[#1D745C]" />
                      </div>
                      <span className="text-md font-medium text-white/90 tracking-wide">{result}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full lg:w-1/2 flex flex-col items-center justify-center text-center">
                <h3 className="text-3xl font-bold text-white mb-6">Ready to achieve similar results?</h3>
                <p className="text-white/80 text-lg mb-10 max-w-md">
                  Let's discuss how we can transform your digital presence and drive real growth.
                </p>
                <Link 
                  href="/#contact" 
                  className="bg-white text-gray-900 px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_40px_rgba(255,255,255,0.3)]"
                >
                  Start Your Project
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
