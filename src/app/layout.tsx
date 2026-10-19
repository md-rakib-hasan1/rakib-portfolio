
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Rakib Hasan | Developer Portfolio",
    template: "%s | Rakib Hasan",
  },
  description:
    "I'm Rakib Hasan, a CSE student and aspiring web developer building modern web applications with React, Next.js, TypeScript, and more.",
  applicationName: "Rakib Hasan Portfolio",
  keywords: [
    "Rakib Hasan",
    "Web Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "Portfolio",
  ],
  openGraph: {
    title: "Rakib Hasan | Developer Portfolio",
    description:
      "Explore my projects, technical skills, and journey as a web developer.",
    type: "website",
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
