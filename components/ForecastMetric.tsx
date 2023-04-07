import React from 'react';
import { Text, View } from 'react-native';
import ForecastLabel from './ForecastLabel';

type ForecastMetricProps = {
  labelText: string,
  metricText: string,
}

const ForecastMetric: React.FC<ForecastMetricProps> = ({ labelText, metricText }) => {
  return (
    <View>
      <ForecastLabel text={labelText} />
      <Text>{metricText}</Text>
    </View>
  );
}

export default ForecastMetric;