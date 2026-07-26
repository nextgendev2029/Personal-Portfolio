import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/config/site';
import { getAllProjects } from '@/lib/data/projects';
import { Container } from '@/components/layout';
import { PageShell } from '@/components/layout';
import { Eyebrow } from '@/components/typography';
import { Tag } from '@/components/ui';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Work',
  description: `Selected projects by ${siteConfig.name} — full-stack applications, AI-powered platforms, and frontend engineering.`,
};

export default function WorkPage() {
  const projects = getAllProjects();
  
  return (
    <PageShell
      eyebrow="Selected Work"
      title="Projects"
      description="A collection of things I've built — from AI-powered platforms to open-source tools."
    >
      <Container>
        <div className="space-y-12">
          {projects.map((project, index) => (
            <article key={project.slug} className="group">
              <Link href={`/work/${project.slug}`} className="block p-6 -mx-4 sm:-mx-6 rounded-[var(--radius-lg)] hover:bg-surface transition-colors duration-[var(--duration-normal)]">
                <div className="flex items-baseline gap-4 mb-3">
                  <Eyebrow>{String(index + 1).padStart(2, '0')}</Eyebrow>
                  <Eyebrow>{project.date}</Eyebrow>
                </div>
                <h2 className="font-sans text-[length:var(--text-heading-card)] font-semibold text-foreground">
                  {project.title}
                </h2>
                <p className="mt-2 text-[length:var(--text-body)] text-foreground-muted max-w-xl">
                  {project.tagline}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.slice(0, 5).map((tech) => (
                    <Tag key={tech}>{tech}</Tag>
                  ))}
                  {project.stack.length > 5 && (
                    <Tag>+{project.stack.length - 5}</Tag>
                  )}
                </div>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm text-accent font-medium">
                  Read case study <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </PageShell>
  );
}
