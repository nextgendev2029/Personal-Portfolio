"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { achievements } from "@/lib/data";

export default function Achievements() {
  return (
    <section id="achievements" className="py-28 px-6">
      <div className="max-w-3xl mx-auto">
        <SectionHeading title="Achievements" subtitle="Milestones" />

        <div className="space-y-3">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.4,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group flex gap-4 p-5 border border-border/50 rounded-xl hover:border-border-hover transition-all duration-300"
            >
              {/* Year */}
              <div className="shrink-0 pt-0.5">
                <span className="inline-block px-2.5 py-1 text-[10px] font-mono font-medium text-accent/70 bg-accent/[0.05] border border-accent/10 rounded-md">
                  {item.year}
                </span>
              </div>

              <div className="min-w-0">
                <h3 className="text-[13px] font-medium text-foreground/90 group-hover:text-foreground transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-[12px] text-muted/80 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
