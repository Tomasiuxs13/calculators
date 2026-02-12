import { ReactNode } from 'react';

interface ContentExampleProps {
  title?: string;
  children: ReactNode;
}

export function ContentExample({ title = 'Example', children }: ContentExampleProps) {
  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
      <div className="text-base text-gray-700">
        <strong className="text-gray-900">{title}:</strong>
        <div className="mt-2">{children}</div>
      </div>
    </div>
  );
}
