import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ForecastLabel from './ForecastLabel';

type ForecastMetricProps = {
  labelText: string,
  metricText: string,
  size?: number,
}

const ForecastMetric: React.FC<ForecastMetricProps> = ({ labelText, metricText, size = 1 }) => {
  return (
    <View>
      <ForecastLabel text={labelText} size={size} />
      <Text style={{ fontSize: (size * 16) }}>{metricText}</Text>
    </View>
  );
}

export default ForecastMetric;