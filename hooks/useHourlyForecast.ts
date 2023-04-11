import { HourlyWeatherForecast, WeatherForecast } from '../types';
import { useWeatherData } from './useWeatherData';

interface UseHourlyForecastReturns {
  list: WeatherForecast[],
  location: string,
  loading: boolean,
}

export const useHourlyForecast = (zipcode: string): UseHourlyForecastReturns => {
  const { data, loading } = useWeatherData<HourlyWeatherForecast>('https://api.openweathermap.org/data/2.5/forecast', zipcode);

  const { city, list } = <HourlyWeatherForecast>data || {};
  return {
    list: list || [],
    location: city?.name || '',
    loading
  };
}

