import React from 'react';

export default function PercentileCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h1 className="text-4xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">
          Percentile Calculator
        </h1>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
          What is Percentile Calculation?
        </h2>
        <p className="mb-4 text-lg leading-7">
          A percentile is a measure used in statistics indicating the value below which a given percentage of observations fall. For example, the 75th percentile is the value below which 75% of the data points lie. Understanding percentiles is crucial for analyzing data distributions and making informed decisions based on statistical data.
        </p>
        <p className="mb-4 text-lg leading-7">
          Our percentile calculator allows you to quickly calculate the percentile of a dataset, helping you to understand the distribution of your data. You can input a list of numbers and specify the desired percentile to get the result instantly. Percentile calculations are commonly used in various fields such as education, finance, and healthcare to interpret data effectively.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
          How to Use the Percentile Calculator
        </h2>
        <p className="mb-4 text-lg leading-7">
          To use the percentile calculator, simply enter your dataset as a comma-separated list in the input field. Then, specify the percentile you wish to calculate (between 0 and 100). The calculator will automatically compute the result based on your input, making it easy to interpret statistical data quickly.
        </p>
        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">
            Result = (Value at Percentile Position)
          </code>
        </div>
        <p className="mb-4 text-lg leading-7">
          For example, if you input the numbers "10, 20, 30, 40, 50" and specify the 75th percentile, the calculator will return the value that separates the lowest 75% of the data from the highest 25%. This makes it a valuable tool for anyone looking to make informed decisions based on data analysis.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
          Use Cases for the Percentile Calculator
        </h2>
        <p className="mb-4 text-lg leading-7">
          The percentile calculator can be beneficial in various situations, such as:
        </p>
        <ul className="mb-4 list-disc list-inside">
          <li>Analyzing test scores in educational settings to determine student performance relative to peers.</li>
          <li>Identifying sales performance levels within sales teams to motivate and set targets.</li>
          <li>Assisting healthcare professionals in determining patient BMI percentiles to assess health risks.</li>
          <li>Helping financial analysts judge investment performance in relation to market trends.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
          Frequently Asked Questions (FAQs)
        </h2>
        <h3 className="text-2xl font-semibold text-gray-900 mt-6 mb-2">
          What is the difference between percentile and percentage?
        </h3>
        <p className="mb-4 text-lg leading-7">
          Percentile indicates a relative standing in a dataset, while percentage simply denotes a portion of a whole. For example, being in the 90th percentile means you performed better than 90% of the dataset, whereas 50% means you have half of a whole.
        </p>
        <h3 className="text-2xl font-semibold text-gray-900 mt-6 mb-2">
          Why are percentiles important?
        </h3>
        <p className="mb-4 text-lg leading-7">
          Percentiles provide insights into the distribution of data, enabling better interpretations of scores, performances, and other metrics. They help stakeholders understand where they stand in relation to others, facilitating strategic decision-making.
        </p>
        <h3 className="text-2xl font-semibold text-gray-900 mt-6 mb-2">
          Can I calculate percentiles for any dataset?
        </h3>
        <p className="mb-4 text-lg leading-7">
          Yes, you can calculate percentiles for any dataset as long as it consists of numerical values. The dataset can range from small samples to larger populations, depending on your analysis needs.
        </p>
      </section>
    </article>
  );
}
