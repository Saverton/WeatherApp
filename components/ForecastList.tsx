import React, { FC, useContext } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import ForecastListItem from "./ForecastListItem";
import { ZipCodeSearchContext } from "../context/ZipCodeSearchContext";
import { useHourlyForecast } from "../hooks/useHourlyForecast";

const ForecastList: FC = () => {
  const { zipcode } = useContext(ZipCodeSearchContext);
  const { list, location } = useHourlyForecast(zipcode);

  return (
    <View style={styles.container}>
      <FlatList
        data={list}
        renderItem={ForecastListItem} />
    </View>
  );
}

export default ForecastList;

const styles = StyleSheet.create({
  container: {

  },
})