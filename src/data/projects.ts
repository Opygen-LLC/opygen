export const projects = [
  {
    id: 1,
    title: "E-Commerce Replatforming",
    description: "A complete overhaul of a legacy e-commerce system resulting in a 40% increase in conversions.",
    category: "Website",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    slug: "ecommerce-replatforming",
    client: "RetailNova",
    duration: "4 Months",
    role: "Full-Stack Development & UI/UX",
    challenge: "The client was struggling with a slow, outdated monolithic architecture that was causing high cart abandonment rates and making it difficult to scale their inventory. Furthermore, their mobile experience was entirely unoptimized, leading to a massive drop-off in traffic from social media channels.",
    solution: "We migrated them to a modern Headless Commerce stack using Next.js and Shopify Plus. This allowed for lightning-fast page loads and a completely custom, conversion-optimized checkout flow. We also implemented Algolia search to allow users to find products instantly without page reloads.",
    results: ["40% increase in conversion rate", "2.5x faster page load times", "$2M+ additional annual revenue"],
    gallery: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
    ]
  },
  {
    id: 2,
    title: "Fintech Mobile Application",
    description: "A sleek, secure mobile banking app designed to streamline personal finance management.",
    category: "App",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80",
    slug: "fintech-app",
    client: "Vault Pay",
    duration: "6 Months",
    role: "Mobile App Development",
    challenge: "Traditional banking apps feel clunky and unintuitive. Vault Pay needed a mobile-first experience that felt as seamless and modern as the best social media apps, while maintaining strict financial security standards and complying with international regulations.",
    solution: "Built a native-feeling cross-platform application using React Native, integrated with Plaid and Stripe for secure, real-time financial tracking and transfers. Implemented biometric authentication, end-to-end encryption, and a beautiful dark-mode interface with smooth micro-interactions.",
    results: ["500,000+ app downloads in year 1", "4.8/5 App Store Rating", "Reduced support tickets by 30%"],
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80"
    ]
  },
  {
    id: 3,
    title: "Global Brand Campaign",
    description: "A comprehensive digital marketing campaign that reached over 5 million target users.",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=1200&q=80",
    slug: "global-brand-campaign",
    client: "EcoLife Global",
    duration: "3 Months",
    role: "Digital Strategy & Media Buying",
    challenge: "EcoLife was launching a new line of sustainable products but lacked brand awareness in a highly saturated market. They needed a campaign that would quickly capture attention, educate consumers on their unique value proposition, and drive pre-orders before the official launch date.",
    solution: "Designed a multi-channel digital campaign across Meta and Google Ads, paired with highly optimized, fast-loading landing pages. We utilized dynamic retargeting to maximize ad spend efficiency and A/B tested over 40 creative variations to find the perfect messaging match.",
    results: ["5 Million targeted impressions", "300% Return on Ad Spend (ROAS)", "Sold out initial inventory in 4 weeks"],
    gallery: [
      "https://images.unsplash.com/photo-1557838923-2985c318be48?w=800&q=80",
      "https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=800&q=80"
    ]
  },
  {
    id: 4,
    title: "AI-Powered CRM Dashboard",
    description: "An intuitive SaaS platform leveraging AI to predict customer churn and automate outreach.",
    category: "SaaS",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    slug: "ai-crm-dashboard",
    client: "SaaSify Inc",
    duration: "8 Months",
    role: "Product Design & Full-Stack Development",
    challenge: "Sales teams were overwhelmed with data but lacking actionable insights, leading to missed opportunities and higher customer churn rates. Existing CRM tools required too much manual data entry and didn't provide predictive analytics.",
    solution: "Developed a custom SaaS CRM from scratch, integrating an AI engine that analyzes user engagement to flag at-risk accounts. We built an incredibly intuitive dashboard using React and Tailwind CSS, focusing on surfacing these insights clearly and allowing one-click automated email sequences.",
    results: ["Reduced customer churn by 22%", "Adopted by 50+ enterprise teams", "Secured $5M Series A funding"],
    gallery: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
    ]
  },
  {
    id: 5,
    title: "Healthcare Portal Redesign",
    description: "Modernizing patient scheduling and telemedicine access with a robust web application.",
    category: "Website",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80",
    slug: "healthcare-portal",
    client: "MediCare Plus",
    duration: "5 Months",
    role: "UI/UX Redesign & Web Development",
    challenge: "The existing patient portal was non-compliant with modern accessibility standards, difficult for elderly patients to navigate, and lacking telemedicine capabilities.",
    solution: "Redesigned the entire user experience focusing on AAA accessibility. Built a custom secure portal with integrated video-conferencing for virtual visits and a one-click prescription refill system.",
    results: ["95% positive patient feedback", "Zero accessibility complaints", "40% increase in virtual visit bookings"],
    gallery: [
      "https://images.unsplash.com/photo-1576091160550-2173ff9e9e9c?w=800&q=80",
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80"
    ]
  },
  {
    id: 6,
    title: "Fitness Tracking Ecosystem",
    description: "A seamless mobile experience connecting wearable devices to personalized workout plans.",
    category: "App",
    image: "https://images.unsplash.com/photo-1526406915894-7bcd65f60845?w=1200&q=80",
    slug: "fitness-tracking",
    client: "FitSync",
    duration: "7 Months",
    role: "Mobile Engineering & IoT Integration",
    challenge: "FitSync wanted to build a centralized app that could pull data from multiple different wearable devices (Apple Watch, Fitbit, Garmin) and synthesize it into a single fitness score.",
    solution: "Engineered a robust mobile application with complex HealthKit and Google Fit integrations. Designed a gamified UI that rewards users for consistency, driving incredible user retention.",
    results: ["1M+ Active Users", "Featured 'App of the Day'", "Highest retention rate in category"],
    gallery: [
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
      "https://images.unsplash.com/photo-1526406915894-7bcd65f60845?w=800&q=80"
    ]
  }
];
