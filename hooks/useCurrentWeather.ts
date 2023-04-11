import { CurrentWeatherForecast } from '../types';
import { useWeatherData } from './useWeatherData';

type currentWeatherReturn = {
  data: (CurrentWeatherForecast | null),
  loading: boolean
}


export const useCurrentWeather = (zipcode: string): currentWeatherReturn => {
  const { data, loading } = useWeatherData<CurrentWeatherForecast>('https://api.openweathermap.org/data/2.5/weather', zipcode);

  // return current Weather
  return {
    data,
    loading
  };
}