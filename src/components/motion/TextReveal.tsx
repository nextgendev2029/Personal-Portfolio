'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils/cn';
import { easings, durations } from '@/lib/utils/motion';

interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'div';
  splitBy?: 'line' | 'word';
  staggerDelay?: number;
}

export function TextReveal({
  children,
  className,
  delay = 0,
  as: Tag = 'div',
  splitBy = 'line',
  staggerDelay = 0.08,
}: TextRevealProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <Tag className={cn(className)}>{children}</Tag>;
  }

  const isLine = splitBy === 'line';
  const segments = isLine ? children.split('\n') : children.split(' ');

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: durations.slow,
        ease: easings.ease,
      },
    },
  };

  return (
    <Tag className={cn(className)}>
      <motion.span
        className="block"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {segments.map((segment, i) => (
          <span
            key={i}
            className={cn(
              isLine ? 'block overflow-hidden' : 'inline-block overflow-hidden'
            )}
            style={!isLine ? { marginRight: '0.25em' } : undefined}
          >
            <motion.span
              className={cn(isLine ? 'block' : 'inline-block')}
              variants={childVariants}
            >
              {segment}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
