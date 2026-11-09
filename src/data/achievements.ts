export interface AchievementItem {
  id: string;
  title: string;
  issuer: string;
  category: 'Certification' | 'Enterprise Impact' | 'Security & Compliance';
  date?: string;
  description: string;
  badge: string;
  verificationSource: string;
  skills: string[];
}

export const achievementsData: AchievementItem[] = [
  {
    id: 'yuva-ai',
    title: 'YUVA AI FOR ALL',
    issuer: 'National AI Initiative / Certified Program',
    category: 'Certification',
    description: 'National artificial intelligence literacy and application credential certifying foundational AI principles, ethics, and modern machine learning concepts.',
    badge: 'Certified',
    verificationSource: 'Confirmed on LinkedIn profile and resume documents',
    skills: ['Artificial Intelligence', 'AI Ethics', 'Machine Learning Foundations']
  },
  {
    id: 'ml-cert',
    title: 'Machine Learning Certification',
    issuer: 'Technical Certification Authority',
    category: 'Certification',
    description: 'Practical certification verifying algorithms for predictive modeling, supervised and unsupervised learning techniques, and data evaluation.',
    badge: 'Certified',
    verificationSource: 'Confirmed on profile resume',
    skills: ['Machine Learning', 'Data Preprocessing', 'Model Evaluation']
  },
  {
    id: 'wcag-compliance',
    title: 'WCAG 2.1 AA Accessibility Achievement',
    issuer: 'NIC Vidcon Project Milestone',
    category: 'Enterprise Impact',
    description: 'Led the complete frontend modernization of the Vidcon portal, implementing full keyboard navigation, high contrast modes, and assistive technology support.',
    badge: 'Impact',
    verificationSource: 'Velocis Systems project deliverable',
    skills: ['WCAG 2.1', 'Assistive Tech', 'Accessible UI', 'Semantic HTML']
  },
  {
    id: 'security-audit',
    title: '100% Security Audit Compliance',
    issuer: 'Government Infrastructure Security Review',
    category: 'Security & Compliance',
    description: 'Achieved flawless compliance in annual enterprise security reviews through robust token validation, SQL injection prevention, and strict RBAC authorization.',
    badge: 'Security',
    verificationSource: 'NIC Project Security Verification',
    skills: ['OWASP Top 10', 'RBAC Authorization', 'SQL Sanitization', 'Data Encryption']
  },
  {
    id: 'sql-optimization',
    title: '35% Database Latency Reduction',
    issuer: 'Enterprise Performance Benchmark',
    category: 'Enterprise Impact',
    description: 'Systematically profiled heavy T-SQL execution plans and refactored indexing pipelines, slashing average query response latency by 35% across high-concurrency portals.',
    badge: 'Performance',
    verificationSource: 'Internal Performance Telemetry',
    skills: ['Query Optimization', 'T-SQL Execution Plans', 'Index Strategy', 'SQL Server']
  }
];
