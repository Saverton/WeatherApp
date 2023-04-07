import { StyleSheet, Text } from 'react-native';

import { View } from '../../components/Themed';
import ZipCodeSearch from '../../components/ZipCodeSearch';
import CurrentWeatherDisplay from '../../components/CurrentWeatherDisplay';
import { useWeatherData } from '../../hooks/useWeatherData';

export default function TabOneScreen() {
  // const data = useWeatherData('https://api.openweathermap.org/data/2.5/weather', '');
  // console.log(data);

  return (
    <View style={styles.container}>
      <ZipCodeSearch />
      <CurrentWeatherDisplay />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
