"use client";

import Navbar from "@/src/components/marketing/Navbar";
import Footer from "@/src/components/marketing/Footer";
import { projects } from "@/src/data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  Briefcase,
  Calendar,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { use, useRef } from "react";
import { marketingButton, marketingButtonOnDark } from "@/lib/marketing-button";

export default function ProjectDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = use(params);
  const project = projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <>
      <Navbar />
      <main className="min-h-screen overflow-hidden bg-[#F7F7F4] font-space-grotesk text-[#111111] selection:bg-[#FFD6C7]">
        <section
          ref={heroRef}
          className="relative isolate overflow-hidden px-5 pb-16 pt-32 sm:px-8 sm:pt-40 lg:px-12 lg:pb-24"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-60"
            style={{
              backgroundImage:
                "linear-gradient(rgba(17,17,17,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(17,17,17,0.045) 1px, transparent 1px)",
              backgroundSize: "44px 44px",
              maskImage: "linear-gradient(to bottom, black, transparent 90%)",
            }}
          />
          <div
            aria-hidden="true"
            className="absolute -left-28 top-28 h-72 w-72 rounded-full bg-[#D9FF5B]/60 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute -right-24 top-8 h-[28rem] w-[28rem] rounded-full bg-[#FFD6C7]/70 blur-3xl"
          />

          <div className="relative mx-auto grid max-w-[1400px] items-center gap-14 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20">
            <div className="max-w-2xl">
              <Link
                href="/#projects"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-[#626262] transition-colors hover:text-[#111111] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F24202]"
              >
                <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" />
                Back to Portfolio
              </Link>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="mt-10 flex flex-wrap items-center gap-2"
              >
                <span className="inline-flex items-center rounded-full bg-[#111111] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-white shadow-[0_10px_24px_rgba(17,17,17,0.12)]">
                  {project.project_type}
                </span>
                <span className="inline-flex items-center rounded-full border border-black/10 bg-white/75 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#555555] shadow-[0_10px_24px_rgba(17,17,17,0.05)]">
                  CASE STUDY
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.08 }}
                className="mt-6 max-w-3xl text-[3.5rem] font-semibold leading-[0.91] tracking-[-0.075em] sm:text-7xl lg:text-[5.85rem]"
              >
                {project.project_name}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.16 }}
                className="mt-8 max-w-xl text-base leading-7 text-[#626262] sm:text-lg sm:leading-8"
              >
                {project.project_description || project.description}
              </motion.p>
            </div>

            <motion.div
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
                    src={project.image}
                    alt={project.project_name}
                    fill
                    priority
                    unoptimized
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 text-white sm:p-7">
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/70">
                      {project.project_type}
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
                <p className="mt-1 text-sm font-semibold text-[#222222]">
                  {project.duration}
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="relative z-10 px-5 pb-20 sm:px-8 lg:px-12 lg:pb-28">
          <div className="mx-auto grid max-w-[1400px] overflow-hidden rounded-[1.75rem] border border-black/10 bg-white shadow-[0_22px_60px_rgba(17,17,17,0.07)] md:grid-cols-[1.25fr_0.9fr_auto] md:items-stretch">
            <div className="flex items-center gap-4 border-b border-black/10 p-5 sm:p-6 md:border-b-0 md:border-r">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F7F7F4] text-[#F24202]">
                <Briefcase className="h-5 w-5" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#858585]">
                  Tech Stack
                </p>
                <p className="mt-1 truncate text-sm font-semibold text-[#222222] sm:text-base">
                  {project.tech_stack?.slice(0, 2).join(", ")}
                  {project.tech_stack?.length > 2 ? "..." : ""}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 border-b border-black/10 p-5 sm:p-6 md:border-b-0 md:border-r">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F7F7F4] text-[#F24202]">
                <Calendar className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#858585]">
                  Timeline
                </p>
                <p className="mt-1 text-sm font-semibold text-[#222222] sm:text-base">
                  {project.duration}
                </p>
              </div>
            </div>

            {project.live_link && (
              <a
                href={project.live_link}
                target="_blank"
                rel="noopener noreferrer"
                className={marketingButton("group min-h-auto px-5 py-3")}
              >
                Visit Live Site
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            )}
          </div>
        </section>

        <section className="px-5 pb-24 sm:px-8 lg:px-12 lg:pb-32">
          <div className="mx-auto grid max-w-[1400px] gap-6 lg:grid-cols-2 lg:gap-8">
            <motion.article
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-12%" }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-white p-7 shadow-[0_16px_40px_rgba(17,17,17,0.05)] sm:p-10"
            >
              <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-[#FFD6C7]/60 blur-2xl" />
              <div className="relative">
                <div className="flex items-center gap-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#F24202]" />
                  <h2 className="text-2xl font-semibold tracking-[-0.05em] text-[#111111] sm:text-3xl">
                    The Challenge
                  </h2>
                </div>
                <div className="mt-9 space-y-6">
                  {project.real_challenges?.map((challenge, index) => (
                    <p
                      key={index}
                      className="border-l-2 border-[#F24202]/25 pl-5 text-[15px] font-medium leading-7 text-[#626262] sm:text-base"
                    >
                      {challenge}
                    </p>
                  ))}
                </div>
              </div>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-12%" }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="relative overflow-hidden rounded-[2rem] bg-[#111111] p-7 text-white shadow-[0_18px_50px_rgba(17,17,17,0.18)] sm:p-10"
            >
              <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[#D9FF5B]/25 blur-3xl" />
              <div className="relative">
                <div className="flex items-center gap-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#D9FF5B]" />
                  <h2 className="text-2xl font-semibold tracking-[-0.05em] sm:text-3xl">
                    Our Solution
                  </h2>
                </div>
                <div className="mt-9 space-y-6">
                  {(project.solutions_implemented || project.technical_solutions)?.map(
                    (solution, index) => (
                      <p
                        key={index}
                        className="border-l-2 border-[#D9FF5B]/35 pl-5 text-[15px] font-medium leading-7 text-white/70 sm:text-base"
                      >
                        {solution}
                      </p>
                    ),
                  )}
                </div>
              </div>
            </motion.article>
          </div>
        </section>

        <section className="bg-[#EDEDE7] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="mx-auto grid max-w-[1400px] gap-6 md:grid-cols-2 md:gap-8">
            {project.gallery?.map((img, index) => (
              <motion.div
                key={img}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group relative overflow-hidden rounded-[2rem] bg-[#111111] p-2 shadow-[0_20px_48px_rgba(17,17,17,0.14)] ${
                  index % 2 !== 0 ? "md:mt-16" : ""
                }`}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.55rem]">
                  <Image
                    src={img}
                    alt={`Gallery Image ${index + 1}`}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="relative mx-auto max-w-[1400px] overflow-hidden rounded-[2.25rem] bg-[#111111] p-7 shadow-[0_30px_70px_rgba(17,17,17,0.2)] sm:p-10 lg:rounded-[3rem] lg:p-16">
            <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-[#F24202]/60 blur-3xl" />
            <div className="absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-[#D9FF5B]/35 blur-3xl" />

            <div className="relative grid gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.08] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-white/75">
                  <Sparkles className="h-3.5 w-3.5 text-[#D9FF5B]" aria-hidden="true" />
                  Measurable Impact
                </div>
                <h2 className="mt-6 text-4xl font-semibold leading-none tracking-[-0.06em] text-white sm:text-5xl">
                  The Results
                </h2>

                <div className="mt-10 grid gap-3 sm:grid-cols-2">
                  {project.key_features?.map((result, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.07] p-4 backdrop-blur-sm"
                    >
                      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#D9FF5B] text-[#111111]">
                        <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
                      </span>
                      <span className="text-sm font-medium leading-6 text-white/82">
                        {result}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.75rem] border border-white/15 bg-white/[0.08] p-7 text-center backdrop-blur-sm sm:p-9">
                <h3 className="text-3xl font-semibold leading-[1.05] tracking-[-0.055em] text-white">
                  Ready to achieve similar results?
                </h3>
                <p className="mx-auto mt-5 max-w-md text-base leading-7 text-white/70">
                  Let&apos;s discuss how we can transform your digital presence and drive real growth.
                </p>
                <Link
                  href="/#contact"
                  className={marketingButtonOnDark("group mt-8")}
                >
                  Start Your Project
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
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
