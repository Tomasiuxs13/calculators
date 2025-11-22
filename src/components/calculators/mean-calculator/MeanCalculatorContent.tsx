import React from 'react';

export default function MeanCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">
          What is the Mean (Average)?
        </h2>
        <p className="mb-4 text-lg leading-7">
          The mean, or average, is the sum of a collection of numbers divided by the count of numbers in the collection. It's a measure of central tendency in statistics, providing an insight into the 'central' value of a dataset. Understanding the mean is essential for analyzing data, as it gives a single value that represents the entire dataset.
        </p>
        <p className="mb-4 text-lg leading-7">
          The mean is widely used in everyday life and various fields such as education, business, and social sciences. It helps individuals and organizations make informed decisions based on statistical data. 
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
          How to Calculate the Mean
        </h2>
        <p className="mb-4 text-lg leading-7">
          To calculate the mean of a set of numbers, sum up all the numbers and then divide by the count of numbers. This calculator simplifies the process by automatically calculating the mean of any set of comma-separated numbers you input.
        </p>
        <p className="mb-4 text-lg leading-7">
          The formula for calculating the mean can be expressed mathematically as:
        </p>
        <p className="mb-4 text-lg leading-7">
          <strong>Mean (μ) = (Σxi) / N</strong>
        </p>
        <p className="mb-4 text-lg leading-7">
          Where:
        </p>
        <ul className="list-disc list-inside mb-4 text-lg leading-7">
          <li><strong>Σxi</strong> represents the sum of all data points.</li>
          <li><strong>N</strong> is the total number of data points.</li>
        </ul>
        <p className="mb-4 text-lg leading-7">
          For example, if you have the numbers 2, 4, 6, 8, and 10, the sum is 30 and since there are 5 numbers, the mean would be 30 / 5 = 6.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
          Examples and Uses of the Mean
        </h2>
        <p className="mb-4 text-lg leading-7">
          Mean calculation is crucial in various fields such as education, where it's used to calculate average grades, in finance to determine average returns, and in data analysis to understand datasets. 
        </p>
        <p className="mb-4 text-lg leading-7">
          Some practical examples include:
        </p>
        <ul className="list-disc list-inside mb-4 text-lg leading-7">
          <li>Calculating the average temperature over a week to assess climate patterns.</li>
          <li>Evaluating the average scores in a class to determine overall performance.</li>
          <li>Analyzing sales data to find the average revenue over a quarter.</li>
          <li>Computing average monthly expenses to budget effectively.</li>
        </ul>
        <p className="mb-4 text-lg leading-7">
          The mean provides a simple way to understand complex information and simplifies the comparative analysis between different datasets. However, it is important to be cautious, as the mean can be disproportionately affected by outliers or extreme values in a dataset.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
          FAQs About the Mean
        </h2>
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">1. What is the difference between mean, median, and mode?</h3>
          <p className="mb-4 text-lg leading-7">
            The mean is the average of the numbers, the median is the middle value when numbers are arranged in order, and the mode is the number that appears most frequently. Each measure provides different insights about a dataset.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">2. Can the mean be a decimal?</h3>
          <p className="mb-4 text-lg leading-7">
            Yes, the mean can be a decimal if the summed values do not evenly divide, which is common with numerical data.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">3. What should I do if my data has extremes?</h3>
          <p className="mb-4 text-lg leading-7">
            In such cases, you might want to consider using the median instead of the mean, as the median is less affected by outliers and may provide a more accurate reflection of the dataset.
          </p>
        </div>
      </section>
    </article>
  );
}
