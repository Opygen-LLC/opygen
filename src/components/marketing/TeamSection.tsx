"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

interface TeamMember {
    name: string;
    role: string;
    initials: string;
    bio: string;
    image?: string;
    portfolio: string;
}

const team: TeamMember[] = [
    {
        name: "MD. Sidur Rahaman Rupom",
        role: "Co-founder & CEO",
        initials: "SR",
        bio: "Full-stack developer and strategic leader responsible for company vision, product direction, and long-term business growth while actively contributing to engineering decisions.",
        image: "/team/rupom.png",
        portfolio: "https://rupom.dev",
    },
    {
        name: "MD. Faysal Mridha",
        role: "Co-founder & CTO",
        initials: "FM",
        bio: "Full-stack developer and leading technology strategy, system architecture, and engineering excellence to build scalable and reliable software solutions.",
        image: "/team/faysal.png",
        portfolio: "https://faysal.dev",
    },
    {
        name: "Syed Mohiuddin Meshal",
        role: "Co-founder & COO",
        initials: "SM",
        bio: "Full-stack developer and overseeing operations, process optimization, and cross-functional execution to ensure efficient delivery and sustainable growth.",
        image: "/team/meshal.png",
        portfolio: "https://syedmohiuddinmeshal.netlify.app",
    },
    {
        name: "Mohibbullah Khan",
        role: "Co-founder & CPO",
        initials: "MK",
        bio: "Full-stack developer and focused on product strategy, user experience, and feature innovation, ensuring every solution delivers real value to customers.",
        image: "/team/muhib.png",
        portfolio: "https://muhibkhan.netlify.app",
    },
];

export default function TeamSection() {
    return (
        <section
            id="team"
            className="relative text-black border-b border-dashed border-gray-300"
        >
            <div className="mx-auto container max-w-8xl marketing-section-container border-x border-dashed border-gray-300">
                {/* Section header */}
                <div className="mb-14 grid gap-6 lg:grid-cols-[1fr_400px] lg:items-end">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-5 inline-flex items-center rounded-full border border-black/15 bg-white/60 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-black/50"
                        >
                            / Team
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
                            Built by Founders,
                            <br />
                            <span className="text-black/30">
                                Not Middlemen.
                            </span>
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="max-w-sm text-[13.5px] leading-relaxed text-black/55 lg:text-right"
                    >
                        Founders across product, engineering, operations, and
                        growth — working directly with each client instead of
                        handing projects through layers.
                    </motion.p>
                </div>

                {/* Cards grid */}
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {team.map((member, index) => (
                        <MemberCard
                            key={member.name}
                            member={member}
                            index={index}
                        />
                    ))}
                </div>

                {/* Bottom strip — join the team CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="mt-3 flex items-center justify-between rounded-2xl border border-dashed border-black/15 bg-white/60 px-6 py-5"
                >
                    <div>
                        <p className="text-[11px] font-black uppercase tracking-[0.2em] text-black/40">
                            Open positions
                        </p>
                        <p className="mt-1 text-[15px] font-black text-black">
                            We&apos;re always looking for exceptional people.
                        </p>
                    </div>
                    <a
                        href="#contact"
                        className="flex shrink-0 items-center gap-2 rounded-full bg-black px-5 py-2.5 text-[12px] font-bold text-white transition hover:bg-zinc-800 active:scale-95"
                    >
                        Work with us
                        <ArrowUpRight className="size-3.5" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}

function MemberCard({ member, index }: { member: TeamMember; index: number }) {
    const [imgError, setImgError] = useState(false);
    const hasImage = member.image && !imgError;

    return (
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.07, duration: 0.45 }}
            className="group overflow-hidden rounded-2xl border border-black/8 bg-white/80 backdrop-blur-sm transition-shadow hover:shadow-md"
        >
            {/* Photo */}
            <div className="relative aspect-[3/3.2] overflow-hidden bg-[#e8e8e8]">
                {hasImage ? (
                    <Image
                        src={member.image!}
                        alt={member.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover grayscale transition-transform duration-500 group-hover:scale-105"
                        onError={() => setImgError(true)}
                        unoptimized
                    />
                ) : (
                    <div className="flex h-full items-center justify-center text-5xl font-black text-black/20">
                        {member.initials}
                    </div>
                )}

                {/* Index badge */}
                <div className="absolute left-3 top-3 rounded-full border border-black/10 bg-white/90 px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.18em] text-black/50 backdrop-blur-sm">
                    0{index + 1}
                </div>

                {/* Role tag bottom */}
                <div className="absolute bottom-3 left-3">
                    <span className="inline-flex items-center rounded-full bg-black/80 px-3 py-1 text-[9px] font-black uppercase tracking-widest text-[#ff4d00] backdrop-blur-sm">
                        {member.role}
                    </span>
                </div>
            </div>

            {/* Info */}
            <div className="p-5">
                <Link
                    href={member.portfolio}
                    className="mb-3 flex items-start justify-between gap-3"
                >
                    <h3 className="text-[15px] font-black leading-tight tracking-tight text-black">
                        {member.name}
                    </h3>
                    <ArrowUpRight className="size-4 shrink-0 text-black/25 transition-colors group-hover:text-black" />
                </Link>

                {/* Divider */}
                <div className="mb-3 h-px w-full border-t border-dashed border-black/10" />

                <p className="text-[12.5px] leading-relaxed text-black/50">
                    {member.bio}
                </p>
            </div>
        </motion.article>
    );
}
