'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Eyebrow } from '@/components/typography/Eyebrow';
import { FadeIn } from '@/components/motion';
import { easings } from '@/lib/utils/motion';

export function HomeHero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col md:flex-row bg-background overflow-hidden">
      {/* ═══ Mobile Portrait (< 768px) ═══
           Responsive face positioning per width block:
           < 300px:    h-[40svh], object-[center_20%]  (face fills naturally)
           300-500px:  h-[40svh], object-[center_35%]  (moderate shift down to face)
           500-768px:  h-[45svh], object-[center_45%]  (strong shift down + taller container)
      */}
      <motion.div
        className="relative w-full h-[40svh] min-[500px]:h-[45svh] block md:hidden overflow-hidden"
        initial={{ clipPath: 'inset(0 0 100% 0)' }}
        animate={{ clipPath: 'inset(0 0 0% 0)' }}
        transition={{ duration: 1, delay: 0.1, ease: easings.ease }}
      >
        <Image
          src="/images/portrait/tuhin-hero-mobile.webp"
          alt="Tuhin Mondal — Full-Stack and AI/ML Developer"
          fill
          sizes="100vw"
          priority
          className="object-cover object-[center_20%] min-[300px]:object-[center_35%] min-[500px]:object-[center_45%]"
        />
        {/* Bottom gradient blend */}
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-background to-transparent" />
      </motion.div>

      {/* ═══ Desktop Portrait (≥ 768px) — right side ═══
           Responsive sizing and object-position per breakpoint:
           md  (768-1023):  w-[42%], face at 65%
           lg  (1024-1279): w-[45%], face at 60%
           xl  (1280+):     w-[48%], face at 55%
      */}
      <motion.div
        className="absolute top-0 right-0 h-full w-[42%] lg:w-[45%] xl:w-[48%] hidden md:block z-0 overflow-hidden"
        initial={{ clipPath: 'inset(0 100% 0 0)' }}
        animate={{ clipPath: 'inset(0 -1px 0 -1px)' }}
        transition={{ duration: 1.2, delay: 0.2, ease: easings.ease }}
      >
        <Image
          src="/images/portrait/tuhin-hero-desktop.webp"
          alt="Tuhin Mondal — Full-Stack and AI/ML Developer"
          fill
          sizes="(min-width: 1280px) 48vw, (min-width: 1024px) 45vw, 42vw"
          priority
          className="object-cover object-[75%_20%] lg:object-[70%_20%] xl:object-[65%_20%]"
        />
        {/* Left gradient overlay — smooth glass-like blend into background */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent" />
      </motion.div>

      {/* ═══ Content Column ═══ */}
      <div className="relative z-10 flex flex-col justify-center px-6 py-10 md:px-12 lg:px-24 md:py-0 w-full md:w-[58%] lg:w-[55%] xl:w-[52%] min-h-[55svh] md:min-h-[100svh]">
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
