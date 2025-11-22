import { Metadata } from 'next';
import { Suspense } from 'react';
import HomeClient from '@/components/HomeClient';

export const metadata: Metadata = {
  title: 'Omni-Style Calculators - Free Online Calculators',
  description: 'Hundreds of custom-built calculators for every situation. Finance, health, math, and more.',
  keywords: ['calculator', 'online calculator', 'finance calculator', 'health calculator', 'math calculator'],
};

export default function Home() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50" />}>
      <HomeClient />
    </Suspense>
  );
}
