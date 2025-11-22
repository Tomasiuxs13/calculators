import React from 'react';

export default function AgeDifferenceCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h1 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">Age Difference Calculator</h1>
        <p className="mb-4 text-lg leading-7">
          Use this calculator to quickly determine the age difference between two people based on their birth dates. It's useful for everyday planning, understanding generational gaps, or just satisfying your curiosity. 
          Knowing the age difference can help in various situations, such as planning birthday celebrations, arranging family gatherings, or simply indulging in trivia. This tool provides a quick and reliable solution for anyone wanting to know such details!
        </p>
        <p className="mb-4 text-lg leading-7">
          Enter the birth dates for Person 1 and Person 2. Results update automatically and include each person's age (in years, months, days) and the absolute difference expressed in years (decimal) and total days. With just a few clicks, you can gain insights into relationships, family dynamics, and more.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">How it Works: Age Difference Calculator</h2>
        <p className="mb-4 text-lg leading-7">
          The calculator computes each person's age relative to today, breaking the result down into years, months, and days. The age difference is calculated as the absolute difference between the two birth dates and shown both as total days and as decimal years (using the average year length of 365.2425 days). This approach ensures accuracy and clarity in results.
        </p>

        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">Age (years) ≈ years + (months / 12) + (days / 365.2425)</code>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Example Usage of the Age Difference Calculator</h2>
        <p className="mb-4 text-lg leading-7">
          If Person 1 was born on 1990-01-01 and Person 2 was born on 2000-01-01, the calculator will show:
        </p>
        <ul className="list-disc list-inside mb-4 text-lg">
          <li>Person 1 age: ~33 years (depending on current date)</li>
          <li>Person 2 age: ~23 years (depending on current date)</li>
          <li>Difference: 10.0000 years (≈) / 3652 days (approx.)</li>
        </ul>
        <p className="mb-4 text-lg leading-7">The chart visualizes the two ages and the difference in years for quick comparison, providing a clear understanding of the relationship dynamics.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Frequently Asked Questions (FAQ)</h2>

        <h3 className="text-xl font-medium mt-4">Q: Can I compare future birth dates?</h3>
        <p className="mb-4 text-lg leading-7">A: This tool is designed for real birth dates up to today. If a birth date in the future is entered, the calculator will not return a valid age for that person, helping you avoid inaccuracies in your planning.</p>

        <h3 className="text-xl font-medium mt-4">Q: How precise is the age difference?</h3>
        <p className="mb-4 text-lg leading-7">A: Ages are shown in years, months, and days for clarity. The age difference is provided as an exact day count and as a decimal year approximation using the average year length (365.2425 days). This precision helps in understanding relationships effectively.</p>

        <h3 className="text-xl font-medium mt-4">Q: Can I export the results?</h3>
        <p className="mb-4 text-lg leading-7">A: Yes — use the PDF download button to generate a simple report containing the input dates and computed results, making it easy to share and keep for future reference.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Tips for Using the Age Difference Calculator</h2>
        <ul className="list-disc list-inside mb-6 text-lg">
          <li>Use the date picker for accurate input and to avoid formatting issues, ensuring smooth usability.</li>
          <li>The chart provides a quick visual comparison; toggle charts on/off as needed to enhance your experience.</li>
          <li>For legal or medical calculations requiring exact precision (e.g., leap seconds or timezone-aware birth times), consult a specialist — this tool uses calendar dates and local time semantics for general use.</li>
          <li>Consider using this calculator for family interactions or even for understanding cultural celebrations based on age differences!</li>
        </ul>
      </section>
    </article>
  );
}
