import { useState, useEffect } from 'react';
import { WeatherForecast } from '../types';
import testForecast from '../testForecast.json';
import { API_KEY } from '../assets/secret/apiKey';
import { isValidZipcode } from '../utils/isValidZipcode';


export const useForecast = (zipcode: string): WeatherForecast[] => {
  const [forecast, setForecast] = useState<WeatherForecast[]>([]);

  useEffect(() => {
    if (isValidZipcode(zipcode)) {
      fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&appid=${API_KEY}`)
        .then(r => {
          if (r.ok) {
            r.json().then((data: WeatherForecast): void => { console.log(data) });
          } else {
            console.warn('something went wrong while fetching.');
          }
        });
    } else {
      console.warn('invalid zipcode, not fetching');
    }
  }, [zipcode]);

  return [testForecast];
}