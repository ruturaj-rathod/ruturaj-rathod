import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { Header } from "@/components";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Portfolio Dev",
  description: "A show case the my works and skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} bg-background antialiased`}>
        <Header />
        <main className="container mx-auto max-w-4xl px-4 pt-24 md:pt-40 pb-24 md:pb-12">
          {children}
        </main>
      </body>
    </html>
  );
}
