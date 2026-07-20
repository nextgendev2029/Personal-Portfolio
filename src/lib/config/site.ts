const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
// Normalize: remove trailing slash
const normalizedUrl = siteUrl.replace(/\/+$/, '');

export const siteConfig = {
  name: 'Tuhin Mondal',
  title: 'Full-Stack & AI/ML Developer',
  description: 'Aspiring Full-Stack & AI/ML Developer with hands-on experience building scalable, production-ready applications. Focused on developing impactful products that solve real-world problems.',
  url: normalizedUrl,
  email: 'tuhinrock121@gmail.com',
  location: 'Bangalore, India',
  resumePath: '/resume/TuhinMondal_Resume.pdf',
  copyright: `© ${new Date().getFullYear()} Tuhin Mondal`,
  social: {
    github: { url: 'https://github.com/nextgendev2029', label: 'GitHub' },
    linkedin: { url: 'https://www.linkedin.com/in/tuhin-mondal-nextgen2029/', label: 'LinkedIn' },
    twitter: { url: 'https://x.com/tuhinp_25', label: 'X (Twitter)' },
    instagram: { url: 'https://www.instagram.com/tuhin.init.20/', label: 'Instagram' },
    leetcode: { url: 'https://leetcode.com/u/tuhinnextgendev29/', label: 'LeetCode' },
    codeforces: { url: 'https://codeforces.com/profile/tuhindev29', label: 'Codeforces' },
    codechef: { url: 'https://www.codechef.com/users/tuhinp25', label: 'CodeChef' },
  },
} as const;
