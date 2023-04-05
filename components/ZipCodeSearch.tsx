import React, { FC } from 'react';
import { TextInput, Text, View, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useZipCodeSearch } from '../hooks/useZipCodeSearch';

const ZipCodeSearch: FC = () => {
  const { zipcode, setZipcode, valid } = useZipCodeSearch("");

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder='Zip Code...'
        value={zipcode}
        onChangeText={(text) => setZipcode(text)} />
      <FontAwesome name="search" size={20} style={styles.searchIcon} />
      <Text style={[styles.label, (!valid && styles.errorLabel)]}>
        { valid ? "valid zip code" : "invalid zip code" }
      </Text>
    </View>
  );
}

export default ZipCodeSearch;

const styles = StyleSheet.create({
  input: {
    margin: 15,
    marginBottom: 0,
    padding: 8,
    backgroundColor: '#ddd',
    fontSize: 16,
    borderRadius: 5,
  },
  searchIcon: {
    position: 'absolute',
    top: 26,
    right: 25,
  },
  label: {
    marginLeft: 15,
    marginBottom: 15,
  },
  errorLabel: {
    color: '#d00',
  },
})