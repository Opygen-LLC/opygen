"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowUpRight, Blocks, Code2, Database, Sparkles } from "lucide-react";
import { marketingButton } from "@/lib/marketing-button";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Features() {
  return (
    <section
      id="features"
      aria-labelledby="features-title"
      className="relative overflow-hidden px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="absolute -left-32 top-24 h-72 w-72 rounded-full bg-[#D9FF5B]/30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -right-28 bottom-10 h-80 w-80 rounded-full bg-[#FFD6C7]/45 blur-3xl"
      />

      <div className="relative mx-auto max-w-[1400px]">
        <header className="grid gap-8 border-b border-black/10 pb-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end lg:pb-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-3 py-2 shadow-[0_8px_24px_rgba(17,17,17,0.04)] backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#F24202]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#4B4B4B]">
                Features
              </span>
            </div>
            <h2
              id="features-title"
              className="mt-6 max-w-3xl text-4xl leading-[0.98] sm:text-5xl lg:text-[4rem]"
            >
              The right creative and technical force, <span>all in one place.</span>
            </h2>
          </div>

          <div className="max-w-xl lg:justify-self-end">
            <p className="text-base font-medium leading-7 sm:text-lg sm:leading-8">
              We provide complete user flows, polished digital products, powerful automations, and growth-driven marketingâ€”all in one unified partnership.
            </p>
            <a
              href="#services"
              className={marketingButton("group mt-7")}
            >
              See what we build
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </a>
          </div>
        </header>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-10 grid grid-cols-1 gap-5 lg:mt-14 lg:grid-cols-12"
        >
          <motion.article
            data-marketing-card
            variants={itemVariants}
            className="group relative overflow-hidden rounded-[2rem] border border-black/10 bg-white/80 p-3 shadow-[0_18px_48px_rgba(17,17,17,0.055)] backdrop-blur-sm lg:col-span-7"
          >
            <div className="relative min-h-[21rem] overflow-hidden rounded-[1.45rem] bg-[#1A1A1A] p-5 text-white sm:min-h-[27rem] sm:p-7">
              <div aria-hidden="true" className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#F24202]/70 blur-3xl" />
              <div aria-hidden="true" className="absolute -bottom-20 left-8 h-60 w-60 rounded-full bg-[#D9FF5B]/35 blur-3xl" />
              <div aria-hidden="true" className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.14)_1px,transparent_1px)] [background-size:36px_36px]" />

              <div className="relative flex items-center justify-between border-b border-white/15 pb-4 text-[10px] font-bold uppercase tracking-[0.16em] text-white/55">
                <span>Data-Driven Products</span>
                <span className="flex items-center gap-2 text-[#D9FF5B]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#D9FF5B]" />
                  <span>Features</span>
                </span>
              </div>

              <div className="relative mx-auto mt-8 max-w-[34rem] rounded-[1.25rem] border border-white/15 bg-white/95 p-3 shadow-[0_25px_60px_rgba(0,0,0,0.26)] transition duration-700 group-hover:-translate-y-2 sm:mt-10 sm:p-4">
                <div className="flex items-center gap-2 border-b border-black/10 pb-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#F24202]" />
                  <span className="h-2 w-24 rounded-full bg-black/10" />
                  <span className="ml-auto h-6 w-6 rounded-lg bg-[#D9FF5B]" />
                </div>
                <div className="mt-4 grid grid-cols-[1.05fr_0.95fr] gap-3 sm:gap-4">
                  <div className="rounded-xl border border-black/10 bg-[#F7F7F4] p-3 sm:p-4">
                    <span className="block h-2 w-16 rounded-full bg-black/10" />
                    <div className="mt-5 flex h-24 items-end gap-2 sm:h-32">
                      <span className="h-[42%] flex-1 rounded-t-md bg-[#D9FF5B]" />
                      <span className="h-[67%] flex-1 rounded-t-md bg-[#FFD6C7]" />
                      <span className="h-[54%] flex-1 rounded-t-md bg-[#D9FF5B]" />
                      <span className="h-[85%] flex-1 rounded-t-md bg-[#F24202]" />
                      <span className="h-[72%] flex-1 rounded-t-md bg-[#111111]" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="rounded-xl border border-black/10 bg-white p-3 sm:p-4">
                      <span className="block h-2 w-20 rounded-full bg-black/10" />
                      <span className="mt-4 block h-8 w-2/3 rounded-lg bg-[#D9FF5B]" />
                    </div>
                    <div className="rounded-xl border border-black/10 bg-white p-3 sm:p-4">
                      <span className="block h-2 w-16 rounded-full bg-black/10" />
                      <span className="mt-3 block h-2 w-full rounded-full bg-black/10" />
                      <span className="mt-2 block h-2 w-4/5 rounded-full bg-black/10" />
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between rounded-xl border border-black/10 bg-[#F7F7F4] p-2 pl-3">
                  <span className="h-2 w-24 rounded-full bg-black/10" />
                  <span className="inline-flex items-center gap-1.5 rounded-lg bg-[#111111] px-3 py-2 text-[10px] font-bold text-white">
                    <Sparkles className="h-3 w-3 text-[#D9FF5B]" aria-hidden="true" />
                    Generate
                  </span>
                </div>
              </div>
            </div>
            <div className="px-4 pb-6 pt-7 sm:px-5 sm:pb-8 sm:pt-8">
              <h3 className="text-2xl leading-[1.05] sm:text-[1.75rem]">Data-Driven Products</h3>
              <p className="mt-4 max-w-2xl text-[15px] leading-7">
                Architecture, user hierarchy, and complex workflows are designed together, ensuring your web and mobile apps drive real business results.
              </p>
            </div>
          </motion.article>

          <motion.article
            data-marketing-card
            variants={itemVariants}
            className="group relative overflow-hidden rounded-[2rem] border border-[#111111] bg-[#111111] p-3 text-white shadow-[0_20px_52px_rgba(17,17,17,0.16)] lg:col-span-5"
          >
            <div className="relative min-h-[21rem] overflow-hidden rounded-[1.45rem] border border-white/10 bg-[#202020] p-5 sm:min-h-[27rem] sm:p-7">
              <div aria-hidden="true" className="absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-[#D9FF5B]/25 blur-3xl" />
              <div aria-hidden="true" className="absolute right-0 top-0 h-56 w-56 rounded-full bg-[#F24202]/50 blur-3xl" />
              <div aria-hidden="true" className="absolute inset-0 opacity-15 [background-image:radial-gradient(rgba(255,255,255,0.72)_1px,transparent_1px)] [background-size:18px_18px]" />

              <div className="relative flex h-full items-center justify-center [perspective:1000px]">
                <div className="relative h-56 w-72 transition duration-700 [transform:rotateX(57deg)_rotateZ(-39deg)] group-hover:[transform:rotateX(53deg)_rotateZ(-34deg)_translateY(-8px)] sm:h-64 sm:w-80">
                  <div className="absolute inset-0 rounded-2xl border border-white/15 bg-white/95 p-4 shadow-[0_20px_45px_rgba(0,0,0,0.38)]">
                    <div className="flex items-center gap-2 border-b border-black/10 pb-3">
                      <span className="h-2 w-2 rounded-full bg-[#F24202]" />
                      <span className="h-2 w-2 rounded-full bg-[#FFD6C7]" />
                      <span className="h-2 w-2 rounded-full bg-[#D9FF5B]" />
                    </div>
                    <div className="mt-4 grid grid-cols-[0.36fr_0.64fr] gap-3">
                      <div className="space-y-2 rounded-lg bg-[#F7F7F4] p-2">
                        <span className="block h-10 rounded-md bg-[#D9FF5B]" />
                        <span className="block h-2 rounded-full bg-black/10" />
                        <span className="block h-2 w-3/4 rounded-full bg-black/10" />
                        <span className="block h-2 w-4/5 rounded-full bg-black/10" />
                      </div>
                      <div className="rounded-lg border border-black/10 p-3">
                        <span className="block h-2 w-20 rounded-full bg-black/10" />
                        <div className="mt-4 flex h-20 items-end gap-1.5">
                          <span className="h-[45%] flex-1 rounded-t-sm bg-[#FFD6C7]" />
                          <span className="h-[76%] flex-1 rounded-t-sm bg-[#F24202]" />
                          <span className="h-[60%] flex-1 rounded-t-sm bg-[#D9FF5B]" />
                          <span className="h-[90%] flex-1 rounded-t-sm bg-[#111111]" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-5 -left-10 h-36 w-52 rounded-2xl border border-white/25 bg-white/85 p-3 shadow-[0_18px_35px_rgba(0,0,0,0.25)] backdrop-blur-sm">
                    <span className="block h-2 w-16 rounded-full bg-black/10" />
                    <span className="mt-3 block h-2 w-full rounded-full bg-black/10" />
                    <span className="mt-2 block h-2 w-4/5 rounded-full bg-black/10" />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative px-4 pb-6 pt-7 sm:px-5 sm:pb-8 sm:pt-8">
              <h3 className="text-2xl leading-[1.05] text-white sm:text-[1.75rem]">Custom SaaS & Platforms</h3>
              <p className="mt-4 text-[15px] leading-7 text-white/65">
                Choose from bespoke web applications and SaaS platforms. Tailored architectures designed exactly to reflect your brand and scale operations.
              </p>
            </div>
          </motion.article>

          <motion.article
            data-marketing-card
            variants={itemVariants}
            className="group relative overflow-hidden rounded-[2rem] border border-black/10 bg-white/80 p-3 shadow-[0_18px_48px_rgba(17,17,17,0.055)] backdrop-blur-sm lg:col-span-4"
          >
            <div className="relative flex min-h-[15rem] items-center justify-center overflow-hidden rounded-[1.45rem] bg-[#F7F7F4] p-7 [background-image:radial-gradient(rgba(17,17,17,0.13)_1px,transparent_1px)] [background-size:16px_16px]">
              <div className="relative flex items-end gap-3 transition duration-700 group-hover:-translate-y-2">
                <div className="h-36 w-44 rounded-t-xl border border-black/10 bg-white p-3 shadow-[0_16px_32px_rgba(17,17,17,0.10)]">
                  <span className="block h-2 w-14 rounded-full bg-black/10" />
                  <div className="mt-4 grid grid-cols-3 gap-1.5">
                    <span className="h-16 rounded-md bg-[#D9FF5B]" />
                    <span className="h-16 rounded-md bg-[#FFD6C7]" />
                    <span className="h-16 rounded-md bg-black/10" />
                  </div>
                </div>
                <div className="-ml-11 h-44 w-20 rounded-[1.25rem] border-[3px] border-[#111111] bg-white p-2 shadow-[0_16px_32px_rgba(17,17,17,0.16)]">
                  <span className="mx-auto block h-1 w-7 rounded-full bg-black/15" />
                  <span className="mt-4 block h-12 rounded-lg bg-[#D9FF5B]" />
                  <span className="mt-2 block h-2 rounded-full bg-black/10" />
                  <span className="mt-2 block h-2 w-3/4 rounded-full bg-black/10" />
                </div>
              </div>
            </div>
            <div className="px-4 pb-6 pt-6 sm:px-5 sm:pb-8">
              <h3 className="text-xl leading-[1.08]">Responsive Experiences</h3>
              <p className="mt-3 text-[14px] leading-6">
                Create digital touchpoints that look stunning and perform flawlessly across all devices.
              </p>
            </div>
          </motion.article>

          <motion.article
            data-marketing-card
            variants={itemVariants}
            className="group relative overflow-hidden rounded-[2rem] border border-black/10 bg-white/80 p-3 shadow-[0_18px_48px_rgba(17,17,17,0.055)] backdrop-blur-sm lg:col-span-4"
          >
            <div className="relative flex min-h-[15rem] items-center justify-center overflow-hidden rounded-[1.45rem] bg-[#F1F0EA] p-6">
              <div aria-hidden="true" className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#D9FF5B]/55 blur-3xl" />
              <div className="relative w-full max-w-[15rem] rounded-2xl border border-black/10 bg-white/90 p-4 shadow-[0_18px_36px_rgba(17,17,17,0.10)] transition duration-700 group-hover:-translate-y-1">
                <div className="flex items-center gap-2 border-b border-black/10 pb-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#D9FF5B] text-[#111111]">
                    <Blocks className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#4B4B4B]">Integrations</span>
                </div>
                <div className="mt-3 space-y-2">
                  {["Stripe", "HubSpot", "OpenAI"].map((integration) => (
                    <div key={integration} className="flex items-center justify-between rounded-lg border border-black/10 bg-[#F7F7F4] px-3 py-2">
                      <span className="text-[12px] font-semibold text-[#4B4B4B]">{integration}</span>
                      <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#111111] text-[11px] leading-none text-white">+</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="px-4 pb-6 pt-6 sm:px-5 sm:pb-8">
              <h3 className="text-xl leading-[1.08]">Seamless Integrations</h3>
              <p className="mt-3 text-[14px] leading-6">
                Easily connect with your favorite CRMs, payment gateways, and AI models for automated business operations.
              </p>
            </div>
          </motion.article>

          <motion.article
            data-marketing-card
            variants={itemVariants}
            className="group relative overflow-hidden rounded-[2rem] border border-black/10 bg-white/80 p-3 shadow-[0_18px_48px_rgba(17,17,17,0.055)] backdrop-blur-sm lg:col-span-4"
          >
            <div className="relative flex min-h-[15rem] items-center justify-center overflow-hidden rounded-[1.45rem] bg-[#FDFBF7] p-6">
              <div aria-hidden="true" className="absolute -bottom-20 -left-16 h-52 w-52 rounded-full bg-[#FFD6C7]/75 blur-3xl" />
              <div className="relative w-60 transition duration-700 [transform:rotateX(54deg)_rotateZ(-40deg)] group-hover:[transform:rotateX(49deg)_rotateZ(-35deg)_translateY(-8px)]">
                <div className="rounded-xl border border-black/10 bg-white p-3 shadow-[0_14px_26px_rgba(17,17,17,0.13)]">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#D9FF5B] text-[#111111]">
                      <Database className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span className="h-2 w-24 rounded-full bg-black/10" />
                  </div>
                </div>
                <div className="ml-10 mt-4 rounded-xl border border-black/10 bg-white p-3 shadow-[0_14px_26px_rgba(17,17,17,0.13)]">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FFD6C7] text-[#111111]">
                      <Code2 className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span className="h-2 w-20 rounded-full bg-black/10" />
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4 pb-6 pt-6 sm:px-5 sm:pb-8">
              <h3 className="text-xl leading-[1.08]">Scalable Infrastructure</h3>
              <p className="mt-3 text-[14px] leading-6">
                Streamline your digital growth with robust, secure codebases and reusable, consistent system architectures.
              </p>
            </div>
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
}
