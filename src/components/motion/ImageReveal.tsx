'use client';

import { motion, useReducedMotion } from 'framer-motion';
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

  if (prefersReducedMotion) {
    return <div className={cn('overflow-hidden', className)}>{children}</div>;
  }

  const clip = clipPaths[direction];

  return (
    <div className={cn('overflow-hidden', className)}>
      <motion.div
        initial={{ clipPath: clip.hidden }}
        whileInView={{ clipPath: clip.visible }}
        viewport={{ once: true }}
        transition={{
          duration,
          delay,
          ease: easings.ease,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
