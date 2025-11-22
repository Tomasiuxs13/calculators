'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type NumericString = string;

export default function SolarPanelCalculator() {
  // Default values as strings so Input components are controlled
  const [monthlyElectricity, setMonthlyElectricity] = useState<NumericString>('500');
  const [roofArea, setRoofArea] = useState<NumericString>('50');
  const [sunlightHours, setSunlightHours] = useState<NumericString>('5');

  // Results
  const [panelsNeeded, setPanelsNeeded] = useState<number | null>(null);
  const [areaNeeded, setAreaNeeded] = useState<number | null>(null);
  const [possiblePanelsByArea, setPossiblePanelsByArea] = useState<number | null>(null);
  const [possibleMonthlyProduction, setPossibleMonthlyProduction] = useState<number | null>(null);
  const [coveragePercent, setCoveragePercent] = useState<number | null>(null);
  const [estimatedMonthlySavings, setEstimatedMonthlySavings] = useState<number | null>(null);

  const [showCharts, setShowCharts] = useState(false);

  // Constants / assumptions
  const PANEL_KW = 0.35; // 350 W panel -> 0.35 kW
  const PANEL_AREA = 1.7; // average panel area in m^2
  const PERFORMANCE_RATIO = 0.75; // accounts for system losses
  const DAYS_PER_MONTH = 30;
  const COST_PER_KWH = 0.13; // assumed cost in currency per kWh for savings estimate

  useEffect(() => {
    const monthly = parseFloat(monthlyElectricity);
    const area = parseFloat(roofArea);
    const sunlight = parseFloat(sunlightHours);

    if (isNaN(monthly) || monthly <= 0 || isNaN(area) || area < 0 || isNaN(sunlight) || sunlight <= 0) {
      setPanelsNeeded(null);
      setAreaNeeded(null);
      setPossiblePanelsByArea(null);
      setPossibleMonthlyProduction(null);
      setCoveragePercent(null);
      setEstimatedMonthlySavings(null);
      return;
    }

    // Convert monthly consumption to a base daily value (base unit = kWh/day)
    const dailyConsumption = monthly / DAYS_PER_MONTH; // kWh/day

    // Monthly energy produced per panel:
    const monthlyProductionPerPanel = PANEL_KW * sunlight * PERFORMANCE_RATIO * DAYS_PER_MONTH; // kWh/month

    // Panels required to meet monthly consumption
    const requiredPanels = monthlyProductionPerPanel > 0 ? Math.ceil(monthly / monthlyProductionPerPanel) : Infinity;

    // Area required for those panels
    const requiredArea = requiredPanels * PANEL_AREA; // m^2

    // How many panels can fit on the roof
    const maxPanelsByArea = area >= 0 ? Math.floor(area / PANEL_AREA) : 0;

    // Estimated monthly production given roof constraints
    const estimatedProductionByArea = maxPanelsByArea * monthlyProductionPerPanel; // kWh/month

    // Coverage percent of consumption achieved by available roof
    const coverage = monthly > 0 ? Math.min(100, (estimatedProductionByArea / monthly) * 100) : 0;

    // Estimated monthly savings using cost per kWh
    const savings = Math.min(estimatedProductionByArea, monthly) * COST_PER_KWH;

    setPanelsNeeded(Number.isFinite(requiredPanels) ? requiredPanels : null);
    setAreaNeeded(Number.isFinite(requiredArea) ? parseFloat(requiredArea.toFixed(2)) : null);
    setPossiblePanelsByArea(maxPanelsByArea);
    setPossibleMonthlyProduction(parseFloat(estimatedProductionByArea.toFixed(2)));
    setCoveragePercent(parseFloat(coverage.toFixed(1)));
    setEstimatedMonthlySavings(parseFloat(savings.toFixed(2)));
  }, [monthlyElectricity, roofArea, sunlightHours]);

  // Initialize as soon as the component mounts
  useEffect(() => {
    setMonthlyElectricity('500');
    setRoofArea('50');
    setSunlightHours('5');
  }, []);

  const handleDownloadPDF = () => {
    // PDF generation logic here
  };

  return (
    <CalculatorLayout>
      <h1>Solar Panel Calculator</h1>
      <Label htmlFor="monthlyElectricity">Monthly Electricity Consumption (kWh)</Label>
      <Input
        id="monthlyElectricity"
        type="number"
        value={monthlyElectricity}
        onChange={(e) => setMonthlyElectricity(e.target.value)}
      />

      <Label htmlFor="roofArea">Available Roof Area (m²)</Label>
      <Input
        id="roofArea"
        type="number"
        value={roofArea}
        onChange={(e) => setRoofArea(e.target.value)}
      />

      <Label htmlFor="sunlightHours">Average Sunlight Hours per Day</Label>
      <Input
        id="sunlightHours"
        type="number"
        value={sunlightHours}
        onChange={(e) => setSunlightHours(e.target.value)}
      />

      <button onClick={() => setShowCharts(!showCharts)}>Show Charts</button>
      
      {showCharts && (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={[{ panelsNeeded, estimatedMonthlySavings }]}>
            <CartesianGrid />
            <XAxis dataKey="panelsNeeded" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="estimatedMonthlySavings" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      )}

      <button onClick={handleDownloadPDF}>Download PDF</button>
    </CalculatorLayout>
  );
}
