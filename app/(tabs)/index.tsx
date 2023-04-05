import { StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { SearchBar } from 'react-native-screens';
import ZipCodeSearch from '../../components/ZipCodeSearch';
import ForecastList from '../../components/ForecastList';
import { ZipCodeSearchContext } from '../../context/ZipCodeSearchContext';
import { useZipCodeSearch } from '../../hooks/useZipCodeSearch';

// interface TabOneScreenProps {
//   title: string;
// }

export default function TabOneScreen() {
  const zipCodeState = useZipCodeSearch("");

  return (
    <View style={styles.container}>
      <ZipCodeSearchContext.Provider value={zipCodeState}>
        <ZipCodeSearch />
        <ForecastList />
      </ZipCodeSearchContext.Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
