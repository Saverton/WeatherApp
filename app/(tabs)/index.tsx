import { StyleSheet } from 'react-native';

import { View } from '../../components/Themed';
import ZipCodeSearch from '../../components/ZipCodeSearch';
import CurrentWeatherDisplay from '../../components/CurrentWeatherDisplay';

// interface TabOneScreenProps {
//   title: string;
// }

export default function TabOneScreen() {

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
