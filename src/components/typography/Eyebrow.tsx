import { cn } from '@/lib/utils/cn';

interface EyebrowProps {
  children: React.ReactNode;
  as?: 'span' | 'p' | 'div';
  className?: string;
}

export function Eyebrow({ children, as: Tag = 'span', className }: EyebrowProps) {
  return (
    <Tag className={cn(
      'font-mono text-[length:var(--text-label)] font-medium',
      'uppercase tracking-[0.15em]',
      'text-foreground-muted',
      className
    )}>
      {children}
    </Tag>
  );
}
