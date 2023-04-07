/**
 * Format a number temperature in degrees fahrenheit to a whole number with the degrees fahrenheit symbol.
 * @param temp number (temp in fahrenheit)
 * @returns string formatted temperature
 */
export const formatTempFahr = (temp: number): string => {
  return `${Math.round(temp)}\u2109`;
}