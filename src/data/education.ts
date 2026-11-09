export interface EducationItem {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  grade?: string;
  highlights: string[];
}

export const educationData: EducationItem[] = [
  {
    id: 'mca',
    degree: 'Master of Computer Applications (MCA)',
    field: 'Computer Programming & Software Systems',
    institution: 'Madan Mohan Malaviya University of Technology (MMMUT)',
    location: 'Gorakhpur, Uttar Pradesh, India',
    period: '2017 – 2020',
    highlights: [
      'Comprehensive coursework in Advanced Data Structures, Object-Oriented Software Engineering, Operating Systems, and Distributed Computing.',
      'Developed major academic software projects centered around relational database architectures and client-server communication.',
      'Built strong theoretical foundations in database normalization, algorithmic complexity, and network protocols.'
    ]
  },
  {
    id: 'bca',
    degree: 'Bachelor of Computer Applications (BCA)',
    field: 'Computer Programming & Applications',
    institution: 'Deen Dayal Upadhyaya Gorakhpur University (DDU)',
    location: 'Gorakhpur, Uttar Pradesh, India',
    period: '2014 – 2017',
    highlights: [
      'Core studies in C / C++ programming, relational databases (RDBMS), web fundamentals, and system analysis.',
      'Graduated with honors in applied computer science fundamentals.',
      'Active participant in departmental programming workshops and technical seminars.'
    ]
  }
];
