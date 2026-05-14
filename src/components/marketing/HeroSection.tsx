"use client";

/*
Previous HeroSection implementation commented out as requested.

"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Cpu } from "lucide-react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { gsap } from "gsap";

export default function HeroSection() {
    const [text, setText] = useState("");
    const fullText = "SERVICE GROWTH.";
    const [index, setIndex] = useState(0);
    const containerRef = useRef(null);

    useEffect(() => {
        if (index < fullText.length) {
            const timeout = setTimeout(() => {
                setText((prev) => prev + fullText[index]);
                setIndex((prev) => prev + 1);
            }, 70);
            return () => clearTimeout(timeout);
        }
    }, [index, fullText]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const xPos = (clientX / window.innerWidth - 0.5) * 30;
            const yPos = (clientY / window.innerHeight - 0.5) * 30;

            gsap.to(".hero-grid", {
                x: xPos,
                y: yPos,
                duration: 2,
                ease: "power2.out",
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden bg-white pt-24 pb-12 px-4"
        >
            ...previous hero markup...
        </section>
    );
}
*/

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";

const services = ["Web", "Apps", "UI/UX", "Marketing", "Consultation"];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white px-6 pb-20 pt-28 md:pt-32">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(#F0F0F0 1px, transparent 1px), linear-gradient(90deg, #F0F0F0 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_360px]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "circOut" }}
            className="max-w-4xl"
          >
            <div className="mb-8 flex items-center gap-3">
              <span className="h-2 w-2 bg-[#0A0A0A]" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#6B6B6B]">
                Opygen Digital Studio
              </span>
            </div>

            <h1 className="text-[clamp(3rem,7vw,6.5rem)] font-bold leading-[0.9] tracking-tighter text-[#0A0A0A]">
              Clean digital systems for modern businesses.
            </h1>

            <p className="mt-8 max-w-2xl border-l-2 border-[#0A0A0A] pl-6 text-base font-medium leading-8 text-[#6B6B6B] md:text-lg">
              We design and build websites, apps, interfaces, and growth systems
              with clear strategy and careful execution.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                className="h-14 rounded-none bg-[#0A0A0A] px-8 text-white hover:bg-[#1A1A1A]"
              >
                <Link href="#contact" className="flex items-center gap-2">
                  Start a project
                  <ArrowRight className="size-4" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="h-14 rounded-none border-[#DADADA] bg-white px-8 hover:border-[#0A0A0A] hover:bg-white"
              >
                <Link href="#services">Explore services</Link>
              </Button>
            </div>

            {/* <div className="mt-12 flex flex-wrap gap-2">
              {services.map((service) => (
                <span
                  key={service}
                  className="border border-[#E8E8E8] bg-white px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-[#6B6B6B]"
                >
                  {service}
                </span>
              ))}
            </div> */}
          </motion.div>

          <HeroServicePanel />
        </div>
      </div>
    </section>
  );
}

function HeroServicePanel() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.15, ease: "circOut" }}
      className="hidden lg:block"
      aria-hidden="true"
    >
      <div className="border border-[#E8E8E8] bg-white">
        <div className="border-b border-[#E8E8E8] p-6">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#ADADAD]">
            Studio Scope
          </p>
          <p className="mt-3 text-2xl font-bold leading-tight tracking-tight text-[#0A0A0A]">
            Strategy, design, build, and growth.
          </p>
        </div>

        <div className="grid gap-px bg-[#E8E8E8]">
          {services.map((service, index) => (
            <motion.div
              key={service}
              className="flex items-center justify-between bg-white p-5"
              animate={{ x: index % 2 === 0 ? [0, 4, 0] : [0, -4, 0] }}
              transition={{
                duration: 5 + index,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <span className="text-sm font-bold text-[#0A0A0A]">
                {service}
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#ADADAD]">
                0{index + 1}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-px bg-[#E8E8E8] border-t border-[#E8E8E8]">
          <div className="bg-[#0A0A0A] p-5">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">
              Process
            </p>
            <p className="mt-2 text-sm font-bold text-white">Clear first</p>
          </div>
          <div className="bg-[#FAFAFA] p-5">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#ADADAD]">
              Output
            </p>
            <p className="mt-2 text-sm font-bold text-[#0A0A0A]">Launch ready</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
