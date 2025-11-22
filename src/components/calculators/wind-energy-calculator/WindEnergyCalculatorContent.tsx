import React from 'react';

export default function WindEnergyCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <head>
        <meta
          name="description"
          content="Explore our Wind Energy Calculator to estimate power generation potential effectively. Design, efficiency, and more - all in one tool!"
        />
      </head>
      <section>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Wind Energy Calculator</h1>
        <p className="mb-4 text-lg">
          Use this calculator to estimate the power available in the wind and the portion a turbine can extract based on the turbine diameter and efficiency. The calculations use the standard physical relationship for wind power and assume inputs are provided in SI units (meters, meters/second, percent efficiency).
        </p>
        <p className="mb-4 text-lg">
          Wind energy is a clean and renewable source of power, ideal for reducing reliance on fossil fuels and mitigating environmental impact. Understanding how to estimate energy production can help in making informed decisions for wind projects.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">How Wind Energy Works</h2>
        <p className="mb-4">
          The power in the wind passing through the rotor swept area is given by:
        </p>

        <div className="bg-gray-50 border-l-4 border-green-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900 block">P_available = 0.5 × ρ × A × v³</code>
          <code className="text-base font-mono text-gray-900 block">A = π × (D / 2)²</code>
          <code className="text-base font-mono text-gray-900 block">P_extracted = P_available × η</code>
        </div>

        <p className="mb-4">
          Where:
        </p>
        <ul className="list-disc pl-5 mb-4">
          <li>ρ (rho) is air density (1.225 kg/m³ at sea level)</li>
          <li>A is rotor swept area in square meters</li>
          <li>v is wind speed in meters per second</li>
          <li>D is turbine diameter in meters</li>
          <li>η is turbine efficiency (fractional, e.g., 0.4 for 40%)</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Wind Energy Example Calculation</h2>
        <p className="mb-4">
          For a 50 m diameter turbine (D = 50 m) with an average wind speed of 8 m/s and 40% efficiency:
        </p>
        <ul className="list-disc pl-5 mb-4">
          <li>Rotor swept area A = π × (25)² ≈ 1963.50 m²</li>
          <li>Available power P_available ≈ 615,495 W (≈ 615.50 kW)</li>
          <li>Extracted power at 40% efficiency ≈ 246,198 W (≈ 246.20 kW)</li>
          <li>Estimated annual energy (continuous at average speed) ≈ 2,156,694 kWh/yr</li>
        </ul>
        <p className="mb-4 text-sm text-gray-600">
          Note: The annual energy above assumes continuous operation at the average wind speed. Real turbines experience variable wind and downtime; capacity factors and site-specific wind distributions significantly affect actual annual energy.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Using the Wind Energy Calculator</h2>
        <p className="mb-4">
          Enter the average wind speed in m/s, turbine diameter in meters, and turbine efficiency in percent. The calculator updates automatically and shows estimated power and annual energy. Use the chart toggle to compare available vs extracted power and download a PDF summary if needed.
        </p>
        <p className="mb-4">
          This tool is designed to assist engineers, researchers, and anyone interested in understanding the potential of wind energy, thus promoting its development for cleaner energy solutions.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Frequently Asked Questions about Wind Energy</h2>

        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium">Is the calculation exact?</h3>
            <p className="mt-2 text-sm text-gray-700">
              These calculations use fundamental physics for the power in wind but are idealized. They assume uniform wind across the rotor area and do not account for rotor aerodynamics, wake losses, gearbox/inverter inefficiencies, or wind shear and turbulence.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium">What is a realistic efficiency?</h3>
            <p className="mt-2 text-sm text-gray-700">
              Turbine efficiency (capture coefficient) depends on design. The Betz limit sets a theoretical maximum of ~59.3%, but commercial turbines typically operate between 30% and 50% depending on conditions and design.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium">How can I get more accurate annual energy estimates?</h3>
            <p className="mt-2 text-sm text-gray-700">
              Use site-specific wind speed distributions (Weibull), include turbine power curves, and apply capacity factors that reflect local availability and maintenance schedules. That yields a much more accurate annual energy prediction.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium">What role does wind speed play in power generation?</h3>
            <p className="mt-2 text-sm text-gray-700">
              Wind speed is a critical factor in energy generation. As wind speed increases, the potential power increases exponentially due to the cubic relationship, highlighting the importance of choosing optimal turbine locations based on historical wind data.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
