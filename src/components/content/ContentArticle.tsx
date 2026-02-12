import { ReactNode } from 'react';

export function ContentArticle({ children }: { children: ReactNode }) {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      {children}
    </article>
  );
}
