import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = "https://rakib-portfolio-peach.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Rakib Hasan | Frontend Developer Portfolio",
    template: "%s | Rakib Hasan",
  },
  description:
    "Personal portfolio of Rakib Hasan — Computer Science student and Frontend Developer building responsive, accessible web applications with React, Next.js, TypeScript, and modern web tools.",
  applicationName: "Rakib Hasan Portfolio",
  keywords: [
    "Rakib Hasan",
    "Frontend Developer",
    "Web Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "Tailwind CSS",
    "Bazar Dor",
    "FitLog",
    "Dev Stack Builder",
    "Dhaka International University",
    "CSE Student Bangladesh",
  ],
  authors: [{ name: "Rakib Hasan", url: siteUrl }],
  creator: "Rakib Hasan",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Rakib Hasan | Frontend Developer Portfolio",
    description:
      "Explore projects, technical skills, and learning journey of Rakib Hasan — CSE student and Frontend Developer.",
    url: siteUrl,
    type: "website",
    siteName: "Rakib Hasan Portfolio",
    locale: "en_US",
    images: [
      {
        url: "/assets/Professional%20Tech%20Workspace%20Portrait.png",
        width: 1200,
        height: 630,
        alt: "Rakib Hasan — Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rakib Hasan | Frontend Developer Portfolio",
    description:
      "Explore projects, technical skills, and learning journey of Rakib Hasan.",
    images: ["/assets/Professional%20Tech%20Workspace%20Portrait.png"],
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

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
