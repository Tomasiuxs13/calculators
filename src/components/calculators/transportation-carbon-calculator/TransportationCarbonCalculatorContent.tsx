import React from 'react';

export default function TransportationCarbonCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h1 className="text-4xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">
          Transportation Carbon Calculator
        </h1>
        <p className="mb-4 text-lg leading-7">
          Use our comprehensive Transportation Carbon Calculator to estimate the carbon dioxide (CO2) emissions produced by your personal vehicle travel. This tool makes it easy to understand the impact of your driving habits. By entering your annual mileage, your vehicle's fuel economy (in miles per gallon), and selecting the fuel type, you can instantly receive valuable insights into your annual emissions, displayed in both kilograms and metric tonnes, along with emissions per mile.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Calculate Carbon Emissions from Transportation</h2>
        <p className="mb-4 text-lg leading-7">
          The calculator supports various vehicle types, including gasoline, diesel, and electric vehicles. For electric vehicles, we use an assumed average electricity consumption and grid emission intensity, allowing for accurate CO2 emissions estimates that account for electricity generation.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">How the Calculation Works</h2>
        <p className="mb-4 text-lg leading-7">
          For liquid fuels (gasoline and diesel), the calculator follows this simple process:
        </p>
        <div className="bg-gray-50 border-l-4 border-green-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">
            gallons = milesDriven / mpg
            <br />
            kgCO2 = gallons × emissionFactor (kg CO2 per gallon)
            <br />
            tonnes = kgCO2 / 1000
          </code>
        </div>

        <p className="mb-4 text-lg leading-7">For electric vehicles:</p>
        <div className="bg-gray-50 border-l-4 border-green-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">
            kWh = milesDriven × kWhPerMile
            <br />
            kgCO2 = kWh × gridEmissionFactor (kg CO2 per kWh)
            <br />
            tonnes = kgCO2 / 1000
          </code>
        </div>

        <p className="mb-4 text-lg leading-7">
          These formulas effectively convert your driving activity into a standardized greenhouse gas metric, enabling you to compare different vehicle types and driving behaviors on equal footing.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Example of Transportation Carbon Emissions</h2>
        <p className="mb-4 text-lg leading-7">
          For instance, if you drive 12,000 miles per year in a gasoline car with a fuel efficiency of 25 mpg, here’s how your emissions would break down:
        </p>
        <ul className="list-disc pl-6 mb-4 text-lg">
          <li>Gallons used = 12,000 / 25 = 480 gallons</li>
          <li>Using ~8.887 kg CO2 per gallon, the annual estimate is: 480 × 8.887 ≈ 4,266 kg CO2 (approximately 4.266 t CO2)</li>
          <li>Per mile emissions ≈ 0.3555 kg CO2/mile</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Frequently Asked Questions about Transportation Carbon</h2>

        <div>
          <h3 className="text-xl font-semibold mt-4">Are these values exact?</h3>
          <p className="mb-4 text-lg leading-7">
            No, the calculator provides estimates based on typical emission factors. Real-world emissions may vary significantly depending on several factors such as vehicle condition, driving style, the energy grid mix, and fuel composition.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mt-4">Can I change the grid emission intensity for EVs?</h3>
          <p className="mb-4 text-lg leading-7">
            Yes, the calculator uses a default grid emission factor. For more precise emissions calculations, you may substitute the default value with a local grid emission intensity (kg CO2 per kWh) obtained from your utility or regional dataset.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mt-4">How can I reduce my transportation emissions?</h3>
          <p className="mb-4 text-lg leading-7">
            Strategies for reducing transportation emissions include driving less, increasing vehicle fuel efficiency, transitioning to lower-emission fuels or electric vehicles, carpooling, and utilizing public transport or active transportation methods like biking or walking.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mt-4">Are there other tools to calculate my carbon footprint?</h3>
          <p className="mb-4 text-lg leading-7">
            Yes, besides our Transportation Carbon Calculator, various online platforms and mobile applications can assess your overall carbon footprint, including household energy use, waste generation, and travel habits.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Notes and References</h2>
        <p className="mb-4 text-lg leading-7">
          The emission factors utilized in our calculator are approximate estimates. For decisions related to policy or regulatory frameworks, we recommend consulting regional or national greenhouse gas inventories and referencing the latest materials from reputable organizations such as the U.S. EPA or IPCC.
        </p>
        <p className="mb-4 text-lg leading-7">
          Understanding your transportation carbon emissions is a vital step toward making informed choices for a more sustainable future. By utilizing our calculator, you contribute to the growing movement of ecological awareness and responsible driving behaviors.
        </p>
      </section>
    </article>
  );
}
