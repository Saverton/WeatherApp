import { useState, useEffect } from 'react';
import { isValidZipcode } from '../utils/isValidZipcode';
import { ZipCodeState } from '../types';

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