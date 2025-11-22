'use client';

import React from 'react';

export default function TDEECalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">TDEE Calculator</h1>
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">
          What is TDEE?
        </h2>
        <p className="mb-4 text-lg leading-7">
          Total Daily Energy Expenditure (TDEE) is the total number of calories you burn each day. It includes calories burned through basic bodily functions (basal metabolic rate), physical activity, and the digestion of food (thermic effect of food).
        </p>
        <p className="mb-4 text-lg leading-7">
          Calculating your TDEE is crucial for anyone looking to gain, lose, or maintain weight, as it provides a guideline for how many calories you should consume daily.
        </p>
        <p className="mb-4 text-lg leading-7">
          Understanding your TDEE helps you make informed decisions about your diet and exercise routine. By knowing how many calories your body needs, you can tailor your nutritional intake to meet your fitness goals more effectively.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
          How to Calculate Your TDEE
        </h2>
        <p className="mb-4 text-lg leading-7">
          The calculation of TDEE is based on your basal metabolic rate (BMR), which is calculated using factors such as age, gender, weight, and height, and then adjusted based on your level of physical activity.
        </p>
        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">
            TDEE = BMR × Activity Factor
          </code>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
          <p className="text-base text-gray-700">
            For accurate results, it's important to select the correct activity level that matches your lifestyle.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
          Use Cases for TDEE Calculation
        </h2>
        <p className="mb-4 text-lg leading-7">
          Understanding your TDEE can be beneficial in various scenarios. Here are some common use cases:
        </p>
        <ul className="list-disc list-inside mb-4 text-lg leading-7">
          <li>Weight Loss: By creating a calorie deficit based on your TDEE, you can effectively lose weight.</li>
          <li>Weight Gain: Those looking to gain weight can use their TDEE to determine a caloric surplus necessary for muscle gain.</li>
          <li>Maintenance: For individuals looking to maintain their current weight, knowing their TDEE helps regulate food intake.</li>
          <li>Physical Training: Athletes may adjust their caloric intake according to their training schedule by monitoring their TDEE.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
          FAQs About TDEE
        </h2>
        <div className="mb-4 text-lg leading-7">
          <h3 className="font-bold">1. Can my TDEE change over time?</h3>
          <p>
            Yes, your TDEE can fluctuate due to factors such as changes in weight, age, muscle mass, and activity level. It's advisable to recalculate your TDEE periodically.
          </p>
        </div>
        <div className="mb-4 text-lg leading-7">
          <h3 className="font-bold">2. Is it necessary to know my TDEE?</h3>
          <p>
            While not necessary for everyone, knowing your TDEE can be extremely helpful for those with specific fitness or dietary goals. It serves as a roadmap for achieving desired results.
          </p>
        </div>
        <div className="mb-4 text-lg leading-7">
          <h3 className="font-bold">3. How accurate is the TDEE estimate?</h3>
          <p>
            The TDEE estimate can vary based on the methods used for calculation. Factors like muscle mass, lifestyle variations, and metabolic differences can affect accuracy. It's best to use it as a guideline rather than an absolute figure.
          </p>
        </div>
      </section>
    </article>
  );
}
