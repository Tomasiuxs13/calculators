import React from 'react';

export default function BreastfeedingCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h1 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Breastfeeding Calculator: Feeding Schedule & Milk Intake</h1>
        <p className="mb-4 text-lg leading-7">
          Use this breastfeeding calculator to estimate your baby's daily breast milk intake and the average volume per feeding. The tool uses commonly accepted clinical averages (ml per kg per day) and factors in the baby\'s age, weight, and number of feedings. 
          Knowing how much milk your baby needs is essential for both the health of your baby and your peace of mind as a parent. This calculator can assist you in creating a manageable feeding schedule tailored to your baby's requirements.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">How the Breastfeeding Calculator Works</h2>
        <p className="mb-4 text-lg leading-7">
          The calculator estimates daily intake using a per-kilogram guideline. For young infants, the tool applies a higher ml/kg/day estimate (commonly around 150 ml/kg/day) and adjusts this number as the infant ages. The formula used is:
        </p>

        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">Estimated Daily Intake = Baby Weight (kg) × Intake per kg (ml/kg/day)</code>
        </div>

        <p className="mb-4 text-lg leading-7">
          The volume per feeding is then calculated by dividing the daily intake by the number of feedings per day:
        </p>

        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">Intake per Feeding = Estimated Daily Intake ÷ Feedings per Day</code>
        </div>

        <p className="mb-4 text-lg leading-7">
          These numbers are estimates and should be used for general guidance. Babies have individual needs; factors like growth spurts, illness, and feeding efficiency will affect actual intake. It is always vital to monitor your baby's cues and consult health professionals whenever necessary.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Example of Using the Breastfeeding Calculator</h2>
        <p className="mb-4 text-lg leading-7">
          Suppose a 4-week-old baby weighs 4 kg and feeds 8 times per day. Using an intake estimate of 150 ml/kg/day:
        </p>
        <ul className="list-disc pl-6 mb-4 text-lg">
          <li>Estimated daily intake = 4 kg × 150 ml/kg/day = 600 ml/day</li>
          <li>Estimated intake per feeding = 600 ml ÷ 8 feedings = 75 ml per feeding</li>
        </ul>
        <p className="mb-4 text-lg leading-7">
          This detailed approach allows you to better understand how much your baby should feed and when adjustments may be necessary as your baby grows.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">When to Consult a Healthcare Professional</h2>
        <p className="mb-4 text-lg leading-7">
          If you notice any of the following, seek advice from your pediatrician or lactation consultant:
        </p>
        <ul className="list-disc pl-6 mb-4 text-lg">
          <li>Poor weight gain or weight loss beyond the expected newborn weight loss period</li>
          <li>Very frequent or very infrequent feeding patterns compared to your baby\'s baseline</li>
          <li>Signs of dehydration (few wet diapers, lethargy)</li>
        </ul>
        <p className="mb-4 text-lg leading-7">
          It's crucial to act quickly to ensure your baby's health and well-being.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Frequently Asked Questions about Breastfeeding</h2>
        <h3 className="text-lg font-medium mt-4">Is this breastfeeding calculator a substitute for clinical advice?</h3>
        <p className="mb-4 text-lg leading-7">No. This calculator provides evidence-informed estimates but does not replace personalized medical assessment. Always consult your healthcare provider for tailored guidance.</p>

        <h3 className="text-lg font-medium mt-4">Why does the intake per kg change with age?</h3>
        <p className="mb-4 text-lg leading-7">As infants grow, the ml/kg/day requirement often decreases slowly because metabolic needs per kilogram decline while absolute intake grows with weight.</p>

        <h3 className="text-lg font-medium mt-4">My baby seems hungrier than the estimate. What should I do?</h3>
        <p className="mb-4 text-lg leading-7">Growth spurts are common and can temporarily increase appetite. Monitor weight gain and diaper output, and consult a pediatrician or lactation consultant if you\'re concerned.</p>

        <h3 className="text-lg font-medium mt-4">What additional factors should I consider for breast milk intake?</h3>
        <p className="mb-4 text-lg leading-7">Consider factors such as the baby's activity level, health status, and any specific dietary recommendations based on their unique needs.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Conclusion</h2>
        <p className="mb-4 text-lg leading-7">
          Understanding your baby's breastfeeding needs is a crucial part of parenting. This calculator is a useful tool that can help you provide adequate nutrition for your little one. For the best outcomes, always prioritize advice from healthcare professionals who can offer personalized recommendations.
        </p>
      </section>

      <footer className="text-sm text-gray-600">
        <p>Disclaimer: Estimates are for informational purposes only. This tool does not provide medical advice. For clinical concerns, contact a licensed healthcare professional.</p>
      </footer>
    </article>
  );
}
