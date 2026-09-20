import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mohanraj S — Full Stack Software Engineer",
  description:
    "Full Stack Software Engineer specializing in React, Next.js, TypeScript, Golang and PostgreSQL. Built and shipped production platforms including a healthcare information system, a live e-commerce store, and a real-time cloud kitchen ordering platform.",
  keywords: [
    "Mohanraj S",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Golang Developer",
    "Software Engineer India",
  ],
  openGraph: {
    title: "Mohanraj S — Full Stack Software Engineer",
    description:
      "React, Next.js, TypeScript, Golang, PostgreSQL. Shipping production systems end-to-end.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
