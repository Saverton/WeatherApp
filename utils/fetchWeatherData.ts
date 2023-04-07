import { CurrentWeatherForecast, HourlyWeatherForecast } from "../types";

export const fetchWeatherData = (uri: string, dataCallback: Function): void => {
  fetch(uri)
    .then(r => {
      if (r.ok) {
        r.json().then((data: (CurrentWeatherForecast | HourlyWeatherForecast)): void => { 
          dataCallback(data);  
        });
      } else {
        console.warn('something went wrong while fetching.');
      }
    });
}