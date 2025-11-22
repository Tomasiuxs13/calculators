import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getAuthorBySlug, authors } from '@/config/authors';
import { getCalculatorsByAuthor } from '@/config/calculators';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import { ArrowRight, Linkedin, Twitter, Globe, Calculator } from 'lucide-react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return authors.map((author) => ({
    slug: author.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);

  if (!author) {
    return {
      title: 'Author Not Found',
    };
  }

  return {
    title: `${author.name} - ${author.role}`,
    description: author.bio,
  };
}

export default async function AuthorPage({ params }: PageProps) {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);

  if (!author) {
    notFound();
  }

  const authorCalculators = getCalculatorsByAuthor(author.id);

  // JSON-LD Schema for Author (Person)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: author.name,
    jobTitle: author.role,
    description: author.bio,
    image: author.avatar,
    url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/authors/${author.slug}`,
    worksFor: {
      '@type': 'Organization',
      name: 'Omni-Style Calculators',
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <nav className="mb-8 flex items-center text-sm text-gray-500">
          <Link href="/" className="hover:text-gray-900 transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="font-medium text-gray-700">Authors</span>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">
            {author.name}
          </span>
        </nav>

        <div className="bg-white rounded-2xl p-8 mb-12 shadow-lg border border-gray-200 overflow-hidden relative">
           <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-blue-50 to-indigo-50" />
          <div className="relative flex flex-col md:flex-row items-center md:items-end gap-8 mt-12">
            <div className="relative h-40 w-40 shrink-0 overflow-hidden rounded-full border-4 border-white shadow-xl bg-white -mt-20 md:mb-0">
              <Image
                src={author.avatar}
                alt={author.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="text-center md:text-left space-y-4 flex-1 pb-2">
              <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4">
                <div>
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                    {author.name}
                    </h1>
                    <p className="text-xl text-blue-600 font-medium mt-1">
                    {author.role}
                    </p>
                </div>
                 <div className="flex gap-2 justify-center md:justify-start">
                    <button className="p-2 rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition-colors">
                        <Twitter className="w-5 h-5" />
                    </button>
                    <button className="p-2 rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition-colors">
                        <Linkedin className="w-5 h-5" />
                    </button>
                    <button className="p-2 rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition-colors">
                        <Globe className="w-5 h-5" />
                    </button>
                </div>
              </div>
              <p className="text-lg leading-relaxed text-gray-600 max-w-3xl">
                {author.bio}
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                <Calculator className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Calculators by {author.name}</h2>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {authorCalculators.map((calc) => (
            <Link key={calc.id} href={`/calculators/${calc.slug}`} className="group h-full">
              <Card className="h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer bg-white border-gray-200 flex flex-col">
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
                        Use Tool <ArrowRight className="w-3 h-3" />
                     </span>
                   </div>
                </CardContent>
              </Card>
            </Link>
          ))}
          
          {authorCalculators.length === 0 && (
            <div className="col-span-full py-12 text-center bg-white rounded-xl border border-dashed border-gray-300">
                <p className="text-gray-600">No calculators found for this author yet.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
