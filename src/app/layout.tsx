import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL 
  ? new URL(process.env.NEXT_PUBLIC_BASE_URL) 
  : new URL('http://localhost:3000');

export const metadata: Metadata = {
  metadataBase: baseUrl,
  title: {
    default: "Omni-Style Calculators - Free Online Tools",
    template: "%s | Omni-Style Calculators",
  },
  description: "Free online calculators for every need. Finance, health, math, and more.",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-48x48.png", type: "image/png", sizes: "48x48" },
      { url: "/favicon.ico", type: "image/x-icon", sizes: "any" },
    ],
    apple: [
      { url: "/apple-icon.png", type: "image/png", sizes: "180x180" },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    siteName: 'Omni-Style Calculators',
    title: 'Omni-Style Calculators - Free Online Tools',
    description: 'Free online calculators for every need. Finance, health, math, and more.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Omni-Style Calculators - Free Online Tools',
    description: 'Free online calculators for every need. Finance, health, math, and more.',
  },
  alternates: {
    canonical: './',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-900`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
