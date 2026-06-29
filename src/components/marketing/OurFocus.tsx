"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import Logo from "../../../public/logo/Opygen.png";

export default function OurFocus() {
  return (
    <section className="py-24 bg-white font-space-grotesk overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        
        {/* Top Header Section */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-16 mb-16">
          <div className="flex-shrink-0">
            <Image 
              src={Logo} 
              alt="Opygen Logo" 
              width={160} 
              height={50} 
              className="object-contain"
            />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[46px] font-bold text-gray-900 leading-[1.2] max-w-4xl tracking-tight">
            We focus on returns, scaling your brand through <span className="text-gray-400">digital marketing</span> to take it to the next level.
          </h2>
        </div>

        {/* Main Bento Container */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white rounded-[2.5rem] p-3 lg:p-4 shadow-[0_15px_60px_rgba(0,0,0,0.06)] border border-gray-100"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-4 h-full lg:min-h-[550px]">
            
            {/* Column 1: Pink Card */}
            <div className="col-span-1 bg-gradient-to-br from-[#FFF0F5] to-[#FFE4F3] rounded-[2rem] p-8 lg:p-10 flex flex-col justify-between relative overflow-hidden group">
              {/* Subtle Straight Grid Background */}
              <div 
                className="absolute inset-0 opacity-[0.3] transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: 'repeating-linear-gradient(to right, rgba(200,150,180,0.2) 0, rgba(200,150,180,0.2) 1px, transparent 1px, transparent 30px), repeating-linear-gradient(to bottom, rgba(200,150,180,0.2) 0, rgba(200,150,180,0.2) 1px, transparent 1px, transparent 30px)'
                }}
              ></div>
              
              <div className="relative z-10">
                <h3 className="text-[64px] lg:text-[80px] font-bold text-gray-900 leading-none tracking-tighter mb-4">
                  230+
                </h3>
              </div>
              
              <div className="relative z-10 mt-32 lg:mt-0">
                <h4 className="text-[18px] lg:text-[22px] font-bold text-gray-900 mb-2">Project Delivered</h4>
                <p className="text-gray-600 text-[14px] lg:text-[15px] font-medium leading-relaxed max-w-[250px]">
                  We ensure every client leaves happy with measurable success.
                </p>
              </div>
            </div>

            {/* Column 2: Middle Stack */}
            <div className="col-span-1 flex flex-col gap-3 lg:gap-4">
              
              {/* Top Small Card */}
              <div className="bg-white border border-gray-100 rounded-3xl p-5 flex items-center justify-between shadow-sm">
                <div className="flex -space-x-3">
                  {[
                    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80",
                    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=80",
                    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
                    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80"
                  ].map((img, i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden relative">
                      <Image src={img} alt="Client" fill className="object-cover" unoptimized />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col items-end">
                  <div className="flex items-center gap-1 mb-1">
                    {[1,2,3,4,5].map((s) => (
                      <Star key={s} className="w-3.5 h-3.5 fill-[#FACC15] text-[#FACC15]" />
                    ))}
                  </div>
                  <span className="text-[12px] font-semibold text-gray-500">25k+ happy clients</span>
                </div>
              </div>

              {/* Middle Cyan Card */}
              <div className="flex-1 bg-gradient-to-br from-[#E0F7FA] to-[#E1F5FE] rounded-[2rem] p-8 flex flex-col justify-between relative overflow-hidden group">
                {/* Diagonal Grid Background */}
                <div 
                  className="absolute inset-0 opacity-[0.4] transition-transform duration-700 group-hover:scale-105" 
                  style={{
                    backgroundImage: 'repeating-linear-gradient(30deg, rgba(150,180,200,0.3) 0, rgba(150,180,200,0.3) 1px, transparent 1px, transparent 30px), repeating-linear-gradient(-60deg, rgba(150,180,200,0.3) 0, rgba(150,180,200,0.3) 1px, transparent 1px, transparent 30px)'
                  }}
                ></div>
                
                <div className="relative z-10">
                  <h3 className="text-[56px] lg:text-[72px] font-bold text-gray-900 leading-none tracking-tighter mb-4">
                    98%
                  </h3>
                </div>
                
                <div className="relative z-10 mt-16 lg:mt-0">
                  <h4 className="text-[18px] lg:text-[20px] font-bold text-gray-900 mb-2">Client Satisfaction</h4>
                  <p className="text-gray-600 text-[14px] font-medium leading-relaxed max-w-[220px]">
                    Helping brands grow faster through data-driven strategies.
                  </p>
                </div>
              </div>

              {/* Bottom Small Card */}
              <div className="bg-white border border-gray-100 rounded-3xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
                <div>
                  <h5 className="text-[15px] font-bold text-gray-900 mb-1">Our Clients in 35+ Countries</h5>
                  <p className="text-[12px] text-gray-500 font-medium">Trusted by global brands worldwide.</p>
                </div>
                <div className="flex items-center -space-x-2">
                  {/* Simulated Flags */}
                  <div className="w-7 h-7 rounded-full bg-red-500 border-2 border-white relative overflow-hidden flex items-center justify-center shadow-sm"><div className="w-2 h-2 bg-yellow-400 rounded-full"></div></div>
                  <div className="w-7 h-7 rounded-full bg-green-500 border-2 border-white flex items-center justify-center shadow-sm"><div className="w-full h-2 bg-yellow-400"></div></div>
                  <div className="w-7 h-7 rounded-full bg-blue-500 border-2 border-white flex items-center justify-center shadow-sm"><div className="w-3 h-3 bg-white rotate-45"></div></div>
                  <div className="w-7 h-7 rounded-full bg-red-600 border-2 border-white flex flex-col shadow-sm"><div className="h-1/2 w-full bg-white"></div></div>
                  <div className="w-7 h-7 rounded-full bg-blue-600 border-2 border-white flex relative shadow-sm"><div className="absolute top-0 left-0 w-3.5 h-3.5 bg-red-500"></div></div>
                  <div className="w-7 h-7 rounded-full bg-green-600 border-2 border-white flex flex-col shadow-sm"><div className="h-1/3 w-full bg-red-500"></div><div className="h-1/3 w-full bg-yellow-400"></div></div>
                </div>
              </div>

            </div>

            {/* Column 3: Blue/Purple Card */}
            <div className="col-span-1 bg-gradient-to-br from-[#E3F2FD] to-[#E8EAF6] rounded-[2rem] p-8 lg:p-10 flex flex-col justify-between relative overflow-hidden group">
              {/* Diagonal Grid Background */}
              <div 
                className="absolute inset-0 opacity-[0.4] transition-transform duration-700 group-hover:scale-105" 
                style={{
                  backgroundImage: 'repeating-linear-gradient(20deg, rgba(160,170,200,0.3) 0, rgba(160,170,200,0.3) 1px, transparent 1px, transparent 30px), repeating-linear-gradient(-70deg, rgba(160,170,200,0.3) 0, rgba(160,170,200,0.3) 1px, transparent 1px, transparent 30px)'
                }}
              ></div>
              
              <div className="relative z-10">
                <h3 className="text-[64px] lg:text-[80px] font-bold text-gray-900 leading-none tracking-tighter mb-4">
                  35X
                </h3>
              </div>
              
              <div className="relative z-10 mt-32 lg:mt-0">
                <h4 className="text-[18px] lg:text-[22px] font-bold text-gray-900 mb-2">Client Growth Result</h4>
                <p className="text-gray-600 text-[14px] lg:text-[15px] font-medium leading-relaxed max-w-[250px]">
                  On time, on point, and beyond expectations—every single time.
                </p>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
