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
    promotionCallout: "Promoted from Intern to Software Engineer – I within 3 months based on performance",
    roles: [
      {
        title: "Software Engineer – I",
        period: "Oct 2025 – May 2026",
        highlights: [
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
          "Contributed to full-stack feature development and API integration for the Healthcare Information Management System.",
          "Promoted to full-time Software Engineer – I in October 2025 following high-velocity module delivery and reliable system design contributions.",
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
    { layer: "Auth & Security", tech: "JWT with HTTP-only cookies", note: "Route guards & express rate limiting against brute force" },
    { layer: "E2E Testing Suite", tech: "Playwright", note: "16-case suite covering full ordering lifecycle across all 4 roles" },
  ],
  testingAchievement:
    "16-case Playwright E2E suite covering the full ordering lifecycle across all four roles.",
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

export const featuredProjects = [yazhisaiProject, milkyMushroomProject];

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
    period: "2023 — 2025",
  },
  {
    degree: "BCA (Bachelor of Computer Applications)",
    school: "St. Joseph's College, Tiruchirappalli",
    detail: "Graduated with Distinction",
    period: "2020 — 2023",
  },
];
