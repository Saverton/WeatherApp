import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

export const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
      <Text style={styles.loadingText}>Loading...</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginBottom: 50,
  },
  loadingText: {
    textAlign: 'center',
  }
})
