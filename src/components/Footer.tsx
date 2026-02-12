import Link from 'next/link';
import { subcategories, Category } from '@/types';

const categoryLabels: Record<Category, string> = {
  health: 'Health',
  finance: 'Finance',
  math: 'Math',
  biology: 'Biology',
  chemistry: 'Chemistry',
  construction: 'Construction',
  conversion: 'Conversion',
  ecology: 'Ecology',
  'everyday-life': 'Everyday Life',
  food: 'Food',
  physics: 'Physics',
  sports: 'Sports',
  statistics: 'Statistics',
  other: 'Other',
};

const categories = Object.keys(subcategories) as Category[];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Category Navigation Grid */}
        <nav aria-label="Calculator categories">
          <h2 className="text-lg font-semibold text-white mb-6">Calculator Categories</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {categories.map((category) => (
              <div key={category}>
                <Link
                  href={`/category/${category}`}
                  className="text-sm font-medium text-gray-100 hover:text-white transition-colors"
                >
                  {categoryLabels[category]}
                </Link>
                <ul className="mt-2 space-y-1">
                  {subcategories[category].slice(0, 3).map((sub) => (
                    <li key={sub.id}>
                      <Link
                        href={`/category/${category}?sub=${sub.slug}`}
                        className="text-xs text-gray-400 hover:text-gray-200 transition-colors"
                      >
                        {sub.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </nav>

        {/* Bottom Section */}
        <div className="mt-10 pt-8 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex gap-6 text-sm">
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Calculators. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
