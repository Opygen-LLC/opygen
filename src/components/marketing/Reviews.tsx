"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { FaLinkedin, FaFacebook, FaUpwork } from "react-icons/fa6";
import { SiFreelancer } from "react-icons/si";
import { TbBrandFiverr } from "react-icons/tb";

const reviews = [
    {
        rating: 5.0,
        quote: "Always does great work. Been working with him for a few months now.",
        name: "Abdul Azeezk",
        role: "CEO & Founder",
        avatar: "https://i.ibb.co.com/Dg7Q3b38/630254154-122096639391258623-4022386655765851305-n.jpg",
        social: "facebook",
    },
    {
        rating: 4.0,
        quote: "Always does great work. Been working with him for a few months now.",
        name: "M. Brown",
        role: "Marketing Director",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80",
        social: "fiverr",
    },
    {
        rating: 5.0,
        quote: "Thumbs up for the entire team they are so professional I would recommend them for my next project. Exceptional delivery!",
        name: "Tongo Paul",
        role: "Head of Product",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&q=80",
        social: "fiverr",
    },
    {
        rating: 5.0,
        quote: "Great work as always, highly reliable.",
        name: "Jesse Leigh",
        role: "CEO & Founder",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&q=80",
        social: "fiverr",
    },
    {
        rating: 5.0,
        quote: "Excellent service delivery. I will definitely work with them again.",
        name: "Prayaas Suri",
        role: "Vedio Editor",
        avatar: "https://i.ibb.co.com/0jmNpWg1/401b0560-9ca6-4cc8-baaa-aef8b3a1cbc0.webp",
        social: "fiverr",
    },
    {
        rating: 5.0,
        quote: "Opygen was so easy to work with and gave us exactly the custom GPT we asked for. Very responsive and communication was great.",
        name: "Sophia Martinez",
        role: "CEO & Co-Founder",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
        social: "fiverr",
    },
];

function SocialIcon({ social }: { social: string }) {
    switch (social) {
        case "linkedin":
            return <FaLinkedin className="size-3.5" />;

        case "facebook":
            return <FaFacebook className="size-3.5" />;

        case "fiverr":
            return <TbBrandFiverr className="size-3.5" />;

        case "upwork":
            return <FaUpwork className="size-3.5" />;

        case "freelancer":
            return <SiFreelancer className="size-3.5" />;

        case "x":
            return <X className="size-3.5" strokeWidth={2} />;

        default:
            return null;
    }
}

function ReviewCard({ review }: { review: (typeof reviews)[0] }) {
    return (
        <div className="w-85 shrink-0 flex flex-col justify-between overflow-hidden rounded-2xl border border-black/8 bg-white/70 p-6 backdrop-blur-sm mx-2">
            {/* Top: rating + quote mark */}
            <div className="mb-5 flex items-center justify-end">
                {/* <div className="flex items-center gap-1.5">
                    <span className="text-[12px] font-black text-black/70">
                        {review.rating.toFixed(1)}
                    </span>
                    <span className="text-[#ff4d00] text-xs">★</span>
                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-black/30">
                        Rating
                    </span>
                </div>*/}
                <span className="font-serif text-[3rem] font-black leading-none text-black/8 select-none">
                    &quot;
                </span>
            </div>

            {/* Quote */}
            <p className="mb-6 flex-1 text-[14px] font-semibold leading-relaxed text-black/75">
                &quot;{review.quote}&quot;
            </p>

            {/* Author card */}
            <div className="flex items-center justify-between rounded-xl border border-dashed border-black/10 bg-black/[0.03] px-4 py-3">
                <div className="flex items-center gap-3">
                    <div className="relative size-9 shrink-0 overflow-hidden rounded-full border border-black/10">
                        <Image
                            src={review.avatar}
                            alt={review.name}
                            fill
                            sizes="36px"
                            className="object-cover"
                            unoptimized
                        />
                    </div>
                    <div>
                        <p className="text-[13px] font-black leading-tight text-black">
                            {review.name}
                        </p>
                        <p className="text-[9px] font-black uppercase tracking-[0.16em] text-black/35">
                            {review.role}
                        </p>
                    </div>
                </div>
                <div className="flex size-8 items-center justify-center rounded-full border border-black/10 bg-white text-black/40">
                    <SocialIcon social={review.social} />
                </div>
            </div>
        </div>
    );
}

function MarqueeRow({
    items,
    direction = "left",
    speed = 40,
}: {
    items: typeof reviews;
    direction?: "left" | "right";
    speed?: number;
}) {
    // Duplicate for seamless loop
    const doubled = [...items, ...items];
    const totalWidth = items.length * 356; // card width 340 + gap ~16

    return (
        <div className="overflow-hidden w-full">
            <div
                className="flex"
                style={{
                    animation: `marquee-${direction} ${speed}s linear infinite`,
                    width: `${totalWidth * 2}px`,
                }}
            >
                {doubled.map((review, i) => (
                    <ReviewCard key={i} review={review} />
                ))}
            </div>
        </div>
    );
}

export default function Reviews() {
    return (
        <section
            id="reviews"
            className="relative text-black border-b border-dashed border-gray-300"
        >
            <div className="mx-auto w-full container max-w-8xl marketing-section-container border-x border-dashed border-gray-300">
                {/* Header */}
                <div className="mb-12 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_340px] lg:items-end">
                    <div>
                        {/* Eyebrow */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-5 inline-flex items-center rounded-full border border-black/15 bg-white/60 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-black/45"
                        >
                            / 006 / Reviews
                        </motion.div>

                        {/* Headline */}
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
                            Success{" "}
                            <span className="text-black/28">Stories.</span>
                        </motion.h2>
                    </div>

                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="max-w-xs text-[13.5px] leading-relaxed text-black/50 lg:text-right"
                    >
                        Discover how our design subscription helps innovative
                        brands grow smarter and faster.
                    </motion.p>
                </div>

                {/* Reviews grid */}
                {/* <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {reviews.map((review, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-8%" }}
                            transition={{ delay: i * 0.07, duration: 0.45 }}
                            className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-black/8 bg-white/70 p-6 backdrop-blur-sm transition-shadow hover:shadow-md"
                        >
                            <div className="mb-5 flex items-center justify-between">
                                <div className="flex items-center gap-1.5">
                                    <span className="text-[12px] font-black text-black/70">
                                        {review.rating.toFixed(1)}
                                    </span>
                                    <span className="text-[#ff4d00] text-xs">
                                        ★
                                    </span>
                                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-black/30">
                                        Rating
                                    </span>
                                </div>
                                <span className="font-serif text-[3rem] font-black leading-none text-black/8 select-none">
                                    &quot;
                                </span>
                            </div>

                            <p className="mb-6 flex-1 text-[14px] font-semibold leading-relaxed text-black/75">
                                &quot;{review.quote}&quot;
                            </p>

                            <div className="flex items-center justify-between rounded-xl border border-dashed border-black/10 bg-black/[0.03] px-4 py-3">
                                <div className="flex items-center gap-3">
                                    <div className="relative size-9 shrink-0 overflow-hidden rounded-full border border-black/10">
                                        <Image
                                            src={review.avatar}
                                            alt={review.name}
                                            fill
                                            sizes="36px"
                                            className="object-cover"
                                            unoptimized
                                        />
                                    </div>
                                    <div>
                                        <p className="text-[13px] font-black leading-tight text-black">
                                            {review.name}
                                        </p>
                                        <p className="text-[9px] font-black uppercase tracking-[0.16em] text-black/35">
                                            {review.role}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex size-8 items-center justify-center rounded-full border border-black/10 bg-white text-black/40 transition hover:border-black/25 hover:text-black">
                                    {review.social === "x" ? (
                                        <XIcon />
                                    ) : (
                                        <LinkedInIcon />
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div> */}

                <style>{`
                        @keyframes marquee-left {
                            0%   { transform: translateX(0); }
                            100% { transform: translateX(-50%); }
                        }
                        @keyframes marquee-right {
                            0%   { transform: translateX(-50%); }
                            100% { transform: translateX(0); }
                        }
                    `}</style>

                <div className="flex flex-col gap-3 py-6">
                    {/* Row 1: left → */}
                    <MarqueeRow items={reviews} direction="left" speed={35} />
                    {/* Row 2: ← right */}
                    <MarqueeRow
                        items={[...reviews].reverse()}
                        direction="right"
                        speed={40}
                    />
                </div>
            </div>
        </section>
    );
}
