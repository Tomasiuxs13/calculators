import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Terms of Service - Omni-Style Calculators',
  description: 'Terms of Service for Omni-Style Calculators.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
      <Header />
      <main className="flex-grow mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Terms of Service</h1>
        <div className="prose prose-blue max-w-none bg-white p-8 rounded-xl shadow-sm border border-gray-200">
          <p className="text-gray-600 mb-4">Last updated: {new Date().toLocaleDateString()}</p>
          <p className="text-gray-600 mb-4">
            By using Omni-Style Calculators, you agree to these Terms of Service. Please read them carefully.
          </p>
          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-4">Use of Calculators</h2>
          <p className="text-gray-600 mb-4">
            Our calculators are provided for informational purposes only. While we strive for accuracy, we cannot guarantee that the results are error-free. You should not rely solely on these calculators for professional advice.
          </p>
          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-4">Disclaimer</h2>
          <p className="text-gray-600 mb-4">
            Omni-Style Calculators is not responsible for any errors or omissions, or for the results obtained from the use of this information.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

