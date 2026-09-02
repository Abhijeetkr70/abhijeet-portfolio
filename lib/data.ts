export const siteConfig = {
  name: "Abhijeet Kumar",
  initials: "AK",
  role: "Full-Stack Developer | AI Integration",
  tagline: "Building production-grade web apps with MERN stack & AI.",
  email: "kumarabhijeet7095@gmail.com",
  linkedin: "https://linkedin.com/in/abhijeetkr62",
  github: "https://github.com/Abhijeetkr70",
  location: {
    current: "Jaipur, Rajasthan, India",
    origin: "Saran, Bihar, India",
  },
  university: {
    name: "Jagannath University, Jaipur",
    url: "https://www.jagannathuniversity.org/",
    location: "Jaipur, Rajasthan, India",
    degree: "B.Tech in Computer Science & Engineering",
    cgpa: "7.0",
    duration: "Jul 2023 — Expected Jul 2027",
    coursework: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "Database Management Systems",
      "Computer Networks",
      "Object-Oriented Programming",
    ],
  },
  description:
    "Abhijeet Kumar — B.Tech CSE student at Jagannath University, Jaipur. Full-Stack Developer with 2 internships and hands-on MERN stack expertise, focused on AI-integrated, production-grade web applications.",
  status: "Open to internships and full-time roles",
  resumeUrl: "/resume.pdf",
} as const;

export const heroStats = [
  { value: "2", label: "Internships" },
  { value: "3+", label: "Projects Shipped" },
  { value: "90+", label: "Lighthouse Score" },
  { value: "MERN+AI", label: "Core Stack" },
] as const;

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
] as const;

export const aboutParagraphs = [
  "I'm a B.Tech Computer Science student at Jagannath University, Jaipur, focused on building production-grade web applications that actually ship. With two remote internships and a portfolio of full-stack projects, I've spent the last two years moving from tutorial-grade code to clean, scalable, deployment-ready systems.",
  "My core is the MERN stack — React, Node.js, Express, MongoDB — but I'm equally excited about AI integration: wiring LLM APIs into real products, designing prompt pipelines, and exploring RAG patterns. I care about performance, accessibility, and the small UX details that make an interface feel effortless to use.",
] as const;

export type SkillGroup = {
  id: string;
  label: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "languages",
    label: "Languages",
    skills: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "SQL"],
  },
  {
    id: "frontend",
    label: "Frontend",
    skills: [
      "React.js",
      "Redux Toolkit",
      "Context API",
      "Next.js",
      "Tailwind CSS",
      "shadcn/ui",
      "Material UI",
      "Framer Motion",
      "Vite",
    ],
  },
  {
    id: "backend",
    label: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT",
      "bcrypt",
      "Multer",
      "Nodemailer",
      "Mongoose",
      "Zod",
    ],
  },
  {
    id: "database",
    label: "Database & Tools",
    skills: [
      "MongoDB",
      "MongoDB Atlas",
      "PostgreSQL",
      "Cloudinary",
      "Git",
      "GitHub",
      "Docker",
      "GitHub Actions",
      "Vercel",
      "Render",
      "Postman",
    ],
  },
  {
    id: "ai",
    label: "AI Integration",
    skills: [
      "OpenAI API",
      "Claude API",
      "Prompt Engineering",
      "LLM Workflows",
      "Embeddings",
      "Vector Search",
      "RAG (basics)",
    ],
  },
];

export type ExperienceItem = {
  id: string;
  company: string;
  role: string;
  mode: "Remote" | "On-site" | "Hybrid";
  duration: string;
  bullets: string[];
  stack: string[];
  certificate?: {
    label: string;
    issuer: string;
    url: string;
  };
};

export const experiences: ExperienceItem[] = [
  {
    id: "apexplanet",
    company: "ApexPlanet Software Pvt. Ltd.",
    role: "Web Development Intern",
    mode: "Remote",
    duration: "Dec 2025 — Jan 2026",
    bullets: [
      "Built and deployed 5+ responsive web projects with HTML5, CSS3, and vanilla JavaScript, ensuring full cross-browser compatibility.",
      "Engineered reusable UI components and consistently achieved 90+ Lighthouse scores via lazy loading, image optimization, and efficient DOM manipulation.",
      "Collaborated in a remote team workflow using Git, GitHub pull requests, and structured code reviews.",
    ],
    stack: ["HTML5", "CSS3", "JavaScript", "Git", "GitHub"],
    certificate: {
      label: "View Internship Certificate",
      issuer: "ApexPlanet Software Pvt. Ltd. × AICTE",
      url: "https://drive.google.com/file/d/1Ne9LDeB5cfEuHwFzHyObU2mBAL-mhnkI/view",
    },
  },
  {
    id: "yhills",
    company: "YHills",
    role: "Full-Stack Web Development Intern",
    mode: "Remote",
    duration: "Mar 2024 — Jun 2024",
    bullets: [
      "Developed a scalable MERN-stack application with RESTful APIs, Mongoose schema design, and Redis caching — reducing API response times by ~40%.",
      "Built a dynamic React.js frontend with Redux Toolkit state management, JWT-based authentication, and Tailwind CSS layouts, improving user engagement by ~25%.",
      "Implemented input validation with Zod, secure password hashing with bcrypt, and modular Express routing for production-grade reliability.",
    ],
    stack: [
      "React.js",
      "Redux Toolkit",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redis",
      "JWT",
      "Tailwind CSS",
    ],
    certificate: {
      label: "View Internship Certificate",
      issuer: "YHills",
      url: "https://drive.google.com/file/d/1U9b4vxyVhIAmT1kNOtsPT4kJWgu4twgD/view",
    },
  },
];

export type ProjectItem = {
  id: string;
  name: string;
  tagline: string;
  problem: string;
  role: string;
  stack: string[];
  features: string[];
  impact: string[];
  github: string;
  live: string;
  highlights: string[];
};

export const projects: ProjectItem[] = [
  {
    id: "smartnotes",
    name: "SmartNotes Application",
    tagline: "Full-stack note management with secure auth and real-time search.",
    problem:
      "Users needed a fast, secure, multi-device note workspace with rich organization, real-time search, and per-user data isolation — without the bloat of mainstream note apps.",
    role: "Solo full-stack developer — designed schema, REST API, auth flow, and the responsive React UI end-to-end.",
    stack: [
      "React 18",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Clerk (Auth)",
      "Zod",
    ],
    features: [
      "Secure authentication via Clerk with Google, GitHub, and email — session-based JWTs.",
      "Full CRUD for notes with server-side pagination and per-user data isolation.",
      "Debounced real-time fuzzy search across title and body text.",
      "Dynamic tag-based categorization with create, filter, and remove.",
      "Color-coded notes across 8 accent colors for visual organization.",
      "System-aware dark/light theme with manual toggle and localStorage persistence.",
      "Mobile-first responsive layout with collapsible sidebar and adaptive grid.",
      "Centralized error handling via Express middleware and React Error Boundaries.",
    ],
    impact: [
      "Production-deployed on Vercel (client) + Render (server) with CI from GitHub.",
      "User-isolated note retrieval via Clerk userId scoping — zero cross-account leaks.",
      "Debounced search + pagination keeps the UI responsive on large note sets.",
    ],
    github: "https://github.com/Abhijeetkr70/SmartNotes-Application",
    live: "https://smartnotes-application.vercel.app/",
    highlights: [
      "Clerk Auth",
      "REST API",
      "Zod Validation",
      "Mongoose ODM",
      "Vite + React 18",
    ],
  },
  {
    id: "utility-suite",
    name: "Frontend Utility Suite",
    tagline: "A vanilla-JS SPA bundling Task Manager, Weather Dashboard, and Quiz Platform.",
    problem:
      "Most single-purpose utility apps live in isolation. The goal was a single, fast, zero-framework SPA that packs three real tools (tasks, weather, quiz) with shared components, persistent state, and a polished UI — built entirely with ES6+ vanilla JavaScript.",
    role: "Solo developer — architected the modular JS, hash-based router, shared store, and all three feature modules.",
    stack: [
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "OpenWeatherMap API",
      "localStorage",
    ],
    features: [
      "Task Manager — full CRUD with modal forms, fuzzy search, priority/status filters, sort options, and overdue detection.",
      "Weather Dashboard — real-time data via OpenWeatherMap REST API with mock-data fallback, 5-day forecast, and search history.",
      "Quiz Platform — 30 questions across 2 topics, 3 difficulty levels, SVG circular timer, instant feedback, and score history.",
      "Hash-based SPA router with seamless transitions and zero full-page reloads.",
      "Reusable modal, toast notification system (4 types), and collapsible sidebar.",
      "Persistent dark/light theme with smooth transitions across all modules.",
      "PWA-ready: service worker registration and web manifest for installability.",
      "Event delegation on all list-based UIs — zero per-item listeners for performance.",
    ],
    impact: [
      "Consistent 90+ Lighthouse Performance score through lazy loading and DOM batching.",
      "Single-page bundle with three production-quality apps — minimal JS payload.",
      "Deployed on Vercel with automatic CI from GitHub on every push.",
    ],
    github: "https://github.com/Abhijeetkr70/Frontend_Utility_Suite",
    live: "https://frontend-utility-suite.vercel.app/",
    highlights: [
      "Vanilla JS",
      "SPA Router",
      "REST API",
      "PWA",
      "ES6 Modules",
    ],
  },
];

export const achievements = [
  { value: "90+", label: "Lighthouse Score", sub: "Performance · A11y · SEO" },
  { value: "~40%", label: "Latency Reduced", sub: "Redis caching on MERN APIs" },
  { value: "~25%", label: "Engagement Lift", sub: "React + Tailwind refactor" },
  { value: "5+", label: "Projects Deployed", sub: "Vercel · Render" },
] as const;

export const faqs = [
  {
    q: "Who is Abhijeet Kumar?",
    a: "A B.Tech Computer Science student at Jagannath University, Jaipur, building production-grade web applications with the MERN stack and integrating AI/LLM capabilities into real products.",
  },
  {
    q: "What is his primary tech stack?",
    a: "React.js, Next.js, Node.js, Express.js, MongoDB, TypeScript, Tailwind CSS, and shadcn/ui on the frontend; Redis, JWT, Zod, and Mongoose on the backend. Increasingly integrating OpenAI/Claude APIs for AI features.",
  },
  {
    q: "What internships has he completed?",
    a: "Web Development Intern at ApexPlanet Software Pvt. Ltd. (Dec 2025 – Jan 2026) and Full-Stack Web Development Intern at YHills (Mar – Jun 2024). Both were remote, with certificates available inside the Experience section.",
  },
  {
    q: "Where is he based, and where is he from?",
    a: "Currently based in Jaipur, Rajasthan, India. Originally from Saran, Bihar.",
  },
  {
    q: "Is he open to opportunities?",
    a: "Yes — open to internships, full-time software engineering roles, and freelance projects, with a focus on full-stack and AI-integrated product work.",
  },
  {
    q: "How can recruiters get in touch?",
    a: "Email is the fastest channel. LinkedIn and GitHub are also linked in the Contact section of this site.",
  },
] as const;

export const socialLinks = [
  {
    id: "github",
    label: "GitHub",
    url: "https://github.com/Abhijeetkr70",
    handle: "Abhijeetkr70",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    url: "https://linkedin.com/in/abhijeetkr62",
    handle: "abhijeetkr62",
  },
  {
    id: "email",
    label: "Email",
    url: "mailto:kumarabhijeet7095@gmail.com",
    handle: "kumarabhijeet7095@gmail.com",
  },
  {
    id: "resume",
    label: "Resume",
    url: "/resume",
    handle: "View PDF",
  },
] as const;
