export type WeatherForecast = {
  coord: { lon: number, lat: number };
  weather: { id: number, main: string, description: string, icon: string }[];
  base: string;
  main: { temp: number, ["feels_like"]: number, ["temp_min"]: number, ["temp_max"]: number, pressure: number, humidity: number };
  visibility: number;
  wind: { speed: number, deg: number };
  clouds: { all: number };
  dt: number;
  sys: { type: number, id: number, country: string, sunrise: number, sunset: number };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

// Zip code state returns the zipcode itself, a function to change the zipcode, and a boolean stating if the zipcode is valid or not
export interface ZipCodeState {
  zipcode: string;
  setZipcode: Function;
  valid: boolean;
}