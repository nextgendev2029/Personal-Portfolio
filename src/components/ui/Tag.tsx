import { cn } from '@/lib/utils/cn';

interface TagProps {
  children: React.ReactNode;
  variant?: 'default' | 'accent' | 'olive';
  className?: string;
}

export function Tag({ children, variant = 'default', className }: TagProps) {
  const variants = {
    default: 'text-foreground-muted bg-transparent border border-border',
    accent: 'text-accent border-accent/20 bg-accent/5',
    olive: 'text-olive border-olive/20 bg-olive/5',
  };

  return (
    <span className={cn('inline-flex items-center justify-center font-mono text-[11px] px-2 py-0.5 rounded-[var(--radius-sm)]', variants[variant], className)}>
      {children}
    </span>
  );
}
