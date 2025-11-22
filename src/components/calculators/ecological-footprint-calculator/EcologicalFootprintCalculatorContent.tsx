import React from 'react';

export default function EcologicalFootprintCalculatorContent() {
  return (
    <article className='space-y-6 text-gray-700 leading-relaxed'>
      <section>
        <h1 className='text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0'>
          Ecological Footprint Calculator
        </h1>
        <p className='mb-4 text-lg leading-7'>
          Estimate your personal ecological footprint in global hectares (gha) per year. This tool considers three primary factors that commonly influence an individual's footprint: diet, housing, and transportation. Use the calculator to compare lifestyle choices and identify opportunities to reduce your environmental impact while contributing toward a healthier planet.
        </p>
      </section>

      <section>
        <h2 className='text-2xl font-semibold text-gray-900 mb-3'>How the Ecological Footprint Calculator Works</h2>
        <p className='mb-4 text-lg leading-7'>
          The calculator uses simplified, openly described factors to estimate annual resource use expressed as global hectares (gha). It converts your monthly transportation input into an annual transportation footprint, then sums diet, housing, and transportation components to produce an estimated yearly footprint. The computational formula is as follows:
        </p>

        <div className='bg-gray-50 border-l-4 border-green-500 p-4 my-4 rounded-r'>
          <code className='text-base font-mono text-gray-900'>
            Total (gha/year) = Diet (gha/year) + Housing (gha/year) + Transportation (gha/year)
          </code>
        </div>

        <p className='mb-4 text-lg leading-7'>
          Values used in the calculation are illustrative and intended for comparative and educational purposes. For rigorous footprint accounting, consult detailed life-cycle assessment resources or specialized footprint calculators.
        </p>
      </section>

      <section>
        <h2 className='text-2xl font-semibold text-gray-900 mb-3'>Examples of Ecological Footprint Calculations</h2>
        <div className='space-y-4'>
          <div className='p-4 bg-white border rounded-lg'>
            <h3 className='font-semibold'>Example 1 — Vegetarian, Apartment, 800 km/month</h3>
            <p className='text-sm text-gray-600 mt-2'>
              Diet: vegetarian (~1.9 gha/year). Housing: apartment (~1.8 gha/year). Transportation: 800 km/month → annual footprint = 800 × 12 × 0.00003 ≈ 0.288 gha/year. Total ≈ 1.9 + 1.8 + 0.288 = 3.988 gha/year.
            </p>
          </div>

          <div className='p-4 bg-white border rounded-lg'>
            <h3 className='font-semibold'>Example 2 — Vegan, House, 1500 km/month</h3>
            <p className='text-sm text-gray-600 mt-2'>
              Diet: vegan (~1.5 gha/year). Housing: house (~3.5 gha/year). Transportation: 1500 × 12 × 0.00003 ≈ 0.54 gha/year. Total ≈ 5.54 gha/year.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className='text-2xl font-semibold text-gray-900 mb-3'>Frequently Asked Questions About Ecological Footprint</h2>

        <div>
          <h3 className='font-medium'>What is a global hectare (gha)?</h3>
          <p className='mb-4 text-lg leading-7'>
            A global hectare is a unit that represents the average productivity of all biologically productive land and water on Earth in a given year. It is commonly used to express ecological footprint and biocapacity. This calculator reports results in gha for comparability, enabling users to easily understand and track their ecological impact.
          </p>
        </div>

        <div>
          <h3 className='font-medium'>Are these values exact?</h3>
          <p className='mb-4 text-lg leading-7'>
            No. The factors used here are simplified proxies to allow quick comparisons between common lifestyle choices. For exact, policy-grade footprinting, you should use comprehensive life-cycle assessments and region-specific data.
          </p>
        </div>

        <div>
          <h3 className='font-medium'>How can I reduce my ecological footprint?</h3>
          <p className='mb-4 text-lg leading-7'>
            Common strategies include shifting toward plant-based diets, improving home energy efficiency, reducing car travel or switching to low-emission transport, and supporting local, sustainable products and services. Making conscious choices can significantly lower your ecological footprint and contribute to global sustainability.
          </p>
        </div>

        <div>
          <h3 className='font-medium'>Why should I care about my ecological footprint?</h3>
          <p className='mb-4 text-lg leading-7'>
            Understanding your ecological footprint helps to raise awareness about the environmental impacts of daily choices. By minimizing your footprint, you not only save resources but also promote a healthier ecosystem and support efforts against climate change. Every effort counts toward preserving the planet for future generations.
          </p>
        </div>
      </section>

      <section>
        <h2 className='text-2xl font-semibold text-gray-900 mb-3'>Notes and Sources</h2>
        <p className='mb-4 text-lg leading-7'>
          This tool is intended for educational and comparative use. The conversion factors are simplified for clarity. For detailed studies, refer to peer-reviewed life-cycle assessment literature and national footprint datasets (e.g., Global Footprint Network resources). Continuous education on environmental issues is crucial in today's world.
        </p>
      </section>
    </article>
  );
}
