export const siteConfig = {
  name: "Abhijeet Kumar",
  initials: "AK",
  role: "Full-Stack Developer | AI Integration",
  tagline: "Building production-grade web apps with MERN stack & AI.",
  url: "https://abhijeet-kr.vercel.app",
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

export const featuredStack = [
  "React 18",
  "Next.js 14",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "MongoDB",
  "OpenAI API",
] as const;

export const navItems = [
  { label: "About", href: "about" },
  { label: "Skills", href: "skills" },
  { label: "Experience", href: "experience" },
  { label: "Projects", href: "projects" },
  { label: "Education", href: "education" },
  { label: "FAQ", href: "faq" },
  { label: "Contact", href: "contact" },
] as const;

export const aboutParagraphs = [
  "I'm a B.Tech Computer Science student at Jagannath University, Jaipur, focused on building production-grade web applications that actually ship. With two remote internships and a portfolio of full-stack projects, I've spent the last two years moving from tutorial-grade code to clean, scalable, deployment-ready systems.",
  "My core is the MERN stack — React, Node.js, Express, MongoDB — but I'm equally excited about AI integration: wiring LLM APIs into real products, designing prompt pipelines, and exploring RAG patterns. I care about performance, accessibility, and the small UX details that make an interface feel effortless to use.",
] as const;

export type SkillGroup = {
  id: string;
  label: string;
  description: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "ai",
    label: "AI Integration",
    description: "LLM-powered product work — the differentiator.",
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
  {
    id: "languages",
    label: "Languages",
    description: "The typed & untyped foundations I write every day.",
    skills: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "SQL"],
  },
  {
    id: "frontend",
    label: "Frontend",
    description: "UI frameworks, design systems, and motion.",
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
    description: "APIs, auth, validation, and server plumbing.",
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
    description: "Storage, infra, and the day-to-day toolbox.",
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
  summaryFeatures: string[];
  problem: string;
  role: string;
  stack: string[];
  features: string[];
  impact: string[];
  overview: string;
  architecture: string[];
  deepDive: { heading: string; body: string }[];
  github: string;
  live: string;
  highlights: string[];
};

export const projects: ProjectItem[] = [
  {
    id: "smartnotes",
    name: "SmartNotes Application",
    tagline: "Full-stack note management with secure auth and real-time search.",
    summaryFeatures: [
      "Clerk auth with Google, GitHub & email — per-user note isolation.",
      "Debounced fuzzy search + tag-based filtering across all notes.",
      "Deployed on Vercel + Render with MongoDB Atlas persistence.",
    ],
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
    overview:
      "SmartNotes is a production-grade, full-stack note management platform designed to be the fastest way to capture, organize, and find what you've written. It pairs a React 18 + Vite frontend with an Express + MongoDB backend, hardened with Zod validation and Clerk-backed authentication so every request is scoped to a single, verified user.",
    architecture: [
      "React 18 + Vite client builds into a static SPA served from Vercel with SPA rewrite rules and edge caching.",
      "Express.js REST API runs on Render with Mongoose ODM, Zod-validated request bodies, and Clerk JWT verification middleware on every protected route.",
      "MongoDB Atlas stores notes in a single `notes` collection, indexed on `userId` and `tags` for fast per-user queries.",
      "Authentication is delegated to Clerk — sign-in/up with Google, GitHub, or email; the server validates the session JWT and never trusts a client-supplied user id.",
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
    deepDive: [
      {
        heading: "Per-user data isolation as a first-class concern",
        body: "Every protected route runs through a Clerk JWT verification middleware that attaches `req.auth.userId` to the request. The Mongoose queries then scope on that id — `Note.find({ userId: req.auth.userId })` — so even if a client tampers with the URL, the server still returns only their own notes. Pagination (`?page=&limit=`) lives at the same layer, keeping response payloads small.",
      },
      {
        heading: "Debounced search without a third-party library",
        body: "The frontend uses a small custom hook that debounces the input by 250ms before firing the request, then matches the returned notes against the search term client-side for a fuzzy feel. The backend also supports `?search=` so the URL is shareable. The combination means typing feels instant while the network stays quiet.",
      },
      {
        heading: "Validation at the boundary, trust nothing inside",
        body: "Every POST and PUT body is parsed through a Zod schema before it ever reaches Mongoose. Bad payloads return a 400 with field-level error messages, not a 500. This keeps the database clean and the error messages honest for whoever is calling the API.",
      },
      {
        heading: "Resilience on free-tier hosting",
        body: "Render's free tier sleeps after inactivity. Rather than upgrade, the project documents a cron-job.org ping that wakes the server every 14 minutes — a deliberately boring solution that keeps the demo alive for recruiters hitting the live link.",
      },
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
    summaryFeatures: [
      "Three production apps in one bundle: Tasks, Weather, Quiz.",
      "Hash-based SPA router, zero full-page reloads, PWA installable.",
      "90+ Lighthouse via event delegation, DOM batching, lazy loading.",
    ],
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
    overview:
      "Frontend Utility Suite proves that you don't need a framework to ship a fast, multi-feature web app. Built with vanilla ES6+ modules, a hand-rolled hash-based router, and Tailwind for styling, it bundles three real production tools — a Task Manager, a Weather Dashboard, and a Quiz Platform — into a single PWA-installable bundle that consistently scores 90+ on Lighthouse.",
    architecture: [
      "ES6 modules with a single entry (`app.js`) that wires the router, theme, and sidebar; each feature lives in its own module under `js/modules/`.",
      "Custom hash-based router with pattern matching and query string support — no full page reloads, every navigation is a state change.",
      "Singleton `Store` class wraps `localStorage` with try/catch and JSON serialization, so all data persists across reloads without a backend.",
      "Tailwind CSS (CDN) plus a small custom stylesheet for animations; modular `modal` and `toast` singletons reused across all three features.",
      "OpenWeatherMap REST API for live weather with a mock-data fallback so the app stays demoable without an API key.",
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
    deepDive: [
      {
        heading: "No framework, on purpose",
        body: "The whole point of the project is to demonstrate that with disciplined module structure and event delegation, you can ship a multi-feature SPA in vanilla JS without React. Each `js/modules/*.js` exports a single object with `init()` and `render()` methods; the router calls them. There's no virtual DOM, no bundler, no build step — just ES6 modules served as-is.",
      },
      {
        heading: "A router built in 30 lines",
        body: "The `router.js` module listens to `hashchange`, matches the current hash against registered patterns, and invokes the right view. Query strings are parsed into a plain object. Transitions feel instant because the page never reloads — just the active view's `innerHTML` swaps.",
      },
      {
        heading: "Event delegation = constant-time interactions",
        body: "Instead of attaching click listeners to every task, every quiz option, and every history item, each list attaches one listener to the parent container and reads `event.target.closest('[data-action]')`. Adding 1,000 items doesn't add 1,000 listeners — and the UI stays snappy.",
      },
      {
        heading: "Resilient to flaky networks",
        body: "The Weather module catches network failures, falls back to deterministic mock data, and surfaces a toast notification. The Quiz and Tasks modules never touch the network, so they work offline. The whole suite is PWA-installable thanks to a service worker that pre-caches the shell.",
      },
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
  { value: "2", label: "Internships", sub: "ApexPlanet × YHills" },
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
    url: "/resume.pdf",
    handle: "View PDF",
  },
] as const;
