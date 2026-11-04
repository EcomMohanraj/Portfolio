export const profile = {
  name: "Mohanraj S",
  role: "Full Stack Software Engineer",
  tagline: "Building production-ready web applications with React, Next.js, TypeScript, Golang, Node.js and PostgreSQL.",
  positioning:
    "Full Stack Software Engineer with production experience building React, Next.js, TypeScript, Golang, Node.js, and PostgreSQL applications.",
  location: "Dindigul / Coimbatore, Tamil Nadu, India",
  email: "mohanrajapm@zohomail.in",
  github: "https://github.com/EcomMohanraj",
  linkedin: "https://www.linkedin.com/in/mohanraj-s-3111b1215",
  portfolio: "https://mohanraj-portfolio-chi.vercel.app",
  resumeUrl: "/Mohanraj_S_Resume.pdf",
  targetExperience: "1 year of professional software development experience",
  targetRoles: [
    "Full Stack Developer",
    "Software Engineer",
    "Full-Stack Engineer",
    "React / Next.js Developer",
    "Node.js Developer",
    "Backend Engineer",
  ],
  summary:
    "I’m a Full Stack Software Engineer with production experience building web applications using React, Next.js, TypeScript, Golang, Node.js and PostgreSQL. I have worked on a production Healthcare Information Management System and independently built and deployed full-stack platforms involving e-commerce, real-time communication, payments, authentication and automated testing. I enjoy working across the complete application lifecycle — from database and API design to frontend development, testing and deployment.",
};

export const experience = [
  {
    company: "Sanrado Techsolutions LLP, Tiruppur",
    location: "Tiruppur, Tamil Nadu, India",
    period: "Jul 2025 – May 2026",
    promotionCallout: "Promoted from Software Developer Intern to Software Engineer I within 3 months based on performance.",
    roles: [
      {
        title: "Software Engineer – I",
        period: "Oct 2025 – May 2026",
        highlights: [
          "Promoted from Software Developer Intern to Software Engineer I within 3 months based on performance.",
          "Delivered 17+ full-stack modules for a production Healthcare Information Management System (HIMS).",
          "Worked with React, TypeScript, Golang and PostgreSQL.",
          "Aligned frontend TypeScript models with backend seed configurations to eliminate recurring data-mismatch defects.",
          "Built an MQTT-based real-time monitoring system for hospital equipment status.",
          "Secured REST APIs for patient registration and inventory management with authentication controls.",
          "Designed normalized PostgreSQL schemas and optimized queries, joins and indexes.",
          "Troubleshot production deployment and database issues.",
          "Worked across the software development lifecycle on a live production system.",
        ],
      },
      {
        title: "Software Developer Intern",
        period: "Jul 2025 – Sep 2025",
        highlights: [
          "Contributed to full-stack feature development and API integration for the Healthcare Information Management System using React, Next.js, JavaScript, Golang, and PostgreSQL.",
        ],
      },
    ],
  },
];

export const yazhisaiProject = {
  id: "yazhisai-cloud-kitchen",
  title: "Yazhisai Cloud Kitchen",
  subtitle: "Multi-Role Real-Time Ordering & Delivery Platform",
  badge: "4-Role Architecture",
  type: "Freelance / Full Stack Project",
  position: "Full Stack Developer",
  liveUrl: "https://yazhisaicloudkitchen.in",
  githubUrl: "https://github.com/EcomMohanraj/cloud-kitchen",
  description:
    "A multi-role food ordering and delivery platform supporting four distinct roles: Customer, Admin, Chef, and Delivery Rider, connected via a unified real-time Socket.io backbone.",
  stack: [
    "Next.js",
    "React",
    "TypeScript",
    "Express.js",
    "Prisma ORM",
    "PostgreSQL",
    "Socket.io",
    "Razorpay",
    "Resend",
    "Playwright",
  ],
  displayBadges: [
    "Next.js",
    "TypeScript",
    "Express",
    "Prisma",
    "PostgreSQL",
    "Socket.io",
    "Razorpay",
    "Playwright",
  ],
  orderFlow: [
    { step: "1", title: "Customer", action: "Browse Menu & Place Order" },
    { step: "2", title: "Order Placement", action: "Slot Selection & Online Payment" },
    { step: "3", title: "Admin", action: "Verify, Manage Operations & Assign" },
    { step: "4", title: "Chef", action: "Receive Order & Prepare Meal" },
    { step: "5", title: "Delivery Rider", action: "Pickup & Real-time GPS Delivery Tracking" },
    { step: "6", title: "Customer Receives Order", action: "Status Update Complete" },
  ],
  roles: [
    {
      role: "Customer",
      capabilities: [
        "Browse food & menus",
        "Place orders with slot-based meal pre-ordering",
        "Secure online payments via Razorpay",
        "Live order status tracking & notifications",
      ],
    },
    {
      role: "Admin",
      capabilities: [
        "Manage orders across all stages",
        "Manage users and role permissions",
        "Manage food/menu operations and inventory",
        "Comprehensive business analytics dashboard",
      ],
    },
    {
      role: "Chef",
      capabilities: [
        "Receive real-time incoming kitchen orders",
        "Manage food preparation queues",
        "Update live kitchen preparation status",
      ],
    },
    {
      role: "Delivery Rider",
      capabilities: [
        "Manage assigned deliveries in real time",
        "Update delivery statuses step-by-step",
        "Real-time GPS delivery tracking for customers",
      ],
    },
  ],
  technicalArchitecture: [
    { layer: "Frontend", tech: "Next.js, React, TypeScript", note: "Responsive UI with role-based routing" },
    { layer: "Backend API", tech: "Express.js", note: "Modular REST API architecture" },
    { layer: "ORM & Database", tech: "Prisma ORM with PostgreSQL", note: "Normalized schema and relational consistency" },
    { layer: "Real-time Layer", tech: "Socket.io", note: "Instant event broadcast for order states & live GPS updates" },
    { layer: "Payment Gateway", tech: "Razorpay", note: "Secure checkout with server-side HMAC verification & idempotent webhooks" },
    { layer: "Email Notifications", tech: "Resend", note: "Transactional receipts & status updates" },
    { layer: "Auth & Security", tech: "JWT with HTTP-only cookies", note: "Route guards & rate limiting on all auth endpoints" },
  ],
  testingAchievement:
    "Implemented a 16-case Playwright E2E test suite covering the complete ordering workflow across all four roles.",
};

export const milkyMushroomProject = {
  id: "milky-mushroom",
  title: "Milky Mushroom – E-Commerce Platform",
  subtitle: "Production E-Commerce Platform for Agri-Business",
  badge: "Production E-Commerce Platform",
  type: "Independent Project / Family Business",
  position: "Full Stack Developer",
  liveUrl: "https://milkymushroom.in",
  githubUrl: null, // Private production repository
  description:
    "Production e-commerce platform built for a family agri-business. Owned the complete product lifecycle from architecture to production deployment.",
  stack: [
    "Next.js 15",
    "Supabase",
    "PostgreSQL",
    "Tailwind CSS",
    "Razorpay",
    "Resend",
    "Vercel",
  ],
  displayBadges: [
    "Next.js",
    "Supabase",
    "PostgreSQL",
    "Tailwind CSS",
    "Razorpay",
    "Resend",
    "Vercel",
  ],
  lifecycleSteps: [
    { step: "1", title: "Architecture", detail: "Database schema design, auth flow & payment gateway integration planning" },
    { step: "2", title: "Development", detail: "Built catalog, cart, checkout, admin panel & route-level authentication guards" },
    { step: "3", title: "Testing", detail: "End-to-end payment flows, webhooks verification & review authenticity validation" },
    { step: "4", title: "Deployment", detail: "Vercel edge deployment with automated CI/CD and Supabase database hosting" },
    { step: "5", title: "Production", detail: "Active customer ordering, shipment tracking alerts & performance monitoring" },
  ],
  keyFeatures: [
    "Product/catalog management",
    "Customer ordering & cart workflows",
    "Payment integration with Razorpay",
    "Transactional email notifications via Resend",
    "Verified-purchase review and rating system",
    "Shipment tracking alerts",
    "Customer authentication",
    "Admin dashboard for order fulfillment",
    "Route-level authentication guards",
  ],
  performanceScores: {
    mobile: 93,
    desktop: 100,
    source: "Google PageSpeed Insights",
  },
  lifecycleStatement:
    "Owned the complete product lifecycle: Architecture → Development → Testing → Deployment → Production.",
};

export const tnBikeRaceProject = {
  id: "tn-bike-race",
  title: "TN Bike Race",
  subtitle: "A 3D motorcycle racing game for Android, built solo in Unity across 10 stages",
  badge: "In Google Play Review",
  type: "Personal Project",
  position: "Game Developer",
  year: "2026",
  liveUrl: null, // Not publicly released yet: in Google Play production review
  githubUrl: null,
  releaseStatus: "Coming Soon to Google Play",
  description: "A 3D motorcycle racing game for Android, built solo in Unity across 10 stages.",
  problem:
    "Wanted to build and independently publish a complete 3D racing game end-to-end — game design, physics, AI opponents, and a real Play Store release pipeline — not just a tech demo.",
  stack: ["Unity", "C#", "Android", "Google Play Console"],
  displayBadges: ["Unity", "C#", "Android", "Google Play Console"],
  highlights: [
    "Designed and built a 3D motorcycle racing game in Unity (C#) with 10 distinct stages: city, highway, village, off-road, forest, hill, mountain, mud, desert, and a mixed final stage",
    "Implemented core systems iteratively in milestones: ride/checkpoint/finish loop, AI racers and traffic, a bike garage with multiple selectable bikes, and local save/progress persistence",
    "Optimized all 10 stages to run at a stable 60 FPS on real Android hardware",
    "Set up a Google Play Console developer account; the game completed closed testing and is now in Google Play production review",
  ],
  impactStats: [
    "10 stages built and phone-tested at 60 FPS",
    "Built solo from game design to Play Store release pipeline",
    "In Google Play production review",
  ],
};

export const krishaPaintingsProject = {
  id: "krisha-paintings",
  title: "Krisha Paintings",
  subtitle: "A business website with an admin panel for a residential and commercial painting company",
  badge: "Live Business Website",
  type: "Full Stack Project",
  position: "Full Stack Developer",
  year: "2026",
  liveUrl: "https://painting-shop-ar6x.vercel.app",
  githubUrl: "https://github.com/EcomMohanraj/painting-shop",
  releaseStatus: null,
  description: "A business website with an admin panel for a residential and commercial painting company.",
  stack: ["Next.js", "TypeScript", "Tailwind CSS", "Neon PostgreSQL", "Cloudinary", "Vercel"],
  displayBadges: ["Next.js", "TypeScript", "Tailwind CSS", "Neon PostgreSQL", "Cloudinary", "Vercel"],
  highlights: [
    "A public site with a motion-driven hero, colour fan-deck, before/after slider, gallery, testimonials and contact form",
    "An admin panel with image upload through Cloudinary, data stored in Neon PostgreSQL",
    "Built entirely on a free-tier stack so hosting costs nothing",
  ],
  impactStats: [
    "Live on Vercel",
    "Free-tier stack, zero hosting cost",
    "Admin panel + contact form tested live",
  ],
};

export const wifiJammingProject = {
  id: "wifi-jamming-detector",
  title: "Wi-Fi Jamming Demo and Jamming Detector",
  subtitle: "An ESP32 proof-of-concept that demonstrates Wi-Fi jamming and detects it with a visible and audible alert",
  badge: "Lab Proof-of-Concept",
  type: "Internship Project, Hackup Technology, Coimbatore",
  position: "Embedded Security",
  year: "Dec 2024 – Mar 2025",
  liveUrl: null,
  githubUrl: null,
  releaseStatus: null,
  description:
    "An ESP32 proof-of-concept that demonstrates Wi-Fi jamming and detects it with a visible and audible alert, built as a lab exercise for security awareness.",
  stack: ["C++", "Arduino IDE", "ESP32 (NodeMCU)", "Breadboard prototyping"],
  displayBadges: ["C++", "Arduino IDE", "ESP32 (NodeMCU)", "Breadboard prototyping"],
  highlights: [
    "A proof-of-concept Wi-Fi jamming demo and a separate jamming detector on an ESP32 NodeMCU, written in C++",
    "A breadboard circuit with jumper wires, an LED and a buzzer that alert when jamming is detected",
  ],
  impactStats: ["Hardware + firmware", "Internship project", "Detection-focused"],
};

export const featuredProjects = [
  yazhisaiProject,
  milkyMushroomProject,
  krishaPaintingsProject,
  tnBikeRaceProject,
  wifiJammingProject,
];

export const skillsData = {
  languages: ["TypeScript", "JavaScript", "Golang", "SQL"],
  frontend: ["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
  backend: [
    "Node.js",
    "Express.js",
    "Golang",
    "REST APIs",
    "Prisma ORM",
    "Socket.io",
    "MQTT",
  ],
  databases: ["PostgreSQL", "MySQL"],
  databaseExpertise: [
    "Schema design",
    "Complex joins",
    "Subqueries",
    "Views",
    "Indexes",
    "Constraints",
    "Transactions",
  ],
  cloudPlatforms: [
    "Supabase",
    "Vercel",
    "Render",
    "Neon",
    "Razorpay API",
    "Resend",
    "Cloudinary",
  ],
  testing: ["Playwright", "E2E Testing"],
  tools: ["Git", "GitHub", "Linux", "VS Code"],
};

export const education = [
  {
    degree: "MCA (Master of Computer Applications)",
    school: "Dr. SNS Rajalakshmi College of Arts & Science, Coimbatore",
    detail: "CGPA: 8.1",
    period: "2025",
  },
  {
    degree: "BCA (Bachelor of Computer Applications)",
    school: "St. Joseph's College, Tiruchirappalli",
    detail: "",
    period: "2023",
  },
];
