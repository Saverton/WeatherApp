import React, { FC } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import ForecastListItem from "./ForecastListItem";
import { useForecast } from "../hooks/useForecast";

const ForecastList: FC = () => {
  const data = useForecast("");

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={ForecastListItem} />
    </View>
  );
}

export default ForecastList;

const styles = StyleSheet.create({
  container: {

  },
})