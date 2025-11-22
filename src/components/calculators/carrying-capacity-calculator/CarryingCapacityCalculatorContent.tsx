import React from 'react';

export default function CarryingCapacityCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h1 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">Carrying Capacity Calculator</h1>
        <p className="mb-4 text-lg leading-7">
          This calculator estimates the carrying capacity (K) for a population using a simple resource-based model. 
          Carrying capacity is the maximum population size that an environment can sustain indefinitely given the available resources.
          Understanding carrying capacity is crucial for effective resource management and conservation strategies.
        </p>
        <p className="mb-4 text-lg leading-7">
          Inputs required: current population size, intrinsic growth rate (r), and total available resources. 
          For demonstration purposes, this tool assumes a constant per-individual resource requirement of 5 resource units per individual. 
          See the FAQ below for notes on this assumption and how to refine the model for your specific ecosystem or study.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">How the Carrying Capacity Calculation Works</h2>
        <p className="mb-4 text-lg leading-7">
          The calculator employs a straightforward resource-limitation approach:
        </p>

        <div className="bg-gray-50 border-l-4 border-green-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">
            K = floor( Total Resources / ResourcePerIndividual )
          </code>
        </div>

        <p className="mb-4 text-lg leading-7">
          Where ResourcePerIndividual is assumed to be 5 resource units per individual in this simple model. 
          The floor() operation is used because carrying capacity is typically expressed as an integer number of individuals.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
          <p className="text-base text-gray-700">
            Example: If available resources = 5,000 resource units and each individual requires 5 units, then
            K = 5000 / 5 = 1000 individuals. This example helps illustrate the practical use of the calculator.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Interpreting the Results from the Carrying Capacity Calculator</h2>
        <p className="mb-4 text-lg leading-7">
          The calculator provides the estimated carrying capacity and allows you to compare the current population as a percentage of K. 
          If the population exceeds K, it suggests that the environment may struggle to sustain the population without managing reductions in size 
          or increasing available resources. This insight is essential for environmental scientists and managers.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">When to Use More Complex Models for Carrying Capacity</h2>
        <p className="mb-4 text-lg leading-7">
          This tool provides a quick, resource-based estimate. Real ecosystems often require more complex models that account for:
        </p>
        <ul className="list-disc list-inside mb-4 text-lg">
          <li>Variable per-capita resource requirements (age-structure, ontogeny)</li>
          <li>Seasonal or stochastic resource availability</li>
          <li>Density-dependent effects on birth and death rates (logistic growth)</li>
          <li>Inter-species interactions such as predation or competition</li>
        </ul>
        <p className="mb-4 text-lg leading-7">
          These factors can greatly influence the population dynamics and carrying capacity of a given environment.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Frequently Asked Questions (FAQ)</h2>

        <h3 className="text-xl font-semibold mt-4">Q: What does "Available Resources" mean?</h3>
        <p className="mb-4 text-lg leading-7">
          A: It represents the total amount of the key limiting resource(s) for the population (e.g., food energy units, habitat area proxy). 
          The units are arbitrary resource units consistent across input and the per-individual assumption. Understanding this is vital for effective application of the calculator.
        </p>

        <h3 className="text-xl font-semibold mt-4">Q: Why do you assume 5 units per individual?</h3>
        <p className="mb-4 text-lg leading-7">
          A: The value of 5 is a demonstrative assumption to keep the interface simple. 
          In practice, you'll want to estimate per-individual resource demand from field data or literature. 
          To refine the model, add a per-individual input and rerun calculations for more accurate results.
        </p>

        <h3 className="text-xl font-semibold mt-4">Q: How does growth rate (r) affect the result?</h3>
        <p className="mb-4 text-lg leading-7">
          A: In this simplified resource partitioning model, carrying capacity is determined primarily by resources and per-individual requirements. 
          Although growth rate (r) does not directly change K here, it is crucial in dynamic models (e.g., logistic growth) where r and K together influence population trajectories over time.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Next Steps and Recommendations for Carrying Capacity Assessment</h2>
        <p className="mb-4 text-lg leading-7">
          If you need a time-dynamic forecast, consider building a logistic growth model using r and K to simulate population changes over time. 
          You can also extend this tool by adding an explicit per-individual resource input and seasonal resource variation.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Use Cases for the Carrying Capacity Calculator</h2>
        <p className="mb-4 text-lg leading-7">
          This calculator can be useful in various scenarios, including:
        </p>
        <ul className="list-disc list-inside mb-4 text-lg">
          <li>Wildlife management and conservation efforts</li>
          <li>Urban planning and resource allocation</li>
          <li>Agricultural sustainability and crop yield forecasting</li>
          <li>Research in ecology and environmental science</li>
        </ul>
        <p className="mb-4 text-lg leading-7">
          By applying carrying capacity assessments, stakeholders can make informed decisions that enhance sustainability and resource management.
        </p>
      </section>
    </article>
  );
}
