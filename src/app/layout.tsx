import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "J.A.R.N.V.I.S",
  description: "Just A Rather Not Very Intelligent System",
  creator: "srajankumar",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeroHighlight>
          <div className="fixed pointer-events-none inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          {children}
        </HeroHighlight>
        <Toaster />
      </body>
    </html>
  );
}
