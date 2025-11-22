import React from 'react';

export default function QuartileCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">What are Quartiles?</h2>
        <p className="mb-4 text-lg leading-7">
          Quartiles are values that divide a dataset into four equal parts. They are commonly used in descriptive statistics to understand the distribution of data. The three quartiles are:
        </p>
        <ul className="list-disc ml-6 mb-4 text-lg">
          <li><strong>Q1 (First Quartile)</strong>: The median of the lower half of the dataset (25th percentile).</li>
          <li><strong>Q2 (Second Quartile)</strong>: The median of the dataset (50th percentile).</li>
          <li><strong>Q3 (Third Quartile)</strong>: The median of the upper half of the dataset (75th percentile).</li>
        </ul>
        <p className="mb-4 text-lg leading-7">
          Understanding quartiles is essential for data analysis, as they help in identifying the spread and skewness of the data. Each quartile represents a segment of the dataset, allowing analysts to see where data points lie in relation to the entire dataset.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">How the Calculator Works</h2>
        <p className="mb-4 text-lg leading-7">
          Enter a comma-separated list of numbers into the input. The calculator sorts the numbers and calculates quartiles automatically. For odd-sized datasets the median is excluded when computing Q1 and Q3; for even-sized datasets, the lower and upper halves are split evenly.
        </p>
        <p className="mb-4 text-lg leading-7">
          This tool simplifies the process by eliminating the need for manual calculations, which can be prone to error. Additionally, it allows users to process larger datasets effortlessly.
        </p>

        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">Q1 = median(lower half) | Q2 = median(all) | Q3 = median(upper half)</code>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Example of Quartiles Calculation</h2>
        <p className="mb-4 text-lg leading-7">
          For the dataset: <strong> 10, 20, 30, 40, 50, 60, 70, 80, 90, 100</strong>
        </p>
        <p className="mb-4 text-lg leading-7">
          Sorted data is the same. Q1 is the median of <em> 10,20,30,40,50</em> lower half (which gives 30), Q2 (median) is 55, and Q3 is the median of the upper half <em> 60,70,80,90,100</em> (which gives 80). The calculator will display these values and a small bar chart for quick comparison.
        </p>
        <p className="mb-4 text-lg leading-7">
          This example illustrates how quartiles divide the dataset into significant segments. By analyzing these segments, one can derive meaningful insights about the data distribution and make informed decisions based on statistical evidence.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Frequently Asked Questions About Quartiles</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold">What if my input contains invalid values?</h3>
            <p className="text-lg leading-7">
              The calculator ignores non-numeric tokens. If no numeric values remain after parsing, no result is shown. Make sure numbers are separated by commas.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Which method is used for quartiles?</h3>
            <p className="text-lg leading-7">
              This tool uses a common approach: sort the data, compute the median (Q2), then compute Q1 as the median of the lower half and Q3 as the median of the upper half. For odd-length datasets, the median value is excluded from the halves.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Can I download results?</h3>
            <p className="text-lg leading-7">
              Yes — use the PDF download button to save the input and quartile results as a simple report for sharing or documentation.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">How can I interpret the quartile results?</h3>
            <p className="text-lg leading-7">
              Quartile results provide critical insights regarding data distribution. For example, if Q1 is significantly lower than Q3, it may indicate a right skew in the data. Understanding these dynamics helps in making data-driven decisions.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Tips for Accurate Results with Quartiles</h2>
        <ul className="list-disc ml-6 mb-4 text-lg">
          <li>Ensure values are numeric and separated by commas.</li>
          <li>Remove any text or characters that are not part of the numbers.</li>
          <li>Large datasets are supported — the calculator operates on the sorted list in memory.</li>
          <li>Double-check your entries; small errors can lead to significant discrepancies in quartile calculations.</li>
          <li>Utilize the provided example datasets to familiarize yourself with the calculator's functionality.</li>
        </ul>
      </section>
    </article>
  );
}
