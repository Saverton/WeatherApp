import React, { useEffect, useState } from "react";
import { Text, View } from 'react-native';

import * as Location from 'expo-location';

const LocationTest: React.FC = () => {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.warn('failed to get location data');
        return;
      }

      let location = await Location.getLastKnownPositionAsync({});
      console.log(location);
      setLocation(location);
    })();
  }, []);

  return (
    <View>
      <Text>{location && JSON.stringify(location)}</Text>
    </View>
  );
}

export default LocationTest;