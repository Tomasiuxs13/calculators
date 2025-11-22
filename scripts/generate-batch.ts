import OpenAI from 'openai';
import fs from 'fs/promises';
import path from 'path';
import { config } from 'dotenv';
import { updateCalculatorsConfig } from './update-calculators-config';

// Load environment variables
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
  baseUnit?: string;
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

async function generateCalculator(spec: CalculatorSpec): Promise<any> {
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
10. For converters: convert to base unit first, then to target unit
11. Content component should be SEO-optimized with proper headings, examples, and FAQs

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
  "content": "full TypeScript React content component code",
  "config": {
    "id": "${spec.slug}",
    "title": "...",
    "slug": "${spec.slug}",
    "description": "...",
    "category": "${spec.category}",
    "subcategory": "${spec.subcategory}",
    "authorId": "${spec.authorId}",
    "meta": {
      "title": "...",
      "description": "...",
      "keywords": ["..."]
    }
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

async function main() {
  if (!process.env.OPENAI_API_KEY) {
    console.error('❌ Error: OPENAI_API_KEY environment variable is not set');
    console.log('\n📝 Please create a .env.local file in the project root with:');
    console.log('   OPENAI_API_KEY=sk-your-key-here');
    console.log('\n💡 Get your API key from: https://platform.openai.com/api-keys');
    process.exit(1);
  }

  // Read calculator specs
  const specsPath = path.join(process.cwd(), 'scripts/calculators-to-generate.json');
  const specs: CalculatorSpec[] = JSON.parse(await fs.readFile(specsPath, 'utf-8'));

  console.log(`\n🚀 Starting batch generation of ${specs.length} calculators...\n`);

  const configs = [];
  const errors: Array<{ spec: string; error: string }> = [];

  for (let i = 0; i < specs.length; i++) {
    const spec = specs[i];
    console.log(`\n[${i + 1}/${specs.length}] Processing ${spec.name}...`);
    
    try {
      const config = await generateCalculator(spec);
      configs.push(config);
      console.log(`✅ ${spec.name} generated successfully`);
      
      // Rate limiting - wait 2 seconds between requests to avoid hitting rate limits
      if (i < specs.length - 1) {
        console.log('⏳ Waiting 2 seconds before next request...');
        await new Promise(resolve => setTimeout(resolve, 2000));
      }
    } catch (error: any) {
      console.error(`❌ Failed to generate ${spec.name}:`, error.message);
      errors.push({ spec: spec.name, error: error.message });
    }
  }

  console.log('\n' + '='.repeat(60));
  console.log(`\n📊 Generation Summary:`);
  console.log(`   ✅ Successfully generated: ${configs.length}/${specs.length}`);
  console.log(`   ❌ Failed: ${errors.length}/${specs.length}`);
  
  if (errors.length > 0) {
    console.log(`\n❌ Errors:`);
    errors.forEach(({ spec, error }) => {
      console.log(`   - ${spec}: ${error}`);
    });
  }

  if (configs.length > 0) {
    console.log(`\n📋 Generated ${configs.length} config entr${configs.length === 1 ? 'y' : 'ies'}`);
    
    // Automatically update calculators.ts
    try {
      await updateCalculatorsConfig(configs);
      console.log(`\n✅ All calculators have been automatically added to calculators.ts!`);
      console.log(`\n🎉 Next Steps:`);
      console.log(`1. Review the changes in src/config/calculators.ts`);
      console.log(`2. Test the calculators in the browser`);
      console.log(`3. Run 'npm run build' to verify everything compiles`);
    } catch (error: any) {
      console.error(`\n⚠️  Could not automatically update calculators.ts:`, error.message);
      console.log(`\n📋 Manual update required. Generated config entries:\n`);
      console.log(JSON.stringify(configs, null, 2));
    }
  }
}

main().catch(console.error);

