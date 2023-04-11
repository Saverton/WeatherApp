import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Heading from './Heading';

const NoData: React.FC = () => {

  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="cloud-search-outline" size={100} />
      <Text style={styles.mainText}>We don't know where to look!</Text>
      <Text style={styles.subText}>To see the weather you must either allow the app to access your current location or enter a valid zip code above.</Text>
    </View>
  );
}

export default NoData;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 20,
  },
  mainText: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10,
  },
  subText: {
    width: 300,
    textAlign: 'center',
    fontSize: 16,
  }
});