import { CurrentWeatherForecast } from '../types';
import { useWeatherData } from './useWeatherData';


export const useCurrentWeather = (zipcode: string): (CurrentWeatherForecast | null) => {
  const currentWeather = useWeatherData<CurrentWeatherForecast>('https://api.openweathermap.org/data/2.5/weather', zipcode);

  // return current Weather
  return <CurrentWeatherForecast | null> currentWeather;
}