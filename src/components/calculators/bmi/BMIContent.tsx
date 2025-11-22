import React from 'react';

export default function BMIContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">What is BMI?</h2>
        <p className="mb-4 text-lg leading-7">
          Body Mass Index (BMI) is a simple calculation using a person's height and weight. The formula is <strong>BMI = kg/m<sup> 2</sup></strong> where kg is a person's weight in kilograms and m<sup> 2</sup> is their height in metres squared.
        </p>
      </section>
      
      <section>
        <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-6">BMI Categories</h3>
        <ul className="space-y-3 mb-6 list-disc list-inside">
          <li className="text-lg"><strong className="text-gray-900">Underweight:</strong> BMI less than 18.5</li>
          <li className="text-lg"><strong className="text-gray-900">Normal weight:</strong> BMI between 18.5 and 24.9</li>
          <li className="text-lg"><strong className="text-gray-900">Overweight:</strong> BMI between 25 and 29.9</li>
          <li className="text-lg"><strong className="text-gray-900">Obesity:</strong> BMI 30 or greater</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">How to Calculate BMI</h2>
        <p className="mb-4 text-lg leading-7">
          To calculate BMI in the metric system, divide your weight in kilograms by the square of your height in meters.
        </p>
        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">BMI = Weight (kg) / (Height (m) × Height (m))</code>
        </div>
        
        <p className="mb-4 text-lg leading-7">
          For the imperial system, the formula involves multiplying the weight in pounds by 703, then dividing by the square of height in inches.
        </p>
        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">BMI = 703 × Weight (lbs) / (Height (in) × Height (in))</code>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Why Does BMI Matter?</h2>
        <p className="mb-4 text-lg leading-7">
          A high BMI can be an indicator of high body fatness. BMI can be used to screen for weight categories that may lead to health problems but it is not diagnostic of the body fatness or health of an individual.
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
          <p className="text-base text-gray-700">
            <strong className="text-gray-900">Important Note:</strong> BMI is a screening tool and should not be used as the sole indicator of health. Consult with a healthcare professional for a comprehensive health assessment.
          </p>
        </div>
      </section>
    </article>
  );
}
