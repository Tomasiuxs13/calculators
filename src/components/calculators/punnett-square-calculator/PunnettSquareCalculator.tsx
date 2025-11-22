'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type GenotypeInput = string;

type OffspringCell = {
  genotype: string;
  isDominantPhenotype: boolean;
};

export default function PunnettSquareCalculator() {
  const [parent1Genotype, setParent1Genotype] = useState<GenotypeInput>('Aa');
  const [parent2Genotype, setParent2Genotype] = useState<GenotypeInput>('Aa');
  const [punnettGrid, setPunnettGrid] = useState<OffspringCell[][]>([]);
  const [genotypeFrequencies, setGenotypeFrequencies] = useState<Record<string, number>>({});
  const [phenotypeFrequencies, setPhenotypeFrequencies] = useState<Record<string, number>>({});
  const [showCharts, setShowCharts] = useState(false);

  // Utility helpers
  const sanitizeGenotype = (g: string): string => {
    const letters = g.replace(/[^a-zA-Z]/g, '');
    if (letters.length === 0) return '';
    if (letters.length === 1) return letters + letters;
    return letters.slice(0, 2);
  };

  const getGametes = (genotype: string): string[] => {
    const a = genotype[0];
    const b = genotype[1];
    if (!a || !b) return [];
    const set = Array.from(new Set([a, b]));
    return set.length === 1 ? [a] : set;
  };

  const formatOffspringGenotype = (x: string, y: string): string => {
    const base = x.toUpperCase();
    const isUpperX = x === x.toUpperCase();
    const isUpperY = y === y.toUpperCase();
    const countUpper = (isUpperX ? 1 : 0) + (isUpperY ? 1 : 0);
    if (countUpper === 2) return base + base;
    if (countUpper === 0) return base.toLowerCase() + base.toLowerCase();
    return base + base.toLowerCase();
  };

  const isDominantPhenotype = (genotype: string): boolean => {
    return /[A-Z]/.test(genotype);
  };

  useEffect(() => {
    const g1Raw = sanitizeGenotype(parent1Genotype);
    const g2Raw = sanitizeGenotype(parent2Genotype);

    if (g1Raw.length < 2 || g2Raw.length < 2) {
      setPunnettGrid([]);
      setGenotypeFrequencies({});
      setPhenotypeFrequencies({});
      return;
    }

    const gametes1 = getGametes(g1Raw);
    const gametes2 = getGametes(g2Raw);

    const grid: OffspringCell[][] = [];
    const genotypeCount: Record<string, number> = {};
    let total = 0;
    let dominantCount = 0;

    for (let i = 0; i < gametes1.length; i++) {
      const row: OffspringCell[] = [];
      for (let j = 0; j < gametes2.length; j++) {
        const alleleFrom1 = gametes1[i];
        const alleleFrom2 = gametes2[j];
        const offspring = formatOffspringGenotype(alleleFrom1, alleleFrom2);
        const dominant = isDominantPhenotype(offspring);
        row.push({ genotype: offspring, isDominantPhenotype: dominant });
        genotypeCount[offspring] = (genotypeCount[offspring] || 0) + 1;
        total++;
        if (dominant) dominantCount++;
      }
      grid.push(row);
    }

    setPunnettGrid(grid);
    setGenotypeFrequencies(genotypeCount);
    setPhenotypeFrequencies({
      dominant: isNaN(dominantCount / total) ? 0 : dominantCount / total,
      recessive: isNaN((total - dominantCount) / total) ? 0 : (total - dominantCount) / total,
    });
  }, [parent1Genotype, parent2Genotype]);

  return (
    <CalculatorLayout title="Punnett Square Calculator" category="biology">
      <div>
        <Label>Parent 1 Genotype:</Label>
        <Input value={parent1Genotype} onChange={(e) => setParent1Genotype(e.target.value)} />
        <Label>Parent 2 Genotype:</Label>
        <Input value={parent2Genotype} onChange={(e) => setParent2Genotype(e.target.value)} />
      </div>
      {showCharts && (
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={Object.entries(genotypeFrequencies).map(([key, value]) => ({ genotype: key, frequency: value }))}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="genotype" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="frequency" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      )}
    </CalculatorLayout>
  );
}
