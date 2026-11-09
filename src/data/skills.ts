export type SkillCategory = 
  | 'All' 
  | 'Backend' 
  | 'Frontend' 
  | 'Database' 
  | 'AI & ML' 
  | 'Cloud & DevOps';

export interface SkillItem {
  id: string;
  name: string;
  category: 'Backend' | 'Frontend' | 'Database' | 'AI & ML' | 'Cloud & DevOps';
  level: 'Core Mastery' | 'Advanced' | 'Practitioner' | 'Emerging';
  experienceYears?: string;
  description: string;
  useCases: string[];
  isFeatured?: boolean;
  color?: string;
}

export const skillCategories: SkillCategory[] = [
  'All',
  'Backend',
  'Frontend',
  'Database',
  'AI & ML',
  'Cloud & DevOps'
];

export const skillsData: SkillItem[] = [
  // BACKEND
  {
    id: 'csharp',
    name: 'C#',
    category: 'Backend',
    level: 'Core Mastery',
    description: 'Modern object-oriented and functional programming with C# 10/11/12/13, async/await pipelines, and LINQ.',
    useCases: ['High-throughput Web APIs', 'Enterprise Business Logic', 'Event-driven systems'],
    isFeatured: true,
    color: '#9333EA'
  },
  {
    id: 'aspnet-core',
    name: 'ASP.NET Core',
    category: 'Backend',
    level: 'Core Mastery',
    description: 'Cross-platform, high-performance web applications, dependency injection, middleware pipelines, and minimal APIs.',
    useCases: ['RESTful Microservices', 'Enterprise Web Portals', 'Secure Authentication Endpoints'],
    isFeatured: true,
    color: '#5B21B6'
  },
  {
    id: 'aspnet-mvc',
    name: 'ASP.NET MVC',
    category: 'Backend',
    level: 'Core Mastery',
    description: 'Architecting robust server-rendered government applications with modular controllers, razor views, and filters.',
    useCases: ['Reserve Portal', 'VCStock Inventory System', 'Government Workflows'],
    isFeatured: true,
    color: '#6366F1'
  },
  {
    id: 'web-api',
    name: '.NET Web API',
    category: 'Backend',
    level: 'Core Mastery',
    description: 'Stateless, RESTful service architecture with JWT auth, OpenAPI/Swagger specifications, and rate-limiting.',
    useCases: ['Decoupled Frontend Backends', 'Third-Party Integration APIs', 'Payment Gateway Hooks'],
    isFeatured: true,
    color: '#4F46E5'
  },
  {
    id: 'ef-core',
    name: 'Entity Framework & LINQ',
    category: 'Backend',
    level: 'Core Mastery',
    description: 'ORM data modeling, Code-First migrations, eager/lazy loading optimization, and compiled LINQ queries.',
    useCases: ['Complex Multi-Table Projections', 'Transactional Consistency', 'Repository Patterns'],
    isFeatured: false,
    color: '#7C3AED'
  },
  {
    id: 'mediatr',
    name: 'MediatR & CQRS',
    category: 'Backend',
    level: 'Advanced',
    description: 'Decoupling in-process messaging with Clean Architecture, CQRS handler patterns, and pipeline behaviors for logging and validation.',
    useCases: ['Separation of Command & Query concerns', 'Cross-cutting Validation', 'Modular domain services'],
    isFeatured: false,
    color: '#8B5CF6'
  },

  // FRONTEND
  {
    id: 'react',
    name: 'React',
    category: 'Frontend',
    level: 'Advanced',
    description: 'Modern SPA development with functional components, hooks, state management, and component architecture.',
    useCases: ['Dynamic Client Portals', 'Interactive Dashboards', 'Component Design Systems'],
    isFeatured: true,
    color: '#06B6D4'
  },
  {
    id: 'typescript',
    name: 'TypeScript & JavaScript',
    category: 'Frontend',
    level: 'Advanced',
    description: 'Type-safe enterprise web engineering, ESNext patterns, asynchronous promises, DOM manipulation, and modular codebases.',
    useCases: ['Type-safe Application State', 'Dynamic Form Engines', 'Interactive UI Logic'],
    isFeatured: true,
    color: '#3B82F6'
  },
  {
    id: 'html-css',
    name: 'HTML5, CSS3 & Tailwind',
    category: 'Frontend',
    level: 'Core Mastery',
    description: 'Semantic markup, accessible WCAG 2.1 layouts, responsive utility-first CSS design, and fluid transitions.',
    useCases: ['WCAG 2.1 AA Compliance', 'Responsive Mobile-First Interfaces', 'Design System Styling'],
    isFeatured: false,
    color: '#F97316'
  },
  {
    id: 'bootstrap-jquery',
    name: 'Bootstrap, jQuery & AJAX',
    category: 'Frontend',
    level: 'Core Mastery',
    description: 'Enterprise UI scaffolding, asynchronous partial updates without page reloads, and cross-browser reliability.',
    useCases: ['Vidcon Portal UI', 'Government Administrative Portals', 'Asynchronous Modals & Datatables'],
    isFeatured: false,
    color: '#EC4899'
  },

  // DATABASE
  {
    id: 'sql-server',
    name: 'Microsoft SQL Server',
    category: 'Database',
    level: 'Core Mastery',
    description: 'Relational database schema design, indexing strategies, complex query tuning, transaction isolation, and backup management.',
    useCases: ['High-Concurrency Portals', 'Financial Ledgers', 'Mission-Critical Government Records'],
    isFeatured: true,
    color: '#EF4444'
  },
  {
    id: 'stored-procedures',
    name: 'Stored Procedures & T-SQL',
    category: 'Database',
    level: 'Core Mastery',
    description: 'Writing high-performance parameterized T-SQL procedures, CTEs, triggers, and execution plan optimization.',
    useCases: ['Batch Processing', 'Complex Reporting Queries', 'Fine-Grained Data Security'],
    isFeatured: true,
    color: '#DC2626'
  },
  {
    id: 'query-optimization',
    name: 'Query Optimization',
    category: 'Database',
    level: 'Core Mastery',
    description: 'Profiling execution plans, index fragmentation resolution, removing parameter sniffing, and query refactoring.',
    useCases: ['35% response time reduction on live portals', 'Deadlock resolution', 'Throughput scaling'],
    isFeatured: true,
    color: '#B91C1C'
  },
  {
    id: 'nosql',
    name: 'MongoDB & MySQL',
    category: 'Database',
    level: 'Practitioner',
    description: 'Document database architectures for flexible schemas, collection aggregation pipelines, and relational MySQL implementations.',
    useCases: ['Audit Log Aggregations', 'Unstructured Document Metadata', 'Microservice Data Stores'],
    isFeatured: false,
    color: '#10B981'
  },

  // AI & MACHINE LEARNING
  {
    id: 'ollama-qwen',
    name: 'Ollama & Qwen3 Local LLMs',
    category: 'AI & ML',
    level: 'Advanced',
    description: 'Deploying on-premise, privacy-preserving open-weight LLMs using Ollama runtime and Qwen series models.',
    useCases: ['Offline Knowledge Assistants', 'Government Safe Data Processing', 'Zero External API Leaks'],
    isFeatured: true,
    color: '#F59E0B'
  },
  {
    id: 'rag-architecture',
    name: 'RAG (Retrieval-Augmented Generation)',
    category: 'AI & ML',
    level: 'Advanced',
    description: 'Vector embeddings, chunking strategies, and semantic retrieval pipelines connected to local LLM inference.',
    useCases: ['Portal Knowledge Base Queries', 'Automated Help Desk Routing', 'Documentation Search'],
    isFeatured: true,
    color: '#F59E0B'
  },
  {
    id: 'ai-chatbots',
    name: 'AI Chatbots & Agents',
    category: 'AI & ML',
    level: 'Advanced',
    description: 'Conversational agent architecture integrated into .NET enterprise backends with role-scoped memory and structured JSON outputs.',
    useCases: ['Citizen & User Guidance', 'Automated Form Filling', 'Diagnostic Assistants'],
    isFeatured: true,
    color: '#D97706'
  },
  {
    id: 'prompt-eng',
    name: 'Prompt Engineering & Python',
    category: 'AI & ML',
    level: 'Practitioner',
    description: 'Few-shot prompting, system instructions, guardrails, evaluation workflows, and Python data preprocessing scripts.',
    useCases: ['Deterministic JSON Schemas', 'Context Window Optimization', 'Text Summarization'],
    isFeatured: false,
    color: '#EAB308'
  },

  // CLOUD & DEVOPS
  {
    id: 'docker',
    name: 'Docker & Containers',
    category: 'Cloud & DevOps',
    level: 'Advanced',
    description: 'Containerizing .NET Core backends, multi-stage Docker builds, environment isolation, and local orchestration with Docker Compose.',
    useCases: ['Microservice Containerization', 'Local Ollama LLM Stacks', 'Predictable CI Environments'],
    isFeatured: true,
    color: '#2563EB'
  },
  {
    id: 'aws-azure',
    name: 'AWS & Microsoft Azure',
    category: 'Cloud & DevOps',
    level: 'Practitioner',
    description: 'Cloud deployment, App Services, EC2, S3 bucket storage, Azure SQL, and cloud networking configurations.',
    useCases: ['Scalable Web Deployments', 'Secure Asset Offloading', 'Hybrid Cloud Connectivity'],
    isFeatured: false,
    color: '#0284C7'
  },
  {
    id: 'iis-windows',
    name: 'IIS & Windows Server',
    category: 'Cloud & DevOps',
    level: 'Core Mastery',
    description: 'Deep administration of Internet Information Services (IIS), application pools, SSL/TLS bindings, Windows services, and reverse proxies.',
    useCases: ['Enterprise On-Premises Hosting', 'NIC Government Deployments', 'Zero-Downtime App Pool Recycling'],
    isFeatured: true,
    color: '#0369A1'
  },
  {
    id: 'git-cicd',
    name: 'Git, GitHub Actions & CI/CD',
    category: 'Cloud & DevOps',
    level: 'Advanced',
    description: 'Branching workflows, automated build and test pipelines, artifact publishing, and release orchestration.',
    useCases: ['Continuous Integration', 'Automated Security Scans', 'Release Staging & Deployment'],
    isFeatured: false,
    color: '#475569'
  }
];
