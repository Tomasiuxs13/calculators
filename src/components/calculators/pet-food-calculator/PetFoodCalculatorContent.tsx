import React from 'react';

export default function PetFoodCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h1 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">Pet Food Calculator</h1>
        <p className="mb-4 text-lg leading-7">
          Determine a recommended daily feeding amount for your dog or cat based on body weight and activity level. 
          This calculator uses standard veterinary equations to estimate daily energy needs and then converts those calories into an approximate food weight using a typical energy density for dry food. 
          Understanding the right amount of food to give your pet can help in managing their weight and ensuring they lead a healthy, active life.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">How it works</h2>
        <p className="mb-4 text-lg leading-7">
          We calculate the Resting Energy Requirement (RER) using the formula:
        </p>

        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">RER = 70 × weight(kg)^0.75</code>
        </div>

        <p className="mb-4 text-lg leading-7">
          The RER is then multiplied by an activity factor depending on your pet's lifestyle (low, moderate, high) to estimate total daily energy requirements (kcal/day). 
          Finally, we convert kcal/day to grams/day using an assumed energy density (kcal/gram) for typical dry food.
        </p>

        <ul className="list-disc ml-6 text-lg">
          <li>Dogs: activity multipliers typically range from 1.2 (low) to 2.0 (high)</li>
          <li>Cats: activity multipliers are generally lower, e.g., 1.0–1.4</li>
          <li>Typical energy density used by the calculator: ~3.5 kcal/g for dog kibble, ~4.0 kcal/g for cat food</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Example</h2>
        <p className="mb-4 text-lg leading-7">
          For a 10 kg dog with moderate activity:
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-base text-gray-700">RER = 70 × 10^0.75 ≈ 394 kcal</p>
          <p className="text-base text-gray-700">Daily energy ≈ 394 × 1.6 ≈ 630 kcal/day</p>
          <p className="text-base text-gray-700">Food ≈ 630 kcal ÷ 3.5 kcal/g ≈ 180 g/day</p>
        </div>
        <p className="mb-4 text-lg leading-7">
          Always keep in mind that these calculations are estimates and should be adapted based on your individual pet's needs and lifestyle. 
          Regularly monitor your pet’s weight and consult your veterinarian for adjustments.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Usage tips</h2>
        <ul className="list-disc ml-6 text-lg">
          <li>Always round feeding amounts to practical measures (scoops, cups) and monitor your pet's weight.</li>
          <li>Adjust feeding for life stage — puppies, kittens, pregnant or nursing animals often have different needs.</li>
          <li>Consult your veterinarian for pets with health conditions or special dietary requirements.</li>
          <li>Consider your pet’s specific breed characteristics which may influence their energy and nutritional requirements.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Frequently Asked Questions</h2>
        <div>
          <h3 className="text-lg font-medium mt-4">Is this an exact prescription?</h3>
          <p className="mb-4 text-lg leading-7">
            No. These calculations provide a starting point based on standard formulas. 
            Individual needs vary with age, breed, neuter status, health conditions, and metabolism.
          </p>

          <h3 className="text-lg font-medium mt-4">Why are dog and cat multipliers different?</h3>
          <p className="mb-4 text-lg leading-7">
            Cats and dogs have different energy requirements and activity patterns. 
            Cats are obligate carnivores with different metabolic rates, so multipliers and energy densities differ.
          </p>

          <h3 className="text-lg font-medium mt-4">Can I use wet food values?</h3>
          <p className="mb-4 text-lg leading-7">
            This calculator uses typical dry food energy densities. 
            For wet food, energy density is usually lower (kcal/g), so use the food label or consult your vet and adjust the kcal/g value accordingly.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Need a tailored plan?</h2>
        <p className="mb-4 text-lg leading-7">
          If your pet has special needs, is under or overweight, or you want a precise feeding plan, schedule a consultation with your veterinarian. 
          Use this calculator as a helpful estimate to guide discussions and remember, every pet is unique in its dietary needs.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Use Cases of the Pet Food Calculator</h2>
        <p className="mb-4 text-lg leading-7">
          The Pet Food Calculator is beneficial for various situations:
        </p>
        <ul className="list-disc ml-6 text-lg">
          <li>Determining the correct daily food amount for your new pet based on their weight and age.</li>
          <li>Adjusting food intake as your pet ages or changes activity level.</li>
          <li>Helping in weight loss programs for overweight pets by providing a structured feeding plan.</li>
          <li>Assisting in rehabilitative diets for sick or recovering animals to ensure they receive adequate nutrition.</li>
        </ul>
        <p className="mb-4 text-lg leading-7">
          Whether you're a first-time pet owner or an experienced caregiver, understanding your pet's nutritional needs is crucial for their overall health and well-being.
        </p>
      </section>
    </article>
  );
}
