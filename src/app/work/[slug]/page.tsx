import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getAllProjects, getProjectBySlug, getAdjacentProjects } from '@/lib/data/projects';
import { Container } from '@/components/layout';
import { Eyebrow } from '@/components/typography';
import { Tag } from '@/components/ui';
import { Button } from '@/components/ui';
import { Divider } from '@/components/ui';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import { GitHubIcon } from '@/components/icons/BrandIcons';

export function generateStaticParams() {
  return getAllProjects().map((p) => ({ slug: p.slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: 'Project Not Found' };
  return {
    title: project.title,
    description: project.tagline,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  
  if (!project) notFound();

  const adjacent = getAdjacentProjects(slug);

  return (
    <main id="main-content" className="pt-32 pb-[var(--space-section)]">
      <Container>
        {/* Back link */}
        <Link href="/work" className="inline-flex items-center gap-2 text-sm text-foreground-muted hover:text-foreground transition-colors mb-12">
          <ArrowLeft size={14} /> All Projects
        </Link>

        {/* Header */}
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Eyebrow>{project.date}</Eyebrow>
            <span className="text-border-strong">·</span>
            <Eyebrow>{project.category}</Eyebrow>
            <span className="text-border-strong">·</span>
            <Eyebrow className="text-accent">{project.status}</Eyebrow>
          </div>
          <h1 className="font-serif text-[length:var(--text-display-page)] font-normal tracking-tight leading-[1.05] text-foreground">
            {project.title}
          </h1>
          <p className="mt-4 text-[length:var(--text-body-large)] text-foreground-muted max-w-2xl">
            {project.tagline}
          </p>
        </header>

        {/* Links */}
        <div className="flex flex-wrap gap-3 mb-12">
          {project.liveUrl && (
            <Button href={project.liveUrl} external variant="primary">
              <ExternalLink size={14} className="mr-2" /> Live Demo
            </Button>
          )}
          {project.githubUrl && (
            <Button href={project.githubUrl} external variant="secondary">
              <GitHubIcon className="w-4 h-4 mr-2" /> Source Code
            </Button>
          )}
        </div>

        <Divider className="mb-12" />

        {/* Stack */}
        <section className="mb-12">
          <h2 className="font-sans text-sm font-medium text-foreground-muted uppercase tracking-wider mb-4">Technology Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <Tag key={tech} variant="accent">{tech}</Tag>
            ))}
          </div>
        </section>

        {/* Key Features */}
        {project.keyFeatures && project.keyFeatures.length > 0 && (
          <section className="mb-12">
            <h2 className="font-sans text-sm font-medium text-foreground-muted uppercase tracking-wider mb-6">Key Features</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {project.keyFeatures.map((feature) => (
                <div key={feature.title} className="p-5 border border-border rounded-[var(--radius-md)]">
                  <h3 className="font-sans font-medium text-foreground mb-1">{feature.title}</h3>
                  <p className="text-[length:var(--text-body-small)] text-foreground-muted">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Outcomes */}
        {project.outcomes && project.outcomes.length > 0 && (
          <section className="mb-12">
            <h2 className="font-sans text-sm font-medium text-foreground-muted uppercase tracking-wider mb-6">Outcomes</h2>
            <div className="flex flex-wrap gap-6">
              {project.outcomes.map((outcome) => (
                <div key={outcome.metric}>
                  <p className="font-serif text-3xl text-accent">{outcome.value}</p>
                  <p className="text-[length:var(--text-body-small)] text-foreground-muted mt-1">{outcome.metric}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Overview (when available) */}
        {project.overview && (
          <section className="mb-12">
            <h2 className="font-sans text-sm font-medium text-foreground-muted uppercase tracking-wider mb-4">Overview</h2>
            <p className="text-[length:var(--text-body-large)] text-foreground leading-relaxed max-w-2xl">{project.overview}</p>
          </section>
        )}

        <Divider className="my-16" />

        {/* Adjacent project navigation */}
        {adjacent && (
          <nav className="flex flex-col sm:flex-row gap-6 sm:gap-4 justify-between items-start sm:items-center" aria-label="Project navigation">
            {adjacent.prev ? (
              <Link href={`/work/${adjacent.prev.slug}`} className="group flex items-center gap-2 text-foreground-muted hover:text-foreground transition-colors">
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-200" />
                <div>
                  <p className="text-[length:var(--text-label)] font-mono uppercase tracking-wider">Previous</p>
                  <p className="font-medium text-foreground">{adjacent.prev.title}</p>
                </div>
              </Link>
            ) : <div />}
            {adjacent.next ? (
              <Link href={`/work/${adjacent.next.slug}`} className="group flex items-center gap-2 text-foreground-muted hover:text-foreground transition-colors text-right">
                <div>
                  <p className="text-[length:var(--text-label)] font-mono uppercase tracking-wider">Next</p>
                  <p className="font-medium text-foreground">{adjacent.next.title}</p>
                </div>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            ) : <div />}
          </nav>
        )}
      </Container>
    </main>
  );
}
