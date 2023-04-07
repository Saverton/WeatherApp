import { StyleSheet } from 'react-native';

import { View } from '../../components/Themed';
import ZipCodeSearch from '../../components/ZipCodeSearch';
import ForecastList from '../../components/ForecastList';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <ZipCodeSearch />
      <ForecastList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
