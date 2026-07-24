"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Smartphone, Server, CheckCircle2, Cpu, Layers, Database, Sparkles } from "lucide-react";
import Logo from "@/public/logo/Opygen.png";

// SVG Brand Icons
const NextJsIcon = () => (
  <svg className="w-5 h-5 fill-current text-gray-900 shrink-0" viewBox="0 0 180 180" xmlns="http://www.w3.org/2000/svg">
    <mask height="180" id="mask0_12_tech" maskUnits="userSpaceOnUse" width="180" x="0" y="0">
      <circle cx="90" cy="90" r="90" fill="white" />
    </mask>
    <g mask="url(#mask0_12_tech)">
      <circle cx="90" cy="90" r="90" fill="#111111" stroke="black" strokeWidth="6" />
      <path d="M149.508 157.52L69.142 54H54V125.97H66.8136V70.2641L136.949 160.778C141.442 159.932 145.626 158.835 149.508 157.52Z" fill="white" />
      <rect fill="white" height="72" width="12" x="115" y="54" />
    </g>
  </svg>
);

const ReactIcon = () => (
  <svg className="w-5 h-5 text-[#00D8FF] shrink-0" viewBox="-11.5 -10.23174 23 20.46348" xmlns="http://www.w3.org/2000/svg">
    <circle r="2.05" fill="#00D8FF" />
    <g stroke="#00D8FF" strokeWidth="1.2" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

const TypeScriptIcon = () => (
  <svg className="w-5 h-5 shrink-0" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
    <rect width="128" height="128" rx="20" fill="#3178C6" />
    <path d="M72.03 103.7c2.5 1.5 5.5 2.5 8.7 2.5 7.5 0 11.8-3.8 11.8-10.2 0-14.8-21.5-10.8-21.5-24.8 0-6.2 5.2-10.5 13.5-10.5 3.8 0 7.2.8 9.5 2l-2.2 6.8c-2-1-4.8-1.8-7.5-1.8-4.2 0-7 1.8-7 4.5 0 13.2 21.5 9.2 21.5 24.5 0 7.5-5.8 11.5-14.5 11.5-4.8 0-8.8-1.2-11.2-2.5l2.4-7zm-40-3.5h11v-38h-11v-6.5h29v6.5h-11v38h11v6.5h-29v-6.5z" fill="#FFF" />
  </svg>
);

const FlutterIcon = () => (
  <svg className="w-5 h-5 text-[#02569B] fill-current shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.314 0L2.3 12 6 15.7 21.686 0h-7.372zm-4.628 12L6 15.7 14.314 24h7.372L13.372 15.7l-3.686-3.7z" />
  </svg>
);

const PrismaIcon = () => (
  <svg className="w-5 h-5 text-[#2D3748] fill-current shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.84 19.34L12.7 2.76a1.2 1.2 0 0 0-2.22 0l-9.1 22.06a1.2 1.2 0 0 0 1.5 1.54l16.14-5.38a1.2 1.2 0 0 0-.18-1.64zM11.6 6.13l4.28 11.58-9.1 3.03 4.82-14.61z" />
  </svg>
);

const MongoDbIcon = () => (
  <svg className="w-5 h-5 text-[#47A248] fill-current shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0s-3.7 4.2-3.7 9.8c0 4.1 2.3 7.8 3.7 9.7 1.4-1.9 3.7-5.6 3.7-9.7C15.7 4.2 12 0 12 0zm.6 23.9c-.3.1-.7.1-1 0-.3-.4-.6-1.5-.6-2.4 0-.1.5-.4 1-.4s1 .3 1 .4c0 .9-.3 2-.4 2.4z" />
  </svg>
);

const TailwindIcon = () => (
  <svg className="w-5 h-5 text-[#38BDF8] fill-current shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
  </svg>
);

const SupabaseIcon = () => (
  <svg className="w-5 h-5 text-[#3ECF8E] fill-current shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.35 24V14.187h7.905c.877 0 1.34-1.039.756-1.692L9.206 0v9.813H1.3c-.877 0-1.34 1.039-.756 1.692L13.35 24z" />
  </svg>
);

const NodeJsIcon = () => (
  <svg className="w-5 h-5 text-[#5FA04E] fill-current shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 1.5a1.5 1.5 0 0 0-.75.2l-8.5 4.9a1.5 1.5 0 0 0-.75 1.3v9.8a1.5 1.5 0 0 0 .75 1.3l8.5 4.9a1.5 1.5 0 0 0 1.5 0l8.5-4.9a1.5 1.5 0 0 0 .75-1.3V7.9a1.5 1.5 0 0 0-.75-1.3l-8.5-4.9A1.5 1.5 0 0 0 12 1.5zm-1 6.5h2v8h-2V8z" />
  </svg>
);

const PostgresIcon = () => (
  <svg className="w-5 h-5 text-[#4169E1] fill-current shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5h-2v-2h2v2zm0-4h-2V7h2v5.5z" />
  </svg>
);

const DockerIcon = () => (
  <svg className="w-5 h-5 text-[#2496ED] fill-current shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 3h-2v2h2V3zm-3 0H8v2h2V3zm6 0h-2v2h2V3zm3 0h-2v2h2V3zM7 6H5v2h2V6zm3 0H8v2h2V6zm3 0h-2v2h2V6zm3 0h-2v2h2V6zm3 0h-2v2h2V6zM4 9H2v2h2V9zm3 0H5v2h2V9zm3 0H8v2h2V9zm3 0h-2v2h2V9zm3 0h-2v2h2V9zm3 0h-2v2h2V9zM1 12v4c0 3.3 2.7 6 6 6h10c3.3 0 6-2.7 6-6v-1H1v1z" />
  </svg>
);

const GraphQlIcon = () => (
  <svg className="w-5 h-5 text-[#E535AB] fill-current shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.3l7.7 3.8v7.6L12 19.6l-7.7-3.9V8.1L12 4.3z" />
  </svg>
);

const RedisIcon = () => (
  <svg className="w-5 h-5 text-[#DC382D] fill-current shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14.5h-2v-5h2zm0-7h-2V7h2z" />
  </svg>
);

const VercelIcon = () => (
  <svg className="w-5 h-5 fill-current text-gray-900 shrink-0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <path d="M256 48L512 464H0L256 48Z" fill="#111111" />
  </svg>
);

const PythonIcon = () => (
  <svg className="w-5 h-5 text-[#3776AB] fill-current shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C5.4 0 5.4 2.4 5.4 2.4v2.5h6.7v.8H3.3S0 5.4 0 12c0 6.6 2.9 6.3 2.9 6.3h1.7v-2.4s-.1-2.9 2.9-2.9h5.1s2.8 0 2.8-2.7V2.4S15.4 0 12 0zm-1.8 1.4a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8z" />
  </svg>
);

const StripeIcon = () => (
  <svg className="w-5 h-5 text-[#635BFF] fill-current shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C17.701.69 15.096 0 12.339 0 7.332 0 3.738 2.535 3.738 6.845c0 6.012 8.357 6.31 8.357 9.544 0 .976-.843 1.455-2.227 1.455-2.584 0-5.753-1.196-7.587-2.155L1.31 21.22c2.091 1.134 5.378 1.956 8.784 1.956 5.352 0 9.072-2.484 9.072-6.906 0-6.495-8.508-6.732-8.508-9.664z" />
  </svg>
);

const FirebaseIcon = () => (
  <svg className="w-5 h-5 text-[#FFCA28] fill-current shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.89 15.67L6.82 2.5a.75.75 0 0 1 1.41-.12l2.36 5.92L3.89 15.67zm16.22-3.17L17.2 2.94a.75.75 0 0 0-1.37-.17L12.5 8.97l7.61 3.53zM4.6 17.11l6.83 3.9a1.12 1.12 0 0 0 1.14 0l6.83-3.9-7.4-14.28L4.6 17.11z" />
  </svg>
);

const AwsIcon = () => (
  <svg className="w-5 h-5 text-[#FF9900] fill-current shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 7l10 5 10-5-10-5zm0 9L4 7.5v9l8 4.5 8-4.5v-9L12 11z" />
  </svg>
);

const SwiftIcon = () => (
  <svg className="w-5 h-5 text-[#F05138] fill-current shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.2 12.8c.4.6.8 1.4 1 2.2-1.2-1-2.6-1.8-4-2.2 1.6 1.8 2.6 4 2.6 6.4 0 .4 0 .8-.1 1.2-1.4-1.8-3.4-3-5.7-3.4.8 1.4 1.2 3 1.2 4.6 0 .8-.1 1.6-.4 2.4-2.2-2.6-5.4-4.2-9-4.2H5c-.8 0-1.6.1-2.4.4C4 18 6.4 15.8 9.4 14.8c-1.4-.4-2.8-.4-4.2-.2 2-1.4 4.4-2.2 7-2.2h.8c1.4 0 2.8.2 4.2.6-1.2-1-2.6-1.8-4.2-2.2 2-1 4.4-1.4 6.8-1.2.2 0 .4 0 .6.1-1-1.2-2.4-2.2-4-2.8 2.8-.2 5.6.4 8 1.8-.8-1.6-2-3-3.4-4 3.4 1 6.2 3.2 8 6.1-1-1.4-2.4-2.4-4-3.1z" />
  </svg>
);

const KotlinIcon = () => (
  <svg className="w-5 h-5 text-[#7F52FF] fill-current shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 24H0V0h24L12 12Z" />
  </svg>
);

const NestJsIcon = () => (
  <svg className="w-5 h-5 text-[#E0234E] fill-current shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.3l7.7 3.8v7.6L12 19.6l-7.7-3.9V8.1L12 4.3z" />
  </svg>
);

const KubernetesIcon = () => (
  <svg className="w-5 h-5 text-[#326CE5] fill-current shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 7.5v9L12 22l10-5.5v-9L12 2zm0 2.5l7.5 4.1v7.4L12 19.5 4.5 16V8.6L12 4.5z" />
  </svg>
);

const SqliteIcon = () => (
  <svg className="w-5 h-5 text-[#003B57] fill-current shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
  </svg>
);

type TechNode = {
  name: string;
  category: string;
  icon: React.ReactNode;
};

type ServiceTree = {
  id: string;
  name: string;
  desc: string;
  badge: string;
  icon: React.ReactNode;
  frontend: TechNode[];
  backend: TechNode[];
  database: TechNode[];
};

const serviceTrees: ServiceTree[] = [
  {
    id: "web-dev",
    name: "Web Development",
    desc: "Next.js 15 SSR, Concurrent React & Tailwind v4",
    badge: "Web Engine",
    icon: <Globe className="h-5 w-5 text-[#F24202]" />,
    frontend: [
      { name: "Next.js 15", category: "SSR Engine", icon: <NextJsIcon /> },
      { name: "React 19", category: "UI Architecture", icon: <ReactIcon /> },
      { name: "TypeScript", category: "Type Safety", icon: <TypeScriptIcon /> },
      { name: "Tailwind CSS v4", category: "Styling Engine", icon: <TailwindIcon /> },
    ],
    backend: [
      { name: "Node.js", category: "Runtime Engine", icon: <NodeJsIcon /> },
      { name: "NestJS", category: "API Framework", icon: <NestJsIcon /> },
      { name: "GraphQL", category: "API Gateway", icon: <GraphQlIcon /> },
      { name: "Vercel", category: "Edge Cloud", icon: <VercelIcon /> },
    ],
    database: [
      { name: "PostgreSQL", category: "Relational DB", icon: <PostgresIcon /> },
      { name: "Prisma ORM", category: "DB Client", icon: <PrismaIcon /> },
      { name: "Redis", category: "In-Memory Cache", icon: <RedisIcon /> },
      { name: "Stripe", category: "Payment Suite", icon: <StripeIcon /> },
    ],
  },
  {
    id: "app-dev",
    name: "Mobile App Development",
    desc: "Cross-platform iOS & Android apps with native performance",
    badge: "Mobile Apps",
    icon: <Smartphone className="h-5 w-5 text-[#02569B]" />,
    frontend: [
      { name: "Flutter & Dart", category: "Cross-Platform", icon: <FlutterIcon /> },
      { name: "React Native", category: "Mobile UI", icon: <ReactIcon /> },
      { name: "Swift (iOS)", category: "Apple Native", icon: <SwiftIcon /> },
      { name: "Kotlin (Android)", category: "Android Native", icon: <KotlinIcon /> },
    ],
    backend: [
      { name: "Supabase", category: "Realtime Auth", icon: <SupabaseIcon /> },
      { name: "Node.js", category: "Edge Services", icon: <NodeJsIcon /> },
      { name: "GraphQL", category: "API Layer", icon: <GraphQlIcon /> },
      { name: "Docker", category: "Containers", icon: <DockerIcon /> },
    ],
    database: [
      { name: "MongoDB", category: "Document Store", icon: <MongoDbIcon /> },
      { name: "PostgreSQL", category: "Cloud Database", icon: <PostgresIcon /> },
      { name: "Firebase", category: "Push & Sync", icon: <FirebaseIcon /> },
      { name: "SQLite", category: "Local Storage", icon: <SqliteIcon /> },
    ],
  },
  {
    id: "saas",
    name: "SaaS & Enterprise MVP",
    desc: "Multi-tenant backend, billing pipelines & high concurrency",
    badge: "Product MVP",
    icon: <Server className="h-5 w-5 text-[#10B981]" />,
    frontend: [
      { name: "Next.js 15", category: "SaaS Dashboard", icon: <NextJsIcon /> },
      { name: "React 19", category: "UI Suite", icon: <ReactIcon /> },
      { name: "TypeScript", category: "Enterprise Types", icon: <TypeScriptIcon /> },
      { name: "Tailwind CSS v4", category: "Design System", icon: <TailwindIcon /> },
    ],
    backend: [
      { name: "Node.js", category: "Microservices", icon: <NodeJsIcon /> },
      { name: "Python", category: "AI & Automation", icon: <PythonIcon /> },
      { name: "NestJS", category: "Enterprise API", icon: <NestJsIcon /> },
      { name: "Kubernetes", category: "Orchestration", icon: <KubernetesIcon /> },
    ],
    database: [
      { name: "PostgreSQL", category: "Multi-Tenant DB", icon: <PostgresIcon /> },
      { name: "Prisma ORM", category: "Schema Client", icon: <PrismaIcon /> },
      { name: "Redis", category: "Rate Limiting", icon: <RedisIcon /> },
      { name: "AWS Cloud", category: "Infra Scale", icon: <AwsIcon /> },
    ],
  },
];

export default function TechStackBar() {
  const [selectedTree, setSelectedTree] = useState<ServiceTree>(serviceTrees[0]);

  return (
    <section aria-label="Technology Stack Hub" className="relative overflow-hidden bg-[#F7F7F4] px-5 py-16 text-[#111111] sm:px-8 sm:py-24 lg:px-12 lg:py-32 font-space-grotesk border-y border-black/10">

      {/* Background Soft Glow Orbs */}
      <div aria-hidden="true" className="absolute -left-28 top-20 h-96 w-96 rounded-full bg-[#FFD6C7]/60 blur-3xl pointer-events-none" />
      <div aria-hidden="true" className="absolute -right-28 bottom-20 h-96 w-96 rounded-full bg-[#D9FF5B]/50 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-[1340px]">

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/10 text-gray-800 text-xs font-semibold mb-4 tracking-wide uppercase shadow-2xs">
            <Sparkles className="h-3.5 w-3.5 text-[#F24202]" />
            Interactive Technology Tree
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-[56px] font-bold tracking-tight text-gray-900 mb-4 sm:mb-5 leading-tight">
            Click A Service To Branch <br className="hidden sm:block" />
            Our Technology Architecture
          </h2>

          <p className="text-sm sm:text-lg text-gray-600 max-w-xl mx-auto font-medium leading-relaxed">
            Select a service domain below to expand 12 verified technologies across Frontend, Backend & Database layers.
          </p>
        </motion.header>

        {/* LEVEL 0: ROOT OPYGEN LOGO NODE */}
        <div className="mt-12 sm:mt-16 flex flex-col items-center justify-center">
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="inline-flex items-center gap-3.5 rounded-2xl bg-white px-6 py-3.5 text-gray-900 shadow-sm border border-black/10 cursor-pointer relative z-20"
          >
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-[#F7F7F4] border border-black/10 shrink-0">
              <Image src={Logo} alt="Opygen company logo" width={28} height={28} className="object-contain" priority />
              <span className="absolute -top-1 -right-1 flex h-3 w-3 items-center justify-center rounded-full bg-[#F24202]">
                <span className="h-1.5 w-1.5 rounded-full bg-white animate-ping" />
              </span>
            </div>
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#F24202]">Level 0 • Root</span>
              <h3 className="text-sm font-bold text-gray-900 tracking-tight">Opygen Core Architecture</h3>
            </div>
          </motion.div>

          {/* Trunk Vertical Connector Line */}
          <div className="h-8 w-0.5 bg-black/20 my-1" />
        </div>

        {/* LEVEL 1: SERVICE DOMAIN BRANCHES */}
        <div className="flex flex-col items-center">
          <p className="text-[10px] font-extrabold uppercase tracking-wider text-gray-400 mb-3">Level 1 • Select Service Branch</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-[920px] relative z-20">
            {serviceTrees.map((tree) => {
              const isSelected = selectedTree.id === tree.id;
              return (
                <button
                  key={tree.id}
                  type="button"
                  onClick={() => setSelectedTree(tree)}
                  className={`flex flex-col justify-between p-5 rounded-2xl border transition-all text-left cursor-pointer ${isSelected
                      ? "border-black/30 bg-white text-gray-900 shadow-md scale-[1.01]"
                      : "border-black/10 bg-white text-gray-900 hover:border-black/30 shadow-2xs"
                    }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="p-2 rounded-xl bg-[#F7F7F4] border border-black/10">
                      {tree.icon}
                    </div>
                    {isSelected ? (
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#10B981] bg-[#10B981]/10 px-2.5 py-0.5 rounded-full border border-[#10B981]/30">
                        <CheckCircle2 className="h-3 w-3" /> Active Branch
                      </span>
                    ) : (
                      <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-black/5 text-gray-700">
                        {tree.badge}
                      </span>
                    )}
                  </div>

                  <div className="mt-3">
                    <h3 className="text-base font-bold text-gray-900 tracking-tight">{tree.name}</h3>
                    <p className="text-xs mt-1 font-medium leading-relaxed text-gray-600">
                      {tree.desc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Branch Downward Vertical Line */}
          <div className="h-8 w-0.5 bg-black/20 my-1" />
        </div>

        {/* LEVEL 2: CLEAN & SIMPLE 12 TECH NODES SUITE */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTree.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="rounded-3xl border border-black/10 bg-white p-6 sm:p-8 shadow-sm relative z-20"
          >
            <div className="flex flex-wrap items-center justify-between border-b border-black/10 pb-4 mb-6 gap-2">
              <div className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#111111] text-[9px] font-extrabold text-white">12</span>
                <h3 className="text-base font-bold text-gray-900 tracking-tight">
                  {selectedTree.name} Technology Stack (12 Technologies)
                </h3>
              </div>
              <span className="rounded-full bg-[#F7F7F4] border border-black/10 px-3 py-1 text-xs font-bold text-gray-800">
                12 Verified Connected Stack Items
              </span>
            </div>

            {/* 3 Architectural Layers Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">

              {/* Layer A: Frontend (4 Items) */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 border-b border-black/5 pb-2.5">
                  <div className="p-1 rounded-md bg-[#F7F7F4] border border-black/10">
                    <Cpu className="h-3.5 w-3.5 text-[#F24202]" />
                  </div>
                  <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider">Frontend (4)</h4>
                </div>

                <div className="space-y-2.5">
                  {selectedTree.frontend.map((item) => (
                    <motion.div
                      key={item.name}
                      whileHover={{ x: 3 }}
                      className="flex items-center gap-3 p-3 rounded-xl border border-black/10 bg-[#F7F7F4] hover:bg-white hover:border-black/30 transition-all shadow-2xs"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white border border-black/10 shadow-2xs">
                        {item.icon}
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className="text-[8.5px] font-extrabold uppercase tracking-wider text-gray-500">{item.category}</span>
                        <p className="text-xs font-bold text-gray-900 truncate">{item.name}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Layer B: Backend (4 Items) */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 border-b border-black/5 pb-2.5">
                  <div className="p-1 rounded-md bg-[#F7F7F4] border border-black/10">
                    <Layers className="h-3.5 w-3.5 text-[#02569B]" />
                  </div>
                  <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider">Backend (4)</h4>
                </div>

                <div className="space-y-2.5">
                  {selectedTree.backend.map((item) => (
                    <motion.div
                      key={item.name}
                      whileHover={{ x: 3 }}
                      className="flex items-center gap-3 p-3 rounded-xl border border-black/10 bg-[#F7F7F4] hover:bg-white hover:border-black/30 transition-all shadow-2xs"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white border border-black/10 shadow-2xs">
                        {item.icon}
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className="text-[8.5px] font-extrabold uppercase tracking-wider text-gray-500">{item.category}</span>
                        <p className="text-xs font-bold text-gray-900 truncate">{item.name}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Layer C: Database & Services (4 Items) */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 border-b border-black/5 pb-2.5">
                  <div className="p-1 rounded-md bg-[#F7F7F4] border border-black/10">
                    <Database className="h-3.5 w-3.5 text-[#10B981]" />
                  </div>
                  <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider">Database & Services (4)</h4>
                </div>

                <div className="space-y-2.5">
                  {selectedTree.database.map((item) => (
                    <motion.div
                      key={item.name}
                      whileHover={{ x: 3 }}
                      className="flex items-center gap-3 p-3 rounded-xl border border-black/10 bg-[#F7F7F4] hover:bg-white hover:border-black/30 transition-all shadow-2xs"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white border border-black/10 shadow-2xs">
                        {item.icon}
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className="text-[8.5px] font-extrabold uppercase tracking-wider text-gray-500">{item.category}</span>
                        <p className="text-xs font-bold text-gray-900 truncate">{item.name}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
