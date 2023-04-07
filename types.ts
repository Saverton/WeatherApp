export interface Coordinates {
  lon: number,
  lat: number,
}

interface Main {
  temp: number,
  ["feels_like"]: number,
  ["temp_min"]: number,
  ["temp_max"]: number,
  pressure: number,
  humidity: number,
  ["sea_level"]?: number,
  ["ground_level"]?: number,
  ["temp_kf"]: number,
}

interface Weatherinterface {
  id: number,
  main: string,
  description: string,
  icon: string,
}

interface Wind {
  speed: number,
  deg: number,
  gust?: number,
}

interface Clouds {
  all: number,
}

interface Rain {
  [key: string]: string,
}

interface City {
  id: number,
  name: string,
  coord: Coordinates,
  country: string,
  population: number,
  timezone: number,
  sunrise: number,
  sunset: number,
}

export interface WeatherForecast {
  weather: Weatherinterface[];
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  rain?: Rain;
  dt_txt?: string;
}

export interface CurrentWeatherForecast extends WeatherForecast {
  coord: Coordinates;
  base: string;
  sys: { interface: number, id: number, country: string, sunrise: number, sunset: number };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface HourForecast extends WeatherForecast {
  ["dt_txt"]: string,
  sys: { pod: string },
  pop: number,
}

export interface HourlyWeatherForecast {
  cod: string,
  message: number,
  cnt: number,
  list: HourForecast[],
  city: City,
}

// Zip code state returns the zipcode itself, a function to change the zipcode, and a boolean stating if the zipcode is valid or not
export interface ZipCodeState {
  zipcode: string;
  setZipcode: Function;
  valid: boolean;
}

export interface FetchOptions {
  appid: string,
  units: string,
  zip?: string,
  lat?: number,
  lon?: number,
}