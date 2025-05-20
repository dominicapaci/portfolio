import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AnimationProvider } from "@/contexts/animation-context";
import "./globals.css";


export const metadata: Metadata = {
  title: 'Dominic Capaci - Portfolio',
  description: 'Professional portfolio showcasing my projects and skills',
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
    shortcut: '/icon.ico',
  }
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AnimationProvider>
          {children}
        </AnimationProvider>
      </body>
    </html>
  );
}
