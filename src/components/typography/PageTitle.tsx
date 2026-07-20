import { cn } from '@/lib/utils/cn';

interface PageTitleProps {
  children: React.ReactNode;
  as?: 'h1' | 'h2';
  className?: string;
}

export function PageTitle({ children, as: Tag = 'h1', className }: PageTitleProps) {
  return (
    <Tag className={cn(
      'font-sans font-semibold tracking-tight leading-[1.1]',
      'text-[length:var(--text-display-page)]',
      'text-foreground',
      className
    )}>
      {children}
    </Tag>
  );
}
