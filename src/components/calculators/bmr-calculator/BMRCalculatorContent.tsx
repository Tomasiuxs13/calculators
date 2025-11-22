import React from 'react';

const BMRCalculator: React.FC = () => {
  return (
    <article>
      <header>
        <h1>BMR Calculator</h1>
        <p>
          Calculate your Basal Metabolic Rate (BMR) - the calories your body burns at rest.
        </p>
      </header>

      <section>
        <h2>What is BMR?</h2>
        <p>
          The Basal Metabolic Rate (BMR) is the number of calories your body requires at rest to maintain basic physiological functions such as breathing, circulation, and cell production. Knowing your BMR can help you to assess your energy expenditure and to manage your weight more effectively. It serves as a crucial benchmark to tailor your diet and exercise regime accordingly.
        </p>
      </section>

      <section>
        <h2>How to Calculate BMR</h2>
        <p>
          Calculating your BMR involves considering several factors, including age, gender, weight, and height. The most common formulas used are the Harris-Benedict Equation and the Mifflin-St Jeor Equation. Below, we will break down the specific formulas for each method.
        </p>

        <h3>Formulas for BMR Calculation</h3>
        <pre className="bg-gray-50 border-l-4 border-blue-500 p-4">
          <code>
            {/* Harris-Benedict Equation */}
            Men: BMR = 88.362 + (13.397 × weight in kg) + (4.799 × height in cm) - (5.677 × age in years) {'\n'}
            Women: BMR = 447.593 + (9.247 × weight in kg) + (3.098 × height in cm) - (4.330 × age in years) {'\n'}
            {/* Mifflin-St Jeor Equation */}
            Men: BMR = (10 × weight in kg) + (6.25 × height in cm) - (5 × age in years) + 5 {'\n'}
            Women: BMR = (10 × weight in kg) + (6.25 × height in cm) - (5 × age in years) - 161
          </code>
        </pre>
      </section>

      <section>
        <h2>Worked Examples</h2>
        <section className="bg-blue-50 border border-blue-200 p-4">
          <h3>Example 1: Male, 25 years old, 70 kg, 175 cm</h3>
          <p>
            Using the Mifflin-St Jeor Equation: BMR = (10 × 70) + (6.25 × 175) - (5 × 25) + 5 = 1,750 calories.
          </p>
        </section>

        <section className="bg-blue-50 border border-blue-200 p-4">
          <h3>Example 2: Female, 30 years old, 60 kg, 160 cm</h3>
          <p>
            Using the Harris-Benedict Equation: BMR = 447.593 + (9.247 × 60) + (3.098 × 160) - (4.330 × 30) = 1,411 calories.
          </p>
        </section>

        <section className="bg-blue-50 border border-blue-200 p-4">
          <h3>Example 3: Male, 40 years old, 85 kg, 180 cm</h3>
          <p>
            Using the Mifflin-St Jeor Equation: BMR = (10 × 85) + (6.25 × 180) - (5 × 40) + 5 = 1,855 calories.
          </p>
        </section>
      </section>

      <section>
        <h2>Real World Uses of BMR</h2>
        <p>
          Understanding your BMR is crucial for those looking to lose or gain weight, as it helps in setting a caloric target that aligns with your fitness goals. Personal trainers, dietitians, and fitness enthusiasts often use BMR calculations to design customized meal plans and exercise regimes. BMR is also useful for bodybuilders and athletes who aim to optimize their body composition.
        </p>
      </section>

      <section>
        <h2>FAQ</h2>
        <h3>1. What factors affect my BMR?</h3>
        <p>Factors that affect BMR include age, gender, weight, height, and body composition.</p>

        <h3>2. Can I increase my BMR?</h3>
        <p>Yes, you can increase your BMR by building muscle through strength training, as muscle burns more calories than fat.</p>

        <h3>3. How often should I calculate my BMR?</h3>
        <p>It's recommended to recalculate your BMR whenever you experience significant changes in weight or body composition.</p>

        <h3>4. Is BMR the same as Total Daily Energy Expenditure (TDEE)?</h3>
        <p>No, BMR is only the calories burned at rest, while TDEE includes all calories burned through activity.</p>

        <h3>5. Do I need to exercise to manage my BMR?</h3>
        <p>While exercise can help improve your overall health and body composition, managing your diet also plays a crucial role.</p>

        <h3>6. Can I use an online calculator for my BMR?</h3>
        <p>Yes, there are many online calculators that can quickly compute your BMR based on your personal details.</p>

        <h3>7. How accurate are BMR calculations?</h3>
        <p>BMR calculations provide estimates, and individual metabolic rates can vary. It's best to combine these with actual weight management practices.</p>
      </section>
    </article>
  );
};

export default BMRCalculator;