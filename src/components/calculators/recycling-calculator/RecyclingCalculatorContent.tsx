import React from 'react';

export default function RecyclingCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <meta name="description" content="Calculate the environmental impact of your recycling efforts with our Recycling Impact Calculator. Make a difference today!" />
      
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">What is the Recycling Impact Calculator?</h2>
        <p className="mb-4 text-lg leading-7">
          The Recycling Impact Calculator estimates how much waste you divert from landfill based on the amount of waste you generate weekly and your recycling rate. It projects annual totals and gives a simple estimate of CO2 emissions avoided by recycling. Use this tool to understand the environmental impact of improving recycling practices at home, in your community, or at your business. As more people become aware of environmental conservation, understanding how recycling can help contribute to a sustainable future is essential.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">How it Works</h2>
        <p className="mb-4 text-lg leading-7">
          Enter the average kilograms of waste you produce per week and your recycling rate (%) — the percentage of that waste that is successfully recycled. The calculator computes:
        </p>
        <ul className="list-disc list-inside mb-4 text-lg">
          <li>Recycled material per week (kg)</li>
          <li>Recycled and landfill totals per year (kg)</li>
          <li>An estimated CO2 savings value (kg CO2 per year) using a conservative average factor</li>
        </ul>

        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">Recycled per Week = Waste per Week × (Recycling Rate / 100)</code>
        </div>

        <p className="mb-4 text-lg leading-7">
          Annual totals are calculated by multiplying weekly figures by 52 (weeks in a year). The CO2 savings estimate uses an approximate factor of kg CO2 avoided per kg of recycled material — this is an illustrative average and may differ by material type (paper, metal, plastic, glass, etc.). Understanding these calculations is crucial as they directly impact both individual and collective sustainability efforts.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Example</h2>
        <p className="mb-4 text-lg leading-7">
          Suppose you create 10 kg of waste per week and recycle 50% of it:
        </p>
        <ol className="list-decimal list-inside mb-4 text-lg">
          <li>Recycled per week = 10 kg × 0.5 = 5 kg</li>
          <li>Recycled per year = 5 kg × 52 = 260 kg</li>
          <li>Landfill per year = (10 - 5) × 52 = 260 kg</li>
          <li>Estimated CO2 saved (approx.) = 260 kg × 1.5 = 390 kg CO2/year</li>
        </ol>
        <p className="mb-4 text-lg leading-7">
          The example shows that even modest improvements in recycling can lead to meaningful annual reductions in both waste to landfill and greenhouse gas emissions. These insights highlight the significant impact that individual recycling efforts can have on the environment over time.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Tips to Improve Recycling Rates</h2>
        <ul className="list-disc list-inside mb-4 text-lg">
          <li>Separate recyclables at the source (paper, glass, metal, plastic).</li>
          <li>Rinse containers to avoid contamination.</li>
          <li>Learn your local recycling rules — accepted materials vary by municipality.</li>
          <li>Reduce single-use items and choose reusable alternatives where possible.</li>
        </ul>
        <p className="mb-4 text-lg leading-7">
          Implementing these tips can greatly enhance your recycling rate, ensuring more materials are reused rather than wasted. Small changes to how you handle waste can yield big sustainability benefits.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Frequently Asked Questions</h2>

        <h3 className="text-xl font-semibold mt-4">What does recycling rate mean?</h3>
        <p className="mb-4 text-lg leading-7">Your recycling rate is the share of your total waste that is actually recycled. For example, a 40% recycling rate means 40% of your waste is diverted to recycling streams and 60% goes to landfill or incineration. A better understanding of your recycling rate helps in planning better waste management strategies.</p>

        <h3 className="text-xl font-semibold mt-4">Are the CO2 savings precise?</h3>
        <p className="mb-4 text-lg leading-7">No — the CO2 savings are an estimate using an average factor. Different materials have different carbon savings when recycled. For material-specific assessments, use dedicated LCA (life-cycle assessment) data. This variability emphasizes the importance of considering material types when evaluating your recycling's environmental impact.</p>

        <h3 className="text-xl font-semibold mt-4">Can I use this for a household or a business?</h3>
        <p className="mb-4 text-lg leading-7">Yes. Enter the average waste produced (kg/week) for the household or facility and an estimated recycling rate. For larger operations, consider tracking material streams separately for greater accuracy. This will provide a clearer picture of your waste management practices and help identify areas for improvement.</p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Assumptions & Notes</h2>
        <p className="mb-4 text-lg leading-7">
          This tool provides quick estimates for educational and planning purposes. It assumes 52 weeks per year and uses a simple CO2 savings multiplier to provide a broad sense of impact. For policy, reporting, or regulatory needs, consult detailed datasets and local waste management authorities. Regularly updating your practices based on the latest recycling guidelines is essential for maximizing your positive environmental impact.
        </p>
      </section>
    </article>
  );
}
