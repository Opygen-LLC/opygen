"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const partners = [
    "logoipsum", "LOGOIPSUM", "logoipsum", "Logoipsum",
    "logoipsum", "logoipsum", "logoipsum", "Logoipsum",
];

const CursorIcon = ({ className }: { className?: string }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M5.5 3.5L18.5 10.5L12 12.5L15 18L13 19.5L10 14L5.5 17.5V3.5Z" fill="black" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
);

export default function HeroSection() {
    return (
        <section id="home" className="relative flex h-screen flex-col items-center justify-center overflow-hidden bg-white text-black pt-20">
            {/* Grid Background */}
            <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden">
                <svg className="absolute h-full w-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid-pattern" width="100" height="100" patternUnits="userSpaceOnUse" patternTransform="translate(50, 50)">
                      <path d="M 100 0 L 0 0 0 100" fill="none" stroke="rgba(0,0,0,0.06)" strokeWidth="1" />
                      <path d="M -4 0 L 4 0 M 0 -4 L 0 4" stroke="rgba(0,0,0,0.3)" strokeWidth="1" fill="none" />
                      <path d="M 96 0 L 104 0 M 100 -4 L 100 4" stroke="rgba(0,0,0,0.3)" strokeWidth="1" fill="none" />
                      <path d="M -4 100 L 4 100 M 0 96 L 0 104" stroke="rgba(0,0,0,0.3)" strokeWidth="1" fill="none" />
                      <path d="M 96 100 L 104 100 M 100 96 L 100 104" stroke="rgba(0,0,0,0.3)" strokeWidth="1" fill="none" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid-pattern)" />
                </svg>
                {/* Glow behind text */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[40vh] bg-blue-400/10 blur-[100px] rounded-full" />
            </div>

            {/* Floating Cursors & Pills */}
            <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden hidden md:block">
                {/* Scrollllll (top left) */}
                <motion.div
                    animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="absolute left-[15%] top-[25%]"
                >
                    <div className="relative">
                        <div className="flex items-center gap-2 rounded-full bg-blue-500 px-4 py-2 text-xs font-bold text-white shadow-lg shadow-blue-500/30">
                            Scrollllll
                        </div>
                        <CursorIcon className="absolute -bottom-3 -right-2 z-10" />
                    </div>
                </motion.div>

                {/* check my work (top right) */}
                <motion.div
                    animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                    className="absolute right-[18%] top-[30%]"
                >
                    <div className="relative">
                        <div className="flex items-center gap-2 rounded-full bg-blue-500 px-4 py-2 text-xs font-bold text-white shadow-lg shadow-blue-500/30">
                            check my work
                        </div>
                        <CursorIcon className="absolute -top-3 -left-3 z-10 rotate-[90deg]" />
                    </div>
                </motion.div>

                {/* check my work (bottom left) */}
                <motion.div
                    animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 2 }}
                    className="absolute left-[20%] bottom-[35%]"
                >
                    <div className="relative">
                        <div className="flex items-center gap-2 rounded-full bg-blue-500 px-4 py-2 text-xs font-bold text-white shadow-lg shadow-blue-500/30">
                            check my work
                        </div>
                        <CursorIcon className="absolute -bottom-3 -left-2 z-10 rotate-[45deg]" />
                    </div>
                </motion.div>
                
                {/* Scrollllll (bottom right) */}
                <motion.div
                    animate={{ y: [0, 10, 0], x: [0, -5, 0] }}
                    transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 0.5 }}
                    className="absolute right-[22%] bottom-[28%]"
                >
                    <div className="relative">
                        <div className="flex items-center gap-2 rounded-full bg-blue-500 px-4 py-2 text-xs font-bold text-white shadow-lg shadow-blue-500/30">
                            Scrollllll
                        </div>
                        <CursorIcon className="absolute -top-3 -right-2 z-10 rotate-[-90deg]" />
                    </div>
                </motion.div>
                
                {/* Random cursor 1 */}
                <motion.div
                    animate={{ y: [0, 20, 0], x: [0, 20, 0] }}
                    transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1.5 }}
                    className="absolute left-[10%] top-[60%]"
                >
                    <CursorIcon className="opacity-70" />
                </motion.div>

                {/* Random cursor 2 */}
                <motion.div
                    animate={{ y: [0, -20, 0], x: [0, -20, 0] }}
                    transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 3 }}
                    className="absolute right-[12%] bottom-[45%]"
                >
                    <CursorIcon className="opacity-70 rotate-[30deg]" />
                </motion.div>
            </div>

            {/* Main Content */}
            <div className="relative z-20 flex w-full max-w-[1400px] mx-auto flex-col items-center justify-center px-6 lg:px-8 text-center">
                
                {/* Slots Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8 flex items-center gap-2 rounded-full bg-[#1C1C1C] px-4 py-2 text-[11px] font-medium text-white shadow-lg"
                >
                    <span className="relative flex size-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-70" />
                        <span className="relative inline-flex size-2 rounded-full bg-green-500" />
                    </span>
                    2 slots available this month
                </motion.div>

                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="mb-6 text-[clamp(2.5rem,6vw,5.5rem)] font-bold leading-[1.05] tracking-tight text-[#111111]"
                >
                    All The Design You Need. <br />
                    <span className="font-serif italic text-blue-500 font-light pr-2">One Monthly Rate</span>
                </motion.h1>

                {/* Subheading */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-10 max-w-2xl text-[clamp(0.95rem,1.5vw,1.15rem)] text-gray-500 leading-relaxed font-medium"
                >
                    A design subscription for startups and founders who need senior-level work, fast – without the cost of a full-time hire.
                </motion.p>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <Link
                        href="#contact"
                        className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-gradient-to-b from-blue-400 to-blue-500 px-8 py-4 text-sm font-bold text-white shadow-[0_8px_30px_rgb(59,130,246,0.3)] transition-all hover:scale-105 hover:shadow-[0_8px_30px_rgb(59,130,246,0.5)] active:scale-95"
                    >
                        {/* Shimmer effect */}
                        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 ease-in-out group-hover:translate-x-full" />
                        Book an intro call
                        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
