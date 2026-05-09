import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const syne = Syne({ subsets: ["latin"], variable: '--font-syne' });


export const metadata: Metadata = {
  title: "nexops.agency — Turn Your Audience Into Revenue",
  description: "We build and monetize custom apps for micro-influencers on Instagram, TikTok & YouTube. From idea to income in 2 weeks.",
  openGraph: {
    title: "nexops.agency — Turn Your Audience Into Revenue",
    description: "We build and monetize custom apps for micro-influencers on Instagram, TikTok & YouTube. From idea to income in 2 weeks.",
    url: "https://nexops.agency",
    siteName: "nexops.agency",
    images: [
      {
        url: "https://nexops.agency/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "nexops.agency — Turn Your Audience Into Revenue",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://nexops.agency",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} ${syne.variable} antialiased min-h-screen bg-background text-foreground selection:bg-primary/30`}>
        <div className="noise-overlay"></div>
        {children}
      </body>
    </html>
  );
}
