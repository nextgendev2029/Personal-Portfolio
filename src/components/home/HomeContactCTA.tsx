import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/typography/Eyebrow';
import { BodyText } from '@/components/typography/BodyText';
import { Button } from '@/components/ui/Button';
import { SocialLinks } from '@/components/ui/SocialLinks';
import { FadeIn } from '@/components/motion';
import { siteConfig } from '@/lib/config/site';

export function HomeContactCTA() {
  return (
    <Section className="py-24 md:py-32 bg-background-secondary">
      <Container>
        <div className="max-w-3xl">
          <FadeIn>
            <Eyebrow className="mb-8">06 / CONTACT</Eyebrow>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <h2 className="font-serif text-[length:var(--text-display-page)] text-foreground leading-tight mb-6">
              Have a role where product thinking and engineering meet?
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <BodyText className="text-foreground-muted mb-10">
              I am currently seeking software engineering and full-stack development internships for 2026. If you&apos;re building products that demand both technical depth and user focus, I&apos;d love to connect.
            </BodyText>
          </FadeIn>
          
          <FadeIn delay={0.3} className="flex flex-wrap items-center gap-4 mb-16">
            <Button href={`mailto:${siteConfig.email}`} variant="primary">
              Email Me
            </Button>
            <Button href="/contact" variant="secondary">
              View Contact Page
            </Button>
            <a 
              href={siteConfig.social.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans font-medium text-[length:var(--text-label)] text-foreground hover:text-accent transition-colors ml-2"
            >
              LinkedIn ↗
            </a>
          </FadeIn>
          
          <FadeIn delay={0.4}>
            <SocialLinks variant="compact" />
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}
