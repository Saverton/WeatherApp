import React, { FC } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { WeatherForecast } from "../types";
import ForecastTemp from "./ForecastTemp";
import ForecastMetric from "./ForecastMetric";
import BoldLabel from "./BoldLabel";
import { formatTime } from "../utils/formatTime";
import ForecastDateLabel from "./ForecastDateLabel";

interface ForecastListItemProps {
  item: WeatherForecast;
  index?: number;
}

const ForecastListItem: FC<ForecastListItemProps> = ({ item, index }) => {
  // destructure all necessary weather data
  const { weather, main, wind, dt_txt: time } = item;
  const [{ main: weatherType, description, icon }] = weather;
  const { speed: windSpeed } = wind;
  const { temp, feels_like: feelTemp, temp_min: loTemp, temp_max: hiTemp, humidity } = main;

  const formattedTime = time ? formatTime(time) : "Now";

  return (
    <>
    {
      (time && (formattedTime === '12 AM' || index === 0)) &&
      <ForecastDateLabel date={time} />
    }
    <View style={styles.container}>
      <View style={styles.timeView}>
        <BoldLabel text={formattedTime} />
      </View>
      <View style={styles.weatherView}>
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
    </>
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