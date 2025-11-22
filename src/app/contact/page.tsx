import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Contact Us - Omni-Style Calculators',
  description: 'Contact Omni-Style Calculators for support or feedback.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
      <Header />
      <main className="flex-grow mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h1>
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
          <p className="text-lg text-gray-600 mb-6">
            Have a question, suggestion, or found a bug? We&apos;d love to hear from you!
          </p>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Email</h3>
              <a href="mailto:support@omnistylecalculators.com" className="text-blue-600 hover:underline">
                support@omnistylecalculators.com
              </a>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Social Media</h3>
              <p className="text-gray-600">Follow us on Twitter and Facebook for updates.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

