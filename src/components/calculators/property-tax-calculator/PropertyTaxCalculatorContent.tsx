import React from 'react';

export default function PropertyTaxCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h1 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">Property Tax Calculator</h1>
        <p className="mb-4 text-lg leading-7">
          Use this Property Tax Calculator to estimate the annual property tax for a property. Enter the assessed property value and the local property tax rate (as a percentage). The calculator automatically computes the annual tax and provides a visual comparison between the property value and the tax amount. Understanding your property tax helps you budget better and plan for financial obligations.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">How it works</h2>
        <p className="mb-4 text-lg leading-7">
          The calculation is straightforward: multiply the assessed property value by the tax rate (expressed as a decimal). For example, a property with an assessed value of $300,000 and a tax rate of 1.2% would result in an annual tax of $3,600. Knowing how to perform this calculation helps homeowners understand their tax responsibilities better.
        </p>

        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">Annual Tax = Assessed Value × (Tax Rate ÷ 100)</code>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Example Calculation</h2>
        <p className="mb-4 text-lg leading-7">Example: Assessed Value = $300,000, Tax Rate = 1.2%</p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
          <p className="text-base text-gray-700"><strong>Calculation:</strong></p>
          <p className="mt-2 text-base text-gray-700">300,000 × (1.2 ÷ 100) = 300,000 × 0.012 = $3,600 per year</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Tips for Using the Property Tax Calculator</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>Make sure to use the assessed value, not the market value, unless your locality uses market value for taxation.</li>
          <li>Tax rates are commonly expressed per $100 or as a percentage. Ensure you enter the rate as a percentage (e.g., enter 1.2 for 1.2%).</li>
          <li>Contact your local tax assessor’s office for exact exemptions or special assessments that may reduce taxable value.</li>
          <li>Keep in mind that property tax rates can vary significantly from one locality to another. Always consult local regulations for the most accurate information.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Frequent Use Cases for the Property Tax Calculator</h2>
        <p className="mb-4 text-lg leading-7">Homeowners and prospective homebuyers often use this calculator to assess property costs. Real estate investors also benefit from understanding property tax implications on potential returns. Additionally, individuals planning to buy or sell a property can utilize this tool to negotiate effectively and ensure they understand their financial responsibilities.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Frequently Asked Questions About Property Tax</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium text-gray-900">Does this calculator include exemptions or deductions?</h3>
            <p className="text-base text-gray-700 mt-1">No. This calculator computes the basic annual tax from assessed value and tax rate. It does not apply exemptions (such as homestead exemptions), tax caps, or other local adjustments. Subtract those separately as applicable.</p>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-900">What if my tax rate is expressed per $100 of assessed value?</h3>
            <p className="text-base text-gray-700 mt-1">If your rate is expressed per $100 (for example, $1.20 per $100), convert it to a percentage by dividing by 100: $1.20 per $100 = 1.2%.</p>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-900">Can I use a different currency?</h3>
            <p className="text-base text-gray-700 mt-1">Yes. The calculator displays numeric results. For presentation, the UI formats values in USD by default; however, the numeric calculation is currency-agnostic — you can interpret the result in your local currency.</p>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-900">How often do property taxes change?</h3>
            <p className="text-base text-gray-700 mt-1">Property tax rates can change annually or biannually depending on local regulations. Always check with your local tax assessor’s office for the most current information.</p>
          </div>
        </div>
      </section>
    </article>
  );
}
