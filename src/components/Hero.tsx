"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";

function GithubIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function LeetCodeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
    </svg>
  );
}

function CodeforcesIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="13" width="5" height="9" rx="1" />
      <rect x="9.5" y="7" width="5" height="15" rx="1" />
      <rect x="17" y="2" width="5" height="20" rx="1" />
    </svg>
  );
}

function CodeChefIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C9.5 2 8 4 8 6c0 1.5.5 2.5 1 3.5C7.5 10 6 11 6 13c0 2.5 2 4 4 5v2h4v-2c2-1 4-2.5 4-5 0-2-1.5-3-3-3.5.5-1 1-2 1-3.5 0-2-1.5-4-4-4z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
      <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function ArrowDownIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 5v14" />
      <path d="m19 12-7 7-7-7" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

const socialLinks = [
  { icon: <GithubIcon />, href: personalInfo.github, label: "GitHub" },
  { icon: <LinkedinIcon />, href: personalInfo.linkedin, label: "LinkedIn" },
  { icon: <TwitterIcon />, href: personalInfo.twitter, label: "Twitter" },
  { icon: <LeetCodeIcon />, href: personalInfo.leetcode, label: "LeetCode" },
  { icon: <CodeforcesIcon />, href: personalInfo.codeforces, label: "Codeforces" },
  { icon: <CodeChefIcon />, href: personalInfo.codechef, label: "CodeChef" },
  { icon: <MailIcon />, href: `mailto:${personalInfo.email}`, label: "Email" },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center px-6">
      {/* Ambient glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-accent/[0.025] rounded-full blur-[100px]" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative max-w-xl text-center"
      >
        {/* Status */}
        <motion.div variants={fadeUp} className="mb-8">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 text-[11px] font-medium text-muted/80 border border-border/60 rounded-full">
            <span className="w-1.5 h-1.5 bg-emerald-400/80 rounded-full animate-pulse" />
            Open to opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={fadeUp}
          className="text-[28px] sm:text-[36px] md:text-[42px] font-semibold tracking-[-0.03em] text-foreground leading-[1.15]"
        >
          Hi, I&apos;m{" "}
          <span className="text-accent">{personalInfo.name}</span>
        </motion.h1>

        {/* Role + Location */}
        <motion.div variants={fadeUp} className="mt-4 flex flex-col items-center gap-2">
          <p className="text-[15px] sm:text-base text-muted font-medium tracking-tight">
            {personalInfo.role}
          </p>
          <span className="inline-flex items-center gap-1.5 text-[11px] text-muted/60">
            <MapPinIcon />
            {personalInfo.location}
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={fadeUp}
          className="mt-5 text-[13px] sm:text-sm text-muted/70 max-w-md mx-auto leading-relaxed"
        >
          {personalInfo.tagline}
        </motion.p>

        {/* Social Links */}
        <motion.div
          variants={fadeUp}
          className="mt-8 flex items-center justify-center gap-2"
        >
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.label === "Email" ? undefined : "_blank"}
              rel={link.label === "Email" ? undefined : "noopener noreferrer"}
              aria-label={link.label}
              className="p-2.5 text-muted/60 hover:text-foreground border border-border/50 hover:border-border-hover rounded-lg transition-all duration-300 hover:bg-surface-hover hover:-translate-y-0.5"
            >
              {link.icon}
            </a>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          className="mt-7 flex items-center justify-center gap-3"
        >
          <a
            href="#projects"
            className="px-5 py-2 text-[13px] font-medium bg-accent/90 hover:bg-accent text-white rounded-lg transition-all duration-300 hover:shadow-[0_4px_24px_rgba(59,130,246,0.15)] hover:-translate-y-px"
          >
            View Projects
          </a>
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 text-[13px] font-medium text-muted/80 hover:text-foreground border border-border/50 hover:border-border-hover rounded-lg transition-all duration-300 hover:-translate-y-px"
          >
            Resume
          </a>
        </motion.div>

        {/* Scroll */}
        <motion.div variants={fadeUp} className="mt-20">
          <motion.button
            onClick={() =>
              document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })
            }
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="text-muted/30 hover:text-muted/60 transition-colors duration-300"
            aria-label="Scroll down"
          >
            <ArrowDownIcon />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
