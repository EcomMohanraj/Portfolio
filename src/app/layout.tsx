import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0b0d13",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Mohanraj S | Full Stack Software Engineer",
  description:
    "Full Stack Software Engineer specializing in React, Next.js, TypeScript, Golang, Node.js and PostgreSQL. Explore my production experience and deployed full-stack projects.",
  keywords: [
    "Mohanraj S",
    "Full Stack Software Engineer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Golang Developer",
    "Node.js Developer",
    "PostgreSQL",
    "Healthcare Information Management System",
    "Sanrado Techsolutions",
    "Yazhisai Cloud Kitchen",
    "Milky Mushroom",
  ],
  authors: [{ name: "Mohanraj S" }],
  creator: "Mohanraj S",
  metadataBase: new URL("https://mohanraj-portfolio-chi.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Mohanraj S | Full Stack Software Engineer",
    description:
      "Full Stack Software Engineer specializing in React, Next.js, TypeScript, Golang, Node.js and PostgreSQL. Explore my production experience and deployed full-stack projects.",
    url: "https://mohanraj-portfolio-chi.vercel.app",
    siteName: "Mohanraj S Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohanraj S | Full Stack Software Engineer",
    description:
      "Full Stack Software Engineer specializing in React, Next.js, TypeScript, Golang, Node.js and PostgreSQL. Explore my production experience and deployed full-stack projects.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`h-full scroll-smooth ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-full flex flex-col bg-background text-foreground overflow-x-hidden font-sans selection:bg-accent selection:text-white antialiased">
        {children}
      </body>
    </html>
  );
}
