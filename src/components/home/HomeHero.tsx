'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Eyebrow } from '@/components/typography/Eyebrow';
import { FadeIn, ImageReveal } from '@/components/motion';

export function HomeHero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col md:flex-row bg-background overflow-hidden">
      {/* Mobile Image (top) */}
      <div className="relative w-full h-[45svh] block md:hidden">
        <ImageReveal direction="down" delay={0}>
          <Image
            src="/images/portrait/tuhin-hero-mobile.webp"
            alt="Tuhin Mondal — Full-Stack and AI/ML Developer"
            fill
            sizes="100vw"
            priority
            className="object-cover object-top"
          />
        </ImageReveal>
      </div>

      {/* Desktop Image (right) */}
      <div className="absolute top-0 right-0 h-full w-[45%] hidden md:block z-0">
        <ImageReveal direction="right" delay={0}>
          <Image
            src="/images/portrait/tuhin-hero-desktop.webp"
            alt="Tuhin Mondal — Full-Stack and AI/ML Developer"
            fill
            sizes="50vw"
            priority
            className="object-cover object-[center_20%]"
          />
          {/* Gradient overlay to blend image into background */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/20 to-transparent w-1/3" />
        </ImageReveal>
      </div>

      {/* Content Column */}
      <div className="relative z-10 flex flex-col justify-center px-6 py-12 md:px-12 lg:px-24 md:py-0 w-full md:w-[55%] min-h-[55svh] md:min-h-[100svh]">
        <div className="max-w-2xl">
          <FadeIn delay={0.2}>
            <Eyebrow className="mb-6">FULL-STACK / AI·ML / PRODUCT ENGINEERING</Eyebrow>
          </FadeIn>
          
          <h1 className="flex flex-col mb-6">
            <FadeIn delay={0.3}>
              <span className="font-sans font-bold text-foreground text-[length:var(--text-display-hero)] leading-none tracking-tight">Tuhin</span>
            </FadeIn>
            <FadeIn delay={0.4}>
              <span className="font-serif font-normal text-foreground text-[length:var(--text-display-hero)] leading-none">Mondal</span>
            </FadeIn>
          </h1>
          
          <FadeIn delay={0.5}>
            <p className="font-sans text-[length:var(--text-body-large)] text-foreground-muted max-w-md mb-4">
              I build full-stack products and practical AI experiences that turn complex problems into usable systems.
            </p>
            <p className="font-sans text-[length:var(--text-body)] text-foreground-muted max-w-md mb-10">
              B.Tech CSE (AI/ML) student building production-ready applications across frontend, backend, data and AI integration.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.6} className="flex flex-wrap items-center gap-4 mb-12">
            <Button href="/work" variant="primary">
              View Selected Work
            </Button>
            <Button href="/about" variant="secondary">
              About Me
            </Button>
          </FadeIn>
          
          <FadeIn delay={0.7}>
            <div className="flex flex-col gap-1">
              <span className="font-mono text-[length:var(--text-label)] text-accent flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                Available for software engineering and product development internships
              </span>
              <span className="font-mono text-[length:var(--text-label)] text-foreground-muted uppercase tracking-wider">
                Portfolio / 2026 — Bangalore, India
              </span>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Scroll indicator (desktop only) */}
      <div className="absolute bottom-8 left-12 lg:left-24 hidden md:flex flex-col items-center gap-2 z-10" aria-hidden="true">
        <span className="font-mono text-[10px] uppercase tracking-widest text-foreground-muted rotate-90 origin-left mb-6">Scroll</span>
        <div className="w-[1px] h-12 bg-border relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-foreground animate-[pulse_2s_ease-in-out_infinite]" />
        </div>
      </div>
    </section>
  );
}
