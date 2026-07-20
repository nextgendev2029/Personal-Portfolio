import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/typography/Eyebrow';
import { BodyText } from '@/components/typography/BodyText';
import { FadeIn } from '@/components/motion';

const capabilities = [
  {
    number: '01',
    title: 'Product Frontend',
    description: 'React, Next.js, TypeScript, responsive systems, component architecture and performance-conscious interfaces.',
  },
  {
    number: '02', 
    title: 'Backend & APIs',
    description: 'FastAPI, Node.js, Express, API design, authentication and application logic.',
  },
  {
    number: '03',
    title: 'Data & Storage',
    description: 'PostgreSQL, MongoDB, MySQL, SQLite and practical data modelling.',
  },
  {
    number: '04',
    title: 'Applied AI',
    description: 'Gemini AI, Groq AI, OpenAI API and integrating models into useful product flows.',
  },
  {
    number: '05',
    title: 'DevOps & Tooling',
    description: 'Docker, Git, GitHub, Firebase Authentication and Appwrite.',
  },
  {
    number: '06',
    title: 'Problem Solving',
    description: 'DSA practice, DBMS, OOP, operating systems and competitive programming.',
  },
];

export function Capabilities() {
  return (
    <Section>
      <Container>
        <FadeIn>
          <Eyebrow className="mb-12">03 / CAPABILITIES</Eyebrow>
        </FadeIn>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {capabilities.map((cap, i) => (
            <FadeIn key={cap.number} delay={i * 0.1} className="flex flex-col border-b border-border pb-8 h-full">
              <span className="font-mono text-accent text-[length:var(--text-label)] mb-4">{cap.number}</span>
              <h3 className="font-sans font-medium text-[length:var(--text-heading-card)] text-foreground mb-3">{cap.title}</h3>
              <BodyText className="text-foreground-muted text-[length:var(--text-body-small)]">
                {cap.description}
              </BodyText>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}
