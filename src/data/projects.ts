export interface Project {
  id: string;
  title: string;
  category: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  keyFeatures: string[];
  architectureHighlights: string[];
  impactMetrics?: { label: string; value: string }[];
  caseStudyNote: string;
  mockupType: 'booking-portal' | 'financial-ledger' | 'vidcon-portal' | 'inventory-system' | 'ai-chatbot' | 'form-builder';
  accentColor: string;
}

export const projectsData: Project[] = [
  {
    id: 'reserve-portal',
    title: 'Reserve Portal',
    category: 'Enterprise Booking Engine',
    tagline: 'High-availability government video conferencing reservation infrastructure.',
    shortDescription:
      'Mission-critical video conference booking platform managing high-throughput room, equipment, and bandwidth allocations with complex conflict resolution.',
    fullDescription:
      'The Reserve Portal serves as a centralized coordination system for nationwide government video conferencing schedules. Engineered on ASP.NET MVC and Microsoft SQL Server, it manages concurrent booking requests across regional centers, incorporates automated conflict detection, and enforces role-based access controls to prevent scheduling collisions.',
    technologies: ['ASP.NET MVC', 'C#', 'SQL Server', 'LINQ', 'T-SQL', 'IIS'],
    keyFeatures: [
      'Multi-tier reservation workflow with automated slot conflict prevention algorithms',
      'Granular Role-Based Access Control (RBAC) across ministerial departments and administrators',
      'Real-time automated notification engine for confirmations, cancellations, and reschedules',
      'Administrative dashboards for room utilization statistics and resource audit trails'
    ],
    architectureHighlights: [
      'Optimized SQL Server stored procedures and indexing strategies to reduce query latency by 20%',
      'Concurrency token management to prevent race conditions during simultaneous booking attempts',
      'Session isolation and robust server-side request sanitization conforming to government compliance'
    ],
    impactMetrics: [
      { label: 'Query Latency', value: '-20%' },
      { label: 'Role Segregation', value: '100% RBAC' },
      { label: 'Scheduling Collisions', value: 'Zero Collisions' }
    ],
    caseStudyNote:
      'Confidential enterprise platform developed for national infrastructure. Architecture represented as an architectural case study without proprietary datasets.',
    mockupType: 'booking-portal',
    accentColor: '#3B82F6'
  },
  {
    id: 'webcast-financial-management',
    title: 'Webcast Financial Management',
    category: 'FinTech & Webcast Billing',
    tagline: 'Centralized financial management, webcast booking, and automated invoice clearance.',
    shortDescription:
      'Enterprise financial reconciliation and webcast reservation portal supporting 1,000+ concurrent users with automated multi-level approval workflows and eSign verification.',
    fullDescription:
      'Designed to streamline financial workflows for public webcast streaming operations. The platform coordinates multi-tier budget approvals, payment receipts, fee calculations, and eSign authorizations for ministerial broadcasts, replacing manual paperwork with audited digital workflows.',
    technologies: ['.NET Core', 'C#', 'SQL Server', 'eSign Integration', 'Bootstrap', 'REST API'],
    keyFeatures: [
      'Centralized webcast scheduling paired with real-time financial invoice generation',
      'Multi-level tiered approval workflows tailored for department heads and finance controllers',
      'eSign verification for rapid authorized sign-offs without paper documentation',
      'Comprehensive financial reporting, audit logs, and exportable ledger statements'
    ],
    architectureHighlights: [
      'Transactional database isolation ensuring ledger records remain tamper-resistant and consistent',
      'Scalable architecture built on .NET Core supporting over 1,000 concurrent user sessions seamlessly',
      'Asynchronous webhook processors handling external payment confirmations and status callbacks'
    ],
    impactMetrics: [
      { label: 'Concurrent Users', value: '1,000+' },
      { label: 'Approval Speed', value: '4x Faster' },
      { label: 'Digital Sign-offs', value: 'eSign Verified' }
    ],
    caseStudyNote:
      'Internal financial application. Presented for architectural evaluation; operational credentials and live URLs remain confidential.',
    mockupType: 'financial-ledger',
    accentColor: '#10B981'
  },
  {
    id: 'vidcon',
    title: 'Vidcon Portal',
    category: 'Public Information Infrastructure',
    tagline: 'Multilingual and accessible video conferencing portal engineered to WCAG 2.1 compliance.',
    shortDescription:
      'Official public-facing portal for video conference operations featuring strict WCAG 2.1 accessibility, multi-language localization, and hardened security defenses.',
    fullDescription:
      'Vidcon represents the public gateway for video conference information, guidelines, and self-service resources. Deepak redesigned and modernized key frontend and backend modules, embedding WCAG 2.1 accessibility standards (screen reader navigation, contrast hierarchy, keyboard navigation) and multi-language capability.',
    technologies: ['ASP.NET Core', 'C#', 'HTML5 / CSS3', 'JavaScript', 'SQL Server', 'WCAG 2.1'],
    keyFeatures: [
      'Comprehensive WCAG 2.1 AA accessibility implementation across all navigational elements',
      'Seamless multi-language localization system supporting regional dialects and font scaling',
      'Responsive design adapting flawlessly from desktop displays down to mobile devices',
      'Hardened security headers (CSP, HSTS, X-Frame-Options) passing comprehensive government audits'
    ],
    architectureHighlights: [
      'Resource dictionary architecture in ASP.NET Core for dynamic localized string hydration',
      'Semantic HTML structure optimized for assistive screen-readers and low-bandwidth connections',
      'Reduced asset payloads and responsive image delivery to maximize Lighthouse performance'
    ],
    impactMetrics: [
      { label: 'Accessibility standard', value: 'WCAG 2.1 AA' },
      { label: 'Security Compliance', value: '100% Passed' },
      { label: 'Multi-lingual Support', value: 'Integrated' }
    ],
    caseStudyNote:
      'National conference portal enhancement. Case study demonstrates accessibility and frontend engineering standards.',
    mockupType: 'vidcon-portal',
    accentColor: '#F59E0B'
  },
  {
    id: 'vcstock',
    title: 'VCStock Portal',
    category: 'Supply Chain & Asset Management',
    tagline: 'Enterprise hardware inventory, allocation tracking, and lifecycle lifecycle governance.',
    shortDescription:
      'Centralized asset tracking system managing teleconferencing hardware, procurement lifecycles, and role-based maintenance dispatch across regional hubs.',
    fullDescription:
      'VCStock was engineered to eliminate physical tracking discrepancies in high-value video conferencing infrastructure. Built with ASP.NET MVC and SQL Server, it tracks equipment lifecycles from acquisition, regional deployment, and repair status through to decommissioning with full chain-of-custody logging.',
    technologies: ['ASP.NET MVC', 'C#', 'SQL Server', 'jQuery', 'AJAX', 'Windows Server'],
    keyFeatures: [
      'Real-time equipment inventory ledger with serial tracking and warranty milestones',
      'Role-based access permissions distinguishing warehouse managers, field engineers, and auditors',
      'Automated maintenance requisition workflows and equipment dispatch scheduling',
      'Comprehensive history log for every asset ensuring transparent accountability'
    ],
    architectureHighlights: [
      'Normalized relational schema with foreign key integrity and audit triggers',
      'AJAX-driven data grids providing instant filtering and searching across tens of thousands of stock items',
      'Scheduled background cleanup jobs for automated report consolidation and alert dispatches'
    ],
    impactMetrics: [
      { label: 'Inventory Discrepancies', value: '-80%' },
      { label: 'Asset Tracking', value: 'Full Lifecycle' },
      { label: 'Audit Readiness', value: 'Real-time' }
    ],
    caseStudyNote:
      'Internal enterprise resource system. Showcased to highlight data architecture and inventory workflow design.',
    mockupType: 'inventory-system',
    accentColor: '#8B5CF6'
  },
  {
    id: 'ai-powered-chatbot',
    title: 'AI-Powered Local Chatbot',
    category: 'On-Premise Generative AI & RAG',
    tagline: 'Privacy-first enterprise knowledge assistant powered by .NET 10, Ollama, and Qwen.',
    shortDescription:
      'Locally hosted AI knowledge retrieval agent utilizing Qwen open-weight LLMs and RAG architecture to answer portal inquiries without third-party cloud data leaks.',
    fullDescription:
      'Recognizing data sovereignty constraints in government environments, Deepak designed an on-premise AI chatbot architecture. Using .NET 10 Web API as the orchestrator, it communicates with an Ollama runtime executing Qwen3 models locally. Documents and FAQs are chunked, vectorized, and retrieved through a high-speed RAG pipeline to ground responses accurately.',
    technologies: ['.NET 10', 'C#', 'Ollama', 'Qwen3', 'RAG Pipeline', 'SQL Server', 'Vector Search'],
    keyFeatures: [
      '100% On-Premise execution ensuring zero confidential data travels over public cloud APIs',
      'Retrieval-Augmented Generation (RAG) grounding model answers in verified portal documentation',
      'Streaming token response via Server-Sent Events (SSE) for low perceived latency',
      'Fallback guardrails preventing hallucinations and prompting users for human review when uncertain'
    ],
    architectureHighlights: [
      'Decoupled HTTP client pipeline communicating directly with local Ollama daemon socket',
      'Optimized context-window chunking algorithm maximizing relevant retrieval chunks within token budgets',
      'Asynchronous C# channels managing queue buffers to prevent GPU/CPU memory exhaustion under spikes'
    ],
    impactMetrics: [
      { label: 'Data Privacy', value: '100% Local' },
      { label: 'Cloud API Cost', value: '$0 / No Leaks' },
      { label: 'Inference Stack', value: '.NET 10 + Ollama' }
    ],
    caseStudyNote:
      'Innovative internal prototype and research architecture demonstrating privacy-preserving enterprise AI engineering.',
    mockupType: 'ai-chatbot',
    accentColor: '#F59E0B'
  },
  {
    id: 'dynamic-feedback-form-builder',
    title: 'Dynamic Feedback Form Builder',
    category: 'Configurable Form Engine & Analytics',
    tagline: 'Schema-driven dynamic question builder capturing actionable insights for 5,000+ monthly users.',
    shortDescription:
      'Configurable feedback management system enabling administrators to construct dynamic survey forms, conditional logic trees, and real-time analytical reports.',
    fullDescription:
      'Created to replace hardcoded survey forms across multiple portal instances. This system allows non-technical administrators to compose questions of varied types (ratings, multi-choice, conditional branches, text areas), apply validation rules dynamically, and analyze sentiment trends across 5,000+ monthly respondents with a 25% faster turnaround.',
    technologies: ['ASP.NET Core', 'C#', 'SQL Server', 'JavaScript', 'Chart.js / CSS', 'JSON Schema'],
    keyFeatures: [
      'Visual drag-and-drop / hierarchical question builder with live preview capabilities',
      'Client and server-side dynamic validation derived from stored JSON schemas',
      'Real-time response aggregation dashboards featuring visual bar charts and trend lines',
      'Exportable response datasets in CSV/Excel formats for administrative reporting'
    ],
    architectureHighlights: [
      'Hybrid relational + JSON document storage in SQL Server allowing polymorphic question types',
      'Sub-50ms form render times enabled by cached schema trees and optimistic client state',
      'Rate-limiting and anti-tamper CSRF token injection safeguarding feedback submission integrity'
    ],
    impactMetrics: [
      { label: 'Active Users', value: '5,000+/mo' },
      { label: 'Feedback Turnaround', value: '25% Faster' },
      { label: 'Configuration Effort', value: '-90%' }
    ],
    caseStudyNote:
      'Modular form platform deployed across enterprise portals. Case study highlights dynamic JSON schema architecture.',
    mockupType: 'form-builder',
    accentColor: '#EC4899'
  }
];
