import React from 'react';

export default function CompostCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">What is Composting and Why It Matters</h2>
        <p className="mb-4 text-lg leading-7">
          Composting is the natural decomposition of organic materials such as food scraps and yard waste into a nutrient-rich soil amendment. Diverting organic waste from landfills reduces methane emissions, returns valuable nutrients to the soil, and cuts disposal costs. This calculator assists you in estimating how much compost you can produce from the food and yard waste generated in your household or community, making it an essential tool for environmentally conscious individuals.
        </p>
        <p className="mb-4 text-lg leading-7">
          By understanding the composting process and using this calculator, you contribute not only to your garden's health but also promote sustainability within your community. Composting transforms kitchen and landscape waste into a rich resource, minimizing the carbon footprint associated with waste management.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">How to Use the Compost Calculator</h2>
        <ol className="list-decimal list-inside mb-4 text-lg leading-7">
          <li>Enter the average food waste you produce per week (in kilograms).</li>
          <li>Enter the average yard waste (leaves, grass clippings, prunings) per week (in kilograms).</li>
          <li>The calculator estimates weekly and annual compost production using a typical compost yield factor.</li>
        </ol>

        <div className="bg-gray-50 border-l-4 border-green-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">
            Compost Produced (kg/week) = (Food Waste + Yard Waste) × Compost Yield
          </code>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Example of Compost Calculator Usage</h2>
        <p className="mb-4 text-lg leading-7">
          If your household produces 5 kg of food waste and 3 kg of yard waste per week, the calculator assumes a typical compost yield of 60%:
        </p>
        <ul className="list-disc list-inside mb-4 text-lg leading-7">
          <li>Total waste per week = 5 + 3 = 8 kg</li>
          <li>Estimated compost per week = 8 × 0.6 = 4.8 kg</li>
          <li>Estimated compost per year = 4.8 × 52 = 249.6 kg</li>
        </ul>
        <p className="mb-4 text-lg leading-7">
          This example illustrates the potential impact of composting on waste reduction and nutrient recycling in your garden. By effectively managing food and yard waste, you can create a sustainable ecosystem at home.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Benefits of Composting</h2>
        <ul className="list-disc list-inside mb-4 text-lg leading-7">
          <li>Reduces methane emissions from landfills.</li>
          <li>Builds healthier soils that retain water and nutrients.</li>
          <li>Reduces the need for chemical fertilizers.</li>
          <li>Supports the local circular economy by turning waste into a resource.</li>
          <li>Encourages biodiversity by adding beneficial microorganisms to the soil.</li>
          <li>Saves money on waste disposal and garden amendments.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Frequently Asked Questions about Composting</h2>

        <h3 className="text-xl font-semibold mt-4">How accurate are these estimates?</h3>
        <p className="mb-4 text-lg leading-7">
          These calculations use typical compost yield and emission factors to provide estimates. Actual results depend on composting method, moisture content, carbon-to-nitrogen balance, and processing losses. Use these values as order-of-magnitude guidance.
        </p>

        <h3 className="text-xl font-semibold mt-4">Can all food and yard waste be composted?</h3>
        <p className="mb-4 text-lg leading-7">
          Most food scraps and yard wastes are compostable, but meat, dairy, and oily foods can attract pests and may require specialized composting systems (e.g., hot composting). Local programs often accept a subset of organics for municipal composting; check local guidelines to maximize your impact.
        </p>

        <h3 className="text-xl font-semibold mt-4">How can I increase compost yield?</h3>
        <p className="mb-4 text-lg leading-7">
          Improving the carbon-to-nitrogen ratio, maintaining adequate moisture and aeration, and using proper particle sizes can speed decomposition and improve yield quality. Turning and managing temperature profiles reduces losses to incomplete decomposition, ensuring that your composting efforts are effective.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Learn More about Composting</h2>
        <p className="mb-4 text-lg leading-7">
          For programmatic composting, community gardens, or municipal organics diversion, reach out to local environmental agencies or extension services for guidance on best practices and available support. Educating yourself further on composting techniques can dramatically enhance your composting success and deepen your connection to sustainable practices within your community.
        </p>
        <p className="mb-4 text-lg leading-7">
          By participating in composting initiatives and understanding the intricacies of organic waste management, you actively contribute to a greener, healthier planet.
        </p>
      </section>
    </article>
  );
}
