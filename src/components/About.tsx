"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { aboutText } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-3xl mx-auto">
        <SectionHeading title="About" subtitle="Who I am" />

        <div className="space-y-5">
          {aboutText.paragraphs.map((paragraph, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-[13px] sm:text-sm text-muted/80 leading-[1.8]"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 flex flex-wrap gap-2"
        >
          {aboutText.traits.map(
            (trait) => (
              <span
                key={trait}
                className="px-3 py-1.5 text-[11px] font-medium text-muted/60 border border-border/50 rounded-md hover:border-border-hover hover:text-muted transition-all duration-300"
              >
                {trait}
              </span>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
}
