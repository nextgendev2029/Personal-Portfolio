import { personalInfo } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/30 py-10 px-6">
      <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[11px] text-muted/40 tracking-wide">
          &copy; {year} {personalInfo.name}
        </p>
        <nav aria-label="Social links" className="flex items-center gap-5">
          {[
            { label: "GitHub", href: personalInfo.github },
            { label: "LinkedIn", href: personalInfo.linkedin },
            { label: "Twitter", href: personalInfo.twitter },
            { label: "Instagram", href: personalInfo.instagram },
            { label: "LeetCode", href: personalInfo.leetcode },
            { label: "CodeChef", href: personalInfo.codechef },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] text-muted/40 hover:text-muted transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
