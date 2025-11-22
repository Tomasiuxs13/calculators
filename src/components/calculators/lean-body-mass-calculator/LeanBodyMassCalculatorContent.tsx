import React from 'react';

export default function LeanBodyMassCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">
          What is Lean Body Mass?
        </h2>
        <p className="mb-4 text-lg leading-7">
          Lean body mass (LBM) refers to the weight of everything in the body except fat. This includes muscles, bones, organs, and water. Understanding your lean body mass is essential for assessing your overall health and fitness level. 
        </p>
        <p className="mb-4 text-lg leading-7">
          Calculating your LBM can help you tailor your fitness and nutrition plans to achieve your health goals. It is particularly useful for athletes and those looking to lose weight while maintaining muscle mass. 
        </p>
        <p className="mb-4 text-lg leading-7">
          In addition to being a key factor in body composition, LBM can also impact physical performance, metabolic rate, and weight management. Those with higher lean body mass tend to burn more calories at rest, making it a vital component of any healthy lifestyle.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
          How to Calculate Lean Body Mass
        </h2>
        <p className="mb-4 text-lg leading-7">
          The formula to calculate lean body mass is:
        </p>
        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">
            LBM = Weight - (Body Fat Percentage / 100 × Weight)
          </code>
        </div>
        <p className="mb-4 text-lg leading-7">
          This formula allows you to determine how much of your body weight is made up of lean mass versus fat mass. By inputting your weight and body fat percentage, you can easily calculate your lean body mass.
        </p>
        <p className="mb-4 text-lg leading-7">
          It's important to accurately measure and estimate your body fat percentage for this calculation to be effective. Many methods can be used to estimate body fat percentage, including skinfold calipers, bioelectrical impedance scales, and DEXA scans.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
          Benefits of Monitoring Lean Body Mass
        </h2>
        <p className="mb-4 text-lg leading-7">
          Regularly monitoring your LBM can yield several benefits, including:
        </p>
        <ul className="mb-4 list-disc pl-6">
          <li>Better weight management</li>
          <li>Improved fitness performance</li>
          <li>Informed nutrition choices</li>
          <li>Enhanced recovery from exercise</li>
          <li>Healthy aging and prevention of sarcopenia (muscle loss)</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
          FAQs
        </h2>
        <p className="mb-4 text-lg leading-7">
          <strong> 1. Why is lean body mass important?</strong> LBM is a crucial indicator of health, fitness, and metabolic rate. Maintaining a healthy LBM can improve overall well-being and physical performance.
        </p>
        <p className="mb-4 text-lg leading-7">
          <strong> 2. How can I increase my lean body mass?</strong> To increase LBM, focus on strength training, adequate protein intake, and overall healthy nutrition.
        </p>
        <p className="mb-4 text-lg leading-7">
          <strong> 3. What tools can I use to measure body fat percentage?</strong> You can use skinfold calipers, bioelectrical impedance, body fat scales, and DEXA scans, among other methods.
        </p>
        <p className="mb-4 text-lg leading-7">
          <strong> 4. How often should I calculate my lean body mass?</strong> Assessing your LBM monthly or quarterly can help track progress toward your fitness goals.
        </p>
        <p className="mb-4 text-lg leading-7">
          <strong> 5. Can I use a calculator to find my lean body mass?</strong> Yes, there are online calculators that can assist you in estimating your LBM using your height, weight, and body fat percentage.
        </p>
      </section>
    </article>
  );
}
