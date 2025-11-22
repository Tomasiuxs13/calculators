import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import CategoryPageClient from '@/components/CategoryPageClient';
import { subcategories, Category } from '@/types';

interface PageProps {
  params: Promise<{ category: string }>;
}

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

export async function generateStaticParams() {
  return Object.keys(subcategories).map((category) => ({
    category,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category } = await params;
  
  if (!(category in subcategories)) {
    return {
      title: 'Category Not Found',
    };
  }

  const categoryName = categoryNames[category as Category];

  return {
    title: `${categoryName} Calculators - Free Online Tools`,
    description: `Browse our collection of ${categoryName.toLowerCase()} calculators organized by subcategory.`,
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { category } = await params;
  
  if (!(category in subcategories)) {
    notFound();
  }

  return <CategoryPageClient category={category as Category} />;
}
