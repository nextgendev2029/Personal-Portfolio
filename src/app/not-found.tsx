import { Container } from '@/components/layout';
import { Button } from '@/components/ui';

export default function NotFound() {
  return (
    <main id="main-content" className="pt-32 pb-[var(--space-section)]">
      <Container>
        <div className="text-center py-20">
          <p className="font-mono text-[length:var(--text-label)] text-foreground-muted uppercase tracking-[0.2em] mb-4">404</p>
          <h1 className="font-sans text-[length:var(--text-display-page)] font-semibold text-foreground tracking-tight">Page not found</h1>
          <p className="mt-4 text-foreground-muted max-w-md mx-auto">The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
          <div className="mt-8">
            <Button href="/" variant="primary">Back to Home</Button>
          </div>
        </div>
      </Container>
    </main>
  );
}
