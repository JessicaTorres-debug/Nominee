import React from 'react';
import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";


const PrimaryButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  buttonContainer: {
    width: 209,
    height: 42,
    borderRadius: 6,
    backgroundColor: '#dad7cd',
    // boxShadow: 4 3 6 rgba(0, 0, 0, 0.28),

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,

    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

export default PrimaryButton;
