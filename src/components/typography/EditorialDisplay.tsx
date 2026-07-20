import { cn } from '@/lib/utils/cn';

interface EditorialDisplayProps {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  className?: string;
}

export function EditorialDisplay({ children, as: Tag = 'h1', className }: EditorialDisplayProps) {
  return (
    <Tag className={cn(
      'font-serif font-normal tracking-tight leading-[1.05]',
      'text-[length:var(--text-display-hero)]',
      'text-foreground',
      className
    )}>
      {children}
    </Tag>
  );
}
