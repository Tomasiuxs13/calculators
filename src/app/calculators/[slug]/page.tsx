import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getCalculatorBySlug, calculators } from '@/config/calculators';
import { authors } from '@/config/authors';
import { AuthorCard } from '@/components/ui/AuthorCard';
import { ArrowRight } from 'lucide-react';
import Header from '@/components/Header';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return calculators.map((calc) => ({
    slug: calc.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const calculator = getCalculatorBySlug(slug);

  if (!calculator) {
    return {
      title: 'Calculator Not Found',
    };
  }

  return {
    title: calculator.meta.title,
    description: calculator.meta.description,
    keywords: calculator.meta.keywords,
  };
}

export default async function CalculatorPage({ params }: PageProps) {
  const { slug } = await params;
  const calculator = getCalculatorBySlug(slug);

  if (!calculator) {
    notFound();
  }

  const author = authors.find((a) => a.id === calculator.authorId);
  const CalculatorComponent = calculator.component;
  const ContentComponent = calculator.content;

  // JSON-LD Schema
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: calculator.title,
    description: calculator.description,
    applicationCategory: calculator.category,
    operatingSystem: 'Any',
    author: author ? {
      '@type': 'Person',
      name: author.name,
      jobTitle: author.role,
      url: `/authors/${author.slug}`,
    } : undefined,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: calculator.category,
        item: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/category/${calculator.category}`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: calculator.title,
        item: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/calculators/${calculator.slug}`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      
      <Header />
      
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav className="mb-8 flex items-center text-sm text-gray-500">
          <Link href="/" className="hover:text-gray-900 transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href={`/category/${calculator.category}`} className="capitalize text-gray-700 hover:text-gray-900 transition-colors">
            {calculator.category}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">
            {calculator.title}
          </span>
        </nav>

        <header className="mb-12 text-center">
          <span className="inline-block mb-4 rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600 capitalize">
            {calculator.category} Calculator
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl mb-6">
            {calculator.title}
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {calculator.description}
          </p>
        </header>

        <div className="space-y-12">
          {/* Calculator Section */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 sm:p-8">
            <CalculatorComponent />
          </div>

          {/* Related Calculators Section */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 sm:p-10">
            <h3 className="font-bold text-xl mb-6 text-gray-900">Related Calculators</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {calculators
                .filter(c => c.category === calculator.category && c.id !== calculator.id)
                .slice(0, 6)
                .map(c => (
                  <Link 
                    key={c.id}
                    href={`/calculators/${c.slug}`}
                    className="group block p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all"
                  >
                    <span className="block font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                      {c.title}
                    </span>
                    <span className="block text-sm text-gray-600 line-clamp-2">
                      {c.description}
                    </span>
                  </Link>
                ))}
              {calculators.filter(c => c.category === calculator.category && c.id !== calculator.id).length === 0 && (
                <p className="text-sm text-gray-500 col-span-full">No related calculators found.</p>
              )}
            </div>
            <div className="mt-6 pt-6 border-t border-gray-200 text-center">
              <Link href="/" className="text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1">
                View all calculators <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* SEO Content */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 sm:p-10">
            <ContentComponent />
          </div>

          {/* Author Section */}
          {author && (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 sm:p-10">
              <h3 className="text-lg font-semibold mb-6 text-gray-900">Meet the Expert</h3>
              <AuthorCard author={author} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
