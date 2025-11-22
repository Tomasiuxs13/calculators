import jsPDF from 'jspdf';

interface PDFData {
  title: string;
  inputs: { label: string; value: string | number }[];
  results: { label: string; value: string | number }[];
  timestamp?: Date;
  table?: {
    headers: string[];
    rows: string[][];
  };
}

export function generateCalculatorPDF(data: PDFData) {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 20;
  let yPosition = margin;

  // Title
  doc.setFontSize(20);
  doc.setFont('helvetica', 'bold');
  doc.text(data.title, pageWidth / 2, yPosition, { align: 'center' });
  yPosition += 15;

  // Timestamp
  const timestamp = data.timestamp || new Date();
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(100, 100, 100);
  doc.text(
    `Generated on: ${timestamp.toLocaleDateString()} ${timestamp.toLocaleTimeString()}`,
    pageWidth / 2,
    yPosition,
    { align: 'center' }
  );
  yPosition += 15;

  // Inputs Section
  if (data.inputs.length > 0) {
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(0, 0, 0);
    doc.text('Input Values', margin, yPosition);
    yPosition += 10;

    doc.setFontSize(11);
    doc.setFont('helvetica', 'normal');
    data.inputs.forEach((input) => {
      if (yPosition > 250) {
        doc.addPage();
        yPosition = margin;
      }
      doc.text(`${input.label}:`, margin + 5, yPosition);
      doc.setFont('helvetica', 'bold');
      doc.text(input.value.toString(), margin + 60, yPosition);
      doc.setFont('helvetica', 'normal');
      yPosition += 8;
    });
    yPosition += 5;
  }

  // Results Section
  if (data.results.length > 0) {
    if (yPosition > 240) {
      doc.addPage();
      yPosition = margin;
    }

    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('Results', margin, yPosition);
    yPosition += 10;

    doc.setFontSize(11);
    doc.setFont('helvetica', 'normal');
    data.results.forEach((result) => {
      if (yPosition > 250) {
        doc.addPage();
        yPosition = margin;
      }
      doc.text(`${result.label}:`, margin + 5, yPosition);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(0, 100, 200);
      doc.text(result.value.toString(), margin + 60, yPosition);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(0, 0, 0);
      yPosition += 8;
    });
  }

  // Table Section
  if (data.table) {
    const table = data.table;
    if (yPosition > 240) {
      doc.addPage();
      yPosition = margin;
    }
    yPosition += 10;
    
    // Headers
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    const colWidth = (pageWidth - 2 * margin) / table.headers.length;
    
    table.headers.forEach((header, i) => {
      doc.text(header, margin + i * colWidth, yPosition);
    });
    yPosition += 7;
    
    // Rows
    doc.setFont('helvetica', 'normal');
    table.rows.forEach((row) => {
      if (yPosition > 270) {
        doc.addPage();
        yPosition = margin + 10;
        // Repeat headers
        doc.setFont('helvetica', 'bold');
        table.headers.forEach((header, i) => {
           doc.text(header, margin + i * colWidth, yPosition);
        });
        yPosition += 7;
        doc.setFont('helvetica', 'normal');
      }
      
      row.forEach((cell, i) => {
        // Truncate if too long
        doc.text(cell.toString().substring(0, 20), margin + i * colWidth, yPosition);
      });
      yPosition += 6;
    });
  }

  // Footer
  const pageCount = (doc as any).internal.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setFontSize(8);
    doc.setTextColor(150, 150, 150);
    doc.text(
      `Page ${i} of ${pageCount}`,
      pageWidth / 2,
      doc.internal.pageSize.getHeight() - 10,
      { align: 'center' }
    );
    doc.text(
      'Omni-Style Calculators',
      pageWidth - margin,
      doc.internal.pageSize.getHeight() - 10,
      { align: 'right' }
    );
  }

  // Generate filename
  const filename = `${data.title.replace(/\s+/g, '_')}_${timestamp.getTime()}.pdf`;
  doc.save(filename);
}
