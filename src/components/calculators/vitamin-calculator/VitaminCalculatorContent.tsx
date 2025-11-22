import React from 'react';

export default function VitaminCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h1 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">Daily Vitamin & Mineral Needs</h1>
        <p className="mb-4 text-lg leading-7">
          Use the Vitamin & Mineral Calculator to estimate recommended daily intakes for common nutrients like Vitamin D, Vitamin C, and Calcium. Recommendations are based on age and gender and show both the recommended intake and the tolerable upper intake level (UL) where applicable. Understanding your daily vitamin & mineral requirements is crucial for maintaining optimal health and preventing deficiencies.
        </p>
        <p className="mb-4 text-lg leading-7">
          Proper nutrition, including adequate vitamin & mineral intake, supports bodily functions, enhances mood, and improves overall wellness. It's important to evaluate your diet regularly to ensure you meet your nutritional needs based on lifestyle factors, dietary restrictions, and personal health goals.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">How it Works with the Vitamin & Mineral Calculator</h2>
        <p className="mb-4 text-lg leading-7">
          Enter your age and gender, then select the nutrient you're interested in. The calculator instantly computes the recommended daily amount using widely accepted baseline values. Results are presented with their unit (e.g., IU for Vitamin D, mg for Vitamin C and Calcium) and a safe upper limit when available. This valuable tool is designed to empower you with knowledge about your nutritional requirements.
        </p>
        <p className="mb-4 text-lg leading-7">
          In addition, the Vitamin & Mineral Calculator can help you customize your dietary intake based on specific health goals, be it weight loss, building muscle, or enhancing your immune system. It provides a clear understanding of how individual vitamins and minerals contribute to your overall health.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
          <p className="text-base text-gray-700">
            This tool is intended for educational purposes and should not replace personalized medical advice. Always consult a healthcare professional before making significant changes to your supplementation or diet, especially if you have underlying health conditions. 
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Examples of Daily Vitamin & Mineral Needs</h2>
        <div className="space-y-3">
          <div>
            <h3 className="text-lg font-medium">Example 1 — Adult, Age 30, Male, Vitamin D</h3>
            <p className="text-base text-gray-700">Recommended: 600 IU per day. Upper limit: 4000 IU per day.</p>
          </div>

          <div>
            <h3 className="text-lg font-medium">Example 2 — Adult, Age 30, Female, Vitamin C</h3>
            <p className="text-base text-gray-700">Recommended: 75 mg per day. Upper limit: 2000 mg per day.</p>
          </div>

          <div>
            <h3 className="text-lg font-medium">Example 3 — Older Adult, Age 72, Female, Calcium</h3>
            <p className="text-base text-gray-700">Recommended: 1200 mg per day. Upper limit: 2500 mg per day.</p>
          </div>

          <div>
            <h3 className="text-lg font-medium">Example 4 — Teenager, Age 16, Male, Vitamin A</h3>
            <p className="text-base text-gray-700">Recommended: 900 mcg per day. Upper limit: 3000 mcg per day.</p>
          </div>

          <div>
            <h3 className="text-lg font-medium">Example 5 — Pregnant Woman, Age 28, Iron</h3>
            <p className="text-base text-gray-700">Recommended: 27 mg per day. Upper limit: 45 mg per day.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">FAQs about Vitamin & Mineral Calculator</h2>
        <div className="space-y-4 text-base text-gray-700">
          <div>
            <h4 className="font-medium">Is this calculator a substitute for medical advice?</h4>
            <p>No. This tool provides general recommendations. For personalized guidance—especially if you have medical conditions, are pregnant, breastfeeding, or take medications—consult a healthcare professional.</p>
          </div>

          <div>
            <h4 className="font-medium">What do the units mean (IU, mg)?</h4>
            <p>IU stands for International Units and is commonly used for fat-soluble vitamins like Vitamin D. mg stands for milligrams and is used for many vitamins and minerals like Vitamin C and Calcium.</p>
          </div>

          <div>
            <h4 className="font-medium">Why show an upper limit (UL)?</h4>
            <p>The tolerable upper intake level (UL) indicates the maximum daily intake unlikely to cause adverse health effects for most people. It helps you avoid excessive supplementation, which can lead to toxicity.</p>
          </div>

          <div>
            <h4 className="font-medium">How often should I check my vitamin & mineral intake?</h4>
            <p>It's advisable to review your dietary intake regularly, especially after major lifestyle changes, such as pregnancy, illness, or changes in activity levels. Regular checks ensure that you're meeting your nutritional needs for optimal health.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Further Reading on Vitamins & Minerals</h2>
        <p className="text-base text-gray-700">For authoritative guidance and peer-reviewed recommendations, consult resources from recognized public health agencies and medical organizations. Many reputable websites provide extensive information, including the latest research on vitamin & mineral benefits and proper intake levels based on current dietary guidelines.</p>
        <p className="text-base text-gray-700">Consider visiting the websites of organizations like the World Health Organization (WHO), the National Institutes of Health (NIH), and the United States Department of Agriculture (USDA) for comprehensive insights. Understanding the role of each vitamin & mineral not only enhances your health knowledge but also aids in making informed decisions about your diet.</p>
      </section>
    </article>
  );
}
