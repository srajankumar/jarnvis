import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { HeroHighlight } from "@/components/ui/hero-highlight";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "J.A.R.V.I.T-G",
  description: "Just A Rather Very Intelligent Text - Generator",
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
      </body>
    </html>
  );
}
