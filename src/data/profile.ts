export interface ProfileData {
  name: string;
  displayName: string;
  title: string;
  roles: string[];
  location: string;
  email: string;
  linkedin: string;
  github: string;
  heroTagline: string;
  headline: string;
  supportingText: string;
  professionalIntro: string;
  philosophy: {
    title: string;
    description: string;
    points: { title: string; desc: string; icon: string }[];
  };
  metrics: {
    label: string;
    value: string;
    description: string;
    verified: boolean;
  }[];
}

export const profileData: ProfileData = {
  name: "Deepak Kumar Singh",
  displayName: "Deepak Singh",
  title: "Software Developer | .NET Engineer | AI Enthusiast",
  roles: [
    "Software Developer",
    ".NET Engineer",
    "Backend Architect",
    "AI Enthusiast"
  ],
  location: "New Delhi / Noida, India",
  email: "deepakcolab@gmail.com",
  linkedin: "https://www.linkedin.com/in/deepak-singh-248253229",
  github: "https://github.com",
  heroTagline: "I turn complex ideas into powerful digital experiences.",
  headline: "BUILDING DIGITAL EXPERIENCES THAT MATTER.",
  supportingText: "Designing scalable applications, solving complex problems and exploring intelligent technologies.",
  professionalIntro:
    "I am a software developer specializing in enterprise application development, .NET technologies, scalable backend systems, database architecture, security and performance optimization. I enjoy building meaningful digital solutions and exploring the possibilities of AI and automation.",
  philosophy: {
    title: "Engineering with Purpose & Precision",
    description:
      "Enterprise systems demand more than syntax. They require resilient architecture, uncompromising security, and an obsession with real-world user reliability.",
    points: [
      {
        title: "Clean Architecture & Scalability",
        desc: "Designing decoupled, testable, and maintainable services with ASP.NET Core, MVC patterns, and domain-driven principles.",
        icon: "Layers"
      },
      {
        title: "Database Performance & Integrity",
        desc: "Tuning complex queries, indexing strategies, and stored procedures in MS SQL Server for high-throughput transactional systems.",
        icon: "Database"
      },
      {
        title: "Rigorous Security & Compliance",
        desc: "Implementing zero-trust RBAC, secure token workflows, data sanitation, and adhering to strict annual governmental security audits.",
        icon: "ShieldCheck"
      },
      {
        title: "AI Integration & Pragmatic Automation",
        desc: "Integrating locally hosted LLMs (Ollama, Qwen) with RAG architectures to bring practical intelligence into enterprise workflows without compromising data privacy.",
        icon: "Cpu"
      }
    ]
  },
  metrics: [
    {
      label: "Query Response Tuning",
      value: "35%",
      description: "Measured response time reduction across key modules",
      verified: true
    },
    {
      label: "Concurrent Users",
      value: "1,000+",
      description: "Centralized Webcast Booking Portal scale",
      verified: true
    },
    {
      label: "Dynamic Form Users",
      value: "5,000+",
      description: "Monthly active feedback respondents",
      verified: true
    },
    {
      label: "Security Audit Success",
      value: "100%",
      description: "Annual security validation & authorization compliance",
      verified: true
    }
  ]
};
