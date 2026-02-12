import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getCalculatorBySlug, calculators } from '@/config/calculators';
import { authors } from '@/config/authors';
import { AuthorCard } from '@/components/ui/AuthorCard';
import { Breadcrumb } from '@/components/Breadcrumb';
import { ContentFAQ } from '@/components/content';
import { ArrowRight } from 'lucide-react';
import Header from '@/components/Header';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

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
    alternates: {
      canonical: `${baseUrl}/calculators/${calculator.slug}`,
    },
    openGraph: {
      title: calculator.meta.title,
      description: calculator.meta.description,
      url: `${baseUrl}/calculators/${calculator.slug}`,
      type: 'website',
      siteName: 'Calculators',
    },
    twitter: {
      card: 'summary_large_image',
      title: calculator.meta.title,
      description: calculator.meta.description,
    },
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

  // Related calculators: same category (excluding self)
  const sameCategoryCalcs = calculators
    .filter(c => c.category === calculator.category && c.id !== calculator.id)
    .slice(0, 6);

  // Cross-category related calculators from relatedSlugs
  const crossCategoryCalcs = (calculator.relatedSlugs || [])
    .map(s => calculators.find(c => c.slug === s))
    .filter((c): c is NonNullable<typeof c> => c != null && c.category !== calculator.category)
    .slice(0, 4);

  // JSON-LD: WebApplication Schema
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: calculator.title,
    url: `${baseUrl}/calculators/${calculator.slug}`,
    description: calculator.description,
    applicationCategory: calculator.category,
    operatingSystem: 'Any',
    ...(calculator.lastModified && { dateModified: calculator.lastModified }),
    author: author ? {
      '@type': 'Person',
      name: author.name,
      jobTitle: author.role,
      url: `${baseUrl}/authors/${author.slug}`,
    } : undefined,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  };

  // JSON-LD: BreadcrumbList Schema
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: baseUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: calculator.category,
        item: `${baseUrl}/category/${calculator.category}`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: calculator.title,
        item: `${baseUrl}/calculators/${calculator.slug}`,
      },
    ],
  };

  // JSON-LD: FAQPage Schema (for rich snippets)
  const faqJsonLd = calculator.faq && calculator.faq.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: calculator.faq.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  } : null;

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
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      <Header />

      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <Breadcrumb items={[
          { label: 'Home', href: '/' },
          { label: calculator.category, href: `/category/${calculator.category}` },
          { label: calculator.title },
        ]} />

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
            <h2 className="font-bold text-xl mb-6 text-gray-900">Related Calculators</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sameCategoryCalcs.map(c => (
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
              {sameCategoryCalcs.length === 0 && (
                <p className="text-sm text-gray-500 col-span-full">No related calculators found.</p>
              )}
            </div>
            <div className="mt-6 pt-6 border-t border-gray-200 text-center">
              <Link href="/" className="text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1">
                View all calculators <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* Cross-Category Related Calculators */}
          {crossCategoryCalcs.length > 0 && (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 sm:p-10">
              <h2 className="font-bold text-xl mb-6 text-gray-900">You Might Also Like</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {crossCategoryCalcs.map(c => (
                  <Link
                    key={c.id}
                    href={`/calculators/${c.slug}`}
                    className="group block p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all"
                  >
                    <span className="inline-block mb-2 rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600 capitalize">
                      {c.category}
                    </span>
                    <span className="block font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                      {c.title}
                    </span>
                    <span className="block text-sm text-gray-600 line-clamp-2">
                      {c.description}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* SEO Content */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 sm:p-10">
            <ContentComponent />
          </div>

          {/* FAQ Section from Config (structured data source) */}
          {calculator.faq && calculator.faq.length > 0 && (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 sm:p-10">
              <ContentFAQ items={calculator.faq} />
            </div>
          )}

          {/* Author Section */}
          {author && (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 sm:p-10">
              <h2 className="text-lg font-semibold mb-6 text-gray-900">Meet the Expert</h2>
              <AuthorCard author={author} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
