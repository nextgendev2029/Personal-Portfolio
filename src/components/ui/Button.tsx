import Link from 'next/link';
import { cn } from '@/lib/utils/cn';

type ButtonVariant = 'primary' | 'secondary' | 'text';
type ButtonSize = 'default' | 'sm' | 'lg';

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
}

// Support both <button> and <a> and <Link>
type ButtonAsButton = ButtonBaseProps & React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: never; external?: never; download?: never };
type ButtonAsLink = ButtonBaseProps & { href: string; external?: boolean; download?: boolean } & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>;

type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button(allProps: ButtonProps) {
  // Pull out our custom props first, leave only DOM-safe attributes
  const { variant = 'primary', size = 'default', className, children, ...rest } = allProps;

  const baseClasses = "inline-flex items-center justify-center rounded-[var(--radius-md)] transition-colors duration-[var(--duration-normal)] font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none min-h-[44px] min-w-[44px]";
  
  const variantClasses = {
    primary: "bg-accent text-accent-foreground hover:bg-accent/90",
    secondary: "border border-border-strong text-foreground hover:bg-surface",
    text: "text-foreground-muted hover:text-foreground"
  };
  
  const sizeClasses = {
    sm: "text-[13px] px-4 py-2 min-h-[36px]",
    default: "text-sm px-5 py-2.5",
    lg: "text-base px-6 py-3"
  };
  
  const classes = cn(baseClasses, variantClasses[variant], sizeClasses[size], className);

  if ('href' in rest && rest.href) {
    const { href, external, download, ...domProps } = rest as ButtonAsLink & Record<string, unknown>;
    
    // Remove any stray non-DOM props that might leak through
    const safeProps: Record<string, unknown> = {};
    for (const [key, value] of Object.entries(domProps)) {
      if (key !== 'as' && key !== 'variant' && key !== 'size') {
        safeProps[key] = value;
      }
    }
    
    if (external) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer" download={download} {...safeProps}>
          {children}
        </a>
      );
    }
    
    if (download) {
      return (
        <a href={href} className={classes} download {...safeProps}>
          {children}
        </a>
      );
    }
    
    return (
      <Link href={href} className={classes} {...safeProps}>
        {children}
      </Link>
    );
  }

  // Button path: only pass safe DOM attributes
  const { ...buttonRest } = rest as Record<string, unknown>;
  const safeBtnProps: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(buttonRest)) {
    if (key !== 'as' && key !== 'variant' && key !== 'size' && key !== 'external' && key !== 'download') {
      safeBtnProps[key] = value;
    }
  }

  return (
    <button className={classes} {...(safeBtnProps as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
