import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { formatDate } from '../utils/formatDate';

type ForecastDateLabelProps = {
  date: string;
}

const ForecastDateLabel: React.FC<ForecastDateLabelProps> = ({ date }) => {

  return (
    <View style={styles.dateView}>
      <Text style={styles.dateText}>{formatDate(date)}</Text>
    </View>
  );
}

export default ForecastDateLabel;

const styles = StyleSheet.create({
  dateView: {
    backgroundColor: '#ddd',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 25,
  },
  dateText: {
    fontWeight: 'bold'
  },
})