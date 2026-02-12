'use client';

import { ReactNode } from 'react';
import { Button } from '@/components/ui/Button';
import { Download, ChevronDown, ChevronUp } from 'lucide-react';

interface CalculatorLayoutProps {
  title?: string;
  description?: string;
  category?: string;
  inputs?: ReactNode;
  results?: ReactNode | null;
  showCharts?: boolean;
  onToggleCharts?: () => void;
  onDownloadPDF?: () => void;
  charts?: ReactNode;
  children?: ReactNode;
}

export default function CalculatorLayout({
  title,
  description,
  inputs,
  results,
  showCharts,
  onToggleCharts,
  onDownloadPDF,
  charts,
  children,
}: CalculatorLayoutProps) {
  // If children is provided, use simple layout (legacy support)
  if (children) {
    return (
      <div className="w-full">
        <div className="mb-6">
          {title && <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>}
          {description && <p className="text-gray-600">{description}</p>}
        </div>
        {children}
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="mb-6">
        {title && <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>}
        {description && <p className="text-gray-600">{description}</p>}
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Inputs Section - Left Side */}
        <div className="lg:col-span-2 space-y-4">
          {inputs}
          
          {results !== null && (onDownloadPDF || onToggleCharts) && (
            <div className="flex gap-2 pt-4">
              {onDownloadPDF && (
                <Button
                  onClick={onDownloadPDF}
                  className="flex-1"
                  variant="outline"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </Button>
              )}
              {onToggleCharts && (
                <Button
                  onClick={onToggleCharts}
                  className="flex-1"
                  variant="outline"
                >
                  {showCharts ? (
                    <>
                      <ChevronUp className="w-4 h-4 mr-2" />
                      Show Less
                    </>
                  ) : (
                    <>
                      <ChevronDown className="w-4 h-4 mr-2" />
                      Show More
                    </>
                  )}
                </Button>
              )}
            </div>
          )}
        </div>

        {/* Results Section - Right Side */}
        <div className="lg:col-span-1">
          {results !== null ? (
            <div className="bg-blue-50 rounded-lg border border-blue-200 p-6 sticky top-8" role="region" aria-label="Calculation results">
              {results}
            </div>
          ) : (
            <div className="bg-gray-50 rounded-lg border border-gray-200 p-6 text-center" role="region" aria-label="Calculation results">
              <p className="text-sm text-gray-500">Enter values to see results</p>
            </div>
          )}
        </div>
      </div>

      {/* Charts Section */}
      {showCharts && charts && (
        <div className="mt-6 pt-6 border-t border-gray-200 flex flex-col gap-6" role="region" aria-label="Charts and visualizations">
          {charts}
        </div>
      )}
    </div>
  );
}
