export const TEAM_MEMBERS = [
  {
    name: "MD. Sidur Rahaman",
    role: "Co-founder & CEO",
    website: "https://iamrupom.netlify.app/",
    linkedin: "https://www.linkedin.com/in/iamrupom7/",
    image: "/team/rupom-team.jpeg",
    description:
      "Driving Opygen's vision and strategy to empower businesses with impactful digital solutions.",
  },
  {
    name: "MD. Faysal Mridha",
    role: "Co-founder & CTO",
    handle: "@faysaldev",
    website: "https://faysaldev.vercel.app",
    linkedin: "https://www.linkedin.com/in/faysaldev/",
    image: "/team/faysal-team.png",
    description:
      "Architecting robust, scalable, and high-performance technology stacks for modern applications.",
  },
  {
    name: "Syed Mohiuddin",
    role: "Co-founder & COO",
    website: "https://syedmohiuddinmeshal.me",
    linkedin: "https://www.linkedin.com/in/10613-meshal",
    image: "/team/meshal-team.png",
    description:
      "Streamlining operations and ensuring seamless delivery of digital products across the board.",
  },
  {
    name: "Mohibbullah Khan",
    role: "Co-founder & CPO",
    website: "https://muhibkhan.netlify.app/",
    linkedin: "https://www.linkedin.com/in/mohibbullahkhan/",
    image: "/team/mohib-team.jpeg",
    description:
      "Crafting intuitive, engaging, and user-centric product experiences that people truly love.",
  },
];

export const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/opygen/",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/opygentech/",
  },
  {
    label: "Twitter",
    href: "https://x.com/opygentech",
  },
];

export const SITE_CONFIG = {
  name: "Opygen",
  tagline: "Digital Oxygen for Business",
  description:
    "Opygen helps businesses grow with custom software development, SaaS solutions, CRM platforms, web applications, and digital automation services.",
  url: "https://opygen.com",
  ogImage: "https://opygen.com/og-image.jpg",
  googleVerification: "vXLOnPDpQAHumeScIhXzCLh4Ecyq_OGhFvfnLbOt70Y",
  founder: {
    name: "MD. Faysal Mridha",
    handle: "@faysaldev",
    role: "Co-founder & CTO",
    url: "https://faysaldev.vercel.app",
    sameAs: [
      "https://faysaldev.vercel.app",
      "https://www.linkedin.com/in/faysaldev/",
      "https://github.com/faysaldev",
    ],
  },
  founders: TEAM_MEMBERS,
  location: {
    city: "Dhaka",
    country: "Bangladesh",
    countryCode: "BD",
  },
  contact: {
    email: "opygen.info@gmail.com",
    phone: "+880 1560-004121",
  },
  socials: SOCIAL_LINKS,
};

export const SEO_KEYWORDS = [
  // Primary SEO Keywords
  "Software Development Company",
  "Web Development Company",
  "Custom Software Development",
  "SaaS Development Company",
  "Digital Transformation Company",
  "Business Automation Solutions",
  "Enterprise Software Solutions",
  "Custom Web Application Development",
  "Full Stack Development Company",
  "IT Solutions Company",

  // Bangladesh Targeted Keywords
  "Software Development Company in Bangladesh",
  "Web Development Company in Bangladesh",
  "Best Software Company in Bangladesh",
  "Custom Software Development Bangladesh",
  "Website Development Company Bangladesh",
  "SaaS Company Bangladesh",
  "IT Service Provider Bangladesh",
  "Business Automation Company Bangladesh",
  "Professional Web Developers Bangladesh",
  "Software Company Dhaka Bangladesh",

  // Leadership & Team Keywords
  "MD. Sidur Rahaman",
  "Sidur Rahaman CEO Opygen",
  "MD. Faysal Mridha",
  "Faysal Mridha CTO Opygen",
  "@faysaldev",
  "faysaldev",
  "Faysal Ahmed CTO",
  "Syed Mohiuddin COO Opygen",
  "Mohibbullah Khan CPO Opygen",

  // Service-Based Keywords
  "Website Development",
  "Professional Website Development",
  "Business Website Development",
  "Responsive Website Design",
  "Next.js Development Services",
  "React Development Company",
  "E-commerce Website Development",
  "Corporate Website Development",
  "Software Development",
  "Custom ERP Software Development",
  "CRM Software Development",
  "Business Management Software",
  "Inventory Management Software",
  "POS Software Development",
  "Workflow Automation Software",
  "Cloud Based Software Solutions",

  // SaaS Keywords
  "SaaS Product Development",
  "SaaS Application Development",
  "SaaS Solutions for Businesses",
  "Cloud Software Development",
  "Subscription Based Software Development",
  "B2B SaaS Development Company",

  // Cleaning CRM Keywords
  "Cleaning Business Management Software",
  "Cleaning Service CRM Software",
  "Cleaning Company Software",
  "Cleaning Scheduling Software",
  "Cleaning Service Management System",
  "Maid Service Management Software",
  "Cleaning CRM Platform",
  "Field Service Management Software",

  // Brand Keywords
  "Opygen",
  "opygen tech",
  "opygentech",
  "Opygen Tech",
  "Digital Oxygen",
  "digital oxygen",
  "Digital Oxygen for Business",
  "digital oxygen for business",
  "Digital Oxygen Opygen",
  "Opygen Digital Oxygen for Business",
  "Opygen Software Solutions",
  "Opygen Technology",
  "Opygen CRM",
  "Opygen Cleaning CRM",

  // High Conversion Keywords
  "Hire Software Development Company",
  "Get Custom Software Development",
  "Build Custom Business Software",
  "Request Software Development Quote",
  "Affordable Software Development Services",
  "Professional Software Developers",
  "Best Software Development Partner",
  "Build Your Business Application",
];

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_CONFIG.name,
    legalName: "Opygen LLC",
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/logo.png`,
    description: SITE_CONFIG.description,
    slogan: SITE_CONFIG.tagline,
    email: SITE_CONFIG.contact.email,
    telephone: SITE_CONFIG.contact.phone,
    foundingLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: SITE_CONFIG.location.city,
        addressCountry: SITE_CONFIG.location.country,
      },
    },
    founders: SITE_CONFIG.founders.map((member) => ({
      "@type": "Person",
      name: member.name,
      jobTitle: member.role,
      url: member.website,
      sameAs: [member.website, member.linkedin].filter(Boolean),
    })),
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: SITE_CONFIG.contact.email,
      telephone: SITE_CONFIG.contact.phone,
      availableLanguage: ["English", "Bengali"],
    },
    sameAs: SOCIAL_LINKS.map((link) => link.href),
  };
}

export function generateCTOPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE_CONFIG.founder.name,
    alternateName: ["@faysaldev", "faysaldev", "Faysal", "MD. Faysal Mridha"],
    jobTitle: SITE_CONFIG.founder.role,
    worksFor: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
    url: SITE_CONFIG.founder.url,
    sameAs: SITE_CONFIG.founder.sameAs,
    knowsAbout: [
      "Software Development",
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "SaaS Architecture",
      "Business Automation",
      "Cloud Infrastructure",
    ],
  };
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    description: SITE_CONFIG.description,
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_CONFIG.url}/services?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function generateCleaningCRMSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Opygen Cleaning CRM",
    operatingSystem: "Web-based / Cloud",
    applicationCategory: "BusinessApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "128",
    },
    description:
      "All-in-one cleaning business management software & CRM for maid services, commercial cleaners, and field service teams.",
    author: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${SITE_CONFIG.url}${item.url}`,
    })),
  };
}
