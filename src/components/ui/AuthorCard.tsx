import { Author } from '@/types';
import { Card, CardContent } from './Card';
import Image from 'next/image';
import Link from 'next/link';
import { Linkedin, Twitter, Globe } from 'lucide-react';

interface AuthorCardProps {
  author: Author;
}

export function AuthorCard({ author }: AuthorCardProps) {
  return (
    <Card className="mt-8 overflow-hidden bg-white border-gray-200 transition-shadow hover:shadow-md">
      <div className="h-24 bg-gradient-to-r from-blue-50 to-indigo-50" />
      <CardContent className="p-6 relative">
        <div className="absolute -top-12 left-6 h-24 w-24 overflow-hidden rounded-full border-4 border-white shadow-lg bg-white">
          <Image
            src={author.avatar}
            alt={author.name}
            fill
            className="object-cover"
          />
        </div>
        
        <div className="mt-12 pt-2 flex flex-col sm:flex-row sm:items-start justify-between gap-4">
          <div className="space-y-2">
            <div>
              <h3 className="text-xl font-bold text-gray-900">{author.name}</h3>
              <p className="text-sm font-medium text-blue-600">{author.role}</p>
            </div>
            <p className="text-base leading-relaxed text-gray-600 max-w-2xl">
              {author.bio}
            </p>
          </div>
          
          <div className="flex flex-col gap-3 shrink-0">
            <Link 
              href={`/authors/${author.slug}`}
              className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              View Full Profile
            </Link>
            <div className="flex gap-2 justify-center sm:justify-start">
              <button className="p-2 rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition-colors">
                <Twitter className="w-4 h-4" />
              </button>
              <button className="p-2 rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition-colors">
                <Linkedin className="w-4 h-4" />
              </button>
              <button className="p-2 rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition-colors">
                <Globe className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
