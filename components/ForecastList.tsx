import React from "react";
import { FlatList, StyleSheet } from "react-native";
import ForecastListItem from "./ForecastListItem";
import { WeatherForecast } from "../types";

type ForecastListProps = {
  list: WeatherForecast[];
}

const ForecastList: React.FC<ForecastListProps> = ({ list }) => {
  return (
    <FlatList
      data={list}
      renderItem={ForecastListItem}
      style={styles.list} />
  );
}

export default ForecastList;

const styles = StyleSheet.create({
  list: {
    marginBottom: 200,
  }
})