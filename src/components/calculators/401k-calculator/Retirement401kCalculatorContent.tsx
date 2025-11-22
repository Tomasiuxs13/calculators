import React from 'react';

export default function Retirement401kCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">What is a 401(k) Retirement Calculator?</h2>
        <p className="mb-4 text-lg leading-7">A 401(k) retirement calculator helps you estimate how much your retirement savings will grow over time based on your current balance, annual contributions, employer matches, and expected return rates. This tool is essential for planning your financial future and ensuring you have enough savings for retirement.</p>
        <p className="mb-4 text-lg leading-7">By inputting your current 401(k) balance, annual salary, contribution percentages, and expected return rates, you can see how your savings will accumulate over the years until retirement.</p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">How to Use the 401(k) Retirement Calculator</h2>
        <p className="mb-4 text-lg leading-7">To use the calculator, simply enter your current 401(k) balance, annual salary, your contribution percentage, employer match percentage, expected return rate, and the number of years until retirement. The calculator will automatically compute your future value based on these inputs.</p>
        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">Future Value = Current Balance * (1 + Rate) ^ Years + Annual Contribution * (((1 + Rate) ^ Years - 1) / Rate)</code>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">FAQs</h2>
        <p className="mb-4 text-lg leading-7">Here are some frequently asked questions about 401(k) retirement savings:</p>
        <ul className="list-disc list-inside mb-4">
          <li className="mb-2">What is a 401(k)? A 401(k) is a retirement savings plan sponsored by an employer that allows employees to save and invest a portion of their paycheck before taxes are taken out.</li>
          <li className="mb-2">How much should I contribute to my 401(k)? Financial experts recommend contributing at least enough to get the full employer match, if available, and aim for 10-15% of your salary if possible.</li>
          <li className="mb-2">What happens to my 401(k) if I change jobs? You can typically roll over your 401(k) into a new employer's plan or into an individual retirement account (IRA) without incurring taxes.</li>
        </ul>
      </section>
    </article>
  );
}