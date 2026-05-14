import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prompt Genius AI — Your Command Center for AI Coding Prompts",
  description:
    "Stop getting mediocre code from AI. Prompt Genius AI helps you store, organize, and optimize your AI coding prompts. Ship 10x faster with battle-tested prompts.",
  keywords: [
    "AI prompts",
    "coding prompts",
    "prompt engineering",
    "AI development",
    "prompt management",
  ],
  openGraph: {
    title: "Prompt Genius AI — Your Command Center for AI Coding Prompts",
    description:
      "Stop getting mediocre code from AI. Store, organize, and optimize your AI coding prompts. Ship 10x faster.",
    type: "website",
    url: "https://prompt-genius-ai.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prompt Genius AI",
    description:
      "Your command center for AI coding prompts. Ship 10x faster.",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
