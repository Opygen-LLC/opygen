"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, Sparkles, Blocks, Database, Code2 } from "lucide-react";

export default function Features() {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="py-24 lg:py-32 bg-[#FAFAFA] font-space-grotesk overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
            <span className="text-sm font-semibold text-gray-600 tracking-wide">Features</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-[64px] font-bold tracking-tight text-gray-900 mb-6 leading-[1.1]">
            Everything your business needs to scale from <span className="text-gray-400">idea to digital dominance</span>
          </h2>
          
          <p className="text-lg text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed mb-10">
            We provide complete user flows, polished digital products, powerful automations, and growth-driven marketing—all in one unified partnership.
          </p>
          
          <a href="#" className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3.5 rounded-full font-semibold hover:bg-gray-800 transition-colors duration-300">
            View all Features
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Bento Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-6 gap-6"
        >
          
          {/* Card 1: Data-Driven Products (Top Left) */}
          <motion.div variants={itemVariants} className="col-span-1 md:col-span-3 bg-white rounded-[2.5rem] p-2 border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.02)] flex flex-col group">
            <div className="w-full bg-[#F8F9FA] rounded-[2rem] h-[340px] relative overflow-hidden flex items-center justify-center p-8 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
               {/* UI Graphic */}
               <div className="w-full max-w-md bg-white/80 backdrop-blur-sm border border-gray-100 shadow-xl rounded-2xl p-6 transition-transform duration-700 group-hover:-translate-y-2">
                 <div className="flex items-center gap-3 mb-6">
                   <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                   <div className="h-2.5 w-32 bg-gray-200 rounded-full"></div>
                 </div>
                 <div className="grid grid-cols-3 gap-4 mb-8">
                   <div className="h-28 bg-gray-50 rounded-xl border border-gray-100 relative overflow-hidden">
                     <div className="absolute top-2 left-2 w-2 h-2 rounded-full bg-blue-400"></div>
                     <div className="absolute bottom-4 left-4 right-4 h-12 bg-white rounded shadow-sm"></div>
                   </div>
                   <div className="h-28 bg-gray-50 rounded-xl border border-gray-100 relative overflow-hidden">
                     <div className="absolute top-2 left-2 w-2 h-2 rounded-full bg-blue-400"></div>
                     <div className="absolute bottom-4 left-4 right-4 h-12 bg-white rounded shadow-sm"></div>
                   </div>
                   <div className="h-28 bg-gray-50 rounded-xl border border-gray-100 relative overflow-hidden">
                     <div className="absolute top-2 left-2 w-2 h-2 rounded-full bg-blue-400"></div>
                     <div className="absolute bottom-4 left-4 right-4 h-12 bg-white rounded shadow-sm"></div>
                   </div>
                 </div>
                 <div className="flex items-center justify-between border border-gray-200 bg-white rounded-xl p-1.5 pl-4 shadow-sm">
                   <div className="h-2 w-24 bg-gray-200 rounded-full"></div>
                   <div className="bg-gray-900 text-white rounded-lg px-4 py-2.5 flex items-center gap-2 text-[11px] font-bold">
                     <Sparkles className="w-3.5 h-3.5" /> Generate
                   </div>
                 </div>
               </div>
            </div>
            <div className="p-8 pb-10">
              <h3 className="text-[24px] font-bold text-gray-900 mb-3">Data-Driven Products</h3>
              <p className="text-gray-500 leading-relaxed font-medium text-[15px]">
                Architecture, user hierarchy, and complex workflows are designed together, ensuring your web and mobile apps drive real business results.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Custom SaaS & Platforms (Top Right) */}
          <motion.div variants={itemVariants} className="col-span-1 md:col-span-3 bg-white rounded-[2.5rem] p-2 border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.02)] flex flex-col group">
            <div className="w-full bg-gradient-to-br from-[#F4F7F9] to-[#EBF0F5] rounded-[2rem] h-[340px] relative overflow-hidden flex items-center justify-center perspective-[1000px]">
              {/* Isometric UI Panels */}
              <div className="relative w-full h-full flex items-center justify-center transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                   style={{ transformStyle: 'preserve-3d' }}>
                <div 
                  className="absolute w-[320px] h-[220px] bg-white rounded-2xl shadow-2xl border border-gray-100 -mt-20 ml-20 z-10 flex flex-col p-5"
                  style={{ transform: "rotateX(55deg) rotateZ(-45deg)" }}
                >
                  <div className="h-2.5 w-24 bg-gray-200 rounded-full mb-5"></div>
                  <div className="w-full h-24 bg-gray-50 rounded-xl border border-gray-100 mb-3"></div>
                  <div className="w-3/4 h-2 bg-gray-100 rounded-full mb-2"></div>
                  <div className="w-1/2 h-2 bg-gray-100 rounded-full"></div>
                </div>
                <div 
                  className="absolute w-[280px] h-[180px] bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-gray-100 mt-20 -ml-20 z-20 flex flex-col p-4"
                  style={{ transform: "rotateX(55deg) rotateZ(-45deg) translateZ(40px)" }}
                >
                   <div className="flex gap-2 mb-5 pb-4 border-b border-gray-100">
                     <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                     <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                     <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                   </div>
                   <div className="flex gap-4">
                     <div className="w-14 h-14 bg-blue-50 rounded-xl border border-blue-100"></div>
                     <div className="flex-1 space-y-2.5 py-1">
                       <div className="h-2 w-full bg-gray-200 rounded-full"></div>
                       <div className="h-2 w-4/5 bg-gray-200 rounded-full"></div>
                       <div className="h-2 w-1/2 bg-gray-100 rounded-full"></div>
                     </div>
                   </div>
                </div>
              </div>
            </div>
            <div className="p-8 pb-10">
              <h3 className="text-[24px] font-bold text-gray-900 mb-3">Custom SaaS & Platforms</h3>
              <p className="text-gray-500 leading-relaxed font-medium text-[15px]">
                Choose from bespoke web applications and SaaS platforms. Tailored architectures designed exactly to reflect your brand and scale operations.
              </p>
            </div>
          </motion.div>

          {/* Card 3: Responsive Experiences (Bottom Left) */}
          <motion.div variants={itemVariants} className="col-span-1 md:col-span-2 bg-white rounded-[2.5rem] p-2 border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.02)] flex flex-col group">
            <div className="w-full bg-[#FAFAFA] rounded-[2rem] h-[280px] relative overflow-hidden flex items-center justify-center bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:12px_12px]">
              <div className="flex items-end gap-3 transition-transform duration-700 ease-out group-hover:-translate-y-2 mt-12">
                 {/* Desktop */}
                 <div className="w-36 h-28 bg-white border border-gray-200 rounded-t-xl shadow-lg flex flex-col p-2.5">
                   <div className="w-10 h-1.5 bg-gray-200 rounded-full mb-3"></div>
                   <div className="w-full flex-1 bg-gray-50 rounded-md border border-gray-100"></div>
                 </div>
                 {/* Mobile */}
                 <div className="w-16 h-32 bg-white border border-gray-200 rounded-[16px] shadow-xl flex flex-col p-2 relative -ml-10 z-10">
                   <div className="w-5 h-1 bg-gray-200 rounded-full mx-auto mb-3"></div>
                   <div className="w-full h-8 bg-blue-50 rounded mb-1.5"></div>
                   <div className="w-full h-3 bg-gray-50 rounded-sm mb-1.5"></div>
                   <div className="w-full h-3 bg-gray-50 rounded-sm"></div>
                 </div>
              </div>
            </div>
            <div className="p-6 pb-8">
              <h3 className="text-[20px] font-bold text-gray-900 mb-2">Responsive Experiences</h3>
              <p className="text-gray-500 leading-relaxed font-medium text-[14px]">
                Create digital touchpoints that look stunning and perform flawlessly across all devices.
              </p>
            </div>
          </motion.div>

          {/* Card 4: Seamless Integrations (Bottom Mid) */}
          <motion.div variants={itemVariants} className="col-span-1 md:col-span-2 bg-white rounded-[2.5rem] p-2 border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.02)] flex flex-col group">
            <div className="w-full bg-gradient-to-br from-[#F0F4F8] to-[#E2EAF1] rounded-[2rem] h-[280px] relative overflow-hidden flex items-center justify-center">
               <div className="relative w-52 bg-white/90 backdrop-blur-md border border-white/60 shadow-xl rounded-2xl p-4 transition-transform duration-700 ease-out group-hover:scale-105">
                 <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-100">
                   <div className="w-6 h-6 rounded-md bg-blue-50 flex items-center justify-center">
                     <Blocks className="w-3.5 h-3.5 text-blue-500" />
                   </div>
                   <span className="text-[11px] font-bold text-gray-600 uppercase tracking-wide">Integrations</span>
                 </div>
                 <div className="space-y-1.5">
                   {['Stripe', 'HubSpot', 'OpenAI'].map((integration, idx) => (
                     <div key={idx} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-xl cursor-pointer transition-colors group/item">
                       <span className="text-[13px] font-semibold text-gray-700">{integration}</span>
                       <div className="w-5 h-5 border border-gray-200 bg-white rounded-md flex items-center justify-center text-[12px] text-gray-400 group-hover/item:border-blue-200 group-hover/item:text-blue-500 transition-colors">+</div>
                     </div>
                   ))}
                 </div>
               </div>
            </div>
            <div className="p-6 pb-8">
              <h3 className="text-[20px] font-bold text-gray-900 mb-2">Seamless Integrations</h3>
              <p className="text-gray-500 leading-relaxed font-medium text-[14px]">
                Easily connect with your favorite CRMs, payment gateways, and AI models for automated business operations.
              </p>
            </div>
          </motion.div>

          {/* Card 5: Scalable Infrastructure (Bottom Right) */}
          <motion.div variants={itemVariants} className="col-span-1 md:col-span-2 bg-white rounded-[2.5rem] p-2 border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.02)] flex flex-col group">
            <div className="w-full bg-[#FDFBF7] rounded-[2rem] h-[280px] relative overflow-hidden flex items-center justify-center perspective-[800px]">
              <div className="relative w-full h-full flex items-center justify-center transition-transform duration-[1.5s] ease-out group-hover:scale-105" style={{ transformStyle: 'preserve-3d' }}>
                <div 
                  className="absolute w-[220px] space-y-4"
                  style={{ transform: "rotateX(55deg) rotateZ(-45deg)" }}
                >
                  <div className="bg-white p-4 rounded-xl shadow-lg border border-amber-100/50 flex items-center gap-4 transition-transform duration-500 hover:-translate-y-2">
                    <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center">
                      <Database className="w-4 h-4 text-amber-500" />
                    </div>
                    <div className="h-2 w-20 bg-gray-100 rounded-full"></div>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-100 flex items-center gap-4 ml-8 transition-transform duration-500 hover:-translate-y-2 delay-75">
                    <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center">
                      <Code2 className="w-4 h-4 text-gray-500" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="h-2 w-24 bg-gray-100 rounded-full"></div>
                      <div className="h-1.5 w-14 bg-gray-100 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6 pb-8">
              <h3 className="text-[20px] font-bold text-gray-900 mb-2">Scalable Infrastructure</h3>
              <p className="text-gray-500 leading-relaxed font-medium text-[14px]">
                Streamline your digital growth with robust, secure codebases and reusable, consistent system architectures.
              </p>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
