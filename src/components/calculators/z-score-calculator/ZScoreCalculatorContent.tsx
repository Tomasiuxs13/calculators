import React from 'react';

export default function ZScoreCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <meta name="description" content="Calculate the Z-score with our calculator. Understand your data better with statistics and get accurate Z-scores." />
      
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">What is a Z-Score?</h2>
        <p className="mb-4 text-lg leading-7">
          A Z-score, also known as a standard score, indicates how many standard deviations an element is from the mean. It is a way to compare scores from different distributions or to understand how far a specific score is from the average.
        </p>
        <p className="mb-4 text-lg leading-7">
          The formula for calculating the Z-score is:
        </p>
        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">
            Z = (X - μ) / σ
          </code>
        </div>
        <p className="mb-4 text-lg leading-7">
          Where:<br />
          X = data value<br />
          μ = mean<br />
          σ = standard deviation
        </p>
        <p className="mb-4 text-lg leading-7">
          The Z-score is a crucial concept in statistics, widely used in hypothesis testing, control charts, and various statistical analyses. By transforming data into Z-scores, we can interpret the data more effectively in terms of its position relative to the mean.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">How to Use the Z-Score Calculator</h2>
        <p className="mb-4 text-lg leading-7">
          To calculate the Z-score using our calculator, simply input the data value, the mean of the dataset, and the standard deviation. The calculator will automatically compute the Z-score for you.
        </p>
        <p className="mb-4 text-lg leading-7">
          This tool is useful in statistics for understanding how a particular score compares to the rest of the dataset, especially in normal distributions. In practical applications, Z-scores are beneficial in fields like psychology, finance, and other sciences.
        </p>
      </section>
      
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Z-Score Calculator Use Cases</h2>
        <p className="mb-4 text-lg leading-7">
          The Z-score calculator serves various purposes in statistics. Here are some common use cases:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li className="text-lg leading-7">Comparing test scores from different tests or exams.</li>
          <li className="text-lg leading-7">Identifying outliers in data sets.</li>
          <li className="text-lg leading-7">Standardizing scores to understand distributions.</li>
          <li className="text-lg leading-7">Assessing probabilities in normal distributions.</li>
        </ul>
        <p className="mb-4 text-lg leading-7">
          Understanding Z-scores can help in recognizing how unusual or typical a score is, which is crucial for statistical analysis and decision-making.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Frequently Asked Questions (FAQs)</h2>
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">What does a Z-score of 0 mean?</h3>
        <p className="mb-4 text-lg leading-7">
          A Z-score of 0 indicates that the data point is exactly at the mean of the dataset.
        </p>
        
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">How do I interpret a positive Z-score?</h3>
        <p className="mb-4 text-lg leading-7">
          A positive Z-score means the data point is above the mean, while a negative Z-score indicates it is below the mean.
        </p>
        
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">Can Z-scores be used for non-normal distributions?</h3>
        <p className="mb-4 text-lg leading-7">
          While Z-scores are best interpreted in normal distributions, they can still give insights into the positions of data points in other distributions, particularly if transformed appropriately.
        </p>
      </section>
    </article>
  );
}
