import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import Footer from "@/components/Footer";
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
    default: "Calculators - Free Online Tools",
    template: "%s | Calculators",
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
    siteName: 'Calculators',
    title: 'Calculators - Free Online Tools',
    description: 'Free online calculators for every need. Finance, health, math, and more.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Calculators - Free Online Tools',
    description: 'Free online calculators for every need. Finance, health, math, and more.',
  },
  alternates: {
    canonical: './',
  },
  verification: {
    google: 'nl6XWoxNFUf-ZcEniUm0bkuyP8SJY5NnM_yz8vqRSg4',
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
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-900`}
        suppressHydrationWarning
      >
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XJKMJJF63L"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XJKMJJF63L');
          `}
        </Script>
        {children}
        <Footer />
      </body>
    </html>
  );
}
