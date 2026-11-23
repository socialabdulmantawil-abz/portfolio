import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "ai-resume-assistant",
    name: "AI Resume Assistant",
    description:
      "An app that tailors resume summaries and bullet points to a job description.",
    technologies: ["React", "Python", "FastAPI", "PostgreSQL", "LLM API"],
    featured: true,
  },
  {
    slug: "rag-knowledge-base",
    name: "RAG Knowledge Base",
    description:
      "A document search assistant that answers questions using uploaded files and source citations.",
    technologies: ["Python", "FastAPI", "LangChain", "PostgreSQL", "pgvector"],
    featured: true,
  },
  {
    slug: "ai-meeting-notes",
    name: "AI Meeting Notes",
    description:
      "A tool that transcribes meeting audio and creates summaries and action items.",
    technologies: ["Next.js", "TypeScript", "Python", "Whisper API", "MongoDB"],
    featured: false,
  },
  {
    slug: "personal-finance-dashboard",
    name: "Personal Finance Dashboard",
    description:
      "A dashboard for categorizing expenses, tracking budgets, and visualizing spending.",
    technologies: ["React", "Node.js", "Express", "PostgreSQL", "Chart.js"],
    featured: false,
  },
  {
    slug: "real-time-collaboration-board",
    name: "Real-Time Collaboration Board",
    description:
      "A shared workspace where users can edit notes and tasks together live.",
    technologies: ["Next.js", "TypeScript", "WebSockets", "Redis", "PostgreSQL"],
    featured: false,
  },
  {
    slug: "e-commerce-recommendation-engine",
    name: "E-Commerce Recommendation Engine",
    description:
      "A product discovery app that recommends items based on user preferences and activity.",
    technologies: ["Python", "scikit-learn", "FastAPI", "React", "PostgreSQL"],
    featured: false,
  },
  {
    slug: "cloud-cost-monitor",
    name: "Cloud Cost Monitor",
    description:
      "A dashboard that tracks cloud usage, highlights cost changes, and flags unusual spending.",
    technologies: ["Python", "AWS", "React", "FastAPI", "PostgreSQL"],
    featured: false,
  },
  {
    slug: "smart-habit-tracker",
    name: "Smart Habit Tracker",
    description:
      "A mobile-friendly app for tracking habits and viewing progress over time.",
    technologies: ["React Native", "TypeScript", "Firebase"],
    featured: false,
  },
  {
    slug: "api-security-scanner",
    name: "API Security Scanner",
    description:
      "A tool that checks API endpoints for common configuration and security issues.",
    technologies: ["Python", "FastAPI", "Docker", "OWASP ZAP", "GitHub Actions"],
    featured: false,
  },
  {
    slug: "eco-route-planner",
    name: "EcoRoute Planner",
    description:
      "A route planner that compares travel options by distance, time, and estimated emissions.",
    technologies: ["React", "Node.js", "Maps API", "PostgreSQL"],
    featured: false,
  },
];
