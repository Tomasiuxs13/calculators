import React from 'react';

export default function MileageCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h1 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Mileage Calculator</h1>
        <p className="mb-4 text-lg leading-7">
          Use the Mileage Calculator to quickly determine your vehicle's fuel efficiency (miles per gallon), the total fuel cost for a trip, and the cost per mile. This tool is ideal for trip planning, budgeting fuel expenses, or comparing vehicle efficiency. With rising fuel prices, evaluating your vehicle's performance and planning your travel costs has become more essential than ever. 
        </p>
        <p className="mb-4 text-lg leading-7">
          Whether you're planning a short weekend getaway or a long road trip, understanding the fuel consumption of your vehicle helps you save money and make informed decisions about your transportation options. 
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">How it works</h2>
        <p className="mb-4 text-lg leading-7">
          Enter the total distance traveled in miles, the amount of fuel used in gallons, and the current fuel price per gallon. The calculator auto-updates results as you type — no button required. This real-time calculation ensures you have the most accurate information available at your fingertips.
        </p>

        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">
            MPG = Distance ÷ Fuel Used
          </code>
          <div className="mt-2 text-sm text-gray-600">
            Cost per Mile = (Fuel Price × Fuel Used) ÷ Distance
          </div>
        </div>
        <p className="mb-4 text-lg leading-7">
          It’s important to have accurate inputs for the best output. Entering incorrect values could lead to misunderstanding your vehicle's efficiency and potentially impact your budgeting decisions.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Examples of Mileage Calculations</h2>
        <div className="space-y-3">
          <div>
            <p className="text-lg">Example 1 — Standard trip</p>
            <p className="text-gray-700">Distance: 100 miles, Fuel used: 5 gallons, Fuel price: $3.50/gal</p>
            <p className="text-gray-800 mt-1">Result: 20.00 mpg, Total cost: $17.50, Cost per mile: $0.175</p>
          </div>

          <div>
            <p className="text-lg">Example 2 — Long road trip</p>
            <p className="text-gray-700">Distance: 600 miles, Fuel used: 20 gallons, Fuel price: $4.00/gal</p>
            <p className="text-gray-800 mt-1">Result: 30.00 mpg, Total cost: $80.00, Cost per mile: $0.1333</p>
          </div>

          <div>
            <p className="text-lg">Example 3 — Short city trip</p>
            <p className="text-gray-700">Distance: 20 miles, Fuel used: 1 gallon, Fuel price: $3.00/gal</p>
            <p className="text-gray-800 mt-1">Result: 20.00 mpg, Total cost: $3.00, Cost per mile: $0.150</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Tips for Accurate Mileage Calculations</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Measure distance using your vehicle odometer or a reliable mapping tool.</li>
          <li>Record fuel used by noting odometer readings before and after filling, or use pump receipts for gallons purchased.</li>
          <li>Use the exact fuel price you pay at the pump to calculate accurate trip costs.</li>
          <li>Consider your vehicle's maintenance; a well-maintained car usually has better fuel efficiency.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium">Can I use this for electric vehicles?</h3>
            <p className="text-gray-700">This calculator is designed for liquid fuel (gallons) and miles per gallon. For electric vehicles, use range and energy consumption metrics (kWh per mile) and adapt the inputs accordingly. It’s essential to approach costs from a mileage standpoint for any vehicle type.</p>
          </div>

          <div>
            <h3 className="text-lg font-medium">What if I only know fuel price and miles?</h3>
            <p className="text-gray-700">You need fuel used (gallons) to compute mpg and cost per mile. If you know only price and miles, estimate gallons by dividing total fuel cost by price per gallon. This makes it critical to keep track of your expenses.</p>
          </div>

          <div>
            <h3 className="text-lg font-medium">Why is cost per mile useful?</h3>
            <p className="text-gray-700">Cost per mile helps compare overall running costs between vehicles and informs budgeting decisions for trips or fleet management. Understanding your expenses can help you make wiser financial decisions regarding travel and vehicle maintenance.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">SEO Summary of the Mileage Calculator</h2>
        <p className="text-gray-700">The Mileage Calculator allows you to calculate MPG, total fuel cost, and cost per mile quickly, making it an essential tool for effective trip planning and budgeting. With accurate, instant results, you can also download a PDF summary of your calculations for future reference.</p>
        <p className="text-gray-700">By utilizing this Mileage Calculator, you will gain insights into your vehicle’s efficiency, helping you reduce costs and streamline your travel plans.</p>
      </section>
    </article>
  );
}
