import { useState, useEffect } from 'react';
import { CurrentWeatherForecast, HourlyWeatherForecast, WeatherForecast } from '../types';
import { API_KEY } from '../assets/secret/apiKey';
import { isValidZipcode } from '../utils/isValidZipcode';
import { fetchWeatherData } from '../utils/fetchWeatherData';


export const useCurrentWeather = (zipcode: string): (CurrentWeatherForecast | null) => {
  const [forecast, setForecast] = useState<CurrentWeatherForecast | null>(null);

  useEffect(() => {
    // only fetch if the zipcode is formatted correctly, will cut down on excess fetches
    if (isValidZipcode(zipcode)) {
      fetchWeatherData(
        `https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&units=imperial&appid=${API_KEY}`,
        setForecast
      );
    }
  }, [zipcode]);

  // return forecast;
  return forecast;
}