import React from 'react';

export default function CalorieDensityCalculatorContent() {
  return (
    <article className='space-y-6 text-gray-700 leading-relaxed'>
      <section>
        <h1 className='text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0'>Calorie Density Calculator</h1>
        <p className='mb-4 text-lg leading-7'>
          Use this calculator to determine the calorie density of a food item. Calorie density is the number of kilocalories per unit weight, typically expressed as kcal per gram or kcal per 100 grams. Understanding calorie density helps with meal planning, portion control, and making more nutritious choices. This calculator is ideal for anyone looking to manage their diet effectively, from fitness enthusiasts to individuals seeking to lose weight or maintain a healthy lifestyle.
        </p>
      </section>

      <section>
        <h2 className='text-2xl font-semibold text-gray-900 mb-3'>How it works</h2>
        <p className='mb-4 text-lg leading-7'>
          Enter the total calories and the weight of the serving (in grams). The calculator automatically computes the calories per gram and scales it to calories per 100 grams for easy comparison. This functionality is important because it allows users to understand how different foods stack up against each other in terms of energy content, which facilitates better dietary choices.
        </p>

        <div className='bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r'>
          <code className='text-base font-mono text-gray-900'>
            Calorie density (kcal/g) = Calories ÷ Weight (g)
          </code>
        </div>

        <div className='bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4'>
          <p className='text-base text-gray-700'>
            Example: A snack has 250 kcal and weighs 125 g. The calorie density is 250 ÷ 125 = 2 kcal/g, which is 200 kcal/100g. This information can help you choose snacks that fit your dietary needs without excess calories.
          </p>
        </div>
      </section>

      <section>
        <h2 className='text-2xl font-semibold text-gray-900 mb-3'>When to use calorie density</h2>
        <ul className='list-disc list-inside space-y-2 text-lg'>
          <li>Comparing foods: lower calorie density foods (like vegetables) can help you feel full on fewer calories.</li>
          <li>Portion control: high calorie density foods (like nuts or oils) require smaller portions to avoid excess calories.</li>
          <li>Meal planning: balance items with different calorie densities to achieve satisfaction and nutrition goals.</li>
          <li>Weight management: tracking calorie density can assist in maintaining or losing weight by making it easier to consume fewer calories without feeling deprived.</li>
        </ul>
      </section>

      <section>
        <h2 className='text-2xl font-semibold text-gray-900 mb-3'>FAQ about Calorie Density</h2>
        <div>
          <h3 className='text-xl font-medium text-gray-800 mb-1'>Is calorie density the same as calories per serving?</h3>
          <p className='mb-3 text-lg text-gray-700'>Not necessarily. Calories per serving depend on the serving size, while calorie density is a ratio of calories to weight and lets you compare foods regardless of serving size.</p>

          <h3 className='text-xl font-medium text-gray-800 mb-1'>Why is kcal/100g useful?</h3>
          <p className='mb-3 text-lg text-gray-700'>kcal/100g standardizes comparisons across foods and labels since many nutrition labels report values per 100 g. It's a convenient way to compare energy concentration and make healthier choices.</p>

          <h3 className='text-xl font-medium text-gray-800 mb-1'>Can I use different weight units?</h3>
          <p className='mb-3 text-lg text-gray-700'>This calculator expects weight in grams. If you have other units (ounces, pounds), convert them to grams first (1 oz ≈ 28.35 g, 1 lb ≈ 453.59 g) before using the calculator.</p>

          <h3 className='text-xl font-medium text-gray-800 mb-1'>How can calorie density help with diet plan?</h3>
          <p className='mb-3 text-lg text-gray-700'>By understanding calorie density, you can tailor your diet to include more nutrient-dense, low-calorie foods, thereby helping to manage your caloric intake while still achieving satiety.</p>
        </div>
      </section>

      <section>
        <h2 className='text-2xl font-semibold text-gray-900 mb-3'>Tips for Utilizing Calorie Density</h2>
        <ul className='list-disc list-inside space-y-2 text-lg'>
          <li>Foods with low calorie density (e.g., fruits, vegetables, broth-based soups) allow larger portions for fewer calories, making them ideal for weight loss strategies.</li>
          <li>High calorie density foods (e.g., chocolate, oils, nuts) are nutrient-dense but energy-dense — use smaller portions to avoid excessive caloric intake.</li>
          <li>Use the PDF export to save results for meal tracking or sharing with a dietitian, facilitating easier meal planning and assessments.</li>
          <li>Consider the role of fiber in low-calorie density foods, as they can help increase fullness and satisfaction with fewer calories.</li>
        </ul>
      </section>

      <section>
        <h2 className='text-2xl font-semibold text-gray-900 mb-3'>Use Cases for Calorie Density Calculator</h2>
        <p className='mb-4 text-lg leading-7'>
          Whether you are a fitness enthusiast, a nutritionist, or someone simply trying to make healthier food choices, the calorie density calculator serves as a valuable tool. It can be used for:
        </p>
        <ul className='list-disc list-inside space-y-2 text-lg'>
          <li>Diving deeper into meal prep for healthier living.</li>
          <li>Adjusting recipes to improve their nutritional value without drastically altering the flavor.</li>
          <li>Educating clients on healthy eating habits by assigning them the calculator as a daily exercise.</li>
        </ul>
      </section>
    </article>
  );
}
