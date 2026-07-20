import { cn } from '@/lib/utils/cn';

interface ContainerProps {
  children: React.ReactNode;
  variant?: 'default' | 'narrow' | 'wide';
  className?: string;
  as?: React.ElementType;
}

export function Container({ children, variant = 'default', className, as: Tag = 'div' }: ContainerProps) {
  return (
    <Tag className={cn(
      'mx-auto w-full px-[var(--container-px)]',
      variant === 'default' && 'max-w-[var(--container-max)]',
      variant === 'narrow' && 'max-w-[var(--container-narrow)]',
      variant === 'wide' && 'max-w-[var(--container-wide)]',
      className
    )}>
      {children}
    </Tag>
  );
}
