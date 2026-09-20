export const profile = {
  name: "Mohanraj S",
  role: "Full Stack Software Engineer",
  location: "Dindigul, Tamil Nadu, India",
  email: "mohanrajapm@zohomail.in",
  phone: "+91 86107 55195",
  github: "https://github.com/EcomMohanraj",
  linkedin: "https://linkedin.com/in/mohanraj-s-3111b1215",
  resumeUrl: "/Mohanraj_S_Resume.pdf",
  tagline:
    "I build full-stack products end-to-end — from database schema to production deployment.",
  summary:
    "Full Stack Engineer with close to a year of production experience across React, TypeScript, Go, Node.js and PostgreSQL. I've delivered 17+ modules for a live hospital management system and independently designed, built and shipped two production platforms with real-time features and live payments. Open to full-time remote Full Stack Developer roles.",
};

export const skills = [
  {
    group: "Languages & Frontend",
    items: ["TypeScript", "JavaScript", "React", "Next.js 15/16", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    group: "Backend",
    items: ["Golang", "Node.js", "Express", "REST APIs", "Prisma ORM", "MQTT", "Socket.io"],
  },
  {
    group: "Databases",
    items: ["PostgreSQL", "MySQL", "Schema Design", "Query Optimization", "Redis"],
  },
  {
    group: "Cloud & Platforms",
    items: ["Vercel", "Render", "Supabase", "Neon", "Razorpay API", "Cloudinary", "Docker"],
  },
  {
    group: "Practices & Tools",
    items: ["Git/GitHub", "Playwright (E2E)", "CI/CD", "Linux", "System Design"],
  },
];

export const experience = [
  {
    company: "Sanrado Techsolutions LLP",
    location: "Tiruppur, India",
    range: "Jul 2025 — May 2026",
    roles: [
      {
        title: "Software Engineer — I",
        range: "Oct 2025 — May 2026",
        bullets: [
          "Promoted from Intern to Software Engineer — I within 3 months based on performance",
          "Delivered 17+ full-stack modules for a production Healthcare Information Management System (HIMS) using React, TypeScript, Golang and PostgreSQL",
          "Built an MQTT-based real-time monitoring system for hospital equipment status across the facility",
          "Secured REST APIs for patient registration and inventory management, protecting sensitive healthcare data",
          "Designed normalized PostgreSQL schemas and tuned queries, joins and indexes to speed up reporting",
        ],
      },
      {
        title: "Software Developer Intern",
        range: "Jul 2025 — Sep 2025",
        bullets: [
          "Onboarded onto a live production HIMS codebase and contributed across the full development lifecycle",
          "Shipped features using HTML5, CSS3, JavaScript, Next.js, Golang, React.js and PostgreSQL",
        ],
      },
    ],
  },
];

export const projects = [
  {
    slug: "yazhisai-cloud-kitchen",
    name: "Yazhisai Cloud Kitchen",
    tamilName: "யாழிசை மனையக உணவகம்",
    tagline: "A 4-role, real-time cloud kitchen ordering platform, live in production",
    role: "Freelance — Full Stack Developer",
    year: "2026",
    liveUrl: "https://yazhisaicloudkitchen.in",
    githubUrl: "https://github.com/EcomMohanraj/cloud-kitchen",
    stack: ["Next.js", "Express", "Prisma", "PostgreSQL (Neon)", "Socket.io", "Razorpay", "Resend"],
    problem:
      "A cloud kitchen needed a slot-based pre-ordering system that customers, kitchen staff, delivery riders and the owner could all use in real time — without the cost of a food-delivery-app subscription.",
    approach: [
      "Designed a 4-role architecture (Customer, Admin, Chef, Rider) sharing one Socket.io real-time backbone for order status, live GPS tracking and kitchen alerts.",
      "Built meal-slot scheduling with per-slot order cutoffs enforced server-side, so orders can't slip through after a kitchen's cutoff time.",
      "Integrated Razorpay for live payments with server-side HMAC signature verification plus an idempotent webhook fallback, so a dropped connection never leaves an order stuck as unpaid despite being charged.",
      "Added GPS-based delivery tracking using native geolocation and Socket.io instead of the billable Google Maps Directions API, keeping infrastructure cost near zero.",
      "Migrated authentication from localStorage tokens to httpOnly cookies across all 4 roles to close an XSS token-theft gap, and added rate limiting on every login route.",
      "Wrote a 16-case Playwright E2E suite covering registration, ordering, payment, tracking and the full admin/chef/rider workflow.",
    ],
    impact: [
      "Live in production on a custom domain with SSL, processing real payments end-to-end",
      "4 independent user roles running on one shared real-time backend",
      "16/16 automated E2E tests passing across the complete order lifecycle",
    ],
  },
  {
    slug: "milky-mushroom",
    name: "Milky Mushroom",
    tagline: "A production e-commerce platform for a family agri-business, built and shipped solo",
    role: "Independent Project (Family Business) — Full Stack Developer",
    year: "2026 — Present",
    liveUrl: "https://milkymushroom.in",
    githubUrl: undefined,
    stack: ["Next.js 15", "Supabase (PostgreSQL)", "Tailwind CSS", "Razorpay", "Resend", "Fast2SMS"],
    problem:
      "A family mushroom-cultivation business needed an online store to sell directly to customers, with payments, order tracking and trustworthy reviews — with no existing engineering team.",
    approach: [
      "Owned the entire product lifecycle solo: architecture, schema design, frontend, backend, deployment and post-launch iteration.",
      "Integrated Razorpay for payments and Resend for transactional order email, automating the full purchase-to-notification pipeline.",
      "Built a review system restricted to verified purchasers only, so ratings stay trustworthy.",
      "Added India Post manual shipment tracking with an admin panel for order fulfillment.",
      "Optimized images (WebP conversion) and layout for mobile, pushing Google PageSpeed to 93 (mobile) and 100 (desktop).",
    ],
    impact: [
      "Live production store handling real customer orders and payments",
      "Google PageSpeed: 93 mobile / 100 desktop",
      "Built and shipped end-to-end by a single engineer",
    ],
  },
  {
    slug: "smart-bike-iot",
    name: "Smart Bike IoT",
    tagline: "A crash-detection and GPS tracking system spanning firmware, backend and mobile",
    role: "Personal Project — Full Stack / IoT",
    year: "2026",
    liveUrl: undefined,
    githubUrl: "https://github.com/EcomMohanraj/smartbike-backend",
    stack: ["ESP32-S3", "FastAPI", "PostgreSQL", "Redis", "Docker", "Flutter"],
    problem:
      "Explored whether a low-cost hardware module could detect motorcycle crashes and track location in real time, end-to-end from sensor to mobile app.",
    approach: [
      "Wrote ESP32-S3 firmware to parse live GPS data and read accelerometer/gyroscope data from an MPU6050 over I2C.",
      "Designed a crash-detection algorithm combining a 2.5g impact spike with a 60-degree tilt threshold to avoid false positives from normal riding.",
      "Built a Dockerized FastAPI backend with PostgreSQL and Redis to ingest and serve live device telemetry.",
      "Built a companion Flutter mobile app to display live location and trip data, debugging real device issues including Android embedding migration and WebSocket connection leaks.",
    ],
    impact: [
      "Full hardware-to-mobile pipeline working end-to-end on physical hardware",
      "Custom crash-detection logic tuned against real ride data to cut false positives",
      "Hands-on experience across firmware, backend infrastructure and mobile — beyond typical web stack work",
    ],
  },
];

export const education = [
  {
    degree: "MCA",
    school: "Dr. SNS Rajalakshmi College, Coimbatore",
    detail: "CGPA: 8.1",
    year: "2025",
  },
  {
    degree: "BCA",
    school: "St. Joseph's College, Tiruchirappalli",
    detail: "",
    year: "2023",
  },
];
