import { ReactNode } from 'react';

interface ContentSectionProps {
  title: string;
  children: ReactNode;
}

export function ContentSection({ title, children }: ContentSectionProps) {
  return (
    <section>
      <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">{title}</h2>
      {children}
    </section>
  );
}
