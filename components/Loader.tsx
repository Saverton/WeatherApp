import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

export const Loader = () => {
  return (
    <Spinner
      visible
      textContent='Loading...'
      textStyle={styles.loadingText}
    />
  )
}

const styles = StyleSheet.create({
  loadingText: {
    textAlign: 'center',
    color: '#fff',
  }
})
