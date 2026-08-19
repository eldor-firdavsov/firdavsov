import type { Metadata } from "next";
import { Funnel_Display, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SmoothScroll } from "@/components/SmoothScroll";
import { CustomCursor } from "@/components/CustomCursor";
import { Preloader } from "@/components/Preloader";
import "./globals.css";

const funnelDisplay = Funnel_Display({
  variable: "--font-funnel",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const siteUrl = "https://www.firdavsov.uz";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Eldor Firdavsov — Senior Frontend Developer & AI/ML Engineer | Firdavsov",
    template: "%s | Eldor Firdavsov",
  },
  description:
    "Official portfolio and website of Eldor Firdavsov (Eldor / Firdavsov / firdavsov.uz) — Senior Frontend Developer & AI/ML Engineer. High-performance web products, interactive UI, and machine learning.",
  keywords: [
    "Eldor",
    "Firdavsov",
    "Eldor Firdavsov",
    "firdavsov.uz",
    "www.firdavsov.uz",
    "edlor",
    "frontend developer",
    "fullstack developer",
    "senior frontend developer",
    "frontend engineer",
    "AI ML engineer",
    "software engineer",
    "Samarkand developer",
    "Uzbekistan software engineer",
    "portfolio",
  ],
  authors: [{ name: "Eldor Firdavsov", url: siteUrl }],
  creator: "Eldor Firdavsov",
  publisher: "Eldor Firdavsov",
  alternates: {
    canonical: "/",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Eldor Firdavsov — Senior Frontend Developer & Fullstack Engineer",
    description:
      "Explore the work, projects, and lab experiments of Eldor Firdavsov (edlor / firdavsov) — Senior Frontend Developer & Fullstack Engineer.",
    siteName: "Eldor Firdavsov Portfolio",
    images: [
      {
        url: "/eldor-hero.png",
        width: 1200,
        height: 630,
        alt: "Eldor Firdavsov — Senior Frontend Developer & Fullstack Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eldor Firdavsov — Frontend & Fullstack Developer",
    description:
      "Senior Frontend Developer & Fullstack Engineer. Specializing in React, Next.js, and AI/ML.",
    images: ["/eldor-hero.png"],
    creator: "@eldor_firdavsov",
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/icon.png",
    apple: "/apple-icon.png",
  },
  verification: {
    google: "google6488924126c35f2b",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      "name": "Eldor Firdavsov",
      "alternateName": ["Eldor", "edlor", "firdavsov", "Eldor Firdavsov"],
      "jobTitle": "Senior Frontend Developer & Fullstack Engineer",
      "description":
        "Senior Frontend Developer & Fullstack Engineer specializing in React, Next.js, TypeScript, and AI/ML applications.",
      "url": siteUrl,
      "image": `${siteUrl}/eldor-hero.png`,
      "sameAs": [
        "https://github.com/eldor-firdavsov",
        "https://www.linkedin.com/in/eldor-firdavsov",
        "https://t.me/eldor_firdavsov"
      ],
      "knowsAbout": [
        "Frontend Development",
        "Fullstack Development",
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "AI/ML Engineering",
        "Software Architecture"
      ]
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      "url": siteUrl,
      "name": "Eldor Firdavsov — Frontend & Fullstack Developer",
      "description":
        "Official website and portfolio of Eldor Firdavsov — Senior Frontend Developer & Fullstack Engineer.",
      "publisher": {
        "@id": `${siteUrl}/#person`
      }
    }
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${funnelDisplay.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full bg-background text-foreground">
        <Preloader />
        <SmoothScroll>
          <CustomCursor />
          {children}
        </SmoothScroll>
        <Analytics />
      </body>
    </html>
  );
}
