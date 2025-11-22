import React from 'react';

export default function EnergyConsumptionCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">What is Household Energy Consumption?</h2>
        <p className="mb-4 text-lg leading-7">
          Household energy consumption describes how much electrical energy your appliances and devices use over time. It's commonly expressed in kilowatt-hours (kWh), which represents the use of one kilowatt (1000 watts) for one hour. Understanding your consumption helps manage costs and reduce your environmental impact.
        </p>
        <p className="mb-4 text-lg leading-7">
          This calculator estimates daily, monthly, and annual energy usage and costs based on the number of appliances, average wattage per appliance, hours used per day, and your electricity rate ($/kWh).
        </p>
        <p className="mb-4 text-lg leading-7">
          By keeping track of energy consumption in your household, you can identify which appliances use the most power and make informed decisions to reduce energy waste.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">How the Energy Consumption Calculator Works</h2>
        <p className="mb-4 text-lg leading-7">
          The calculation converts total wattage into kilowatt-hours (kWh) as the base energy unit, then uses your electricity rate to estimate costs. The conversion follows a simple formula:
        </p>

        <div className="bg-gray-50 border-l-4 border-emerald-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">Energy (kWh) = (Number of Appliances × Average Wattage (W) × Hours per Day) / 1000</code>
        </div>

        <p className="mb-4 text-lg leading-7">
          After computing daily kWh, the calculator multiplies by 30 for monthly and 365 for annual approximations, then multiplies kWh by your electricity rate to determine costs. Understanding these calculations can empower you to make changes aimed at saving money on your energy bills.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Example Calculation</h2>
        <p className="mb-4 text-lg leading-7">
          Suppose you have 10 appliances each averaging 1500 W used for 4 hours per day, and electricity costs $0.12/kWh. The daily energy use is:
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 my-4">
          <p className="text-base text-gray-700">Daily kWh = (10 × 1500 W × 4 h) / 1000 = 60 kWh</p>
          <p className="text-base text-gray-700 mt-2">Daily cost = 60 kWh × $0.12 = $7.20</p>
        </div>
        <p className="mb-4 text-lg leading-7">
          In this example, the total energy consumption for a month would amount to approximately 1800 kWh, and at the same electricity rate, your monthly energy cost would be $216.00.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Tips to Reduce Energy Consumption</h2>
        <ul className="list-disc pl-5 space-y-2 text-lg">
          <li>Replace old appliances with energy-efficient models (look for ENERGY STAR).</li>
          <li>Unplug devices when not in use to avoid phantom loads.</li>
          <li>Use programmable thermostats and LED lighting to optimize usage hours.</li>
          <li>Reduce usage hours where possible and consider smart power strips that cut off power when devices are not in use.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Use Cases for the Energy Consumption Calculator</h2>
        <p className="mb-4 text-lg leading-7">
          This calculator is useful for homeowners looking to:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-lg">
          <li>Evaluate energy costs associated with new appliances before purchasing.</li>
          <li>Track energy consumption trends over time to identify potential savings.</li>
          <li>Plan household budgets more effectively with precise energy spending calculations.</li>
          <li>Encourage environmentally friendly practices by showcasing the reduction in energy consumption.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Frequently Asked Questions about Energy Consumption</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold">Are these estimates exact?</h3>
            <p className="text-lg">No. These are estimates based on the values you provide. Real consumption can vary based on appliance efficiency, cycles, and standby usage.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Why do we divide by 1000?</h3>
            <p className="text-lg">Watt (W) is a unit of power. To convert watt-hours to kilowatt-hours (kWh), we divide watts by 1000 because 1 kW = 1000 W.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">How can I get more accurate results?</h3>
            <p className="text-lg">Measure actual wattage with a power meter for each appliance and track real usage hours. Use your utility bill to verify your electricity rate and monthly totals.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Author</h2>
        <p className="text-lg">Created by Eco Expert Sam — providing practical tools for household energy awareness and sustainability.</p>
      </section>
    </article>
  );
}
