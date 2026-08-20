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
    default: "Eldor Firdavsov — Senior Frontend Developer & AI/ML Engineer",
    template: "%s | Eldor Firdavsov",
  },
  description:
    "Official portfolio of Eldor Firdavsov (Firdavsov, firdavsov.uz) — Senior Frontend Developer & AI/ML Engineer based in Samarkand, Uzbekistan. Building high-performance web products, interactive UI, and machine learning applications.",
  keywords: [
    "Eldor Firdavsov",
    "Firdavsov",
    "firdavsov",
    "firdavsov.uz",
    "www.firdavsov.uz",
    "Eldor",
    "eldor firdavsov portfolio",
    "eldor firdavsov developer",
    "eldor developer uzbekistan",
    "frontend developer",
    "fullstack developer",
    "senior frontend developer",
    "frontend engineer",
    "AI ML engineer",
    "software engineer",
    "React developer",
    "Next.js developer",
    "TypeScript developer",
    "Samarkand developer",
    "Uzbekistan software engineer",
    "portfolio",
  ],
  authors: [{ name: "Eldor Firdavsov", url: siteUrl }],
  creator: "Eldor Firdavsov",
  publisher: "Eldor Firdavsov",
  alternates: {
    canonical: siteUrl,
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
    type: "profile",
    locale: "en_US",
    url: siteUrl,
    title: "Eldor Firdavsov — Senior Frontend Developer & AI/ML Engineer",
    description:
      "Explore the work, projects, and lab experiments of Eldor Firdavsov — Senior Frontend Developer & AI/ML Engineer based in Samarkand, Uzbekistan.",
    siteName: "Eldor Firdavsov — firdavsov.uz",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Eldor Firdavsov — Frontend Developer & AI/ML Engineer",
        type: "image/png",
      },
    ],
    firstName: "Eldor",
    lastName: "Firdavsov",
    username: "eldor_firdavsov",
    gender: "male",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eldor Firdavsov — Senior Frontend Developer & AI/ML Engineer",
    description:
      "Senior Frontend Developer & AI/ML Engineer. Explore projects and lab experiments at firdavsov.uz.",
    images: ["/og-image.png"],
    creator: "@eldor_firdavsov",
    site: "@eldor_firdavsov",
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "mask-icon", url: "/icon.png" },
    ],
  },
  category: "technology",
  verification: {
    google: "google6488924126c35f2b",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#profilepage`,
      "url": siteUrl,
      "name": "Eldor Firdavsov — Senior Frontend Developer & AI/ML Engineer",
      "description":
        "Official portfolio of Eldor Firdavsov — Senior Frontend Developer & AI/ML Engineer based in Samarkand, Uzbekistan.",
      "mainEntity": {
        "@id": `${siteUrl}/#person`
      },
      "isPartOf": {
        "@id": `${siteUrl}/#website`
      }
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      "name": "Eldor Firdavsov",
      "givenName": "Eldor",
      "familyName": "Firdavsov",
      "alternateName": ["Firdavsov", "firdavsov", "firdavsov.uz", "eldor firdavsov"],
      "jobTitle": "Senior Frontend Developer & AI/ML Engineer",
      "description":
        "Senior Frontend Developer & AI/ML Engineer specializing in React, Next.js, TypeScript, and machine learning applications. Based in Samarkand, Uzbekistan.",
      "url": siteUrl,
      "image": {
        "@type": "ImageObject",
        "url": `${siteUrl}/hero-v3.jpg`,
        "width": 800,
        "height": 1000
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Samarkand",
        "addressCountry": "UZ"
      },
      "sameAs": [
        siteUrl,
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
      "name": "Eldor Firdavsov — firdavsov.uz",
      "alternateName": ["firdavsov.uz", "Firdavsov", "Eldor Firdavsov Portfolio"],
      "description":
        "Official website and portfolio of Eldor Firdavsov — Senior Frontend Developer & AI/ML Engineer.",
      "inLanguage": "en-US",
      "publisher": {
        "@id": `${siteUrl}/#person`
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": `${siteUrl}/?s={search_term_string}`
        },
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      "name": "Eldor Firdavsov",
      "url": siteUrl,
      "logo": {
        "@type": "ImageObject",
        "@id": `${siteUrl}/#logo`,
        "url": `${siteUrl}/logo-icon.png`,
        "contentUrl": `${siteUrl}/logo-icon.png`,
        "width": 512,
        "height": 512,
        "caption": "Eldor Firdavsov"
      },
      "image": {
        "@id": `${siteUrl}/#logo`
      },
      "founder": {
        "@id": `${siteUrl}/#person`
      },
      "sameAs": [
        "https://github.com/eldor-firdavsov",
        "https://www.linkedin.com/in/eldor-firdavsov"
      ]
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
        {/* Theme & PWA */}
        <meta name="theme-color" content="#0a0a0a" />
        <meta name="color-scheme" content="dark light" />
        <meta name="msapplication-TileColor" content="#0a0a0a" />
        <meta name="msapplication-TileImage" content="/icon.png" />
        <meta name="msapplication-config" content="none" />

        {/* Apple Mobile Web App */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Eldor Firdavsov" />

        {/* Format Detection */}
        <meta name="format-detection" content="telephone=no, date=no, email=no, address=no" />

        {/* Geo / Location */}
        <meta name="geo.region" content="UZ-SA" />
        <meta name="geo.placename" content="Samarkand, Uzbekistan" />
        <meta name="geo.position" content="39.6547;66.9758" />
        <meta name="ICBM" content="39.6547, 66.9758" />

        {/* Content / SEO hints */}
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="7 days" />
        <meta name="language" content="English" />
        <meta name="copyright" content="Eldor Firdavsov" />
        <meta name="author" content="Eldor Firdavsov" />
        <meta name="designer" content="Eldor Firdavsov" />
        <meta name="reply-to" content="eldor@firdavsov.uz" />
        <meta name="owner" content="Eldor Firdavsov" />
        <meta name="url" content="https://www.firdavsov.uz" />
        <meta name="identifier-URL" content="https://www.firdavsov.uz" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />

        {/* Dublin Core */}
        <meta name="DC.title" content="Eldor Firdavsov — Senior Frontend Developer & AI/ML Engineer" />
        <meta name="DC.creator" content="Eldor Firdavsov" />
        <meta name="DC.subject" content="Frontend Development, AI/ML Engineering, Portfolio, React, Next.js" />
        <meta name="DC.description" content="Official portfolio of Eldor Firdavsov — Senior Frontend Developer & AI/ML Engineer based in Samarkand, Uzbekistan." />
        <meta name="DC.publisher" content="Eldor Firdavsov" />
        <meta name="DC.contributor" content="Eldor Firdavsov" />
        <meta name="DC.language" content="en" />
        <meta name="DC.coverage" content="Worldwide" />
        <meta name="DC.rights" content="© 2025 Eldor Firdavsov. All rights reserved." />
        <meta name="DC.identifier" content="https://www.firdavsov.uz" />

        {/* Identity / rel=me — helps Google link this site to Eldor's profiles */}
        <link rel="me" href="https://github.com/eldor-firdavsov" />
        <link rel="me" href="https://www.linkedin.com/in/eldor-firdavsov" />
        <link rel="me" href="https://t.me/eldor_firdavsov" />
        <link rel="me" href="mailto:firdavsove1@gmail.com" />

        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />

        {/* Structured Data */}
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
