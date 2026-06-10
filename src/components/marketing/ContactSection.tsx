"use client";

import { useState } from "react";
import { CheckCircle2, Mail, Phone, Send } from "lucide-react";
import { motion } from "framer-motion";

const budgetOptions = ["$500–$1000", "$1000–$3000", "$3000–$5000", "$5000+"];

export default function ContactSection() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        website: "",
        budget: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        setSubmitted(true);
    };

    return (
        <section
            id="contact"
            className="relative text-black border-b border-dashed border-gray-300"
        >
            <div className="mx-auto max-w-7xl border-x border-dashed border-gray-300 px-4 sm:px-6 py-20 md:py-28">
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16 lg:items-start">
                    {/* LEFT — info */}
                    <div className="flex flex-col justify-between gap-12 lg:sticky lg:top-28">
                        <div>
                            {/* Eyebrow */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="mb-6 inline-flex items-center rounded-full border border-black/15 bg-white/60 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-black/50"
                            >
                                Contact
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
                                className="mb-6 text-[clamp(2.8rem,5.5vw,5rem)] font-black leading-[0.93] tracking-tight"
                            >
                                Get In{" "}
                                <span className="text-black/30">Touch.</span>
                            </motion.h2>

                            {/* Subtext */}
                            <motion.p
                                initial={{ opacity: 0, y: 14 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="max-w-xs text-[13.5px] leading-relaxed text-black/55"
                            >
                                Got questions or ready to start your design
                                project? Let&apos;s bring your ideas to life!
                            </motion.p>
                        </div>

                        {/* Contact info cards */}
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.15 }}
                            className="flex flex-col gap-3"
                        >
                            {[
                                {
                                    icon: Mail,
                                    label: "/Chat to sales",
                                    value: "hello@formix.com",
                                    href: "mailto:hello@formix.com",
                                },
                                {
                                    icon: Phone,
                                    label: "/Call us",
                                    value: "+359-123-45678",
                                    href: "tel:+35912345678",
                                },
                            ].map((item, i) => (
                                <a
                                    key={i}
                                    href={item.href}
                                    className="group flex flex-col gap-1.5 rounded-2xl border border-black/8 bg-white/80 px-6 py-5 backdrop-blur-sm transition hover:border-black/20 hover:shadow-sm"
                                >
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-black/35">
                                        {item.label}
                                    </span>
                                    <span className="text-[15px] font-black text-black transition group-hover:text-black/70">
                                        {item.value}
                                    </span>
                                </a>
                            ))}
                        </motion.div>
                    </div>

                    {/* RIGHT — form */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.55, delay: 0.1 }}
                        className="overflow-hidden rounded-2xl bg-[#111111] p-6 md:p-8"
                    >
                        {submitted ? (
                            <div className="flex min-h-[560px] flex-col items-center justify-center text-center">
                                <div className="mb-6 flex size-14 items-center justify-center rounded-full bg-white/10">
                                    <CheckCircle2 className="size-7 text-green-400" />
                                </div>
                                <h3 className="text-2xl font-black text-white">
                                    Message sent!
                                </h3>
                                <p className="mt-3 max-w-xs text-[13px] leading-relaxed text-white/45">
                                    Thanks. We&apos;ll get back to you within 24
                                    hours.
                                </p>
                                <button
                                    type="button"
                                    onClick={() => setSubmitted(false)}
                                    className="mt-8 rounded-full border border-white/15 px-6 py-2.5 text-[11px] font-black uppercase tracking-widest text-white/60 transition hover:border-white/30 hover:text-white"
                                >
                                    Send another
                                </button>
                            </div>
                        ) : (
                            <form
                                onSubmit={handleSubmit}
                                className="flex flex-col gap-4"
                            >
                                {/* Name */}
                                <FormField
                                    label="/Your Name*"
                                    id="name"
                                    placeholder="Your name"
                                    value={form.name}
                                    onChange={(v) =>
                                        setForm({ ...form, name: v })
                                    }
                                />

                                {/* Email */}
                                <FormField
                                    label="/E-Mail*"
                                    id="email"
                                    type="email"
                                    placeholder="Your Email"
                                    value={form.email}
                                    onChange={(v) =>
                                        setForm({ ...form, email: v })
                                    }
                                />

                                {/* Website + Budget row */}
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <FormField
                                        label="/Website"
                                        id="website"
                                        placeholder="Your Website"
                                        value={form.website}
                                        onChange={(v) =>
                                            setForm({ ...form, website: v })
                                        }
                                        required={false}
                                    />

                                    {/* Budget select */}
                                    <div className="flex flex-col gap-2">
                                        <label
                                            htmlFor="budget"
                                            className="text-[10px] font-black uppercase tracking-[0.2em] text-white/35"
                                        >
                                            /Budget
                                        </label>
                                        <div className="relative">
                                            <select
                                                id="budget"
                                                value={form.budget}
                                                onChange={(e) =>
                                                    setForm({
                                                        ...form,
                                                        budget: e.target.value,
                                                    })
                                                }
                                                className="w-full appearance-none rounded-xl border border-white/10 bg-white/8 px-4 py-3.5 text-[13px] font-semibold text-white/60 outline-none transition focus:border-white/25 focus:bg-white/10"
                                            >
                                                <option
                                                    value=""
                                                    disabled
                                                    className="bg-[#111] text-white/60"
                                                >
                                                    $3000–$5000
                                                </option>
                                                {budgetOptions.map((opt) => (
                                                    <option
                                                        key={opt}
                                                        value={opt}
                                                        className="bg-[#111] text-white"
                                                    >
                                                        {opt}
                                                    </option>
                                                ))}
                                            </select>
                                            <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white/30">
                                                ▾
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Message */}
                                <div className="flex flex-col gap-2">
                                    <label
                                        htmlFor="message"
                                        className="text-[10px] font-black uppercase tracking-[0.2em] text-white/35"
                                    >
                                        /Message*
                                    </label>
                                    <textarea
                                        id="message"
                                        required
                                        rows={5}
                                        placeholder="Your Message"
                                        value={form.message}
                                        onChange={(e) =>
                                            setForm({
                                                ...form,
                                                message: e.target.value,
                                            })
                                        }
                                        className="resize-none rounded-xl border border-white/10 bg-white/8 px-4 py-3.5 text-[13px] font-semibold leading-relaxed text-white outline-none transition placeholder:text-white/25 focus:border-white/25 focus:bg-white/10"
                                    />
                                </div>

                                {/* Submit */}
                                <button
                                    type="submit"
                                    className="mt-1 flex w-full items-center justify-center gap-2 rounded-full bg-white py-4 text-[13px] font-black text-black transition hover:bg-white/90 active:scale-[0.98]"
                                >
                                    Send Message
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function FormField({
    id,
    label,
    onChange,
    placeholder,
    type = "text",
    value,
    required = true,
}: {
    id: string;
    label: string;
    onChange: (value: string) => void;
    placeholder: string;
    type?: string;
    value: string;
    required?: boolean;
}) {
    return (
        <div className="flex flex-col gap-2">
            <label
                htmlFor={id}
                className="text-[10px] font-black uppercase tracking-[0.2em] text-white/35"
            >
                {label}
            </label>
            <input
                id={id}
                required={required}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="rounded-xl border border-white/10 bg-white/8 px-4 py-3.5 text-[13px] font-semibold text-white outline-none transition placeholder:text-white/25 focus:border-white/25 focus:bg-white/10"
            />
        </div>
    );
}
