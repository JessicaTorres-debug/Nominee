import React from 'react';
import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";


const PackOption = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  buttonContainer: {
    width: 280,
    height: 102,
    borderRadius: 24,
    backgroundColor: '#dad7cd',
    // box- shadow: 4px 3px 6px rgba(0, 0, 0, 0.28);

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.28,
    shadowRadius: 2.22,
    elevation: 3,
  },
  buttonText: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});

export default PackOption;
