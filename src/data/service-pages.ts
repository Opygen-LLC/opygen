export type ServicePage = {
  title: string;
  slug: string;
  badge: string;
  description: string;
  shortDesc: string;
  features: string[];
  /** Project types used to pick featured work for this service. */
  projectTypes: string[];
  button: string;
  image: string;
  accent: string;
  accentSoft: string;
};

export const servicePages: ServicePage[] = [
  {
    title: "Website Development",
    slug: "website-development",
    badge: "Digital Storefronts",
    description:
      "Modern websites built to convert visitors into leads and booked calls. We combine stunning aesthetics with high-performance engineering to create digital storefronts that rank well on search engines and drive real business results.",
    shortDesc:
      "Modern websites built to convert visitors into leads and booked calls.",
    features: [
      "Custom Business Websites",
      "High-Conversion Landing Pages",
      "Booking & Scheduling Pages",
      "Advanced SEO Architecture",
      "Lightning-Fast Frontend",
      "Flawless Mobile Design",
    ],
    projectTypes: ["Website"],
    button: "Build My Website",
    image: "/services/website-development.jpeg",
    accent: "#F24202",
    accentSoft: "#FFD6C7",
  },
  {
    title: "App Development",
    slug: "app-development",
    badge: "Custom Solutions",
    description:
      "Custom web and mobile apps designed to streamline your business operations and provide seamless experiences for your clients. We build scalable software that grows with you.",
    shortDesc:
      "Custom web and mobile apps for business operations, client portals, and dashboards.",
    features: [
      "Secure Client Portals",
      "Powerful Admin Dashboards",
      "Custom Booking Apps",
      "Internal Operational Tools",
      "Bespoke CRM Systems",
      "Native-feel Mobile Interfaces",
    ],
    projectTypes: ["App", "SaaS"],
    button: "Start an App Project",
    image: "/services/app-development.jpeg",
    accent: "#6D5DFB",
    accentSoft: "#DDD9FF",
  },
  {
    title: "Digital Marketing",
    slug: "digital-marketing",
    badge: "Growth Engine",
    description:
      "Data-driven marketing systems designed to bring qualified leads and aggressively improve conversions. We build comprehensive lead funnels that capture attention and turn prospects into paying customers.",
    shortDesc:
      "Marketing systems designed to bring qualified leads and improve conversions.",
    features: [
      "Meta (Facebook/IG) Ads",
      "Google Search & Display Ads",
      "Optimized Landing Pages",
      "Automated Lead Funnels",
      "Strategic Content Planning",
      "Advanced Conversion Tracking",
    ],
    projectTypes: ["Marketing", "Website"],
    button: "Grow My Business",
    image: "/services/digital-marketing.jpeg",
    accent: "#F59E0B",
    accentSoft: "#FDE9B8",
  },
  {
    title: "Automation & CRM Systems",
    slug: "automation-crm",
    badge: "Operational Efficiency",
    description:
      "Smart automations that save hours of time, eliminate manual data entry, and keep your business operations perfectly organized. We implement systems that handle the heavy lifting.",
    shortDesc:
      "Automations that save time, reduce manual work, and keep business operations organized.",
    features: [
      "Instant Lead Follow-ups",
      "Automated Appointment Reminders",
      "Full CRM Implementation",
      "Custom Workflow Automation",
      "Seamless Payment Flows",
      "Staff & Client Syncing",
    ],
    projectTypes: ["SaaS", "App"],
    button: "Automate My Business",
    image: "/services/custom-crm.jpeg",
    accent: "#1D745C",
    accentSoft: "#CDE9D8",
  },
  {
    title: "SaaS Product Development",
    slug: "saas-development",
    badge: "Product Engineering",
    description:
      "We partner with visionary founders to design and build scalable SaaS products from initial idea to MVP, launch, and continuous growth. Focus on your market, we handle the tech.",
    shortDesc:
      "We design and build SaaS products from idea to MVP, launch, and growth.",
    features: [
      "Comprehensive Product Strategy",
      "Rapid MVP Development",
      "Robust Subscription Systems",
      "Intuitive Dashboard Design",
      "Complex User Role Management",
      "Secure Admin Panels",
    ],
    projectTypes: ["SaaS"],
    button: "Build My SaaS",
    image: "/services/sass-development.jpeg",
    accent: "#E95482",
    accentSoft: "#F9D3E0",
  },
];
