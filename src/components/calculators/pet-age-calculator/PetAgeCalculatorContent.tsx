import React from 'react';

export default function PetAgeCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h1 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">Pet Age Calculator</h1>
        <p className="mb-4 text-lg leading-7">
          Quickly estimate how old your dog or cat would be in human years. This calculator uses widely used veterinary approximations to convert pet chronological age into an equivalent human age for easier comparison and understanding. Understanding your pet's age in human years helps in making informed decisions regarding their care and health.
        </p>
        <p className="mb-4 text-lg leading-7">
          Many pet owners use age calculators to gauge their pet's stage of life and to plan for the future. Knowing your pet's relative age can guide you in choosing the appropriate nutrition, exercise, and healthcare. By understanding the concept of "pet age," you can foster a deeper bond with your furry companion and ensure they live a happy and healthy life.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">How Pet Age Calculator Works</h2>
        <p className="mb-4 text-lg leading-7">
          The conversion is done by converting the pet's age into a base unit (human years) using piecewise rules commonly adopted by veterinarians:
        </p>

        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <ul className="list-disc pl-5 text-gray-900">
            <li>Dogs: 1st year = 15 human years, 2nd year = 9 human years, each additional year ≈ 5 human years.</li>
            <li>Cats: 1st year = 15 human years, 2nd year = 9 human years, each additional year ≈ 4 human years.</li>
          </ul>
        </div>

        <p className="mb-4 text-lg leading-7">
          These rules provide a practical approximation. Individual breed, size, and health can influence aging, so this tool offers a general guideline rather than a precise medical assessment. For more specific guidance, pet owners should consult a veterinarian.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Examples of Pet Age Calculations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white border rounded-lg p-4">
            <h3 className="font-semibold mb-2">Dog — 5 years</h3>
            <p className="text-gray-700">Calculation: 15 (1st) + 9 (2nd) + 3 × 5 = 24 + 15 = 39 human years.</p>
          </div>

          <div className="bg-white border rounded-lg p-4">
            <h3 className="font-semibold mb-2">Cat — 3 years</h3>
            <p className="text-gray-700">Calculation: 15 (1st) + 9 (2nd) + 1 × 4 = 28 human years.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Frequently Asked Questions About Pet Age</h2>

        <div className="space-y-4">
          <div>
            <h3 className="font-medium">Is this conversion exact?</h3>
            <p className="text-gray-700">No — it is an approximation intended to help compare pet ages with human aging. Breed, genetics, diet, and healthcare affect the actual aging process.</p>
          </div>

          <div>
            <h3 className="font-medium">Why does the first year count so much?</h3>
            <p className="text-gray-700">Pets mature much faster in their first years compared to humans. The first and second years capture major developmental stages, so they are weighted more heavily.</p>
          </div>

          <div>
            <h3 className="font-medium">Can this be used for other pets?</h3>
            <p className="text-gray-700">This tool is designed for dogs and cats only. Other species require different conversion rules.</p>
          </div>

          <div>
            <h3 className="font-medium">What factors can affect my pet's aging?</h3>
            <p className="text-gray-700">Several factors can influence the aging process of pets, including genetics, living conditions, diet, exercise, and healthcare. Regular vet visits can help monitor your pet's health and aging.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Tips for Pet Owners</h2>
        <ul className="list-disc pl-5 text-gray-700">
          <li>Use decimal ages (e.g., 2.5 years) for more accurate estimates.</li>
          <li>Refer to breed-specific resources for precise health and lifespan expectations.</li>
          <li>Consult your veterinarian for medical concerns or individualized aging assessments.</li>
          <li>Consider the lifestyle and activity level of your pet when assessing their age in human years.</li>
          <li>Stay informed about common health issues related to your pet's breed as they age.</li>
        </ul>
      </section>
    </article>
  );
}
