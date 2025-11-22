import React from 'react';

export default function FoodCarbonCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h1 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">Food Carbon Calculator</h1>
        <p className="mb-4 text-lg leading-7">
          This tool helps you estimate the greenhouse gas emissions associated with different food choices. Enter the amount of food in kilograms and choose the food type to see an estimated kilogram of CO2 equivalent (kg CO2e) produced by that quantity. By understanding the carbon footprint of your food, you can make more informed and sustainable choices. This is crucial in the fight against climate change.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-3 mt-8">How it works</h2>
        <p className="mb-4 text-lg leading-7">
          Each food type has an average emission factor expressed as kg CO2e per kilogram of the food. The calculator converts the entered amount to the base unit (kilograms) and multiplies by that emission factor to estimate total emissions. The results can help you compare the environmental impacts of different foods, empowering you to reduce your carbon footprint effectively.
        </p>
        <div className="bg-gray-50 border-l-4 border-green-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">
            Emissions (kg CO2e) = Amount (kg) × Emission Factor (kg CO2e / kg)
          </code>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-3 mt-8">Typical emission factors</h2>
        <p className="mb-4 text-lg leading-7">Here are some typical emission factors for various food types, which can help you understand the relative impact of your dietary choices:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Beef:</strong> ~27 kg CO2e per kg</li>
          <li><strong>Chicken:</strong> ~6.9 kg CO2e per kg</li>
          <li><strong>Vegetables:</strong> ~2.0 kg CO2e per kg</li>
          <li><strong>Pork:</strong> ~12 kg CO2e per kg</li>
          <li><strong>Fish:</strong> ~5 kg CO2e per kg</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-3 mt-8">Examples</h2>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
          <p className="text-base text-gray-700">If you eat 0.5 kg of beef in a week:</p>
          <p className="mt-2 font-mono">Emissions = 0.5 kg × 27 kg CO2e/kg = 13.5 kg CO2e</p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
          <p className="text-base text-gray-700">If you replace that with 0.5 kg of vegetables:</p>
          <p className="mt-2 font-mono">Emissions = 0.5 kg × 2.0 kg CO2e/kg = 1.0 kg CO2e</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-3 mt-8">Tips to reduce food-related emissions</h2>
        <p className="mb-4 text-lg leading-7">Here are several effective strategies you can adopt to reduce food-related carbon emissions:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Reduce consumption of high-emission foods like beef and lamb.</li>
          <li>Choose plant-based alternatives where possible.</li>
          <li>Buy local and seasonal produce to cut transportation and storage emissions.</li>
          <li>Reduce food waste by planning meals and storing food properly.</li>
          <li>Educate yourself about the carbon footprints of various foods to make better purchasing decisions.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-3 mt-8">Frequently Asked Questions about Food Carbon</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">How accurate are these numbers?</h3>
            <p className="text-base text-gray-700">Emission factors are averages and can vary by region, farming practice, feed, and supply chain. Use these results as estimates to compare choices, not precise lifecycle analyses.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Can I use other units?</h3>
            <p className="text-base text-gray-700">This calculator uses kilograms as the base unit. If you have grams, convert to kilograms (1000 g = 1 kg) before entering the amount.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Why does beef have a higher footprint?</h3>
            <p className="text-base text-gray-700">Ruminant animals like cattle produce methane during digestion and require more land, feed, and water, leading to higher greenhouse gas emissions per kilogram compared to poultry or plant-based foods.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">What impact does reducing meat consumption have?</h3>
            <p className="text-base text-gray-700">Switching to plant-based meals can significantly lower your weekly or monthly carbon footprint. Every small change contributes to a larger impact on the environment.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">How can I calculate my total weekly emissions?</h3>
            <p className="text-base text-gray-700">By using this calculator for each type of food you consume in a week, you can sum the emissions to get your total food-related carbon emissions.</p>
          </div>
        </div>
      </section>

      <p className="text-sm text-gray-600">Data are indicative and intended for comparison and education. For detailed lifecycle assessments consult domain experts and region-specific datasets. By utilizing this Food Carbon Calculator, you can take an important step towards a more sustainable lifestyle and contribute to a healthier planet.</p>
    </article>
  );
}
