import { MetadataRoute } from 'next';
import { calculators } from '@/config/calculators';
import { subcategories } from '@/types';
import { authors } from '@/config/authors';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

  // Static routes
  const routes = [
    '',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 1,
  }));

  // Categories
  const categoryRoutes = Object.keys(subcategories).map((category) => ({
    url: `${baseUrl}/category/${category}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Calculators
  const calculatorRoutes = calculators.map((calculator) => ({
    url: `${baseUrl}/calculators/${calculator.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));
  
  // Authors
  const authorRoutes = authors.map((author) => ({
    url: `${baseUrl}/authors/${author.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }));

  return [...routes, ...categoryRoutes, ...calculatorRoutes, ...authorRoutes];
}

