import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/typography/Eyebrow';
import { BodyText } from '@/components/typography/BodyText';
import { FadeIn } from '@/components/motion';
import { philosophy } from '@/lib/data/personal';

export function EngineeringPhilosophy() {
  const highlight = "Using AI only where it improves the product rather than decorating it.";
  
  // Extract the remaining philosophy text, excluding the highlighted sentence's concept
  const remainingText = philosophy
    .replace('and using AI only where it improves the product rather than decorating it.', 'and building tools that matter.')
  
  return (
    <Section className="py-24 md:py-32">
      <Container>
        <FadeIn>
          <Eyebrow className="mb-12">05 / APPROACH</Eyebrow>
        </FadeIn>
        
        <div className="max-w-3xl">
          <FadeIn delay={0.1}>
            <div className="border-l-2 border-accent pl-6 mb-8">
              <h2 className="font-serif text-[length:var(--text-heading-section)] text-foreground leading-snug">
                {highlight}
              </h2>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <BodyText className="text-foreground-muted max-w-2xl">
              {remainingText}
            </BodyText>
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}
