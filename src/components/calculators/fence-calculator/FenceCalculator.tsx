'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type FenceInputs = {
  perimeter: string; // meters
  panelWidth: string; // meters
  postsPerPanel: string; // integer as string
};

export default function FenceCalculator() {
  const [perimeter, setPerimeter] = useState<string>('100');
  const [panelWidth, setPanelWidth] = useState<string>('2');
  const [postsPerPanel, setPostsPerPanel] = useState<string>('2');

  const [panelsExact, setPanelsExact] = useState<number | null>(null);
  const [panelsRequired, setPanelsRequired] = useState<number | null>(null);
  const [postsRequired, setPostsRequired] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const p = parseFloat(perimeter);
    const w = parseFloat(panelWidth);
    const postsPer = parseInt(postsPerPanel, 10);

    if (!isNaN(p) && p > 0 && !isNaN(w) && w > 0 && !isNaN(postsPer) && postsPer > 0) {
      // Calculate exact number of panels then round up to whole panels
      const exact = p / w;
      const requiredPanels = Math.ceil(exact);
      const requiredPosts = requiredPanels * postsPer;

      setPanelsExact(parseFloat(exact.toFixed(6)));
      setPanelsRequired(requiredPanels);
      setPostsRequired(requiredPosts);
    } else {
      setPanelsExact(null);
      setPanelsRequired(null);
      setPostsRequired(null);
    }
  }, [perimeter, panelWidth, postsPerPanel]);

  const handleDownloadPDF = () => {
    if (panelsRequired === null || postsRequired === null) return;

    generateCalculatorPDF({
      title: 'Fence Calculator Results',
      inputs: [
        { label: 'Perimeter (m)', value: perimeter },
        { label: 'Panel Width (m)', value: panelWidth },
        { label: 'Posts per Panel', value: postsPerPanel },
      ],
      results: [
        { label: 'Exact Panels (no rounding)', value: panelsExact !== null ? `${panelsExact}` : 'N/A' },
        { label: 'Panels Required (rounded up)', value: `${panelsRequired}` },
        { label: 'Total Posts Required', value: `${postsRequired}` },
      ],
    });
  };

  const chartData = panelsRequired !== null && postsRequired !== null ? [
    { label: 'Panels', value: panelsRequired },
    { label: 'Posts', value: postsRequired },
  ] : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="perimeter">Perimeter (m)</Label>
        <Input
          id="perimeter"
          type="number"
          value={perimeter}
          onChange={(e) => setPerimeter(e.target.value)}
          min="0"
          step="0.01"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="panelWidth">Panel Width (m)</Label>
        <Input
          id="panelWidth"
          type="number"
          value={panelWidth}
          onChange={(e) => setPanelWidth(e.target.value)}
          min="0.1"
          step="0.01"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="postsPerPanel">Posts per Panel</Label>
        <Select
          id="postsPerPanel"
          value={postsPerPanel}
          onChange={(e) => setPostsPerPanel(e.target.value)}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </Select>
      </div>
    </>
  );

  const results = panelsRequired !== null && postsRequired !== null ? (
    <div className="text-center space-y-3">
      <div className="text-sm text-gray-600">Results</div>

      <div className="bg-white rounded-lg p-4 shadow-sm">
        <div className="text-xs text-gray-500">Exact panels (unrounded)</div>
        <div className="text-2xl font-bold text-blue-900 my-1">{panelsExact?.toLocaleString()}</div>

        <div className="text-xs text-gray-500">Panels required (rounded up)</div>
        <div className="text-3xl font-extrabold text-green-700 my-1">{panelsRequired}</div>

        <div className="text-xs text-gray-500">Total posts required</div>
        <div className="text-3xl font-extrabold text-yellow-900 my-1">{postsRequired}</div>
      </div>
    </div>
  ) : null;

  const charts = showCharts && chartData.length > 0 ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Materials Summary</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Fence Calculator"
      description="Calculate the number of panels and posts needed for fencing based on perimeter, panel width, and posts per panel."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
