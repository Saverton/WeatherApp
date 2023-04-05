import { useState, useEffect } from 'react';

const ZIPCODE_REGEX = /^\d{5}$/;

// Zip code state returns the zipcode itself, a function to change the zipcode, and a boolean stating if the zipcode is valid or not
interface ZipCodeState {
  zipcode: string;
  setZipcode: Function;
  valid: boolean;
}

const isValidZipcode = (zipcode: string): boolean => {
  return ZIPCODE_REGEX.test(zipcode);
}

export const useZipCodeSearch = (searchInput: string): ZipCodeState => {
  const [zipcode, setZipcode] = useState("");
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