"use client";

import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

export default function WhyUs() {
    return (
        <section
            id="mission"
            className="relative overflow-hidden bg-white text-black border-y border-dashed border-gray-300"
        >
            {/* ── WHY FORMIX STATEMENT BLOCK ── */}
            <div className="relative mx-auto container max-w-8xl marketing-section-container border-x border-dashed border-gray-300">
                <div>
                    {/* Eyebrow */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        className="mb-10 flex justify-center"
                    >
                        <span className="rounded-full border border-black/15 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-black/45">
                            / 002 / Why Opygen
                        </span>
                    </motion.div>

                    {/* Big statement */}
                    <motion.p
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                        className="mx-auto max-w-4xl text-center text-[clamp(1.7rem,4.2vw,3.2rem)] font-black leading-[1.15] tracking-tight"
                    >
                        <span className="text-black">
                            Hiring an in-house team takes months. Agencies are
                            slow and unpredictable. Freelancers come and go.
                            Opygen is your software partner – design,
                            development, marketing, and consulting,{" "}
                        </span>
                        <span className="text-black/30">
                            under one roof, built to actually ship.
                        </span>
                    </motion.p>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                        className="mt-12 flex justify-center"
                    >
                        <a
                            href="#services"
                            className="flex items-center gap-3 text-[12px] font-bold uppercase tracking-[0.18em] text-black/70 transition hover:text-black"
                        >
                            See how it works
                            <span className="flex size-9 items-center justify-center rounded-full bg-black text-white">
                                <ArrowDown className="size-4" />
                            </span>
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
