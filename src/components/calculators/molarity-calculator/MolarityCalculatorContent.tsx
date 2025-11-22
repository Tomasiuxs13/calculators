import React from 'react';

export default function MolarityCalculatorContent() {
  return (
    <article className='space-y-6 text-gray-700 leading-relaxed'>
      <section>
        <h2 className='text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0'>
          What is Molarity?
        </h2>
        <p className='mb-4 text-lg leading-7'>
          Molarity (M) is a measure of the concentration of a solute in a solution, expressed as the number of moles of solute per liter of solution. It is one of the most commonly used concentration units in chemistry and is essential for stoichiometry, titrations, and solution preparation.
        </p>
        <p className='mb-4 text-lg leading-7'>
          The formula for molarity is simple and intuitive: it compares how many moles of a substance are present in a given volume of solution (in liters), allowing chemists to relate amounts of reactants and products in chemical reactions.
        </p>
      </section>

      <section>
        <h2 className='text-3xl font-bold text-gray-900 mb-4 mt-8'>
          Formula and Calculation
        </h2>
        <p className='mb-4 text-lg leading-7'>
          Use the following formula to calculate molarity:
        </p>

        <div className='bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r'>
          <code className='text-base font-mono text-gray-900'>
            M = moles of solute / volume of solution (L)
          </code>
        </div>

        <p className='mb-4 text-lg leading-7'>
          Important: Always convert your volume to liters before dividing. This calculator converts common volume units (mL, µL) to liters behind the scenes to ensure accurate results.
        </p>
      </section>

      <section>
        <h2 className='text-3xl font-bold text-gray-900 mb-4 mt-8'>
          Example
        </h2>
        <p className='mb-4 text-lg leading-7'>
          Suppose you have 0.5 moles of sodium chloride dissolved in 1 L of solution. The molarity is:
        </p>
        <div className='bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4'>
          <p className='text-base text-gray-700'>
            <strong className='text-gray-900'>M</strong> = 0.5 mol / 1 L = 0.5 mol/L
          </p>
        </div>
        <p className='mb-4 text-lg leading-7'>
          Try changing the volume to 500 mL in the calculator (select mL) — the calculator will convert 500 mL to 0.5 L and compute the molarity automatically.
        </p>
      </section>

      <section>
        <h2 className='text-3xl font-bold text-gray-900 mb-4 mt-8'>
          Preparing Solutions: Quick Tips
        </h2>
        <ul className='list-disc list-inside space-y-2 text-lg'>
          <li>Always ensure units are consistent: molarity requires volume in liters.</li>
          <li>Use accurate balances and volumetric glassware for precise solution preparation.</li>
          <li>When diluting concentrated solutions, apply the dilution equation M1V1 = M2V2 to determine volumes.</li>
        </ul>
      </section>

      <section>
        <h2 className='text-3xl font-bold text-gray-900 mb-4 mt-8'>
          Frequently Asked Questions
        </h2>

        <div className='space-y-4'>
          <div>
            <h3 className='text-xl font-semibold text-gray-900'>What units should I use for volume?</h3>
            <p className='text-lg text-gray-700'>
              Use liters (L) when calculating molarity. If you have milliliters (mL) or microliters (µL), convert them to liters first. This calculator provides unit selection and handles the conversion automatically.
            </p>
          </div>

          <div>
            <h3 className='text-xl font-semibold text-gray-900'>Can molarity be greater than 1?</h3>
            <p className='text-lg text-gray-700'>
              Yes. Molarity can be greater than 1 if the number of moles per liter exceeds 1. It simply reflects how many moles are present in each liter of solution.
            </p>
          </div>

          <div>
            <h3 className='text-xl font-semibold text-gray-900'>How precise is the calculator?</h3>
            <p className='text-lg text-gray-700'>
              The calculator shows results rounded to six decimal places. For laboratory work, consider significant figures based on your measurement precision.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className='text-3xl font-bold text-gray-900 mb-4 mt-8'>
          Additional Resources
        </h2>
        <p className='mb-4 text-lg leading-7'>
          Learn more about solution concentration units like molality, percent composition, and mole fraction to choose the right metric for your application.
        </p>
      </section>
    </article>
  );
}
