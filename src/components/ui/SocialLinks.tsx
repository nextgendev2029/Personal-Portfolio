import { siteConfig } from '@/lib/config/site';
import { cn } from '@/lib/utils/cn';
import {
  GitHubIcon,
  LinkedInIcon,
  XTwitterIcon,
  InstagramIcon,
  LeetCodeIcon,
  CodeforcesIcon,
  CodeChefIcon,
  MailIcon,
} from '@/components/icons/BrandIcons';

interface SocialLinksProps {
  variant?: 'default' | 'compact';
  className?: string;
  platforms?: (keyof typeof siteConfig.social)[];
  includeEmail?: boolean;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  twitter: XTwitterIcon,
  instagram: InstagramIcon,
  leetcode: LeetCodeIcon,
  codeforces: CodeforcesIcon,
  codechef: CodeChefIcon,
};

export function SocialLinks({
  variant = 'default',
  className,
  platforms,
  includeEmail = false,
}: SocialLinksProps) {
  const iconSize = variant === 'compact' ? 'w-4 h-4' : 'w-5 h-5';

  const entries = Object.entries(siteConfig.social).filter(
    ([key]) => !platforms || platforms.includes(key as keyof typeof siteConfig.social)
  );

  return (
    <div className={cn('flex flex-wrap items-center gap-1', className)}>
      {entries.map(([key, { url, label }]) => {
        const Icon = iconMap[key];
        if (!Icon) return null;

        return (
          <a
            key={key}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={cn(
              'text-foreground-muted hover:text-foreground',
              'transition-colors duration-[var(--duration-normal)]',
              'min-w-[44px] min-h-[44px] flex items-center justify-center',
              'rounded-[var(--radius-md)]',
            )}
          >
            <Icon className={iconSize} />
          </a>
        );
      })}

      {includeEmail && (
        <a
          href={`mailto:${siteConfig.email}`}
          aria-label="Email"
          className={cn(
            'text-foreground-muted hover:text-foreground',
            'transition-colors duration-[var(--duration-normal)]',
            'min-w-[44px] min-h-[44px] flex items-center justify-center',
            'rounded-[var(--radius-md)]',
          )}
        >
          <MailIcon className={iconSize} />
        </a>
      )}
    </div>
  );
}
