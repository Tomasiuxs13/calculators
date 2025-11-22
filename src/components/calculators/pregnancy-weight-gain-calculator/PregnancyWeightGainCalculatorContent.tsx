import React from 'react';

export default function PregnancyWeightGainCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h1 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">Pregnancy Weight Gain Calculator</h1>
        <p className="mb-4 text-lg leading-7">
          This calculator estimates your total and expected weight gain during pregnancy based on your pre-pregnancy weight, current weight, weeks pregnant, and pre-pregnancy BMI. It uses commonly accepted guidance (Institute of Medicine recommendations) to provide recommended total weight gain ranges depending on BMI category. Proper weight management during pregnancy is crucial for both maternal and fetal health, making this tool a valuable resource for expecting mothers.
        </p>
        <p className="mb-4 text-lg leading-7">
          Understanding how weight gain fluctuates throughout pregnancy can help you maintain a healthy balance. This tool not only provides a numerical estimate but also empowers mothers to make informed decisions about their dietary and lifestyle choices during this life-changing journey.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-3">How it works</h2>
        <p className="mb-4 text-lg leading-7">
          The tool computes:
        </p>
        <ul className="list-disc list-inside mb-4 text-lg">
          <li>Current weight gain: current weight − pre-pregnancy weight</li>
          <li>Recommended total weight gain range based on pre-pregnancy BMI</li>
          <li>Expected gain by your current week of pregnancy (linear estimate across 40 weeks)</li>
          <li>Whether your current gain is below, within, or above the recommended range for your gestation</li>
        </ul>

        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">Expected by now = Recommended total × (Weeks Pregnant / 40)</code>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Examples</h2>

        <div className="mb-4">
          <h3 className="text-xl font-semibold">Example 1 — Normal BMI</h3>
          <p className="text-lg">Pre-pregnancy BMI 22, recommended total: 11.5–16 kg. At 20 weeks, expected gain is ~5.75–8 kg. If current gain is 3 kg, you'll be below the expected range.</p>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-semibold">Example 2 — Overweight</h3>
          <p className="text-lg">Pre-pregnancy BMI 27, recommended total: 7–11.5 kg. At 30 weeks, expected gain is ~5.25–8.63 kg. If current gain is 6 kg, you're within the expected range.</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Use Cases</h2>
        <p className="mb-4 text-lg leading-7">
          Expecting mothers can utilize the Pregnancy Weight Gain Calculator to:
        </p>
        <ul className="list-disc list-inside mb-4 text-lg">
          <li>Track their weight gain week by week to stay aligned with medical recommendations.</li>
          <li>Identify if they need to adjust their diet or exercise routines based on their current weight gain.</li>
          <li>Prepare for discussions with their healthcare provider about their weight gain and overall health during pregnancy.</li>
          <li>Understand the variations in weight gain expectations during different trimesters.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Frequently Asked Questions</h2>

        <div>
          <h4 className="font-semibold">Is this a medical diagnosis?</h4>
          <p className="mb-4 text-lg">No. This calculator provides estimates based on public guidelines and should not replace individualized medical advice. Always discuss weight concerns and nutrition with your healthcare provider.</p>
        </div>

        <div>
          <h4 className="font-semibold">Why use BMI for recommendations?</h4>
          <p className="mb-4 text-lg">BMI before pregnancy helps determine appropriate total weight gain recommendations, as body composition influences maternal and fetal outcomes. The Institute of Medicine recommendations are stratified by BMI categories.</p>
        </div>

        <div>
          <h4 className="font-semibold">What if my gain is outside the range?</h4>
          <p className="mb-4 text-lg">Being below or above the recommended range doesn't automatically mean a problem, but it is a prompt to consult your provider. They may review diet, activity, fetal growth, and other health factors to provide guidance.</p>
        </div>

        <div>
          <h4 className="font-semibold">How can I maintain a healthy pregnancy weight?</h4>
          <p className="mb-4 text-lg">Maintaining a healthy pregnancy weight involves balanced nutrition, regular physical activity (if approved by your doctor), and monitoring weight gain over time. It's essential to focus on nutrient-rich foods and stay hydrated.</p>
        </div>

        <div>
          <h4 className="font-semibold">What resources are available for weight management during pregnancy?</h4>
          <p className="mb-4 text-lg">Several resources are available, including consultations with a registered dietitian specialized in prenatal nutrition, pregnancy-specific fitness classes, and apps designed to monitor nutrition and activity levels. Your healthcare provider can also offer personalized recommendations.</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Notes</h2>
        <p className="text-lg">This calculator uses a simple linear projection for expected gain by gestation (dividing recommended total across a 40-week period). In clinical practice, weight gain patterns vary between trimesters. Use this tool for an approximate check and consult your clinician for personalized recommendations. Remember, every pregnancy is unique, and individual factors like age, pre-existing health conditions, and lifestyle can influence weight gain patterns.</p>
      </section>
    </article>
  );
}
