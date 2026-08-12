import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Amine Elbekari | Fullstack Engineer",
  description:
    "Full Stack Engineer focused on robust backend architecture, security, and cloud automation. Portfolio showcasing projects in Kubernetes, Cloud, and AI.",
  keywords: [
    "Full Stack Engineer",
    "Backend Developer",
    "Cloud",
    "Kubernetes",
    "AI",
    "Django",
    "NestJS",
    "Next.js",
  ],
  authors: [{ name: "Amine Elbekari" }],
  openGraph: {
    title: "Amine Elbekari | Fullstack Engineer",
    description:
      "Full Stack Engineer focused on robust backend architecture, security, and cloud automation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrains.variable} antialiased`}
    >
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
