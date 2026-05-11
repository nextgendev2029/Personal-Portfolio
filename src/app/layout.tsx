import type { Metadata, Viewport } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://tuhinmondal.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Tuhin Mondal | Full-Stack & AI/ML Developer",
    template: "%s | Tuhin Mondal",
  },
  description:
    "Aspiring Full-Stack & AI/ML Developer building scalable applications and solving real-world problems through code.",
  keywords: [
    "Tuhin Mondal",
    "developer portfolio",
    "full-stack developer",
    "AI/ML",
    "Next.js",
    "React",
    "Python",
    "software engineer",
    "Bangalore",
  ],
  authors: [{ name: "Tuhin Mondal", url: siteUrl }],
  creator: "Tuhin Mondal",
  openGraph: {
    title: "Tuhin Mondal | Full-Stack & AI/ML Developer",
    description:
      "Aspiring Full-Stack & AI/ML Developer building scalable applications and solving real-world problems through code.",
    url: siteUrl,
    siteName: "Tuhin Mondal",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tuhin Mondal | Full-Stack & AI/ML Developer",
    description:
      "Aspiring Full-Stack & AI/ML Developer building scalable applications and solving real-world problems through code.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

/* Inline script to prevent theme flash on load */
const themeScript = `
  (function() {
    try {
      var t = localStorage.getItem('portfolio-theme');
      if (!t) t = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      document.documentElement.classList.remove('light','dark');
      document.documentElement.classList.add(t);
    } catch(e) {}
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} dark`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <ThemeProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-accent focus:text-white focus:rounded-lg focus:text-sm"
          >
            Skip to content
          </a>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
