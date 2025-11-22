import React from 'react';

const CalculatorContent = () => {
  return (
    <article className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">10K Time Calculator</h1>
      <section>
        <h2 className="text-xl font-semibold mb-2">What is a 10K Time Calculator?</h2>
        <p>
          A 10K time calculator is a tool used by runners and athletes to predict their 
          potential finishing times for a 10-kilometer race. The calculator typically 
          uses various inputs, such as current running times over shorter distances, to 
          provide an estimate of expected performance. This prediction can help runners 
          establish training goals, improve their pacing strategies, and track progress 
          over time.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">How to Calculate Your 10K Time</h2>
        <p>
          To effectively use the 10K time calculator, you need to provide your recent 
          race times for shorter distances, like 5K or 1 mile. The calculator will use 
          these inputs to project an accurate estimate of your 10K time. It's important 
          to ensure that your previous times are from races that were flat and similar 
          in conditions to ensure a precise prediction.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">10K Time Calculation Formula</h2>
        <pre className="bg-gray-50 border-l-4 border-blue-500 p-4">
          {`10K Time = (Previous Time * 10K Distance) / Distance of Previous Race
For example, if you ran a 5K in 25 minutes:
10K Time = (25 * 10) / 5 = 50 minutes`}
        </pre>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Worked Examples</h2>

        <div className="bg-blue-50 border border-blue-200 p-4 mb-4">
          <h3 className="font-semibold">Example 1</h3>
          <p>
            If a runner completes a 5K in 20 minutes, we can calculate their 10K time as follows:
            <pre>{`10K Time = (20 * 10) / 5 = 40 minutes`}</pre>
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-200 p-4">
          <h3 className="font-semibold">Example 2</h3>
          <p>
            A runner finishes a 1-mile race in 6 minutes. The calculation would be:
            <pre>{`10K Time = (6 * 10) / 1.57 ≈ 38.3 minutes`}</pre>
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Real World Uses of a 10K Time Calculator</h2>
        <p>
          Many runners utilize the 10K time calculator for various reasons, such as 
          setting personal records, preparing for local competitions, or mapping out 
          training plans. Coaches also find this a helpful tool to assess athletes' 
          progress, while recreational runners use it to motivate themselves to achieve 
          a certain time goal.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Frequently Asked Questions (FAQ)</h2>
        <ul className="list-disc pl-5">
          <li>What is a good 10K time for beginners?</li>
          <li>How does terrain affect 10K time predictions?</li>
          <li>Can I improve my 10K time in a short period?</li>
          <li>What factors should I consider for accurate predictions?</li>
          <li>Is it better to run long distances or speed intervals for training?</li>
          <li>How does weather impact race times?</li>
        </ul>
      </section>
    </article>
  );
};

export default CalculatorContent;