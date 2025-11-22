import React from 'react';

export default function BaseballStatsCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">What is Batting Average in Baseball Stats?</h2>
        <p className="mb-4 text-lg leading-7">
          Batting average (AVG) is one of the most common baseball statistics used to measure a batter's success at the plate. It is calculated by dividing the number of hits by the number of at-bats. Our Baseball Stats Calculator computes the batting average instantly as you enter hits and at-bats, and also provides useful projections such as hits per 100 at-bats and projected hits over a 600 at-bat season. 
          Understanding this statistic is crucial for analyzing player performance and making decisions regarding lineups, trades, and overall team strategy.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">How the Calculator Works</h2>
        <p className="mb-4 text-lg leading-7">
          The calculator automatically updates when you change the inputs — there is no calculate button. It uses the simple, widely-accepted formula:
        </p>

        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">Batting Average (AVG) = Hits / At Bats</code>
        </div>

        <p className="mb-4 text-lg leading-7">
          Additional derived metrics:
        </p>
        <ul className="list-disc list-inside mb-4 text-lg leading-7">
          <li><strong>Hits per 100 AB:</strong> Scales the batting average into hits you would expect over 100 at-bats.</li>
          <li><strong>Projected Hits (600 AB):</strong> Extrapolates current performance to a 600 at-bat season — useful for season-long projections.</li>
        </ul>
        <p className="mb-4 text-lg leading-7">
          Utilizing these metrics can help fans, analysts, and coaches to better understand a player's potential and performance trends over a season.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Example of Baseball Stats Calculation</h2>
        <p className="mb-4 text-lg leading-7">
          If a player has 150 hits in 500 at-bats:
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-lg">AVG = 150 / 500 = 0.300 (displayed as .300)</p>
          <p className="text-lg">Hits per 100 AB = (150 / 500) × 100 = 30</p>
          <p className="text-lg">Projected Hits (600 AB) = (150 / 500) × 600 = 180</p>
        </div>
        <p className="mb-4 text-lg leading-7">
          This example illustrates not just how batting average is calculated, but also provides insight into a player's expected productivity across a full season based on their current performance.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Frequently Asked Questions about Baseball Stats</h2>

        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold">Should I include walks or hit-by-pitch?</h3>
            <p className="text-lg leading-7">No. Batting average only counts official at-bats. Walks, hit-by-pitch, and sacrifices do not count as at-bats and therefore are not used in AVG calculations. To measure overall offensive contribution including walks, consider metrics like On-Base Percentage (OBP) or OPS.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">What if at-bats is zero?</h3>
            <p className="text-lg leading-7">If at-bats is zero, batting average is undefined. The calculator will display results only when valid, non-zero at-bats are provided.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Why project to 600 at-bats?</h3>
            <p className="text-lg leading-7">A 600 at-bat season is a common baseline used for projecting full-season counting stats for regular players. It provides a straightforward way to compare seasonal production across players with different current at-bat totals.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Tips for Interpreting Results</h2>
        <ul className="list-disc list-inside mb-8 text-lg leading-7">
          <li>Batting average is useful for a quick snapshot of hit success but does not account for walks or power.</li>
          <li>Use hits per 100 AB to understand short-term hot/cold streaks on a common scale.</li>
          <li>Combine projected hits with other metrics like slugging percentage and on-base percentage for fuller evaluations.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Use Cases for the Baseball Stats Calculator</h2>
        <p className="mb-4 text-lg leading-7">
          The Baseball Stats Calculator is immensely helpful for various stakeholders in the baseball community. Coaches can use it to evaluate player performance trends over time, while analysts can create more informed projections for player development. Fans who track player performance can benefit from its user-friendly interface to calculate statistics quickly. Whether you're a novice fan or a seasoned analyst, this tool provides valuable insights into the game.
        </p>
        <p className="mb-4 text-lg leading-7">
          Furthermore, understanding how to interpret these statistics effectively can pave the way for deeper discussions regarding player valuations, team strategies, and even fantasy baseball decisions.
        </p>
      </section>
    </article>
  );
}
