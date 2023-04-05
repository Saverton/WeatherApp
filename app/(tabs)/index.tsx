import { StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { SearchBar } from 'react-native-screens';
import ZipCodeSearch from '../../components/ZipCodeSearch';

// interface TabOneScreenProps {
//   title: string;
// }

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <ZipCodeSearch />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
