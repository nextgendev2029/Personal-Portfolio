import type { Metadata } from 'next';
import { siteConfig } from '@/lib/config/site';
import { aboutSummary, philosophy, traits } from '@/lib/data/personal';
import { education, certifications } from '@/lib/data/education';
import { skills } from '@/lib/data/skills';
import { Container } from '@/components/layout';
import { PageShell } from '@/components/layout';
import { Eyebrow } from '@/components/typography';
import { Tag } from '@/components/ui';
import { Divider } from '@/components/ui';
import { Button } from '@/components/ui';
import { Download } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About',
  description: `About ${siteConfig.name} — aspiring full-stack and AI/ML developer based in ${siteConfig.location}.`,
};

export default function AboutPage() {
  return (
    <PageShell
      eyebrow="About"
      title={siteConfig.name}
      description={aboutSummary}
    >
      <Container>
        {/* Philosophy */}
        <section className="mb-16">
          <blockquote className="font-serif text-[length:var(--text-heading-card)] text-foreground leading-relaxed max-w-2xl border-l-2 border-accent pl-6">
            {philosophy}
          </blockquote>
          <div className="mt-4 flex flex-wrap gap-2">
            {traits.map(trait => (
              <Tag key={trait} variant="default">{trait}</Tag>
            ))}
          </div>
        </section>

        <Divider className="mb-16" />

        {/* Education */}
        <section className="mb-16">
          <Eyebrow as="p" className="mb-6">Education</Eyebrow>
          <div className="space-y-6">
            {education.map((entry) => (
              <div key={entry.degree} className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <div>
                  <h3 className="font-sans font-medium text-foreground">{entry.degree}</h3>
                  <p className="text-[length:var(--text-body-small)] text-foreground-muted">
                    {entry.institution}, {entry.location}
                    {entry.board && ` — ${entry.board}`}
                  </p>
                  {entry.highlight && (
                    <p className="text-[length:var(--text-body-small)] text-accent mt-1">{entry.highlight}</p>
                  )}
                </div>
                <div className="flex items-center gap-3 sm:text-right mt-2 sm:mt-0">
                  <Eyebrow className="text-foreground-muted">{entry.year}</Eyebrow>
                  <Tag variant="accent">{entry.grade}</Tag>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Divider className="mb-16" />

        {/* Skills */}
        <section className="mb-16">
          <Eyebrow as="p" className="mb-6">Capabilities</Eyebrow>
          <div className="grid gap-8 sm:grid-cols-2">
            {skills.map((category) => (
              <div key={category.label}>
                <h3 className="font-mono text-[length:var(--text-label)] font-medium uppercase tracking-[0.15em] text-foreground-muted mb-3">
                  {category.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <Tag key={skill}>{skill}</Tag>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <Divider className="mb-16" />

        {/* Certifications */}
        {certifications.length > 0 && (
          <section className="mb-16">
            <Eyebrow as="p" className="mb-6">Certifications</Eyebrow>
            <div className="space-y-4">
              {certifications.map((cert) => (
                <div key={cert.title} className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
                  <div>
                    <p className="font-sans font-medium text-foreground text-sm">{cert.title}</p>
                    <p className="text-[length:var(--text-body-small)] text-foreground-muted mt-1">{cert.description}</p>
                  </div>
                  {cert.url && (
                    <a href={cert.url} target="_blank" rel="noopener noreferrer" className="text-[length:var(--text-label)] text-accent hover:underline shrink-0">View →</a>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Resume link */}
        <div className="flex">
          <Button href={siteConfig.resumePath} external variant="secondary">
            <Download size={14} className="mr-2" /> Download Resume
          </Button>
        </div>
      </Container>
    </PageShell>
  );
}
