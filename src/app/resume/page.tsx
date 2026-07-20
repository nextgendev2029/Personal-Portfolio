import type { Metadata } from 'next';
import { siteConfig } from '@/lib/config/site';
import { aboutSummary } from '@/lib/data/personal';
import { education } from '@/lib/data/education';
import { skills } from '@/lib/data/skills';
import { getAllProjects } from '@/lib/data/projects';
import { Container } from '@/components/layout';
import { Divider } from '@/components/ui';
import { Button } from '@/components/ui';
import { Tag } from '@/components/ui';
import { Download } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Resume',
  description: `Resume of ${siteConfig.name} — ${siteConfig.title}.`,
};

export default function ResumePage() {
  const projects = getAllProjects();
  return (
    <main id="main-content" className="pt-32 pb-[var(--space-section)] print:pt-0 print:pb-0">
      <Container variant="narrow">
        {/* Download button - hidden in print */}
        <div className="mb-8 flex justify-end no-print" data-print-hide>
          <Button href={siteConfig.resumePath} external variant="primary" size="sm">
            <Download size={14} className="mr-2" /> Download PDF
          </Button>
        </div>

        {/* Header */}
        <header className="mb-8">
          <h1 className="font-sans text-2xl font-semibold text-foreground">{siteConfig.name}</h1>
          <p className="text-[length:var(--text-body)] text-foreground-muted mt-1">{siteConfig.title}</p>
          <p className="font-mono text-[length:var(--text-label)] text-foreground-muted mt-2">
            {siteConfig.location} · {siteConfig.email}
          </p>
        </header>

        {/* Summary */}
        <section className="mb-8">
          <h2 className="font-sans text-sm font-semibold text-foreground uppercase tracking-wider mb-2">Summary</h2>
          <p className="text-[length:var(--text-body)] text-foreground-muted leading-relaxed">{aboutSummary}</p>
        </section>

        <Divider className="mb-8" />

        {/* Projects */}
        <section className="mb-8">
          <h2 className="font-sans text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Projects</h2>
          <div className="space-y-6">
            {projects.map((p) => (
              <div key={p.slug}>
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="font-sans font-medium text-foreground">{p.title}</h3>
                  <span className="font-mono text-[length:var(--text-label)] text-foreground-muted shrink-0">{p.date}</span>
                </div>
                <p className="text-[length:var(--text-body-small)] text-foreground-muted mt-1">{p.tagline}</p>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {p.stack.map((t) => <Tag key={t}>{t}</Tag>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        <Divider className="mb-8" />

        {/* Education */}
        <section className="mb-8">
          <h2 className="font-sans text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Education</h2>
          <div className="space-y-4">
            {education.map((e) => (
              <div key={e.degree} className="flex items-baseline justify-between gap-2">
                <div>
                  <h3 className="font-sans font-medium text-foreground text-sm">{e.degree}</h3>
                  <p className="text-[length:var(--text-body-small)] text-foreground-muted">{e.institution}, {e.location}</p>
                </div>
                <div className="text-right shrink-0">
                  <span className="font-mono text-[length:var(--text-label)] text-foreground-muted">{e.year}</span>
                  <p className="text-[length:var(--text-body-small)] text-accent">{e.grade}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Divider className="mb-8" />

        {/* Skills */}
        <section className="mb-8">
          <h2 className="font-sans text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Skills</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {skills.map((cat) => (
              <div key={cat.label}>
                <h3 className="font-mono text-[length:var(--text-label)] text-foreground-muted uppercase tracking-wider mb-2">{cat.label}</h3>
                <p className="text-[length:var(--text-body-small)] text-foreground">{cat.items.join(', ')}</p>
              </div>
            ))}
          </div>
        </section>
      </Container>
    </main>
  );
}
