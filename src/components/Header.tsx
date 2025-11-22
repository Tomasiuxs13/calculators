'use client';

import { useState, FormEvent, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Search, Calculator as CalculatorIcon } from 'lucide-react';
import { Input } from '@/components/ui/Input';
import { calculators } from '@/config/calculators';

export default function Header() {
  const [search, setSearch] = useState('');
  const [showPreview, setShowPreview] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const router = useRouter();
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Filter calculators based on search
  const filteredCalculators = search.trim()
    ? calculators
        .filter((calc) => {
          const searchLower = search.toLowerCase();
          return (
            calc.title.toLowerCase().includes(searchLower) ||
            calc.description.toLowerCase().includes(searchLower) ||
            calc.category.toLowerCase().includes(searchLower) ||
            calc.meta.keywords?.some(keyword => keyword.toLowerCase().includes(searchLower))
          );
        })
        .slice(0, 8)
    : [];

  // Close preview when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowPreview(false);
        setSelectedIndex(-1);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Scroll selected item into view
  useEffect(() => {
    if (selectedIndex >= 0 && searchRef.current) {
      const selectedElement = searchRef.current.querySelector(
        `[data-index="${selectedIndex}"]`
      ) as HTMLElement;
      if (selectedElement) {
        selectedElement.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      }
    }
  }, [selectedIndex]);

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setShowPreview(true);
      setSelectedIndex((prev) => 
        prev < filteredCalculators.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1));
    } else if (e.key === 'Enter' && selectedIndex >= 0 && filteredCalculators[selectedIndex]) {
      e.preventDefault();
      router.push(`/calculators/${filteredCalculators[selectedIndex].slug}`);
      setShowPreview(false);
      setSearch('');
    } else if (e.key === 'Escape') {
      setShowPreview(false);
      setSelectedIndex(-1);
      inputRef.current?.blur();
    }
  };

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (search.trim()) {
      if (selectedIndex >= 0 && filteredCalculators[selectedIndex]) {
        router.push(`/calculators/${filteredCalculators[selectedIndex].slug}`);
      } else {
        router.push(`/?search=${encodeURIComponent(search.trim())}`);
      }
      setShowPreview(false);
      setSearch('');
    } else {
      router.push('/');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setShowPreview(true);
    setSelectedIndex(-1);
  };

  const handleCalculatorClick = (slug: string) => {
    router.push(`/calculators/${slug}`);
    setShowPreview(false);
    setSearch('');
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo/Home Link */}
          <Link 
            href="/" 
            className="flex items-center gap-2 text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors whitespace-nowrap"
          >
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Calculators
            </span>
          </Link>

          {/* Search Bar with Preview */}
          <form onSubmit={handleSearch} className="flex-1 max-w-2xl mx-4">
            <div ref={searchRef} className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
              </div>
              <Input
                ref={inputRef}
                type="text"
                placeholder="Search calculators..."
                className="pl-11 h-10 w-full border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all bg-white"
                value={search}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                onFocus={() => {
                  if (filteredCalculators.length > 0) {
                    setShowPreview(true);
                  }
                }}
              />
              
              {/* Search Preview Dropdown */}
              {showPreview && search.trim() && filteredCalculators.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg max-h-96 overflow-y-auto z-50">
                  <div className="p-2">
                    {filteredCalculators.map((calc, index) => (
                      <Link
                        key={calc.id}
                        data-index={index}
                        href={`/calculators/${calc.slug}`}
                        onClick={() => handleCalculatorClick(calc.slug)}
                        className={`block p-3 rounded-lg transition-colors ${
                          index === selectedIndex
                            ? 'bg-blue-50 border border-blue-200'
                            : 'hover:bg-gray-50 border border-transparent'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div className="mt-0.5 flex-shrink-0">
                            <CalculatorIcon className="h-5 w-5 text-gray-400" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-semibold text-gray-900 mb-1 line-clamp-1">
                              {calc.title}
                            </div>
                            <div className="text-sm text-gray-600 line-clamp-1 mb-1">
                              {calc.description}
                            </div>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="inline-flex items-center rounded-md bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-700 capitalize">
                                {calc.category}
                              </span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                    {filteredCalculators.length >= 8 && (
                      <div className="p-3 text-center border-t border-gray-200">
                        <Link
                          href={`/?search=${encodeURIComponent(search.trim())}`}
                          onClick={() => {
                            setShowPreview(false);
                            setSearch('');
                          }}
                          className="text-sm font-medium text-blue-600 hover:text-blue-700"
                        >
                          View all results →
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              )}
              
              {/* No Results Message */}
              {showPreview && search.trim() && filteredCalculators.length === 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  <div className="p-4 text-center text-gray-500">
                    <CalculatorIcon className="h-8 w-8 mx-auto mb-2 text-gray-400" />
                    <p className="text-sm">No calculators found</p>
                    <p className="text-xs text-gray-400 mt-1">Try a different search term</p>
                  </div>
                </div>
              )}
            </div>
          </form>

          {/* Navigation Links */}
          <div className="flex items-center gap-4">
            <Link 
              href="/" 
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap"
            >
              Browse All
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

