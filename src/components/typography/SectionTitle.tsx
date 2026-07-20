import { cn } from '@/lib/utils/cn';

interface SectionTitleProps {
  children: React.ReactNode;
  as?: 'h2' | 'h3';
  className?: string;
}

export function SectionTitle({ children, as: Tag = 'h2', className }: SectionTitleProps) {
  return (
    <Tag className={cn(
      'font-sans font-semibold tracking-tight leading-[1.15]',
      'text-[length:var(--text-heading-section)]',
      'text-foreground',
      className
    )}>
      {children}
    </Tag>
  );
}
