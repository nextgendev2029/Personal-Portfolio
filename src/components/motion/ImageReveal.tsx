'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils/cn';
import { easings, durations } from '@/lib/utils/motion';

interface ImageRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'left' | 'right' | 'up' | 'down';
  duration?: number;
}

const clipPaths = {
  right: { hidden: 'inset(0 100% 0 0)', visible: 'inset(0 0% 0 0)' },
  left: { hidden: 'inset(0 0 0 100%)', visible: 'inset(0 0 0 0%)' },
  up: { hidden: 'inset(100% 0 0 0)', visible: 'inset(0% 0 0 0)' },
  down: { hidden: 'inset(0 0 100% 0)', visible: 'inset(0 0 0% 0)' },
};

export function ImageReveal({
  children,
  className,
  delay = 0,
  direction = 'right',
  duration = durations.reveal,
}: ImageRevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.01 });
  const [forceVisible, setForceVisible] = useState(false);

  // Safety fallback: if IntersectionObserver fails on mobile,
  // force the image visible after a timeout
  useEffect(() => {
    const timer = setTimeout(() => {
      setForceVisible(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const shouldReveal = isInView || forceVisible;

  if (prefersReducedMotion) {
    return <div className={cn('relative w-full h-full overflow-hidden', className)}>{children}</div>;
  }

  const clip = clipPaths[direction];

  return (
    <div ref={ref} className={cn('relative w-full h-full overflow-hidden', className)}>
      <motion.div
        className="relative w-full h-full"
        style={{ willChange: 'clip-path' }}
        animate={{ clipPath: shouldReveal ? clip.visible : clip.hidden }}
        transition={{
          duration,
          delay: isInView ? delay : 0,
          ease: easings.ease,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
