# Calculator Generator

AI-powered calculator generator using OpenAI API.

## Setup

1. Get your OpenAI API key from https://platform.openai.com/api-keys
2. Create a `.env.local` file in the root directory:
   ```
   OPENAI_API_KEY=your_openai_api_key_here
   ```

## Usage

Run the generator to create a test calculator (Torque Converter):

```bash
npm run generate:calculator
```

The script will:
1. Generate the calculator component (`TorqueConverter.tsx`)
2. Generate the content component (`TorqueConverterContent.tsx`)
3. Output the config entry for `calculators.ts`

## After Generation

1. Add imports to `src/config/calculators.ts`:
   ```typescript
   import TorqueConverter from '@/components/calculators/torque-converter/TorqueConverter';
   import TorqueConverterContent from '@/components/calculators/torque-converter/TorqueConverterContent';
   ```

2. Add the config entry to the `calculators` array in `src/config/calculators.ts`

3. Test the calculator in the browser

## Customizing

Edit the `testSpec` object in `scripts/generate-calculator.ts` to generate different calculators.

## Cost

- GPT-4 Turbo: ~$0.01-0.03 per calculator
- GPT-3.5 Turbo: ~$0.001-0.003 per calculator (modify model in script)


