import { useState, useEffect } from 'react';
import { CurrentWeatherForecast, HourlyWeatherForecast, WeatherForecast } from '../types';
import { API_KEY } from '../assets/secret/apiKey';
import { isValidZipcode } from '../utils/isValidZipcode';
import { fetchWeatherData } from '../utils/fetchWeatherData';
import { useWeatherData } from './useWeatherData';


export const useCurrentWeather = (zipcode: string): (CurrentWeatherForecast | null) => {
  const currentWeather = useWeatherData('https://api.openweathermap.org/data/2.5/weather', zipcode);

  // return current Weather
  return <CurrentWeatherForecast | null> currentWeather;
}