import OpenAI from 'openai';
import fs from 'fs/promises';
import path from 'path';
import { config } from 'dotenv';

// Load environment variables from .env.local or .env
config({ path: path.join(process.cwd(), '.env.local') });
config({ path: path.join(process.cwd(), '.env') });

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

interface CalculatorSpec {
  name: string;
  slug: string;
  category: string;
  subcategory: string;
  description: string;
  type: 'converter' | 'formula' | 'financial' | 'health';
  units?: { [key: string]: number };
  formula?: string;
  inputs: Array<{
    name: string;
    label: string;
    type: 'number' | 'select' | 'text';
    defaultValue: string;
    options?: Array<{ value: string; label: string }>;
  }>;
  authorId: string;
  baseUnit?: string; // For converters, the base unit for conversion
}

/**
 * Converts a slug to a PascalCase component name, preserving common acronyms in uppercase.
 * This should match the spec.name to ensure file names and imports are consistent.
 */
function getComponentName(slug: string): string {
  const acronyms = new Set([
    'ira', 'lcm', 'gcd', 'bmi', 'bmr', 'tdee', 'roi', 'apr', 'apy',
    'mpg', 'mph', 'kph', 'rpm', 'fps', 'gdp', 'api', 'url', 'html',
    'css', 'js', 'ts', 'json', 'xml', 'pdf', 'csv', 'http', 'https',
    'ssl', 'tls', 'dns', 'ip', 'cpu', 'gpu', 'ram', 'rom', 'ssd', 'hdd'
  ]);

  // Convert numbers to words
  const numberToWord: Record<string, string> = {
    '0': 'Zero', '1': 'One', '2': 'Two', '3': 'Three', '4': 'Four',
    '5': 'Five', '6': 'Six', '7': 'Seven', '8': 'Eight', '9': 'Nine',
    '10': 'Ten', '11': 'Eleven', '12': 'Twelve', '13': 'Thirteen',
    '14': 'Fourteen', '15': 'Fifteen', '16': 'Sixteen', '17': 'Seventeen',
    '18': 'Eighteen', '19': 'Nineteen', '20': 'Twenty'
  };

  return slug
    .split('-')
    .map(word => {
      const lowerWord = word.toLowerCase();
      if (acronyms.has(lowerWord)) {
        return lowerWord.toUpperCase();
      }
      // Handle words starting with numbers (e.g., "5k" -> "FiveK", "10k" -> "TenK")
      const numberMatch = word.match(/^(\d+)(.*)$/);
      if (numberMatch) {
        const [, number, rest] = numberMatch;
        const numberWord = numberToWord[number] || number;
        const restPart = rest ? rest.charAt(0).toUpperCase() + rest.slice(1) : '';
        return numberWord + restPart;
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join('');
}

async function generateCalculator(spec: CalculatorSpec) {
  // Validate that spec.name matches what getComponentName would produce from slug
  const expectedName = getComponentName(spec.slug);
  if (spec.name !== expectedName) {
    console.warn(`⚠️  Warning: spec.name "${spec.name}" doesn't match expected name "${expectedName}" from slug "${spec.slug}"`);
    console.warn(`   This may cause import mismatches. Consider using name: "${expectedName}"`);
  }
  
  console.log(`\n🤖 Generating ${spec.name}...`);

  // Read example files for context
  const exampleCalculator = await fs.readFile(
    path.join(process.cwd(), 'src/components/calculators/length-converter/LengthConverter.tsx'),
    'utf-8'
  );
  const exampleContent = await fs.readFile(
    path.join(process.cwd(), 'src/components/calculators/length-converter/LengthConverterContent.tsx'),
    'utf-8'
  );

  const prompt = `You are an expert React/TypeScript developer. Generate a complete calculator component following the exact patterns from the example code.

EXAMPLE CALCULATOR CODE:
\`\`\`typescript
${exampleCalculator}
\`\`\`

EXAMPLE CONTENT CODE:
\`\`\`typescript
${exampleContent.substring(0, 2000)}...
\`\`\`

REQUIREMENTS:
1. Use CalculatorLayout component (import from '@/components/calculators/CalculatorLayout')
2. Auto-calculate on input change using useEffect (no "Calculate" button)
3. Include PDF download functionality using generateCalculatorPDF
4. Include charts using recharts (BarChart for converters, appropriate chart for other types)
5. Default values should show results immediately on page load
6. Follow the exact code structure and patterns from the example
7. Use TypeScript with proper types
8. Use Tailwind CSS classes
9. Import from '@/components/ui/Input', '@/components/ui/Label', '@/components/ui/Select'
10. For converters: use the shared convert() utility from '@/utils/conversions' instead of inline conversion logic
11. Use parseNumericInput from '@/utils/validation' for safe number parsing
12. Content component should use reusable components from '@/components/content': ContentArticle, ContentSection, ContentFormula, ContentExample, ContentUseCases, ContentTermsList (NOT raw Tailwind JSX)
13. DO NOT include FAQ section in content component — FAQ data goes in the config and is rendered automatically by the page template
14. Include 3-5 FAQ items in the config as structured data (question/answer pairs)

CALCULATOR SPECIFICATION:
- Name: ${spec.name}
- Slug: ${spec.slug}
- Category: ${spec.category}
- Subcategory: ${spec.subcategory}
- Description: ${spec.description}
- Type: ${spec.type}
${spec.units ? `- Units: ${JSON.stringify(spec.units, null, 2)}` : ''}
${spec.baseUnit ? `- Base Unit: ${spec.baseUnit}` : ''}
${spec.formula ? `- Formula: ${spec.formula}` : ''}
- Inputs: ${JSON.stringify(spec.inputs, null, 2)}
- Author ID: ${spec.authorId}

Generate the complete code for:
1. Calculator component: ${spec.name}.tsx (export default function ${spec.name}())
2. Content component: ${spec.name}Content.tsx (export default function ${spec.name}Content())
3. Config entry: JSON object for calculators.ts

Return as JSON with these exact keys:
{
  "calculator": "full TypeScript React component code",
  "content": "full TypeScript React content component code using ContentArticle, ContentSection, etc.",
  "config": {
    "id": "${spec.slug}",
    "title": "...",
    "slug": "${spec.slug}",
    "description": "...",
    "category": "${spec.category}",
    "subcategory": "${spec.subcategory}",
    "authorId": "${spec.authorId}",
    "meta": {
      "title": "... (max 60 chars, include primary keyword)",
      "description": "... (120-160 chars, include primary keyword)",
      "keywords": ["keyword1", "keyword2", "keyword3", "keyword4", "keyword5"]
    },
    "faq": [
      { "question": "...", "answer": "..." },
      { "question": "...", "answer": "..." },
      { "question": "...", "answer": "..." }
    ],
    "lastModified": "${new Date().toISOString().split('T')[0]}"
  }
}`;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-5-mini-2025-08-07",
      messages: [
        {
          role: "system",
          content: "You are an expert React/TypeScript developer specializing in Next.js 14, TypeScript, Tailwind CSS, and calculator components. Always return valid JSON."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      response_format: { type: "json_object" },
    });

    const result = JSON.parse(completion.choices[0].message.content || '{}');
    
    if (!result.calculator || !result.content || !result.config) {
      throw new Error('Invalid response from OpenAI - missing required fields');
    }

    // Create directory
    const dir = path.join(process.cwd(), 'src/components/calculators', spec.slug);
    await fs.mkdir(dir, { recursive: true });
    
    // Write calculator component
    await fs.writeFile(
      path.join(dir, `${spec.name}.tsx`),
      result.calculator
    );
    console.log(`✓ Calculator component written: ${path.join(dir, `${spec.name}.tsx`)}`);
    
    // Write content component
    await fs.writeFile(
      path.join(dir, `${spec.name}Content.tsx`),
      result.content
    );
    console.log(`✓ Content component written: ${path.join(dir, `${spec.name}Content.tsx`)}`);
    
    return result.config;
  } catch (error) {
    console.error(`✗ Error generating ${spec.name}:`, error);
    throw error;
  }
}

// Test with one calculator
const testSpec: CalculatorSpec = {
  name: 'TorqueConverter',
  slug: 'torque-converter',
  category: 'conversion',
  subcategory: 'torque',
  description: 'Convert between newton-meters, pound-feet, and kilogram-centimeters.',
  type: 'converter',
  baseUnit: 'Nm',
  units: {
    Nm: 1,
    lbft: 1.35582,
    kgcm: 0.0980665,
  },
  inputs: [
    {
      name: 'value',
      label: 'Torque',
      type: 'number',
      defaultValue: '100',
    },
    {
      name: 'fromUnit',
      label: 'From',
      type: 'select',
      defaultValue: 'Nm',
      options: [
        { value: 'Nm', label: 'Newton-meters (Nm)' },
        { value: 'lbft', label: 'Pound-feet (lb-ft)' },
        { value: 'kgcm', label: 'Kilogram-centimeters (kg-cm)' },
      ],
    },
    {
      name: 'toUnit',
      label: 'To',
      type: 'select',
      defaultValue: 'lbft',
      options: [
        { value: 'Nm', label: 'Newton-meters (Nm)' },
        { value: 'lbft', label: 'Pound-feet (lb-ft)' },
        { value: 'kgcm', label: 'Kilogram-centimeters (kg-cm)' },
      ],
    },
  ],
  authorId: 'unit-master',
};

async function main() {
  if (!process.env.OPENAI_API_KEY) {
    console.error('❌ Error: OPENAI_API_KEY environment variable is not set');
    console.log('\n📝 Please create a .env.local file in the project root with:');
    console.log('   OPENAI_API_KEY=sk-your-key-here');
    console.log('\n💡 Get your API key from: https://platform.openai.com/api-keys');
    process.exit(1);
  }

  try {
    const config = await generateCalculator(testSpec);
    
    console.log('\n✅ Calculator generated successfully!');
    console.log('\n📋 Config entry for calculators.ts:');
    console.log(JSON.stringify(config, null, 2));
    console.log('\n⚠️  Remember to:');
    console.log('1. Add imports to src/config/calculators.ts');
    console.log('2. Add the config entry to the calculators array');
    console.log('3. Test the calculator in the browser');
  } catch (error) {
    console.error('❌ Generation failed:', error);
    process.exit(1);
  }
}

main();

