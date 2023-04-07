import { useState, useEffect } from 'react';
import { HourlyWeatherForecast, WeatherForecast } from '../types';
import { API_KEY } from '../assets/secret/apiKey';
import { isValidZipcode } from '../utils/isValidZipcode';
import { fetchWeatherData } from '../utils/fetchWeatherData';
import { useWeatherData } from './useWeatherData';

interface UseHourlyForecastReturns {
  list: WeatherForecast[],
  location: string
}

export const useHourlyForecast = (zipcode: string): UseHourlyForecastReturns => {
  const forecast = useWeatherData('https://api.openweathermap.org/data/2.5/forecast', zipcode);

  const { city, list } = <HourlyWeatherForecast>forecast || {};
  return {
    list: list || [],
    location: city?.name || '',
  };
}

