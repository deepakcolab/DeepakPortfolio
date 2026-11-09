export interface GroupedResponsibility {
  category: 
    | 'Application Development & Portal Engineering'
    | 'Project Delivery & Workflow Automation'
    | 'Security, Authorization & Compliance'
    | 'Performance Optimization & Database Tuning'
    | 'Cloud, Server & CI/CD Deployment';
  icon: string;
  items: {
    text: string;
    metric?: {
      value: string;
      label: string;
    };
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  isCurrent: boolean;
  type: 'Primary Enterprise Experience' | 'Short-term Instruction' | 'Trainee Program';
  summary: string;
  responsibilities: string[];
  groupedResponsibilities?: GroupedResponsibility[];
  technologies: string[];
  metrics?: { value: string; label: string }[];
}

export const experiencesData: ExperienceItem[] = [
  {
    id: 'velocis-systems',
    role: 'Software Developer',
    organization: 'Velocis Systems Pvt. Ltd.',
    location: 'New Delhi',
    period: 'January 2023 – Present',
    isCurrent: true,
    type: 'Primary Enterprise Experience',
    summary:
      'Core developer designing, maintaining, and scaling mission-critical government video conferencing portals, centralized financial management systems, and automated dynamic engines for high-concurrency enterprise use.',
    responsibilities: [
      'Maintained and enhanced ASP.NET MVC-based video conferencing portals, improving reliability and reducing error rates by 20% through optimized SQL Server queries.',
      'Designed and developed a centralized Webcast Booking Portal supporting 1,000+ concurrent users with automated multi-level approval workflows.',
      'Implemented Inventory Management and Role-Based Access Control modules, improving asset tracking accuracy and data security compliance.',
      'Integrated multilingual and accessibility features for NIC Vidcon website, achieving WCAG 2.1 accessibility compliance.',
      'Designed and implemented Dynamic Feedback Forms for 5,000+ monthly users, enabling real-time analysis and 25% faster feedback turnaround.',
      'Conducted proactive maintenance and resolved 95% of issues within SLA, ensuring zero critical downtime.',
      'Supported annual security audits with validation and authorization measures, achieving 100% compliance.',
      'Optimized SQL Server queries, reducing response time by 35% across key modules.',
      'Assisted in deployment and configuration on IIS, Windows Server, Azure and AWS, ensuring smooth CI/CD transitions.'
    ],
    groupedResponsibilities: [
      {
        category: 'Application Development & Portal Engineering',
        icon: 'Code2',
        items: [
          {
            text: 'Maintained and enhanced ASP.NET MVC-based video conferencing portals, improving reliability and reducing error rates by 20% through optimized SQL Server queries.',
            metric: { value: '20%', label: 'Error Rate Reduction' }
          },
          {
            text: 'Integrated multilingual and accessibility features for NIC Vidcon website, achieving WCAG 2.1 accessibility compliance.',
            metric: { value: 'WCAG 2.1', label: 'Accessibility Standard' }
          }
        ]
      },
      {
        category: 'Project Delivery & Workflow Automation',
        icon: 'Layers',
        items: [
          {
            text: 'Designed and developed a centralized Webcast Booking Portal supporting 1,000+ concurrent users with automated multi-level approval workflows.',
            metric: { value: '1,000+', label: 'Concurrent Users' }
          },
          {
            text: 'Designed and implemented Dynamic Feedback Forms for 5,000+ monthly users, enabling real-time analysis and 25% faster feedback turnaround.',
            metric: { value: '5,000+', label: 'Monthly Users' }
          },
          {
            text: 'Enabling real-time analysis and 25% faster feedback turnaround across dynamic feedback modules.',
            metric: { value: '25%', label: 'Faster Turnaround' }
          }
        ]
      },
      {
        category: 'Security, Authorization & Compliance',
        icon: 'ShieldCheck',
        items: [
          {
            text: 'Implemented Inventory Management and Role-Based Access Control modules, improving asset tracking accuracy and data security compliance.'
          },
          {
            text: 'Supported annual security audits with validation and authorization measures, achieving 100% compliance.',
            metric: { value: '100%', label: 'Audit Compliance' }
          },
          {
            text: 'Conducted proactive maintenance and resolved 95% of issues within SLA, ensuring zero critical downtime.',
            metric: { value: '95%', label: 'SLA Resolution Rate' }
          }
        ]
      },
      {
        category: 'Performance Optimization & Database Tuning',
        icon: 'Database',
        items: [
          {
            text: 'Optimized SQL Server queries, reducing response time by 35% across key modules.',
            metric: { value: '35%', label: 'Response Time Reduction' }
          }
        ]
      },
      {
        category: 'Cloud, Server & CI/CD Deployment',
        icon: 'Cloud',
        items: [
          {
            text: 'Assisted in deployment and configuration on IIS, Windows Server, Azure and AWS, ensuring smooth CI/CD transitions.'
          }
        ]
      }
    ],
    technologies: [
      'C#',
      'ASP.NET MVC',
      'ASP.NET Core',
      'SQL Server',
      'JavaScript',
      'HTML',
      'CSS',
      'jQuery',
      'AJAX',
      'IIS',
      'Windows Server',
      'Azure',
      'AWS',
      'Docker',
      'GitHub Actions'
    ],
    metrics: [
      { value: '20%', label: 'Error Rate Reduction' },
      { value: '1,000+', label: 'Concurrent Users' },
      { value: '5,000+', label: 'Monthly Users' },
      { value: '25%', label: 'Faster Feedback Turnaround' },
      { value: '95%', label: 'Resolved within SLA' },
      { value: '35%', label: 'Query Response Reduction' },
      { value: '100%', label: 'Security Audit Compliance' }
    ]
  },
  {
    id: 'santram-iti',
    role: 'IT Instructor (Short-term)',
    organization: 'Santram BA Private ITI, Deoria',
    location: 'Deoria, Uttar Pradesh',
    period: 'January 2021 – June 2022',
    isCurrent: false,
    type: 'Short-term Instruction',
    summary:
      'Conducted focused technical training sessions on computing fundamentals, procedural programming paradigms, and foundational database concepts.',
    responsibilities: [
      'Delivered training on IT fundamentals.',
      'Taught programming basics.',
      'Delivered training in computer applications.'
    ],
    technologies: [
      'IT Fundamentals',
      'Programming Basics',
      'Computer Applications'
    ]
  },
  {
    id: 'torrent-infotech',
    role: 'Trainee – ASP.NET',
    organization: 'Torrent Infotech, Gorakhpur',
    location: 'Gorakhpur, Uttar Pradesh',
    period: 'January 2020 – July 2020',
    isCurrent: false,
    type: 'Trainee Program',
    summary:
      'Completed rigorous hands-on technical training program centered on enterprise ASP.NET application development and relational databases.',
    responsibilities: [
      'Completed hands-on training in ASP.NET.',
      'Learned MVC and SQL Server.',
      'Participated in project-based learning.'
    ],
    technologies: [
      'ASP.NET',
      'MVC Architecture',
      'SQL Server',
      'Project-Based Learning'
    ]
  }
];
