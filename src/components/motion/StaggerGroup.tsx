'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils/cn';

const MotionComponents = {
  div: motion.div,
  section: motion.section,
  ul: motion.ul,
  ol: motion.ol,
} as const;

type MotionElement = keyof typeof MotionComponents;

interface StaggerGroupProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  as?: MotionElement;
}

export function StaggerGroup({
  children,
  className,
  staggerDelay = 0.08,
  as = 'div',
}: StaggerGroupProps) {
  const prefersReducedMotion = useReducedMotion();
  const Tag = MotionComponents[as];

  if (prefersReducedMotion) {
    return <Tag className={cn(className)}>{children}</Tag>;
  }

  return (
    <Tag
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
    >
      {children}
    </Tag>
  );
}
