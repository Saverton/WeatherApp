import React, { useContext } from 'react';
import { View } from 'react-native';
import ForecastList from './ForecastList';
import { ZipCodeSearchContext } from '../context/ZipCodeSearchContext';
import { useHourlyForecast } from '../hooks/useHourlyForecast';
import Heading from './Heading';

const HourlyForecastDisplay: React.FC = () => {
  const { zipcode } = useContext(ZipCodeSearchContext);
  const { list, location } = useHourlyForecast(zipcode);

  return (
    <View>
      <Heading text={location} />
      <ForecastList list={list} />
    </View>
  );
}

export default HourlyForecastDisplay;