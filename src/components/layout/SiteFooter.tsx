import Link from 'next/link';
import { siteConfig } from '@/lib/config/site';
import { primaryNav, secondaryNav } from '@/lib/data/navigation';
import { Container } from './Container';
import { SocialLinks } from '@/components/ui/SocialLinks';
import { Divider } from '@/components/ui/Divider';

export function SiteFooter() {
  return (
    <footer data-print-hide className="bg-background">
      <Container>
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mb-12">
            <div className="flex flex-col gap-2">
              <span className="font-sans font-medium text-[15px] text-foreground">
                tuhin<span className="text-accent">.</span>dev
              </span>
              <span className="text-[14px] text-foreground-muted">
                {siteConfig.location}
              </span>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-[13px] font-semibold text-foreground uppercase tracking-wider mb-2">Navigation</span>
              <nav className="flex flex-col gap-2">
                {[...primaryNav, ...secondaryNav].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-[14px] text-foreground-muted hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm w-fit"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-[13px] font-semibold text-foreground uppercase tracking-wider mb-2">Connect</span>
              <SocialLinks variant="compact" />
            </div>
          </div>

          <Divider />

          <div className="mt-8">
            <p className="text-[13px] text-foreground-muted">
              {siteConfig.copyright}
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
