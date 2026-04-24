"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="mb-14"
    >
      <p className="text-[11px] font-mono font-medium uppercase tracking-[0.2em] text-accent/70 mb-3">
        {subtitle}
      </p>
      <h2 className="text-[22px] font-semibold tracking-tight text-foreground leading-none">
        {title}
      </h2>
      <div className="mt-5 w-8 h-px bg-accent/30" />
    </motion.div>
  );
}
