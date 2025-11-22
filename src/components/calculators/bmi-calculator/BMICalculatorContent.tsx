import React from 'react';

const BMICalculatorContent: React.FC = () => {
  return (
    <article>
      <h1>BMI Calculator</h1>
      <section>
        <h2>What is BMI?</h2>
        <p>
          Body Mass Index, commonly known as BMI, is a numerical value derived from an individual's weight and height. It is widely used to assess whether a person has a healthy body weight for their height. BMI is a valuable tool for evaluating weight-related health issues and can indicate whether an individual is underweight, normal weight, overweight, or obese.
        </p>
      </section>

      <section>
        <h2>How to Calculate BMI</h2>
        <p>
          Calculating your BMI is a straightforward process that involves a simple formula. To calculate BMI, you need to know your weight in kilograms and your height in meters. The formula is as follows:
        </p>
        <pre className="bg-gray-50 border-l-4 border-blue-500">
          {`BMI = weight (kg) / (height (m) x height (m))`}
        </pre>
        <h3>Step-by-Step Calculation</h3>
        <ol>
          <li>Measure your weight in kilograms.</li>
          <li>Measure your height in meters.</li>
          <li>Plug your measurements into the formula.</li>
        </ol>
      </section>

      <section>
        <h2>Worked Examples of BMI Calculation</h2>
        <div className="bg-blue-50 border border-blue-200 p-4">
          <h3>Example 1</h3>
          <p>
            A person weighs 70 kg and is 1.75 m tall. To calculate their BMI:
          </p>
          <pre className="bg-gray-50 border-l-4 border-blue-500">
            {`BMI = 70 / (1.75 x 1.75) = 22.86`}
          </pre>
        </div>

        <div className="bg-blue-50 border border-blue-200 p-4">
          <h3>Example 2</h3>
          <p>
            A child weighs 45 kg and is 1.40 m tall. To calculate their BMI:
          </p>
          <pre className="bg-gray-50 border-l-4 border-blue-500">
            {`BMI = 45 / (1.40 x 1.40) = 22.98`}
          </pre>
        </div>

        <div className="bg-blue-50 border border-blue-200 p-4">
          <h3>Example 3</h3>
          <p>
            A woman weighs 55 kg and is 1.60 m tall. To calculate her BMI:
          </p>
          <pre className="bg-gray-50 border-l-4 border-blue-500">
            {`BMI = 55 / (1.60 x 1.60) = 21.48`}
          </pre>
        </div>
      </section>

      <section>
        <h2>Real World Uses of BMI</h2>
        <p>
          Understanding BMI is crucial for various reasons. Healthcare professionals often use BMI to categorize individuals into weight categories, which helps in assessing health risks. For instance:
        </p>
        <ul>
          <li>Identifying obesity: High BMI can indicate a higher risk of conditions like heart disease and diabetes.</li>
          <li>Monitoring growth in children: BMI helps pediatricians assess a child's growth rate and nutritional health.</li>
          <li>Guiding lifestyle changes: Individuals can use their BMI to set health and fitness goals.</li>
        </ul>
      </section>

      <section>
        <h2>Frequently Asked Questions (FAQ)</h2>
        <dl>
          <dt>Q1: What is a healthy BMI range?</dt>
          <dd>A healthy BMI range is typically considered to be between 18.5 and 24.9.</dd>

          <dt>Q2: Can BMI be misleading?</dt>
          <dd>Yes, BMI does not account for muscle mass, bone density, and overall body composition.</dd>

          <dt>Q3: Is BMI the only measure of health?</dt>
          <dd>No, other factors like diet, exercise, and family history should also be considered.</dd>

          <dt>Q4: How often should I check my BMI?</dt>
          <dd>It's advisable to check your BMI at least once a year, or more frequently if you're making significant lifestyle changes.</dd>

          <dt>Q5: Can BMI be used for children?</dt>
          <dd>Yes, but it should be interpreted differently based on age and sex, and ideally, be assessed by a healthcare provider.</dd>

          <dt>Q6: What actions should I take if my BMI is outside the normal range?</dt>
          <dd>Consult with a healthcare professional for guidance on diet, exercise, and lifestyle modifications.</dd>

          <dt>Q7: Does BMI apply to athletes?</dt>
          <dd>While BMI can provide general information, athletes may have a higher muscle mass which can result in a BMI that classifies them as overweight or obese, even if they are healthy.</dd>
        </dl>
      </section>
    </article>
  );
};

export default BMICalculatorContent;