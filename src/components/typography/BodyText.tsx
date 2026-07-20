import { cn } from '@/lib/utils/cn';

interface BodyTextProps {
  children: React.ReactNode;
  as?: 'p' | 'div' | 'span';
  size?: 'default' | 'large' | 'small';
  muted?: boolean;
  className?: string;
}

export function BodyText({ children, as: Tag = 'p', size = 'default', muted = false, className }: BodyTextProps) {
  return (
    <Tag className={cn(
      'font-sans leading-relaxed',
      size === 'large' && 'text-[length:var(--text-body-large)]',
      size === 'default' && 'text-[length:var(--text-body)]',
      size === 'small' && 'text-[length:var(--text-body-small)]',
      muted ? 'text-foreground-muted' : 'text-foreground',
      className
    )}>
      {children}
    </Tag>
  );
}
