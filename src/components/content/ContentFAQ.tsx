import { FAQItem } from '@/types';

interface ContentFAQProps {
  items: FAQItem[];
  title?: string;
}

export function ContentFAQ({ items, title = 'Frequently Asked Questions' }: ContentFAQProps) {
  return (
    <section>
      <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">{title}</h2>
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">{item.question}</h3>
            <p className="text-base text-gray-700">{item.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
