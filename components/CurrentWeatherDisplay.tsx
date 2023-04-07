import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { ZipCodeSearchContext } from '../context/ZipCodeSearchContext';
import { useCurrentWeather } from '../hooks/useCurrentWeather';
import ForecastTemp from './ForecastTemp';
import ForecastWeatherTypeDisplay from './ForecastWeatherTypeDisplay';
import ForecastMetric from './ForecastMetric';

const CurrentWeatherDisplay: React.FC = () => {
  const { zipcode } = useContext(ZipCodeSearchContext);
  const currentWeather = useCurrentWeather(zipcode);

  if (!currentWeather) {
    return <Text>Empty</Text>
  }

  const { weather, main, wind, } = currentWeather;
  const [{ main: weatherType, description, icon }] = weather;
  const { speed: windSpeed } = wind;
  const { temp, feels_like: feelTemp, temp_min: loTemp, temp_max: hiTemp, humidity } = main;

  return (
    <View style={styles.container}>
      <View style={styles.mainContentView}>
        <View>
          <Image source={{ uri: `https://openweathermap.org/img/wn/${icon}@4x.png` }} style={styles.weatherIcon} />
          <ForecastWeatherTypeDisplay type={weatherType} description={description} />
        </View>
        <View>
          <View style={styles.tempDisplay}>
            <ForecastTemp labelText="temperature" temp={temp} size={2} />
          </View>
          <View style={styles.tempDisplay}>
            <ForecastTemp labelText="feels like" temp={feelTemp} size={2} />
          </View>
        </View>
      </View>

      <View style={styles.hiLoContainer}>
        <ForecastTemp labelText='high temp' temp={hiTemp} size={2} />
        <ForecastTemp labelText='low temp' temp={loTemp} size={2} />
      </View>

      <View style={styles.humidityWindContainer}>
        <ForecastMetric labelText='humidity' metricText={`${humidity}%`} size={2} />
        <ForecastMetric labelText='wind speed' metricText={`${windSpeed} mph`} size={2} />
      </View>
    </View>
  );
}

export default CurrentWeatherDisplay;

const styles = StyleSheet.create({
  container: {
    
  },
  mainContentView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  weatherTypeView: {
    alignItems: 'center',
  },
  weatherIcon: {
    width: 120,
    height: 120,
    objectFit: 'cover',
  },
  tempDisplay: {
    flex: 1,
  },
  hiLoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    backgroundColor: '#eaeaea',
  },
  humidityWindContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
  }
});