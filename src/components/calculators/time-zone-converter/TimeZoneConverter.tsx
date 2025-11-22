'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

const timeZoneOffsets: Record<string, number> = {
  UTC: 0,
  EST: -5,
  PST: -8,
  GMT: 0,
};

export default function TimeZoneConverter() {
  const [time, setTime] = useState<string>('12:00');
  const [fromZone, setFromZone] = useState<string>('UTC');
  const [toZone, setToZone] = useState<string>('PST');
  const [result, setResult] = useState<string | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const [hours, minutes] = time.split(':').map(Number);
    const totalMinutes = hours * 60 + minutes + timeZoneOffsets[fromZone] * 60;
    const convertedHours = Math.floor(totalMinutes / 60) % 24;
    const convertedMinutes = totalMinutes % 60;
    setResult(`${String(convertedHours).padStart(2, '0')}:${String(convertedMinutes).padStart(2, '0')}`);
  }, [time, fromZone, toZone]);

  const handleDownloadPDF = () => {
    if (result === null) return;

    generateCalculatorPDF({
      title: 'Time Zone Converter Results',
      inputs: [
        { label: 'Time', value: time },
        { label: 'From Time Zone', value: fromZone },
        { label: 'To Time Zone', value: toZone },
      ],
      results: [
        { label: 'Result', value: result },
      ],
    });
  };

  const inputs = (
    <>  
      <div className="space-y-2">
        <Label htmlFor="time">Time</Label>
        <Input
          id="time"
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="fromZone">From Time Zone</Label>
          <Select
            id="fromZone"
            value={fromZone}
            onChange={(e) => setFromZone(e.target.value)}
          >
            <option value="UTC">UTC</option>
            <option value="EST">Eastern (EST)</option>
            <option value="PST">Pacific (PST)</option>
            <option value="GMT">GMT</option>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="toZone">To Time Zone</Label>
          <Select
            id="toZone"
            value={toZone}
            onChange={(e) => setToZone(e.target.value)}
          >
            <option value="UTC">UTC</option>
            <option value="EST">Eastern (EST)</option>
            <option value="PST">Pacific (PST)</option>
            <option value="GMT">GMT</option>
          </Select>
        </div>
      </div>
    </>
  );

  const results = result !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Result</div>
      <div className="text-5xl font-bold text-blue-900 my-3">
        {result}
      </div>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Time Zone Converter"
      description="Convert time between different time zones worldwide."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
    />
  );
}
