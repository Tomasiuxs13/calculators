'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type Nucleotide = 'A' | 'T' | 'C' | 'G';
type OutputType = 'complement' | 'reverse-complement';

const complementMap: Record<Nucleotide, Nucleotide> = {
  A: 'T',
  T: 'A',
  C: 'G',
  G: 'C',
};

function sanitizeSequence(input: string): string {
  return input.replace(/\s+/g, '').toUpperCase();
}

function isValidDNA(seq: string): boolean {
  return /^[ATCG]*$/.test(seq);
}

function computeComplement(seq: string): string {
  return seq
    .split('')
    .map((ch) => (complementMap[ch as Nucleotide] ?? '?'))
    .join('');
}

function computeReverseComplement(seq: string): string {
  return computeComplement(seq).split('').reverse().join('');
}

function nucleotideCounts(seq: string) {
  const counts: Record<Nucleotide, number> = { A: 0, T: 0, C: 0, G: 0 };
  for (const ch of seq) {
    if (ch in counts) counts[ch as Nucleotide]++;
  }
  return counts;
}

export default function DNASequenceCalculator() {
  const [sequence, setSequence] = useState<string>('ATCG');
  const [outputType, setOutputType] = useState<OutputType>('complement');
  const [result, setResult] = useState<string | null>(null);
  const [length, setLength] = useState<number>(0);
  const [gcContent, setGcContent] = useState<number | null>(null);
  const [counts, setCounts] = useState<Record<Nucleotide, number>>({ A: 0, T: 0, C: 0, G: 0 });
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const sanitized = sanitizeSequence(sequence);
    if (!isValidDNA(sanitized) || sanitized.length === 0) {
      setResult(null);
      setLength(0);
      setGcContent(null);
      setCounts({ A: 0, T: 0, C: 0, G: 0 });
      return;
    }

    const computed = outputType === 'complement' ? computeComplement(sanitized) : computeReverseComplement(sanitized);
    setResult(computed);
    setLength(sanitized.length);

    const cts = nucleotideCounts(sanitized);
    setCounts(cts);

    const gc = (cts.G + cts.C) / sanitized.length;
    setGcContent(isNaN(gc) ? null : parseFloat(gc.toFixed(2)));
  }, [sequence, outputType]);

  const handleDownloadPDF = () => {
    if (result === null) return;

    generateCalculatorPDF({
      title: 'DNA Sequence Analysis Results',
      inputs: [
        { label: 'DNA Sequence', value: sequence },
        { label: 'Output Type', value: outputType },
      ],
      results: [
        { label: 'Result', value: result },
        { label: 'Length', value: `${length} nt` },
        { label: 'GC Content', value: `${gcContent !== null ? gcContent : 'N/A'} %` },
      ],
    });
  };

  const chartData = [
    { nucleotide: 'A', count: counts.A },
    { nucleotide: 'T', count: counts.T },
    { nucleotide: 'C', count: counts.C },
    { nucleotide: 'G', count: counts.G },
  ];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="sequence">DNA Sequence</Label>
        <Input
          id="sequence"
          type="text"
          value={sequence}
          onChange={(e) => setSequence(e.target.value)}
          placeholder="e.g. ATCGGTA"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="outputType">Output Type</Label>
          <Select
            id="outputType"
            value={outputType}
            onChange={(e) => setOutputType(e.target.value as OutputType)}
          >
            <option value="complement">Complement</option>
            <option value="reverse-complement">Reverse Complement</option>
          </Select>
        </div>

        <div className="flex items-center">
          <button onClick={handleDownloadPDF} className="btn">
            Download PDF
          </button>
        </div>
      </div>
    </>
  );

  return (
    <CalculatorLayout title="DNA Sequence Calculator" category="biology">
      {inputs}
      {result && <div>Result: {result}</div>}
      {length > 0 && <div>Length: {length} nt</div>}
      {gcContent !== null && <div>GC Content: {gcContent} %</div>}
      {showCharts && (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="nucleotide" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      )}
      {/* Additional logic to toggle showCharts */}
    </CalculatorLayout>
  );
}
