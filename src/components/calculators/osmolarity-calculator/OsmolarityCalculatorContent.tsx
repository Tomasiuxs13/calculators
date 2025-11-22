import React from 'react';

export default function OsmolarityCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">What is Osmolarity?</h2>
        <p className="mb-4 text-lg leading-7">
          Osmolarity is a measure of the total concentration of solute particles in a solution, expressed in osmoles per liter (Osm/L). It is an important concept in biology and medicine because it determines the osmotic pressure of solutions and influences water movement across biological membranes.
        </p>
        <p className="mb-4 text-lg leading-7">
          For non-electrolytes, 1 mol of solute generally contributes 1 osmole. For electrolytes that dissociate (like NaCl), each formula unit may yield multiple particles when dissolved (e.g., NaCl → Na+ + Cl- gives 2 particles). Use the number of particles per molecule (the van 't Hoff factor) to compute osmolarity from molarity.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">How to Calculate Osmolarity</h2>
        <p className="mb-4 text-lg leading-7">
          The basic formula used by this calculator is:
        </p>
        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">Osmolarity (Osm/L) = Molarity (mol/L) × Number of particles per molecule</code>
        </div>
        <p className="mb-4 text-lg leading-7">
          Example: A 0.1 M solution of NaCl (which dissociates into 2 particles) has an osmolarity of 0.1 × 2 = 0.2 Osm/L (200 mOsm/L).
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Example Uses in Microbiology</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>Preparing isotonic solutions for cell cultures.</li>
          <li>Estimating osmotic stress on microbial cells when changing medium composition.</li>
          <li>Converting molar concentrations of salts to osmolarity for physiological relevance.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold">Q: What value should I use for "number of particles"?</h3>
            <p className="text-lg">A: Use the number of particles produced when one formula unit dissolves. For non-electrolytes (e.g., glucose), this is 1. For NaCl it's 2, for CaCl2 it's 3, etc. When in doubt, use the van 't Hoff factor for the solute.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Q: What's the difference between osmolarity and osmolality?</h3>
            <p className="text-lg">A: Osmolarity is osmoles per liter of solution (Osm/L), while osmolality is osmoles per kilogram of solvent (Osm/kg). This calculator computes osmolarity. For most dilute aqueous solutions the difference is small, but for precise work use osmolality when mass-based concentration is required.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Q: Can I use this for ionic solutions?</h3>
            <p className="text-lg">A: Yes — include the number of ions produced per formula unit as the particles value. Note that incomplete dissociation or ionic pairing in concentrated solutions may alter the effective number of particles; for concentrated electrolytes, empirical measurements or activity corrections may be necessary.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Tips</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>Use the calculator to quickly convert molarity to osmolarity when preparing buffers or media.</li>
          <li>Remember to convert units if you need mOsm/L — multiply Osm/L by 1000.</li>
        </ul>
      </section>
    </article>
  );
}
