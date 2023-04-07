import { useEffect, useState } from "react";
import { Coordinates } from "../types";
import * as Location from 'expo-location';

interface LocationData extends Coordinates {
  allowed: boolean,
}

export const useCurrentLocation = (): LocationData => {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [locationPermission, setLocationPermission] = useState(false);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setLocationPermission(false);
        return;
      } else {
        setLocationPermission(true);
      }

      let location = await Location.getLastKnownPositionAsync({});
      setLocation(location);
    })();
  }, []);

  return {
    lat: location?.coords.latitude || 0,
    lon: location?.coords.longitude || 0,
    allowed: locationPermission,
  }
}