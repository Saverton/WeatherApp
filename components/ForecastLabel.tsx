import React from 'react';
import { Text, StyleSheet } from 'react-native';

type ForecastLabelProps = {
  text: string
}

const ForecastLabel: React.FC<ForecastLabelProps> = ({ text }) => {
  return (
    <Text style={styles.label}>
      {text}
    </Text>
  )
}

export default ForecastLabel;

const styles = StyleSheet.create({
  label: {
    fontSize: 8,
    textTransform: 'uppercase',
    color: '#777',
  }
})