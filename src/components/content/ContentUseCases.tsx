interface UseCase {
  title: string;
  description: string;
}

interface ContentUseCasesProps {
  items: UseCase[];
  sectionTitle?: string;
}

export function ContentUseCases({ items, sectionTitle = 'Real-World Uses' }: ContentUseCasesProps) {
  return (
    <section>
      <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">{sectionTitle}</h2>
      <div className="grid md:grid-cols-2 gap-4 mt-6">
        {items.map((item, index) => (
          <div key={index} className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
            <p className="text-base text-gray-700">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
