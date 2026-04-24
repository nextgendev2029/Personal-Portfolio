"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { education, certifications } from "@/lib/data";

function GraduationIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
      <path d="M22 10v6" />
      <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
    </svg>
  );
}

function BadgeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export default function Education() {
  return (
    <section id="education" className="py-28 px-6 section-alt">
      <div className="max-w-3xl mx-auto">
        <SectionHeading title="Education" subtitle="Academic journey" />

        {/* Education timeline */}
        <div className="space-y-3">
          {education.map((item, i) => (
            <motion.div
              key={item.degree}
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
              {/* Icon */}
              <div className="shrink-0 pt-0.5">
                <span className="inline-flex items-center justify-center w-8 h-8 text-accent/70 bg-accent/[0.05] border border-accent/10 rounded-lg">
                  <GraduationIcon />
                </span>
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-[13px] font-medium text-foreground/90 group-hover:text-foreground transition-colors duration-300">
                    {item.degree}
                  </h3>
                  <span className="shrink-0 px-2.5 py-1 text-[10px] font-mono font-medium text-accent/70 bg-accent/[0.05] border border-accent/10 rounded-md">
                    {item.year}
                  </span>
                </div>
                <p className="mt-1 text-[12px] text-muted/60 leading-relaxed">
                  {item.institution}
                </p>
                <span className="inline-block mt-2 px-2 py-0.5 text-[10px] font-mono text-emerald-400/80 bg-emerald-400/[0.05] border border-emerald-400/10 rounded-md">
                  {item.grade}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8"
        >
          <h3 className="text-[12px] font-mono font-medium uppercase tracking-[0.1em] text-muted/50 mb-4">
            Certifications
          </h3>
          <div className="space-y-2">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="flex items-start gap-3 p-4 border border-border/40 rounded-lg"
              >
                <span className="shrink-0 mt-0.5 text-accent/60">
                  <BadgeIcon />
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-[12px] font-medium text-foreground/80">
                      {cert.title}
                    </p>
                    {cert.url && (
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 text-[10px] text-accent hover:text-accent/80 font-medium hover:underline transition-colors"
                      >
                        Click here &rarr;
                      </a>
                    )}
                  </div>
                  <p className="mt-0.5 text-[11px] text-muted/50 leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
