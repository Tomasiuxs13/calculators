import React from 'react';

export default function MolecularFormulaCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">What is a Molecular Formula?</h2>
        <p className="mb-4 text-lg leading-7">
          The molecular formula describes the actual number of atoms of each element in a molecule. It differs from the empirical formula, which only shows the simplest whole-number ratio of atoms. By combining an empirical formula with a measured molecular mass (g/mol), you can determine the molecular formula.
        </p>
        <p className="mb-4 text-lg leading-7">
          This calculator accepts an empirical formula (for example <strong>CH2O</strong>) and the molecular mass (in g/mol) and returns the most likely molecular formula based on integer multiples of the empirical unit.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">How the Calculator Works</h2>
        <p className="mb-4 text-lg leading-7">
          The calculator follows these steps:
        </p>
        <ol className="list-decimal list-inside mb-4 text-lg leading-7">
          <li>Parse the empirical formula into element counts (e.g., CH2O → C:1, H:2, O:1).</li>
          <li>Compute the empirical mass by summing atomic masses for each element multiplied by its count.</li>
          <li>Divide the provided molecular mass by the empirical mass to get the multiplier.</li>
          <li>Round the multiplier to the nearest integer to obtain the molecular formula by multiplying each element's count.</li>
        </ol>

        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">Molecular Formula = Empirical Formula × n, where n = (Molecular Mass) / (Empirical Mass)</code>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Example</h2>
        <p className="mb-4 text-lg leading-7">
          Suppose the empirical formula is <strong>CH2O</strong> and the molecular mass is <strong> 180 g/mol</strong>.
        </p>
        <p className="mb-4 text-lg leading-7">
          The empirical mass of CH2O is approximately 30.026 g/mol (C=12.0107, H=1.00794×2, O=15.9994). Dividing 180 by 30.026 gives ~5.99, which rounds to 6. The molecular formula is therefore C6H12O6.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Supported Elements</h2>
        <p className="mb-4 text-lg leading-7">
          The calculator uses a built-in table of common atomic masses (H, C, N, O, S, P, Cl, Na, K, Ca, Fe, etc.). If an unknown element symbol is used, the calculator will report an error. Use proper element symbols (case-sensitive), e.g., <em>Cl</em> for chlorine, <em>Ca</em> for calcium.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold">What if the multiplier is not an integer?</h3>
            <p className="text-lg leading-7">
              Real experimental molecular masses may contain measurement error. The calculator rounds the multiplier to the nearest integer. If the multiplier deviates significantly from an integer (by default &gt; 0.15), a warning is shown — check the empirical formula and molecular mass.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Why is the order of elements sometimes different?</h3>
            <p className="text-lg leading-7">
              The molecular formula is typically written with C and H first (when present), followed by other elements in alphabetical order. This calculator follows a similar convention when constructing the result.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Can I use hydrate notations or parentheses?</h3>
            <p className="text-lg leading-7">
              This tool expects a simple empirical formula without parentheses or hydrate dot notation. Enter the simplest ratio directly (e.g., Fe2O3 rather than Fe2(O3)).
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Tips</h2>
        <ul className="list-disc list-inside text-lg leading-7">
          <li>Ensure element symbols are properly capitalized (e.g., <em>Co</em> vs <em>CO</em>).</li>
          <li>Use accurate molecular masses (from mass spectrometry or literature) for best results.</li>
          <li>If you encounter an unsupported element, check the supported elements list and the spelling of the symbol.</li>
        </ul>
      </section>
    </article>
  );
}
