import { cn } from '@/lib/utils/cn';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  size?: 'default' | 'sm';
}

export function Section({ children, id, className, size = 'default' }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        size === 'default' ? 'py-[var(--space-section)]' : 'py-[var(--space-section-sm)]',
        className
      )}
    >
      {children}
    </section>
  );
}
