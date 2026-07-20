import type { Metadata } from 'next';
import { siteConfig } from '@/lib/config/site';
import { Container } from '@/components/layout';
import { PageShell } from '@/components/layout';
import { Eyebrow } from '@/components/typography';
import { BodyText } from '@/components/typography';
import { Button } from '@/components/ui';
import { SocialLinks } from '@/components/ui';
import { Divider } from '@/components/ui';
import { Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact',
  description: `Get in touch with ${siteConfig.name} — available for internships, collaborations, and engineering roles.`,
};

export default function ContactPage() {
  return (
    <PageShell
      eyebrow="Contact"
      title="Available for opportunities."
      description="I'm looking for full-stack engineering, frontend, or AI/ML internship roles. If you're building something interesting, I'd like to hear about it."
    >
      <Container>
        <div className="max-w-xl">
          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <Button href={`mailto:${siteConfig.email}`} variant="primary">
              <Mail size={14} className="mr-2" /> Get in Touch
            </Button>
            <Button href={siteConfig.social.linkedin.url} external variant="secondary">
              Connect on LinkedIn
            </Button>
          </div>

          <Eyebrow as="p" className="mb-2">Response time</Eyebrow>
          <BodyText muted size="small" className="mb-8">Typically within 24 hours.</BodyText>

          <Divider className="mb-8" />

          <Eyebrow as="p" className="mb-4">Elsewhere</Eyebrow>
          <SocialLinks />
        </div>
      </Container>
    </PageShell>
  );
}
