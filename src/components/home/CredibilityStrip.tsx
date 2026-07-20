import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/typography/Eyebrow';
import { FadeIn } from '@/components/motion';

const metrics = [
  { value: '100+', label: 'LeetCode Problems' },
  { value: '~1503', label: 'Peak LC Rating' },
  { value: '~837', label: 'Codeforces Rating' },
  { value: '~1122', label: 'CodeChef Rating' },
  { value: '9.0', label: 'Sem 1 CGPA' },
  { value: '500+', label: 'Event Attendees' },
];

export function CredibilityStrip() {
  return (
    <Section className="py-12 md:py-16 bg-surface-elevated">
      <Container>
        <FadeIn>
          <Eyebrow className="mb-8">04 / CREDIBILITY</Eyebrow>
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-y-8 gap-x-4">
            {metrics.map((metric, i) => (
              <div 
                key={metric.label} 
                className={`flex flex-col ${i % 3 !== 0 ? 'border-l border-border pl-4' : ''} ${i !== 0 ? 'md:border-l md:border-border md:pl-6' : 'md:border-none md:pl-0'}`}
              >
                <span className="font-sans text-2xl md:text-3xl font-semibold text-foreground mb-1">{metric.value}</span>
                <span className="font-mono text-[length:var(--text-label)] text-foreground-muted">{metric.label}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
