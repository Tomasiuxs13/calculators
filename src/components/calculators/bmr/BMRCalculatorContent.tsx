import React from 'react';

export default function BMRCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">What is BMR (Basal Metabolic Rate)?</h2>
        <p className="mb-4 text-lg leading-7">Basal Metabolic Rate (BMR) is the number of calories your body burns at rest to maintain basic physiological functions like breathing, circulation, and cell production. It represents the minimum energy needed to keep your body functioning while at complete rest.</p>
        <p className="mb-4 text-lg leading-7">Understanding your BMR is essential for weight management, as it forms the foundation for calculating your Total Daily Energy Expenditure (TDEE). Our BMR calculator uses the Mifflin-St Jeor equation, which is considered one of the most accurate formulas for estimating basal metabolic rate.</p>
      </section>
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">How to Calculate BMR</h2>
        <p className="mb-4 text-lg leading-7">BMR is calculated using the Mifflin-St Jeor equation, which takes into account your gender, age, height, and weight. This formula provides a more accurate estimate than older methods like the Harris-Benedict equation.</p>
        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">
            Men: BMR = 10 × weight(kg) + 6.25 × height(cm) - 5 × age(years) + 5
            <br />
            Women: BMR = 10 × weight(kg) + 6.25 × height(cm) - 5 × age(years) - 161
          </code>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
          <p className="text-base text-gray-700">
            <strong className="text-gray-900">Example:</strong> 30-year-old male, 175 cm tall, 70 kg.
            <br /><br />
            BMR = 10 × 70 + 6.25 × 175 - 5 × 30 + 5
            <br />
            BMR = 700 + 1,093.75 - 150 + 5
            <br />
            BMR = 1,648.75 calories/day
            <br />
            <strong>Result:</strong> Approximately 1,649 calories per day
          </p>
        </div>
      </section>
      <section>
        <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-6">Understanding BMR Factors</h3>
        <ul className="space-y-3 mb-6 list-none">
          <li className="text-lg flex items-start"><span className="font-bold text-gray-900 mr-2">Gender:</span><span>Men typically have higher BMR than women due to greater muscle mass and lower body fat percentage.</span></li>
          <li className="text-lg flex items-start"><span className="font-bold text-gray-900 mr-2">Age:</span><span>BMR decreases with age as muscle mass naturally declines and metabolism slows down.</span></li>
          <li className="text-lg flex items-start"><span className="font-bold text-gray-900 mr-2">Height:</span><span>Taller individuals generally have higher BMR due to larger body surface area and more cells to maintain.</span></li>
          <li className="text-lg flex items-start"><span className="font-bold text-gray-900 mr-2">Weight:</span><span>Heavier individuals have higher BMR because more body mass requires more energy to maintain.</span></li>
          <li className="text-lg flex items-start"><span className="font-bold text-gray-900 mr-2">Muscle Mass:</span><span>Muscle tissue burns more calories at rest than fat tissue, so individuals with more muscle have higher BMR.</span></li>
        </ul>
      </section>
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Real-World Uses</h2>
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="bg-gray-50 p-4 rounded-lg"><h4 className="font-semibold text-gray-900 mb-2">Weight Loss Planning</h4><p className="text-base text-gray-700">Use BMR to calculate your TDEE and create a calorie deficit for safe and effective weight loss.</p></div>
          <div className="bg-gray-50 p-4 rounded-lg"><h4 className="font-semibold text-gray-900 mb-2">Weight Gain Goals</h4><p className="text-base text-gray-700">Calculate your caloric needs to gain weight in a healthy, controlled manner by eating above your TDEE.</p></div>
          <div className="bg-gray-50 p-4 rounded-lg"><h4 className="font-semibold text-gray-900 mb-2">Fitness & Nutrition</h4><p className="text-base text-gray-700">Plan meal portions and macronutrient distribution based on your metabolic needs.</p></div>
          <div className="bg-gray-50 p-4 rounded-lg"><h4 className="font-semibold text-gray-900 mb-2">Medical Applications</h4><p className="text-base text-gray-700">Healthcare professionals use BMR to determine caloric requirements for patients with specific medical conditions.</p></div>
        </div>
      </section>
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg"><h4 className="font-semibold text-gray-900 mb-2">What is the difference between BMR and TDEE?</h4><p className="text-base text-gray-700">BMR is the calories burned at complete rest, while TDEE (Total Daily Energy Expenditure) includes all daily activities. TDEE = BMR × Activity Factor.</p></div>
          <div className="bg-gray-50 p-4 rounded-lg"><h4 className="font-semibold text-gray-900 mb-2">How accurate is the BMR calculation?</h4><p className="text-base text-gray-700">The Mifflin-St Jeor equation is accurate within 10% for most people. For precise measurements, professional metabolic testing is recommended.</p></div>
          <div className="bg-gray-50 p-4 rounded-lg"><h4 className="font-semibold text-gray-900 mb-2">Can I change my BMR?</h4><p className="text-base text-gray-700">Yes, building muscle through strength training can increase your BMR, as muscle burns more calories at rest than fat tissue.</p></div>
        </div>
      </section>
    </article>
  );
}


