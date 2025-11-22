'use client';

import { useState, useEffect, useRef } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { calculators } from '@/config/calculators';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import Footer from '@/components/Footer';
import { Category } from '@/types';
import { Search, Calculator, Heart, DollarSign, GraduationCap, MoreHorizontal, ArrowRight, Zap, Shield, Globe, TrendingUp, Users, CheckCircle2, Beaker, Wrench, Gauge, Leaf, Coffee, Atom, Trophy, BarChart3 } from 'lucide-react';
import { getCalculatorsByCategory } from '@/config/calculators';

export default function HomeClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [search, setSearch] = useState(searchParams.get('search') || '');
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>('all');
  const [showPreview, setShowPreview] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const searchQuery = searchParams.get('search');
    if (searchQuery) {
      setSearch(searchQuery);
    }
  }, [searchParams]);

  // Filter calculators for preview (not affected by category filter)
  const previewCalculators = search.trim()
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
        `[data-preview-index="${selectedIndex}"]`
      ) as HTMLElement;
      if (selectedElement) {
        selectedElement.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      }
    }
  }, [selectedIndex]);

  const categories: { id: Category | 'all', label: string, icon: React.ElementType, color: string }[] = [
    { id: 'all', label: 'All', icon: Calculator, color: 'from-blue-500 to-cyan-500' },
    { id: 'health', label: 'Health', icon: Heart, color: 'from-red-500 to-pink-500' },
    { id: 'finance', label: 'Finance', icon: DollarSign, color: 'from-green-500 to-emerald-500' },
    { id: 'math', label: 'Math', icon: GraduationCap, color: 'from-purple-500 to-indigo-500' },
    { id: 'conversion', label: 'Conversion', icon: Gauge, color: 'from-blue-500 to-cyan-500' },
    { id: 'biology', label: 'Biology', icon: Leaf, color: 'from-green-600 to-emerald-600' },
    { id: 'chemistry', label: 'Chemistry', icon: Beaker, color: 'from-orange-500 to-red-500' },
    { id: 'physics', label: 'Physics', icon: Atom, color: 'from-indigo-500 to-purple-500' },
    { id: 'construction', label: 'Construction', icon: Wrench, color: 'from-yellow-600 to-orange-600' },
    { id: 'everyday-life', label: 'Everyday Life', icon: Coffee, color: 'from-amber-500 to-yellow-500' },
    { id: 'food', label: 'Food', icon: Coffee, color: 'from-orange-400 to-red-400' },
    { id: 'sports', label: 'Sports', icon: Trophy, color: 'from-yellow-500 to-orange-500' },
    { id: 'statistics', label: 'Statistics', icon: BarChart3, color: 'from-blue-600 to-indigo-600' },
    { id: 'ecology', label: 'Ecology', icon: Leaf, color: 'from-green-500 to-teal-500' },
    { id: 'other', label: 'Other', icon: MoreHorizontal, color: 'from-gray-500 to-slate-500' },
  ];

  const filteredCalculators = calculators.filter((calc) => {
    // Filter by category
    if (selectedCategory !== 'all' && calc.category !== selectedCategory) {
      return false;
    }
    
    // Filter by search query
    if (search.trim()) {
      const searchLower = search.toLowerCase();
      return (
        calc.title.toLowerCase().includes(searchLower) ||
        calc.description.toLowerCase().includes(searchLower) ||
        calc.category.toLowerCase().includes(searchLower) ||
        calc.meta.keywords?.some(keyword => keyword.toLowerCase().includes(searchLower))
      );
    }
    
    return true;
  });

  const featuredCalculators = search.trim() 
    ? filteredCalculators 
    : filteredCalculators.slice(0, 3);
  const stats = [
    { label: 'Calculators', value: '100+', icon: Calculator },
    { label: 'Categories', value: '10+', icon: TrendingUp },
    { label: 'Users', value: '50K+', icon: Users },
    { label: 'Countries', value: '150+', icon: Globe },
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Get instant results with our optimized calculations',
    },
    {
      icon: Shield,
      title: '100% Free',
      description: 'No hidden fees, no registration required',
    },
    {
      icon: CheckCircle2,
      title: 'Accurate Results',
      description: 'Verified by experts and updated regularly',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-sans text-gray-900">
      
      {/* Hero Section */}
      <div className="bg-white border-b border-gray-200">
        <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-7xl mb-6">
              Calculate <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Anything</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
              Free, accurate calculators for every need. From health metrics to financial planning, 
              we make complex calculations simple and accessible.
            </p>

            <div ref={searchRef} className="max-w-xl mx-auto relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
                <Search className="h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
              </div>
              <Input
                ref={inputRef}
                type="text"
                placeholder="What do you want to calculate?"
                className="pl-11 h-14 text-lg shadow-md border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all bg-white"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setShowPreview(true);
                  setSelectedIndex(-1);
                }}
                onKeyDown={(e) => {
                  if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    setShowPreview(true);
                    setSelectedIndex((prev) => 
                      prev < previewCalculators.length - 1 ? prev + 1 : prev
                    );
                  } else if (e.key === 'ArrowUp') {
                    e.preventDefault();
                    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1));
                  } else if (e.key === 'Enter' && selectedIndex >= 0 && previewCalculators[selectedIndex]) {
                    e.preventDefault();
                    router.push(`/calculators/${previewCalculators[selectedIndex].slug}`);
                    setShowPreview(false);
                    setSearch('');
                  } else if (e.key === 'Escape') {
                    setShowPreview(false);
                    setSelectedIndex(-1);
                    inputRef.current?.blur();
                  }
                }}
                onFocus={() => {
                  if (previewCalculators.length > 0) {
                    setShowPreview(true);
                  }
                }}
              />
              
              {/* Search Preview Dropdown */}
              {showPreview && search.trim() && previewCalculators.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg max-h-96 overflow-y-auto z-50">
                  <div className="p-2">
                    {previewCalculators.map((calc, index) => (
                      <Link
                        key={calc.id}
                        data-preview-index={index}
                        href={`/calculators/${calc.slug}`}
                        onClick={() => {
                          setShowPreview(false);
                          setSearch('');
                        }}
                        className={`block p-3 rounded-lg transition-colors ${
                          index === selectedIndex
                            ? 'bg-blue-50 border border-blue-200'
                            : 'hover:bg-gray-50 border border-transparent'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div className="mt-0.5 flex-shrink-0">
                            <Calculator className="h-5 w-5 text-gray-400" />
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
                    {previewCalculators.length >= 8 && (
                      <div className="p-3 text-center border-t border-gray-200">
                        <Link
                          href={`/?search=${encodeURIComponent(search.trim())}`}
                          onClick={() => {
                            setShowPreview(false);
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
              {showPreview && search.trim() && previewCalculators.length === 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  <div className="p-4 text-center text-gray-500">
                    <Calculator className="h-8 w-8 mx-auto mb-2 text-gray-400" />
                    <p className="text-sm">No calculators found</p>
                    <p className="text-xs text-gray-400 mt-1">Try a different search term</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Categories Section */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Browse by Category</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {categories.filter(cat => cat.id !== 'all').map((cat) => {
                const Icon = cat.icon;
                const categoryCalculators = getCalculatorsByCategory(cat.id as Category);
                const count = categoryCalculators.length;
                
                return (
                  <Link
                    key={cat.id}
                    href={`/category/${cat.id}`}
                    className="group"
                  >
                    <Card className="h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer bg-white border-gray-200 flex flex-col overflow-hidden">
                      <div className={`h-2 w-full bg-gradient-to-r ${cat.color}`} />
                      <CardHeader className="pb-3">
                        <div className="flex items-center gap-3 mb-3">
                          <div className={`p-3 rounded-xl bg-gradient-to-r ${cat.color} text-white`}>
                            <Icon className="w-6 h-6" />
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-lg font-bold group-hover:text-blue-600 transition-colors text-gray-900">
                              {cat.label}
                            </CardTitle>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-bold text-gray-900">{count}</span>
                          <span className="text-sm text-gray-600">
                            {count === 1 ? 'calculator' : 'calculators'}
                          </span>
                        </div>
                      </CardHeader>
                      <CardContent className="mt-auto pt-0">
                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                          <span className="text-xs font-semibold text-blue-600 flex items-center gap-1 group-hover:gap-2 transition-all">
                            View Category <ArrowRight className="w-3 h-3" />
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        </main>
      </div>

      {/* Stats Section */}
      <div className="bg-white border-b border-gray-200 py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-50 text-blue-600 mb-3">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide the best calculator experience with accuracy, speed, and ease of use.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-blue-50 text-blue-600 mb-4">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Featured Calculators */}
      <div className="bg-white py-16 border-b border-gray-200">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                {search.trim() ? `Search Results (${filteredCalculators.length})` : 'Featured Calculators'}
              </h2>
              <p className="text-gray-600">
                {search.trim() 
                  ? `Found ${filteredCalculators.length} calculator${filteredCalculators.length !== 1 ? 's' : ''} matching "${search}"`
                  : 'Most popular tools our users love'}
              </p>
            </div>
            {!search.trim() && (
              <Link href="/" className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1">
                View All <ArrowRight className="w-4 h-4" />
              </Link>
            )}
          </div>

          {/* Category Filters */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Browse by Category</h3>
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => {
                const Icon = cat.icon;
                const isSelected = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                      isSelected
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 hover:border-gray-400'
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isSelected ? 'text-current' : 'text-gray-500'}`} />
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredCalculators.length > 0 ? (
              featuredCalculators.map((calc) => (
              <Link key={calc.id} href={`/calculators/${calc.slug}`} className="group">
                <Card className="h-full hover:shadow-lg transition-all duration-300 cursor-pointer bg-white border-gray-200 flex flex-col overflow-hidden">
                  <div className={`h-2 w-full bg-gradient-to-r ${categories.find(c => c.id === calc.category)?.color || 'from-blue-500 to-indigo-500'}`} />
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg font-bold group-hover:text-blue-600 transition-colors text-gray-900">
                      {calc.title}
                    </CardTitle>
                    <CardDescription className="mt-2 line-clamp-2 text-sm leading-relaxed text-gray-600">
                      {calc.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto pt-0">
                     <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                       <span className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700 capitalize">
                         {calc.category}
                       </span>
                       <span className="text-xs font-semibold text-blue-600 flex items-center gap-1 group-hover:gap-2 transition-all">
                          Calculate <ArrowRight className="w-3 h-3" />
                       </span>
                     </div>
                  </CardContent>
                </Card>
              </Link>
              ))
            ) : (
              <div className="col-span-full text-center py-12 bg-gray-50 rounded-xl border border-dashed border-gray-300">
                <Calculator className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                <p className="text-lg font-semibold text-gray-900 mb-2">No calculators found</p>
                <p className="text-gray-600 mb-4">
                  No featured calculators available in the {categories.find(c => c.id === selectedCategory)?.label.toLowerCase()} category.
                </p>
                <button
                  onClick={() => setSelectedCategory('all')}
                  className="text-sm font-semibold text-blue-600 hover:text-blue-700"
                >
                  Show all calculators
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
