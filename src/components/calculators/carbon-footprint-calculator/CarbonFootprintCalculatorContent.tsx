import React from 'react';

export default function CarbonFootprintCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h1 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Carbon Footprint Calculator</h1>
        <p className="mb-4 text-lg">
          Use this calculator to estimate your monthly and annual carbon dioxide equivalent (CO₂e) emissions from common household sources: electricity, natural gas, and personal vehicle travel. Enter your typical monthly usage and vehicle fuel efficiency to get an immediate estimate and a visual breakdown of your carbon footprint.
        </p>
        <p className="mb-4 text-lg">
          Understanding your carbon footprint is essential in today's world, as everyone has a role to play in combating climate change. By using this tool, you can gain insights into how your daily activities impact the environment and identify potential changes to reduce your emissions significantly.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mt-6">How the Carbon Footprint Calculator Works</h2>
        <p className="mb-4 text-lg">
          Each input is converted to a base unit of kilograms of CO₂ equivalent (kg CO₂e) using standard emission factors. The monthly values are summed to produce a monthly total, and the annual total is estimated by multiplying the monthly total by 12.
        </p>

        <div className="bg-gray-50 border-l-4 border-green-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">
            Monthly Emissions (kg CO₂e) = (Electricity kWh × EF_elec) + (Gas therms × EF_gas) + ((Miles / MPG) × EF_gasoline)
          </code>
        </div>

        <p className="mb-4 text-lg">
          Example emission factors used in this tool (you can find region-specific factors from your utility or national inventories):
        </p>
        <ul className="list-disc pl-6 text-lg mb-4">
          <li>Electricity: 0.453 kg CO₂e per kWh</li>
          <li>Natural gas: 5.3 kg CO₂e per therm</li>
          <li>Gasoline: 8.887 kg CO₂e per gallon</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mt-6">Quick Example of Your Carbon Footprint</h2>
        <p className="mb-4 text-lg">
          If your household uses 500 kWh/month, 50 therms/month, and you drive 1,000 miles/month in a car averaging 25 MPG:
        </p>
        <ol className="list-decimal pl-6 text-lg mb-4">
          <li>Electricity: 500 × 0.453 = 226.5 kg CO₂e/month</li>
          <li>Gas: 50 × 5.3 = 265 kg CO₂e/month</li>
          <li>Driving: (1000 / 25) × 8.887 = 355.48 kg CO₂e/month</li>
        </ol>
        <p className="mb-4 text-lg">
          Monthly total ≈ 847 kg CO₂e → Annual ≈ 10,164 kg CO₂e (≈ 10.16 t CO₂e). This example illustrates how typical household activities can quickly add up, underscoring the importance of tracking and managing your carbon emissions.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mt-6">Interpreting Your Results</h2>
        <p className="mb-4 text-lg">
          kg CO₂e (kilograms of CO₂ equivalent) is a mass unit describing greenhouse gas emissions. For a higher-level comparison, switch to tonnes (t CO₂e) where 1 tonne = 1,000 kg.
        </p>
        <p className="mb-4 text-lg">
          Use the breakdown chart to see which activities contribute most to your footprint, allowing you to prioritize actions like improving home energy efficiency, switching to low-carbon electricity, or reducing vehicle travel and improving fuel efficiency. Incremental changes can lead to significant reductions in your overall carbon footprint.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mt-6">Frequently Asked Questions about Carbon Footprint</h2>

        <h3 className="text-xl font-medium mt-4">How accurate is this carbon footprint calculator?</h3>
        <p className="mb-4 text-lg">
          This calculator provides an estimate using average emission factors. Actual emissions vary by location (electricity grid mix), vehicle type, driving conditions, and fuel type. For precise accounting, use region-specific emission factors and measured consumption data for the most reliable results.
        </p>

        <h3 className="text-xl font-medium mt-4">Can I use different emission factors for a more precise carbon footprint?</h3>
        <p className="mb-4 text-lg">
          The tool uses standard default factors. For more accurate results, update the factors to match your local utility or national inventory values — consult your energy provider or governmental greenhouse gas inventory data for tailored information.
        </p>

        <h3 className="text-xl font-medium mt-4">What practical steps can I take to reduce my carbon footprint?</h3>
        <p className="mb-4 text-lg">
          Common measures include improving home insulation and heating efficiency, switching to renewable electricity sources, reducing personal vehicle travel, using public transport, carpooling, and replacing high-consumption vehicles with more efficient or electric models. Advocacy for sustainable practices in your community can also amplify your impact.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mt-6">Additional Resources for Understanding Carbon Footprint</h2>
        <ul className="list-disc pl-6 text-lg">
          <li>Local utilities for electricity emission factors</li>
          <li>National greenhouse gas inventories for up-to-date factors</li>
          <li>EPA or equivalent agencies for guidance on emission factors and accounting</li>
          <li>Online communities and forums focused on sustainability and reducing carbon footprints</li>
          <li>Books and articles on ecological impact and sustainable living practices</li>
        </ul>
      </section>
    </article>
  );
}
