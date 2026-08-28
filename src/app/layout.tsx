import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PortfolioLanguageProvider } from "@/components/portfolio/shared/PortfolioLanguage";
import { SmoothCursor } from "@/components/portfolio/shared/SmoothCursor";
import "./globals.css";
import "../styles/portfolio.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-portfolio",
});

export const metadata: Metadata = {
  title: "PORTFOLIO | Phong Nguyen",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body>
        <PortfolioLanguageProvider initialLanguage="en">
          <SmoothCursor />
          <div className="smooth-cursor-hide">
            {children}
          </div>
        </PortfolioLanguageProvider>
      </body>
    </html>
  );
}
