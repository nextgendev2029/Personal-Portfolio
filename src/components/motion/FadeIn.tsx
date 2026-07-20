'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils/cn';
import { easings, durations } from '@/lib/utils/motion';

const MotionComponents = {
  div: motion.div,
  section: motion.section,
  article: motion.article,
  span: motion.span,
  p: motion.p,
  li: motion.li,
  header: motion.header,
  figure: motion.figure,
} as const;

type MotionElement = keyof typeof MotionComponents;

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
  once?: boolean;
  as?: MotionElement;
}

const directionMap = {
  up: { y: 1 },
  down: { y: -1 },
  left: { x: 1 },
  right: { x: -1 },
  none: {},
};

export function FadeIn({
  children,
  className,
  delay = 0,
  duration = durations.slow,
  direction = 'up',
  distance = 20,
  once = true,
  as = 'div',
}: FadeInProps) {
  const prefersReducedMotion = useReducedMotion();
  const Tag = MotionComponents[as];
  
  const dir = directionMap[direction];
  const initial = prefersReducedMotion
    ? { opacity: 1 }
    : {
        opacity: 0,
        ...('x' in dir ? { x: dir.x * distance } : {}),
        ...('y' in dir ? { y: dir.y * distance } : {}),
      };

  return (
    <Tag
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once }}
      transition={
        prefersReducedMotion
          ? { duration: 0 }
          : { duration, delay, ease: easings.ease }
      }
      className={cn(className)}
    >
      {children}
    </Tag>
  );
}
