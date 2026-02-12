'use client';

import { useState } from 'react';
import Link from 'next/link';
import { getCalculatorsByCategory, getCalculatorsBySubcategory } from '@/config/calculators';
import { subcategories, Category } from '@/types';
import { Breadcrumb } from '@/components/Breadcrumb';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import { ArrowRight, Calculator, Heart, DollarSign, GraduationCap, MoreHorizontal, Beaker, Wrench, Gauge, Leaf, Coffee, Atom, Trophy, BarChart3 } from 'lucide-react';

interface CategoryPageClientProps {
  category: Category;
}

const categoryIcons: Record<Category, React.ElementType> = {
  health: Heart,
  finance: DollarSign,
  math: GraduationCap,
  biology: Leaf,
  chemistry: Beaker,
  construction: Wrench,
  conversion: Gauge,
  ecology: Leaf,
  'everyday-life': Coffee,
  food: Coffee,
  physics: Atom,
  sports: Trophy,
  statistics: BarChart3,
  other: MoreHorizontal,
};

const categoryNames: Record<Category, string> = {
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

export default function CategoryPageClient({ category }: CategoryPageClientProps) {
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);

  const categorySubcategories = subcategories[category] || [];
  const Icon = categoryIcons[category] || Calculator;
  
  const calculators = selectedSubcategory
    ? getCalculatorsBySubcategory(category, selectedSubcategory)
    : getCalculatorsByCategory(category);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <Breadcrumb items={[
          { label: 'Home', href: '/' },
          { label: categoryNames[category] },
        ]} />

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 mb-4">
            <Icon className="w-8 h-8" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl mb-4">
            {categoryNames[category]} Calculators
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our collection of {categoryNames[category].toLowerCase()} calculators organized by subcategory.
          </p>
        </div>

        {/* Subcategories */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Browse by Subcategory</h2>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedSubcategory(null)}
              className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all ${
                selectedSubcategory === null
                  ? 'border-blue-500 bg-blue-50 text-blue-700'
                  : 'border-gray-300 bg-white text-gray-700 hover:border-gray-400 hover:bg-gray-50'
              }`}
            >
              <span className="flex items-center gap-2">
                <Calculator className={`w-4 h-4 ${selectedSubcategory === null ? 'text-blue-600' : 'text-gray-500'}`} />
                All {categoryNames[category]}
              </span>
            </button>
            
            {categorySubcategories.map((subcat) => {
              const isSelected = selectedSubcategory === subcat.id;
              const subcatCalculators = getCalculatorsBySubcategory(category, subcat.id);
              
              return (
                <button
                  key={subcat.id}
                  onClick={() => setSelectedSubcategory(subcat.id)}
                  className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all ${
                    isSelected
                      ? 'border-blue-500 bg-blue-50 text-blue-700'
                      : 'border-gray-300 bg-white text-gray-700 hover:border-gray-400 hover:bg-gray-50'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {subcat.name}
                    <span className={`text-xs font-medium px-1.5 py-0.5 rounded-full ${
                      isSelected
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {subcatCalculators.length}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Calculators Grid */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              {selectedSubcategory
                ? `${categorySubcategories.find(s => s.id === selectedSubcategory)?.name} Calculators`
                : `All ${categoryNames[category]} Calculators`}
            </h2>
            <span className="text-sm text-gray-600">
              {calculators.length} {calculators.length === 1 ? 'calculator' : 'calculators'}
            </span>
          </div>

          {calculators.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {calculators.map((calc) => (
                <Link key={calc.id} href={`/calculators/${calc.slug}`} className="group h-full">
                  <Card className="h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer bg-white border-gray-200 flex flex-col overflow-hidden">
                    <div className="h-2 w-full bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" />
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
                         {calc.subcategory && (
                           <span className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700">
                             {categorySubcategories.find(s => s.id === calc.subcategory)?.name || calc.subcategory}
                           </span>
                         )}
                         <span className="text-xs font-semibold text-blue-600 flex items-center gap-1 group-hover:gap-2 transition-all">
                            Calculate <ArrowRight className="w-3 h-3" />
                         </span>
                       </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-300">
              <Calculator className="mx-auto h-12 w-12 text-gray-400 mb-4" />
              <p className="text-xl font-semibold text-gray-900 mb-2">No calculators found</p>
              <p className="text-gray-600 mb-6">
                {selectedSubcategory
                  ? `No calculators available in this subcategory yet.`
                  : `No calculators available in this category yet.`}
              </p>
              <Link
                href="/"
                className="text-sm font-semibold text-blue-600 hover:text-blue-700"
              >
                Browse all calculators
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

