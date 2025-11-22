import React from 'react';

export default function EnthalpyCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">What is Enthalpy Change (ΔH)?</h2>
        <p className="mb-4 text-lg leading-7">
          Enthalpy change (ΔH) represents the heat absorbed or released by a chemical reaction at constant pressure. It is commonly reported per mole of reaction or per mole of a particular reactant or product. Positive ΔH indicates an endothermic process (heat absorbed), while negative ΔH indicates an exothermic process (heat released).
        </p>
        <p className="mb-4 text-lg leading-7">
          This calculator helps you determine the molar enthalpy change by dividing the total heat exchanged (in joules) by the number of moles involved. You can view the result in joules per mole (J/mol) or kilojoules per mole (kJ/mol).
        </p>
        <p className="mb-4 text-lg leading-7">
          Understanding ΔH is crucial in fields such as chemistry and thermodynamics, as it provides insights into the thermal characteristics of chemical reactions, helping scientists and engineers predict reaction feasibility and design appropriate conditions for reactions.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">How to Calculate Enthalpy Change (ΔH)</h2>
        <p className="mb-4 text-lg leading-7">
          The formula used by this tool is straightforward:
        </p>

        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">ΔH (J/mol) = Total Heat (J) / Moles</code>
        </div>

        <p className="mb-4 text-lg leading-7">
          If you prefer the result in kilojoules per mole, the calculator converts from the base unit (J/mol) to kJ/mol by dividing by 1000. This conversion is especially important in large-scale reactions where energy quantities can be substantial.
        </p>
        <p className="mb-4 text-lg leading-7">
          The application of this formula is widespread in industries such as pharmaceuticals and materials science, where controlling the heat exchange in reactions is pivotal for product yield and quality.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Example of Enthalpy Calculation</h2>
        <p className="mb-4 text-lg leading-7">
          Suppose a reaction releases 1000 J of heat and involved 2 moles of substance. The molar enthalpy change is calculated as follows:
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
          <p className="text-base text-gray-700">ΔH = 1000 J / 2 mol = 500 J/mol = 0.5 kJ/mol</p>
        </div>
        <p className="mb-4 text-lg leading-7">
          This example illustrates how energy changes during chemical processes can be quantified, allowing chemists to understand better and manipulate reaction conditions.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Tips for Accurate Results</h2>
        <ul className="list-disc list-inside text-lg">
          <li>Enter the total heat in joules (J). If your measurement is in kilojoules, multiply by 1000 first.</li>
          <li>Ensure the number of moles is correct and greater than zero. Division by zero is undefined.</li>
          <li>Use negative heat values to represent exothermic reactions (heat released).</li>
          <li>Consider the temperature and pressure conditions under which the reaction occurs, as they can affect ΔH values.</li>
          <li>Utilize accurate heat measurements for better precision in your calculations.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Frequently Asked Questions about Enthalpy</h2>

        <div>
          <h3 className="text-xl font-semibold mt-4">Can I enter negative heat values?</h3>
          <p className="mb-4 text-lg leading-7">Yes. Negative heat indicates an exothermic process where heat is released. The result will be negative, reflecting the direction of heat flow.</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mt-4">What unit should heat be in for the calculator?</h3>
          <p className="mb-4 text-lg leading-7">Heat should be entered in joules (J). If your data is in kilojoules (kJ), convert to joules first by multiplying by 1000.</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mt-4">How is the result converted to kJ/mol?</h3>
          <p className="mb-4 text-lg leading-7">The calculator computes ΔH in the base unit (J/mol) and then converts to kJ/mol by dividing by 1000, ensuring consistent and accurate conversions.</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mt-4">Why is understanding ΔH important?</h3>
          <p className="mb-4 text-lg leading-7">Knowing the enthalpy change helps predict whether a reaction is favorable and assists in energy management during chemical processes, which is especially useful in industrial applications.</p>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">References and Further Reading</h2>
        <p className="mb-4 text-lg leading-7">For more on enthalpy and thermochemistry, consult standard physical chemistry textbooks or trusted educational resources. Reliable online platforms, such as educational websites and scientific journals, also provide valuable information on enthalpy and its applications in various fields.</p>
      </section>
    </article>
  );
}
