"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { projects } from "@/lib/data";

function GithubIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" x2="21" y1="14" y2="3" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="none">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

/* ── Featured Project Card (DebugX) ──────────────────────────── */
function FeaturedCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative"
    >
      {/* Glow effect behind card */}
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-accent/15 via-accent/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

      <div className="relative overflow-hidden rounded-2xl border border-border/50 group-hover:border-accent/20 transition-all duration-500 bg-surface">
        {/* Featured badge bar */}
        <div className="flex items-center justify-between px-6 pt-5 pb-0">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent/[0.08] border border-accent/15 rounded-full">
            <StarIcon />
            Featured
          </span>
          {project.date && (
            <span className="text-[10px] font-mono text-muted/70">
              {project.date}
            </span>
          )}
        </div>

        <div className="p-6 pt-4">
          {/* Title */}
          <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
            {project.title}
          </h3>

          {/* Description */}
          <p className="mt-3 text-[13px] text-muted leading-[1.7] line-clamp-2">
            {project.description}
          </p>

          {/* Tech tags */}
          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-[11px] font-mono font-medium text-accent/90 bg-accent/[0.06] border border-accent/10 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-6 flex items-center gap-3">
            {project.live && project.live !== "" && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-[12px] font-medium bg-accent/90 hover:bg-accent text-white rounded-lg transition-all duration-300 hover:shadow-[0_4px_24px_rgba(59,130,246,0.12)] hover:-translate-y-px"
              >
                <ExternalLinkIcon />
                Live Demo
              </a>
            )}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-[12px] font-medium text-muted hover:text-foreground border border-border/50 hover:border-border-hover rounded-lg transition-all duration-300 hover:-translate-y-px"
            >
              <GithubIcon />
              Source Code
            </a>
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      </div>
    </motion.div>
  );
}

/* ── Regular Project Card ────────────────────────────────────── */
function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.4, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative"
    >
      {/* Subtle border glow on hover */}
      <div className="absolute -inset-px rounded-xl bg-gradient-to-b from-border-hover/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative h-full flex flex-col p-5 rounded-xl border border-border/50 group-hover:border-border-hover bg-surface/30 group-hover:bg-surface/80 transition-all duration-300">
        {/* Title row */}
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-[14px] font-medium text-foreground/90 group-hover:text-accent transition-colors duration-300">
            {project.title}
          </h3>
          <div className="flex items-center gap-1.5 shrink-0 mt-0.5">
            {project.date && (
              <span className="text-[10px] font-mono text-muted/70 mr-1">
                {project.date}
              </span>
            )}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} GitHub`}
              className="p-1.5 text-muted hover:text-foreground rounded-md hover:bg-surface-hover transition-all duration-200"
            >
              <GithubIcon />
            </a>
            {project.live && project.live !== "" && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} Live`}
                className="p-1.5 text-muted hover:text-foreground rounded-md hover:bg-surface-hover transition-all duration-200"
              >
                <ExternalLinkIcon />
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="mt-2.5 text-[12px] text-muted/80 leading-[1.7] line-clamp-2 flex-1">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-[10px] font-mono text-muted/70 bg-background/50 border border-border/40 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* View project link */}
        <div className="mt-4 pt-4 border-t border-border/50">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-muted group-hover:text-accent transition-colors duration-200"
          >
            View Project
            <span className="translate-x-0 group-hover:translate-x-1 transition-transform duration-200">
              <ArrowRightIcon />
            </span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Projects Section ────────────────────────────────────────── */
export default function Projects() {
  const featured = projects[0]; // DebugX
  const others = projects.slice(1);

  return (
    <section id="projects" className="py-28 px-6 section-alt">
      <div className="max-w-3xl mx-auto">
        <SectionHeading title="Projects" subtitle="What I've built" />

        {/* Featured project */}
        <FeaturedCard project={featured} index={0} />

        {/* Other projects grid */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {others.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
