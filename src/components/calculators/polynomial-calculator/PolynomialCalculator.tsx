'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type Complex = {
  re: number;
  im: number;
};

function complex(re: number, im = 0): Complex {
  return { re, im };
}

function cAdd(a: Complex, b: Complex): Complex {
  return { re: a.re + b.re, im: a.im + b.im };
}

function cSub(a: Complex, b: Complex): Complex {
  return { re: a.re - b.re, im: a.im - b.im };
}

function cMul(a: Complex, b: Complex): Complex {
  return { re: a.re * b.re - a.im * b.im, im: a.re * b.im + a.im * b.re };
}

function cDiv(a: Complex, b: Complex): Complex {
  const denom = b.re * b.re + b.im * b.im;
  return { re: (a.re * b.re + a.im * b.im) / denom, im: (a.im * b.re - a.re * b.im) / denom };
}

function cAbs(a: Complex): number {
  return Math.hypot(a.re, a.im);
}

function cEquals(a: Complex, b: Complex, tol = 1e-12): boolean {
  return Math.abs(a.re - b.re) < tol && Math.abs(a.im - b.im) < tol;
}

function evaluatePolynomial(coeffs: number[], z: Complex): Complex {
  // coeffs: [a_n, a_{n-1}, ..., a_0]
  // Horner's method for complex evaluation
  let res = complex(0, 0);
  for (let i = 0; i < coeffs.length; i++) {
    res = cMul(res, z);
    res = cAdd(res, complex(coeffs[i], 0));
  }
  return res;
}

function durandKerner(coeffs: number[], maxIter = 1000, tol = 1e-12): Complex[] {
  const n = coeffs.length - 1; // degree
  if (n <= 0) return [];

  // Initialize roots as points on a circle
  const roots: Complex[] = [];
  const radius = 1 + Math.max(...coeffs.map((c) => Math.abs(c))) / Math.abs(coeffs[0] || 1);
  for (let i = 0; i < n; i++) {
    const angle = (2 * Math.PI * i) / n;
    roots.push({ re: radius * Math.cos(angle), im: radius * Math.sin(angle) });
  }

  for (let iter = 0; iter < maxIter; iter++) {
    let convergence = true;
    for (let i = 0; i < n; i++) {
      const xi = roots[i];
      const px = evaluatePolynomial(coeffs, xi);

      // compute denominator product (xi - xj)
      let denom = complex(1, 0);
      for (let j = 0; j < n; j++) {
        if (i === j) continue;
        const diff = cSub(xi, roots[j]);
        denom = cMul(denom, diff);
      }

      // avoid division by zero
      if (Math.abs(denom.re) < 1e-18 && Math.abs(denom.im) < 1e-18) {
        // perturb slightly
        roots[i].re += (Math.random() - 0.5) * 1e-6;
        roots[i].im += (Math.random() - 0.5) * 1e-6;
        convergence = false;
        continue;
      }

      const correction = cDiv(px, denom);
      const newXi = cSub(xi, correction);

      if (!cEquals(newXi, xi, tol)) {
        convergence = false;
      }

      roots[i] = newXi;
    }

    if (convergence) break;
  }

  return roots;
}

function formatComplex(z: Complex, digits = 6): string {
  const re = Math.abs(z.re) < 1e-12 ? 0 : z.re;
  const im = Math.abs(z.im) < 1e-12 ? 0 : z.im;
  if (im === 0) return re.toFixed(digits);
  if (re === 0) return `${im.toFixed(digits)}i`;
  const sign = im >= 0 ? '+' : '-';
  return `${re.toFixed(digits)} ${sign} ${Math.abs(im).toFixed(digits)}i`;
}

export default function PolynomialCalculator() {
  const [degree, setDegree] = useState<string>('2');
  const [coefficients, setCoefficients] = useState<string>('1, -5, 6');
  const [roots, setRoots] = useState<Complex[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const deg = parseInt(degree, 10);
    if (isNaN(deg) || deg < 1) {
      setError('Degree must be an integer >= 1');
      setRoots(null);
      return;
    }

    // split coefficients by comma or whitespace
    const tokens = coefficients.split(/[,\s]+/).map((t) => t.trim()).filter(Boolean);
    const nums: number[] = tokens.map((t) => parseFloat(t));

    // if tokens contain non-numbers, error
    if (nums.some((n) => isNaN(n))) {
      setError('Coefficients must be numbers, comma-separated. Example: 1, -5, 6');
      setRoots(null);
      return;
    }

    // Ensure we have degree+1 coefficients. If fewer pad at front with zeros. If more, take first degree+1.
    let coeffs: number[] = [];
    if (nums.length < deg + 1) {
      const pad = Array(deg + 1 - nums.length).fill(0);
      coeffs = pad.concat(nums);
    } else if (nums.length > deg + 1) {
      coeffs = nums.slice(0, deg + 1);
    } else {
      coeffs = nums.slice();
    }

    // Leading coefficient must not be zero
    if (Math.abs(coeffs[0]) < 1e-14) {
      setError('Leading coefficient must not be zero.');
      setRoots(null);
      return;
    }

    setError(null);

    // Use Durand-Kerner to compute roots (coeffs in descending order)
    try {
      const computed = durandKerner(coeffs);
      setRoots(computed);
    } catch (e) {
      setError('Failed to compute roots');
      setRoots(null);
    }
  }, [degree, coefficients]);

  const handleDownloadPDF = () => {
    if (!roots) return;

    generateCalculatorPDF({
      title: 'Polynomial Calculator Results',
      inputs: [
        { label: 'Degree', value: degree },
        { label: 'Coefficients', value: coefficients },
      ],
      results: roots.map((r, i) => ({ label: `Root ${i + 1}`, value: `${formatComplex(r)} (|z|=${cAbs(r).toFixed(6)})` })),
    });
  };

  const chartData = roots
    ? roots.map((r, i) => ({ name: `r${i + 1}`, magnitude: parseFloat(cAbs(r).toFixed(6)), label: formatComplex(r) }))
    : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="degree">Polynomial Degree</Label>
        <Input
          id="degree"
          type="number"
          value={degree}
          onChange={(e) => setDegree(e.target.value)}
          min="1"
          step="1"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="coefficients">Coefficients (comma-separated)</Label>
        <Input
          id="coefficients"
          type="text"
          value={coefficients}
          onChange={(e) => setCoefficients(e.target.value)}
          placeholder="e.g. 1, -5, 6"
        />
      </div>

      {/* Included Select import to follow example patterns, not used here */}
      <div className="hidden">
        <Label htmlFor="placeholder">Placeholder Select</Label>
        <Select id="placeholder" value="unused" onChange={() => {}}>
          <option value="unused">Unused</option>
        </Select>
      </div>
    </>
  );

  const results = (
    <div className="text-center">
      {error ? (
        <div className="text-sm text-red-600">{error}</div>
      ) : roots ? (
        <>
          <div className="text-sm text-gray-600 mb-2">Roots</div>
          <div className="space-y-2">
            {roots.map((r, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="text-2xl font-semibold text-blue-900">{formatComplex(r)}</div>
                <div className="text-sm text-gray-700">|z| = {cAbs(r).toFixed(6)}</div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="text-sm text-gray-600">Enter polynomial parameters to see roots.</div>
      )}
    </div>
  );

  const charts = showCharts && roots && roots.length > 0 ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Roots Magnitudes</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip formatter={(value: number, name: string, props: any) => [`${value}`, props.payload.label]} />
          <Bar dataKey="magnitude" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Polynomial Calculator"
      description="Solve polynomial equations and find roots. Enter degree and coefficients (highest degree first)."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
