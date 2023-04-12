import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import ForecastList from './ForecastList';
import { ZipCodeSearchContext } from '../context/ZipCodeSearchContext';
import { useHourlyForecast } from '../hooks/useHourlyForecast';
import Heading from './Heading';
import NoData from './NoData';
import { Loader } from './Loader';

const HourlyForecastDisplay: React.FC = () => {
  const { zipcode } = useContext(ZipCodeSearchContext);
  const { list, location, loading } = useHourlyForecast(zipcode);

  if (loading) {
    return <Loader />
  } else if (list.length < 1) {
    return <NoData />
  }

  return (
    <View>
      <Heading text={location} />
      <ForecastList list={list} />
    </View>
  );
}

export default HourlyForecastDisplay;