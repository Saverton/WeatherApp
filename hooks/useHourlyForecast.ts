import { useState, useEffect } from 'react';
import { HourlyWeatherForecast, WeatherForecast } from '../types';
import { API_KEY } from '../assets/secret/apiKey';
import { isValidZipcode } from '../utils/isValidZipcode';
import { fetchWeatherData } from '../utils/fetchWeatherData';

interface UseHourlyForecastReturns {
  list: WeatherForecast[],
  location: string
}

export const useHourlyForecast = (zipcode: string): UseHourlyForecastReturns => {
  const [forecast, setForecast] = useState<WeatherForecast[]>([]);
  const [location, setLocation] = useState('null');

  useEffect(() => {
    // only fetch if the zipcode is formatted correctly, will cut down on excess fetches
    if (isValidZipcode(zipcode)) {
      fetchWeatherData(
        `https://api.openweathermap.org/data/2.5/forecast?zip=${zipcode},us&units=imperial&cnt=8&appid=${API_KEY}`,
        (data: HourlyWeatherForecast): void => {
          setForecast(data.list);
          setLocation(data.city.name);
        }
      );
    }
  }, [zipcode]);

  // return forecast;
  return {
    list: forecast,
    location,
  };
}

