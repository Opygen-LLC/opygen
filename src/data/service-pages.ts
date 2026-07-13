export type ServicePage = {
  title: string;
  slug: string;
  badge: string;
  description: string;
  features: string[];
  /** Project types used to pick featured work for this service. */
  projectTypes: string[];
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
    features: [
      "Custom Business Websites",
      "High-Conversion Landing Pages",
      "Booking & Scheduling Pages",
      "Advanced SEO Architecture",
      "Lightning-Fast Frontend",
      "Flawless Mobile Design",
    ],
    projectTypes: ["Website"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    accent: "#F24202",
    accentSoft: "#FFD6C7",
  },
  {
    title: "App Development",
    slug: "app-development",
    badge: "Custom Solutions",
    description:
      "Custom web and mobile apps designed to streamline your business operations and provide seamless experiences for your clients. We build scalable software that grows with you.",
    features: [
      "Secure Client Portals",
      "Powerful Admin Dashboards",
      "Custom Booking Apps",
      "Internal Operational Tools",
      "Bespoke CRM Systems",
      "Native-feel Mobile Interfaces",
    ],
    projectTypes: ["App", "SaaS"],
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&q=80",
    accent: "#6D5DFB",
    accentSoft: "#DDD9FF",
  },
  {
    title: "Digital Marketing",
    slug: "digital-marketing",
    badge: "Growth Engine",
    description:
      "Data-driven marketing systems designed to bring qualified leads and aggressively improve conversions. We build comprehensive lead funnels that capture attention and turn prospects into paying customers.",
    features: [
      "Meta (Facebook/IG) Ads",
      "Google Search & Display Ads",
      "Optimized Landing Pages",
      "Automated Lead Funnels",
      "Strategic Content Planning",
      "Advanced Conversion Tracking",
    ],
    projectTypes: ["Marketing", "Website"],
    image:
      "https://images.unsplash.com/photo-1557838923-2985c318be48?w=1200&q=80",
    accent: "#F59E0B",
    accentSoft: "#FDE9B8",
  },
  {
    title: "Automation & CRM",
    slug: "automation-crm",
    badge: "Operational Efficiency",
    description:
      "Smart automations that save hours of time, eliminate manual data entry, and keep your business operations perfectly organized. We implement systems that handle the heavy lifting.",
    features: [
      "Instant Lead Follow-ups",
      "Automated Appointment Reminders",
      "Full CRM Implementation",
      "Custom Workflow Automation",
      "Seamless Payment Flows",
      "Staff & Client Syncing",
    ],
    projectTypes: ["SaaS", "App"],
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80",
    accent: "#1D745C",
    accentSoft: "#CDE9D8",
  },
  {
    title: "SaaS Development",
    slug: "saas-development",
    badge: "Product Engineering",
    description:
      "We partner with visionary founders to design and build scalable SaaS products from initial idea to MVP, launch, and continuous growth. Focus on your market, we handle the tech.",
    features: [
      "Comprehensive Product Strategy",
      "Rapid MVP Development",
      "Robust Subscription Systems",
      "Intuitive Dashboard Design",
      "Complex User Role Management",
      "Secure Admin Panels",
    ],
    projectTypes: ["SaaS"],
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&q=80",
    accent: "#E95482",
    accentSoft: "#F9D3E0",
  },
];
