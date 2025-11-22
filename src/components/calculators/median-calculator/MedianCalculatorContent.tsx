import React from 'react';

export default function MedianCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">
          What is Median?
        </h2>
        <p className="mb-4 text-lg leading-7">
          The median is the middle value in a data set when it's arranged in ascending or descending order. If the data set has an even number of observations, the median is the average of the two middle numbers. It's a useful measure of central tendency, especially in skewed distributions.
        </p>
        <p className="mb-4 text-lg leading-7">
          Understanding the median is crucial for data analysis as it provides insights that can sometimes be obscured by more commonly used averages like the mean. The median is less affected by outliers and extreme values, making it a more robust measure in many scenarios.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
          How to Calculate the Median
        </h2>
        <p className="mb-4 text-lg leading-7">
          To calculate the median, arrange your numbers in ascending order and identify the middle number. If there's an even number of observations, add the two middle numbers together and divide by two. This value represents the median of your data set.
        </p>
        <p className="mb-4 text-lg leading-7">
          For instance, if you have the data set &#123;2, 3, 5, 7, 11&#125;, the median is 5, as it&apos;s the middle value. However, for the data set &#123;2, 3, 5, 7&#125;, the median would be (3 + 5) / 2 = 4. The concept of the median is applicable in various fields such as economics, biology, and social sciences.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
          Use Cases of the Median
        </h2>
        <p className="mb-4 text-lg leading-7">
          Medians are widely used in statistics to summarize data sets. They are particularly useful in reporting income levels, home prices, and test scores where skewed distributions might misrepresent an average.
        </p>
        <p className="mb-4 text-lg leading-7">
          For example, in real estate, if a few properties are significantly more expensive than others, the mean price may suggest a higher baseline than many buyers would experience. In contrast, the median price offers a better representation of what a typical buyer might encounter in the market.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
          Frequently Asked Questions about Median
        </h2>
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">1. What is the difference between median and mean?</h3>
        <p className="mb-4 text-lg leading-7">
          The mean is the average of all numbers in a set, while the median is the middle value that separates the higher half from the lower half. In datasets with outliers, the median may be a more accurate reflection of the center of the data distribution.
        </p>
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">2. Can a data set have no median?</h3>
        <p className="mb-4 text-lg leading-7">
          Every data set with at least one number has a median. For data sets with an even number of observations, the median will be the average of the two middle numbers.
        </p>
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">3. How does the median help in decision-making?</h3>
        <p className="mb-4 text-lg leading-7">
          Medians provide a clearer picture of a data set’s tendencies, especially when considering actions based on statistics. By using the median, one can avoid misinterpretations that may arise from skewed data.
        </p>
      </section>
    </article>
  );
}
