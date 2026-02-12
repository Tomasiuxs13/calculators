import { MetadataRoute } from 'next';
import { calculators } from '@/config/calculators';
import { subcategories } from '@/types';
import { authors } from '@/config/authors';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const buildDate = new Date();

  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: buildDate,
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: buildDate,
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: buildDate,
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: buildDate,
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: buildDate,
      changeFrequency: 'monthly',
      priority: 0.3,
    },
  ];

  // Categories
  const categoryRoutes: MetadataRoute.Sitemap = Object.keys(subcategories).map((category) => ({
    url: `${baseUrl}/category/${category}`,
    lastModified: buildDate,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // Calculators
  const calculatorRoutes: MetadataRoute.Sitemap = calculators.map((calculator) => ({
    url: `${baseUrl}/calculators/${calculator.slug}`,
    lastModified: calculator.lastModified ? new Date(calculator.lastModified) : buildDate,
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  // Authors
  const authorRoutes: MetadataRoute.Sitemap = authors.map((author) => ({
    url: `${baseUrl}/authors/${author.slug}`,
    lastModified: buildDate,
    changeFrequency: 'monthly',
    priority: 0.5,
  }));

  return [...staticRoutes, ...categoryRoutes, ...calculatorRoutes, ...authorRoutes];
}
