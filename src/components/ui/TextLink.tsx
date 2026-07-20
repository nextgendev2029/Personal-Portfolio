import Link from 'next/link';
import { cn } from '@/lib/utils/cn';
import { ArrowUpRight } from 'lucide-react';

interface TextLinkProps {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  showArrow?: boolean;
  className?: string;
}

export function TextLink({ href, children, external, showArrow, className }: TextLinkProps) {
  const isInternal = href.startsWith('/') || href.startsWith('#');
  const isExternal = external || !isInternal;
  const showIcon = showArrow ?? isExternal;

  const classes = cn(
    'inline-flex items-center gap-1 text-accent font-medium link-underline hover:text-accent/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm',
    className
  );

  if (isExternal) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
        {showIcon && <ArrowUpRight className="w-3 h-3" />}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
      {showIcon && <ArrowUpRight className="w-3 h-3" />}
    </Link>
  );
}
