"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Activity,
  Box,
  CheckCircle,
  Code,
  Database,
  Layers,
  Lightbulb,
  Mail,
  Map,
  Megaphone,
  MessageSquare,
  PenTool,
  PieChart,
  Search,
  Server,
  Smartphone,
  Target,
  TrendingUp,
  Users,
  Zap,
  Sparkles,
  ArrowRight,
  Check,
  type LucideIcon,
} from "lucide-react";

const iconComponents = {
  Search,
  Target,
  PenTool,
  Code,
  Map,
  Layers,
  Smartphone,
  CheckCircle,
  PieChart,
  Megaphone,
  TrendingUp,
  Mail,
  Activity,
  Database,
  Zap,
  Users,
  Lightbulb,
  Server,
  Box,
  MessageSquare,
} satisfies Record<string, LucideIcon>;

type IconName = keyof typeof iconComponents;
type ColorName = "red" | "blue" | "cyan" | "pink";

type ServiceStep = {
  title: string;
  desc: string;
  color: ColorName;
  icon: IconName;
};

type Service = {
  id: string;
  title: string;
  stages: string[];
  steps: ServiceStep[];
};

const servicesData: Service[] = [
  {
    id: "website-development",
    title: "Website Development",
    stages: ["Discovery", "Strategy", "Design", "Development", "Launch"],
    steps: [
      {
        title: "Requirement Analysis",
        desc: "We analyze your business goals, target audience, and feature requirements.",
        color: "red",
        icon: "Search",
      },
      {
        title: "Custom Strategy",
        desc: "Crafting a tailored architecture and SEO-friendly structure for growth.",
        color: "blue",
        icon: "Target",
      },
      {
        title: "UI/UX Design",
        desc: "Designing modern, high-converting interfaces that engage visitors.",
        color: "cyan",
        icon: "PenTool",
      },
      {
        title: "Full-Stack Build",
        desc: "Developing a fast, responsive, and scalable website ready for launch.",
        color: "pink",
        icon: "Code",
      },
    ],
  },
  {
    id: "app-development",
    title: "App Development",
    stages: ["Ideation", "Prototyping", "Development", "Testing", "Deployment"],
    steps: [
      {
        title: "Scope & Planning",
        desc: "Mapping out user journeys, essential features, and the right tech stack.",
        color: "red",
        icon: "Map",
      },
      {
        title: "Interactive Prototypes",
        desc: "Creating wireframes and high-fidelity designs for seamless user experiences.",
        color: "blue",
        icon: "Layers",
      },
      {
        title: "Mobile & Web Dev",
        desc: "Building robust frontend interfaces and scalable backend APIs.",
        color: "cyan",
        icon: "Smartphone",
      },
      {
        title: "Rigorous QA",
        desc: "Thorough testing for performance, security, and bug-free operation.",
        color: "pink",
        icon: "CheckCircle",
      },
    ],
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    stages: ["Research", "Campaigns", "Optimization", "Retargeting", "Scaling"],
    steps: [
      {
        title: "Market Research",
        desc: "Identifying high-converting audiences and analyzing competitor strategies.",
        color: "red",
        icon: "PieChart",
      },
      {
        title: "Ad Creation",
        desc: "Launching targeted Meta, Google, and TikTok ads to drive qualified traffic.",
        color: "blue",
        icon: "Megaphone",
      },
      {
        title: "Conversion Tuning",
        desc: "A/B testing landing pages and offers to maximize lead generation.",
        color: "cyan",
        icon: "TrendingUp",
      },
      {
        title: "Automated Follow-ups",
        desc: "Nurturing leads through email flows and multi-platform retargeting.",
        color: "pink",
        icon: "Mail",
      },
    ],
  },
  {
    id: "automation-crm",
    title: "Automation & CRM",
    stages: ["Audit", "Design", "Integration", "Testing", "Training"],
    steps: [
      {
        title: "Process Audit",
        desc: "Identifying bottlenecks and manual tasks that drain your team's time.",
        color: "red",
        icon: "Activity",
      },
      {
        title: "CRM Setup",
        desc: "Configuring tailored pipelines in HubSpot, GoHighLevel, or custom systems.",
        color: "blue",
        icon: "Database",
      },
      {
        title: "Workflow Automation",
        desc: "Connecting your apps to automate data entry, reminders, and follow-ups.",
        color: "cyan",
        icon: "Zap",
      },
      {
        title: "System Handoff",
        desc: "Ensuring your team knows exactly how to leverage the new automated flows.",
        color: "pink",
        icon: "Users",
      },
    ],
  },
  {
    id: "saas-product",
    title: "SaaS Product Development",
    stages: ["Validation", "MVP Build", "Beta Test", "Launch", "Iteration"],
    steps: [
      {
        title: "Idea Validation",
        desc: "Defining core features for your Minimum Viable Product to ensure fast launch.",
        color: "red",
        icon: "Lightbulb",
      },
      {
        title: "Architecture Design",
        desc: "Designing secure, scalable multi-tenant databases and subscription models.",
        color: "blue",
        icon: "Server",
      },
      {
        title: "MVP Development",
        desc: "Building the core application with authentication, payments, and dashboards.",
        color: "cyan",
        icon: "Box",
      },
      {
        title: "Beta & Feedback",
        desc: "Onboarding early users, gathering actionable feedback, and rapid iteration.",
        color: "pink",
        icon: "MessageSquare",
      },
    ],
  },
];

const colorMap: Record<
  ColorName,
  { icon: string; accent: string; ring: string }
> = {
  red: {
    icon: "bg-[#FFD6C7] text-[#111111]",
    accent: "bg-[#F24202]",
    ring: "border-[#F24202]/35",
  },
  blue: {
    icon: "bg-[#D9FF5B] text-[#111111]",
    accent: "bg-[#D9FF5B]",
    ring: "border-[#D9FF5B]/45",
  },
  cyan: {
    icon: "bg-white text-[#111111]",
    accent: "bg-white",
    ring: "border-white/35",
  },
  pink: {
    icon: "bg-[#F7F7F4] text-[#111111]",
    accent: "bg-[#FFD6C7]",
    ring: "border-[#FFD6C7]/45",
  },
};

export default function ServicesSteps() {
  const [activeTab, setActiveTab] = useState(servicesData[0].id);
  const activeData = servicesData.find((service) => service.id === activeTab) ?? servicesData[0];

  return (
    <section
      id="process"
      aria-labelledby="process-title"
      className="relative overflow-hidden px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32 font-space-grotesk"
    >
      <div
        aria-hidden="true"
        className="absolute -left-28 bottom-12 h-72 w-72 rounded-full bg-[#FFD6C7]/45 blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute -right-28 top-20 h-72 w-72 rounded-full bg-[#D9FF5B]/35 blur-3xl pointer-events-none"
      />

      <div className="relative mx-auto max-w-[1400px]">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid gap-8 border-b border-black/10 pb-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-end lg:pb-12"
        >
          <div>
            <div className="inline-flex items-center gap-2 rounded-xl border border-black/10 bg-white/80 px-3.5 py-2 shadow-[0_8px_24px_rgba(17,17,17,0.04)] backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-[#F24202] animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#4B4B4B]">
                Process Blueprint
              </span>
            </div>
            <h2 id="process-title" className="mt-6 text-4xl leading-[0.98] font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-[4rem]">
              Process-driven execution for <br className="hidden md:block" /> predictable, lasting growth.
            </h2>
          </div>
          <p className="max-w-xl text-base font-medium leading-7 text-gray-600 sm:text-lg sm:leading-8 lg:justify-self-end">
            Our step-by-step methodologies are designed around your business goals, ensuring every phase — from planning to launch — works seamlessly.
          </p>
        </motion.header>

        {/* Tab Selection Navigation with Reduced Radius */}
        <div className="mt-8 overflow-x-auto pb-2 sm:mt-10">
          <div className="inline-flex min-w-max items-center gap-1.5 rounded-xl border border-black/10 bg-white/80 p-1.5 shadow-[0_10px_30px_rgba(17,17,17,0.045)] backdrop-blur-sm">
            {servicesData.map((service) => {
              const isActive = activeTab === service.id;

              return (
                <button
                  key={service.id}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveTab(service.id)}
                  className={`relative rounded-lg px-4 py-2 text-[13px] font-bold transition-colors duration-200 focus-visible:outline-none sm:px-5 ${
                    isActive ? "text-white" : "text-[#626262] hover:text-[#111111]"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeProcessTab"
                      className="absolute inset-0 rounded-lg bg-[#111111] shadow-[0_8px_18px_rgba(17,17,17,0.16)]"
                      transition={{ type: "spring", stiffness: 500, damping: 38 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    {isActive && <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} className="h-1.5 w-1.5 rounded-full bg-[#D9FF5B]" />}
                    {service.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Interactive Process Deck */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="relative mt-10 overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_24px_60px_rgba(17,17,17,0.08)] lg:mt-14 lg:grid lg:grid-cols-[minmax(16rem,0.3fr)_minmax(0,0.7fr)]"
          >
            {/* Sidebar Overview */}
            <aside className="relative overflow-hidden bg-[#171717] p-6 text-white sm:p-8 lg:min-h-[34rem] lg:p-10 flex flex-col justify-between">
              <div aria-hidden="true" className="absolute -right-24 top-16 h-64 w-64 rounded-full bg-[#F24202]/55 blur-3xl pointer-events-none" />
              <div aria-hidden="true" className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#D9FF5B]/25 blur-3xl pointer-events-none" />
              <div aria-hidden="true" className="absolute inset-0 opacity-15 [background-image:linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] [background-size:34px_34px]" />

              <div className="relative">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/55">{activeData.title}</p>
                <div className="mt-5 flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#D9FF5B] animate-pulse" />
                  <span className="h-px w-14 bg-white/25" />
                  <span className="h-2 w-2 rounded-full bg-[#F24202]" />
                </div>
              </div>

              <div className="relative mt-12 grid grid-cols-2 gap-3 lg:grid-cols-1">
                <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="border-l-2 border-[#D9FF5B] pl-3.5"
                >
                  <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-white/45">Stage 1</p>
                  <p className="mt-1 text-base font-bold text-white">{activeData.stages[0]}</p>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="border-l-2 border-[#F24202] pl-3.5 mt-3"
                >
                  <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-white/45">Final Stage</p>
                  <p className="mt-1 text-base font-bold text-[#D9FF5B]">{activeData.stages[activeData.stages.length - 1]}</p>
                </motion.div>
              </div>
            </aside>

            {/* Stages & Step Cards Flow */}
            <div className="min-w-0 p-5 sm:p-7 lg:p-10">
              <div className="flex items-center justify-between gap-5 border-b border-black/10 pb-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#626262]">Execution Blueprint</p>
                <span className="flex items-center gap-1.5 text-xs font-bold text-[#F24202]">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>5 Structured Phases</span>
                </span>
              </div>

              {/* Mobile Swipe Hint */}
              <div className="mt-4 flex md:hidden justify-center">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-black/5 px-3 py-1 text-[11px] font-bold text-gray-600 border border-black/10">
                  Swipe horizontally to view execution blueprint &rarr;
                </span>
              </div>

              <div className="mt-5 md:mt-7 overflow-x-auto pb-4">
                <div className="relative min-w-[52rem]">
                  {/* Phase Headers */}
                  <div className="grid grid-cols-5 gap-3">
                    {activeData.stages.map((stage, index) => (
                      <div key={stage} className="relative">
                        <span className="flex h-7 w-7 items-center justify-center rounded-md border border-black/10 bg-[#F7F7F4] text-[11px] font-bold text-[#111111] shadow-2xs">
                          0{index + 1}
                        </span>
                        <p className="mt-3 text-[11px] font-bold uppercase tracking-[0.12em] text-[#4B4B4B]">{stage}</p>
                      </div>
                    ))}
                  </div>

                  {/* Animated Progress Connector Bar */}
                  <div className="relative my-3 h-1 w-full rounded-full bg-black/5 overflow-hidden">
                    <motion.div
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                      className="h-full bg-gradient-to-r from-[#111111] via-[#F24202] to-[#D9FF5B]"
                    />
                  </div>

                  {/* Step Cards */}
                  <div className="relative mt-5 grid grid-cols-5 gap-3">
                    {activeData.steps.map((step, idx) => {
                      const Icon = iconComponents[step.icon];
                      const colors = colorMap[step.color];

                      return (
                        <motion.article
                          key={step.title}
                          initial={{ opacity: 0, y: 18 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.35, delay: idx * 0.08 }}
                          whileHover={{ y: -5, scale: 1.02 }}
                          className="group border border-black/10 bg-[#FAFAFA] rounded-xl p-4 transition-all duration-300 hover:border-black/20 hover:bg-white hover:shadow-[0_16px_32px_rgba(17,17,17,0.08)]"
                        >
                          <div className="flex items-center justify-between gap-3">
                            <motion.span 
                              whileHover={{ scale: 1.15, rotate: 6 }}
                              className={`flex h-9 w-9 items-center justify-center rounded-lg border ${colors.ring} ${colors.icon} shadow-2xs transition-transform`}
                            >
                              <Icon className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
                            </motion.span>
                            <span className={`h-1.5 w-5 rounded-full ${colors.accent}`} aria-hidden="true" />
                          </div>
                          <h3 className="mt-8 text-[16px] font-bold leading-[1.1] text-gray-900">{step.title}</h3>
                          <p className="mt-2 text-[12px] leading-5 text-gray-500 font-medium">{step.desc}</p>
                        </motion.article>
                      );
                    })}

                    {/* Final Launch Container with Pulsing Glow */}
                    <motion.div
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, delay: 0.35 }}
                      whileHover={{ y: -5, scale: 1.02 }}
                      className="relative flex min-h-[14rem] flex-col justify-between rounded-xl border border-dashed border-black/20 bg-[#F7F7F4] p-4 group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#D9FF5B] border border-black/10 text-black shadow-2xs group-hover:scale-110 transition-transform">
                          <ArrowRight className="h-4 w-4" />
                        </span>
                        <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
                      </div>
                      <div>
                        <span className="h-1.5 w-6 rounded-full bg-[#F24202] block mb-2" aria-hidden="true" />
                        <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#111111]">
                          {activeData.stages[activeData.stages.length - 1]} Ready
                        </p>
                        <p className="text-[11px] text-gray-500 font-medium mt-1">Full delivery & operational handoff.</p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}


