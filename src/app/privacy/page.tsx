import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy - Omni-Style Calculators',
  description: 'Privacy Policy for Omni-Style Calculators.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
      <Header />
      <main className="flex-grow mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
        <div className="prose prose-blue max-w-none bg-white p-8 rounded-xl shadow-sm border border-gray-200">
          <p className="text-gray-600 mb-4">Last updated: {new Date().toLocaleDateString()}</p>
          <p className="text-gray-600 mb-4">
            At Omni-Style Calculators, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information.
          </p>
          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-4">Information We Collect</h2>
          <p className="text-gray-600 mb-4">
            We do not collect any personal information from you when you use our calculators. All calculations are performed in your browser and no data is sent to our servers.
          </p>
           <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-4">Cookies</h2>
          <p className="text-gray-600 mb-4">
            We use cookies to improve your experience on our website. You can choose to disable cookies in your browser settings.
          </p>
          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-4">Contact Us</h2>
          <p className="text-gray-600">
            If you have any questions about our Privacy Policy, please contact us.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

