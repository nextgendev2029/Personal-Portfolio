import { cn } from '@/lib/utils/cn';
import { Container } from './Container';
import { PageTitle, Eyebrow, BodyText } from '@/components/typography';

interface PageShellProps {
  children: React.ReactNode;
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}

export function PageShell({ children, eyebrow, title, description, className }: PageShellProps) {
  return (
    <main id="main-content" className={cn('pt-32 pb-[var(--space-section)]', className)}>
      <Container>
        <header className="mb-16">
          {eyebrow && (
            <Eyebrow as="p" className="mb-4">{eyebrow}</Eyebrow>
          )}
          <PageTitle>{title}</PageTitle>
          {description && (
            <BodyText size="large" muted className="mt-4 max-w-2xl">{description}</BodyText>
          )}
        </header>
      </Container>
      {children}
    </main>
  );
}
