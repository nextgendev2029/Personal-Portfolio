"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { skills } from "@/lib/data";

const categories = [
  { key: "languages" as const, label: "Languages" },
  { key: "frameworks" as const, label: "Frameworks & Libraries" },
  { key: "databases" as const, label: "Databases" },
  { key: "aiml" as const, label: "AI / ML" },
  { key: "tools" as const, label: "Tools & DevOps" },
  { key: "corecs" as const, label: "Core CS" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 section-alt">
      <div className="max-w-3xl mx-auto">
        <SectionHeading title="Skills" subtitle="What I work with" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {categories.map((category, i) => (
            <motion.div
              key={category.key}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.4,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group p-5 border border-border/50 rounded-xl hover:border-border-hover transition-all duration-300"
            >
              <h3 className="text-[12px] font-mono font-medium uppercase tracking-[0.1em] text-muted/50 mb-3">
                {category.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills[category.key].map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 text-[12px] text-muted/80 font-mono bg-background/50 border border-border/40 rounded-md hover:border-border-hover hover:text-foreground transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
