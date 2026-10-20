
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// export const metadata: Metadata = {
//   title: {
//     default: "Rakib Hasan | Developer Portfolio",
//     template: "%s | Rakib Hasan",
//   },
//   description:
//     "I'm Rakib Hasan, a CSE student and aspiring web developer building modern web applications with React, Next.js, TypeScript, and more.",
//   applicationName: "Rakib Hasan Portfolio",
//   keywords: [
//     "Rakib Hasan",
//     "Web Developer",
//     "Next.js Developer",
//     "React Developer",
//     "TypeScript",
//     "Portfolio",
//   ],
//   openGraph: {
//     title: "Rakib Hasan | Developer Portfolio",
//     description:
//       "Explore my projects, technical skills, and journey as a web developer.",
//     type: "website",
//   },
// };


export const metadata: Metadata = {
  title: {
    default: "Rakib Hasan | Developer Portfolio",
    template: "%s | Rakib Hasan",
  },
  description:
    "Explore Rakib Hasan's developer portfolio, projects, technical skills, and journey as a CSE student learning modern web development.",
  applicationName: "Rakib Hasan Portfolio",
  keywords: [
    "Rakib Hasan",
    "Developer Portfolio",
    "Web Development",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "CSE Student",
  ],
  authors: [{ name: "Rakib Hasan" }],
  openGraph: {
    title: "Rakib Hasan | Developer Portfolio",
    description:
      "Explore my projects, technical skills, and journey in modern web development.",
    type: "website",
    siteName: "Rakib Hasan Portfolio",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Rakib Hasan | Developer Portfolio",
    description:
      "Explore my projects, technical skills, and journey in modern web development.",
  },
  robots: {
    index: true,
    follow: true,
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
