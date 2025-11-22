import React from 'react';

export default function BasketballStatsCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">What is Field Goal Percentage (FG%)? - Basketball Stats Explained</h2>
        <p className="mb-4 text-lg leading-7">
          Field Goal Percentage (FG%) is a basic basketball metric that indicates a player's shooting efficiency. It's the percentage of field goal attempts that result in made baskets. Coaches and analysts use FG% to evaluate how effectively a player or team converts shooting opportunities. Understanding FG% is crucial for both players and coaches aiming to improve their game.
        </p>
        <p className="mb-4 text-lg leading-7">
          This calculator computes FG% from two simple inputs: Field Goals Made and Field Goals Attempted. Results update automatically as you change the inputs, making it an effective tool for quick assessments.
        </p>
        <p className="mb-4 text-lg leading-7">
          FG% is valuable not just for individual players but also for analyzing overall team performance. For instance, a high team FG% indicates effective shooting strategy and teamwork, which can lead to better game outcomes.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">How FG% is Calculated - Basketball Stats Metrics Simplified</h2>
        <p className="mb-4 text-lg leading-7">
          The formula is straightforward: take the number of field goals made, divide by the number of field goals attempted, and multiply by 100 to get a percentage. This simple calculation provides insights into shooting efficiency that can profoundly impact game strategies.
        </p>

        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">FG% = (Field Goals Made / Field Goals Attempted) × 100</code>
        </div>

        <p className="mb-4 text-lg leading-7">
          The calculator validates inputs to ensure that values are non-negative, the number of attempts is greater than zero, and made shots do not exceed attempted shots. These checks ensure reliability in the calculations you perform.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Examples of FG% in Basketball Stats</h2>

        <div className="space-y-3">
          <div className="bg-white border rounded-lg p-4">
            <p className="text-lg">
              Example 1: A player made 300 out of 600 attempts.
            </p>
            <p className="text-sm text-gray-600 mt-2">FG% = (300 / 600) × 100 = 50.00%</p>
          </div>

          <div className="bg-white border rounded-lg p-4">
            <p className="text-lg">Example 2: A player made 45 out of 110 attempts.</p>
            <p className="text-sm text-gray-600 mt-2">FG% = (45 / 110) × 100 ≈ 40.91%</p>
          </div>
        </div>
        
        <p className="mb-4 text-lg leading-7">
          These examples underscore the significance of FG% as a key metric in the evaluation of player performances in basketball stats calculations.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">FAQ about Basketball Stats and FG%</h2>

        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold">Q: Can FG% be greater than 100%?</h3>
            <p className="text-lg text-gray-700">A: No. FG% cannot exceed 100%. If your inputs produce an invalid result, check that Field Goals Made is not greater than Field Goals Attempted.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Q: What counts as a field goal?</h3>
            <p className="text-lg text-gray-700">A: A field goal is any basket scored during play, including two-point and three-point shots. Free throws are not included in FG% calculations.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Q: How can I use this for team stats?</h3>
            <p className="text-lg text-gray-700">A: Enter the team's total field goals made and attempted across games or a season to get the team's FG% for that span.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Q: Why is FG% important for basketball stats?</h3>
            <p className="text-lg text-gray-700">A: FG% is critical for assessing a player's scoring ability, which in turn influences game strategies. Coaches often rely on this metric to make real-time decisions during games.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mt-8">Tips for Coaches Leveraging Basketball Stats</h2>
        <ul className="list-disc ml-5 mt-3 text-lg">
          <li>Compare FG% across different players and lineups to identify efficient scorers.</li>
          <li>Track FG% over time to monitor improvement or identify shooting slumps.</li>
          <li>Combine FG% with other stats (3P%, FT%, eFG%) for a fuller picture of offensive efficiency.</li>
          <li>Utilize FG% to benchmark against league averages and set performance goals for players.</li>
          <li>Encourage players to focus on high-percentage shots to enhance overall team FG%.</li>
        </ul>
      </section>
    </article>
  );
}
