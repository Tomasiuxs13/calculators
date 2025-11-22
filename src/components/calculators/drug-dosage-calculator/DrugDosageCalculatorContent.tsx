import React from 'react';

export default function DrugDosageCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Drug Dosage Calculator</h1>
      <meta name="description" content="Use our Drug Dosage Calculator to determine the correct medication volume based on weight, prescribed dose, and concentration." />

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">What is the Drug Dosage Calculator?</h2>
        <p className="mb-4 text-lg leading-7">
          The Drug Dosage Calculator helps estimate the appropriate medication volume to administer based on a patient's weight, the prescribed dose per kilogram (mg/kg), and the medication concentration (mg/mL). It is commonly used in clinical settings to convert a calculated total dose (in milligrams) into an administration volume (in milliliters).
        </p>
        <p className="mb-4 text-lg leading-7">
          This tool is essential for healthcare providers, pharmacists, and medical students. To improve patient safety and ensure effective treatment, always verify calculations with clinical guidelines or consult a pharmacist. This tool provides an estimate and is not a replacement for professional clinical judgment.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">How it Works</h2>
        <p className="mb-4 text-lg leading-7">
          Calculation steps:
        </p>
        <ol className="list-decimal list-inside mb-4 text-lg leading-7">
          <li>Calculate total dose (mg): Total Dose = Weight (kg) × Dose per kg (mg/kg)</li>
          <li>Convert to volume (mL): Volume = Total Dose (mg) ÷ Concentration (mg/mL)</li>
        </ol>

        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">Total Dose (mg) = Weight (kg) × Dose per kg (mg/kg)</code>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
          <p className="text-base text-gray-700">
            Example: A 70 kg patient with a prescribed dose of 10 mg/kg and a medication concentration of 100 mg/mL:
          </p>
          <ul className="mt-2 text-base text-gray-700 list-disc list-inside">
            <li>Total Dose = 70 × 10 = 700 mg</li>
            <li>Volume = 700 ÷ 100 = 7 mL</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Medical Disclaimer</h2>
        <p className="mb-4 text-lg leading-7 text-red-700">
          This calculator is provided for informational purposes only and should not be used as a substitute for professional medical advice, diagnosis, or treatment. Always consult a qualified healthcare professional or pharmacist before administering medication. Dosage adjustments may be required for patients with organ dysfunction, pediatrics, geriatrics, or other special populations.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Frequently Asked Questions (FAQs)</h2>

        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-900">Can this calculator be used for pediatric patients?</h3>
          <p className="text-lg text-gray-700 mt-2">Yes, but extra caution is required. Pediatric dosing often uses weight-based calculations and may require age-specific adjustments. Consult pediatric dosing guidelines and a pediatrician or pharmacist.</p>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-900">What should I do if concentration units differ?</h3>
          <p className="text-lg text-gray-700 mt-2">Ensure concentration is in mg/mL. If concentration is given in different units (e.g., mg/100mL or percentage), convert to mg/mL before using the calculator.</p>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-900">Does the calculator account for loading doses or infusion rates?</h3>
          <p className="text-lg text-gray-700 mt-2">No. This tool only calculates a simple dose based on weight and concentration. For loading doses, infusion rates, or complex regimens, consult clinical protocols and specialists.</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Use Cases for the Drug Dosage Calculator</h2>
        <p className="mb-4 text-lg leading-7">This Drug Dosage Calculator is beneficial in various situations, including:</p>
        <ul className="list-disc list-inside mb-4 text-lg leading-7">
          <li>Emergency medicine, where rapid decisions are necessary.</li>
          <li>Outpatient care, to ensure safe administration before patient discharge.</li>
          <li>Pediatric emergencies, where dosage precision is critical due to varying body weights.</li>
          <li>Instructional settings for medical students to learn dosing techniques.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">References & Notes</h2>
        <p className="text-lg text-gray-700">Always reference local formularies, dosing guidelines, and consult with pharmacists for verification. Remember to stay updated with the latest clinical practices to ensure patient safety and effective medication administration.</p>
      </section>
    </article>
  );
}
