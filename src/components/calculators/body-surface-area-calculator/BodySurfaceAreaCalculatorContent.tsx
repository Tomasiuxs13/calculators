import React from 'react';

export default function BodySurfaceAreaCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Body Surface Area Calculator</h1>
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">What is Body Surface Area?</h2>
        <p className="mb-4 text-lg leading-7">
          Body surface area (BSA) is a crucial measurement used in medicine to estimate the total surface area of the human body. Understanding BSA is important for a variety of medical applications, such as calculating drug dosages, determining metabolic rates, and assessing overall body composition. BSA can be computed using different formulas, the most common being the Mosteller and Du Bois formulas, which take into account an individual's height and weight.
        </p>
        <p className="mb-4 text-lg leading-7">
          Our Body Surface Area Calculator allows you to quickly compute your BSA based on your weight and height, giving you an essential metric for various health assessments, including medication dosages and surgical requirements. In addition, BSA is an important aspect of medical assessments for patients with certain conditions like obesity or malnutrition, highlighting its significance in personalized medicine.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">How to Calculate Body Surface Area</h2>
        <p className="mb-4 text-lg leading-7">
          The Mosteller formula for calculating BSA is:
        </p>
        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">
            BSA = sqrt((Height (cm) × Weight (kg)) / 3600)
          </code>
        </div>
        <p className="mb-4 text-lg leading-7">
          This formula provides a quick and reliable estimation of body surface area, which is extremely useful in clinical settings for drug dosing and other medical calculations. To use this formula, you simply multiply your height in centimeters by your weight in kilograms, divide the result by 3600, and take the square root. This method is often preferred in medical settings due to its ease and reliability.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Common Use Cases for Body Surface Area</h2>
        <p className="mb-4 text-lg leading-7">
          Body Surface Area is utilized in several medical domains. For example, oncologists use BSA to calculate chemotherapy dosages, ensuring that patients receive the most effective treatment without experiencing toxic side effects. In pediatrics, BSA calculations are often used to assess children’s growth and development, offering insights into their nutritional status and overall health.
        </p>
        <p className="mb-4 text-lg leading-7">
          In addition, BSA is crucial in surgical settings, as it helps determine appropriate fluid resuscitation volumes and anesthesia dosages. Given its wide-ranging applications, it is clear that understanding and calculating BSA serves vital functions in healthcare.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">FAQs about Body Surface Area</h2>
        <p className="mb-4 text-lg leading-7">
          <strong>Why is Body Surface Area important?</strong> Body Surface Area is crucial in medical settings as it helps determine the appropriate dosage of medications and assess metabolic functions. Its accuracy in estimating body size makes it invaluable for proper treatment planning.
        </p>
        <p className="mb-4 text-lg leading-7">
          <strong>Can BSA be calculated for children?</strong> Yes, BSA can be calculated for individuals of all ages. However, specific formulas may be tailored to the pediatric population to ensure more accurate assessments of their health requirements.
        </p>
        <p className="mb-4 text-lg leading-7">
          <strong>How often should BSA be measured?</strong> BSA does not need to be measured frequently. It's typically recalculated during significant changes in body weight or height, or whenever there are major changes in medical conditions or treatment plans.
        </p>
        <p className="mb-4 text-lg leading-7">
          <strong>What factors can affect Body Surface Area calculations?</strong> Factors such as age, sex, and body composition can influence BSA calculations. It's essential to use the most appropriate formula based on the individual's characteristics for optimal accuracy.
        </p>
      </section>
    </article>
  );
}
