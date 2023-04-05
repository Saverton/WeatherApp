import { useState, useEffect } from 'react';
import { isValidZipcode } from '../utils/isValidZipcode';

// Zip code state returns the zipcode itself, a function to change the zipcode, and a boolean stating if the zipcode is valid or not
interface ZipCodeState {
  zipcode: string;
  setZipcode: Function;
  valid: boolean;
}

export const useZipCodeSearch = (initialValue: string): ZipCodeState => {
  const [zipcode, setZipcode] = useState(initialValue);
  const [valid, setValid] = useState(false);

  useEffect(() => {
    setValid(isValidZipcode(zipcode));
  }, [zipcode]);

  return {
    zipcode,
    setZipcode,
    valid,
  };
}