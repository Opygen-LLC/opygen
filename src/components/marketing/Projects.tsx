"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import project1 from "../../../public/projects/project-1.png";

type Project = {
    number: string;
    client: string;
    category: string;
    title: string;
    summary: string;
    image: StaticImageData;
    tags: string[];
};

const projects: Project[] = [
    {
        number: "/01",
        client: "Abroz Parts+",
        category: "Spare Parts & Machinery",
        title: "Spare parts and machinery, on one platform",
        summary:
            "A cross-platform mobile app for browsing spare parts and mechanical services, backed by a full admin dashboard for inventory, categories, and customer inquiries.",
        image: project1,
        tags: ["React Native", "Next.js", "Express.js", "MongoDB"],
    },
];

export default function Projects() {
    return (
        <section
            id="projects"
            className="relative text-black border-b border-dashed border-gray-300"
        >
            <div className="mx-auto container max-w-8xl marketing-section-container border-x border-dashed border-gray-300">
                {/* ── HEADER ── */}
                <div className="mb-14 grid gap-6 lg:grid-cols-[1fr_400px] lg:items-end">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-5 inline-flex items-center gap-2 rounded-full border border-black/15 bg-white/60 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-black/50"
                        >
                            / 004 / Projects
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.6,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            className="text-[clamp(2.8rem,5.5vw,5rem)] font-black leading-[0.93] tracking-tight"
                        >
                            Real Operators,
                            <br />
                            <span className="text-black/35">Real Results.</span>
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="max-w-sm text-[13.5px] leading-relaxed text-black/55 lg:text-right"
                    >
                        A handful of the service businesses we&apos;ve moved off
                        spreadsheets and onto Opygen — with the numbers to show
                        for it.
                    </motion.p>
                </div>

                {/* ── CARD GRID ── */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.number}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-8%" }}
                            transition={{
                                duration: 0.5,
                                delay: i * 0.08,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            className="group flex flex-col overflow-hidden rounded-3xl border border-black/8 bg-white transition hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5"
                        >
                            {/* Image */}
                            <div className="relative aspect-4/3 overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.client}
                                    fill
                                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                                    className="object-cover transition duration-500 group-hover:scale-105"
                                    unoptimized
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/0 to-black/0" />

                                {/* Number badge */}
                                <span className="absolute right-4 top-4 flex size-9 items-center justify-center rounded-full bg-green-500/15 text-[11px] font-black tracking-wider backdrop-blur-sm text-green-500">
                                    {project.number}
                                </span>

                                {/* Category + client overlay */}
                                <div className="absolute inset-x-4 bottom-4">
                                    <p className="text-[10px] font-black uppercase tracking-[0.18em] text-white/70">
                                        {project.category}
                                    </p>
                                    <h3 className="mt-1 text-[1.2rem] font-black leading-tight tracking-tight text-white">
                                        {project.client}
                                    </h3>
                                </div>
                            </div>

                            {/* Body */}
                            <div className="flex flex-1 flex-col p-6">
                                <h4 className="mb-2 text-[1.05rem] font-black leading-snug tracking-tight">
                                    {project.title}
                                </h4>
                                <p className="mb-5 flex-1 text-[13px] leading-relaxed text-black/55">
                                    {project.summary}
                                </p>

                                {/* Tags */}
                                <div className="mb-5 flex flex-wrap gap-2">
                                    {project.tags.map((tag, t) => (
                                        <span
                                            key={t}
                                            className="rounded-full border border-black/12 bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-black/55"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* ── BOTTOM CTA STRIP ── */}
                <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-10 flex flex-col items-start justify-between gap-4 rounded-2xl border border-dashed border-black/15 px-6 py-7 sm:flex-row sm:items-center sm:px-8"
                >
                    <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-black/35">
                            Your business, next
                        </p>
                        <p className="mt-0.5 text-[15px] font-black text-black">
                            Want to see what Opygen could do for your team?
                        </p>
                    </div>
                    <Link
                        href="#contact"
                        className="flex shrink-0 items-center gap-2 rounded-full bg-black px-5 py-2.5 text-[12px] font-bold text-white transition hover:bg-zinc-800 active:scale-95"
                    >
                        Start a project
                        <ArrowUpRight className="size-3.5" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
