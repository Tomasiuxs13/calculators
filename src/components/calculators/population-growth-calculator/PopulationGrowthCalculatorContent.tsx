import React from 'react';

export default function PopulationGrowthCalculatorContent() {
  return (
    <article className='space-y-6 text-gray-700 leading-relaxed'>
      <section>
        <h1 className='text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0'>
          Population Growth Calculator
        </h1>
        <p className='mb-4 text-lg leading-7'>
          Estimate how a population changes over time using either the exponential or logistic growth models. This tool is useful for ecology, conservation planning, and teaching population dynamics. Understanding population growth is vital in many fields, including biology, environmental science, and urban planning, making this calculator a valuable resource for students, educators, and professionals alike.
        </p>
      </section>

      <section>
        <h2 className='text-2xl font-semibold text-gray-900 mb-3'>How Population Growth Works</h2>
        <p className='mb-4 text-lg leading-7'>
          Two common models are provided for estimating population growth:
        </p>
        <ul className='list-disc list-inside mb-4 text-lg'>
          <li>
            <strong>Exponential model</strong>: assumes unlimited resources. Formula: <code className='font-mono'>P(t) = P₀ × e{'{'}r t{'}'}</code> where P₀ is the initial population, r is the growth rate, and t is time. This model shows how populations can grow quickly under ideal conditions.
          </li>
          <li className='mt-2'>
            <strong>Logistic model</strong>: includes carrying capacity (K). Formula: <code className='font-mono'>P(t) = K / (1 + ((K − P₀)/P₀) × e{'{'}−r t{'}'})</code>. This model slows growth as the population approaches K, illustrating the limits of resources and environmental factors.
          </li>
        </ul>

        <div className='bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4'>
          <p className='text-base text-gray-700'>
            Enter the initial population, growth rate (per unit time), and the time period. Select the desired model. Results and an interactive chart update automatically, allowing for easy visualization of growth trends.
          </p>
        </div>
      </section>

      <section>
        <h2 className='text-2xl font-semibold text-gray-900 mb-3'>Use Cases for Population Growth Models</h2>
        <p className='mb-4 text-lg leading-7'>
          Population growth modeling has several practical applications, including:
        </p>
        <ul className='list-disc list-inside mb-4 text-lg'>
          <li>Understanding the potential for species overpopulation in conservation efforts.</li>
          <li>Forecasting human population growth for urban planning and infrastructure development.</li>
          <li>Analyzing ecological impacts of invasive species.</li>
          <li>Estimating impacts of disease outbreaks on population dynamics.</li>
        </ul>
      </section>

      <section>
        <h2 className='text-2xl font-semibold text-gray-900 mb-3'>Examples of Population Growth Calculations</h2>
        <div className='space-y-4'>
          <div className='bg-gray-50 border-l-4 border-green-500 p-4 rounded-r'>
            <p className='text-base text-gray-800'>
              Example 1 — Exponential: P₀ = 1000, r = 0.05, t = 10. The exponential model estimates quick, unconstrained growth, ideal for theoretical discussions of population dynamics.
            </p>
          </div>

          <div className='bg-gray-50 border-l-4 border-yellow-500 p-4 rounded-r'>
            <p className='text-base text-gray-800'>
              Example 2 — Logistic: P₀ = 1000, r = 0.05, K = 5000, t = 10. The logistic model accurately predicts growth and suggests stabilization as the population approaches carrying capacity, reflecting real-world limitations.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className='text-2xl font-semibold text-gray-900 mb-3'>Frequently Asked Questions about Population Growth</h2>
        <div className='space-y-4'>
          <div>
            <h3 className='text-lg font-medium text-gray-900'>What does the growth rate mean?</h3>
            <p className='text-base text-gray-700'>
              The growth rate (r) represents the per-capita rate of increase. Positive values indicate growth, negative values indicate decline. For exponential growth, small increases in r can have large effects over extended periods.
            </p>
          </div>

          <div>
            <h3 className='text-lg font-medium text-gray-900'>When should I use logistic vs exponential?</h3>
            <p className='text-base text-gray-700'>
              Use exponential when resources are effectively unlimited or for short-term projections. Use logistic when resources or other limitations cause growth to slow and stabilize around a carrying capacity.
            </p>
          </div>

          <div>
            <h3 className='text-lg font-medium text-gray-900'>Are units important in population growth calculations?</h3>
            <p className='text-base text-gray-700'>
              Yes. Ensure the growth rate r and time t use consistent units (for example, per year and years). The calculator treats r and t as dimensionless numbers in the same unit system, ensuring accurate computations.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className='text-2xl font-semibold text-gray-900 mb-3'>Notes and Limitations of Population Growth Models</h2>
        <p className='text-base text-gray-700'>
          These models are simplifications of real-world dynamics. Real populations can be affected by age structure, environmental variability, migration, and density-dependent factors not captured here. Consequently, use results as illustrative estimates rather than precise forecasts.
        </p>
      </section>

      <section>
        <h2 className='text-2xl font-semibold text-gray-900 mb-3'>Further Reading on Population Growth and Ecology</h2>
        <ul className='list-disc list-inside text-base text-gray-700'>
          <li>Begon, M., Townsend, C. R., & Harper, J. L. (Ecology: From individuals to ecosystems)</li>
          <li>Gotelli, N. J. (A primer of ecology)</li>
          <li>Smith, T. M., & Smith, R. L. (Elements of Ecology)</li>
          <li>Allaby, M. (A Dictionary of Ecology)</li>
        </ul>
      </section>
    </article>
  );
}
