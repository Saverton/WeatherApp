const ZIPCODE_REGEX = /^\d{5}$/;

/**
 * Checks if a given zip code is valid (5 digit string).
 * @param zipcode string
 * @returns boolean
 */
export const isValidZipcode = (zipcode: string): boolean => {
  return ZIPCODE_REGEX.test(zipcode);
}