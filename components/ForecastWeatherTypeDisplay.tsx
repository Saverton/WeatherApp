import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

type ForecastWeatherTypeDisplayProps = {
  type: string,
  description: string,
}

const ForecastWeatherTypeDisplay: React.FC<ForecastWeatherTypeDisplayProps> = ({ type, description }) => {

  return (
    <View>
      <Text style={styles.typeText}>{type}</Text>
      <Text style={styles.descriptionText}>{description}</Text>
    </View>
  );
}

export default ForecastWeatherTypeDisplay;

const styles = StyleSheet.create({
  typeText: {
    fontSize: 20,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  descriptionText: {
    fontSize: 14,
    color: '#777',
    textAlign: 'center',
  }
})