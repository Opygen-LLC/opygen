"use client";

import { motion } from "framer-motion";

export default function SocialProofBar() {
  return (
    <section className="bg-background border-y border-border py-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-sm text-muted-foreground mb-8"
        >
          Join thousands of cleaning businesses that run on Opygen
        </motion.p>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
          className="flex items-center justify-center gap-8 md:gap-14 flex-wrap"
        >
          {["SparkClean", "BrightSquad", "MaidPro", "CleanEdge", "SwiftMaids", "PristineGroup"].map((logo, i) => (
            <motion.div 
              key={logo}
              variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } } }}
              className="text-base md:text-lg font-bold text-muted-foreground/40 tracking-tighter uppercase font-sans"
            >
              {logo}
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="border-t border-border mt-10 pt-8 grid grid-cols-3 divide-x divide-border text-center max-w-3xl mx-auto"
        >
          <div className="flex flex-col items-center">
            <span className="text-2xl md:text-3xl font-bold text-foreground" style={{ fontFamily: 'Sora, sans-serif' }}>2,400+</span>
            <span className="text-xs md:text-sm text-muted-foreground mt-1">Cleaning agencies</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl md:text-3xl font-bold text-foreground" style={{ fontFamily: 'Sora, sans-serif' }}>98%</span>
            <span className="text-xs md:text-sm text-muted-foreground mt-1">Client satisfaction</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl md:text-3xl font-bold text-foreground" style={{ fontFamily: 'Sora, sans-serif' }}>10 min</span>
            <span className="text-xs md:text-sm text-muted-foreground mt-1">Average setup time</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
