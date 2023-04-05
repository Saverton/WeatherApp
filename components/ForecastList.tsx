import React, { FC, useContext } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import ForecastListItem from "./ForecastListItem";
import { useForecast } from "../hooks/useForecast";
import { ZipCodeSearchContext } from "../context/ZipCodeSearchContext";

const ForecastList: FC = () => {
  const { zipcode } = useContext(ZipCodeSearchContext);
  const data = useForecast(zipcode);

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