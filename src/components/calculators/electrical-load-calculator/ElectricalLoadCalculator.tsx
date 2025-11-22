'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

export default function ElectricalLoadCalculator() {
  const [appliances, setAppliances] = useState<string>('10');
  const [averageWattage, setAverageWattage] = useState<string>('1500');
  const [voltage, setVoltage] = useState<string>('240');

  const [totalWatts, setTotalWatts] = useState<number | null>(null);
  const [totalAmps, setTotalAmps] = useState<number | null>(null);
  const [perApplianceAmps, setPerApplianceAmps] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const nAppliances = parseFloat(appliances);
    const watt = parseFloat(averageWattage);
    const volt = parseFloat(voltage);

    if (!isNaN(nAppliances) && nAppliances >= 0 && !isNaN(watt) && watt >= 0 && !isNaN(volt) && volt > 0) {
      const watts = nAppliances * watt;
      const amps = watts / volt;
      const perAmp = watt / volt;
      setTotalWatts(parseFloat(watts.toFixed(2)));
      setTotalAmps(parseFloat(amps.toFixed(3)));
      setPerApplianceAmps(parseFloat(perAmp.toFixed(3)));
    } else {
      setTotalWatts(null);
      setTotalAmps(null);
      setPerApplianceAmps(null);
    }
  }, [appliances, averageWattage, voltage]);

  const handleDownloadPDF = () => {
    if (totalWatts === null || totalAmps === null || perApplianceAmps === null) return;

    generateCalculatorPDF({
      title: 'Electrical Load Calculation Results',
      inputs: [
        { label: 'Number of Appliances', value: appliances },
        { label: 'Average Wattage per Appliance (W)', value: averageWattage },
        { label: 'Voltage (V)', value: voltage },
      ],
      results: [
        { label: 'Total Wattage (W)', value: `${totalWatts} W` },
        { label: 'Total Current (A)', value: `${totalAmps} A` },
        { label: 'Per Appliance Current (A)', value: `${perApplianceAmps} A` },
      ],
    });
  };

  const chartData = totalWatts !== null && totalAmps !== null ? [
    { label: 'Total Wattage', value: totalWatts, unit: 'W' },
    { label: 'Total Current', value: totalAmps, unit: 'A' },
    { label: 'Per Appliance Current', value: perApplianceAmps || 0, unit: 'A' },
  ] : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="appliances">Number of Appliances</Label>
        <Input
          id="appliances"
          type="number"
          value={appliances}
          onChange={(e) => setAppliances(e.target.value)}
          min="0"
          step="1"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="averageWattage">Average Wattage per Appliance (W)</Label>
        <Input
          id="averageWattage"
          type="number"
          value={averageWattage}
          onChange={(e) => setAverageWattage(e.target.value)}
          min="0"
          step="1"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="voltage">Voltage (V)</Label>
        <Input
          id="voltage"
          type="number"
          value={voltage}
          onChange={(e) => setVoltage(e.target.value)}
          min="1"
          step="1"
        />
      </div>
    </>
  );

  const results = totalWatts !== null && totalAmps !== null ? (
    <div className="text-center space-y-3">
      <div className="text-sm text-gray-600">Results</div>

      <div className="bg-white border rounded-lg p-4 shadow-sm">
        <div className="text-xs text-gray-500">Total Wattage</div>
        <div className="text-4xl font-bold text-blue-900 my-2">{totalWatts.toLocaleString()} W</div>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <div className="text-xs text-gray-500">Total Current</div>
            <div className="text-2xl font-semibold text-gray-800">{totalAmps} A</div>
          </div>

          <div>
            <div className="text-xs text-gray-500">Per Appliance Current</div>
            <div className="text-2xl font-semibold text-gray-800">{perApplianceAmps} A</div>
          </div>
        </div>
      </div>
    </div>
  ) : null;

  const charts = showCharts && chartData.length > 0 ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Electrical Load Overview</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${Number(value).toFixed(2)} ${chartData.find(d => d.value === value)?.unit || ''}`} />
          <Bar dataKey="value" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Electrical Load Calculator"
      description="Calculate electrical load for a building."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
