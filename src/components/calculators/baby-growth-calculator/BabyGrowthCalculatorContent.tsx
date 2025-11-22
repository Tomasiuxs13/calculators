import React from 'react';

export default function BabyGrowthCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h1 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">Baby Growth Calculator</h1>
        <p className="mb-4 text-lg leading-7">
          Track your baby's estimated growth during pregnancy with this simple calculator. Enter how many weeks pregnant you are and the baby's observed weight (in grams) to compare it against an estimated expected weight for that gestational age. This tool provides a quick classification to help you understand whether the observed weight is within a typical range.
        </p>
        <p className="mb-4 text-lg leading-7">
          Monitoring your baby's growth is essential for ensuring their health and development. The Baby Growth Calculator is designed to give you an easy way to track and compare your baby's weight against expected growth parameters established by experts in maternal-fetal medicine. Always consult your healthcare provider for personalized insights and advice.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">How the Baby Growth Calculator Works</h2>
        <p className="mb-4 text-lg leading-7">
          The calculator uses an approximate fetal growth model to estimate the average expected fetal weight for a given week of pregnancy. This estimate is based on a simple interpolation from common clinical reference points (for example, around 300 g at 20 weeks and ~3500 g at 40 weeks). It then compares your observed weight to that estimate and returns a difference, percent difference, and a classification (Below average, Average, or Above average).
        </p>

        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">
            Expected ≈ linear interpolation between 20 weeks (300 g) and 40 weeks (3500 g)
          </code>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Real-World Use Cases</h2>
        <p className="mb-4 text-lg leading-7">
          Understanding your baby's growth during pregnancy is critical for both parents and healthcare providers. Here are a couple of scenarios where the Baby Growth Calculator can provide valuable insights:
        </p>
        <p className="mb-4 text-lg leading-7">
          <strong>Scenario 1:</strong> You are approaching your due date and want to ensure your baby's weight is falling within the healthy range. Using the calculator, you can easily input your current week of pregnancy and observed weight, then assess if your measurements align with expected growth patterns.
        </p>
        <p className="mb-4 text-lg leading-7">
          <strong>Scenario 2:</strong> You've been feeling less fetal movement than usual, prompting a doctor's visit. After obtaining the baby's current weight, you can use the calculator to see if the growth appears to be normal based on your current gestational week.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Examples</h2>
        <p className="mb-4 text-lg leading-7">
          Example: If you are 28 weeks pregnant and the observed fetal weight is 1200 g, the calculator estimates the expected weight for 28 weeks and compares it to 1200 g to give a quick assessment.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white border rounded-lg p-4">
            <h3 className="font-semibold">Example 1</h3>
            <p className="text-sm text-gray-600">Weeks: 24 • Observed: 600 g</p>
            <p className="mt-2 text-sm">Result: Observed vs expected comparison and classification shown in the calculator.</p>
          </div>

          <div className="bg-white border rounded-lg p-4">
            <h3 className="font-semibold">Example 2</h3>
            <p className="text-sm text-gray-600">Weeks: 36 • Observed: 2900 g</p>
            <p className="mt-2 text-sm">Result: Calculator shows whether 2900 g is within typical range for 36 weeks.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">FAQs about Baby Growth</h2>

        <div>
          <h3 className="font-semibold">Is this a diagnostic tool?</h3>
          <p className="mb-4">No. This calculator provides approximate estimates for educational purposes only. It is not a substitute for clinical assessment. If you have concerns about fetal growth, consult your healthcare provider.</p>
        </div>

        <div>
          <h3 className="font-semibold">What if my value is outside the typical range?</h3>
          <p className="mb-4">Being below or above the estimated average does not necessarily indicate a problem. Many factors influence fetal size. Your clinician will consider growth over time, ultrasound measurements, and other health indicators.</p>
        </div>

        <div>
          <h3 className="font-semibold">Can I change units?</h3>
          <p className="mb-4">This tool uses grams (g) for weight entry. If you have kilograms, convert to grams (1 kg = 1000 g) before entering.</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">When to Contact Your Healthcare Provider</h2>
        <p className="mb-4 text-lg leading-7">
          If measurements show significant deviation from expected growth trends, or you have concerns about fetal development, contact your healthcare provider for evaluation and possible ultrasound assessment. Continuous monitoring and professional interpretation are essential.
        </p>
        <p className="mb-4 text-lg leading-7">
          Remember that every pregnancy is unique. Trust your instincts, and don’t hesitate to reach out to your care team whenever there’s a concern about your baby’s growth or well-being.
        </p>
      </section>
    </article>
  );
}
