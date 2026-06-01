import type { Metadata, Viewport } from "next";
import { Sora, Manrope } from "next/font/google";
import { SpaceBackground } from "@/components/ui/space-background";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Himanshu Kumar Gupta | AI & ML Engineer",
  description:
    "Portfolio of Himanshu Kumar Gupta - Artificial Intelligence and Machine Learning Engineer specializing in deep learning, data analysis, and AI interfaces.",
  keywords: [
    "AI Engineer",
    "Machine Learning",
    "Deep Learning",
    "Python",
    "Portfolio",
    "Himanshu Kumar Gupta",
  ],
  authors: [{ name: "Himanshu Kumar Gupta" }],
  openGraph: {
    title: "Himanshu Kumar Gupta | AI & ML Engineer",
    description:
      "Exploring the space where human-centered design meets practical machine intelligence.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0f1c",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sora.variable} ${manrope.variable} bg-background`}>
      <body className="font-sans antialiased">
        <SpaceBackground />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
