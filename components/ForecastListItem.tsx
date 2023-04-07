import React, { FC } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { WeatherForecast } from "../types";
import ForecastLabel from "./ForecastLabel";
import ForecastTemp from "./ForecastTemp";
import ForecastMetric from "./ForecastMetric";
import BoldLabel from "./BoldLabel";

interface ForecastListItemProps {
  item: WeatherForecast;
  time: string;
}

const ForecastListItem: FC<ForecastListItemProps> = ({ item, time = "Now" }) => {
  // destructure all necessary weather data
  const { name: location, weather, main , wind } = item;
  const [{ main: weatherType, description, icon }] = weather;
  const { speed: windSpeed } = wind;
  const { temp, feels_like: feelTemp, temp_min: loTemp, temp_max: hiTemp, humidity } = main;

  return (
    <View style={styles.container}>
      <View style={styles.timeView}>
        <BoldLabel text={time} />
      </View>
      <View style={styles.weatherView}>
        {/* weather Icon */}
        <Image source={{ uri: `https://openweathermap.org/img/wn/${icon}@2x.png` }} style={styles.weatherIcon} />
        <Text>{weatherType}</Text>
      </View>

      <View style={styles.tempGrid}>
        <View style={styles.tempGridRow}>
          <ForecastTemp labelText="current" temp={temp} />
          <ForecastTemp labelText="high" temp={hiTemp} />
        </View>
        <View style={styles.tempGridRow}>
          <ForecastTemp labelText="feels like" temp={feelTemp} />
          <ForecastTemp labelText="low" temp={loTemp} />
        </View>
      </View>

      <View style={styles.humidityWind}>
        <ForecastMetric labelText="humidity" metricText={`${humidity}%`} />
        <ForecastMetric labelText="wind speed" metricText={`${windSpeed} mph`} />
      </View>
    </View>
  );
}

export default ForecastListItem;

const styles = StyleSheet.create({
  container: {
    height: 110,
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
  },
  timeView: {
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  weatherView: {
    width: 100,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  weatherIcon: {
    width: 70,
    height: 70,
    objectFit: 'cover',
  },
  tempGrid: {
    width: 125,
    justifyContent: 'space-evenly',
  },
  tempGridRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  humidityWind: {
    borderColor: '#ddd',
    borderLeftWidth: 1,
    paddingLeft: 10,
    textAlign: 'right',
    justifyContent: 'space-around',
  },
});