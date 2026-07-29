"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function ProjectHeroImage({
  image,
  projectName,
  projectType,
  duration,
}: {
  image: string;
  projectName: string;
  projectType: string;
  duration: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, scale: 0.97, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.12 }}
      className="relative mx-auto w-full max-w-[720px] lg:justify-self-end"
    >
      <div
        aria-hidden="true"
        className="absolute -left-5 top-[18%] hidden h-28 w-28 rounded-full border border-black/10 bg-white/65 sm:block"
      />
      <div
        aria-hidden="true"
        className="absolute -right-3 -top-5 h-20 w-20 rounded-[1.5rem] bg-[#F24202] sm:-right-7 sm:-top-7 sm:h-28 sm:w-28"
      />

      <div className="relative rounded-[2rem] bg-[#111111] p-3 shadow-[0_35px_80px_rgba(17,17,17,0.22)] sm:rounded-[2.5rem] sm:p-4">
        <motion.div
          style={{ y: imageY }}
          className="relative aspect-[4/3] overflow-hidden rounded-[1.45rem] bg-[#222222] sm:rounded-[1.9rem]"
        >
          <Image
            src={image}
            alt={projectName}
            fill
            priority
            unoptimized
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 text-white sm:p-7">
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/70">
              {projectType}
            </p>
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#D9FF5B] text-[#111111] shadow-lg">
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </span>
          </div>
        </motion.div>
      </div>

      <div className="absolute -bottom-6 left-4 rounded-2xl border border-black/10 bg-white px-4 py-3 shadow-[0_16px_40px_rgba(17,17,17,0.14)] sm:-left-8 sm:px-5">
        <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#858585]">
          Timeline
        </p>
        <p className="mt-1 text-sm font-semibold text-[#222222]">{duration}</p>
      </div>
    </motion.div>
  );
}
