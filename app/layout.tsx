import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({ subsets: ["latin"], variable: '--font-syne' });
const dmSans = DM_Sans({ subsets: ["latin"], variable: '--font-dm-sans' });

export const metadata: Metadata = {
  title: "NexOps AI | AI Recepcionar za Stomatološke Ordinacije",
  description: "Naš AI Recepcionar odgovara na upite, kvalifikuje pacijente i zakazuje termine 24/7. Ne gubite pacijente van radnog vremena.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr" className={`${syne.variable} ${dmSans.variable}`}>
      <body className="font-sans antialiased text-brand-light bg-brand-dark">
        {children}
      </body>
    </html>
  );
}
