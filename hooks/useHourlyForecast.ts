import { HourlyWeatherForecast, WeatherForecast } from '../types';
import { useWeatherData } from './useWeatherData';

interface UseHourlyForecastReturns {
  list: WeatherForecast[],
  location: string
}

export const useHourlyForecast = (zipcode: string): UseHourlyForecastReturns => {
  const forecast = useWeatherData<HourlyWeatherForecast>('https://api.openweathermap.org/data/2.5/forecast', zipcode);

  const { city, list } = <HourlyWeatherForecast>forecast || {};
  return {
    list: list || [],
    location: city?.name || '',
  };
}

