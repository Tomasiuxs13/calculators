interface Term {
  term: string;
  definition: string;
}

interface ContentTermsListProps {
  items: Term[];
  title?: string;
}

export function ContentTermsList({ items, title }: ContentTermsListProps) {
  return (
    <section>
      {title && <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-6">{title}</h3>}
      <ul className="space-y-3 mb-6 list-none">
        {items.map((item, index) => (
          <li key={index} className="text-lg flex items-start">
            <span className="font-bold text-gray-900 mr-2">{item.term}:</span>
            <span>{item.definition}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
