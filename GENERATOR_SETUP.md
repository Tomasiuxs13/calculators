# AI Calculator Generator Setup

## Quick Start

1. **Get OpenAI API Key**
   - Go to https://platform.openai.com/api-keys
   - Create a new API key
   - Copy the key

2. **Create `.env.local` file** in the root directory:
   ```bash
   # Create the file
   touch .env.local
   
   # Add your API key (replace with your actual key)
   echo "OPENAI_API_KEY=sk-your-key-here" > .env.local
   ```
   
   Or manually create `.env.local` and add:
   ```
   OPENAI_API_KEY=sk-your-key-here
   ```

3. **Run the generator**:
   ```bash
   npm run generate:calculator
   ```

## What It Does

The generator will create:
- `src/components/calculators/torque-converter/TorqueConverter.tsx`
- `src/components/calculators/torque-converter/TorqueConverterContent.tsx`
- Output the config entry for `calculators.ts`

## After Generation

1. **Add imports** to `src/config/calculators.ts`:
   ```typescript
   import TorqueConverter from '@/components/calculators/torque-converter/TorqueConverter';
   import TorqueConverterContent from '@/components/calculators/torque-converter/TorqueConverterContent';
   ```

2. **Add config entry** to the `calculators` array (the script will output the JSON)

3. **Test** the calculator at `/calculators/torque-converter`

## Cost

- GPT-4 Turbo: ~$0.01-0.03 per calculator
- For 79 calculators: ~$0.79-2.37 total

## Customizing

Edit the `testSpec` object in `scripts/generate-calculator.ts` to generate different calculators.

