import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";
import { WeatherForecast } from "../types";

interface ForecastListItemProps {
  item: WeatherForecast;
}

const ForecastListItem: FC<ForecastListItemProps> = ({ item }) => {
  // destructure all necessary weather data
  const { name, weather, main , wind } = item;
  const [{ main: weatherType, description }] = weather;
  const { speed: windSpeed } = wind;
  const { temp, feels_like: feelTemp, temp_min: loTemp, temp_max: hiTemp, humidity } = main;

  return (
    <View style={styles.container}>
      <Text>Location: {name}</Text>
      <Text>Weather: {weatherType}</Text>
      <Text>Description: {description}</Text>
      <Text>Wind Speed: {windSpeed}</Text>
      <Text>Temp: {temp}</Text>
      <Text>Real Feel: {feelTemp}</Text>
      <Text>Low Temp: {loTemp}</Text>
      <Text>High Temp: {hiTemp}</Text>
      <Text>Humidity: {humidity}</Text>
    </View>
  );
}

export default ForecastListItem;

const styles = StyleSheet.create({
  container: {

  },
})