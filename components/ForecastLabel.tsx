import React from 'react';
import { Text, StyleSheet } from 'react-native';

type ForecastLabelProps = {
  text: string,
  size?: number,
}

const ForecastLabel: React.FC<ForecastLabelProps> = ({ text, size = 1 }) => {
  return (
    <Text style={[styles.label,{ fontSize: (size * 8) }]}>
      {text}
    </Text>
  )
}

export default ForecastLabel;

const styles = StyleSheet.create({
  label: {
    textTransform: 'uppercase',
    color: '#777',
  }
})