interface ContentFormulaProps {
  formula: string;
  variables?: string;
}

export function ContentFormula({ formula, variables }: ContentFormulaProps) {
  return (
    <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
      <code className="text-base font-mono text-gray-900 block whitespace-pre-line">
        {formula}
        {variables && (
          <>
            <br />
            <span className="text-gray-600">{variables}</span>
          </>
        )}
      </code>
    </div>
  );
}
