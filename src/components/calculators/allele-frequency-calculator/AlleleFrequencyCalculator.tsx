'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type CountInputKey = 'homozygousAA' | 'heterozygousAa' | 'homozygousaa';

export default function AlleleFrequencyCalculator() {
  const [homozygousAA, setHomozygousAA] = useState<string>('25');
  const [heterozygousAa, setHeterozygousAa] = useState<string>('50');
  const [homozygousaa, setHomozygousaa] = useState<string>('25');

  const [alleleP, setAlleleP] = useState<number | null>(null); // frequency of A
  const [alleleQ, setAlleleQ] = useState<number | null>(null); // frequency of a
  const [totalIndividuals, setTotalIndividuals] = useState<number>(0);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const aa = parseInt(homozygousAA, 10);
    const Aa = parseInt(heterozygousAa, 10);
    const aa2 = parseInt(homozygousaa, 10);

    const validAA = Number.isFinite(aa) && aa >= 0 ? aa : 0;
    const validAa = Number.isFinite(Aa) && Aa >= 0 ? Aa : 0;
    const validaa = Number.isFinite(aa2) && aa2 >= 0 ? aa2 : 0;

    const N = validAA + validAa + validaa;
    setTotalIndividuals(N);

    if (N > 0) {
      const totalAlleles = 2 * N;
      const countA = 2 * validAA + validAa;
      const counta = 2 * validaa + validAa;

      const p = countA / totalAlleles;
      const q = counta / totalAlleles;

      setAlleleP(isNaN(p) ? null : parseFloat(p.toFixed(6)));
      setAlleleQ(isNaN(q) ? null : parseFloat(q.toFixed(6)));
    } else {
      setAlleleP(null);
      setAlleleQ(null);
    }
  }, [homozygousAA, heterozygousAa, homozygousaa]);

  const handleDownloadPDF = () => {
    if (alleleP === null || alleleQ === null) return;

    generateCalculatorPDF({
      title: 'Allele Frequency Calculator Results',
      inputs: [
        { label: 'Homozygous AA Count', value: homozygousAA },
        { label: 'Heterozygous Aa Count', value: heterozygousAa },
        { label: 'Homozygous aa Count', value: homozygousaa },
      ],
      results: [
        { label: 'Total Individuals', value: `${totalIndividuals}` },
        { label: 'Allele A frequency (p)', value: `${alleleP}` },
        { label: 'Allele a frequency (q)', value: `${alleleQ}` },
      ],
    });
  };

  const chartData = alleleP !== null && alleleQ !== null ? [
    { label: 'p (A)', value: alleleP * 100, unit: '%' },
    { label: 'q (a)', value: alleleQ * 100, unit: '%' },
  ] : [];

  const inputs = (
    <>
      <div className="grid grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label htmlFor="homozygousAA">Homozygous AA Count</Label>
          <Input
            id="homozygousAA"
            type="number"
            value={homozygousAA}
            onChange={(e) => setHomozygousAA(e.target.value)}
            min="0"
            step="1"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="heterozygousAa">Heterozygous Aa Count</Label>
          <Input
            id="heterozygousAa"
            type="number"
            value={heterozygousAa}
            onChange={(e) => setHeterozygousAa(e.target.value)}
            min="0"
            step="1"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="homozygousaa">Homozygous aa Count</Label>
          <Input
            id="homozygousaa"
            type="number"
            value={homozygousaa}
            onChange={(e) => setHomozygousaa(e.target.value)}
            min="0"
            step="1"
          />
        </div>
      </div>

      {showCharts && chartData.length > 0 && (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="label" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      )}

      <button onClick={handleDownloadPDF} className="mt-4 p-2 bg-blue-500 text-white rounded">Download Results as PDF</button>
    </>
  );

  return (
    <CalculatorLayout title="Allele Frequency Calculator">
      {inputs}
    </CalculatorLayout>
  );
}
