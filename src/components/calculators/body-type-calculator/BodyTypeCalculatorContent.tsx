import React from 'react';

export default function BodyTypeCalculatorContent() {
  return (
    <article className='space-y-6 text-gray-700 leading-relaxed'>
      <section>
        <h1 className='text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0'>
          Body Type Calculator: Ectomorph, Mesomorph, or Endomorph
        </h1>
        <p className='mb-4 text-lg leading-7'>
          This body type calculator estimates your general body type by comparing wrist circumference to height. It produces a simple frame index (height divided by wrist circumference) and classifies the result into one of three common somatotypes: Ectomorph, Mesomorph, or Endomorph. While this is not a medical diagnosis, it can help inform training and nutrition approaches. Understanding your body type can also assist in choosing the right exercise program for optimal results.
        </p>
      </section>

      <section>
        <h2 className='text-2xl font-semibold text-gray-900 mb-3 mt-8'>How the Body Type Calculator Works</h2>
        <p className='mb-4 text-lg leading-7'>
          We calculate the frame index as height (in centimetres) divided by wrist circumference (in centimetres). Different threshold values are applied for males and females to determine the likely body type. This distinction acknowledges that men and women may have different body structures. 
        </p>

        <ul className='list-disc ml-6 mb-4 text-lg'>
          <li className='mb-2'>Ectomorph: Slender frame, relatively large height to wrist ratio.</li>
          <li className='mb-2'>Mesomorph: Medium frame, moderate height to wrist ratio.</li>
          <li className='mb-2'>Endomorph: Larger frame, relatively small height to wrist ratio.</li>
        </ul>

        <div className='bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r'>
          <code className='text-base font-mono text-gray-900'>
            Frame Index = height (cm) / wrist circumference (cm)
          </code>
        </div>
      </section>

      <section>
        <h2 className='text-2xl font-semibold text-gray-900 mb-3 mt-8'>Example Calculation for Body Type</h2>
        <p className='mb-4 text-lg leading-7'>
          For example, if your height is 175 cm and your wrist circumference is 17 cm, the frame index is 175 / 17 = 10.29. For a male, that value typically corresponds to a Mesomorph (medium frame). The calculator uses slightly different thresholds for males and females to reflect typical differences. It's important to understand how this classification can guide your lifestyle and fitness choices.
        </p>
      </section>

      <section>
        <h2 className='text-2xl font-semibold text-gray-900 mb-3 mt-8'>FAQs about the Body Type Calculator</h2>

        <div className='mb-4'>
          <h3 className='text-xl font-medium'>Is this a medical test?</h3>
          <p className='text-lg'>
            No. This calculator provides a simple anthropometric estimate. It is not a substitute for professional medical, nutritional, or fitness advice. Always consult healthcare professionals before starting any new diet or exercise plan.
          </p>
        </div>

        <div className='mb-4'>
          <h3 className='text-xl font-medium'>How accurate is it?</h3>
          <p className='text-lg'>
            The method gives a quick approximation of skeletal frame size. Individual variation in bone structure, muscle mass, and body composition means it should be used as a guideline rather than a definitive classification. Most users find it helpful for understanding their body structure, but results may vary.
          </p>
        </div>

        <div className='mb-4'>
          <h3 className='text-xl font-medium'>What should I do with the result?</h3>
          <p className='text-lg'>
            Use the result to help tailor training emphasis and nutrition. Ectomorphs often benefit from higher calorie intake and strength training, mesomorphs respond well to mixed training, and endomorphs may need higher emphasis on metabolic conditioning and dietary management. Always consult a professional for personalized plans, and consider how your body type influences your fitness goals.
          </p>
        </div>
      </section>

      <section>
        <h2 className='text-2xl font-semibold text-gray-900 mb-3 mt-8'>Tips for Accurate Measurement</h2>
        <ul className='list-disc ml-6 mb-6 text-lg leading-7'>
          <li>Measure wrist circumference at the smallest point of your wrist.</li>
          <li>Measure height without shoes and stand straight.</li>
          <li>Use a flexible tape measure for wrist measurements.</li>
        </ul>
      </section>

      <section>
        <h2 className='text-2xl font-semibold text-gray-900 mb-3 mt-8'>When to Use the Body Type Calculator</h2>
        <p className='mb-4 text-lg leading-7'>
          This body type calculator can be particularly useful for individuals looking to optimize their fitness routines. Whether you're starting a new fitness journey, adjusting your diet for weight loss, or seeking to gain muscle, understanding your somatotype can help refine your strategy. Personal trainers, nutritionists, and fitness enthusiasts often use such tools to provide insights into workout and diet customization.
        </p>
      </section>

      <footer className='text-sm text-gray-600'>
        <p>
          Remember, this tool is intended as an educational resource. For specific health or fitness recommendations, contact a qualified professional.
        </p>
      </footer>
    </article>
  );
}
