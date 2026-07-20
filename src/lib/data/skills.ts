export interface SkillCategory {
  label: string;
  key: string;
  items: string[];
}

export const skills: SkillCategory[] = [
  {
    key: 'languages',
    label: 'Languages',
    items: ['Python', 'JavaScript', 'TypeScript'],
  },
  {
    key: 'frontend',
    label: 'Frontend',
    items: ['React.js', 'Next.js', 'Tailwind CSS', 'HTML', 'CSS'],
  },
  {
    key: 'backend',
    label: 'Backend',
    items: ['FastAPI', 'Node.js', 'Express.js'],
  },
  {
    key: 'databases',
    label: 'Databases',
    items: ['PostgreSQL', 'MongoDB', 'MySQL', 'SQLite'],
  },
  {
    key: 'devops',
    label: 'DevOps & Tools',
    items: ['Docker', 'Git', 'GitHub', 'Firebase Authentication', 'Appwrite'],
  },
  {
    key: 'aiml',
    label: 'AI & ML',
    items: [
      'NumPy',
      'Pandas',
      'Matplotlib',
      'Seaborn',
      'Linear Regression',
      'Reinforcement Learning fundamentals',
      'Gemini AI',
      'Groq AI',
      'OpenAI API',
    ],
  },
  {
    key: 'corecs',
    label: 'Core CS',
    items: [
      'Data Structures & Algorithms',
      'DBMS',
      'Object-Oriented Programming',
      'Operating Systems',
    ],
  },
];
