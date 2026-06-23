"use client";

import { motion, Variants } from "framer-motion";
import { Star, ArrowUpRight } from "lucide-react";

const authors = [
    "https://themexriver.com/wp/avista/wp-content/uploads/2025/10/author-1.webp",
    "https://themexriver.com/wp/avista/wp-content/uploads/2025/10/author-2.webp",
    "https://themexriver.com/wp/avista/wp-content/uploads/2025/10/author-3.webp",
    "https://themexriver.com/wp/avista/wp-content/uploads/2025/10/author-4.webp",
];

const values = [
    {
        title: "Customer-Centric Mind",
        desc: "We put our clients at the heart of everything we do. By understanding their needs, goals, and challenges, we create personalized strategies and solutions that deliver real value.",
    },
    {
        title: "Results-Driven",
        desc: "Every solution is designed to create measurable business impact.",
    },
    {
        title: "Collaboration",
        desc: "We work closely with clients as partners to achieve shared success.",
    },
];

const containerVariants: Variants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 32 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export default function AboutUs() {
    return (
        <section className="w-full bg-white font-sans py-16 md:py-24 lg:py-28 overflow-hidden border-t border-black/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-stretch"
                >
                    {/* Left Column - Main About Text & Rating */}
                    <motion.div
                        variants={itemVariants}
                        className="lg:col-span-6 flex flex-col justify-center"
                    >
                        {/* Subtitle Badge */}
                        <div className="inline-flex items-center gap-2 border border-black/10 rounded-full px-4 py-1.5 w-fit bg-neutral-50 shadow-sm">
                            <span className="flex h-3 w-3 items-center justify-center rounded-full bg-[#FF3D00]/10 text-[#FF3D00]">
                                <Star className="h-2.5 w-2.5 fill-[#FF3D00] stroke-none" />
                            </span>
                            <span className="text-[10px] font-bold text-black tracking-widest uppercase">
                                About US
                            </span>
                        </div>

                        {/* Heading */}
                        <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-black text-black leading-[1.1] tracking-tight uppercase">
                            Our process is simple,
                            <br />
                            purposeful, and adaptable.
                        </h2>

                        {/* Divider Line */}
                        <div className="my-6 relative w-20 h-[3px] bg-[#FF3D00] rounded-full overflow-hidden">
                            <motion.div
                                className="absolute inset-0 bg-black"
                                initial={{ x: "-100%" }}
                                whileInView={{ x: "100%" }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 2.5,
                                    ease: "linear",
                                }}
                            />
                        </div>

                        {/* Description */}
                        <p className="text-base text-black/70 leading-relaxed max-w-xl">
                            Avista Digital Agency is a creative and strategy-driven firm
                            dedicated to helping brands thrive in the digital world. We
                            specialize in web design, branding, digital marketing, and
                            performance-driven solutions that connect businesses with
                            their audiences. With a focus on innovation, Avista empowers
                            companies to grow faster.
                        </p>

                        {/* Rating & Testimonials Stack */}
                        <div className="mt-8 pt-8 border-t border-black/5 flex flex-col sm:flex-row sm:items-center gap-6">
                            {/* Avatar stack overlay */}
                            <div className="relative flex items-center pr-2 py-4">
                                {/* Decorative background shapes */}
                                <img
                                    src="https://themexriver.com/wp/avista/wp-content/uploads/2025/10/a1-shape-1.webp"
                                    alt="Background ornament"
                                    className="absolute -left-6 -top-4 w-20 h-20 opacity-40 object-contain pointer-events-none select-none"
                                />
                                <img
                                    src="https://themexriver.com/wp/avista/wp-content/uploads/2025/10/a1-shape-2.webp"
                                    alt="Background ornament"
                                    className="absolute left-10 -bottom-4 w-16 h-16 opacity-40 object-contain pointer-events-none select-none"
                                />

                                <div className="relative z-10 flex -space-x-3">
                                    {authors.map((src, idx) => (
                                        <motion.img
                                            key={idx}
                                            src={src}
                                            alt={`Client Avatar ${idx + 1}`}
                                            className="h-12 w-12 rounded-full border-2 border-white object-cover shadow-sm cursor-pointer"
                                            whileHover={{
                                                scale: 1.15,
                                                zIndex: 20,
                                                borderColor: "#FF3D00",
                                            }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 300,
                                                damping: 18,
                                            }}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Rating Text Details */}
                            <div className="flex-1 flex flex-col justify-center gap-1">
                                <div className="flex items-center gap-2">
                                    <div className="flex items-center gap-0.5">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className="h-4 w-4 fill-[#FFB800] stroke-none"
                                            />
                                        ))}
                                    </div>
                                    <span className="text-base font-bold text-black tracking-tight">
                                        4.9 Rating
                                    </span>
                                </div>
                                <p className="text-xs sm:text-sm text-black/55 font-medium max-w-xs leading-snug">
                                    Depends on 1.5 k positive feedback by our clients
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Middle Column - Our Values Accordion-like cards */}
                    <motion.div
                        variants={itemVariants}
                        className="lg:col-span-5 flex flex-col justify-center"
                    >
                        <h3 className="text-xs font-bold text-black/40 uppercase tracking-widest mb-6">
                            Our Values
                        </h3>

                        <div className="flex flex-col gap-5">
                            {values.map((val, idx) => (
                                <motion.div
                                    key={idx}
                                    className="group relative p-6 rounded-[24px] border border-black/[0.06] bg-neutral-50/50 hover:bg-white hover:border-[#FF3D00]/20 hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
                                    whileHover={{ x: 6 }}
                                >
                                    {/* Left accent color block */}
                                    <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-transparent group-hover:bg-[#FF3D00] rounded-l-[24px] transition-colors duration-300" />

                                    <div className="flex items-start justify-between gap-4">
                                        <h4 className="font-extrabold text-lg text-black group-hover:text-[#FF3D00] transition-colors duration-300 uppercase tracking-tight">
                                            {val.title}
                                        </h4>
                                        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-black/5 text-black/40 group-hover:bg-[#FF3D00]/10 group-hover:text-[#FF3D00] transition-colors duration-300">
                                            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                        </div>
                                    </div>

                                    <p className="mt-3 text-sm text-black/60 leading-relaxed font-medium">
                                        {val.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Column - rotated "Expert Team" vertical typography banner */}
                    <motion.div
                        variants={itemVariants}
                        className="lg:col-span-1 hidden lg:flex items-center justify-center select-none pointer-events-none"
                    >
                        <div className="flex justify-center items-center h-full pt-12">
                            <span
                                className="text-[64px] font-black text-black/[0.04] tracking-tighter uppercase whitespace-nowrap"
                                style={{ writingMode: "vertical-rl" }}
                            >
                                Expert Team
                            </span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
