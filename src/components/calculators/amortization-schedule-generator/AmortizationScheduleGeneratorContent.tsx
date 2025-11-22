import React from 'react';

export default function AmortizationScheduleGeneratorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">Amortization Schedule Generator</h2>
        <p className="mb-4 text-lg leading-7">
          An amortization schedule breaks down each loan payment into interest and principal components, showing how your loan balance decreases over time. Use this tool to generate a full schedule for mortgages, auto loans, personal loans, or any fixed-rate loan. 
        </p>
        <p className="mb-4 text-lg leading-7">
          Enter the loan amount, annual interest rate, and loan term to see the periodic payment amount, total interest paid, and a detailed payment-by-payment schedule. You can also view a chart of the remaining balance over the life of the loan and download the results as a PDF. 
        </p>
        <p className="mb-4 text-lg leading-7">
          This generator is helpful for both individual borrowers and real estate professionals looking to evaluate different loan scenarios quickly. Understanding how your payments are structured can assist you in making informed financial decisions.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">How the Amortization Schedule Generator Works</h2>
        <p className="mb-4 text-lg leading-7">
          The calculator uses the standard fixed-rate loan formula to compute the periodic payment:
        </p>

        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">
            Payment = P × r × (1+r)^n / ((1+r)^n - 1)
          </code>
        </div>

        <p className="mb-4 text-lg leading-7">
          Where:
        </p>
        <ul className="list-disc pl-5 mb-4 text-lg">
          <li>P = Principal (loan amount)</li>
          <li>r = periodic interest rate (annual rate / payments per year)</li>
          <li>n = total number of payments (years × payments per year)</li>
        </ul>

        <p className="mb-4 text-lg leading-7">
          After computing the periodic payment, the schedule is generated period-by-period, calculating interest on the remaining balance and subtracting principal paid until the balance reaches zero. This method ensures accurate tracking of your debt repayment.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Example of an Amortization Schedule</h2>
        <p className="mb-4 text-lg leading-7">
          Suppose you borrow $200,000 at 4.5% annual interest for 30 years with monthly payments. The generator will compute the monthly payment and provide a full 360-payment schedule showing how each payment splits between interest and principal, and how the balance declines each year.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
          <p className="text-base text-gray-700">
            Quick example output highlights:
          </p>
          <ul className="list-disc pl-5 mt-2 text-base text-gray-700">
            <li>Periodic payment amount (e.g., monthly)</li>
            <li>Total interest paid over life of loan</li>
            <li>Full payment schedule with payment number, principal, interest, and remaining balance</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Useful Tips for Using the Amortization Schedule Generator</h2>
        <ul className="list-disc pl-5 mb-4 text-lg">
          <li>Make extra payments toward principal to reduce total interest and shorten the loan term.</li>
          <li>Compare different payment frequencies (monthly, biweekly) — more frequent payments can slightly reduce interest over time.</li>
          <li>Use the PDF export to save or print the full amortization schedule for record-keeping or analysis.</li>
          <li>Consider adjusting variables like loan amounts and rates to see how they affect the overall payment structure.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Frequently Asked Questions about Amortization Schedule Generator</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold">What is amortization?</h3>
            <p className="text-lg">Amortization is the process of paying off a debt over time through regular payments. Each payment covers interest and reduces the principal.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Does making extra payments help?</h3>
            <p className="text-lg">Yes. Extra payments applied to principal reduce the outstanding balance, which reduces interest accrual and can shorten the loan term.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Why might my actual loan differ from this schedule?</h3>
            <p className="text-lg">Lenders may have different day-count conventions, fees, escrow payments, or rounding rules. This calculator assumes a standard fixed-rate loan without additional fees.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Can I use this tool for any type of loan?</h3>
            <p className="text-lg">Yes, while it's designed primarily for fixed-rate loans like mortgages, you can adapt it for auto loans and personal loans as long as the interest rate structure is fixed.</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold">How do I interpret the amortization schedule results?</h3>
            <p className="text-lg">The schedule will show each payment's allocation between interest and principal, as well as the decreasing balance after each payment. This gives insight into how quickly you're paying down your debt.</p>
          </div>
        </div>
      </section>
    </article>
  );
}
