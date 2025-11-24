import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white py-12 mt-auto">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} Calculators. All rights reserved.
          </p>
        </div>
        <div className="flex gap-6 text-sm font-medium text-gray-600">
          <Link href="/about" className="hover:text-gray-900 transition-colors">About</Link>
          <Link href="/privacy" className="hover:text-gray-900 transition-colors">Privacy</Link>
          <Link href="/terms" className="hover:text-gray-900 transition-colors">Terms</Link>
          <Link href="/contact" className="hover:text-gray-900 transition-colors">Contact</Link>
        </div>
      </div>
    </footer>
  );
}

