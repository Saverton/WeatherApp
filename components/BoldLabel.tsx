import React from 'react';
import { Text, StyleSheet } from 'react-native';

type BoldLabelProps = {
  text: string,
}

const BoldLabel: React.FC<BoldLabelProps> = ({ text }) => (
  <Text style={styles.text}>{text}</Text>
);

export default BoldLabel;

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
  }
})