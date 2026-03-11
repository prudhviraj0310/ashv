import type { Metadata } from "next";
import { Orbitron, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import RacePath from "@/components/animations/RacePath";
import { ScrollProgress } from "@/components/ui/ScrollAnimations";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "INVICTA 2K26 | Tech Fest - MITS",
  description:
    "Experience the enormous excitement at INVICTA 2K26, the one-day Technical Fest at Madanapalle Institute of Technology & Science!",
  keywords: ["INVICTA", "MITS", "college fest", "technical fest", "tech fest", "hackathon", "Madanapalle"],
  authors: [{ name: "MITS" }],
  openGraph: {
    title: "INVICTA 2K26 | Tech Fest",
    description: "Join us for an unforgettable one-day Technical Fest!",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${orbitron.variable} ${inter.variable} antialiased bg-[#0A0A0F] text-white min-h-screen`}
      >
          <ScrollProgress />
          <Navbar />
          <RacePath />
          <main id="main-layout">{children}</main>
          <Footer />
      </body>
    </html>
  );
}
