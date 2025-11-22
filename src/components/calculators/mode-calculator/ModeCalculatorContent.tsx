import React from 'react';

export default function ModeCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <meta name="description" content="Discover what the mode is, how to use our mode calculator, and explore examples and tips to utilize mode effectively in statistics." />
      
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">What is the Mode?</h2>
        <p className="mb-4 text-lg leading-7">
          The mode is the value that appears most frequently in a dataset. It is a measure of central tendency commonly used in statistics to identify the most common or typical value in a collection of observations. Unlike the mean or median, the mode can be used with nominal, ordinal, and numeric data. 
        </p>
        <p className="mb-4 text-lg leading-7">
          Being the only measure that can be employed with qualitative data, understanding mode is crucial when analyzing trends across various fields, including social sciences, marketing, and education.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">How This Mode Calculator Works</h2>
        <p className="mb-4 text-lg leading-7">
          Enter a list of numbers separated by commas (for example: <code className="font-mono">1, 2, 2, 3, 4</code>). The calculator will parse the values, count how often each value appears, and return the mode(s) along with their frequency. If multiple values are tied for the highest frequency, all tied values will be reported as modes.
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
          <p className="text-base text-gray-700">
            Note: Non-numeric entries are ignored. Use decimals where appropriate (for example, <code className="font-mono">2.5</code>).
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Examples of Mode Calculation</h2>
        <div className="space-y-4">
          <div className="bg-gray-50 border-l-4 border-blue-500 p-4 rounded-r">
            <p className="text-base font-mono text-gray-900">Input: 1, 2, 2, 3, 4, 4, 4, 5</p>
            <p className="text-base text-gray-700 mt-2">Output: Mode = 4 (occurs 3 times)</p>
          </div>

          <div className="bg-gray-50 border-l-4 border-blue-500 p-4 rounded-r">
            <p className="text-base font-mono text-gray-900">Input: 1, 1, 2, 2, 3</p>
            <p className="text-base text-gray-700 mt-2">Output: Modes = 1, 2 (each occurs 2 times) — this dataset is multimodal.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">When to Use the Mode in Statistics</h2>
        <p className="mb-4 text-lg leading-7">
          The mode is particularly useful when you want to know the most common category or value. It is the only measure of central tendency that applies to categorical data (for example, most common color, brand, or category). For numerical data, it can help identify peaks or repeated measurements in your dataset.
        </p>
        <p className="mb-4 text-lg leading-7">
          Use the mode to quickly ascertain trends in survey results, sales data, and other datasets where the frequency of occurrence is more critical than the average value.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Frequently Asked Questions about Mode</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">What if there are multiple modes?</h3>
            <p className="text-lg text-gray-700">If two or more values share the highest frequency, the dataset is multimodal and all such values are reported as modes.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900">What if values are non-numeric?</h3>
            <p className="text-lg text-gray-700">This calculator ignores non-numeric entries. If you need to compute the mode for categorical data (strings), use a similar approach but ensure that inputs are provided as categories without commas inside category names.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900">How are decimals handled?</h3>
            <p className="text-lg text-gray-700">Decimals are parsed as numeric values. For example, <code className="font-mono">2.0</code> and <code className="font-mono">2</code> are considered the same numeric value after parsing.</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Can the mode be used with categorical data?</h3>
            <p className="text-lg text-gray-700">Yes, the mode is ideal for analyzing categorical data, as it provides insight into the most frequently occurring category in your dataset.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Tips for Using the Mode Calculator</h2>
        <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
          <li>Clean your data before entering it — remove stray characters and ensure numbers are separated by commas.</li>
          <li>Use the chart toggle to visualize the frequency of each value to better understand distribution shapes.</li>
          <li>Download the result as a PDF for reporting or sharing using the "Download PDF" button.</li>
          <li>Consider combining mode analysis with other statistical measures for comprehensive insights.</li>
        </ul>
      </section>
      
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Use Cases of Mode in Data Analysis</h2>
        <p className="mb-4 text-lg leading-7">
          Understanding mode is beneficial in various fields, such as:
        </p>
        <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
          <li><strong>Market Research:</strong> Identify the most preferred product features among consumers.</li>
          <li><strong>Education:</strong> Analyze students' grades to discover the most frequently occurring score in class assessments.</li>
          <li><strong>Health:</strong> Determine the most common health issue reported in a survey.</li>
        </ul>
      </section>
    </article>
  );
}
