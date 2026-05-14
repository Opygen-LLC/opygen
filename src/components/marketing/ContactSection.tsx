"use client";

import { useState } from "react";
import { CheckCircle2, Send, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "../ui/button";

export default function ContactSection() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate API call
        setSubmitted(true);
    };

    const contactInfo = [
        { icon: Mail, label: "Email", value: "hello@opygen.com" },
        { icon: MapPin, label: "Base Operations", value: "Dhaka, Bangladesh" },
        { icon: Clock, label: "Response Window", value: "Within 24 hours" },
    ];

    return (
        <section
            id="contact"
            className="py-24 bg-white border-t border-[#E8E8E8]"
        >
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                    {/* Left Column: Context */}
                    <div className="space-y-8">
                        <div>
                            <span className="label-pill mb-8">
                                Communications
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-[#0A0A0A] mt-6 mb-6">
                                Initialize <br />
                                <span className="text-[#6B6B6B]">
                                    Consultation.
                                </span>
                            </h2>
                            <p className="text-[#6B6B6B] text-lg leading-relaxed max-w-md">
                                Whether you&rsquo;re scaling a cleaning empire or
                                optimizing a field service team, our engineers
                                are ready to discuss your integration.
                            </p>
                        </div>

                        <div className="space-y-6 pt-4">
                            {contactInfo.map((item) => (
                                <div
                                    key={item.label}
                                    className="flex items-start gap-4 group"
                                >
                                    <div className="mt-1 size-8 flex items-center justify-center border border-[#E8E8E8] group-hover:border-[#0A0A0A] transition-colors">
                                        <item.icon className="size-3.5 text-[#6B6B6B] group-hover:text-[#0A0A0A]" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#6B6B6B] mb-0.5">
                                            {item.label}
                                        </p>
                                        <p className="text-sm font-bold text-[#0A0A0A]">
                                            {item.value}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Form Module */}
                    <div className="relative">
                        {submitted ? (
                            <div className="bg-[#F9F9F9] border border-[#0A0A0A] p-12 text-center animate-in fade-in zoom-in-95 duration-500">
                                <div className="size-16 bg-[#0A0A0A] flex items-center justify-center mx-auto mb-6">
                                    <CheckCircle2 className="text-white size-8" />
                                </div>
                                <h3 className="text-xl font-bold text-[#0A0A0A] mb-2 uppercase tracking-tighter">
                                    Transmission Received
                                </h3>
                                <p className="text-sm text-[#6B6B6B] mb-8">
                                    Data logged. An operative will contact you
                                    shortly.
                                </p>
                                <Button
                                    onClick={() => setSubmitted(false)}
                                    variant="outline"
                                    className="rounded-none border-[#0A0A0A] uppercase tracking-widest text-[10px] font-bold"
                                >
                                    Send Another Message
                                </Button>
                            </div>
                        ) : (
                            <form
                                onSubmit={handleSubmit}
                                className="bg-white border border-[#E8E8E8] p-8 md:p-12 space-y-6 shadow-sm"
                            >
                                <div className="space-y-2">
                                    <label
                                        htmlFor="name"
                                        className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#6B6B6B]"
                                    >
                                        Name
                                    </label>
                                    <input
                                        id="name"
                                        required
                                        placeholder="e.g. Sterling Services Ltd."
                                        className="w-full bg-[#F9F9F9] border border-[#E8E8E8] px-4 py-3 text-sm focus:border-[#0A0A0A] focus:outline-none transition-colors rounded-none placeholder:text-[#ADADAD]"
                                        value={form.name}
                                        onChange={(e) =>
                                            setForm({
                                                ...form,
                                                name: e.target.value,
                                            })
                                        }
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label
                                        htmlFor="email"
                                        className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#6B6B6B]"
                                    >
                                        E-Mail
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        required
                                        placeholder="contact@entity.com"
                                        className="w-full bg-[#F9F9F9] border border-[#E8E8E8] px-4 py-3 text-sm focus:border-[#0A0A0A] focus:outline-none transition-colors rounded-none placeholder:text-[#ADADAD]"
                                        value={form.email}
                                        onChange={(e) =>
                                            setForm({
                                                ...form,
                                                email: e.target.value,
                                            })
                                        }
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label
                                        htmlFor="message"
                                        className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#6B6B6B]"
                                    >
                                        Requirement Brief
                                    </label>
                                    <textarea
                                        id="message"
                                        required
                                        rows={4}
                                        placeholder="Describe your current operational bottlenecks..."
                                        className="w-full bg-[#F9F9F9] border border-[#E8E8E8] px-4 py-3 text-sm focus:border-[#0A0A0A] focus:outline-none transition-colors rounded-none resize-none placeholder:text-[#ADADAD]"
                                        value={form.message}
                                        onChange={(e) =>
                                            setForm({
                                                ...form,
                                                message: e.target.value,
                                            })
                                        }
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full bg-[#0A0A0A] text-white hover:bg-[#1A1A1A] rounded-none py-7 uppercase tracking-[0.2em] text-xs font-bold group"
                                >
                                    Dispatch Message
                                    <Send className="ml-2 size-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </Button>

                                {/* <p className="text-[9px] text-center text-[#ADADAD] uppercase tracking-widest font-medium">
                                    Secure encrypted transmission — AES-256
                                </p> */}
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
