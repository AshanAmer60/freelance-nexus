import type { Metadata } from "next";
import { Figtree, Syne } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Freelance Nexus — Precision Transcription",
    template: "%s",
  },
  description:
    "Publish-ready transcripts in 24–72 hours—human-reviewed. Boutique transcription, translation, and recording support from Freelance Nexus.",
  icons: {
    icon: [{ url: "/logo.jpeg", type: "image/jpeg" }],
    shortcut: "/logo.jpeg",
    apple: "/logo.jpeg",
  },
  openGraph: {
    title: "Freelance Nexus — Precision Transcription",
    description:
      "Human-crafted transcription that captures every word, speaker, and nuance.",
    type: "website",
    images: [
      {
        url: "/logo.jpeg",
        width: 800,
        height: 800,
        alt: "Freelance Nexus logo",
      },
    ],
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
      className={`${figtree.variable} ${syne.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
