import React from 'react';

export default function BloodPressureCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">What is Blood Pressure?</h2>
        <p className="mb-4 text-lg leading-7">
          Blood pressure is the force exerted by circulating blood against the walls of the body's arteries. It is recorded as two numbers: systolic pressure (the higher number, measured when the heart beats) and diastolic pressure (the lower number, measured when the heart rests between beats). Measurements are given in millimeters of mercury (mmHg).
        </p>
        <p className="mb-4 text-lg leading-7">
          Monitoring blood pressure is essential for assessing cardiovascular health. Persistent elevation can indicate hypertension, which increases the risk of heart disease, stroke, and kidney problems. Regular monitoring can help you and your healthcare provider determine the best prevention and treatment options for maintaining a healthy blood pressure level.
        </p>
        <p className="mb-4 text-lg leading-7">
          Understanding your blood pressure readings can empower you to make healthier lifestyle choices. Keeping a healthy weight, reducing salt intake, and incorporating physical activity are just a few ways to improve your blood pressure and overall heart health.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">How the Blood Pressure Calculator Works</h2>
        <p className="mb-4 text-lg leading-7">
          Enter your systolic and diastolic readings (in mmHg). The calculator evaluates the values using commonly accepted categories and calculates the pulse pressure (systolic minus diastolic). The result updates automatically as you type—no need to press a button.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
          <p className="text-base text-gray-700"><strong>Category logic (simplified):</strong></p>
          <ul className="list-disc pl-5 mt-2 text-gray-700">
            <li><strong>Normal:</strong> 120 / &lt; 80 mmHg</li>
            <li><strong>Elevated:</strong> 120-129 / &lt; 80 mmHg</li>
            <li><strong>Hypertension Stage 1:</strong> 130-139 systolic or 80-89 diastolic</li>
            <li><strong>Hypertension Stage 2:</strong> ≥140 systolic or ≥90 diastolic</li>
            <li><strong>Hypertensive Crisis:</strong>180 systolic or &gt;120 diastolic — seek emergency care</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Example of Blood Pressure Readings</h2>
        <p className="mb-4 text-lg leading-7">
          If your reading is 120/80 mmHg (systolic/diastolic):
        </p>
        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">Systolic = 120, Diastolic = 80</code>
          <p className="mt-2 text-gray-700">Category: Elevated or Borderline (depending on exact thresholds). Pulse Pressure = 40 mmHg.</p>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Tips for Accurate Measurement</h2>
        <ul className="list-disc pl-5 text-gray-700">
          <li>Measure after resting quietly for 5 minutes.</li>
          <li>Sit with back supported, feet flat on the floor, and arm at heart level.</li>
          <li>Take multiple readings over several days for a reliable assessment.</li>
          <li>Avoid caffeine, exercise, and smoking 30 minutes before measuring.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Frequently Asked Questions (FAQs) About Blood Pressure</h2>
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mt-4">When should I seek medical attention?</h3>
          <p className="text-gray-700 mt-2">If your systolic is &gt;180 mmHg or diastolic is &gt;120 mmHg, this may be a hypertensive crisis — seek emergency care immediately, especially if you have chest pain, shortness of breath, or neurological symptoms.</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-900 mt-4">What is pulse pressure and why does it matter?</h3>
          <p className="text-gray-700 mt-2">Pulse pressure is the difference between systolic and diastolic pressure. Very high or very low pulse pressures can be associated with cardiovascular issues. Discuss abnormal values with your clinician.</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-900 mt-4">How often should I measure my blood pressure?</h3>
          <p className="text-gray-700 mt-2">Follow your healthcare provider's guidance. For monitoring, many clinicians recommend taking 2-3 readings in the morning and evening for a week to establish a baseline.</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-900 mt-4">What lifestyle changes can help manage blood pressure?</h3>
          <p className="text-gray-700 mt-2">Incorporating healthy habits such as a balanced diet, regular exercise, reducing alcohol, and quitting smoking can significantly impact blood pressure levels positively. Consulting with a dietitian can further personalize these changes.</p>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">When to See a Doctor About Blood Pressure</h2>
        <p className="mb-4 text-lg leading-7">
          Use this calculator as an informational tool. It does not replace professional medical advice. If you consistently have high readings or experience concerning symptoms, contact your healthcare provider for evaluation and management. Early detection and intervention can significantly improve outcomes for blood pressure-related health issues.
        </p>
      </section>
    </article>
  );
}
