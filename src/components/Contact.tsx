"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { personalInfo } from "@/lib/data";

function SendIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
      <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

const contactLinks = [
  { icon: <MailIcon />, href: `mailto:${personalInfo.email}`, label: "Email", text: personalInfo.email },
  { icon: <LinkedinIcon />, href: personalInfo.linkedin, label: "LinkedIn", text: "LinkedIn" },
  { icon: <TwitterIcon />, href: personalInfo.twitter, label: "Twitter", text: "Twitter / X" },
  { icon: <InstagramIcon />, href: personalInfo.instagram, label: "Instagram", text: "Instagram" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 section-alt">
      <div className="max-w-3xl mx-auto">
        <SectionHeading title="Contact" subtitle="Get in touch" />

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="p-6 sm:p-8 border border-border/50 rounded-xl"
        >
          <p className="text-[13px] text-muted leading-[1.8] max-w-lg">
            I&apos;m open to internship opportunities, collaborations, and
            interesting conversations about tech. Feel free to reach out — I
            usually respond within a day.
          </p>

          {/* Primary CTAs */}
          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-[13px] font-medium bg-accent/90 hover:bg-accent text-white rounded-lg transition-all duration-300 hover:shadow-[0_4px_24px_rgba(59,130,246,0.12)] hover:-translate-y-px"
            >
              <SendIcon />
              Send an Email
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-2.5 text-[13px] font-medium text-muted hover:text-foreground border border-border/50 hover:border-border-hover rounded-lg transition-all duration-300 hover:-translate-y-px"
            >
              Connect on LinkedIn
            </a>
          </div>

          {/* Social link row with icons */}
          <div className="mt-6 pt-6 border-t border-border/30">
            <p className="text-[11px] font-mono uppercase tracking-[0.1em] text-muted/60 mb-4">
              Find me on
            </p>
            <div className="flex flex-wrap gap-3">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.label === "Email" ? undefined : "_blank"}
                  rel={link.label === "Email" ? undefined : "noopener noreferrer"}
                  aria-label={link.label}
                  className="inline-flex items-center gap-2 px-3 py-2 text-[12px] text-muted hover:text-foreground border border-border/40 hover:border-border-hover rounded-lg transition-all duration-300 hover:bg-surface-hover hover:-translate-y-0.5"
                >
                  {link.icon}
                  <span>{link.text}</span>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
