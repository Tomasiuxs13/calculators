/**
 * Generic unit conversion utility.
 * Each conversion map stores factors relative to a base unit (factor = 1).
 * To convert: value * (toFactor / fromFactor)
 */
export function convert(
  value: number,
  fromUnit: string,
  toUnit: string,
  conversionMap: Record<string, number>
): number {
  const fromFactor = conversionMap[fromUnit];
  const toFactor = conversionMap[toUnit];

  if (fromFactor == null || toFactor == null) {
    return NaN;
  }

  return value * (toFactor / fromFactor);
}
