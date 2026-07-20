import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/typography/Eyebrow';
import { BodyText } from '@/components/typography/BodyText';
import { FadeIn } from '@/components/motion';
import { Divider } from '@/components/ui/Divider';

export function HomeIntroduction() {
  return (
    <Section>
      <Container>
        <FadeIn>
          <Eyebrow className="mb-8">01 / PROFILE</Eyebrow>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-10 lg:col-span-8">
            <FadeIn direction="up" delay={0.1}>
              <h2 className="font-serif text-[length:var(--text-display-page)] text-foreground leading-tight mb-8">
                I design and engineer products across interface, infrastructure and applied AI.
              </h2>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <BodyText className="text-foreground-muted max-w-lg">
                Full-stack development meets AI integration in my work. I focus on product-driven problem solving — understanding users, shipping focused versions, learning from what breaks, and iterating quickly. Every project is an opportunity to build tools that genuinely improve someone&apos;s experience.
              </BodyText>
            </FadeIn>
          </div>
        </div>
        
        <div className="mt-24">
          <Divider />
        </div>
      </Container>
    </Section>
  );
}
