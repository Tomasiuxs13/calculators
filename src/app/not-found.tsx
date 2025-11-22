import Link from 'next/link';
import Header from '@/components/Header';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header />
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-4 text-center">
        <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Page Not Found</h2>
        <p className="text-gray-600 mb-8 max-w-md">
          Sorry, we couldn&apos;t find the calculator or page you&apos;re looking for. It might have been moved or doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

