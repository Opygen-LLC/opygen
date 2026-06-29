"use client";

import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { 
  Search, Target, PenTool, Code, 
  Map, Layers, Smartphone, CheckCircle, 
  PieChart, Megaphone, TrendingUp, Mail, 
  Activity, Database, Zap, Users, 
  Lightbulb, Server, Box, MessageSquare 
} from 'lucide-react';

const servicesData = [
  {
    id: "website-development",
    title: "Website Development",
    stages: ["Discovery", "Strategy", "Design", "Development", "Launch"],
    steps: [
      {
        title: "Requirement Analysis",
        desc: "We analyze your business goals, target audience, and feature requirements.",
        color: "red",
        icon: "Search"
      },
      {
        title: "Custom Strategy",
        desc: "Crafting a tailored architecture and SEO-friendly structure for growth.",
        color: "blue",
        icon: "Target"
      },
      {
        title: "UI/UX Design",
        desc: "Designing modern, high-converting interfaces that engage visitors.",
        color: "cyan",
        icon: "PenTool"
      },
      {
        title: "Full-Stack Build",
        desc: "Developing a fast, responsive, and scalable website ready for launch.",
        color: "pink",
        icon: "Code"
      }
    ]
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
        icon: "Map"
      },
      {
        title: "Interactive Prototypes",
        desc: "Creating wireframes and high-fidelity designs for seamless user experiences.",
        color: "blue",
        icon: "Layers"
      },
      {
        title: "Mobile & Web Dev",
        desc: "Building robust frontend interfaces and scalable backend APIs.",
        color: "cyan",
        icon: "Smartphone"
      },
      {
        title: "Rigorous QA",
        desc: "Thorough testing for performance, security, and bug-free operation.",
        color: "pink",
        icon: "CheckCircle"
      }
    ]
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
        icon: "PieChart"
      },
      {
        title: "Ad Creation",
        desc: "Launching targeted Meta, Google, and TikTok ads to drive qualified traffic.",
        color: "blue",
        icon: "Megaphone"
      },
      {
        title: "Conversion Tuning",
        desc: "A/B testing landing pages and offers to maximize lead generation.",
        color: "cyan",
        icon: "TrendingUp"
      },
      {
        title: "Automated Follow-ups",
        desc: "Nurturing leads through email flows and multi-platform retargeting.",
        color: "pink",
        icon: "Mail"
      }
    ]
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
        icon: "Activity"
      },
      {
        title: "CRM Setup",
        desc: "Configuring tailored pipelines in HubSpot, GoHighLevel, or custom systems.",
        color: "blue",
        icon: "Database"
      },
      {
        title: "Workflow Automation",
        desc: "Connecting your apps to automate data entry, reminders, and follow-ups.",
        color: "cyan",
        icon: "Zap"
      },
      {
        title: "System Handoff",
        desc: "Ensuring your team knows exactly how to leverage the new automated flows.",
        color: "pink",
        icon: "Users"
      }
    ]
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
        icon: "Lightbulb"
      },
      {
        title: "Architecture Design",
        desc: "Designing secure, scalable multi-tenant databases and subscription models.",
        color: "blue",
        icon: "Server"
      },
      {
        title: "MVP Development",
        desc: "Building the core application with authentication, payments, and dashboards.",
        color: "cyan",
        icon: "Box"
      },
      {
        title: "Beta & Feedback",
        desc: "Onboarding early users, gathering actionable feedback, and rapid iteration.",
        color: "pink",
        icon: "MessageSquare"
      }
    ]
  }
];

const colorMap = {
  red: {
    iconBg: "bg-[#FF3B30] shadow-[0_8px_16px_rgba(255,59,48,0.25)]",
    cardBg: "bg-gradient-to-br from-[#FFF5F5] to-white border-[#FFE5E5]",
  },
  blue: {
    iconBg: "bg-[#007AFF] shadow-[0_8px_16px_rgba(0,122,255,0.25)]",
    cardBg: "bg-gradient-to-br from-[#F0F7FF] to-white border-[#E0F0FF]",
  },
  cyan: {
    iconBg: "bg-[#32ADE6] shadow-[0_8px_16px_rgba(50,173,230,0.25)]",
    cardBg: "bg-gradient-to-br from-[#F0FCFF] to-white border-[#DFF6FF]",
  },
  pink: {
    iconBg: "bg-[#FF2D55] shadow-[0_8px_16px_rgba(255,45,85,0.25)]",
    cardBg: "bg-gradient-to-br from-[#FFF0F5] to-white border-[#FFE0EE]",
  }
};

const iconComponents: any = {
  Search, Target, PenTool, Code, Map, Layers, Smartphone, CheckCircle, PieChart, Megaphone, TrendingUp, Mail, Activity, Database, Zap, Users, Lightbulb, Server, Box, MessageSquare
};

export default function ServicesSteps() {
  const [activeTab, setActiveTab] = useState(servicesData[0].id);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeData = servicesData.find(s => s.id === activeTab) || servicesData[0];

  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      // Create a master timeline for Desktop
      const tl = gsap.timeline();

      // Reset initial states for Desktop
      gsap.set('.dashed-line', { height: 0, opacity: 0 });
      gsap.set('.stage-label', { opacity: 0, y: -15, filter: "blur(4px)" });
      gsap.set('.step-card', { opacity: 0, y: 40, x: -10, scale: 0.95, rotationY: -10, transformOrigin: "left center" });
      gsap.set('.card-icon-container', { scale: 0, rotation: -90 });
      gsap.set('.card-content', { opacity: 0, x: -10 });

      // Desktop Animation Sequence
      tl.to('.dashed-line', { 
        height: '100%', 
        opacity: 1, 
        duration: 0.8, 
        stagger: 0.1, 
        ease: 'expo.inOut' 
      })
      .to('.stage-label', { 
        opacity: 1, 
        y: 0, 
        filter: "blur(0px)", 
        duration: 0.5, 
        stagger: 0.08, 
        ease: 'back.out(1.5)' 
      }, "-=0.6")
      .to('.step-card', { 
        opacity: 1, 
        y: 0, 
        x: 0,
        scale: 1, 
        rotationY: 0,
        duration: 0.7, 
        stagger: 0.12, 
        ease: 'power3.out' 
      }, "-=0.6")
      .to('.card-icon-container', { 
        scale: 1, 
        rotation: 0, 
        duration: 0.8, 
        stagger: 0.12, 
        ease: 'elastic.out(1, 0.4)' 
      }, "-=0.7")
      .to('.card-content', { 
        opacity: 1, 
        x: 0, 
        duration: 0.5, 
        stagger: 0.12, 
        ease: 'power2.out' 
      }, "-=0.8");

      // Create a master timeline for Mobile
      const mobileTl = gsap.timeline();
      
      // Reset initial states for Mobile
      gsap.set('.mob-dashed-line', { height: 0, opacity: 0 });
      gsap.set('.step-card-mobile', { opacity: 0, x: -20, scale: 0.98 });
      gsap.set('.mob-card-icon', { scale: 0, rotation: -45 });

      // Mobile Animation Sequence
      mobileTl.to('.mob-dashed-line', { 
        height: '100%', 
        opacity: 1, 
        duration: 1, 
        ease: 'expo.inOut' 
      })
      .to('.step-card-mobile', { 
        opacity: 1, 
        x: 0, 
        scale: 1, 
        duration: 0.6, 
        stagger: 0.12, 
        ease: 'back.out(1.2)' 
      }, "-=0.7")
      .to('.mob-card-icon', { 
        scale: 1, 
        rotation: 0, 
        duration: 0.7, 
        stagger: 0.12, 
        ease: 'elastic.out(1, 0.5)' 
      }, "-=0.6");

    }, containerRef);
    return () => ctx.revert();
  }, [activeTab]);

  return (
    <section className="py-24 lg:py-32 bg-white font-space-grotesk overflow-hidden relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8" ref={containerRef}>
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-red-200/80 bg-red-50 text-red-500 text-[13px] font-bold tracking-wide mb-6 shadow-sm">
            Services
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-[56px] font-bold tracking-tight text-gray-900 mb-6 leading-[1.1]">
            Process-driven execution for <br className="hidden md:block"/> predictable, lasting growth.
          </h2>
          <p className="text-[15px] md:text-lg text-gray-500 leading-relaxed font-medium max-w-2xl mx-auto">
            Our step-by-step methodologies are designed around your business goals, ensuring every phase — from planning to launch — works seamlessly.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-20 relative z-20">
          {servicesData.map(service => (
            <button
              key={service.id}
              onClick={() => setActiveTab(service.id)}
              className={`px-5 py-2.5 rounded-full text-[14px] font-bold transition-all duration-300 ${
                activeTab === service.id 
                  ? 'bg-gray-900 text-white shadow-[0_8px_20px_rgba(0,0,0,0.15)] scale-105' 
                  : 'bg-white text-gray-500 hover:bg-gray-50 hover:text-gray-900 border border-gray-200 shadow-sm'
              }`}
            >
              {service.title}
            </button>
          ))}
        </div>

        {/* Desktop Waterfall Area */}
        <div className="relative w-full max-w-[1100px] mx-auto h-[600px] hidden lg:block [perspective:1000px]">
          {/* Vertical Lines */}
          {[10, 30, 50, 70, 90].map((leftPercent, i) => (
            <div 
              key={`line-${i}`}
              className="dashed-line absolute top-[40px] border-l border-dashed border-gray-200 origin-top"
              style={{ left: `${leftPercent}%` }}
            />
          ))}

          {/* Stage Labels */}
          {activeData.stages.map((stage, i) => (
            <div 
              key={`stage-${stage}-${i}`}
              className="stage-label absolute top-0 w-[140px] -ml-[70px] text-center text-[13px] font-bold text-gray-400 tracking-wide"
              style={{ left: `${[10, 30, 50, 70, 90][i]}%` }}
            >
              {stage}
            </div>
          ))}

          {/* Cards */}
          <div className="absolute top-[80px] left-0 w-full h-full">
            {activeData.steps.map((step, i) => {
              const leftPercent = [10, 30, 50, 70][i];
              const topOffset = i * 110;
              const Icon = iconComponents[step.icon];
              const colors = (colorMap as any)[step.color];

              return (
                <div 
                  key={`step-${step.title}-${i}`}
                  className={`step-card absolute w-[340px] p-5 rounded-[1.5rem] border shadow-[0_12px_40px_rgba(0,0,0,0.06)] backdrop-blur-xl ${colors.cardBg} flex items-start gap-4 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] hover:-translate-y-1.5`}
                  style={{ 
                    // 24px is half of the 48px icon width, so the dashed line exactly pierces the center of the icon
                    left: `calc(${leftPercent}% - 24px)`, 
                    top: `${topOffset}px`,
                    zIndex: 10 + i
                  }}
                >
                  <div className={`card-icon-container w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${colors.iconBg} text-white mt-0.5`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="card-content pt-0.5 pr-2">
                    <h4 className="text-[17px] font-bold text-gray-900 leading-tight mb-2">{step.title}</h4>
                    <p className="text-[14px] text-gray-500 leading-relaxed font-medium">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile / Tablet Stack Area */}
        <div className="relative w-full max-w-2xl mx-auto flex flex-col gap-8 lg:hidden mt-12 px-2">
          {/* Left continuous dashed line */}
          <div className="mob-dashed-line absolute top-[60px] left-[35px] border-l-2 border-dashed border-gray-200/80 origin-top" />
          
          {activeData.steps.map((step, i) => {
            const Icon = iconComponents[step.icon];
            const colors = (colorMap as any)[step.color];

            return (
              <div key={`mob-${i}`} className="step-card-mobile relative flex items-start gap-5 pl-3 pr-2">
                <div className={`mob-card-icon w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-lg ${colors.iconBg} text-white relative z-10 mt-6`}>
                  <Icon className="w-[22px] h-[22px]" />
                </div>
                <div className={`w-full p-6 rounded-[1.5rem] border shadow-[0_8px_30px_rgba(0,0,0,0.06)] ${colors.cardBg} transition-transform hover:-translate-y-1 duration-300`}>
                  <div className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-2.5">
                    Stage {i+1}: {activeData.stages[i]}
                  </div>
                  <h4 className="text-[18px] font-bold text-gray-900 leading-tight mb-2.5">{step.title}</h4>
                  <p className="text-[14px] text-gray-500 leading-relaxed font-medium">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
