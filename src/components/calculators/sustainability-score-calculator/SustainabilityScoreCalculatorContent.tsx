import React from 'react';

export default function SustainabilityScoreCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">What is the Sustainability Score?</h2>
        <p className="mb-4 text-lg leading-7">
          The Sustainability Score is an aggregated metric (on a 1-10 scale) that summarizes how sustainable a building, operation, or project is across four core areas: energy efficiency, water conservation, waste reduction, and transportation impact. The calculator combines individual scores from each area using configurable weightings to produce a single, easy-to-understand number.
        </p>
        <p className="mb-4 text-lg leading-7">
          This score helps stakeholders evaluate their environmental impact and make informed decisions regarding sustainability initiatives. A higher score corresponds to better sustainability performance, which is increasingly important in both public and private sector projects.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">How is the Sustainability Score Calculated?</h2>
        <p className="mb-4 text-lg leading-7">
          Each input is a score between 1 and 10 for the corresponding category. The calculator multiplies each category score by its weight and then sums the contributions to produce the final score. By default, weights are balanced, but you can choose presets to emphasize a specific area.
        </p>

        <div className="bg-gray-50 border-l-4 border-green-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">
            Result = (Energy × wEnergy) + (Water × wWater) + (Waste × wWaste) + (Transport × wTransport)
          </code>
        </div>

        <p className="mb-4 text-lg leading-7">
          Weights (default balanced): energy 0.30, water 0.25, waste 0.25, transportation 0.20. Weights sum to 1.0 so the resulting score remains on the 1-10 scale. This weighted approach allows users to prioritize aspects that matter most to their projects.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Example</h2>
        <p className="mb-4 text-lg leading-7">
          Suppose you have the following scores: Energy = 8, Water = 6, Waste = 7, Transport = 5. Using the balanced preset:
        </p>
        <ul className="list-disc pl-6 mb-4 text-lg leading-7">
          <li>Energy contribution: 8 × 0.30 = 2.4</li>
          <li>Water contribution: 6 × 0.25 = 1.5</li>
          <li>Waste contribution: 7 × 0.25 = 1.75</li>
          <li>Transport contribution: 5 × 0.20 = 1.0</li>
        </ul>
        <p className="mb-4 text-lg leading-7 font-semibold">Overall score = 2.4 + 1.5 + 1.75 + 1.0 = 6.65 / 10</p>
        <p className="mb-4 text-lg leading-7">
          This example illustrates how each category's weight and score collaborate to depict an overarching view of sustainability performance. The cumulative score provides a clear understanding of how well your project aligns with sustainability goals.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Using Presets for Your Sustainability Score</h2>
        <p className="mb-4 text-lg leading-7">
          Presets allow you to emphasize a specific area. For example, selecting the "Energy Focused" preset increases the energy weight and decreases others so the overall score reflects energy performance more strongly. These presets can be particularly useful for projects that are looking to improve in a targeted manner, whether that be for regulatory compliance or corporate sustainability goals.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">FAQs about the Sustainability Score Calculator</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold">What range should my category scores use?</h3>
            <p className="text-lg leading-7">Each category accepts values from 1 to 10. Use consistent scoring criteria (e.g., 10 = best practice, 1 = very poor) for meaningful results. This ensures that the results reflect a true assessment of sustainability performance.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Can I customize weights?</h3>
            <p className="text-lg leading-7">This calculator provides presets for common weighting strategies. For precise custom weighting you can adapt the source or use the preset that best matches your priorities. This flexibility allows users to tailor assessments based on specific project needs or sectors.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">How should I interpret the final score?</h3>
            <p className="text-lg leading-7">The final score (1-10) gives a quick snapshot of sustainability performance. Higher values indicate better overall performance. Use category contributions to identify areas for improvement, helping to strategize for better outcomes in future projects.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Use Cases for the Sustainability Score Calculator</h2>
        <p className="mb-4 text-lg leading-7">
          The Sustainability Score Calculator can be utilized in various scenarios, including:
        </p>
        <ul className="list-disc pl-6 mb-4 text-lg leading-7">
          <li>Real estate development to assess new properties.</li>
          <li>Corporate sustainability reporting for internal evaluations.</li>
          <li>ESG (Environmental, Social, and Governance) compliance assessments.</li>
          <li>Community projects looking to enhance environmental performance.</li>
        </ul>
        <p className="mb-4 text-lg leading-7">
          By applying this calculator across different use cases, stakeholders can foster transparency in their sustainability initiatives and drive focused improvements.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Further Reading on Sustainability Practices</h2>
        <p className="mb-4 text-lg leading-7">Consider complementing this score with lifecycle assessments, energy audits, and water footprint analyses for a comprehensive sustainability strategy. Delve into articles on sustainable building materials, energy efficiency technologies, and effective waste management practices to enhance your knowledge and boost project outcomes.</p>
      </section>
    </article>
  );
}
