import { useEffect, useState } from "react";
import { CurrentWeatherForecast, FetchOptions, HourlyWeatherForecast } from "../types";
import { API_KEY } from "../assets/secret/apiKey";
import { useCurrentLocation } from "./useCurrentLocation";
import { isValidZipcode } from "../utils/isValidZipcode";
import { buildUri } from "../utils/buildUri";
import { fetchWeatherData } from "../utils/fetchWeatherData";

export const useWeatherData = (endpoint: string, zipcode: string): (HourlyWeatherForecast | CurrentWeatherForecast | null) => {
  const [data, setData] = useState<CurrentWeatherForecast | HourlyWeatherForecast | null>(null);
  const locationData = useCurrentLocation();

  useEffect(() => {
    const fetchOptions: FetchOptions = {
      appid: API_KEY,
      units: 'imperial',
    };

    // only fetch if the zipcode is formatted correctly, will cut down on excess fetches
    if (isValidZipcode(zipcode)) {
      // fetch with zip
      fetchOptions.zip = `${zipcode},us`;
    } else if (!data && locationData.allowed) {
      // fetch with lat/lon
      fetchOptions.lat = locationData.lat;
      fetchOptions.lon = locationData.lon;
    } else {
      return;
    }

    const uri = buildUri(endpoint, fetchOptions);

    fetchWeatherData(uri, setData);
  }, [zipcode, locationData]);

  // return forecast;
  return data;
}