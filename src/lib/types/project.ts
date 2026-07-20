export type ProjectStatus = 'Live' | 'In Development' | 'Archived';
export type ProjectCategory = 'Full-Stack' | 'Frontend' | 'AI/ML' | 'Utility';

export interface CaseStudy {
  slug: string;
  title: string;
  tagline: string;
  date: string;
  category: ProjectCategory;
  role?: string;
  duration?: string;
  status: ProjectStatus;
  githubUrl: string;
  liveUrl?: string;
  stack: string[];
  coverImage?: string;
  coverImageAlt?: string;
  overview?: string;
  problem?: string;
  goals?: string[];
  constraints?: string[];
  keyFeatures?: { title: string; description: string }[];
  technicalDecisions?: { decision: string; rationale: string }[];
  aiIntegration?: string;
  challenges?: { challenge: string; solution: string }[];
  outcomes?: { metric: string; value: string }[];
  screenshots?: { src: string; alt: string; caption?: string }[];
  lessonsLearned?: string[];
  metaTitle?: string;
  metaDescription?: string;
  ogImage?: string;
  featured?: boolean;
}
