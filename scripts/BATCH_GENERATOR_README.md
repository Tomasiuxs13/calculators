# Batch Calculator Generator

Generate multiple calculators at once using OpenAI API.

## Usage

1. **Edit `calculators-to-generate.json`** to add calculator specifications
2. **Run the batch generator**:
   ```bash
   npm run generate:batch
   ```

## Calculator Specification Format

```json
{
  "name": "CalculatorName",
  "slug": "calculator-slug",
  "category": "conversion",
  "subcategory": "length",
  "description": "Brief description",
  "type": "converter",
  "baseUnit": "m",
  "units": {
    "m": 1,
    "ft": 0.3048
  },
  "inputs": [
    {
      "name": "value",
      "label": "Value",
      "type": "number",
      "defaultValue": "100"
    },
    {
      "name": "fromUnit",
      "label": "From",
      "type": "select",
      "defaultValue": "m",
      "options": [
        { "value": "m", "label": "Meters (m)" },
        { "value": "ft", "label": "Feet (ft)" }
      ]
    }
  ],
  "authorId": "unit-master"
}
```

## Types

- **converter**: Unit conversion calculators
- **formula**: Formula-based calculations
- **financial**: Financial calculators
- **health**: Health/fitness calculators

## Rate Limiting

The script waits 2 seconds between requests to avoid hitting OpenAI rate limits.

## Cost Estimate

- GPT-4 Turbo: ~$0.01-0.03 per calculator
- 5 calculators: ~$0.05-0.15
- 79 calculators: ~$0.79-2.37

## After Generation

1. Add imports to `src/config/calculators.ts`
2. Add config entries to the `calculators` array
3. Test calculators in the browser


