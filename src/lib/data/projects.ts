import { CaseStudy } from '@/lib/types';

export const projects: CaseStudy[] = [
  {
    slug: 'debugx',
    title: 'DebugX',
    tagline: 'AI-powered coding platform with Gemini-powered feedback',
    date: 'February 2026',
    category: 'AI/ML',
    status: 'Live',
    featured: true,
    githubUrl: 'https://github.com/nextgendev2029/DebugX.git',
    liveUrl: 'https://debugxfrontend.vercel.app/',
    stack: ['Next.js', 'TypeScript', 'FastAPI', 'Python', 'Firebase Authentication', 'PostgreSQL', 'Tailwind CSS', 'Gemini AI'],
    coverImage: '/images/projects/debugx/cover.webp',
    coverImageAlt: 'DebugX — AI-powered coding platform with structured DSA learning paths and real-time Gemini feedback',
    outcomes: [
      { metric: 'Debugging time reduction', value: '~40%' },
      { metric: 'Completion rate improvement', value: '~35%' }
    ],
    keyFeatures: [
      { title: 'Code visualization', description: 'Visual representation of code execution' },
      { title: 'Structured DSA learning paths', description: 'Curated paths for learning data structures and algorithms' },
      { title: 'Real-time Gemini feedback', description: 'Instant AI-driven feedback on code submissions' }
    ],
    // TODO: Author will provide
    overview: undefined,
    problem: undefined,
    challenges: undefined,
    lessonsLearned: undefined,
  },
  {
    slug: 'mergeship',
    title: 'MergeShip',
    tagline: 'Dual-sided open-source platform with AI-assisted issue triage',
    date: 'April 2026',
    category: 'Full-Stack',
    status: 'Live',
    featured: true,
    githubUrl: 'https://github.com/nextgendev2029/MergeShip.git',
    liveUrl: 'https://merge-ship.vercel.app/',
    stack: ['Next.js', 'React', 'Node.js', 'MongoDB', 'Appwrite', 'Groq AI', 'GitHub API', 'Docker', 'Tailwind CSS'],
    coverImage: '/images/projects/mergeship/cover.webp',
    coverImageAlt: 'MergeShip — Dual-sided open-source platform with AI-assisted issue triage and skill-based contributor matching',
    outcomes: [
      { metric: 'Contributor onboarding time reduction', value: '~50%' },
      { metric: 'Issue types classified', value: '100+' }
    ],
    keyFeatures: [
      { title: 'Dual-sided platform', description: 'Separate interfaces for maintainers and contributors' },
      { title: 'AI-assisted issue triage with Groq AI', description: 'Automated categorization of incoming issues' },
      { title: 'GitHub API integration', description: 'Seamless syncing with GitHub repositories' },
      { title: 'Skill-based recommendations', description: 'Matching issues to contributor skill sets' }
    ]
  },
  {
    slug: 'moneymate',
    title: 'MoneyMate',
    tagline: 'Personal finance tracker with data visualization and budget management',
    date: 'November 2025',
    category: 'Frontend',
    status: 'Live',
    featured: true,
    githubUrl: 'https://github.com/nextgendev2029/MoneyMate.git',
    liveUrl: 'https://moneymate3-0.netlify.app',
    stack: ['HTML', 'CSS', 'JavaScript', 'Chart.js', 'LocalStorage'],
    coverImage: '/images/projects/moneymate/cover.webp',
    coverImageAlt: 'MoneyMate — Personal finance tracker with interactive Chart.js visualizations and budget management',
    keyFeatures: [
      { title: 'Chart.js visualization', description: 'Interactive charts for spending analysis' },
      { title: 'Budget alerts', description: 'Notifications when approaching budget limits' },
      { title: 'CSV export', description: 'Export financial data for external use' },
      { title: 'Financial planning', description: 'Tools for long-term financial goal setting' }
    ]
  }
];

export function getAllProjects(): CaseStudy[] {
  return projects;
}

export function getFeaturedProjects(): CaseStudy[] {
  return projects.filter(p => p.featured);
}

export function getProjectBySlug(slug: string): CaseStudy | undefined {
  return projects.find(p => p.slug === slug);
}

export function getAdjacentProjects(slug: string): { prev?: CaseStudy; next?: CaseStudy } | undefined {
  const index = projects.findIndex(p => p.slug === slug);
  if (index === -1) return undefined;
  
  return {
    prev: index > 0 ? projects[index - 1] : undefined,
    next: index < projects.length - 1 ? projects[index + 1] : undefined
  };
}
