/**
 * Parse a string to a number safely, returning 0 for invalid inputs.
 */
export function parseNumericInput(value: string): number {
  const parsed = parseFloat(value);
  return isNaN(parsed) ? 0 : parsed;
}

/**
 * Clamp a number between min and max values.
 */
export function clampNumber(value: number, min: number, max: number): number {
  if (isNaN(value)) return min;
  return Math.min(Math.max(value, min), max);
}
