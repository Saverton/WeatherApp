import { useEffect, useState } from "react";
import { FetchOptions } from "../types";
import { API_KEY } from "../assets/secret/apiKey";
import { useCurrentLocation } from "./useCurrentLocation";
import { isValidZipcode } from "../utils/isValidZipcode";
import { buildUri } from "../utils/buildUri";
import { fetchWeatherData } from "../utils/fetchWeatherData";

export const useWeatherData = <Type>(endpoint: string, zipcode: string): (Type | null) => {
  const [data, setData] = useState<Type | null>(null);
  const [lastFetch, setLastFetch] = useState('');
  const locationData = useCurrentLocation();

  useEffect(() => {
    const fetchOptions: FetchOptions = {
      appid: API_KEY,
      units: 'imperial',
    };

    console.log('in useEffect');

    // only fetch if the zipcode is formatted correctly, will cut down on excess fetches
    if (lastFetch !== zipcode && isValidZipcode(zipcode)) {
      // fetch with zip
      fetchOptions.zip = `${zipcode},us`;
      setLastFetch(zipcode);
    } else if (lastFetch === '' && !data && locationData.allowed) {
      // fetch with lat/lon
      fetchOptions.lat = locationData.lat;
      fetchOptions.lon = locationData.lon;
      setLastFetch('location');
    } else {
      return;
    }

    const uri = buildUri(endpoint, fetchOptions);

    fetchWeatherData(uri, setData);
  }, [zipcode, locationData]);

  console.log('zipcode:', zipcode);

  return data;
}