import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'About Us - Omni-Style Calculators',
  description: 'Learn more about Omni-Style Calculators and our mission to provide free, accurate online tools.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
      <Header />
      <main className="flex-grow mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">About Us</h1>
        <div className="prose prose-blue max-w-none bg-white p-8 rounded-xl shadow-sm border border-gray-200">
          <p className="text-lg text-gray-600 mb-4">
            Welcome to Omni-Style Calculators, your go-to destination for free, accurate, and easy-to-use online calculators.
          </p>
          <p className="text-gray-600 mb-4">
            Our mission is to make complex calculations simple and accessible to everyone. Whether you&apos;re a student, professional, or just curious, we have the tools you need to get the answers you&apos;re looking for.
          </p>
          <p className="text-gray-600">
            We cover a wide range of categories including Finance, Health, Math, Science, and Everyday Life. All our calculators are verified by experts and updated regularly to ensure accuracy.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

